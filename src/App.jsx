import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Instagram, Facebook, Linkedin, ArrowRight, Trash2, Plus, Minus, Mail, Phone, MapPin, ShieldCheck, Building2, Stethoscope, FileText, Award, Search, ChevronRight, Check, ChevronDown, Sparkles, Truck, Globe, ArrowLeft, Grid, List, ArrowUpDown, Thermometer, Clock, User, SlidersHorizontal } from 'lucide-react';

/* --- EMAILJS CONFIGURATION (SHAA TRADING) --- */
const EMAILJS_SERVICE_ID = "service_h64g36k";
const EMAILJS_TEMPLATE_ID = "template_5gaadeg";
const EMAILJS_PUBLIC_KEY = "4025kcdA_kwN4-yDH";

/* --- API CONFIGURATION --- */
// Updated to point to your live Render Backend
const API_BASE_URL = "https://shaa-backend.onrender.com";

/* --- RAZORPAY CONFIGURATION --- */
// Replace with your actual Key ID from Razorpay Dashboard
const RAZORPAY_KEY_ID = "rzp_live_Rgl2NCpQcyFajX"; 

/* --- Data & Constants --- */
const BRANDS_LIST = [
  "All Brands", "Glutax", "Aqua Skin/Veniscy", "Miracle White", "Glowtiqa Paris",
  "Relumins", "Nc24", "Lucchini", "Shiro", "Daehan Nupharm", "Saint Blanc",
  "Neutro", "Dr James", "Vita Glow", "iskin", "Core", "Ratiopharm",
  "LemonBottle", "KFDA", "St Dalfour", "Miracle Gain", "Roche", "Japan Beauty Booster"
];

const FAQS = [
  { q: "Are your products authentic?", a: "Yes, exclusively. We are an authorized distributor sourcing directly from manufacturers to guarantee 100% authenticity and efficacy. Every batch is verified before shipment." },
  { q: "Do you require a medical license to purchase?", a: "While we primarily supply to licensed clinics and dermatologists, certain supplements and skincare items are available for general purchase. Injectables are strictly for professional use." },
  { q: "What is the typical shipping time?", a: "Domestic orders are typically processed within 24 hours. Delivery to metro cities takes 2-3 business days, while other regions take 4-6 business days." },
  { q: "Do you offer bulk discounts?", a: "Yes, we offer tiered pricing for wholesale partners. Please contact our sales team or register as a partner on the Contact page for a price list." }
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Science Behind Glutathione: Beyond Skin Whitening",
    excerpt: "Exploring the systemic antioxidant benefits of high-dose glutathione therapies and their role in cellular detoxification and immune system support.",
    content: `
      <p class="mb-6">Glutathione, often referred to as the "master antioxidant," is a tripeptide composed of three amino acids: cysteine, glutamine, and glycine. While it is widely recognized in the aesthetic industry for its skin-whitening properties via melanogenesis inhibition, its clinical significance extends far beyond dermatology.</p>
      <h3 class="text-2xl font-serif mb-4 mt-8">Mechanism of Action</h3>
      <p class="mb-6">At a cellular level, glutathione exists in two states: reduced (GSH) and oxidized (GSSG). The ratio of reduced to oxidized glutathione within cells is often used as a measure of cellular toxicity.</p>
      <h3 class="text-2xl font-serif mb-4 mt-8">Systemic Benefits</h3>
      <p class="mb-6">Beyond its depigmenting effects, high-dose glutathione therapy supports liver detoxification by binding to toxins and facilitating their excretion.</p>
    `,
    date: "Oct 24, 2025",
    image: "/image/blog1.jpg", 
    category: "Clinical Science",
    author: "Dr. A. Mehta"
  },
  {
    id: 2,
    title: "Understanding PDRN: The Salmon DNA Revolution",
    excerpt: "Why Polydeoxyribonucleotide (PDRN) is becoming the gold standard for skin regeneration and wound healing in aesthetic medicine.",
    content: `
      <p class="mb-6">Polydeoxyribonucleotide (PDRN) has rapidly emerged as a cornerstone of regenerative aesthetic medicine. Derived from salmon sperm DNA, PDRN acts as an A2A receptor agonist.</p>
      <h3 class="text-2xl font-serif mb-4 mt-8">The Mechanism of Tissue Repair</h3>
      <p class="mb-6">PDRN works by stimulating the metabolic activity of fibroblasts, the cells responsible for collagen and elastin production.</p>
    `,
    date: "Nov 02, 2025",
    image: "/image/blog2.jpg", 
    category: "Ingredient Spotlight",
    author: "Clinical Team"
  },
  {
    id: 3,
    title: "Choosing the Right IV Drip for Pigmentation",
    excerpt: "A practitioner's guide to selecting the correct cocktail of Vitamin C, Glutathione, and Collagen for recalcitrant melasma.",
    content: `
      <p class="mb-6">Treating melasma and hyperpigmentation requires a multi-faceted approach. While topical tyrosinase inhibitors are standard, Intravenous (IV) therapy offers a systemic route.</p>
    `,
    date: "Nov 15, 2025",
    image: "/image/blog3.jpg", 
    category: "Treatment Protocols",
    author: "Dr. S. Williams"
  },
  {
    id: 4,
    title: "Safety Protocols for Intravenous Therapy",
    excerpt: "Essential safety checklists and best practices for administering IV beauty treatments in a clinical setting.",
    content: `
      <p class="mb-6">As the popularity of IV beauty drips surges, so does the responsibility of the practitioner to ensure patient safety.</p>
    `,
    date: "Nov 20, 2025",
    image: "/image/blog4.jpg", 
    category: "Safety & Compliance",
    author: "Safety Board"
  }
];

