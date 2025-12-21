import React, { useState } from 'react';
import { Instagram, Facebook, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ setCurrentPage, showToast }) => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!phone || phone.length < 10) {
      showToast("Please enter a valid WhatsApp number.", "error");
      return;
    }
    setLoading(true);
    const message = `Hi, I'd like to subscribe to Shaa Trading wholesale updates. My number is: ${phone}`;
    const whatsappUrl = `https://wa.me/919916726373?text=${encodeURIComponent(message)}`;
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
            <img loading="lazy" src="/image/logo-r.jpg" alt="SHAA TRADING" className="h-12 w-auto object-contain" />
            <p className="text-gray-400 text-sm leading-relaxed font-light max-w-xs">
              Bengaluru-based distributor, supplier, and wholesaler since 2012. Providing trusted healthcare and skincare products to professionals across India.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/shaatradingindia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/skinandherbs.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6">Explore</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={12} /> All Products</button></li>
              <li><button onClick={() => setCurrentPage('blog')} className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={12} /> Clinical Journal</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={12} /> Our Story</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={12} /> Partner Program</button></li>
              <li>
                <button onClick={() => setCurrentPage('track')} className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={12} /> Track Order
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('login')} className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={12} /> Login
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
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

          {/* WhatsApp Updates Column */}
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

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-500 flex flex-col md:flex-row gap-4 items-center">
             <p>&copy; 2025 SHAA TRADING. All rights reserved.</p>
             <div className="flex gap-4">
                <button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors">Privacy</button>
                <button onClick={() => setCurrentPage('terms')} className="hover:text-white transition-colors">Terms</button>
                <button onClick={() => setCurrentPage('shipping')} className="hover:text-white transition-colors">Shipping</button>
             </div>
          </div>

          {/* ZOMAXA CREDIT - GOLD THEMED */}
          <a 
            href="https://zomaxa.co" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 group px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
          >
            <span className="text-[10px] text-gray-600 uppercase tracking-wider group-hover:text-gray-400 transition-colors">
              Designed And Developed By
            </span>
            <div className="flex flex-col items-start leading-none">
                <span className="font-serif text-[#C5A059] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase group-hover:text-[#F4CF57] group-hover:drop-shadow-[0_0_8px_rgba(197,160,89,0.5)] transition-all duration-300">
                ZOMAXA.CO
                </span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;