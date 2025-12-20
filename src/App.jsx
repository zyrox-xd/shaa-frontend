import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ShoppingBag, Menu, X, Instagram, Facebook, Linkedin, ArrowRight, Trash2, Plus, Minus, Mail, Phone, MapPin, ShieldCheck, Building2, Stethoscope, FileText, Award, Search, ChevronRight, Check, ChevronDown, Sparkles, Truck, Globe, ArrowLeft, Grid, List, ArrowUpDown, Thermometer, Clock, User, SlidersHorizontal, Printer, Download ,Quote} from 'lucide-react';
import Footer from './components/Footer';
import Ticker from './components/Ticker';
import PRODUCTS from './data/products';
import BLOG_POSTS from './data/blogs';
import CATEGORIES from './data/categories';
import FAQS from './data/faqs';
import BRANDS_LIST from './data/brands';

/* --- EMAILJS CONFIGURATION (SHAA TRADING) --- */
const EMAILJS_SERVICE_ID = "service_h64g36k";
const EMAILJS_TEMPLATE_ID = "template_5gaadeg";
const EMAILJS_PUBLIC_KEY = "4025kcdA_kwN4-yDH";

/* --- API CONFIGURATION --- */
const BASE_URL = "https://shaatrading-backend.onrender.com";
const API_BASE_URL = BASE_URL; // existing code keeps working


/* --- RAZORPAY CONFIGURATION --- */
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || '';
if (!RAZORPAY_KEY_ID && import.meta.env.MODE === 'development') {
  console.warn('VITE_RAZORPAY_KEY_ID not set. Add it to your .env file to test payments.');
}

/* --- Data & Constants --- */
// `BRANDS_LIST` and `FAQS` moved to `src/data/brands.js` and `src/data/faqs.js` and imported above

// Blog posts moved to `src/data/blogs.js` and imported above

// IDs for homepage bestselling products. Update this array to change displayed items.
const BEST_SELLER_IDS = [33, 62, 20, 14]; 