const PRODUCTS = [
  {
    id: 1,
    name: "Glutax 50000000GS Advanced",
    category: "Injection",
    brand: "Glutax",
    price: 14500,
    image: "/image/5gs.jpg",
    description: "ReCombined White RNA | 50 Million GS",
    details: `<strong>Glutax 50000000GS</strong><br/>High-performance 10-session treatment engineered for those who have plateaued with standard whitening therapies.`,
    benefits: ["50 Million GS", "ReCombined RNA", "Intense Whitening", "Plateau Breaker"],
    sku: "GLU-50M-GS",
    volume: "10 Sessions"
  },
  {
    id: 2,
    name: "Saint Blanc XIII",
    category: "Injection",
    brand: "Saint Blanc",
    price: 16500,
    image: "/image/Saint-blanc.jpg",
    description: "Swiss Formulation | 4 Sets Complex",
    details: `<strong>Saint Blanc XIII</strong><br/>Elite Whitening System designed for visible skin brightening.`,
    benefits: ["Swiss Origin", "4-Step System", "13 Ingredients", "Complex Therapy"],
    sku: "SAINT-BLANC-13",
    volume: "4 Sets"
  },
  {
    id: 3,
    name: "Glutax 75GX DCRP 750000",
    category: "Injection",
    brand: "Glutax",
    price: 12500,
    image: "/image/glutax-dcrp.jpg",
    description: "DNA Cell Revitalize Process | 14 Sessions",
    details: `<strong>Glutax 75GX DCRP</strong><br/>Comprehensive 14-session therapy specifically designed to arrest aging.`,
    benefits: ["DCRP Technology", "14 Sessions", "DNA Repair", "Sustained Glow"],
    sku: "GLU-75GX-DCRP",
    volume: "14 Sessions"
  },
  {
    id: 4,
    name: "Miracle White 120,000mg",
    category: "Injection",
    brand: "Miracle White",
    price: 9200,
    image: "/image/mw-120000.jpg",
    description: "Royal Gold Booster | Nano Concentrated",
    details: `<strong>Miracle White 120,000mg</strong><br/>Royal Gold edition utilizing Nano Concentrated technology.`,
    benefits: ["120,000mg Strength", "Royal Gold Edition", "Nano Concentrated", "Radiance Booster"],
    sku: "MW-120K-GOLD",
    volume: "6 Sessions"
  },
   {
    id: 5,
    name: "Japan Beauty Booster",
    category: "Supplement",
    brand: "Japan Beauty Booster",
    price: 4800,
    image: "/image/jp-boost.jpg",
    description: "Complexion Excellence | Daily Supplements",
    details: `<strong>Japan Beauty Booster</strong><br/>Premium daily supplement formulated in Japan.`,
    benefits: ["Japan Formula", "Oral Booster", "Complexion Excellence", "Daily Use"],
    sku: "JBB-60T",
    volume: "60 Tablets"
  },
  {
    id: 6,
    name: "Hyaron Prefilled Injection",
    category: "Filler", 
    brand: "Daehan Nupharm",
    price: 6000,
    image: "/image/IMG_1838.jpg",
    description: "Sodium Hyaluronate 2.5ml | Skin Booster",
    details: `<strong>Hyaron Prefilled Injection</strong><br/>Sodium Hyaluronate Booster for the "Glass Skin" effect.`,
    benefits: ["Sodium Hyaluronate", "Deep Hydration", "Glass Skin Effect", "Prefilled Syringe"],
    sku: "HYARON-10",
    volume: "10 Syringes (2.5ml)"
  },
  {
    id: 7,
    name: "Vita Glow Advanced Night Cream",
    category: "Cream",
    brand: "Vita Glow",
    price: 650,
    image: "/image/Picsart_25-11-27_19-44-06-133.jpg",
    description: "Advanced Skin Whitening | Result in 7 Days",
    details: `<strong>Vita Glow Advanced</strong><br/>Designed to brighten skin tone within just 7 days.`,
    benefits: ["7 Day Results", "Advanced Formula", "Dark Spot Reduction", "Night Therapy"],
    sku: "VG-ADV-BLK",
    volume: "30g"
  }
];

