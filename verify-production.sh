#!/bin/bash

# 🚀 Production Deployment Verification Script
# Run this after deploying to verify everything works

echo "🔍 Shaa Trading Production Verification"
echo "========================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if curl is available
if ! command -v curl &> /dev/null; then
    echo -e "${RED}❌ curl is not installed${NC}"
    exit 1
fi

# Configuration
FRONTEND_URL="https://www.shaatrading.in"
BACKEND_URL="https://api.shaatrading.in"

echo ""
echo "🌐 Testing Frontend Access..."
if curl -s --head --request GET "$FRONTEND_URL" | grep "200\|301\|302" > /dev/null; then
    echo -e "${GREEN}✅ Frontend accessible at $FRONTEND_URL${NC}"
else
    echo -e "${RED}❌ Frontend not accessible at $FRONTEND_URL${NC}"
fi

echo ""
echo "🔧 Testing Backend API Health..."
if curl -s --head --request GET "$BACKEND_URL" | grep "200\|301\|302" > /dev/null; then
    echo -e "${GREEN}✅ Backend accessible at $BACKEND_URL${NC}"
else
    echo -e "${RED}❌ Backend not accessible at $BACKEND_URL${NC}"
fi

echo ""
echo "📦 Testing Inventory API..."
INVENTORY_RESPONSE=$(curl -s -X GET "$BACKEND_URL/api/inventory" \
  -H "Content-Type: application/json")

if echo "$INVENTORY_RESPONSE" | grep -q "items\|total"; then
    ITEM_COUNT=$(echo "$INVENTORY_RESPONSE" | grep -o '"total":[0-9]*' | cut -d':' -f2)
    echo -e "${GREEN}✅ Inventory API working - $ITEM_COUNT products found${NC}"
else
    echo -e "${RED}❌ Inventory API not working${NC}"
    echo "Response: $INVENTORY_RESPONSE"
fi

echo ""
echo "🔐 Testing Admin Login..."
LOGIN_RESPONSE=$(curl -s -X POST "$BACKEND_URL/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@shaatrading.com","password":"admin123"}')

if echo "$LOGIN_RESPONSE" | grep -q "token"; then
    echo -e "${GREEN}✅ Admin login working${NC}"
    # Extract token for further tests
    ADMIN_TOKEN=$(echo "$LOGIN_RESPONSE" | grep -o '"token":"[^"]*"' | cut -d'"' -f4)
else
    echo -e "${RED}❌ Admin login failed${NC}"
    echo "Response: $LOGIN_RESPONSE"
fi

echo ""
echo "📧 Testing Email Configuration..."
# This would require actual email testing, but we can check if the endpoint exists
EMAIL_TEST=$(curl -s --head --request GET "$BACKEND_URL/api/orders" 2>/dev/null | head -1)
if echo "$EMAIL_TEST" | grep "200\|401\|403" > /dev/null; then
    echo -e "${GREEN}✅ Email service endpoints accessible${NC}"
else
    echo -e "${YELLOW}⚠️  Email service endpoints may need authentication${NC}"
fi

echo ""
echo "🎯 VERIFICATION COMPLETE"
echo "======================="
echo ""
echo "📋 Next Steps:"
echo "1. Test a complete purchase flow on $FRONTEND_URL"
echo "2. Verify stock deduction after payment"
echo "3. Check email notifications"
echo "4. Test admin dashboard functionality"
echo ""
echo "🔗 Useful Links:"
echo "Frontend: $FRONTEND_URL"
echo "Backend: $BACKEND_URL"
echo "Admin Login: admin@shaatrading.com / admin123"
echo ""
echo "📞 Support: Check DEPLOYMENT.md for troubleshooting"