// Categories moved to `src/data/categories.js` and imported above

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  const bgColors = {
    success: 'bg-black text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-gray-800 text-white'
  };

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] px-6 py-3 rounded-full shadow-xl flex items-center gap-3 transition-all duration-300 animate-slide-up ${bgColors[type] || bgColors.info}`}>
      {type === 'success' && <Check size={16} />}
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};

const Button = ({ children, variant = "primary", className = "", onClick, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 transition-all duration-300 font-medium tracking-wide text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-md";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 active:scale-95 shadow-sm hover:shadow-lg",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 active:scale-95 shadow-sm hover:shadow-md",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-black active:scale-95",
    ghost: "text-black hover:bg-gray-100"
  };
  return <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick} {...props}>{children}</button>;
};

const SectionHeader = ({ title, subtitle, center = true }) => (
  <div className={`mb-8 md:mb-12 ${center ? 'text-center' : ''}`}>
    <h2 className="font-serif text-3xl md:text-4xl text-black mb-3">{title}</h2>
    {subtitle && <p className="text-gray-600 font-light max-w-2xl mx-auto px-4">{subtitle}</p>}
    <div className={`h-0.5 w-20 bg-gray-800 mt-6 ${center ? 'mx-auto' : ''}`}></div>
  </div>
);

const Navigation = ({ 
  currentPage, 
  setCurrentPage, 
  cartCount, 
  toggleCart, 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  setShopFilter,
  setBrandFilter,
  searchQuery,
  setSearchQuery,
  user,           
  handleLogout    
}) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState({ categories: false, brands: false, account: false });

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value.length > 0 && currentPage !== 'shop') {
            setCurrentPage('shop');
        }
    };

    const toggleMobileSection = (section) => {
        setMobileExpanded(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
             <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
                
                {/* LEFT: HAMBURGER + SIMPLE NAME */}
                <div className="flex items-center gap-3 shrink-0">
                    <button className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-full" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
                        <Menu size={24} />
                    </button>

                    <div className="cursor-pointer" onClick={() => setCurrentPage('home')}>
                        <span className="text-base font-sans font-bold uppercase tracking-tight select-none">Shaa trading</span>
                    </div>
                </div>

                {/* DESKTOP NAV */}
                <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
                    <button onClick={() => setCurrentPage('home')} className={`text-sm font-medium tracking-wide ${currentPage === 'home' ? 'text-black' : 'text-gray-600 hover:text-black'}`}>Home</button>
                    
                    {/* Shop Dropdown */}
                    <div 
                        className="relative group"
                        onMouseEnter={() => setShopDropdownOpen(true)}
                        onMouseLeave={() => setShopDropdownOpen(false)}
                    >
                        <button 
                            onClick={() => { setShopFilter('All'); setBrandFilter('All Brands'); setCurrentPage('shop'); }} 
                            className={`flex items-center gap-1 text-sm font-medium tracking-wide py-6 ${currentPage === 'shop' ? 'text-black' : 'text-gray-600 hover:text-black'}`}
                        >
                            Shop <ChevronDown size={14}/>
                        </button>

                        <div className={`absolute top-full left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-[600px] bg-white shadow-xl border border-gray-100 rounded-xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 transition-all duration-200 origin-top ${shopDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                            <div>
                                <h4 className="font-serif text-lg mb-4 text-gray-900 border-b border-gray-100 pb-2">Categories</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <button onClick={() => { setShopFilter('All'); setCurrentPage('shop'); setShopDropdownOpen(false); }} className="text-left text-sm text-gray-500 hover:text-black hover:bg-gray-50 p-1 rounded">View All</button>
                                    {CATEGORIES.map(cat => (
                                        <button key={cat.id} onClick={() => { setShopFilter(cat.name); setCurrentPage('shop'); setShopDropdownOpen(false); }} className="text-left text-sm text-gray-500 hover:text-black hover:bg-gray-50 p-1 rounded">{cat.name}</button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-serif text-lg mb-4 text-gray-900 border-b border-gray-100 pb-2">Top Brands</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <button onClick={() => { setBrandFilter('All Brands'); setCurrentPage('shop'); setShopDropdownOpen(false); }} className="text-left text-sm text-gray-500 hover:text-black hover:bg-gray-50 p-1 rounded">All Brands</button>
                                    {BRANDS_LIST.slice(1, 12).map(brand => (
                                        <button key={brand} onClick={() => { setBrandFilter(brand); setCurrentPage('shop'); setShopDropdownOpen(false); }} className="text-left text-sm text-gray-500 hover:text-black hover:bg-gray-50 p-1 rounded">{brand}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button onClick={() => setCurrentPage('blog')} className={`text-sm font-medium tracking-wide ${currentPage === 'blog' ? 'text-black' : 'text-gray-600 hover:text-black'}`}>Blog</button>
                    <button onClick={() => setCurrentPage('contact')} className={`text-sm font-medium tracking-wide ${currentPage === 'contact' ? 'text-black' : 'text-gray-600 hover:text-black'}`}>Contact</button>
                </nav>

                {/* ICONS & SEARCH */}
                <div className="flex items-center gap-2 md:gap-4 shrink-0">
                    <div className={`flex items-center bg-gray-100 rounded-full transition-all duration-300 overflow-hidden ${isSearchOpen ? 'w-48 md:w-64 px-3' : 'w-10 h-10 justify-center bg-transparent hover:bg-gray-100'}`}>
                         <Search 
                            size={20} 
                            className="text-gray-800 cursor-pointer shrink-0" 
                            onClick={() => {
                                setIsSearchOpen(!isSearchOpen); 
                                if(!isSearchOpen) setTimeout(() => document.getElementById('nav-search')?.focus(), 100);
                            }} 
                         />
                         <input 
                            id="nav-search"
                            type="text" 
                            placeholder="Search..." 
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className={`bg-transparent border-none outline-none text-sm ml-2 w-full ${isSearchOpen ? 'block' : 'hidden'}`}
                         />
                         {isSearchOpen && searchQuery && (
                             <button onClick={() => setSearchQuery('')}><X size={14} className="text-gray-400"/></button>
                         )}
                    </div>

                    {/* USER DROPDOWN (DESKTOP) */}
                    <div 
                        className="relative hidden lg:block"
                        onMouseEnter={() => setUserDropdownOpen(true)}
                        onMouseLeave={() => setUserDropdownOpen(false)}
                    >
                        <button className="p-2 text-gray-800 hover:text-black hover:bg-gray-100 rounded-full transition-colors">
                            <User size={22} />
                        </button>
                        
                        <div className={`absolute top-full right-0 w-48 bg-white shadow-xl border border-gray-100 rounded-xl p-2 transition-all duration-200 origin-top-right ${userDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                            {user ? (
                                <>
                                    <div className="px-3 py-2 border-b border-gray-50 mb-1">
                                        <p className="text-xs text-gray-500">Signed in as</p>
                                        <p className="text-sm font-bold truncate">{user.name}</p>
                                    </div>
                                    <button onClick={() => { setCurrentPage('orders'); setUserDropdownOpen(false); }} className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded flex items-center gap-2"><ShoppingBag size={14}/> My Orders</button>
                                    <button onClick={() => { setCurrentPage('track'); setUserDropdownOpen(false); }} className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded flex items-center gap-2"><Truck size={14}/> Track Order</button>
                                    
                                    {/* --- SECURITY CHECK HERE --- */}
                                    {user.isAdmin && (
                                        <button onClick={() => { setCurrentPage('admin'); setUserDropdownOpen(false); }} className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded flex items-center gap-2"><ShieldCheck size={14}/> Admin Panel</button>
                                    )}
                                    {/* --------------------------- */}

                                    <button onClick={() => { handleLogout(); setUserDropdownOpen(false); }} className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded mt-1 flex items-center gap-2"><ArrowRight size={14}/> Logout</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => { setCurrentPage('login'); setUserDropdownOpen(false); }} className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">Login</button>
                                    <button onClick={() => { setCurrentPage('signup'); setUserDropdownOpen(false); }} className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">Register</button>
                                    <div className="h-px bg-gray-50 my-1"></div>
                                    <button onClick={() => { setCurrentPage('track'); setUserDropdownOpen(false); }} className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded flex items-center gap-2"><Truck size={14}/> Track Order</button>
                                </>
                            )}
                        </div>
                    </div>

                    <button className="relative p-2 text-gray-800 hover:text-black hover:bg-gray-100 rounded-full transition-colors" onClick={toggleCart}>
                        <ShoppingBag size={22} />
                        {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">{cartCount}</span>}
                    </button>
                    

                </div>
             </div>
            </header>
            
            {/* MOBILE DRAWER */}
            <div className={`fixed inset-0 z-[60] flex ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileMenuOpen(false)} />
                <div className={`relative bg-white w-[85%] max-w-xs h-full shadow-2xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex flex-col h-full">
                        <div className="p-6 flex justify-between items-center border-b border-gray-100">
                            <span className="text-xl font-serif tracking-wide">Shaa trading</span>
                            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-black"><X size={24} /></button>
                        </div>
                        <div className="flex-1 overflow-y-auto py-4">
                            <div className="flex flex-col">
                                <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 border-b border-gray-50">Home</button>
                                
                                <div className="border-b border-gray-50">
                                    <button onClick={() => { setShopFilter('All'); setBrandFilter('All Brands'); setCurrentPage('shop'); setMobileMenuOpen(false); }} className="w-full px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 bg-gray-50/50">Shop All</button>
                                    
                                    <button onClick={() => toggleMobileSection('categories')} className="w-full px-6 py-3 text-left flex justify-between items-center text-sm font-bold text-gray-500 uppercase tracking-widest bg-white">
                                        Categories <ChevronDown size={14} className={`transition-transform ${mobileExpanded.categories ? 'rotate-180' : ''}`}/>
                                    </button>
                                    {mobileExpanded.categories && (
                                        <div className="bg-gray-50 px-6 py-2 space-y-2">
                                            {CATEGORIES.map(cat => (
                                                <button key={cat.id} onClick={() => { setShopFilter(cat.name); setCurrentPage('shop'); setMobileMenuOpen(false); }} className="block w-full text-left text-sm text-gray-600 py-1">{cat.name}</button>
                                            ))}
                                        </div>
                                    )}

                                    <button onClick={() => toggleMobileSection('brands')} className="w-full px-6 py-3 text-left flex justify-between items-center text-sm font-bold text-gray-500 uppercase tracking-widest bg-white border-t border-gray-50">
                                        Brands <ChevronDown size={14} className={`transition-transform ${mobileExpanded.brands ? 'rotate-180' : ''}`}/>
                                    </button>
                                    {mobileExpanded.brands && (
                                        <div className="bg-gray-50 px-6 py-2 space-y-2 max-h-60 overflow-y-auto">
                                            {BRANDS_LIST.map(brand => (
                                                <button key={brand} onClick={() => { setBrandFilter(brand); setCurrentPage('shop'); setMobileMenuOpen(false); }} className="block w-full text-left text-sm text-gray-600 py-1">{brand}</button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <button onClick={() => { setCurrentPage('blog'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 border-b border-gray-50">Blog</button>
                                
                                {/* Mobile Account Section */}
                                <button onClick={() => toggleMobileSection('account')} className="w-full px-6 py-4 text-left flex justify-between items-center text-gray-800 font-medium hover:bg-gray-50 border-b border-gray-50">
                                    Account {user && <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full ml-2">Logged In</span>}
                                    <ChevronDown size={14} className={`transition-transform ${mobileExpanded.account ? 'rotate-180' : ''}`}/>
                                </button>
                                {mobileExpanded.account && (
                                    <div className="bg-gray-50 px-6 py-4 space-y-3">
                                        {user ? (
                                            <>
                                                <button onClick={() => { setCurrentPage('track'); setMobileMenuOpen(false); }} className="block w-full text-left text-sm text-gray-600">Track Orders</button>
                                                
                                                {/* --- SECURITY CHECK HERE (MOBILE) --- */}
                                                {user.isAdmin && (
                                                    <button onClick={() => { setCurrentPage('admin'); setMobileMenuOpen(false); }} className="block w-full text-left text-sm text-gray-600">Admin Panel</button>
                                                )}
                                                {/* ------------------------------------ */}

                                                <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="block w-full text-left text-sm text-red-500">Logout</button>
                                            </>
                                        ) : (
                                            <>
                                                <button onClick={() => { setCurrentPage('login'); setMobileMenuOpen(false); }} className="block w-full text-left text-sm text-gray-600">Login</button>
                                                <button onClick={() => { setCurrentPage('signup'); setMobileMenuOpen(false); }} className="block w-full text-left text-sm text-gray-600">Register</button>
                                                <button onClick={() => { setCurrentPage('track'); setMobileMenuOpen(false); }} className="block w-full text-left text-sm text-gray-600">Track Order</button>
                                            </>
                                        )}
                                    </div>
                                )}

                                <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 border-b border-gray-50">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};;

const PaymentSuccessView = ({ navigateTo, showToast, transactionId }) => {
    const [status, setStatus] = useState('processing');
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
      const processOrder = async () => {
        const storedCart = JSON.parse(localStorage.getItem('temp_cart') || '[]');
        const storedUser = JSON.parse(localStorage.getItem('temp_user') || '{}');
        
        const queryParams = new URLSearchParams(window.location.search);
        const txnId = transactionId || queryParams.get('tid') || 'DEMO-' + Date.now();
  
        if (storedCart.length === 0) {
          // If no cart, maybe it was already cleared. Try to allow state to settle or redirect.
          // For now, if no data, we can't show a detailed receipt, so just show a simple message or redirect
          console.warn("No stored cart found");
          // setStatus('sent'); // Or redirect to home
          return;
        }

        const totalAmount = storedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        // Save details to state for rendering the receipt
        setOrderDetails({
            cart: storedCart,
            user: storedUser,
            total: totalAmount,
            id: txnId,
            date: new Date().toLocaleDateString()
        });
  
        const orderItemsHTML = storedCart.map(item => 
          `• ${item.name} (Brand: ${item.brand}) - Qty: ${item.quantity} | Price: ₹${item.price}`
        ).join('\n');
  
        const emailParams = {
          to_name: "Admin", 
          customer_name: storedUser.name,
          customer_email: storedUser.email || "Not Provided", 
          customer_phone: storedUser.phone,
          shipping_address: storedUser.address,
          order_items: orderItemsHTML,
          total_amount: totalAmount.toLocaleString(),
          payment_id: txnId,
          order_id: txnId
        };
  
        try {
          if (!window.emailjs) {
              const script = document.createElement('script');
              script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
              script.async = true;
              document.body.appendChild(script);
              await new Promise(resolve => script.onload = resolve);
          }
          
          await window.emailjs.send(
            EMAILJS_SERVICE_ID, 
            EMAILJS_TEMPLATE_ID, 
            emailParams, 
            EMAILJS_PUBLIC_KEY
          );
          
          localStorage.removeItem('temp_cart');
          localStorage.removeItem('temp_user');
          setStatus('sent');
          showToast("Order confirmed and email sent!", "success");

        } catch (error) {
          console.error('Email Failed:', error);
          setStatus('error'); 
          showToast("Payment successful but email failed.", "error");
        }
      };
  
      processOrder();
    }, [transactionId, showToast]);
  
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 md:p-8">
        {status === 'processing' && (
          <div className="animate-pulse text-center">
            <h2 className="text-2xl font-serif mb-2">Finalizing Order...</h2>
            <p className="text-gray-500">Please do not close this window.</p>
          </div>
        )}
  
        {status === 'sent' && orderDetails && (
          <div className="animate-fade-in bg-white w-full max-w-2xl shadow-xl rounded-2xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-green-50 p-8 text-center border-b border-green-100">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Check size={32} strokeWidth={3} />
                </div>
                <h2 className="text-3xl font-serif text-gray-900 mb-2">Thank you for your order!</h2>
                <p className="text-gray-500">Your order has been confirmed and is being processed.</p>
                <div className="mt-4 inline-block bg-white px-4 py-2 rounded-lg border border-green-200 text-sm font-medium text-green-800">
                    Order #{orderDetails.id.slice(-8).toUpperCase()}
                </div>
            </div>

            {/* Order Details Body */}
            <div className="p-8">
                {/* Customer Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-gray-100">
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Shipping Details</h4>
                        <p className="font-medium text-gray-900">{orderDetails.user.name}</p>
                        <p className="text-gray-500 text-sm mt-1">{orderDetails.user.address}</p>
                        <p className="text-gray-500 text-sm mt-1">{orderDetails.user.phone}</p>
                        <p className="text-gray-500 text-sm">{orderDetails.user.email}</p>
                    </div>
                    <div className="md:text-right">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Order Info</h4>
                        <p className="text-gray-500 text-sm">Date: <span className="text-gray-900 font-medium">{orderDetails.date}</span></p>
                        <p className="text-gray-500 text-sm mt-1">Payment Method: <span className="text-gray-900 font-medium">Online (Razorpay)</span></p>
                        <p className="text-gray-500 text-sm mt-1">Status: <span className="text-green-600 font-medium">Paid</span></p>
                    </div>
                </div>

                {/* Order Items */}
                <div className="mb-8">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Order Summary</h4>
                    <div className="space-y-4">
                        {orderDetails.cart.map((item) => (
                            <div key={item.id} className="flex justify-between items-start">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-gray-50 rounded-md overflow-hidden shrink-0 border border-gray-100">
                                        <img loading="lazy" src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</p>
                                        <p className="text-xs text-gray-500">Qty: {item.quantity} × ₹{item.price.toLocaleString()}</p>
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <span className="text-gray-600 font-medium">Total Amount Paid</span>
                    <span className="text-2xl font-serif text-gray-900">₹{orderDetails.total.toLocaleString()}</span>
                </div>
            </div>

            {/* Actions Footer */}
            <div className="bg-gray-50 p-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <button onClick={() => window.print()} className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors">
                    <Printer size={16} /> Print Receipt
                </button>
                <Button onClick={() => { window.history.replaceState(null, "", "/"); navigateTo('home'); }} className="w-full sm:w-auto">
                    Continue Shopping
                </Button>
            </div>
          </div>
        )}
  
        {status === 'error' && (
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border-l-4 border-red-500">
             <h2 className="text-2xl font-serif text-red-500 mb-2">Something went wrong</h2>
             <p className="text-gray-500 mb-6">We received your payment, but couldn't generate the email receipt automatically. Please contact support.</p>
             <Button onClick={() => navigateTo('contact')}>Contact Support</Button>
          </div>
        )}
      </div>
    );
};

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart, checkout }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '', 
        address: ''
      });
    
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const isFormValid = formData.name && formData.phone && formData.address && formData.email;
    
      const handleInputChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
    
      if (!isOpen) return null;
    
      return (
        <div className="fixed inset-0 z-[60] flex justify-end">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-slide-in">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="font-serif text-2xl">Your Cart</h2>
                    <button onClick={onClose}><X size={20}/></button>
                </div>
                <div className="flex-1 overflow-y-auto p-6">
                      {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
                            <ShoppingBag size={48} strokeWidth={1} className="mb-4 text-gray-200" />
                            <p className="text-lg font-light">Your cart is empty</p>
                            <button onClick={onClose} className="mt-4 text-gray-800 hover:text-black transition-colors font-medium text-sm">Continue Shopping</button>
                        </div>
                      ) : (
                        <div className="space-y-6">
                            {cart.map(item => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden shrink-0">
                                        <img loading="lazy" src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-serif text-lg leading-tight">{item.name}</h3>
                                            <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-400 transition-colors p-1"><Trash2 size={16} /></button>
                                        </div>
                                        <p className="text-gray-800 text-sm mb-3">₹{item.price.toLocaleString()}</p>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center border border-gray-200 rounded">
                                                <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 hover:bg-gray-50 text-gray-600"><Minus size={12} /></button>
                                                <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 hover:bg-gray-50 text-gray-600"><Plus size={12} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                      )}
                </div>
                {cart.length > 0 && (
                    <div className="p-6 bg-gray-50 border-t border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-serif text-2xl">₹{total.toLocaleString()}</span>
                        </div>
                        <div className="space-y-3 mb-4">
                            <input name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} className="w-full p-2 border border-gray-200 rounded focus:border-gray-800 outline-none"/>
                            <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} className="w-full p-2 border border-gray-200 rounded focus:border-gray-800 outline-none"/>
                            <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} className="w-full p-2 border border-gray-200 rounded focus:border-gray-800 outline-none"/>
                            <textarea name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} className="w-full p-2 border border-gray-200 rounded focus:border-gray-800 outline-none resize-none"/>
                        </div>
                        <Button className="w-full" onClick={() => checkout(formData)} disabled={!isFormValid}>
                            Pay ₹{total.toLocaleString()}
                        </Button>
                    </div>
                )}
            </div>
        </div>
      )
};

const HomeView = ({ navigateTo, addToCart, setShopFilter }) => {
  // Select specific best-selling products
  const BEST_SELLERS = PRODUCTS.filter(p => [33, 62, 20, 14].includes(p.id));
  const NEW_LAUNCHES = PRODUCTS.filter(p => [20, 14].includes(p.id));

  // --- UPDATED CATEGORY DATA WITH PATHS ---
  const CATEGORY_LIST = [
    { id: 1, name: 'Injection', image: '/image/injection.jpeg' },
    { id: 2, name: 'Cream', image: '/image/cream.jpeg' },
    { id: 3, name: 'Weight', image: '/image/weight.jpeg' },
    { id: 4, name: 'Soap', image: '/image/soap.jpeg' },
    { id: 5, name: 'Combo', image: '/image/combo.jpeg' },
    { id: 6, name: 'Filler', image: '/image/filler.jpeg' },
    { id: 7, name: 'Supplement', image: '/image/supplement.jpeg' },
    { id: 8, name: 'Lotion', image: '/image/lotion.jpeg' },
  ];

  return (
    <div className="animate-fade-in bg-white">
      {/* --- PROMO BAR --- */}
      <div className="bg-[#e67e22] text-white py-2 text-center text-[11px] font-bold tracking-wider">
        PAN INDIA SHIPPING AND COLD CHAIN DELIVERY AVAILABLE!
      </div>
      {/* --- HERO BANNER --- */}
      <section className="relative bg-white pt-6 pb-12 overflow-hidden border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            <span className="bg-gray-100 text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded">New Launch</span>
            <h1 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
              Vitamin B12 + <br/> NMF 03% <span className="text-xl block mt-2 font-sans text-gray-500">Face Toner</span>
            </h1>
            <p className="text-gray-500 font-light text-sm max-w-md mx-auto md:mx-0">
              Restore balance to your skin's barrier with our new <span className="italic">calming & hydrating toner</span>.
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800">Soothe. Hydrate. Balance.</p>
            <button 
              onClick={() => navigateTo('shop')}
              className="bg-black text-white px-6 md:px-10 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all"
            >
              Shop Now
            </button>
          </div>
          <div className="relative order-1 md:order-2">
             <img src="/image/glutax-5gs-adv-12s.jpg" alt="Featured Product" className="w-full h-auto object-contain max-h-[400px]" />
          </div>
        </div>
      </section>

      {/* --- BEST SELLERS SLIDER --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-serif mb-8 text-gray-900">Our Best Sellers</h2>
          
          <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x">
            {BEST_SELLERS.map((product) => (
              <div key={product.id} className="min-w-[280px] md:min-w-[320px] snap-start group">
                <div 
                  className="bg-[#f9f9f9] aspect-[4/5] rounded-sm overflow-hidden mb-4 relative cursor-pointer"
                  onClick={() => navigateTo('product', product)}
                >
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain p-6 mix-blend-multiply" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <p className="text-xs text-gray-500 line-clamp-1">{product.description.replace(/<[^>]*>?/gm, '')}</p>
                  <p className="text-sm font-bold pt-2">On Sale from ₹{product.price.toLocaleString()}</p>
                </div>
                <div className="flex gap-2 mt-4">
                    <button 
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-black text-white py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800"
                    >
                        Add to Cart
                    </button>
                    <button 
                        onClick={() => navigateTo('product', product)}
                        className="flex-1 border border-gray-200 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50"
                    >
                        View Details
                    </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button onClick={() => navigateTo('shop')} className="border-b border-black pb-1 text-sm font-bold uppercase tracking-widest">View all products</button>
          </div>
        </div>
      </section>

      {/* --- SHOP BY CATEGORY (UPDATED) --- */}
      <section className="py-16 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-10 text-center">Shop by Category</h2>
          
          {/* Horizontal Scroll Container */}
          <div className="flex overflow-x-auto gap-8 pb-6 scrollbar-hide snap-x items-start">
             {/* Using the new CATEGORY_LIST defined at the top of the component */}
             {CATEGORY_LIST.map((cat) => (
               <div 
                key={cat.id} 
                onClick={() => { setShopFilter(cat.name); navigateTo('shop'); }}
                className="snap-start flex-shrink-0 flex flex-col items-center group cursor-pointer w-24 md:w-32"
               >
                 {/* Circular Image Tile */}
                 <div className="relative aspect-square w-full overflow-hidden rounded-full mb-4 bg-white border border-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:border-black/10">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                        <img 
                          src={cat.image} 
                          alt={cat.name}
                          onError={(e) => {e.target.src = '/image/logo.jpg'}} // Fallback to logo if file not found
                          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                        />
                    </div>
                 </div>
                 
                 {/* Category Label */}
                 <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-black text-center transition-colors">
                   {cat.name}
                 </span>
               </div>
             ))}
          </div>
        </div>
      </section>
      
      {/* --- SHOP BY CONCERN --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-serif mb-10 text-gray-900">Shop by Concerns</h2>
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
              {[
                { name: 'Uneven Tone', img: '/image/blog1.jpg' },
                { name: 'Acne Control', img: '/image/blog2.jpg' },
                { name: 'Aging', img: '/image/blog3.jpg' },
                { name: 'Brightening', img: '/image/blog4.jpg' }
              ].map((concern) => (
                <div 
                  key={concern.name} 
                  // --- ADDED ONCLICK HANDLER HERE ---
                  onClick={() => { setShopFilter(concern.name); navigateTo('shop'); }}
                  className="min-w-[160px] md:min-w-[240px] group cursor-pointer"
                >
                   <div className="aspect-[4/3] rounded-lg overflow-hidden mb-3">
                     <img src={concern.img} alt={concern.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                   </div>
                   <p className="text-center font-medium text-gray-800">{concern.name}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* --- NEW LAUNCHES --- */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-serif mb-8 text-gray-900 text-center">New Launches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {NEW_LAUNCHES.map(product => (
                <div key={product.id} className="flex flex-col items-center text-center">
                   <img src={product.image} className="h-64 object-contain mb-4" />
                   <h3 className="font-serif text-xl">{product.name}</h3>
                   <p className="text-sm text-gray-500 mt-1 mb-4">₹{product.price.toLocaleString()}</p>
                   <button 
                     onClick={() => addToCart(product)}
                     className="bg-black text-white w-full max-w-xs py-3 text-xs font-bold uppercase tracking-widest"
                   >
                     Add to Cart
                   </button>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
  // ---------- AUTH & ORDER PAGES ----------

// =========================
// LOGIN VIEW (FULL + FIXED)
// =========================

const LoginView = ({ navigateTo, setAuthToken, setUser, showToast }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("🔥 LOGIN RESPONSE:", data);

      if (!res.ok) {
        throw new Error(data.message || "Invalid login credentials");
      }

      const token = data.token || data.accessToken;

      // Your backend returns user fields at top-level → map directly
      const standardizedUser = {
        _id: data._id,
        name: data.name,
        email: data.email,
        isAdmin: Boolean(data.isAdmin), // ← critical fix
      };

      console.log("🔥 FINAL USER STORED:", standardizedUser);

      // Store auth details
      setAuthToken(token);
      setUser(standardizedUser);
      localStorage.setItem("shaa_token", token);
      localStorage.setItem("shaa_user", JSON.stringify(standardizedUser));

      showToast(`Welcome back, ${standardizedUser.name}`, "success");

      // Delay redirect slightly so React updates state
      setTimeout(() => {
        if (standardizedUser.isAdmin) {
          console.log("🔥 Redirecting: ADMIN PANEL");
          navigateTo("admin");
        } else {
          console.log("🔥 Redirecting: HOME");
          navigateTo("home");
        }
      }, 200);
    } catch (err) {
      console.error("🔥 LOGIN ERROR:", err);
      showToast(err.message || "Something went wrong", "error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Login to Your Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <span
            className="text-black underline cursor-pointer"
            onClick={() => navigateTo("signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

const SignupView = ({ navigateTo, showToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Signup failed');
      showToast('Account created. Please login.', 'success');
      navigateTo('login');
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Signup error', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row bg-white animate-fade-in">
       {/* Image Section - Flipped for visual variety */}
       <div className="w-full md:w-1/2 h-64 md:h-auto md:order-2 relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image/blog4.jpg')] bg-cover bg-center opacity-50 mix-blend-luminosity"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12 text-center">
            <h2 className="font-serif text-4xl mb-4">Join the Network</h2>
            <p className="font-light text-white/80 max-w-sm">Verified clinics receive priority dispatch, cold-chain assurance, and wholesale rates.</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 md:order-1 flex items-center justify-center p-8 md:p-16 bg-white">
        <div className="w-full max-w-md space-y-8">
            <div className="text-center md:text-left">
                <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-2">Create Account</h1>
                <p className="text-gray-500 text-sm">Strictly for medical professionals & clinics.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Clinic / Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-black outline-none" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Work Email</label>
                    <input type="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-black outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Password</label>
                    <input type="password" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-black outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <Button type="submit" className="w-full py-4 shadow-lg hover:shadow-xl" disabled={loading}>
                    {loading ? 'Creating...' : 'Register Clinic'}
                </Button>
            </form>

            <p className="text-center text-sm text-gray-500">
                Already registered?{' '}
                <button onClick={() => navigateTo('login')} className="font-semibold text-black hover:underline underline-offset-4">Login here</button>
            </p>
        </div>
      </div>
    </div>
  );
};

const TrackOrderView = ({ navigateTo, showToast }) => {
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState(null);

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!orderId.trim()) return;
    setLoading(true);
    setOrder(null);
    try {
      const res = await fetch(`${BASE_URL}/api/orders/${orderId.trim()}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Order not found');
      setOrder(data);
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Error fetching order', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Helper to determine active step
  const getStepStatus = (currentStatus) => {
      const steps = ['Pending', 'Processing', 'Shipped', 'Delivered'];
      const normalized = (currentStatus || 'Pending').charAt(0).toUpperCase() + (currentStatus || 'Pending').slice(1).toLowerCase();
      // Simple logic: if status contains the step name, or implies it
      if(normalized.includes('Deliver')) return 4;
      if(normalized.includes('Ship') || normalized.includes('Dispatch')) return 3;
      if(normalized.includes('Process') || normalized.includes('Pack')) return 2;
      return 1;
  };

  const currentStep = order ? getStepStatus(order.status) : 0;

  return (
    <div className="bg-[#fbfbfb] min-h-screen pt-32 pb-16 px-6 animate-fade-in">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
            <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-2">Track Shipment</h1>
            <p className="text-sm text-gray-500">Enter your Order ID (e.g. order_Pz...) to see real-time status.</p>
        </div>

        <form onSubmit={handleTrack} className="flex gap-2 mb-10 relative z-10">
          <input
            type="text"
            placeholder="Order ID"
            className="flex-1 px-6 py-4 bg-white border border-gray-200 rounded-lg text-sm shadow-sm focus:border-black outline-none transition-all"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading || !orderId.trim()}
            className="px-8 py-4 bg-black text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-gray-800 disabled:opacity-60 transition-colors shadow-lg"
          >
            {loading ? '...' : 'Track'}
          </button>
        </form>

        {order && (
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl animate-slide-up">
            <div className="flex justify-between items-start mb-8 pb-6 border-b border-gray-50">
                <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Order Status</p>
                    <p className="text-2xl font-serif text-gray-900">{order.status || 'Pending'}</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Estimated Arrival</p>
                    <p className="text-sm font-medium">
                        {order.expectedDelivery ? new Date(order.expectedDelivery).toLocaleDateString() : 'Calculating...'}
                    </p>
                </div>
            </div>

            {/* Visual Timeline */}
            <div className="relative flex justify-between items-center mb-10 mt-4 px-2">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-0 rounded-full"></div>
                <div className={`absolute top-1/2 left-0 h-1 bg-black -z-0 rounded-full transition-all duration-1000`} style={{width: `${((currentStep-1)/3)*100}%`}}></div>
                
                {['Ordered', 'Processing', 'Shipped', 'Delivered'].map((label, idx) => {
                    const stepNum = idx + 1;
                    const isActive = stepNum <= currentStep;
                    return (
                        <div key={label} className="relative z-10 flex flex-col items-center gap-2">
                            <div className={`w-3 h-3 rounded-full border-2 ${isActive ? 'bg-black border-black' : 'bg-white border-gray-300'}`}></div>
                            <span className={`text-[10px] uppercase tracking-wider font-bold ${isActive ? 'text-black' : 'text-gray-300'}`}>{label}</span>
                        </div>
                    )
                })}
            </div>

            <div className="space-y-3 bg-gray-50 p-6 rounded-xl">
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Customer</span>
                    <span className="font-medium">{order.customerName || 'Guest'}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Total Amount</span>
                    <span className="font-medium">₹{order.totalAmount?.toLocaleString()}</span>
                 </div>
                 {order.trackingNumber && (
                    <div className="flex justify-between text-sm pt-2 border-t border-gray-200/50">
                        <span className="text-gray-500">Courier Tracking</span>
                        <span className="font-mono bg-white px-2 py-1 rounded border border-gray-200">{order.trackingNumber}</span>
                    </div>
                 )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const OrderHistoryView = ({ token, user, showToast, navigateTo }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token, page]);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/orders/user/history?page=${page}&limit=10`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders);
        setTotalPages(data.pages);
      } else {
        showToast('Failed to load orders', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Connection error', 'error');
    } finally {
      setLoading(false);
    }
  };

  const StatusBadge = ({ status }) => {
    const styles = {
      'Pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Paid': 'bg-blue-50 text-blue-700 border-blue-100',
      'Processing': 'bg-blue-50 text-blue-700 border-blue-100',
      'Packed': 'bg-purple-50 text-purple-700 border-purple-100',
      'Shipped': 'bg-purple-50 text-purple-700 border-purple-100',
      'Delivered': 'bg-green-50 text-green-700 border-green-100',
      'Cancelled': 'bg-red-50 text-red-700 border-red-100',
    };
    const defaultStyle = 'bg-gray-100 text-gray-600 border-gray-200';
    
    return (
      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${styles[status] || defaultStyle}`}>
        {status || 'Pending'}
      </span>
    );
  };

  if (!token) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <Truck size={48} className="text-gray-300 mb-4" />
        <h2 className="text-2xl font-serif text-gray-900">Sign In Required</h2>
        <p className="text-gray-500 mb-6">Please log in to view your order history.</p>
        <button onClick={() => navigateTo('login')} className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-10 pb-20 px-4 md:px-8 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">My Account</p>
          <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-1">Order History</h1>
          <p className="text-gray-500 text-sm">Track and manage all your orders</p>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {loading ? (
            <div className="flex justify-center py-12">
              <p className="text-gray-400">Loading orders...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="bg-white border border-gray-100 rounded-xl p-12 text-center">
              <ShoppingBag size={40} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No Orders Yet</h3>
              <p className="text-gray-500 mb-6">Start shopping to see your orders here.</p>
              <button onClick={() => navigateTo('shop')} className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                Continue Shopping
              </button>
            </div>
          ) : (
            orders.map((order) => (
              <div key={order._id} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Order ID</p>
                    <p className="font-mono text-sm font-bold text-gray-900">{order._id.slice(-8).toUpperCase()}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Date</p>
                    <p className="text-sm text-gray-900">{new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Amount</p>
                    <p className="text-sm font-medium text-gray-900">₹{order.amount?.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center justify-between md:justify-end gap-4">
                    <StatusBadge status={order.status} />
                    <button 
                      onClick={() => setSelectedOrder(order)}
                      className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            <button 
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium disabled:opacity-50"
            >
              Previous
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Page {page} of {totalPages}</span>
            </div>
            <button 
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedOrder(null)}></div>
          <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 animate-slide-up max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-2xl">Order Details</h3>
              <button onClick={() => setSelectedOrder(null)} className="text-gray-400 hover:text-black"><X size={20}/></button>
            </div>
            
            <div className="space-y-6">
              {/* Order Info */}
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-bold mb-1">Order ID</p>
                    <p className="font-mono text-sm font-bold">{selectedOrder._id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-bold mb-1">Status</p>
                    <StatusBadge status={selectedOrder.status} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-bold mb-1">Order Date</p>
                    <p className="text-sm">{new Date(selectedOrder.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-bold mb-1">Total Amount</p>
                    <p className="text-sm font-medium">₹{selectedOrder.amount?.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Products</h4>
                <div className="space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  {selectedOrder.products && selectedOrder.products.length > 0 ? (
                    selectedOrder.products.map((product, idx) => (
                      <div key={idx} className="flex justify-between text-sm border-b border-gray-200 pb-2 last:border-0">
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          <p className="text-xs text-gray-500">Qty: {product.qty}</p>
                        </div>
                        <p className="font-medium">₹{(product.price * product.qty).toLocaleString()}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">No product details available</p>
                  )}
                </div>
              </div>

              {/* Tracking */}
              {selectedOrder.trackingNumber && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Tracking Information</h4>
                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <p className="text-xs text-blue-600 uppercase tracking-wide font-bold mb-1">Tracking Number</p>
                    <p className="font-mono text-sm font-bold text-blue-900">{selectedOrder.trackingNumber}</p>
                  </div>
                </div>
              )}

              {/* Payment Info */}
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-xs text-gray-400 uppercase tracking-wide font-bold mb-2">Payment Details</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Razorpay Order ID:</span>
                    <span className="font-mono text-xs">{selectedOrder.razorpayOrderId?.slice(0, 20)}...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Currency:</span>
                    <span>{selectedOrder.currency || 'INR'}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a 
                  href={`${BASE_URL}/api/pdf/invoice/${selectedOrder._id}`}
                  download
                  className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 text-center transition-colors"
                >
                  <Download size={16} className="inline mr-2" />
                  Download Invoice
                </a>
                <button onClick={() => setSelectedOrder(null)} className="flex-1 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* --- HELPER COMPONENT (Defined outside to prevent re-render issues) --- */
const AdminStatusBadge = ({ status }) => {
    const styles = {
        'Pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
        'Processing': 'bg-blue-50 text-blue-700 border-blue-100',
        'Shipped': 'bg-purple-50 text-purple-700 border-purple-100',
        'Delivered': 'bg-green-50 text-green-700 border-green-100',
        'Cancelled': 'bg-red-50 text-red-700 border-red-100',
    };
    const defaultStyle = 'bg-gray-100 text-gray-600 border-gray-200';

    return (
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${styles[status] || defaultStyle}`}>
            {status || 'Unknown'}
        </span>
    );
};

const AdminView = ({ token, user, showToast, navigateTo, handleLogout }) => {
    // Tab state
    const [activeTab, setActiveTab] = useState('orders');

    // Orders state
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingOrder, setEditingOrder] = useState(null);
    const [newStatus, setNewStatus] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);
    const [stats, setStats] = useState({ revenue: 0, pending: 0, completed: 0, total: 0 });

    // Users state
    const [users, setUsers] = useState([]);
    const [usersLoading, setUsersLoading] = useState(false);
    const [userSearchTerm, setUserSearchTerm] = useState('');

    // Customer modal state
    const [customerModalOpen, setCustomerModalOpen] = useState(false);
    const [customerLoading, setCustomerLoading] = useState(false);
    const [customerDetails, setCustomerDetails] = useState(null);

    const calculateStats = (data) => {
        if (!Array.isArray(data)) return;
        // Revenue: prefer `amount` (stored in paise) and convert to rupees; fallback to `totalAmount` (rupees)
        const rev = data.reduce((acc, curr) => {
            const amt = curr.amount !== undefined ? Number(curr.amount) / 100 : Number(curr.totalAmount || 0);
            return acc + (isNaN(amt) ? 0 : amt);
        }, 0);
        const pend = data.filter(o => o.status === 'Pending' || o.status === 'Processing').length;
        const comp = data.filter(o => o.status === 'Delivered').length;
        setStats({ revenue: rev, pending: pend, completed: comp, total: data.length });
    };

    // Modified to accept a background flag to prevent UI flashing
    const fetchOrders = async (isBackground = false) => {
    if (!isBackground) setLoading(true);
    try {
        const res = await fetch(`${BASE_URL}/api/orders/all`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (res.ok) {
            const data = await res.json();
            // API may return either an array or an object { orders, total, pages }
            const safeData = Array.isArray(data) ? data : (Array.isArray(data.orders) ? data.orders : []);
            setOrders(safeData);
            calculateStats(safeData);
        } else {
            // ---------------------------------------------------------
            // SECURITY: If API fails with 401/403, force logout or redirect.
            // ---------------------------------------------------------
            if (res.status === 401 || res.status === 403) {
                 showToast("Session expired or unauthorized", "error");
                 if (typeof handleLogout === 'function') handleLogout();
                 else if (typeof navigateTo === 'function') navigateTo('login');
                 return; 
            }

            // Try to surface server error message for easier debugging
            const errorBody = await res.json().catch(() => ({}));
            const errMsg = errorBody.message || res.statusText || 'Failed to load orders';
            console.error('fetchOrders error', res.status, errorBody);

            // Do not set demo orders
            setOrders([]);
            if (!isBackground) showToast(errMsg, 'error');
        }
    } catch (err) {
        console.error(err);
        if (!isBackground) showToast("Could not load order history", "error");
    } finally {
        if (!isBackground) setLoading(false);
    }
};

    const fetchUsers = async () => {
        setUsersLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/api/users?page=1&limit=20`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (res.status === 401 || res.status === 403) {
                showToast("Session expired or unauthorized", "error");
                if (typeof handleLogout === 'function') handleLogout();
                else if (typeof navigateTo === 'function') navigateTo('login');
                return;
            }

            if (res.ok) {
                const data = await res.json();
                // Handle different response structures (data.users or just data)
                setUsers(data.users || (Array.isArray(data) ? data : []));
            } else {
                const body = await res.json().catch(() => ({}));
                showToast(body.message || "Failed to load users", "error");
            }
        } catch (err) {
            console.error(err);
            showToast("Could not load users", "error");
        } finally {
            setUsersLoading(false);
        }
    };

    const fetchCustomerDetails = async (userId) => {
        setCustomerLoading(true);
        setCustomerModalOpen(true);
        try {
            const res = await fetch(`${BASE_URL}/api/users/${userId}/details`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (res.status === 401 || res.status === 403) {
                showToast("Session expired or unauthorized", "error");
                if (typeof handleLogout === 'function') handleLogout();
                else if (typeof navigateTo === 'function') navigateTo('login');
                setCustomerModalOpen(false);
                return;
            }

            if (res.ok) {
                const data = await res.json();
                setCustomerDetails(data);
            } else {
                const body = await res.json().catch(() => ({}));
                showToast(body.message || "Failed to load customer details", "error");
                setCustomerModalOpen(false);
            }
        } catch (err) {
            console.error(err);
            showToast("Could not load customer details", "error");
            setCustomerModalOpen(false);
        } finally {
            setCustomerLoading(false);
        }
    };

    const fetchOrderDetails = async (orderId) => {
        setCustomerLoading(true);
        setCustomerModalOpen(true);
        try {
            const res = await fetch(`${BASE_URL}/api/orders/details/${orderId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (res.status === 401 || res.status === 403) {
                showToast("Session expired or unauthorized", "error");
                if (typeof handleLogout === 'function') handleLogout();
                else if (typeof navigateTo === 'function') navigateTo('login');
                setCustomerModalOpen(false);
                return;
            }

            if (res.ok) {
                const order = await res.json();
                // Compute amount in rupees and formatted
                const baseAmt = order.amount !== undefined ? Number(order.amount)/100 : (order.products?.reduce((s,p)=>s + Number(p.price || 0) * Number(p.qty || 0),0) || 0);
                const amountFormatted = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(baseAmt);

                const customer = order.userId ? order.userId : { name: order.customerName || 'Guest', email: order.email, phone: order.phone, address: order.address, createdAt: order.createdAt };

                setCustomerDetails({ user: customer, orders: [{ ...order, amountRupees: baseAmt, amountFormatted }], metrics: { totalOrders: 1, totalSpent: baseAmt, totalSpentFormatted: amountFormatted, lastOrderDate: order.createdAt } });
            } else {
                const body = await res.json().catch(()=>({}));
                showToast(body.message || "Failed to load order details", "error");
                setCustomerModalOpen(false);
            }
        } catch (err) {
            console.error(err);
            showToast("Could not load order details", "error");
            setCustomerModalOpen(false);
        } finally {
            setCustomerLoading(false);
        }
    };

    const closeCustomerModal = () => {
        setCustomerModalOpen(false);
        setCustomerDetails(null);
        setCustomerLoading(false);
    }; 

    useEffect(() => {
        if (token) {
            if (activeTab === 'orders') {
                fetchOrders(false); // Initial load with spinner
                // Background refresh every 15s without spinner
                const intervalId = setInterval(() => fetchOrders(true), 15000);
                return () => clearInterval(intervalId);
            } else if (activeTab === 'users') {
                fetchUsers();
            }
        }
    }, [token, activeTab]);

    const handleToggleAdminStatus = async (userId, currentStatus) => {
        // Prevent modifying own admin status client-side
        if (user && String(user._id) === String(userId)) {
            showToast("Cannot modify your own admin status", "error");
            return;
        }

        try {
            const res = await fetch(`${BASE_URL}/api/users/${userId}/toggle-admin`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });

            const data = await res.json().catch(() => ({}));

            if (res.status === 401 || res.status === 403) {
                showToast("Session expired or unauthorized", "error");
                if (typeof handleLogout === 'function') handleLogout();
                else if (typeof navigateTo === 'function') navigateTo('login');
                return;
            }

            if (!res.ok) {
                throw new Error(data?.message || 'Update failed');
            }

            fetchUsers();
            showToast(data?.message || 'Admin status updated', 'success');
        } catch (err) {
            showToast(err.message || 'Update failed', 'error');
        }
    }; 

    const handleUpdateStatus = async (e) => {
        e.preventDefault();
        if (!editingOrder || !newStatus) return;

        setIsUpdating(true);
        try {
            // Use the ID-based admin update route
            const res = await fetch(`${BASE_URL}/api/orders/details/${editingOrder._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (res.status === 401 || res.status === 403) {
                showToast("Session expired or unauthorized", "error");
                if (typeof handleLogout === 'function') handleLogout();
                else if (typeof navigateTo === 'function') navigateTo('login');
                return;
            }

            const body = await res.json().catch(() => ({}));
            if (!res.ok) {
                throw new Error(body.message || 'Update failed');
            }

            // Update local state only after success
            const updatedList = orders.map(o => o._id === editingOrder._id ? { ...o, status: newStatus } : o);
            setOrders(updatedList);
            calculateStats(updatedList);

            showToast(`Order updated to ${newStatus}`, 'success');
            setEditingOrder(null);
            setNewStatus('');
        } catch (err) {
            showToast(err.message, 'error');
        } finally {
            setIsUpdating(false);
        }
    };

    // Safe Filtering Logic
    const filteredOrders = Array.isArray(orders) ? orders.filter(o =>
        (o._id && o._id.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (o.customerName && o.customerName.toLowerCase().includes(searchTerm.toLowerCase()))
    ) : [];

    const filteredUsers = Array.isArray(users) ? users.filter(u =>
        (u.name && u.name.toLowerCase().includes(userSearchTerm.toLowerCase())) ||
        (u.email && u.email.toLowerCase().includes(userSearchTerm.toLowerCase()))
    ) : [];

    if (!token || !user || !user.isAdmin) return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
            <ShieldCheck size={48} className="text-gray-300 mb-4" />
            <h2 className="text-2xl font-serif text-gray-900">Restricted Access</h2>
            <p className="text-gray-500 mb-6">Please log in as an administrator to view this dashboard.</p>
        </div>
    );

    return (
        <div className="bg-[#f8f9fa] min-h-screen pt-10 pb-20 px-4 md:px-8 animate-fade-in">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Overview</p>
                        <h1 className="font-serif text-3xl md:text-4xl text-gray-900">Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm shadow-sm flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Live System
                        </div>
                        <button onClick={() => activeTab === 'orders' ? fetchOrders(false) : fetchUsers()} className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors">
                            Refresh Data
                        </button>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-2 mb-8 border-b border-gray-200">
                    <button
                        onClick={() => setActiveTab('orders')}
                        className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 -mb-px ${activeTab === 'orders'
                                ? 'text-black border-black'
                                : 'text-gray-500 border-transparent hover:text-black'
                            }`}
                    >
                        <ShoppingBag size={16} className="inline mr-2" />
                        Orders
                    </button>
                    <button
                        onClick={() => setActiveTab('users')}
                        className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 -mb-px ${activeTab === 'users'
                                ? 'text-black border-black'
                                : 'text-gray-500 border-transparent hover:text-black'
                            }`}
                    >
                        <User size={16} className="inline mr-2" />
                        Users
                    </button>
                </div>

                {activeTab === 'orders' && (
                    <>
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-green-50 rounded-lg text-green-700"><ArrowUpDown size={20} /></div>
                                    <span className="text-xs text-gray-400 font-bold uppercase">Revenue</span>
                                </div>
                                <h3 className="text-2xl font-serif font-medium">₹{stats.revenue.toLocaleString()}</h3>
                                <p className="text-xs text-gray-500 mt-1">Total volume processed</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-yellow-50 rounded-lg text-yellow-700"><Clock size={20} /></div>
                                    <span className="text-xs text-gray-400 font-bold uppercase">Pending</span>
                                </div>
                                <h3 className="text-2xl font-serif font-medium">{stats.pending}</h3>
                                <p className="text-xs text-gray-500 mt-1">Orders requiring action</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-blue-50 rounded-lg text-blue-700"><Check size={20} /></div>
                                    <span className="text-xs text-gray-400 font-bold uppercase">Completed</span>
                                </div>
                                <h3 className="text-2xl font-serif font-medium">{stats.completed}</h3>
                                <p className="text-xs text-gray-500 mt-1">Succesfully delivered</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-gray-50 rounded-lg text-gray-700"><User size={20} /></div>
                                    <span className="text-xs text-gray-400 font-bold uppercase">Total Orders</span>
                                </div>
                                <h3 className="text-2xl font-serif font-medium">{stats.total}</h3>
                                <p className="text-xs text-gray-500 mt-1">All time records</p>
                            </div>
                        </div>

                        {/* Orders Table Section */}
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                                <h3 className="font-serif text-xl">Recent Orders</h3>
                                <div className="relative w-full md:w-64">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input
                                        type="text"
                                        placeholder="Search orders..."
                                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-black transition-colors"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                                            <th className="px-6 py-4">Order ID</th>
                                            <th className="px-6 py-4">Customer</th>
                                            <th className="px-6 py-4">Date</th>
                                            <th className="px-6 py-4">Amount</th>
                                            <th className="px-6 py-4">Status</th>
                                            <th className="px-6 py-4 text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {loading ? (
                                            <tr>
                                                <td colSpan="6" className="px-6 py-12 text-center text-gray-500">Loading records...</td>
                                            </tr>
                                        ) : filteredOrders.length === 0 ? (
                                            <tr>
                                                <td colSpan="6" className="px-6 py-12 text-center text-gray-500">No orders found.</td>
                                            </tr>
                                        ) : (
                                            filteredOrders.map((order) => (
                                                <tr key={order._id || Math.random()} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="px-6 py-4 font-mono text-sm text-gray-600">#{order._id ? order._id.slice(-6).toUpperCase() : 'ERR'}</td>
                                                    <td className="px-6 py-4">
                                                        <button onClick={() => {
                                                            if (order.userId) fetchOrderDetails(order._id);
                                                            else {
                                                                // Guest — build a lightweight details view
                                                                const amt = order.amount !== undefined ? Number(order.amount)/100 : (order.products?.reduce((s,p)=>s + Number(p.price || 0) * Number(p.qty || 0),0)||0);
                                                                setCustomerDetails({ user: { name: order.customerName || 'Guest', email: order.email, phone: order.phone, address: order.address, createdAt: order.createdAt }, orders: [{ ...order, amountRupees: amt, amountFormatted: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amt) }], metrics: { totalOrders: 1, totalSpent: amt, totalSpentFormatted: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amt), lastOrderDate: order.createdAt } });
                                                                setCustomerModalOpen(true);
                                                            }
                                                        }} className="text-left">
                                                            <p className="text-sm font-medium text-gray-900 hover:underline">{order.customerName || 'Guest'}</p>
                                                            <p className="text-xs text-gray-400">{order.email}</p>
                                                        </button>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">
                                                        {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A'}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium">₹{Number(order.amount !== undefined ? order.amount/100 : (order.totalAmount || 0)).toLocaleString()}</td> 
                                                    <td className="px-6 py-4">
                                                        <AdminStatusBadge status={order.status} />
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button
                                                            onClick={() => { setEditingOrder(order); setNewStatus(order.status || ''); }}
                                                            className="text-xs font-bold uppercase text-gray-400 hover:text-black hover:underline transition-all"
                                                        >
                                                            Manage
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="p-4 border-t border-gray-100 bg-gray-50 text-xs text-gray-500 text-center">
                                Displaying latest {filteredOrders.length} records
                            </div>
                        </div>

                        {/* Edit Status Modal */}
                        {editingOrder && (
                            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setEditingOrder(null)}></div>
                                <div className="relative bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 animate-slide-up">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="font-serif text-xl">Update Status</h3>
                                        <button onClick={() => setEditingOrder(null)} className="text-gray-400 hover:text-black"><X size={20} /></button>
                                    </div>

                                    <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Order ID</p>
                                        <p className="font-mono text-sm font-bold">#{editingOrder._id}</p>
                                        <div className="h-px bg-gray-200 my-3"></div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Current Status</p>
                                        <AdminStatusBadge status={editingOrder.status} />
                                    </div>

                                    <form onSubmit={handleUpdateStatus}>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">New Status</label>
                                        <select
                                            className="w-full p-3 bg-white border border-gray-200 rounded-lg text-sm mb-6 outline-none focus:border-black"
                                            value={newStatus}
                                            onChange={(e) => setNewStatus(e.target.value)}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Processing">Processing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>

                                        <div className="flex gap-3">
                                            <button type="button" onClick={() => setEditingOrder(null)} className="flex-1 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-lg">Cancel</button>
                                            <Button type="submit" className="flex-1" disabled={isUpdating}>
                                                {isUpdating ? 'Saving...' : 'Update Order'}
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </>
                )}

                {/* Customer Details Modal */}
                {customerModalOpen && (
                    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-black/40" onClick={closeCustomerModal}></div>
                        <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 animate-slide-up overflow-y-auto max-h-[80vh]">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h3 className="font-serif text-xl">{customerDetails?.user?.name || 'Customer'}</h3>
                                    <p className="text-xs text-gray-500">{customerDetails?.user?.email ? (<a href={`mailto:${customerDetails.user.email}`} className="underline hover:text-black">{customerDetails.user.email}</a>) : 'No email'}</p>
                                    <p className="text-xs text-gray-400 mt-1">Joined: {customerDetails?.user?.createdAt ? new Date(customerDetails.user.createdAt).toLocaleDateString() : 'N/A'}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400">Total Spent</p>
                                        <p className="font-medium text-lg">{customerDetails?.metrics?.totalSpentFormatted || `₹${Number(customerDetails?.metrics?.totalSpent || 0).toLocaleString()}`}</p>
                                    </div>
                                    <button onClick={closeCustomerModal} className="text-gray-400 hover:text-black"><X size={20} /></button>
                                </div>
                            </div>

                            {customerLoading ? (
                                <div className="py-12 text-center text-gray-500">Loading customer details...</div>
                            ) : (
                                <>
                                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-4 rounded border">
                                            <p className="text-xs text-gray-400 uppercase">Email</p>
                                            <p className="font-medium"><a href={`mailto:${customerDetails?.user?.email}`} className="underline">{customerDetails?.user?.email || 'N/A'}</a></p>
                                            <div className="h-px bg-gray-200 my-3"></div>
                                            <p className="text-xs text-gray-400 uppercase">Phone</p>
                                            <p className="font-medium"><a href={`tel:${customerDetails?.user?.phone || (customerDetails?.orders && customerDetails.orders[0]?.phone)}`} className={`${(customerDetails?.user?.phone || (customerDetails?.orders && customerDetails.orders[0]?.phone)) ? 'underline' : ''}`}>{customerDetails?.user?.phone || (customerDetails?.orders && customerDetails.orders[0]?.phone) || 'N/A'}</a></p>
                                            <div className="h-px bg-gray-200 my-3"></div>
                                            <p className="text-xs text-gray-400 uppercase">Address</p>
                                            <p className="text-sm">{customerDetails?.user?.address || customerDetails?.orders?.[0]?.address || 'N/A'}</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded border">
                                            <p className="text-xs text-gray-400 uppercase">Total Orders</p>
                                            <p className="font-medium">{customerDetails?.metrics?.totalOrders ?? (customerDetails?.orders ? customerDetails.orders.length : 0)}</p>
                                            <div className="h-px bg-gray-200 my-3"></div>
                                            <p className="text-xs text-gray-400 uppercase">Last Order</p>
                                            <p className="font-medium">{customerDetails?.metrics?.lastOrderDate ? new Date(customerDetails.metrics.lastOrderDate).toLocaleDateString() : 'N/A'}</p>
                                        </div>
                                    </div>

                                    {/* Recent Orders */}
                                    {customerDetails?.orders && (
                                        <div className="mt-6">
                                            <h4 className="font-medium mb-3">Recent Orders</h4>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left text-sm">
                                                    <thead className="text-xs text-gray-500 uppercase">
                                                        <tr><th className="px-3 py-2">Order ID</th><th className="px-3 py-2">Date</th><th className="px-3 py-2">Amount</th><th className="px-3 py-2">Status</th></tr>
                                                    </thead>
                                                    <tbody>
                                                        {customerDetails.orders.map(o => (
                                                            <tr key={o._id} className="border-t">
                                                                <td className="px-3 py-2 font-mono">#{o._id ? o._id.slice(-6).toUpperCase() : o._id}</td>
                                                                <td className="px-3 py-2">{o.createdAt ? new Date(o.createdAt).toLocaleDateString() : 'N/A'}</td>
                                                                <td className="px-3 py-2">{o.amountFormatted || `₹${Number(o.amountRupees || 0).toLocaleString()}`}</td>
                                                                <td className="px-3 py-2">{o.status}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                )}
                {activeTab === 'users' && (
                    <>
                        {/* Users Table */}
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                                <h3 className="font-serif text-xl">Users Management</h3>
                                <div className="relative w-full md:w-64">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input
                                        type="text"
                                        placeholder="Search users..."
                                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-black transition-colors"
                                        value={userSearchTerm}
                                        onChange={(e) => setUserSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                                            <th className="px-6 py-4">Name</th>
                                            <th className="px-6 py-4">Email</th>
                                            <th className="px-6 py-4">Joined</th>
                                            <th className="px-6 py-4">Role</th>
                                            <th className="px-6 py-4 text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {usersLoading ? (
                                            <tr>
                                                <td colSpan="5" className="px-6 py-12 text-center text-gray-500">Loading users...</td>
                                            </tr>
                                        ) : filteredUsers.length === 0 ? (
                                            <tr>
                                                <td colSpan="5" className="px-6 py-12 text-center text-gray-500">No users found.</td>
                                            </tr>
                                        ) : (
                                            filteredUsers.map((u) => (
                                                <tr key={u._id || Math.random()} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="px-6 py-4 font-medium text-gray-900">{u.name}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-600">{u.email}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">
                                                        {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : 'N/A'}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${u.isAdmin
                                                                ? 'bg-purple-50 text-purple-700 border-purple-100'
                                                                : 'bg-gray-100 text-gray-600 border-gray-200'
                                                            }`}>
                                                            {u.isAdmin ? 'Admin' : 'User'}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right flex justify-end gap-3">
                                                        <button
                                                            onClick={() => fetchCustomerDetails(u._id)}
                                                            className="text-xs font-bold uppercase text-gray-500 hover:text-black hover:underline"
                                                            title="View customer details"
                                                        >
                                                            View
                                                        </button>
                                                        <button
                                                            onClick={() => handleToggleAdminStatus(u._id, u.isAdmin)}
                                                            disabled={String(u._id) === String(user._id)}
                                                            className={`text-xs font-bold uppercase text-gray-400 transition-all ${String(u._id) === String(user._id) ? 'opacity-50 cursor-not-allowed' : 'hover:text-black hover:underline'}`}
                                                            title={String(u._id) === String(user._id) ? "You cannot change your own admin status" : (u.isAdmin ? "Remove admin privileges" : "Grant admin privileges")}
                                                        >
                                                            {u.isAdmin ? 'Remove Admin' : 'Make Admin'}
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="p-4 border-t border-gray-100 bg-gray-50 text-xs text-gray-500 text-center">
                                Total: {filteredUsers.length} users
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
  const ShopView = ({ 
    navigateTo, 
    addToCart, 
    filter, 
    setFilter, 
    brandFilter, 
    setBrandFilter,
    searchQuery,
    setSearchQuery
  }) => {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
    const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-asc', 'price-desc'
   
    const filteredProducts = PRODUCTS.filter(p => {
      const matchesCategory = filter === 'All' || p.category === filter;
      const matchesBrand = brandFilter === 'All Brands' || p.brand === brandFilter;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesBrand && matchesSearch;
    }).sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return 0; // featured (default order)
    });
   
    return (
      <div className="animate-fade-in bg-[#fbfbfb] min-h-screen pb-24">
        {/* HERO */}
        <div className="bg-black text-white pt-20 pb-12 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-30 bg-[url('/image/ban1.jpg')] bg-cover bg-center pointer-events-none"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>
           <div className="relative z-10 max-w-4xl mx-auto">
             <span className="text-white tracking-[0.3em] uppercase text-[10px] font-bold mb-3 block animate-slide-up">Authorized Distribution</span>
             <h1 className="font-serif text-3xl md:text-5xl mb-2 animate-slide-up" style={{animationDelay: '0.1s'}}>The Collection</h1>
             {searchQuery && <p className="text-gray-400 text-sm mt-2">Showing results for "{searchQuery}"</p>}
           </div>
        </div>
   
        {/* HORIZONTAL TRANSLUCENT CATEGORY BAR */}
        <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-4">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x items-center">
                     <button 
                        onClick={() => setFilter('All')}
                        className={`snap-start shrink-0 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                            filter === 'All' 
                            ? 'bg-black text-white border-black shadow-md transform scale-105' 
                            : 'bg-white/50 text-gray-500 border-gray-200 hover:border-black hover:text-black'
                        }`}
                    >
                        All
                    </button>
                    {CATEGORIES.map(cat => (
                        <button 
                            key={cat.id}
                            onClick={() => setFilter(cat.name)}
                            className={`snap-start shrink-0 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                                filter === cat.name 
                                ? 'bg-black text-white border-black shadow-md transform scale-105' 
                                : 'bg-white/50 text-gray-500 border-gray-200 hover:border-black hover:text-black'
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-12">
              
              {/* SIDEBAR (Brands) */}
              <aside className="hidden lg:block w-64 shrink-0 space-y-10 sticky top-48 h-[calc(100vh-12rem)] overflow-y-auto pr-4 scrollbar-hide">
                  <div>
                      <h3 className="font-serif text-lg mb-4">Filter by Brand</h3>
                      <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                          <label className="flex items-center gap-3 cursor-pointer group py-1">
                              <div className={`w-4 h-4 border rounded flex items-center justify-center transition-colors ${brandFilter === 'All Brands' ? 'bg-black border-black' : 'border-gray-300 group-hover:border-gray-400'}`}>
                                  {brandFilter === 'All Brands' && <Check size={10} className="text-white" />}
                              </div>
                              <input type="radio" name="brand" className="hidden" checked={brandFilter === 'All Brands'} onChange={() => setBrandFilter('All Brands')} />
                              <span className={`text-sm ${brandFilter === 'All Brands' ? 'text-black font-medium' : 'text-gray-600'}`}>All Brands</span>
                          </label>
                          {BRANDS_LIST.filter(b => b !== "All Brands").map(brand => (
                              <label key={brand} className="flex items-center gap-3 cursor-pointer group py-1">
                                  <div className={`w-4 h-4 border rounded flex items-center justify-center transition-colors ${brandFilter === brand ? 'bg-black border-black' : 'border-gray-300 group-hover:border-gray-400'}`}>
                                      {brandFilter === brand && <Check size={10} className="text-white" />}
                                  </div>
                                  <input type="radio" name="brand" className="hidden" checked={brandFilter === brand} onChange={() => setBrandFilter(brand)} />
                                  <span className={`text-sm ${brandFilter === brand ? 'text-black font-medium' : 'text-gray-600'}`}>{brand}</span>
                              </label>
                          ))}
                      </div>
                  </div>
              </aside>
   
              {/* MAIN CONTENT */}
              <div className="flex-1 min-w-0">
                  {/* Sort & Count Bar */}
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                      <p className="text-sm text-gray-500"><span className="font-medium text-black">{filteredProducts.length}</span> Results</p>
                      
                      <div className="flex items-center gap-4">
                          <div className="relative group">
                              <div className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                                  Sort by: <span className="text-gray-500 capitalize">{sortBy.replace('-', ' ')}</span> <ChevronDown size={14} />
                              </div>
                              <div className="absolute right-0 top-full pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-20">
                                  <div className="bg-white border border-gray-100 shadow-xl rounded-lg p-1 w-40 flex flex-col">
                                      <button onClick={() => setSortBy('featured')} className={`text-left px-3 py-2 text-sm rounded hover:bg-gray-50 ${sortBy === 'featured' ? 'font-medium text-gray-800' : 'text-gray-600'}`}>Featured</button>
                                      <button onClick={() => setSortBy('price-asc')} className={`text-left px-3 py-2 text-sm rounded hover:bg-gray-50 ${sortBy === 'price-asc' ? 'font-medium text-gray-800' : 'text-gray-600'}`}>Price: Low to High</button>
                                      <button onClick={() => setSortBy('price-desc')} className={`text-left px-3 py-2 text-sm rounded hover:bg-gray-50 ${sortBy === 'price-desc' ? 'font-medium text-gray-800' : 'text-gray-600'}`}>Price: High to Low</button>
                                  </div>
                              </div>
                          </div>
                          <div className="h-4 w-px bg-gray-200 hidden md:block"></div>
                          <div className="hidden md:flex gap-1">
                              <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded ${viewMode === 'grid' ? 'text-black bg-gray-100' : 'text-gray-400 hover:text-gray-600'}`}><Grid size={16}/></button>
                              <button onClick={() => setViewMode('list')} className={`p-1.5 rounded ${viewMode === 'list' ? 'text-black bg-gray-100' : 'text-gray-400 hover:text-gray-600'}`}><List size={16}/></button>
                          </div>
                      </div>
                  </div>
   
                  {/* PRODUCTS GRID */}
                  <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                      {filteredProducts.length > 0 ? (
                          filteredProducts.map(product => (
                          <div 
                              key={product.id} 
                              className={`group cursor-pointer bg-white rounded-xl overflow-hidden border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-500 ${viewMode === 'list' ? 'flex gap-6 p-4 border-gray-100' : ''}`} 
                              onClick={() => navigateTo('product', product)}
                          >
                              <div className={`relative bg-[#f8f8f8] overflow-hidden ${viewMode === 'list' ? 'w-32 h-32 rounded-lg shrink-0' : 'aspect-[4/5]'}`}>
                                  {/* UPDATED IMAGE LOGIC: 
                                      - object-contain: Shows full image without cropping/zooming default
                                      - p-4: Adds padding so image doesn't touch edges
                                      - group-hover:scale-110: Zooms in ONLY on hover
                                  */}
                                  <img 
                                      loading="lazy" 
                                      src={product.image} 
                                      alt={product.name} 
                                      className="w-full h-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
                                  />
                                  
                                  {viewMode === 'grid' && (
                                      <div className="absolute top-3 left-3 right-3 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                          <span className="bg-white/90 backdrop-blur text-[9px] px-2 py-1 rounded font-bold tracking-wider uppercase shadow-sm">{product.brand}</span>
                                      </div>
                                  )}
                                  {product.price > 12000 && viewMode === 'grid' && (
                                      <div className="absolute top-3 right-3 bg-gray-800 text-white text-[8px] px-2 py-1 rounded font-bold tracking-wider uppercase shadow-sm">Best Seller</div>
                                  )}
   
                                  {/* Quick Add Overlay (Desktop) */}
                                  {viewMode === 'grid' && (
                                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out hidden md:block bg-gradient-to-t from-black/60 to-transparent pt-12">
                                          <button 
                                              onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                                              className="w-full bg-white text-black py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors shadow-lg flex items-center justify-center gap-2 rounded-lg"
                                          >
                                              <ShoppingBag size={14} /> Add to Cart
                                          </button>
                                      </div>
                                  )}
                              </div>
   
                              <div className={`${viewMode === 'list' ? 'flex-1 flex flex-col justify-center' : 'pt-4 pb-2 px-2'}`}>
                                  <div className="text-gray-400 text-[9px] font-bold tracking-widest uppercase mb-1.5">{product.category}</div>
                                  <h3 className={`font-serif text-gray-900 leading-tight ${viewMode === 'list' ? 'text-xl mb-2' : 'text-base mb-2 line-clamp-2 min-h-[2.5em]'}`}>{product.name}</h3>
                                  <div className="flex items-center justify-between mt-auto">
                                      <p className="text-base font-medium font-serif">₹{product.price.toLocaleString()}</p>
                                      <button 
                                          className="md:hidden w-8 h-8 bg-black text-white rounded-full flex items-center justify-center active:scale-95"
                                          onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                                      >
                                          <Plus size={16} />
                                      </button>
                                  </div>
                              </div>
                          </div>
                          ))
                      ) : (
                          <div className="col-span-full py-32 text-center">
                              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300"><Search size={36} /></div>
                              <h3 className="text-xl font-serif text-gray-900 mb-2">No matches found</h3>
                              <p className="text-gray-500 text-sm mb-6">Try adjusting your filters or search query.</p>
                              <button onClick={() => {setSearchQuery(''); setBrandFilter('All Brands'); setFilter('All');}} className="text-gray-800 text-sm font-medium hover:text-black transition-colors underline underline-offset-4">Clear all filters</button>
                          </div>
                      )}
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  };
  
  const BlogPostView = ({ post, navigateTo }) => {
    return (
      <div className="animate-fade-in bg-white min-h-screen pb-24">
        {/* Navigation Breadcrumb */}
        <div className="px-6 py-4 border-b border-gray-100 sticky top-20 bg-white z-40 flex gap-2 text-xs text-gray-500 items-center">
            <button onClick={() => navigateTo('blog')} className="hover:text-black flex items-center gap-1"><ArrowLeft size={12}/> Journal</button> 
            <span className="text-gray-300">/</span>
            <span className="text-gray-800 truncate">{post.title}</span>
        </div>
  
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="mb-8">
              <span className="text-gray-800 font-bold tracking-widest uppercase text-[10px] mb-3 block">{post.category}</span>
              <h1 className="font-serif text-3xl md:text-5xl leading-tight text-gray-900 mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{post.author || 'Editorial'}</span>
              </div>
          </div>
  
          <div className="aspect-video w-full bg-gray-100 rounded-xl overflow-hidden mb-10 shadow-sm">
              <img loading="lazy" src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
  
          <div className="prose prose-lg prose-gray mx-auto">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
    );
  };
  
  const BlogView = ({ navigateTo }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Clinical Science', 'Ingredient Spotlight', 'Treatment Protocols', 'Safety & Compliance'];
  
    const filteredPosts = activeCategory === 'All' 
      ? BLOG_POSTS 
      : BLOG_POSTS.filter(post => post.category === activeCategory);
  
    return (
      <div className="animate-fade-in bg-[#fbfbfb] min-h-screen pb-24">
        {/* HERO */}
        <div className="bg-black text-white pt-28 pb-12 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-30 bg-[url('/image/ban1.jpg')] bg-cover bg-center pointer-events-none"></div>
           <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-white tracking-[0.3em] uppercase text-[10px] font-bold mb-3 block">The Journal</span>
              <h1 className="font-serif text-4xl md:text-6xl mb-4">Clinical Insights</h1>
           </div>
        </div>
  
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
              {categories.map(cat => (
                  <button 
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap transition-all border ${activeCategory === cat ? 'bg-black text-white border-black' : 'bg-white text-gray-500 hover:bg-gray-50 border-gray-200'}`}
                  >
                      {cat}
                  </button>
              ))}
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {filteredPosts.map(post => (
               <div key={post.id} onClick={() => navigateTo('blog-post', post)} className="group cursor-pointer flex flex-col h-full">
                  <div className="relative aspect-[16/9] overflow-hidden mb-4 rounded-lg bg-gray-100">
                     <img loading="lazy" src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[9px] px-2 py-1 rounded-full font-bold tracking-wider uppercase shadow-sm">
                        {post.category}
                     </div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest mb-2">
                      <span>{post.date}</span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl mb-3 text-gray-900 leading-tight group-hover:text-gray-800 transition-colors">{post.title}</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <button 
                      className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wide mt-auto group-hover:gap-3 transition-all pt-2"
                  >
                      Read <ArrowRight size={12} />
                  </button>
               </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  const ProductView = ({ product, addToCart, navigateTo }) => {
    const [qty, setQty] = useState(1);
    const [activeImg, setActiveImg] = useState(0);
    const images = [product.image, product.image, product.image, product.image];
  
    const similarProducts = PRODUCTS.filter(
      (p) => p.category === product.category && p.id !== product.id
    ).slice(0, 3);
  
    return (
      <div className="animate-fade-in bg-white min-h-screen pb-24">
        <div className="px-6 py-4 border-b border-gray-100 flex gap-2 text-xs text-gray-500 sticky top-20 bg-white z-40">
            <button onClick={() => navigateTo('shop')} className="hover:text-black flex items-center gap-1"><ArrowLeft size={12}/> Back to Shop</button> 
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="space-y-4">
                <div className="aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden w-full relative group">
                  <img loading="lazy" src={images[activeImg]} alt={product.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <div key={idx} onClick={() => setActiveImg(idx)} className={`w-20 h-20 shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${activeImg === idx ? 'border-gray-800' : 'border-transparent'}`}><img loading="lazy" src={img} alt="" className="w-full h-full object-cover" /></div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-gray-800 text-[10px] font-bold tracking-widest uppercase mb-2">{product.category}</div>
              <h1 className="font-serif text-3xl md:text-5xl mb-2 leading-tight text-gray-900">{product.name}</h1>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">{product.brand}</div>
              
              <div className="flex items-baseline gap-4 mb-6 border-b border-gray-100 pb-6">
                  <span className="text-3xl font-medium">₹{product.price.toLocaleString()}</span>
                  <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">In Stock</span>
              </div>
              
              <div className="text-gray-600 leading-relaxed mb-8 font-light text-base prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: product.details }} />
              
              <div className="bg-gray-50 p-5 rounded-xl mb-8">
                <h3 className="font-serif text-lg mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-600"><span className="text-gray-800 shrink-0">✦</span> {benefit}</li>
                    ))}
                </ul>
              </div>
  
              <div className="flex flex-col gap-4 fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-50 md:static md:p-0 md:border-0 md:bg-transparent">
                <div className="flex gap-4">
                    <div className="flex items-center border border-gray-200 rounded-lg h-12 w-32 bg-white">
                      <button onClick={() => setQty(Math.max(1, qty - 1))} className="flex-1 h-full flex items-center justify-center hover:bg-gray-50 text-lg">-</button>
                      <span className="font-medium text-base w-8 text-center">{qty}</span>
                      <button onClick={() => setQty(qty + 1)} className="flex-1 h-full flex items-center justify-center hover:bg-gray-50 text-lg">+</button>
                    </div>
                    <Button className="flex-1 h-12 text-sm uppercase tracking-wide" onClick={() => addToCart(product, qty)}>Add to Cart</Button>
                </div>
              </div>
              {/* Spacer for mobile fixed bottom button */}
              <div className="h-20 md:hidden"></div> 
            </div>
          </div>
  
          {/* SIMILAR PRODUCTS SECTION */}
          {similarProducts.length > 0 && (
              <div className="mt-24 border-t border-gray-100 pt-16">
                  <SectionHeader title="Similar Products" subtitle="You might also be interested in" center={false} />
                  
                  {/* Mobile Horizontal Scroll */}
                  <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                      {similarProducts.map(product => (
                            <div key={product.id} className="group cursor-pointer min-w-[260px] md:min-w-0 snap-start" onClick={() => navigateTo('product', product)}>
                                <div className="relative aspect-[4/5] bg-gray-50 rounded-lg overflow-hidden mb-4">
                                  <img loading="lazy" src={product.image} alt={`${product.name} by ${product.brand} - ${product.category} from Shaa Trading`} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                                </div>
                              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{product.brand}</div>
                              <h3 className="font-serif text-lg leading-tight mb-2 group-hover:text-gray-800 transition-colors truncate">{product.name}</h3>
                              <p className="text-gray-900 font-medium">₹{product.price.toLocaleString()}</p>
                            </div>
                      ))}
                  </div>
              </div>
          )}
        </div>
      </div>
    );
  };
  
  const PrivacyPolicyView = () => (
    <div className="animate-fade-in pb-24 bg-[#fbfbfb]">
      <div className="bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl mb-4">Privacy Policy</h1>
              <p className="text-gray-400 font-light text-sm md:text-base">Last Updated: October 2025</p>
          </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-gray-600 font-light leading-relaxed">
              <section>
                  <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-800"><ShieldCheck size={16}/></div>
                      <h3 className="font-serif text-xl text-gray-900">1. Data Collection & Usage</h3>
                  </div>
                  <p>We strictly collect only the information necessary to process wholesale orders and verify professional credentials. This includes your medical license number, clinic address, and contact details. This data is used solely for order fulfillment, regulatory compliance, and account management.</p>
              </section>
              
              <section>
                  <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-800"><FileText size={16}/></div>
                      <h3 className="font-serif text-xl text-gray-900">2. Data Security</h3>
                  </div>
                  <p>Shaa Trading employs industry-standard SSL encryption to protect your sensitive data during transmission. We partner with secure payment gateways and do not store credit card details on our servers. Access to personal data is restricted to authorized personnel only.</p>
              </section>
  
              <section>
                  <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-800"><Mail size={16}/></div>
                      <h3 className="font-serif text-xl text-gray-900">3. Communications</h3>
                  </div>
                  <p>We may use your contact details to communicate important order updates, safety recalls, or exclusive wholesale offers. You retain the right to opt-out of marketing communications at any time via the unsubscribe link or by contacting support.</p>
              </section>
  
              <section>
                  <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-800"><User size={16}/></div>
                      <h3 className="font-serif text-xl text-gray-900">4. Third-Party Disclosure</h3>
                  </div>
                  <p>We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties, except for trusted third parties who assist us in operating our website, conducting our business (e.g., logistics partners), or serving our users, so long as those parties agree to keep this information confidential.</p>
              </section>
          </div>
      </div>
    </div>
  );
  
  const TermsOfServiceView = () => (
    <div className="animate-fade-in pb-24 bg-[#fbfbfb]">
      <div className="bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl mb-4">Terms of Service</h1>
              <p className="text-gray-400 font-light text-sm md:text-base">Professional Engagement Guidelines</p>
          </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-gray-600 font-light leading-relaxed">
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4 border-l-2 border-gray-800 pl-4">1. Professional Use Only</h3>
                  <p>By purchasing from Shaa Trading, you explicitly certify that you are a licensed medical professional or an authorized representative of a licensed clinic. Our products, particularly injectables and professional-grade peels, are strictly for professional administration. We reserve the right to cancel orders that fail credential verification.</p>
              </section>
  
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4 border-l-2 border-gray-800 pl-4">2. Product Liability & Usage</h3>
                  <p>Shaa Trading acts solely as an authorized distributor. While we guarantee the authenticity and cold-chain integrity of our products, we are not the manufacturer. Any adverse reactions should be reported to the manufacturer directly. Shaa Trading is not liable for misuse, improper administration, or off-label use of products.</p>
              </section>
  
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4 border-l-2 border-gray-800 pl-4">3. Returns & Refunds</h3>
                  <p>Due to the sensitive nature of medical aesthetics and strict temperature control requirements, <strong>all sales of injectables are final</strong>. We cannot accept returns once the product has left our controlled facility to ensure safety. Returns are only processed in the rare event of a proven manufacturing defect or shipping error reported within 24 hours of receipt.</p>
              </section>
  
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4 border-l-2 border-gray-800 pl-4">4. Pricing & Availability</h3>
                  <p>Prices are subject to change without notice due to international exchange rates and manufacturer adjustments. We reserve the right to limit quantities per client to ensure equitable distribution of high-demand stock.</p>
              </section>
          </div>
      </div>
    </div>
  );
  
  const ShippingPolicyView = () => (
    <div className="animate-fade-in pb-24 bg-[#fbfbfb]">
      <div className="bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl mb-4">Shipping & Logistics</h1>
              <p className="text-gray-400 font-light text-sm md:text-base">Ensuring clinical integrity from warehouse to clinic.</p>
          </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                  <Thermometer size={24} className="text-gray-800 mx-auto mb-3" />
                  <h4 className="font-serif font-bold text-gray-900">Cold Chain</h4>
                  <p className="text-xs text-gray-500 mt-2">Insulated packaging for biologics.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                  <Clock size={24} className="text-gray-800 mx-auto mb-3" />
                  <h4 className="font-serif font-bold text-gray-900">24h Dispatch</h4>
                  <p className="text-xs text-gray-500 mt-2">Same-day processing for orders before 2 PM.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                  <Truck size={24} className="text-gray-800 mx-auto mb-3" />
                  <h4 className="font-serif font-bold text-gray-900">Pan-India</h4>
                  <p className="text-xs text-gray-500 mt-2">Serviceable to 19,000+ pin codes.</p>
              </div>
          </div>
  
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-gray-600 font-light leading-relaxed">
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4">1. Cold Chain Protocol</h3>
                  <p>Temperature-sensitive items (peptides, growth factors, certain injectables) are packed in medical-grade insulated boxes with gel ice packs. We continually monitor transit times to ensure product stability upon arrival. Please refrigerate immediately upon receipt.</p>
              </section>
  
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4">2. Delivery Timelines</h3>
                  <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Metro Cities (Delhi, Mumbai, Bangalore, Chennai, Kolkata):</strong> 24-48 Hours.</li>
                      <li><strong>Tier 1 & 2 Cities:</strong> 2-4 Business Days.</li>
                      <li><strong>Rest of India / Remote Areas:</strong> 5-7 Business Days.</li>
                  </ul>
                  <p className="mt-4 text-xs bg-gray-50 p-3 rounded text-gray-500">Note: Timelines are estimates. Severe weather or political unrest may cause unavoidable delays.</p>
              </section>
  
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4">3. Damaged or Lost Shipments</h3>
                  <p>While rare, if a shipment arrives damaged, you must document it immediately. Please take clear photos of the external packaging and damaged contents and email us within 4 hours of delivery at shaatrading@gmail.com for a replacement.</p>
              </section>
          </div>
      </div>
    </div>
  );
  
  /* IMPROVED ABOUT VIEW */
  const AboutView = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const stats = [
      { id: 1, val: "500+", label: "Partner Clinics" },
      { id: 2, val: "100%", label: "Authentic Guarantee" },
      { id: 3, val: "12", label: "Years of Service" },
      { id: 4, val: "24h", label: "Dispatch Time" },
    ];
   
    return (
      <div className="animate-fade-in pb-24 bg-[#fbfbfb]">
        {/* HERO */}
        <div className="relative bg-[#0a0a0a] text-white py-28 px-6 overflow-hidden">
             <div className="absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none"></div>
             <div className="relative z-10 max-w-4xl mx-auto text-center">
                <span className="text-white tracking-[0.3em] uppercase text-[10px] md:text-xs font-bold mb-4 block animate-slide-up">Established 2012</span>
                <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
                  Trusted <br/><span className="italic text-gray-400 font-light">Healthcare Supply</span>
                </h1>
                <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
                  Shaa Trading bridges the gap between elite laboratories and India's leading healthcare clinics.
                </p>
             </div>
        </div>
   
        {/* MISSION SPLIT */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             <div className="relative aspect-[4/5] md:aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img loading="lazy" src="/image/blog4.jpg" alt="Laboratory" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded max-w-xs shadow-lg">
                   <p className="font-serif text-lg italic">"Quality is not a feature. It is the foundation of healthcare supply."</p>
                   <p className="text-xs font-bold uppercase tracking-widest mt-2">— Director's Note</p>
                </div>
             </div>
             <div>
                <span className="text-gray-800 font-bold tracking-widest uppercase text-xs mb-3 block">Our Mission</span>
                <h2 className="font-serif text-3xl md:text-5xl mb-6 text-gray-900 leading-tight">Beyond Distribution: <br/>Guardians of Quality</h2>
                <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                   <p>
                     In an industry often clouded by uncertainty, Shaa Trading stands as a beacon of authenticity. We don't just move boxes. We verify cold-chain integrity, audit batch numbers, and ensure that every product performs exactly as intended.
                   </p>
                   <p>
                     Founded in 2012 by a team of healthcare professionals and logistics experts, we recognized a critical gap in the market: the disconnect between premium manufacturers and the clinics that need them. We closed that gap.
                   </p>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div>
                       <h4 className="font-serif text-xl mb-1">Bengaluru</h4>
                       <p className="text-xs text-gray-400 uppercase tracking-widest">Headquarters</p>
                   </div>
                   <div>
                       <h4 className="font-serif text-xl mb-1">Since 2012</h4>
                       <p className="text-xs text-gray-400 uppercase tracking-widest">Trusted Service</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
   
        {/* STATS STRIP */}
        <div className="bg-black text-white py-16">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x sm:divide-x md:divide-x divide-white/10">
              {stats.map(stat => (
                 <div key={stat.id} className="p-2">
                    <div className="font-serif text-4xl md:text-5xl text-white mb-2">{stat.val}</div>
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
                 </div>
              ))}
           </div>
        </div>
   
        {/* THE COLD CHAIN PROMISE */}
        <div className="max-w-7xl mx-auto px-6 py-20 bg-white">
          <SectionHeader title="The Quality Promise" subtitle="How we protect the efficacy of sensitive healthcare products" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all group">
                 <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Thermometer size={24} className="text-gray-800" />
                 </div>
                 <h3 className="font-serif text-xl mb-3">Quality Storage</h3>
                 <p className="text-sm text-gray-500 font-light leading-relaxed">
                   Our facilities maintain strict temperature control for sensitive products, ensuring zero degradation before dispatch.
                 </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all group">
                 <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <ShieldCheck size={24} className="text-gray-800" />
                 </div>
                 <h3 className="font-serif text-xl mb-3">Batch Verification</h3>
                 <p className="text-sm text-gray-500 font-light leading-relaxed">
                   Every shipment is cross-referenced with manufacturer lot numbers. We employ a rigorous authentication process for every product.
                 </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all group">
                 <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Clock size={24} className="text-gray-800" />
                 </div>
                 <h3 className="font-serif text-xl mb-3">Reliable Logistics</h3>
                 <p className="text-sm text-gray-500 font-light leading-relaxed">
                   We utilize trusted logistics partners to minimize transit time. Proper packaging keeps products stable throughout delivery.
                 </p>
              </div>
          </div>
        </div>
   
        {/* FAQ SECTION */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h3 className="font-serif text-2xl mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
              {FAQS.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden transition-all hover:border-gray-300">
                      <button 
                          className="w-full px-6 py-5 text-left flex justify-between items-center group"
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                          <span className={`font-serif text-lg ${openFaq === index ? 'text-gray-800' : 'text-gray-900'} transition-colors`}>{faq.q}</span>
                          <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <p className="text-sm text-gray-500 font-light leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
                      </div>
                  </div>
              ))}
          </div>
        </div>
      </div>
    )
  };
  
  const ContactView = ({ showToast }) => {
    const [formData, setFormData] = useState({ name: '', clinicName: '', email: '', phone: '', message: '' });
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const whatsappMessage = `New Inquiry:%0A%0AName: ${encodeURIComponent(formData.name)}%0AClinic: ${encodeURIComponent(formData.clinicName)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone)}%0AMessage: ${encodeURIComponent(formData.message)}`;
      window.open(`https://wa.me/919916726373?text=${whatsappMessage}`, '_blank');
      showToast("Opening WhatsApp...", "success");
    };
  
    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  
    return (
      <div className="animate-fade-in bg-[#fbfbfb] min-h-screen pb-24">
        {/* HERO */}
        <div className="bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-30 pointer-events-none"></div>
           <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-white tracking-[0.3em] uppercase text-[10px] font-bold mb-3 block animate-slide-up">Partner With Us</span>
              <h1 className="font-serif text-4xl md:text-6xl mb-4 animate-slide-up" style={{animationDelay: '0.1s'}}>Get in Touch</h1>
              <p className="text-gray-400 font-light text-sm md:text-base max-w-lg mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>Dedicated support for clinics, hospitals, and distribution partners across India.</p>
           </div>
        </div>
  
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              
              {/* Contact Info Column */}
              <div className="space-y-10">
                  <div>
                      <h2 className="font-serif text-3xl text-gray-900 mb-6">Shaa Trading</h2>
                      <p className="text-gray-500 font-light leading-relaxed mb-8">
                          We are Bengaluru's trusted distributor of healthcare and clinical formulations since 2012. 
                          Whether you are a clinic looking to stock premium products or a manufacturer looking for a distribution partner, we are here to assist.
                      </p>
                      
                      <div className="space-y-6">
                          <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-800 shrink-0 shadow-sm">
                                  <Phone size={20} />
                              </div>
                              <div>
                                  <h4 className="font-serif text-lg mb-1">Phone Support</h4>
                                  <p className="text-sm text-gray-500 mb-1">+91 99167 26373</p>
                                  <p className="text-xs text-gray-400">Mon-Sat: 10am - 7pm IST</p>
                              </div>
                          </div>
  
                          <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-800 shrink-0 shadow-sm">
                                  <Mail size={20} />
                              </div>
                              <div>
                                  <h4 className="font-serif text-lg mb-1">Email</h4>
                                  <p className="text-sm text-gray-500 mb-1">shaatrading@gmail.com</p>
                                  <p className="text-xs text-gray-400">24/7 Digital Support</p>
                              </div>
                          </div>
  
                          <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-800 shrink-0 shadow-sm">
                                  <MapPin size={20} />
                              </div>
                              <div>
                                  <h4 className="font-serif text-lg mb-1">Location</h4>
                                  <p className="text-sm text-gray-500 leading-relaxed">
                                      Bengaluru, Karnataka<br/>
                                      Since 2012<br/>
                                      India
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
  
                  {/* Social Proof / Trust */}
                  <div className="pt-10 border-t border-gray-100">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Trusted By Professionals</h4>
                      <div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                           <span className="font-serif text-xl text-gray-800 font-bold">Glutax</span>
                           <span className="font-serif text-xl text-gray-800 font-bold">Veniscy</span>
                           <span className="font-serif text-xl text-gray-800 font-bold">Miracle White</span>
                      </div>
                  </div>
              </div>
  
              {/* Form Column */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 rounded-full filter blur-[60px] opacity-20 pointer-events-none"></div>
                  
                  <h3 className="font-serif text-2xl mb-2">Send an Inquiry</h3>
                  <p className="text-sm text-gray-500 mb-8">Fill out the form below and our wholesale team will contact you within 24 hours.</p>
  
                  <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="space-y-1.5">
                              <label className="text-xs font-bold uppercase tracking-wide text-gray-400">Contact Name</label>
                              <input required name="name" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors" value={formData.name} onChange={handleChange} />
                          </div>
                          <div className="space-y-1.5">
                              <label className="text-xs font-bold uppercase tracking-wide text-gray-400">Clinic / Business</label>
                              <input required name="clinicName" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors" value={formData.clinicName} onChange={handleChange} />
                          </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="space-y-1.5">
                              <label className="text-xs font-bold uppercase tracking-wide text-gray-400">Email Address</label>
                              <input required name="email" type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors" value={formData.email} onChange={handleChange} />
                          </div>
                          <div className="space-y-1.5">
                              <label className="text-xs font-bold uppercase tracking-wide text-gray-400">Phone Number</label>
                              <input required name="phone" type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors" value={formData.phone} onChange={handleChange} />
                          </div>
                      </div>
  
                      <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wide text-gray-400">Message</label>
                          <textarea required name="message" rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm resize-none focus:border-black transition-colors" value={formData.message} onChange={handleChange}></textarea>
                      </div>
  
                      <Button type="submit" className="w-full py-4 text-sm uppercase tracking-widest font-bold shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1 transition-all duration-300">
                          Send Inquiry
                      </Button>
                      <p className="text-[10px] text-gray-400 text-center mt-4">By submitting this form, you agree to our privacy policy. We respect your data.</p>
                  </form>
              </div>
  
          </div>
        </div>
      </div>
    );
  };
  
/* --- URL & SLUG HELPERS (CLEAN PATHS) --- */
const slugify = (str) => {
  if (!str) return '';
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const getProductSlug = (product) => {
  if (!product) return '';
  const base = slugify(product.name || '');
  return product.id != null ? `${base}-${product.id}` : base;
};

const getPostSlug = (post) => {
  if (!post) return '';
  const base = slugify(post.title || '');
  return post.id != null ? `${base}-${post.id}` : base;
};

const buildPathForPage = (page, opts = {}) => {
  switch (page) {
    case 'home':
      return '/';
    case 'shop':
      return '/shop';
    case 'about':
      return '/about';
    case 'contact':
      return '/contact';
    case 'blog':
      return '/blog';
    case 'blog-post':
      return opts.post ? `/blog/${getPostSlug(opts.post)}` : '/blog';
    case 'product':
      return opts.product ? `/product/${getProductSlug(opts.product)}` : '/shop';
    case 'terms':
      return '/terms';
    case 'privacy':
      return '/privacy';
    case 'shipping':
      return '/shipping';
    case 'return-policy':
      return '/return-policy';
    case 'refund-policy':
      return '/refund-policy';
    case 'success':
      return '/order-success';
    default:
      return '/';
  }
};

const getRouteFromLocation = () => {
  if (typeof window === 'undefined') {
    return { page: 'home', product: null, post: null, path: '/' };
  }

  const { pathname, search } = window.location;
  const cleanPath = pathname.replace(/\/+$|^$/g, '') || '/';
  const segments = cleanPath.split('/').filter(Boolean);
  const params = new URLSearchParams(search || '');
  const pageParam = params.get('page');
  const idParam = params.get('id');

  let page = 'home';
  let product = null;
  let post = null;

  if (segments.length === 0) {
    // No path segments – fall back to legacy query params if present
    if (pageParam === 'product' && idParam) {
      const found = PRODUCTS.find(p => String(p.id) === String(idParam));
      if (found) {
        page = 'product';
        product = found;
        return { page, product, post, path: buildPathForPage('product', { product }) };
      }
    } else if (pageParam === 'blog-post' && idParam) {
      const foundPost = BLOG_POSTS.find(p => String(p.id) === String(idParam));
      if (foundPost) {
        page = 'blog-post';
        post = foundPost;
        return { page, product, post, path: buildPathForPage('blog-post', { post }) };
      }
    } else if (pageParam === 'shop') {
      page = 'shop';
    } else if (pageParam === 'about') {
      page = 'about';
    } else if (pageParam === 'contact') {
      page = 'contact';
    } else if (pageParam === 'blog') {
      page = 'blog';
    } else if (pageParam === 'terms') {
      page = 'terms';
    } else if (pageParam === 'privacy') {
      page = 'privacy';
    } else if (pageParam === 'shipping') {
      page = 'shipping';
    } else if (pageParam === 'return-policy') {
      page = 'return-policy';
    } else if (pageParam === 'refund-policy') {
      page = 'refund-policy';
    } else if (pageParam === 'success') {
      page = 'success';
    } else {
      page = 'home';
    }

    return { page, product, post, path: buildPathForPage(page, { product, post }) };
  }

  const [first, second] = segments;

  switch (first) {
    case '':
      page = 'home';
      break;
    case 'shop':
      page = 'shop';
      break;
    case 'about':
      page = 'about';
      break;
    case 'contact':
      page = 'contact';
      break;
    case 'blog':
      if (second) {
        const slug = second;
        const foundPost = BLOG_POSTS.find(p => getPostSlug(p) === slug);
        if (foundPost) {
          page = 'blog-post';
          post = foundPost;
        } else {
          page = 'blog';
        }
      } else {
        page = 'blog';
      }
      break;
    case 'product':
      if (second) {
        const slug = second;
        const found = PRODUCTS.find(p => getProductSlug(p) === slug);
        if (found) {
          page = 'product';
          product = found;
        } else {
          page = 'shop';
        }
      } else {
        page = 'shop';
      }
      break;
    case 'terms':
      page = 'terms';
      break;
    case 'privacy':
      page = 'privacy';
      break;
    case 'shipping':
      page = 'shipping';
      break;
    case 'return-policy':
      page = 'return-policy';
      break;
    case 'refund-policy':
      page = 'refund-policy';
      break;
    case 'order-success':
      page = 'success';
      break;
    default:
      page = 'home';
      break;
  }

  const path = buildPathForPage(page, { product, post });
  return { page, product, post, path };
};

/* --- SEO CONFIG (SHAA TRADING) --- */
const getSeoConfig = (currentPage, selectedProduct, selectedPost) => {
  // Base defaults
  let title = 'Shaa Trading | Skin Whitening, Injectables & Aesthetic Supplies';
  let description = 'Shaa Trading is a Bengaluru-based distributor and supplier of skin whitening creams, glutathione injections, Korean injectables and aesthetic clinic essentials.';
  let jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Shaa Trading',
    url: 'https://shaatrading.in',
    logo: 'https://shaatrading.in/image/logo-t.jpg'
  };
  let keywords = 'Shaa Trading, skin whitening distributor, glutathione injections India, Aqua Skin, Glutax, Glowtiqa, clinic supplier, whitening creams, whitening soaps';
  let canonical = 'https://shaatrading.in/';
  let robots = 'index,follow';

  switch (currentPage) {
    case 'home':
      title = 'Shaa Trading | Skin Whitening & Glutathione Injection Distributor in India';
      description = 'Discover authentic glutathione injections, Aqua Skin, Glutax, Glowtiqa creams and advanced whitening products supplied to clinics and resellers across India.';
      canonical = 'https://shaatrading.in/';
      keywords = 'Shaa Trading, glutathione distributor India, skin whitening supplier, Aqua Skin injections, Glutax distributor, Glowtiqa creams, skin whitening wholesaler Bengaluru';
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Shaa Trading',
        url: 'https://shaatrading.in',
        image: 'https://shaatrading.in/image/logo-t.jpg',
        logo: 'https://shaatrading.in/image/logo-t.jpg',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          addressCountry: 'IN'
        }
      };
      break;

    case 'shop':
      title = 'Shop | Glutathione Injections, Glowtiqa Creams & Whitening Kits – Shaa Trading';
      description = 'Browse Aqua Skin, Glutax, Dr James, Glowtiqa and other advanced skin whitening injections, creams, soaps and supplements from Shaa Trading.';
      canonical = `https://shaatrading.in${buildPathForPage('shop')}`;
      keywords = 'buy glutathione injections, Aqua Skin India, Glutax injections, Dr James injection, Glowtiqa whitening cream, skin whitening products online, clinic supplies India';
      break;

    case 'about':
      title = 'About Shaa Trading | Bengaluru-based Skin Whitening Product Supplier';
      description = 'Learn about Shaa Trading, a Bengaluru-based distributor of glutathione injectables, whitening creams and professional aesthetic supplies since 2012.';
      canonical = `https://shaatrading.in${buildPathForPage('about')}`;
      keywords = 'about Shaa Trading, skin whitening supplier Bengaluru, glutathione wholesale India, aesthetic products distributor';
      break;

    case 'contact':
      title = 'Contact Shaa Trading | Wholesale & Clinic Supply Enquiries';
      description = 'Get in touch with Shaa Trading for wholesale price lists, bulk orders, reseller opportunities and clinic partnerships for skin whitening and injectable products.';
      canonical = `https://shaatrading.in${buildPathForPage('contact')}`;
      keywords = 'contact Shaa Trading, glutathione wholesale enquiry, clinic supply contact, skin whitening distributor contact';
      break;

    case 'blog':
      title = 'Clinical Insights | Glutathione, PDRN & IV Therapy – Shaa Trading Journal';
      description = 'Read educational articles on glutathione science, PDRN, IV therapy protocols and safety guidance for clinics and practitioners.';
      canonical = `https://shaatrading.in${buildPathForPage('blog')}`;
      keywords = 'glutathione science, PDRN information, IV therapy protocols, skin whitening education, Shaa Trading blog';
      break;

    case 'blog-post':
      if (selectedPost) {
        title = `${selectedPost.title} | Shaa Trading Clinical Journal`;
        description = selectedPost.excerpt || description;
        canonical = `https://shaatrading.in${buildPathForPage('blog-post', { post: selectedPost })}`;
        keywords = `${selectedPost.title}, ${selectedPost.category}, glutathione articles, clinical aesthetics, Shaa Trading journal`;
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: selectedPost.title,
          description: selectedPost.excerpt,
          author: selectedPost.author || 'Shaa Trading Editorial',
          datePublished: selectedPost.date,
          image: `https://shaatrading.in${selectedPost.image}`,
          publisher: {
            '@type': 'Organization',
            name: 'Shaa Trading',
            logo: {
              '@type': 'ImageObject',
              url: 'https://shaatrading.in/image/logo-t.jpg'
            }
          }
        };
      }
      break;

    case 'product':
      if (selectedProduct) {
        const shortDesc = selectedProduct.description || description;
        title = `${selectedProduct.name} | ${selectedProduct.brand} Supplier – Shaa Trading`;
        description = shortDesc.length > 155 ? shortDesc.slice(0, 152) + '…' : shortDesc;
        canonical = `https://shaatrading.in${buildPathForPage('product', { product: selectedProduct })}`;
        const baseKeywords = [
          selectedProduct.name,
          selectedProduct.brand,
          selectedProduct.category,
          'glutathione injection',
          'skin whitening',
          'whitening product',
          'clinic supply',
          'wholesaler India'
        ].filter(Boolean);
        keywords = baseKeywords.join(', ');
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: selectedProduct.name,
          image: [`https://shaatrading.in${selectedProduct.image}`],
          description: description,
          brand: {
            '@type': 'Brand',
            name: selectedProduct.brand
          },
          sku: selectedProduct.sku || undefined,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: selectedProduct.price,
            availability: 'https://schema.org/InStock',
            url: canonical
          }
        };
      }
      break;

    case 'terms':
      title = 'Terms & Conditions | Shaa Trading';
      description = 'Read the professional use terms, liability and purchasing eligibility for Shaa Trading clients, clinics and resellers.';
      canonical = `https://shaatrading.in${buildPathForPage('terms')}`;
      keywords = 'Shaa Trading terms and conditions, skin whitening product terms, clinic supply terms';
      robots = 'noindex,follow';
      break;

    case 'privacy':
      title = 'Privacy Policy | Shaa Trading';
      description = 'Understand how Shaa Trading handles, stores and protects your personal, clinic and order data.';
      canonical = `https://shaatrading.in${buildPathForPage('privacy')}`;
      keywords = 'Shaa Trading privacy policy, data handling, data protection, clinic data privacy';
      robots = 'noindex,follow';
      break;

    case 'shipping':
      title = 'Shipping Policy | Shaa Trading';
      description = 'Learn about domestic shipping timelines, handling and packaging processes for Shaa Trading orders across India.';
      canonical = `https://shaatrading.in${buildPathForPage('shipping')}`;
      keywords = 'Shaa Trading shipping policy, delivery time, order handling, India shipping whitening products';
      robots = 'noindex,follow';
      break;

    case 'return-policy':
      title = 'Return Policy | Shaa Trading';
      description = 'View our guidelines for damaged, incorrect or compromised products and return eligibility for customers and clinics.';
      canonical = `https://shaatrading.in${buildPathForPage('return-policy')}`;
      keywords = 'Shaa Trading return policy, damaged product return, clinic returns, whitening injection returns';
      robots = 'noindex,follow';
      break;

    case 'refund-policy':
      title = 'Refund Policy | Shaa Trading';
      description = 'Read our refund conditions for cancelled orders, payment failures and exceptional disputes.';
      canonical = `https://shaatrading.in${buildPathForPage('refund-policy')}`;
      keywords = 'Shaa Trading refund policy, payment refund, order cancellation refund';
      robots = 'noindex,follow';
      break;

    case 'success':
      title = 'Order Confirmed | Shaa Trading';
      description = 'Your order and payment have been received by Shaa Trading. Our team will confirm dispatch and shipping details shortly.';
      canonical = `https://shaatrading.in${buildPathForPage('success')}`;
      keywords = 'Shaa Trading order success, payment success, whitening order confirmed';
      robots = 'noindex,follow';
      break;

    default:
      break;
  }

  return { title, description, jsonLd, keywords, canonical, robots };
};

  /* --- Main App --- */
  
  export default function ShaaTradingApp() {
    const [currentPage, setCurrentPage] = useState('home');
    const [cart, setCart] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedPost, setSelectedPost] = useState(null);
    const [toast, setToast] = useState(null);
    const [transactionId, setTransactionId] = useState(null);

    // --- LIFTED STATE FOR FILTERS AND SEARCH ---
    const [shopFilter, setShopFilter] = useState('All');
    const [brandFilter, setBrandFilter] = useState('All Brands'); // Lifted
    const [searchQuery, setSearchQuery] = useState(''); // Lifted
      // --- AUTH STATE ---
    const [authToken, setAuthToken] = useState(() => localStorage.getItem('shaa_token') || '');
    const [user, setUser] = useState(() => {
      try {
        const raw = localStorage.getItem('shaa_user');
        return raw ? JSON.parse(raw) : null;
      } catch {
        return null;
      }
    });

    const handleLogout = () => {
      setAuthToken('');
      setUser(null);
      localStorage.removeItem('shaa_token');
      localStorage.removeItem('shaa_user');
      showToast('Logged out successfully', 'success');
      setCurrentPage('home');
    };

        // Listen for History Navigation (Back/Forward buttons)
    useEffect(() => {
      // Initial route resolution from current URL
      const initialRoute = getRouteFromLocation();
      setCurrentPage(initialRoute.page);
      if (initialRoute.product) setSelectedProduct(initialRoute.product);
      if (initialRoute.post) setSelectedPost(initialRoute.post);

      const initialState = {
        page: initialRoute.page,
        product: initialRoute.product || null,
        post: initialRoute.post || null,
      };
      window.history.replaceState(initialState, '', initialRoute.path);

      const handlePopState = (event) => {
        if (event.state && event.state.page) {
          setCurrentPage(event.state.page);
          setSelectedProduct(event.state.product || null);
          setSelectedPost(event.state.post || null);
        } else {
          const route = getRouteFromLocation();
          setCurrentPage(route.page);
          setSelectedProduct(route.product || null);
          setSelectedPost(route.post || null);
        }
        setMobileMenuOpen(false);
      };

      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const showToast = (message, type = 'success') => {
      setToast({ message, type });
    };

    const navigateTo = (page, item = null) => {
      if (page === 'product' && item) setSelectedProduct(item);
      if (page === 'blog-post' && item) setSelectedPost(item); 

      setCurrentPage(page);
      setMobileMenuOpen(false);
      window.scrollTo(0, 0);

      const stateObj = { 
        page, 
        product: page === 'product' ? item : null,
        post: page === 'blog-post' ? item : null
      };
      const path = buildPathForPage(page, { product: stateObj.product, post: stateObj.post });
      window.history.pushState(stateObj, '', path);
    };

    const addToCart = (product, quantity = 1) => {
      setCart(prev => {
        const existing = prev.find(item => item.id === product.id);
        if (existing) {
          return prev.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          );
        }
        return [...prev, { ...product, quantity }];
      });
      setCartOpen(true);
      showToast(`Added ${product.name} to cart`, 'success');
    };

    const removeFromCart = (id) => {
      setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
      setCart(prev =>
        prev.map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
      );
    };

    // ... (Keep Razorpay Integration code as is) ...
    // Note: Insert loadRazorpay and handlePayment functions here (omitted for brevity as they didn't change logic, just placement)
    const loadRazorpay = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };
  
   const handlePayment = async (customerDetails) => {
      const res = await loadRazorpay();
      
      if (!res) {
        showToast('Razorpay SDK failed to load. Are you online?', 'error');
        return;
      }
  
      // Save temp data for the Success Page View
      localStorage.setItem('temp_cart', JSON.stringify(cart));
      localStorage.setItem('temp_user', JSON.stringify(customerDetails));
  
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
      try {
        // 1. Create Order on Server
        const data = await fetch(`${API_BASE_URL}/api/payment/order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                // Send amount in rupees; server will convert to paise (amount * 100)
                amount: total,
                currency: "INR",
                products: cart,
                userId: user ? user._id : null
            })
        }).then((t) => t.json());

        const options = {
            key: RAZORPAY_KEY_ID, 
            amount: data.amount,
            currency: data.currency,
            name: "Shaa Trading",
            description: "Wholesale Healthcare Supplies",
            image: "/image/shaa-logo.png",
            order_id: data.id, 
            handler: async function (response) {
                
                // 2. Verify Payment on Server
                const verifyRes = await fetch(`${API_BASE_URL}/api/payment/verify`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature
                    })
                }).then((t) => t.json());

                if (verifyRes.success) {
                    // --- NEW STEP: SAVE ORDER TO DATABASE ---
                    // This ensures it shows up in your Admin Dashboard
                    try {
                        const orderPayload = {
                            userId: user ? user._id : null,
                            razorpayOrderId: (verifyRes.order && verifyRes.order.razorpayOrderId) ? verifyRes.order.razorpayOrderId : response.razorpay_order_id,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpaySignature: response.razorpay_signature,
                            amount: (verifyRes.order && verifyRes.order.amount) ? verifyRes.order.amount : total * 100, // paise
                            currency: (verifyRes.order && verifyRes.order.currency) ? verifyRes.order.currency : 'INR',
                            products: cart,
                            customerName: customerDetails.name,
                            email: customerDetails.email,
                            phone: customerDetails.phone,
                            address: customerDetails.address,
                            status: 'Paid'
                        };

                        await fetch(`${BASE_URL}/api/orders/create`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(orderPayload)
                        });
                        if (import.meta.env.MODE === 'development') console.debug("Order saved to DB");
                    } catch (saveError) {
                        console.error("Failed to save order to DB", saveError);
                        // We still continue to success page, but maybe show a warning log
                    }
                    // ----------------------------------------

                    setTransactionId(response.razorpay_payment_id);
                    setCartOpen(false);
                    setCart([]); // Clear the cart in state
                    navigateTo('success');
                } else {
                    showToast("Payment verification failed", "error");
                }
            },
            prefill: {
                name: customerDetails.name,
                email: customerDetails.email,
                contact: customerDetails.phone
            },
            notes: {
                address: customerDetails.address
            },
            theme: {
                color: "#000000"
            }
        };
  
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (error) {
        console.error("Payment Error:", error);
        showToast("Could not initiate payment. Server error.", "error");
      }
    };

    const { title, description, jsonLd, keywords, canonical, robots } = getSeoConfig(currentPage, selectedProduct, selectedPost);
    
    return (
      <div className="font-sans text-gray-900 bg-[#fbfbfb] min-h-screen flex flex-col selection:bg-gray-800 selection:text-white">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          {keywords && <meta name="keywords" content={keywords} />}
          {robots && <meta name="robots" content={robots} />}
          <link rel="canonical" href={canonical} />
        </Helmet>
        
        {/* Global Styles */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@200;300;400;500;600&display=swap');
          .font-serif { font-family: 'Cormorant Garamond', serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
          .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
          .animate-marquee { animation: marquee 20s linear infinite; }
          @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slide-up { from { transform: translate(0, 40px); opacity: 0; } to { transform: translate(0, 0); opacity: 1; } }
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        `}</style>
  
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
  
        {currentPage === 'success' ? (
          <PaymentSuccessView navigateTo={navigateTo} showToast={showToast} transactionId={transactionId} />
        ) : (
          <>
            <Navigation 
              currentPage={currentPage} 
              setCurrentPage={navigateTo}
              cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
              toggleCart={() => setCartOpen(true)}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
              setShopFilter={setShopFilter} 
              setBrandFilter={setBrandFilter}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              user={user}                 // PASSING USER
              handleLogout={handleLogout} // PASSING LOGOUT
            />
  
           <main className="flex-grow">
              {currentPage === 'home' && <HomeView navigateTo={navigateTo} addToCart={addToCart} setShopFilter={setShopFilter} />}
              
              {currentPage === 'shop' && (
                <ShopView 
                  navigateTo={navigateTo} 
                  addToCart={addToCart} 
                  filter={shopFilter} 
                  setFilter={setShopFilter} 
                  brandFilter={brandFilter}
                  setBrandFilter={setBrandFilter}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              )}

              {currentPage === 'product' && selectedProduct && <ProductView product={selectedProduct} addToCart={addToCart} navigateTo={navigateTo} />}
              {currentPage === 'blog' && <BlogView navigateTo={navigateTo} />}
              {currentPage === 'blog-post' && selectedPost && <BlogPostView post={selectedPost} navigateTo={navigateTo} />}
              {currentPage === 'about' && <AboutView />}
              {currentPage === 'contact' && <ContactView showToast={showToast} />}
              {currentPage === 'privacy' && <PrivacyPolicyView />}
              {currentPage === 'terms' && <TermsOfServiceView />}
              {currentPage === 'shipping' && <ShippingPolicyView />}
              
              {currentPage === 'login' && (
                <LoginView
                  navigateTo={navigateTo}
                  setAuthToken={setAuthToken}
                  setUser={setUser}
                  showToast={showToast}
                />
              )}

              {currentPage === 'signup' && (
                <SignupView
                  navigateTo={navigateTo}
                  showToast={showToast}
                />
              )}

              {currentPage === 'track' && (
                <TrackOrderView
                  navigateTo={navigateTo}
                  showToast={showToast}
                />
              )}

              {currentPage === 'orders' && (
                <OrderHistoryView
                  token={authToken}
                  user={user}
                  showToast={showToast}
                  navigateTo={navigateTo}
                />
              )}

              {/* --- CORRECTED ADMIN RENDER LOGIC --- */}
              {currentPage === 'admin' && authToken && user?.isAdmin ? (
                <AdminView
                  token={authToken}
                  user={user}
                  showToast={showToast}
                  navigateTo={navigateTo}
                  handleLogout={handleLogout}
                />
              ) : currentPage === 'admin' ? (
                <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
                  <div className="text-center">
                    <h1 className="text-3xl font-serif text-gray-900 mb-2">Access Denied</h1>
                    <p className="text-gray-500 mb-6">You do not have permission to access the admin dashboard.</p>
                    <button onClick={() => navigateTo('home')} className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                      Back to Home
                    </button>
                  </div>
                </div>
              ) : null}
              {/* --- END CORRECTED LOGIC --- */}

            </main>
  
            <Footer setCurrentPage={navigateTo} showToast={showToast} />
  
            <CartDrawer 
              isOpen={cartOpen} 
              onClose={() => setCartOpen(false)}
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              checkout={handlePayment} 
            />
          </>
        )}
      </div>
    );
  };