const CATEGORIES = [
  { name: "Injection", id: "Injection" },
  { name: "Cream", id: "Cream" },
  { name: "Weight", id: "Weight" },
  { name: "Soap", id: "Soap" },
  { name: "Treatment", id: "Treatment" },
  { name: "Filler", id: "Filler" },
  { name: "Supplement", id: "Supplement" }
];

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

const Navigation = ({ currentPage, setCurrentPage, cartCount, toggleCart, mobileMenuOpen, setMobileMenuOpen, setShopFilter }) => {
    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Shop', id: 'shop' },
        { name: 'Blog', id: 'blog' }, 
        { name: 'Contact', id: 'contact' },
    ];
    return (
        <>
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
             <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                <div className="cursor-pointer flex items-center gap-2" onClick={() => setCurrentPage('home')}>
                    <img src="/image/shaa-logo.png" alt="SHAA TRADING" className="h-10 md:h-16 w-auto object-contain" />
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                      <button key={link.id} onClick={() => setCurrentPage(link.id)} className={`text-sm font-medium tracking-wide transition-colors duration-300 ${currentPage === link.id ? 'text-gray-900' : 'text-gray-600 hover:text-black'}`}>
                        {link.name}
                      </button>
                    ))}
                </nav>
                <div className="flex items-center gap-4 md:gap-6">
                    <button onClick={() => setCurrentPage('shop')} className="hidden md:block text-gray-800 hover:text-black"><Search size={22} /></button>
                    <button className="relative p-2 text-gray-800 hover:text-black" onClick={toggleCart}>
                        <ShoppingBag size={22} />
                        {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">{cartCount}</span>}
                    </button>
                    <button className="md:hidden p-2 text-gray-800" onClick={() => setMobileMenuOpen(true)}>
                        <Menu size={24} />
                    </button>
                </div>
             </div>
            </header>
            
            <div className={`fixed inset-0 z-[60] flex ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileMenuOpen(false)} />
                <div className={`relative bg-white w-[85%] max-w-xs h-full shadow-2xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex flex-col h-full">
                        <div className="p-6 flex justify-between items-center border-b border-gray-100">
                            <span className="text-xl font-serif tracking-wide">MENU</span>
                            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-black"><X size={24} /></button>
                        </div>
                        <div className="flex-1 overflow-y-auto py-4">
                            <div className="flex flex-col">
                                <button onClick={() => { setShopFilter('All'); setCurrentPage('shop'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 border-b border-gray-50 flex justify-between items-center">Shop All <ChevronRight size={16} className="text-gray-400"/></button>
                                <div className="py-2">
                                    <p className="px-6 py-2 text-xs text-gray-400 font-bold tracking-widest uppercase">Categories</p>
                                    <button onClick={() => { setShopFilter('Injection'); setCurrentPage('shop'); setMobileMenuOpen(false); }} className="w-full px-6 py-3 text-left text-gray-600 hover:text-gray-900 transition-colors">Injections</button>
                                    <button onClick={() => { setShopFilter('Supplement'); setCurrentPage('shop'); setMobileMenuOpen(false); }} className="w-full px-6 py-3 text-left text-gray-600 hover:text-gray-900 transition-colors">Supplements</button>
                                    <button onClick={() => { setShopFilter('Filler'); setCurrentPage('shop'); setMobileMenuOpen(false); }} className="w-full px-6 py-3 text-left text-gray-600 hover:text-gray-900 transition-colors">Fillers</button>
                                </div>
                                <button onClick={() => { setCurrentPage('blog'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 border-t border-gray-50">BLOG</button>
                                <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 border-t border-gray-50">ABOUT US</button>
                                <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 border-b border-gray-50">CONTACT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

const PaymentSuccessView = ({ navigateTo, showToast, transactionId }) => {
    const [status, setStatus] = useState('processing'); 

    useEffect(() => {
      const processOrder = async () => {
        const storedCart = JSON.parse(localStorage.getItem('temp_cart') || '[]');
        const storedUser = JSON.parse(localStorage.getItem('temp_user') || '{}');
        
        // Use passed transactionId or fallback to URL param for manual visits
        const queryParams = new URLSearchParams(window.location.search);
        const txnId = transactionId || queryParams.get('tid') || 'DEMO-' + Date.now();
  
        if (storedCart.length === 0) {
          setStatus('error');
          return;
        }
  
        const orderItemsHTML = storedCart.map(item => 
          `• <b>${item.name}</b> (Brand: ${item.brand}) <br/>&nbsp;&nbsp; Qty: ${item.quantity} | Price: ₹${item.price}`
        ).join('<br/><br/>');
  
        const totalAmount = storedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
        const emailParams = {
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
          
          await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailParams, EMAILJS_PUBLIC_KEY);
          
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fbfbfb] text-center px-4">
        {status === 'processing' && (
          <div className="animate-pulse">
            <h2 className="text-2xl font-serif mb-2">Finalizing Order...</h2>
            <p className="text-gray-500">Please do not close this window.</p>
          </div>
        )}
  
        {status === 'sent' && (
          <div className="animate-fade-in bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md w-full">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} />
            </div>
            <h2 className="text-3xl font-serif mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-6">Thank you for shopping with SHAA TRADING. Your order details have been sent to our admin team.</p>
            <Button onClick={() => { window.history.replaceState(null, "", "/"); navigateTo('home'); }} className="w-full">
              Return to Home
            </Button>
            <div className="mt-4 text-xs text-gray-400">Powered by SHAA TRADING</div>
          </div>
        )}
  
        {status === 'error' && (
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
             <h2 className="text-2xl font-serif text-red-500 mb-2">Something went wrong</h2>
             <p className="text-gray-500 mb-6">We received your payment, but couldn't generate the order receipt automatically. Please contact support.</p>
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
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
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

const Footer = ({ setCurrentPage, showToast }) => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubscribe = async () => {
    if(!phone || phone.length < 10) {
        showToast("Please enter a valid WhatsApp number.", "error");
        return;
    }
    setLoading(true);
    // Construct the WhatsApp URL
    const message = `Hi, I'd like to subscribe to Shaa Trading wholesale updates. My number is: ${phone}`;
    const whatsappUrl = `https://wa.me/919916726373?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    showToast("Opening WhatsApp...", "success");
    setPhone('');
    setLoading(false);
  };

  return (
  <footer className="bg-[#0a0a0a] text-white border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <img src="/image/shaa-logo.png" alt="SHAA TRADING" className="h-14 w-auto object-contain invert brightness-0 filter bg-white p-1 rounded" />
          <p className="text-gray-400 text-sm leading-relaxed font-light max-w-xs">
            Bengaluru-based distributor, supplier, and wholesaler since 2012. Providing trusted healthcare and skincare products to professionals across India.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-serif text-lg mb-6">Explore</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={12} /> All Products</button></li>
            <li><button onClick={() => setCurrentPage('blog')} className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={12} /> Clinical Journal</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={12} /> Our Story</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={12} /> Partner Program</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-serif text-lg mb-6">Contact</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-white" /> 
                <span>shaatrading@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-white" /> 
                <span>+91 99167 26373</span>
            </li>
            <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white" /> 
                <span>Bengaluru, Karnataka<br/>Since 2012</span>
            </li>
          </ul>
        </div>

        {/* Newsletter / WhatsApp Updates */}
        <div>
          <h3 className="text-white font-serif text-lg mb-6">WhatsApp Updates</h3>
          <p className="text-gray-400 text-xs mb-4">Get exclusive wholesale price lists and stock alerts directly on WhatsApp.</p>
          <div className="flex flex-col gap-3">
            <input 
                type="tel" 
                placeholder="WhatsApp Number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-white w-full rounded"
            />
            <button 
                onClick={handleSubscribe} 
                disabled={loading}
                className="bg-white text-black px-4 py-3 font-medium text-sm hover:bg-gray-100 transition-colors rounded uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
                {loading ? 'Subscribing...' : <>Subscribe <ArrowRight size={14}/></>}
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; 2025 SHAA TRADING. All rights reserved.</p>
        <div className="flex gap-6">
            <button onClick={() => setCurrentPage('privacy')} className="hover:text-white">Privacy Policy</button>
            <button onClick={() => setCurrentPage('terms')} className="hover:text-white">Terms of Service</button>
            <button onClick={() => setCurrentPage('shipping')} className="hover:text-white">Shipping Policy</button>
        </div>
      </div>
    </div>
  </footer>
  );
};

const HomeView = ({ navigateTo, addToCart, setShopFilter }) => (
    <div className="animate-fade-in bg-[#fbfbfb]">
      {/* HERO SECTION */}
      <div className="relative w-full min-h-[85vh] bg-black flex flex-col justify-center items-center text-center overflow-hidden">
          <div 
              className="absolute inset-0 z-0 bg-cover bg-center opacity-60 transition-opacity duration-1000 animate-fade-in"
              style={{ 
                  backgroundImage: 'url("/image/ban1.jpg")',
                  backgroundPosition: 'center 20%'
              }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 z-0" />
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-20 pb-12">
              <div className="animate-slide-up">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                      <Sparkles size={12} /> Premium Healthcare Supply
                  </span>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
                      Professional <br/>
                      <span className="italic text-white font-light">Healthcare Solutions</span>
                  </h1>
                  <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                      Trusted supplier of medical-grade skincare and healthcare products. 
                      Authorized distributor for licensed professionals since 2012.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-5">
                      <Button onClick={() => navigateTo('shop')} variant="secondary" className="px-10 py-4 text-sm font-bold tracking-widest uppercase w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                          Shop Now
                      </Button>
                      <Button onClick={() => navigateTo('shop')} variant="outline" className="px-10 py-4 text-sm font-bold tracking-widest uppercase w-full sm:w-auto hover:bg-white hover:text-black border-white/30">
                          View Collections
                      </Button>
                  </div>
              </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block">
              <ArrowUpDown size={20} />
          </div>
      </div>
  
      {/* TICKER - UPDATED FOR PAN INDIA */}
      <div className="bg-black text-white/80 py-3 border-b border-white/10 overflow-hidden relative z-20">
          <div className="flex items-center gap-8 md:gap-12 animate-marquee whitespace-nowrap min-w-full px-4 text-[10px] md:text-xs tracking-widest uppercase font-medium">
              <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-white"/> 100% Authentic</span>
              <span className="flex items-center gap-2"><Truck size={14} className="text-white"/> Pan India Shipping</span>
              <span className="flex items-center gap-2"><Award size={14} className="text-white"/> Authorized Distributor</span>
              <span className="flex items-center gap-2"><MapPin size={14} className="text-white"/> 24-48h Dispatch</span>
              <span className="flex items-center gap-2"><Globe size={14} className="text-white"/> Direct Sourcing</span>
              {/* Duplicated for smooth loop on wide screens */}
              <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-white"/> 100% Authentic</span>
              <span className="flex items-center gap-2"><Truck size={14} className="text-white"/> Pan India Shipping</span>
          </div>
      </div>
  
      {/* BRAND MARQUEE */}
      <section className="py-8 md:py-12 bg-white border-b border-gray-100 overflow-hidden">
          <p className="text-center text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mb-6">Trusted Brand Partners</p>
          <div className="flex gap-8 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 justify-center flex-wrap px-6">
              {['Glutax', 'Miracle White', 'Aqua Skin', 'Nc24', 'Relumins', 'Daehan'].map(brand => (
                  <span key={brand} className="text-lg md:text-2xl font-serif font-bold text-gray-800 cursor-default">{brand}</span>
              ))}
          </div>
      </section>
  
      {/* CURATED CATEGORIES */}
      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
          <SectionHeader title="Curated Collections" subtitle="Explore our specialized range of healthcare formulations" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                  { name: 'Healthcare Injections', img: '/image/Glutax-50000000GS.jpg', desc: 'Glutathione & Medical Solutions', filter: 'Injection' },
                  { name: 'Dermal Fillers', img: '/image/IMG_1838.jpg', desc: 'HA & PDRN Boosters', filter: 'Filler' },
                  { name: 'Oral Supplements', img: '/image/jp-boost.jpg', desc: 'Maintenance & Care', filter: 'Supplement' }
              ].map((cat, idx) => (
                  <div 
                      key={idx}
                      onClick={() => { setShopFilter(cat.filter); navigateTo('shop'); }}
                      className="group relative h-[250px] md:h-[400px] overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors z-10" />
                      <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 bg-gradient-to-t from-black/90 to-transparent">
                          <h3 className="text-white font-serif text-2xl md:text-3xl mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{cat.name}</h3>
                          <p className="text-white/80 text-xs md:text-sm font-light mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cat.desc}</p>
                          <span className="text-white text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all">Shop Now <ArrowRight size={12}/></span>
                      </div>
                  </div>
              ))}
          </div>
      </section>
  
      {/* NEW SECTION: TRUSTED BY INDIA */}
      <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-4">Trusted Across India</h2>
              <p className="text-gray-500 font-light max-w-2xl mx-auto mb-10">From Bangalore to Delhi, Mumbai to Kolkata. We serve clinics and hospitals with guaranteed authentic supplies.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                  {[
                      { label: "Partner Clinics", val: "500+" },
                      { label: "Cities Covered", val: "40+" },
                      { label: "Years of Trust", val: "12+" },
                      { label: "Happy Clients", val: "10k+" },
                  ].map((stat, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                          <div className="text-3xl font-serif text-gray-900 mb-1">{stat.val}</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-800 font-bold">{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  
      {/* BEST SELLERS GRID */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8 md:mb-10">
              <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-gray-900">Bestselling Formulations</h2>
                  <div className="h-0.5 w-12 bg-gray-800 mt-3"></div>
              </div>
              <button onClick={() => navigateTo('shop')} className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-gray-800 transition-colors">View All <ArrowRight size={16}/></button>
          </div>
          
          {/* Mobile Horizontal Scroll */}
          <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
              {PRODUCTS.slice(0, 4).map(product => (
                   <div key={product.id} className="group cursor-pointer min-w-[260px] md:min-w-0 snap-start" onClick={() => navigateTo('product', product)}>
                      <div className="relative aspect-[4/5] bg-gray-50 rounded-lg overflow-hidden mb-4">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{product.brand}</div>
                      <h3 className="font-serif text-lg leading-tight mb-2 group-hover:text-gray-800 transition-colors truncate">{product.name}</h3>
                      <p className="text-gray-900 font-medium">₹{product.price.toLocaleString()}</p>
                   </div>
              ))}
          </div>
          
          <div className="mt-6 text-center md:hidden">
              <button onClick={() => navigateTo('shop')} className="inline-flex items-center gap-2 text-sm font-medium border-b border-black pb-1">View All Products <ArrowRight size={14}/></button>
          </div>
        </div>
      </section>
  
      {/* CLINICAL SCIENCE */}
      <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gray-800 rounded-full filter blur-[80px] md:blur-[120px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                   <span className="text-white font-bold tracking-widest uppercase text-xs mb-2 block">The Shaa Trading Standard</span>
                   <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">Precision Science Meets <br/> Healthcare Excellence</h2>
                   <p className="text-gray-400 leading-relaxed mb-8 font-light text-base md:text-lg">
                      We maintain a rigorous supply chain to ensure that every product reaching your clinic performs exactly as intended.
                   </p>
                   <div className="space-y-6">
                      {[
                          { icon: Stethoscope, title: "Clinical Potency", desc: "High-concentration formulations." },
                          { icon: Sparkles, title: "Advanced Tech", desc: "Medical-grade technology." },
                          { icon: Building2, title: "Stable Supply", desc: "Consistent inventory since 2012." }
                      ].map((item, idx) => (
                          <div key={idx} className="flex gap-4">
                              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-white"><item.icon size={20}/></div>
                              <div>
                                  <h4 className="text-base font-serif mb-0.5">{item.title}</h4>
                                  <p className="text-xs md:text-sm text-gray-500">{item.desc}</p>
                              </div>
                          </div>
                      ))}
                   </div>
              </div>
              <div className="relative hidden md:block">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/10">
                       <img src="/image/ban2.jpg" alt="Clinical Lab" className="w-full h-full object-cover opacity-80" />
                  </div>
              </div>
          </div>
        </div>
      </section>
  
      {/* CTA SECTION */}
      <section className="py-16 md:py-24 bg-black text-center px-6 relative overflow-hidden border-t border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-800 rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-white">Partner With Excellence</h2>
          <p className="text-gray-400 mb-8 font-light text-base md:text-lg">Join clinics and hospitals sourcing their premium inventory from Shaa Trading.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => navigateTo('contact')} variant="secondary" className="py-4 w-full sm:w-auto font-medium">Register Wholesale Account</Button>
              <Button onClick={() => navigateTo('shop')} variant="outline" className="py-4 w-full sm:w-auto border-white/20 hover:bg-white hover:text-black">Browse Catalog</Button>
          </div>
        </div>
      </section>
    </div>
  );
  
  const ShopView = ({ navigateTo, addToCart, filter, setFilter }) => {
    const [brandFilter, setBrandFilter] = useState('All Brands');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
    const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-asc', 'price-desc'
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
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
  
    // Helper for category buttons
    const CategoryButton = ({ name, active, onClick }) => (
      <button 
          onClick={onClick}
          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between group ${active ? 'bg-black text-white font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
      >
          {name}
          {active && <Check size={14} className="text-white" />}
      </button>
    );
  
    return (
      <div className="animate-fade-in bg-[#fbfbfb] min-h-screen pb-24">
        {/* HERO */}
        <div className="bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-30 bg-[url('/image/ban1.jpg')] bg-cover bg-center pointer-events-none"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>
           <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-white tracking-[0.3em] uppercase text-[10px] font-bold mb-3 block animate-slide-up">Authorized Distribution</span>
              <h1 className="font-serif text-4xl md:text-6xl mb-4 animate-slide-up" style={{animationDelay: '0.1s'}}>The Collection</h1>
              <p className="text-gray-400 font-light max-w-lg mx-auto text-sm md:text-base animate-slide-up" style={{animationDelay: '0.2s'}}>Curated clinical formulations for professional healthcare use.</p>
           </div>
        </div>
  
        {/* MOBILE TOOLBAR (Sticky) */}
        <div className="lg:hidden sticky top-20 z-30 bg-white border-b border-gray-100 px-4 py-3 flex gap-3 items-center shadow-sm">
           <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
              <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-gray-800" 
              />
           </div>
           <button 
              onClick={() => setMobileFiltersOpen(true)}
              className="p-2 bg-black text-white rounded-lg shrink-0"
           >
              <SlidersHorizontal size={20} />
           </button>
        </div>
  
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-12">
              
              {/* SIDEBAR (Desktop) */}
              <aside className="hidden lg:block w-64 shrink-0 space-y-10 sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-hide">
                  {/* Search */}
                  <div>
                      <h3 className="font-serif text-lg mb-4">Search</h3>
                      <div className="relative">
                          <input 
                              type="text" 
                              placeholder="Product name..." 
                              value={searchQuery} 
                              onChange={(e) => setSearchQuery(e.target.value)} 
                              className="w-full pl-3 pr-8 py-2 bg-transparent border-b border-gray-200 text-sm outline-none focus:border-black transition-colors" 
                          />
                          <Search className="absolute right-0 top-2 text-gray-400" size={16} />
                      </div>
                  </div>
  
                  {/* Categories */}
                  <div>
                      <h3 className="font-serif text-lg mb-4">Categories</h3>
                      <div className="space-y-1">
                          <CategoryButton name="View All" active={filter === 'All'} onClick={() => setFilter('All')} />
                          {CATEGORIES.map(cat => (
                              <CategoryButton key={cat.id} name={cat.name} active={filter === cat.name} onClick={() => setFilter(cat.name)} />
                          ))}
                      </div>
                  </div>
  
                  {/* Brands */}
                  <div>
                      <h3 className="font-serif text-lg mb-4">Brands</h3>
                      <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                          <label className="flex items-center gap-3 cursor-pointer group">
                              <div className={`w-4 h-4 border rounded flex items-center justify-center transition-colors ${brandFilter === 'All Brands' ? 'bg-black border-black' : 'border-gray-300 group-hover:border-gray-400'}`}>
                                  {brandFilter === 'All Brands' && <Check size={10} className="text-white" />}
                              </div>
                              <input type="radio" name="brand" className="hidden" checked={brandFilter === 'All Brands'} onChange={() => setBrandFilter('All Brands')} />
                              <span className={`text-sm ${brandFilter === 'All Brands' ? 'text-black font-medium' : 'text-gray-600'}`}>All Brands</span>
                          </label>
                          {BRANDS_LIST.filter(b => b !== "All Brands").map(brand => (
                              <label key={brand} className="flex items-center gap-3 cursor-pointer group">
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
                  <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                      {filteredProducts.length > 0 ? (
                          filteredProducts.map(product => (
                          <div 
                              key={product.id} 
                              className={`group cursor-pointer bg-white rounded-xl overflow-hidden border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-500 ${viewMode === 'list' ? 'flex gap-6 p-4 border-gray-100' : ''}`} 
                              onClick={() => navigateTo('product', product)}
                          >
                              <div className={`relative bg-[#f8f8f8] overflow-hidden ${viewMode === 'list' ? 'w-32 h-32 rounded-lg shrink-0' : 'aspect-[4/5]'}`}>
                                  <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                                  
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
                                      {/* Mobile/Grid Icon Add */}
                                      <button 
                                          className="md:hidden w-8 h-8 bg-black text-white rounded-full flex items-center justify-center active:scale-95"
                                          onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                                      >
                                          <Plus size={16} />
                                      </button>
                                  </div>
                                  {viewMode === 'list' && (
                                      <div className="mt-4 flex gap-3">
                                          <button 
                                              className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-wider rounded hover:bg-gray-800 transition-colors"
                                              onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                                          >
                                              Add to Cart
                                          </button>
                                          <button className="text-xs font-medium border border-gray-200 px-4 py-2 rounded hover:border-black transition-colors">View Details</button>
                                      </div>
                                  )}
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
  
        {/* MOBILE FILTER DRAWER */}
        <div className={`fixed inset-0 z-[70] flex justify-end pointer-events-none ${mobileFiltersOpen ? 'pointer-events-auto' : ''}`}>
           <div 
              className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${mobileFiltersOpen ? 'opacity-100' : 'opacity-0'}`}
              onClick={() => setMobileFiltersOpen(false)}
           ></div>
           <div className={`relative bg-white w-full max-w-xs h-full shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${mobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white">
                  <h3 className="font-serif text-xl">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)} className="text-gray-500"><X size={24}/></button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                  {/* Mobile Categories */}
                  <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Category</h4>
                      <div className="space-y-2">
                          <button onClick={() => {setFilter('All'); setMobileFiltersOpen(false);}} className={`block w-full text-left text-sm py-2 px-2 rounded ${filter === 'All' ? 'bg-gray-100 font-medium' : ''}`}>All Categories</button>
                          {CATEGORIES.map(cat => (
                              <button key={cat.id} onClick={() => {setFilter(cat.name); setMobileFiltersOpen(false);}} className={`block w-full text-left text-sm py-2 px-2 rounded ${filter === cat.name ? 'bg-gray-100 font-medium' : ''}`}>{cat.name}</button>
                          ))}
                      </div>
                  </div>
                  {/* Mobile Brands */}
                  <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Brand</h4>
                      <div className="space-y-2">
                          <button onClick={() => {setBrandFilter('All Brands'); setMobileFiltersOpen(false);}} className={`block w-full text-left text-sm py-2 px-2 rounded ${brandFilter === 'All Brands' ? 'bg-gray-100 font-medium' : ''}`}>All Brands</button>
                          {BRANDS_LIST.filter(b => b !== "All Brands").map(brand => (
                              <button key={brand} onClick={() => {setBrandFilter(brand); setMobileFiltersOpen(false);}} className={`block w-full text-left text-sm py-2 px-2 rounded ${brandFilter === brand ? 'bg-gray-100 font-medium' : ''}`}>{brand}</button>
                          ))}
                      </div>
                  </div>
              </div>
              <div className="p-5 border-t border-gray-100 bg-gray-50">
                  <button onClick={() => setMobileFiltersOpen(false)} className="w-full bg-black text-white py-3 text-sm font-bold uppercase tracking-widest rounded-lg">View {filteredProducts.length} Results</button>
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
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
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
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
              <div className="aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden w-full relative">
                  <img src={images[activeImg]} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <div key={idx} onClick={() => setActiveImg(idx)} className={`w-20 h-20 shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${activeImg === idx ? 'border-gray-800' : 'border-transparent'}`}><img src={img} alt="" className="w-full h-full object-cover" /></div>
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
                                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
                <img src="/image/blog4.jpg" alt="Laboratory" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
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
                <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-6">
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
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
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
  
  /* --- Main App --- */
  
  export default function ShaaTradingApp() {
    const [currentPage, setCurrentPage] = useState('home');
    const [cart, setCart] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedPost, setSelectedPost] = useState(null); // State for selected blog post
    const [shopFilter, setShopFilter] = useState('All');
    const [toast, setToast] = useState(null); // { message, type }
    const [transactionId, setTransactionId] = useState(null); // To store razorpay transaction id
  
    // Listen for History Navigation (Back/Forward buttons)
    useEffect(() => {
      const handlePopState = (event) => {
        if (event.state && event.state.page) {
          setCurrentPage(event.state.page);
          if (event.state.product) setSelectedProduct(event.state.product);
          if (event.state.post) setSelectedPost(event.state.post);
        } else {
          setCurrentPage('home');
        }
        setMobileMenuOpen(false);
      };
      // Set initial history state
      window.history.replaceState({ page: 'home' }, '', window.location.search);
      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }, []);
  
    const showToast = (message, type = 'success') => {
      setToast({ message, type });
    };
  
    const navigateTo = (page, item = null) => {
      if (page === 'product' && item) setSelectedProduct(item);
      if (page === 'blog-post' && item) setSelectedPost(item); // Handle blog post navigation
      
      setCurrentPage(page);
      setMobileMenuOpen(false);
      window.scrollTo(0, 0);

      // Push State for history navigation
      const stateObj = { 
        page, 
        product: page === 'product' ? item : null,
        post: page === 'blog-post' ? item : null
      };
      const url = `?page=${page}`; 
      window.history.pushState(stateObj, '', url);
    };
  
    const addToCart = (product, quantity = 1) => {
      setCart(prev => {
        const existing = prev.find(item => item.id === product.id);
        if (existing) return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
        return [...prev, { ...product, quantity }];
      });
      setCartOpen(true);
      showToast(`Added ${product.name} to cart`, 'success');
    };
  
    const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
    
    const updateQuantity = (id, delta) => {
      setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));
    };

    // --- RAZORPAY INTEGRATION ---
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
  
      // Save temp data for success view
      localStorage.setItem('temp_cart', JSON.stringify(cart));
      localStorage.setItem('temp_user', JSON.stringify(customerDetails));
  
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
      // NOTE: In production, create order on server to get order_id
      try {
        const data = await fetch(`${API_BASE_URL}/api/payment/order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                amount: total * 100, // Convert to paise
                currency: "INR" 
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
                    setTransactionId(response.razorpay_payment_id);
                    setCartOpen(false);
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
  
    return (
      <div className="font-sans text-gray-900 bg-[#fbfbfb] min-h-screen flex flex-col selection:bg-gray-800 selection:text-white">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@200;300;400;500;600&display=swap');
          .font-serif { font-family: 'Cormorant Garamond', serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #ddd; border-radius: 4px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #ccc; }
          .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
          .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
          .animate-marquee { animation: marquee 20s linear infinite; }
          @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slide-up { from { transform: translate(0, 40px); opacity: 0; } to { transform: translate(0, 0); opacity: 1; } }
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        `}</style>
  
        {/* Toast Notification */}
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
            />
  
            <main className="flex-grow">
              {currentPage === 'home' && <HomeView navigateTo={navigateTo} addToCart={addToCart} setShopFilter={setShopFilter} />}
              {currentPage === 'shop' && <ShopView navigateTo={navigateTo} addToCart={addToCart} filter={shopFilter} setFilter={setShopFilter} />}
              {currentPage === 'product' && selectedProduct && <ProductView product={selectedProduct} addToCart={addToCart} navigateTo={navigateTo} />}
              {currentPage === 'blog' && <BlogView navigateTo={navigateTo} />}
              {currentPage === 'blog-post' && selectedPost && <BlogPostView post={selectedPost} navigateTo={navigateTo} />}
              {currentPage === 'about' && <AboutView />}
              {currentPage === 'contact' && <ContactView showToast={showToast} />}
              {currentPage === 'privacy' && <PrivacyPolicyView />}
              {currentPage === 'terms' && <TermsOfServiceView />}
              {currentPage === 'shipping' && <ShippingPolicyView />}
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
  }