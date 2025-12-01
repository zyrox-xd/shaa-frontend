import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ShoppingBag, Menu, X, Instagram, Facebook, Linkedin, ArrowRight, Trash2, Plus, Minus, Mail, Phone, MapPin, ShieldCheck, Building2, Stethoscope, FileText, Award, Search, ChevronRight, Check, ChevronDown, Sparkles, Truck, Globe, ArrowLeft, Grid, List, ArrowUpDown, Thermometer, Clock, User, SlidersHorizontal, Printer, Download } from 'lucide-react';

/* --- EMAILJS CONFIGURATION (SHAA TRADING) --- */
const EMAILJS_SERVICE_ID = "service_h64g36k";
const EMAILJS_TEMPLATE_ID = "template_5gaadeg";
const EMAILJS_PUBLIC_KEY = "4025kcdA_kwN4-yDH";

/* --- API CONFIGURATION --- */
const API_BASE_URL = "https://shaa-backend.onrender.com";

/* --- RAZORPAY CONFIGURATION --- */
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
    name: "Advanced Vita Glow Skin Whitening Night Cream",
    category: "Cream",
    brand: "Vita Glow",
    price: 1800,
    image: "/image/adv-vita-glow-night.jpg",
    description: "Advanced night repair cream with glutathione complex",
    details: `
      <strong>Advanced Vita Glow Skin Whitening Night Cream</strong><br/><br/>
      Experience overnight skin transformation with this advanced whitening night cream. Formulated to work while you sleep, it delivers potent whitening agents deep into the skin during the body's natural repair cycle.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione Complex - 2%</li>
        <li>Vitamin C Derivative - 5%</li>
        <li>Niacinamide - 4%</li>
        <li>Hyaluronic Acid - 3%</li>
        <li>Natural Plant Extracts</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Works during nighttime repair cycle</li>
        <li>Deeply moisturizes while whitening</li>
        <li>Reduces appearance of dark spots</li>
      </ul>
      <br/>
      Wake up to brighter, more radiant skin every morning.<br/>
      <em class="text-xs text-gray-400">Note: Apply evenly on face and neck before bedtime.</em>
    `,
    benefits: ["Overnight Repair", "Deep Moisturization", "Spot Reduction", "Non-Greasy"],
    sku: "VG-NIGHT-50",
    volume: "50g Jar"
  },
  {
    id: 2,
    name: "Aqua Skin Diamond Ultra White F 30",
    category: "Injection",
    brand: "Aqua Skin",
    price: 11400,
    image: "/image/aqua-diamond-f30.jpg",
    description: "Diamond series whitening injection with advanced filtration",
    details: `
      <strong>Aqua Skin Diamond Ultra White F 30</strong><br/><br/>
      Experience the premium Diamond series formulation featuring Ultra Filtration technology for maximum purity and effectiveness. The F30 represents 30th generation filtration for superior results.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Ultra-Filtered Glutathione - 30,000 mg</li>
        <li>Vitamin C Complex - 5,000 mg</li>
        <li>Collagen Peptides - 2,000 mg</li>
        <li>Alpha Lipoic Acid - 500 mg</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Ultra-filtration ensures maximum purity</li>
        <li>Enhanced cellular absorption</li>
        <li>Comprehensive antioxidant protection</li>
      </ul>
      <br/>
      Achieve diamond-like clarity in your complexion.<br/>
      <em class="text-xs text-gray-400">Note: Professional administration required.</em>
    `,
    benefits: ["30th Gen Filtration", "Diamond Series", "Ultra Pure", "Enhanced Absorption"],
    sku: "AQUA-DIAMOND-F30",
    volume: "10 Sessions"
  },
  {
    id: 3,
    name: "Aqua Skin Fine Gold 70,000mg Glutathione Injection",
    category: "Injection",
    brand: "Aqua Skin",
    price: 11600,
    image: "/image/aqua-gold-70k.jpg",
    description: "Fine Gold series with 70,000mg glutathione potency",
    details: `
      <strong>Aqua Skin Fine Gold 70,000mg Glutathione Injection</strong><br/><br/>
      Experience the luxurious Fine Gold series, featuring an impressive 70,000mg of pharmaceutical-grade glutathione combined with gold nanoparticles for enhanced delivery and radiant results.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Pharmaceutical Glutathione - 70,000 mg</li>
        <li>Gold Nanoparticles - 2,000 mg</li>
        <li>Vitamin E Complex - 3,000 mg</li>
        <li>Coenzyme Q10 - 1,500 mg</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Gold nanoparticles enhance penetration</li>
        <li>High-potency glutathione formulation</li>
        <li>Provides luxurious radiance</li>
      </ul>
      <br/>
      Experience golden-standard skin whitening.<br/>
      <em class="text-xs text-gray-400">Note: Gold series premium formulation.</em>
    `,
    benefits: ["70,000mg Strength", "Gold Nanoparticles", "Luxury Formula", "Enhanced Radiance"],
    sku: "AQUA-GOLD-70K",
    volume: "8 Sessions"
  },
  {
    id: 4,
    name: "Aqua Skin Snail Complex Pro Whitening Glutathione Injection - New Arrival",
    category: "Injection",
    brand: "Aqua Skin",
    price: 10400,
    image: "/image/aqua-snail-pro.jpg",
    description: "Snail mucin complex with advanced whitening formula",
    details: `
      <strong>Aqua Skin Snail Complex Pro Whitening Injection</strong><br/><br/>
      Experience the revolutionary combination of snail mucin complex with high-potency glutathione. This innovative formula not only whitens but also repairs and rejuvenates skin at the cellular level.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione Complex - 50,000 mg</li>
        <li>Snail Mucin Extract - 10,000 mg</li>
        <li>Allantoin - 2,000 mg</li>
        <li>Glycolic Acid - 1,500 mg</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Snail mucin promotes skin regeneration</li>
        <li>Combines whitening with repair</li>
        <li>Improves skin texture and elasticity</li>
      </ul>
      <br/>
      Achieve both whitening and comprehensive skin health.<br/>
      <em class="text-xs text-gray-400">Note: New arrival with advanced formula.</em>
    `,
    benefits: ["Snail Mucin Complex", "Skin Regeneration", "Texture Improvement", "Dual Action"],
    sku: "AQUA-SNAIL-PRO",
    volume: "10 Sessions"
  },
  {
    id: 5,
    name: "Aqua Skin Veniscy 46 Dualna Pico-cell absorption Extremely Ultimate",
    category: "Injection",
    brand: "Aqua Skin",
    price: 9500,
    image: "/image/veniscy-46.jpg",
    description: "Pico-cell technology with dual absorption system",
    details: `
      <strong>Aqua Skin Veniscy 46 Dualna Pico-cell</strong><br/><br/>
      Experience the cutting-edge Pico-cell absorption technology that breaks down active ingredients to picometer size for unprecedented cellular penetration. The Dualna system ensures dual-pathway delivery for maximum effectiveness.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Pico-cell Glutathione - 46,000 mg</li>
        <li>Dual Absorption Complex</li>
        <li>Cell Penetration Enhancers</li>
        <li>Antioxidant Matrix</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Picometer-sized particles for deep penetration</li>
        <li>Dual delivery system enhances bioavailability</li>
        <li>Rapid onset of whitening action</li>
      </ul>
      <br/>
      Experience ultimate absorption and results.<br/>
      <em class="text-xs text-gray-400">Note: Advanced pico-cell technology.</em>
    `,
    benefits: ["Pico-cell Tech", "Dual Absorption", "Deep Penetration", "Rapid Action"],
    sku: "VENISCY-46-PICO",
    volume: "10 Sessions"
  },
  {
    id: 6,
    name: "Aqua Skin Veniscy 8 - DualNa Octa Strength Glutathione 3,500,000mg",
    category: "Injection",
    brand: "Aqua Skin",
    price: 10800,
    image: "/image/veniscy-8.jpg",
    description: "Octa strength with 3.5 million mg glutathione",
    details: `
      <strong>Aqua Skin Veniscy 8 - DualNa Octa Strength</strong><br/><br/>
      Experience the monumental power of 3,500,000mg glutathione in the Veniscy 8 formulation. The Octa Strength represents eight-fold enhancement in potency and effectiveness for dramatic whitening results.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione - 3,500,000 mg</li>
        <li>DualNA Complex</li>
        <li>Octa-Boost Technology</li>
        <li>Advanced Carriers</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Extremely high potency formulation</li>
        <li>Eight-fold enhancement technology</li>
        <li>Rapid and dramatic results</li>
      </ul>
      <br/>
      Experience octa-level whitening power.<br/>
      <em class="text-xs text-gray-400">Note: High concentration - professional use only.</em>
    `,
    benefits: ["3.5 Million mg", "Octa Strength", "DualNA Tech", "Dramatic Results"],
    sku: "VENISCY-8-OCTA",
    volume: "12 Sessions"
  },
  {
    id: 7,
    name: "Aqua Skin Veniscy 86 Glutathione Whitening Injection",
    category: "Injection",
    brand: "Aqua Skin",
    price: 8800,
    image: "/image/veniscy-86.jpg",
    description: "Advanced whitening injection with comprehensive formula",
    details: `
      <strong>Aqua Skin Veniscy 86 Glutathione Whitening Injection</strong><br/><br/>
      Experience the balanced and effective Veniscy 86 formulation, designed for consistent and reliable whitening results. This comprehensive formula works systematically to achieve even skin tone.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione Complex - 86,000 mg</li>
        <li>Vitamin C Matrix</li>
        <li>Skin Brightening Agents</li>
        <li>Antioxidant Support</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Balanced formulation for consistent results</li>
        <li>Systematic approach to skin whitening</li>
        <li>Comprehensive antioxidant protection</li>
      </ul>
      <br/>
      Achieve reliable and consistent whitening.<br/>
      <em class="text-xs text-gray-400">Note: Well-balanced formula for all skin types.</em>
    `,
    benefits: ["Balanced Formula", "Consistent Results", "Systematic Approach", "Even Tone"],
    sku: "VENISCY-86-STD",
    volume: "10 Sessions"
  },
  {
    id: 8,
    name: "Aqua Veniscy 22 Dualna Pico Cell Ultra Whitening",
    category: "Injection",
    brand: "Aqua Skin",
    price: 8800,
    image: "/image/veniscy-22.jpg",
    description: "Pico cell technology with ultra whitening action",
    details: `
      <strong>Aqua Veniscy 22 Dualna Pico Cell Ultra Whitening</strong><br/><br/>
      Experience the precision of Pico Cell technology in the Veniscy 22 formulation. This ultra whitening solution targets pigmentation at the cellular level for comprehensive lightening action.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Pico Cell Glutathione - 22,000 mg</li>
        <li>Ultra Whitening Complex</li>
        <li>Cellular Targeting Agents</li>
        <li>Penetration Enhancers</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Precision cellular targeting</li>
        <li>Ultra whitening concentration</li>
        <li>Enhanced cellular uptake</li>
      </ul>
      <br/>
      Experience ultra-level whitening precision.<br/>
      <em class="text-xs text-gray-400">Note: Cellular-level targeting technology.</em>
    `,
    benefits: ["Pico Cell Tech", "Ultra Whitening", "Cellular Targeting", "Precision Action"],
    sku: "VENISCY-22-ULTRA",
    volume: "10 Sessions"
  },
  {
    id: 9,
    name: "Aqua skin Brilliant Diamond Max Glutathione 80,000mg",
    category: "Injection",
    brand: "Aqua Skin",
    price: 11000,
    image: "/image/aqua-diamond-max.jpg",
    description: "Brilliant Diamond series with 80,000mg glutathione",
    details: `
      <strong>Aqua skin Brilliant Diamond Max Glutathione 80,000mg</strong><br/><br/>
      Experience the premium Brilliant Diamond Max series, featuring an impressive 80,000mg of high-purity glutathione. This formulation represents the pinnacle of the diamond series for exceptional whitening results.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>High-Purity Glutathione - 80,000 mg</li>
        <li>Diamond Particle Complex</li>
        <li>Premium Antioxidants</li>
        <li>Skin Refining Agents</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Maximum potency diamond series</li>
        <li>Exceptional purity standards</li>
        <li>Comprehensive skin refinement</li>
      </ul>
      <br/>
      Experience brilliant diamond-level results.<br/>
      <em class="text-xs text-gray-400">Note: Premium diamond series formulation.</em>
    `,
    benefits: ["80,000mg Strength", "Diamond Series", "Maximum Potency", "Premium Quality"],
    sku: "AQUA-DIAMOND-MAX",
    volume: "10 Sessions"
  },
  {
    id: 10,
    name: "Aqua skin Pure Gold II 30th Whitening Glutathione 30,000mg",
    category: "Injection",
    brand: "Aqua Skin",
    price: 11600,
    image: "/image/aqua-pure-gold.jpg",
    description: "30th generation Pure Gold series whitening",
    details: `
      <strong>Aqua skin Pure Gold II 30th Whitening Glutathione</strong><br/><br/>
      Experience the 30th generation of Pure Gold series, representing three decades of formulation refinement. This advanced whitening solution combines tradition with cutting-edge technology.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione - 30,000 mg</li>
        <li>Gold Nanoparticles</li>
        <li>30th Gen Technology</li>
        <li>Advanced Delivery System</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Three decades of formulation expertise</li>
        <li>Gold-enhanced delivery system</li>
        <li>Proven effective technology</li>
      </ul>
      <br/>
      Experience generations of whitening expertise.<br/>
      <em class="text-xs text-gray-400">Note: 30th generation refined formula.</em>
    `,
    benefits: ["30th Generation", "Gold Series", "Proven Formula", "Advanced Delivery"],
    sku: "AQUA-GOLD-30TH",
    volume: "10 Sessions"
  },
  {
  id: 11,
  name: "Aqua skin Veniscy 12 - Pro Q10 Glutathione 12,000,000mg",
  category: "Injection",
  brand: "Aqua Skin",
  price: 11800,
  image: "/image/veniscy-12-pro.jpg",
  description: "Pro Q10 formula with 12 million mg glutathione",
  details: `
    <strong>Aqua skin Veniscy 12 - Pro Q10 Glutathione</strong><br/><br/>
    Experience the powerful combination of high-potency glutathione with Coenzyme Q10 in the Veniscy 12 Pro formulation. This advanced formula not only whitens but also provides essential cellular energy for overall skin health.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 12,000,000 mg</li>
      <li>Coenzyme Q10 - 3,000 mg</li>
      <li>Pro Complex Technology</li>
      <li>Advanced Antioxidants</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Q10 enhances cellular energy production</li>
      <li>High-potency glutathione for rapid results</li>
      <li>Comprehensive skin health approach</li>
    </ul>
    <br/>
    Experience pro-level whitening with cellular energy support.<br/>
    <em class="text-xs text-gray-400">Note: Professional Q10 enhanced formula.</em>
  `,
  benefits: ["12 Million mg", "Q10 Enhanced", "Cellular Energy", "Pro Formula"],
  sku: "VENISCY-12-PRO",
  volume: "12 Sessions"
},
{
  id: 12,
  name: "Aqua skin Veniscy 30 - DualNa Pico Cell Absorption Glutathione Injection",
  category: "Injection",
  brand: "Aqua Skin",
  price: 13000,
  image: "/image/veniscy-30-dualna.jpg",
  description: "DualNa Pico Cell technology for maximum absorption",
  details: `
    <strong>Aqua skin Veniscy 30 - DualNa Pico Cell</strong><br/><br/>
    Experience the advanced DualNa Pico Cell absorption technology in the Veniscy 30 formulation. This innovative system uses dual sodium pathways to enhance glutathione delivery at the cellular level for unprecedented results.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione Complex - 30,000 mg</li>
      <li>DualNa Absorption Technology</li>
      <li>Pico Cell Delivery System</li>
      <li>Sodium Pathway Enhancers</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Dual sodium pathways for enhanced delivery</li>
      <li>Pico cell size for maximum penetration</li>
      <li>Optimized cellular uptake</li>
    </ul>
    <br/>
    Experience maximum absorption with dual pathway technology.<br/>
    <em class="text-xs text-gray-400">Note: Advanced DualNa absorption system.</em>
  `,
  benefits: ["DualNa Tech", "Pico Cell", "Max Absorption", "Dual Pathway"],
  sku: "VENISCY-30-DUALNA",
  volume: "10 Sessions"
},
{
  id: 13,
  name: "Biocell Collagen Platinum Forte + Vitamin C 90,000mg, Collagen 30,000mg",
  category: "Injection",
  brand: "Biocell",
  price: 3900,
  image: "/image/biocell-platinum.jpg",
  description: "Platinum collagen forte with vitamin C boost",
  details: `
    <strong>Biocell Collagen Platinum Forte + Vitamin C</strong><br/><br/>
    Experience the powerful combination of high-dose collagen and vitamin C in the Platinum Forte formulation. This comprehensive treatment not only whitens but also significantly improves skin elasticity and firmness.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Collagen Peptides - 30,000 mg</li>
      <li>Vitamin C - 90,000 mg</li>
      <li>Platinum Complex</li>
      <li>Forte Enhancement Technology</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>High-dose collagen for skin structure</li>
      <li>Vitamin C enhances collagen synthesis</li>
      <li>Platinum grade purity and effectiveness</li>
    </ul>
    <br/>
    Achieve both whitening and superior skin firmness.<br/>
    <em class="text-xs text-gray-400">Note: Collagen and vitamin C synergy formula.</em>
  `,
  benefits: ["90K Vitamin C", "30K Collagen", "Platinum Grade", "Skin Firming"],
  sku: "BIOCELL-PLATINUM",
  volume: "8 Sessions"
},
{
  id: 14,
  name: "Cindella 1200mg Glutathione Injections With Square Seal",
  category: "Injection",
  brand: "Cindella",
  price: 17500,
  image: "/image/cindella-1200.jpg",
  description: "Authentic Cindella with square seal certification",
  details: `
    <strong>Cindella 1200mg Glutathione Injections</strong><br/><br/>
    Experience the authentic Cindella formulation with official square seal certification. This premium glutathione injection is known for its reliability and consistent results in skin whitening and brightening.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pharmaceutical Glutathione - 1,200 mg</li>
      <li>Certified Pure Ingredients</li>
      <li>Quality Seal Verification</li>
      <li>Premium Carriers</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Official certification ensures quality</li>
      <li>Proven reliable formulation</li>
      <li>Consistent whitening results</li>
    </ul>
    <br/>
    Trust in certified quality and proven results.<br/>
    <em class="text-xs text-gray-400">Note: Authentic with square seal certification.</em>
  `,
  benefits: ["Square Seal", "Certified Quality", "Proven Formula", "Reliable Results"],
  sku: "CINDELLA-1200-SQ",
  volume: "10 Vials"
},
{
  id: 15,
  name: "Collagen Injection By Vesco Pharma Collagen C 1000",
  category: "Injection",
  brand: "Vesco Pharma",
  price: 2500,
  image: "/image/vesco-collagen.jpg",
  description: "Collagen C 1000 by Vesco Pharma",
  details: `
    <strong>Collagen Injection By Vesco Pharma Collagen C 1000</strong><br/><br/>
    Experience the trusted Vesco Pharma Collagen C 1000 formulation. This reliable collagen injection is designed to improve skin elasticity, hydration, and overall skin health while providing mild brightening effects.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Collagen Complex - 1,000 mg</li>
      <li>Vitamin C - 500 mg</li>
      <li>Hydration Matrix</li>
      <li>Skin Nutrients</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Improves skin elasticity and firmness</li>
      <li>Enhances skin hydration</li>
      <li>Supports overall skin health</li>
    </ul>
    <br/>
    Achieve healthier, more elastic skin.<br/>
    <em class="text-xs text-gray-400">Note: Focused on skin health and elasticity.</em>
  `,
  benefits: ["Collagen Boost", "Skin Elasticity", "Vesco Pharma", "Hydration Support"],
  sku: "VESCO-COLLAGEN-C",
  volume: "5 Sessions"
},
{
  id: 16,
  name: "Core Switzerland SLC24A5 Inhibitors Glutathione Injection",
  category: "Injection",
  brand: "Core Switzerland",
  price: 10800,
  image: "/image/core-swiss-slc24a5.jpg",
  description: "Swiss SLC24A5 gene inhibitor technology",
  details: `
    <strong>Core Switzerland SLC24A5 Inhibitors Glutathione Injection</strong><br/><br/>
    Experience the cutting-edge Swiss technology targeting the SLC24A5 gene responsible for skin pigmentation. This advanced formulation uses gene inhibition technology for precise and effective skin lightening.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione Complex</li>
      <li>SLC24A5 Gene Inhibitors</li>
      <li>Swiss Precision Technology</li>
      <li>Gene Expression Modulators</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Targets pigmentation at genetic level</li>
      <li>Swiss precision formulation</li>
      <li>Advanced gene inhibition technology</li>
    </ul>
    <br/>
    Experience genetic-level skin lightening precision.<br/>
    <em class="text-xs text-gray-400">Note: Advanced gene targeting technology.</em>
  `,
  benefits: ["Gene Inhibition", "Swiss Technology", "SLC24A5 Target", "Precision Lightening"],
  sku: "CORE-SWISS-GENE",
  volume: "10 Sessions"
},
{
  id: 17,
  name: "Dr James Glutathione Skin Lightening Cream",
  category: "Cream",
  brand: "Dr James",
  price: 2000,
  image: "/image/dr-james-cream.jpg",
  description: "Dr James professional skin lightening cream",
  details: `
    <strong>Dr James Glutathione Skin Lightening Cream</strong><br/><br/>
    Experience the professional-grade skin lightening cream from Dr James. This topical formulation delivers glutathione and other lightening agents directly to the skin for gradual and consistent lightening results.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Topical Glutathione</li>
      <li>Skin Lightening Complex</li>
      <li>Moisturizing Base</li>
      <li>Penetration Enhancers</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Direct topical application</li>
      <li>Gradual and consistent lightening</li>
      <li>Professional formulation</li>
    </ul>
    <br/>
    Achieve gradual lightening with daily use.<br/>
    <em class="text-xs text-gray-400">Note: For topical use only.</em>
  `,
  benefits: ["Topical Application", "Gradual Lightening", "Dr James Formula", "Daily Use"],
  sku: "DRJAMES-CREAM-50",
  volume: "50g Tube"
},
{
  id: 18,
  name: "Dr James Glutathione Skin Whitening Injection 1500mg - 05 Sessions",
  category: "Injection",
  brand: "Dr James",
  price: 6800,
  image: "/image/dr-james-5sessions.jpg",
  description: "Dr James 1500mg injection - 5 session package",
  details: `
    <strong>Dr James Glutathione Skin Whitening Injection 1500mg - 05 Sessions</strong><br/><br/>
    Experience the reliable Dr James glutathione formulation in a convenient 5-session package. This balanced formulation provides effective whitening with the trusted Dr James quality assurance.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 1,500 mg per session</li>
      <li>Supporting Antioxidants</li>
      <li>Quality Tested Ingredients</li>
      <li>Balanced Formula</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Trusted Dr James formulation</li>
      <li>Convenient session package</li>
      <li>Balanced and effective</li>
    </ul>
    <br/>
    Trust in professional quality and results.<br/>
    <em class="text-xs text-gray-400">Note: 5-session complete package.</em>
  `,
  benefits: ["5 Sessions", "1500mg Strength", "Dr James Quality", "Complete Package"],
  sku: "DRJAMES-1500-5S",
  volume: "5 Sessions"
},
{
  id: 19,
  name: "Dr James Glutathione Skin Whitening Injections 1500mg - 10 Sessions",
  category: "Injection",
  brand: "Dr James",
  price: 12000,
  image: "/image/dr-james-10sessions.jpg",
  description: "Dr James 1500mg injection - 10 session package",
  details: `
    <strong>Dr James Glutathione Skin Whitening Injections 1500mg - 10 Sessions</strong><br/><br/>
    Experience the complete whitening journey with the Dr James 10-session package. This comprehensive treatment plan ensures consistent and cumulative results for optimal skin lightening and brightening.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 1,500 mg per session</li>
      <li>Cumulative Action Formula</li>
      <li>Professional Grade</li>
      <li>Complete Treatment Cycle</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Complete treatment cycle</li>
      <li>Cumulative whitening results</li>
      <li>Professional administration</li>
    </ul>
    <br/>
    Commit to complete whitening transformation.<br/>
    <em class="text-xs text-gray-400">Note: 10-session complete treatment cycle.</em>
  `,
  benefits: ["10 Sessions", "Complete Cycle", "Cumulative Results", "Professional Grade"],
  sku: "DRJAMES-1500-10S",
  volume: "10 Sessions"
},
{
  id: 20,
  name: "Glowtiqa Advance Whitening Cream 30g - Made in France",
  category: "Cream",
  brand: "Glowtiqa",
  price: 2000,
  image: "/image/glowtiqa-advance.jpg",
  description: "French advanced whitening cream 30g",
  details: `
    <strong>Glowtiqa Advance Whitening Cream 30g - Made in France</strong><br/><br/>
    Experience the luxury of French skincare with Glowtiqa Advance Whitening Cream. Formulated in France with advanced European technology, this cream delivers sophisticated whitening with elegant texture and superior results.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>French Whitening Complex</li>
      <li>Advanced Delivery System</li>
      <li>Luxury Skincare Base</li>
      <li>European Technology</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>French formulation expertise</li>
      <li>Advanced European technology</li>
      <li>Luxury skincare experience</li>
    </ul>
    <br/>
    Experience French luxury in skin whitening.<br/>
    <em class="text-xs text-gray-400">Note: Made in France with European standards.</em>
  `,
  benefits: ["Made in France", "Advanced Formula", "Luxury Cream", "European Tech"],
  sku: "GLOWTIQA-ADV-30",
  volume: "30g Jar"
},
{
  id: 21,
  name: "Glowtiqa Skin Whitening Soap",
  category: "Soap",
  brand: "Glowtiqa",
  price: 600,
  image: "/image/glowtiqa-soap.jpg",
  description: "Daily whitening soap for gradual lightening",
  details: `
    <strong>Glowtiqa Skin Whitening Soap</strong><br/><br/>
    Experience daily whitening care with Glowtiqa Skin Whitening Soap. This gentle yet effective soap incorporates whitening agents into your daily cleansing routine for gradual and consistent skin lightening over time.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Whitening Complex</li>
      <li>Gentle Cleansing Base</li>
      <li>Skin Brightening Agents</li>
      <li>Moisturizing Elements</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Daily gradual lightening</li>
      <li>Gentle on skin</li>
      <li>Integrates with daily routine</li>
    </ul>
    <br/>
    Make whitening part of your daily routine.<br/>
    <em class="text-xs text-gray-400">Note: For daily use as part of whitening regimen.</em>
  `,
  benefits: ["Daily Use", "Gradual Lightening", "Gentle Formula", "Routine Integration"],
  sku: "GLOWTIQA-SOAP",
  volume: "100g Bar"
},
{
  id: 22,
  name: "Gluta C Intense Whitening Face and Body Soap",
  category: "Soap",
  brand: "Gluta C",
  price: 750,
  image: "/image/gluta-c-soap.jpg",
  description: "Intense whitening soap for face and body",
  details: `
    <strong>Gluta C Intense Whitening Face and Body Soap</strong><br/><br/>
    Experience intense whitening for both face and body with Gluta C specialized soap. This powerful formulation is designed to address pigmentation on all areas of the skin while maintaining skin health and moisture balance.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione Complex</li>
      <li>Vitamin C Derivative</li>
      <li>Intense Whitening Agents</li>
      <li>Balanced pH Formula</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Addresses face and body pigmentation</li>
      <li>Intense whitening action</li>
      <li>Maintains skin health</li>
    </ul>
    <br/>
    Achieve even tone from face to body.<br/>
    <em class="text-xs text-gray-400">Note: Suitable for both face and body use.</em>
  `,
  benefits: ["Face & Body", "Intense Whitening", "Vitamin C", "Even Tone"],
  sku: "GLUTAC-SOAP-FB",
  volume: "120g Bar"
},
{
  id: 23,
  name: "Glutathione Injection By Vesco Pharma Gluta C 1000 Liquid Glutathione Formula",
  category: "Injection",
  brand: "Vesco Pharma",
  price: 3900,
  image: "/image/vesco-glutac.jpg",
  description: "Vesco Pharma Gluta C 1000 liquid formula",
  details: `
    <strong>Glutathione Injection By Vesco Pharma Gluta C 1000</strong><br/><br/>
    Experience the trusted Vesco Pharma Gluta C 1000 liquid glutathione formulation. This ready-to-use liquid formula combines glutathione with vitamin C for enhanced effectiveness and convenient administration.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Liquid Glutathione - 1,000 mg</li>
      <li>Vitamin C Complex</li>
      <li>Ready-to-Use Formula</li>
      <li>Enhanced Bioavailability</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Convenient liquid formulation</li>
      <li>Glutathione and vitamin C synergy</li>
      <li>Enhanced absorption</li>
    </ul>
    <br/>
    Experience convenient and effective whitening.<br/>
    <em class="text-xs text-gray-400">Note: Liquid formula for easy administration.</em>
  `,
  benefits: ["Liquid Formula", "Gluta C Complex", "Ready-to-Use", "Vesco Pharma"],
  sku: "VESCO-GLUTAC-1000",
  volume: "5 Sessions"
},
{
  id: 24,
  name: "Glutax 10000000GX DualNa Premium Recombined Cell - New Arrival",
  category: "Injection",
  brand: "Glutax",
  price: 11500,
  image: "/image/glutax-10mgx-dualna.jpg",
  description: "10 million GX DualNa premium recombined cell",
  details: `
    <strong>Glutax 10000000GX DualNa Premium Recombined Cell</strong><br/><br/>
    Experience the premium Glutax 10 million GX formulation with advanced DualNa technology and recombined cell science. This new arrival represents the cutting edge of glutathione whitening technology for exceptional results.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 10,000,000 GX</li>
      <li>DualNa Premium Technology</li>
      <li>Recombined Cell Complex</li>
      <li>Advanced Delivery System</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>High-potency 10 million GX</li>
      <li>Premium DualNa technology</li>
      <li>Recombined cell enhancement</li>
    </ul>
    <br/>
    Experience premium whitening technology.<br/>
    <em class="text-xs text-gray-400">Note: New arrival with premium features.</em>
  `,
  benefits: ["10 Million GX", "DualNa Premium", "Recombined Cell", "New Arrival"],
  sku: "GLUTAX-10MGX-PRM",
  volume: "10 Sessions"
},
{
  id: 25,
  name: "Glutax 20000000 GN+ Pico-QuadNA ReCombined White Glutathione injection",
  category: "Injection",
  brand: "Glutax",
  price: 9500,
  image: "/image/glutax-20mgn-pico.jpg",
  description: "20 million GN+ Pico-QuadNA recombined white",
  details: `
    <strong>Glutax 20000000GN+ Pico-QuadNA ReCombined White</strong><br/><br/>
    Experience the advanced Glutax 20 million GN+ formulation featuring Pico-QuadNA technology for unprecedented cellular delivery. This recombined white formula represents the pinnacle of whitening science.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 20,000,000 GN+</li>
      <li>Pico-QuadNA Technology</li>
      <li>ReCombined White Complex</li>
      <li>Quadruple Absorption System</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pico-sized particles for deep penetration</li>
      <li>Quadruple NA absorption pathways</li>
      <li>High-potency 20 million formulation</li>
    </ul>
    <br/>
    Experience quadruple absorption technology.<br/>
    <em class="text-xs text-gray-400">Note: Advanced Pico-QuadNA delivery system.</em>
  `,
  benefits: ["20 Million GN+", "Pico-QuadNA", "Quadruple Absorption", "ReCombined White"],
  sku: "GLUTAX-20MGN-PICO",
  volume: "10 Sessions"
},
{
  id: 26,
  name: "Glutax 2000000GX DualNA Premium Recombined 2,000,000G Glutathione Injections",
  category: "Injection",
  brand: "Glutax",
  price: 10600,
  image: "/image/glutax-2mgx-dualna.jpg",
  description: "2 million GX DualNA premium recombined",
  details: `
    <strong>Glutax 2000000GX DualNA Premium Recombined</strong><br/><br/>
    Experience the balanced power of Glutax 2 million GX with DualNA premium technology. This recombined formulation provides effective whitening with the reliability of proven Glutax technology and premium enhancement.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 2,000,000 GX</li>
      <li>DualNA Premium Complex</li>
      <li>Recombined Technology</li>
      <li>Premium Carriers</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Balanced 2 million potency</li>
      <li>Premium DualNA technology</li>
      <li>Proven reliable formulation</li>
    </ul>
    <br/>
    Experience balanced and reliable whitening.<br/>
    <em class="text-xs text-gray-400">Note: Premium balanced formulation.</em>
  `,
  benefits: ["2 Million GX", "DualNA Premium", "Balanced Formula", "Proven Reliability"],
  sku: "GLUTAX-2MGX-PRM",
  volume: "10 Sessions"
},
{
  id: 27,
  name: "Glutax 20000gr Ultra Sirna Voluntary White 20,000G Glutathione",
  category: "Injection",
  brand: "Glutax",
  price: 10500,
  image: "/image/glutax-20k-sirna.jpg",
  description: "20,000G Ultra Sirna voluntary white technology",
  details: `
    <strong>Glutax 20000gr Ultra Sirna Voluntary White</strong><br/><br/>
    Experience the innovative Ultra Sirna technology in the Glutax 20,000G formulation. This voluntary white system uses advanced RNA interference technology to encourage natural skin lightening at the cellular level.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 20,000 G</li>
      <li>Ultra Sirna Technology</li>
      <li>Voluntary White Complex</li>
      <li>RNA Interference System</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>RNA interference technology</li>
      <li>Encourages natural lightening</li>
      <li>Advanced cellular communication</li>
    </ul>
    <br/>
    Experience next-generation RNA technology.<br/>
    <em class="text-xs text-gray-400">Note: Advanced RNA interference technology.</em>
  `,
  benefits: ["Ultra Sirna Tech", "RNA Interference", "Voluntary White", "Cellular Communication"],
  sku: "GLUTAX-20K-SIRNA",
  volume: "10 Sessions"
},
{
  id: 28,
  name: "Glutax 2000gs Advanced Recombined White 2000G Glutathione Injections",
  category: "Injection",
  brand: "Glutax",
  price: 10000,
  image: "/image/glutax-2000gs-adv.jpg",
  description: "Advanced recombined white 2000G glutathione",
  details: `
    <strong>Glutax 2000gs Advanced Recombined White</strong><br/><br/>
    Experience the advanced recombined white technology in the Glutax 2000GS formulation. This enhanced version provides superior whitening results through advanced recombination technology and optimized delivery.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 2,000 G</li>
      <li>Advanced Recombined Complex</li>
      <li>White Enhancement Technology</li>
      <li>Optimized Delivery System</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Advanced recombination technology</li>
      <li>Enhanced whitening action</li>
      <li>Optimized for maximum results</li>
    </ul>
    <br/>
    Experience advanced recombination technology.<br/>
    <em class="text-xs text-gray-400">Note: Advanced recombined white formula.</em>
  `,
  benefits: ["Advanced Formula", "Recombined White", "2000GS Strength", "Enhanced Action"],
  sku: "GLUTAX-2000GS-ADV",
  volume: "10 Sessions"
},
{
  id: 29,
  name: "Glutax 2000gs Recombined White Injections Glutax 2000gs Recombined White Injections",
  category: "Injection",
  brand: "Glutax",
  price: 8800,
  image: "/image/glutax-2000gs-std.jpg",
  description: "Standard recombined white 2000GS injections",
  details: `
    <strong>Glutax 2000gs Recombined White Injections</strong><br/><br/>
    Experience the reliable standard Glutax 2000GS recombined white formulation. This proven formula provides consistent whitening results with the trusted Glutax quality and recombined white technology.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 2,000 G</li>
      <li>Recombined White Technology</li>
      <li>Standard Formula</li>
      <li>Quality Ingredients</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Proven reliable formulation</li>
      <li>Consistent whitening results</li>
      <li>Trusted Glutax quality</li>
    </ul>
    <br/>
    Trust in proven whitening technology.<br/>
    <em class="text-xs text-gray-400">Note: Standard reliable formulation.</em>
  `,
  benefits: ["Standard Formula", "Proven Reliability", "2000GS Strength", "Consistent Results"],
  sku: "GLUTAX-2000GS-STD",
  volume: "10 Sessions"
},
{
  id: 30,
  name: "Glutax 22000000gs Extremely Tremendous White Glutathione Injection - New Arrival",
  category: "Injection",
  brand: "Glutax",
  price: 11800,
  image: "/image/glutax-22mgs-tremendous.jpg",
  description: "22 million GS extremely tremendous white - new",
  details: `
    <strong>Glutax 22000000gs Extremely Tremendous White</strong><br/><br/>
    Experience the extremely tremendous whitening power of Glutax 22 million GS. This new arrival represents one of the highest potency formulations available, designed for those seeking dramatic and rapid whitening results.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 22,000,000 GS</li>
      <li>Tremendous White Complex</li>
      <li>Extreme Potency Technology</li>
      <li>Rapid Action Formula</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Extremely high potency</li>
      <li>Rapid whitening action</li>
      <li>Dramatic results</li>
    </ul>
    <br/>
    Experience tremendous whitening power.<br/>
    <em class="text-xs text-gray-400">Note: Extreme potency formulation - professional use.</em>
  `,
  benefits: ["22 Million GS", "Extreme Potency", "Tremendous White", "New Arrival"],
  sku: "GLUTAX-22MGS-TREM",
  volume: "10 Sessions"
},
{
  id: 31,
  name: "Glutax 2500gs Elixir Essence 2500G Glutathione Injections",
  category: "Injection",
  brand: "Glutax",
  price: 17500,
  image: "/image/glutax-2500gs-elixir.jpg",
  description: "Elixir essence 2500G glutathione formulation",
  details: `
    <strong>Glutax 2500gs Elixir Essence 2500G Glutathione Injections</strong><br/><br/>
    Experience the elixir essence formulation of Glutax 2500GS. This premium version features enhanced essence technology for superior skin nourishment and whitening, providing an elixir-like transformation for your skin.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 2,500 G</li>
      <li>Elixir Essence Complex</li>
      <li>Premium Nourishment Matrix</li>
      <li>Essence Technology</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Elixir-grade formulation</li>
      <li>Enhanced skin nourishment</li>
      <li>Premium essence technology</li>
    </ul>
    <br/>
    Experience elixir-grade skin transformation.<br/>
    <em class="text-xs text-gray-400">Note: Premium elixir essence formula.</em>
  `,
  benefits: ["Elixir Essence", "2500GS Strength", "Premium Grade", "Enhanced Nourishment"],
  sku: "GLUTAX-2500GS-ELIXIR",
  volume: "10 Sessions"
},
{
  id: 32,
  name: "Glutax 30000000gs Extremely Tremendous Glutathione 30,000,000mg - New Arrival",
  category: "Injection",
  brand: "Glutax",
  price: 11900,
  image: "/image/glutax-30mgs-tremendous.jpg",
  description: "30 million GS extremely tremendous - new arrival",
  details: `
    <strong>Glutax 30000000gs Extremely Tremendous Glutathione</strong><br/><br/>
    Experience the ultimate in whitening potency with Glutax 30 million GS. This extremely tremendous formulation represents the highest concentration available, designed for those who demand the most powerful whitening results possible.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 30,000,000 GS</li>
      <li>Extreme Potency Complex</li>
      <li>Tremendous White Technology</li>
      <li>Maximum Strength Formula</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Highest potency available</li>
      <li>Extremely rapid results</li>
      <li>Maximum whitening power</li>
    </ul>
    <br/>
    Experience the ultimate in whitening potency.<br/>
    <em class="text-xs text-gray-400">Note: Maximum strength - professional supervision required.</em>
  `,
  benefits: ["30 Million GS", "Maximum Potency", "Extreme Strength", "New Arrival"],
  sku: "GLUTAX-30MGS-ULTRA",
  volume: "10 Sessions"
},
{
  id: 33,
  name: "Glutax 5gs Micro Advance 5000mg Glutathione - 12 Sessions",
  category: "Injection",
  brand: "Glutax",
  price: 13500,
  image: "/image/glutax-5gs-adv-12s.jpg",
  description: "Micro advance 5000mg - 12 session package",
  details: `
    <strong>Glutax 5gs Micro Advance 5000mg Glutathione - 12 Sessions</strong><br/><br/>
    Experience the comprehensive 12-session package of Glutax 5GS Micro Advance. This extended treatment plan ensures complete skin transformation with the advanced micro technology for optimal and lasting results.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 5,000 mg per session</li>
      <li>Micro Advance Technology</li>
      <li>Complete Treatment Package</li>
      <li>Extended Results Formula</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Comprehensive 12-session plan</li>
      <li>Micro technology for better absorption</li>
      <li>Extended and lasting results</li>
    </ul>
    <br/>
    Commit to complete skin transformation.<br/>
    <em class="text-xs text-gray-400">Note: 12-session complete treatment package.</em>
  `,
  benefits: ["12 Sessions", "Micro Advance", "Complete Package", "Extended Treatment"],
  sku: "GLUTAX-5GS-ADV-12",
  volume: "12 Sessions"
},
{
  id: 34,
  name: "Glutax 5gs Micro Cellular Glutathione 5000mg Injection",
  category: "Injection",
  brand: "Glutax",
  price: 9500,
  image: "/image/glutax-5gs-micro.jpg",
  description: "Micro cellular glutathione 5000mg injection",
  details: `
    <strong>Glutax 5gs Micro Cellular Glutathione 5000mg Injection</strong><br/><br/>
    Experience the micro cellular technology of Glutax 5GS. This formulation breaks down glutathione to micro cellular size for enhanced absorption and effectiveness, providing reliable whitening with proven technology.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 5,000 mg</li>
      <li>Micro Cellular Technology</li>
      <li>Cellular Absorption Enhancers</li>
      <li>Proven Formula</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Micro-sized for better absorption</li>
      <li>Cellular-level targeting</li>
      <li>Proven reliable results</li>
    </ul>
    <br/>
    Experience cellular-level whitening technology.<br/>
    <em class="text-xs text-gray-400">Note: Micro cellular absorption technology.</em>
  `,
  benefits: ["Micro Cellular", "5000mg Strength", "Enhanced Absorption", "Cellular Targeting"],
  sku: "GLUTAX-5GS-MICRO",
  volume: "10 Sessions"
},
{
  id: 35,
  name: "Glutax 75GX DCRP 750000 DNA Cell Revitalize",
  category: "Injection",
  brand: "Glutax",
  price: 11800,
  image: "/image/glutax-75gx-dcrp.jpg",
  description: "75GX DCRP DNA cell revitalize technology",
  details: `
    <strong>Glutax 75GX DCRP 750000 DNA Cell Revitalize</strong><br/><br/>
    Experience the advanced DNA Cell Revitalize Process (DCRP) in the Glutax 75GX formulation. This innovative technology works at the DNA level to revitalize and rejuvenate skin cells while providing powerful whitening action.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 750,000 GX</li>
      <li>DCRP Technology</li>
      <li>DNA Revitalize Complex</li>
      <li>Cellular Rejuvenation Matrix</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>DNA-level cell revitalization</li>
      <li>Comprehensive skin rejuvenation</li>
      <li>Advanced DCRP technology</li>
    </ul>
    <br/>
    Experience DNA-level skin revitalization.<br/>
    <em class="text-xs text-gray-400">Note: Advanced DNA cell revitalize process.</em>
  `,
  benefits: ["DCRP Technology", "DNA Revitalize", "750K GX", "Cellular Rejuvenation"],
  sku: "GLUTAX-75GX-DCRP",
  volume: "10 Sessions"
},
{
  id: 36,
  name: "Glutax 8000000gs Ultimate Recombined White Glutathione Injection - New Arrival",
  category: "Injection",
  brand: "Glutax",
  price: 11600,
  image: "/image/glutax-8mgs-ultimate.jpg",
  description: "8 million GS ultimate recombined white - new",
  details: `
    <strong>Glutax 8000000gs Ultimate Recombined White Glutathione Injection</strong><br/><br/>
    Experience the ultimate recombined white technology in the Glutax 8 million GS formulation. This new arrival represents the pinnacle of recombined white science, providing exceptional whitening with ultimate technology.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 8,000,000 GS</li>
      <li>Ultimate Recombined Complex</li>
      <li>White Enhancement Matrix</li>
      <li>Advanced Delivery System</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultimate recombined technology</li>
      <li>High-potency 8 million GS</li>
      <li>Exceptional whitening results</li>
    </ul>
    <br/>
    Experience ultimate recombined white technology.<br/>
    <em class="text-xs text-gray-400">Note: New arrival with ultimate technology.</em>
  `,
  benefits: ["8 Million GS", "Ultimate Recombined", "New Arrival", "Advanced White Tech"],
  sku: "GLUTAX-8MGS-ULT",
  volume: "10 Sessions"
},
{
  id: 37,
  name: "Glutax 990000gh Dual Hydra Whitening Injection",
  category: "Injection",
  brand: "Glutax",
  price: 8000,
  image: "/image/glutax-990kgh-hydra.jpg",
  description: "990000GH dual hydra whitening injection",
  details: `
    <strong>Glutax 990000gh Dual Hydra Whitening Injection</strong><br/><br/>
    Experience the dual hydra technology of Glutax 990000GH. This formulation combines powerful whitening with intensive hydration, addressing both skin tone and moisture balance for comprehensive skin improvement.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 990,000 GH</li>
      <li>Dual Hydra Complex</li>
      <li>Hydration Technology</li>
      <li>Moisture Balance Matrix</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Combines whitening with hydration</li>
      <li>Dual action technology</li>
      <li>Improves skin moisture balance</li>
    </ul>
    <br/>
    Experience whitening with intensive hydration.<br/>
    <em class="text-xs text-gray-400">Note: Dual action whitening and hydration.</em>
  `,
  benefits: ["Dual Hydra", "990K GH", "Whitening + Hydration", "Moisture Balance"],
  sku: "GLUTAX-990KGH-HYDRA",
  volume: "10 Sessions"
},
{
  id: 38,
  name: "Green Natural Lip Treatment With Aloe Vera & Vitamin E - Non-Irritating, For Lips",
  category: "Treatment",
  brand: "Green Natural",
  price: 750,
  image: "/image/green-natural-lip.jpg",
  description: "Natural lip treatment with aloe vera and vitamin E",
  details: `
    <strong>Green Natural Lip Treatment With Aloe Vera & Vitamin E</strong><br/><br/>
    Experience gentle and effective lip care with Green Natural Lip Treatment. Formulated with aloe vera and vitamin E, this non-irritating treatment soothes, moisturizes, and helps lighten dark lips naturally and safely.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Aloe Vera Extract</li>
      <li>Vitamin E Complex</li>
      <li>Natural Moisturizers</li>
      <li>Gentle Lightening Agents</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Soothes and moisturizes lips</li>
      <li>Gentle lightening action</li>
      <li>Non-irritating formula</li>
    </ul>
    <br/>
    Achieve naturally beautiful lips.<br/>
    <em class="text-xs text-gray-400">Note: Specifically formulated for delicate lip skin.</em>
  `,
  benefits: ["Aloe Vera", "Vitamin E", "Non-Irritating", "Lip Care"],
  sku: "GREEN-LIP-TREAT",
  volume: "15g Tube"
},
{
  id: 39,
  name: "Japan Beauty Booster For Skin Whitening",
  category: "Supplement",
  brand: "Japan Beauty",
  price: 4500,
  image: "/image/japan-beauty-booster.jpg",
  description: "Japanese beauty booster for skin whitening",
  details: `
    <strong>Japan Beauty Booster For Skin Whitening</strong><br/><br/>
    Experience Japanese skincare excellence with Japan Beauty Booster. This advanced supplement combines traditional Japanese ingredients with modern technology to support skin whitening from within, promoting natural radiance and clarity.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Japanese Whitening Complex</li>
      <li>Traditional Herbal Extracts</li>
      <li>Modern Technology</li>
      <li>Skin Health Support</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Japanese skincare philosophy</li>
      <li>Works from within</li>
      <li>Supports natural skin radiance</li>
    </ul>
    <br/>
    Experience Japanese beauty from within.<br/>
    <em class="text-xs text-gray-400">Note: Dietary supplement for skin whitening support.</em>
  `,
  benefits: ["Japanese Formula", "Beauty Booster", "Internal Support", "Natural Radiance"],
  sku: "JAPAN-BEAUTY-BOOST",
  volume: "60 Capsules"
},
{
  id: 40,
  name: "Laroscorbine Palladium E-UF PN Vitamin C 126 g - Collagen 54g - Pink Box",
  category: "Injection",
  brand: "Laroscobine",
  price: 5700,
  image: "/image/laroscobine-pink.jpg",
  description: "Palladium E-UF PN vitamin C and collagen - pink box",
  details: `
    <strong>Laroscobine Palladium E-UF PN Vitamin C 126g - Collagen 54g - Pink Box</strong><br/><br/>
    Experience the premium Laroscobine Palladium series in the distinctive pink box. This E-UF PN formulation combines high-dose vitamin C with collagen for comprehensive skin brightening, firming, and overall skin health improvement.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Vitamin C - 126,000 mg</li>
      <li>Collagen - 54,000 mg</li>
      <li>Palladium Complex</li>
      <li>E-UF PN Technology</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>High-dose vitamin C for brightening</li>
      <li>Collagen for skin firmness</li>
      <li>Palladium grade quality</li>
    </ul>
    <br/>
    Achieve brightening and firming in one treatment.<br/>
    <em class="text-xs text-gray-400">Note: Pink box premium series.</em>
  `,
  benefits: ["126g Vitamin C", "54g Collagen", "Palladium Grade", "Pink Box Series"],
  sku: "LAROS-PINK-PALLADIUM",
  volume: "6 Sessions"
},
{
  id: 41,
  name: "Laroscorbine Diamond E-UF Vitamin C 150,000mg, Collagen 54,000gm - Blue Box",
  category: "Injection",
  brand: "Laroscorbine",
  price: 6800,
  image: "/image/laroscorbine-blue.jpg",
  description: "Diamond E-UF vitamin C and collagen - blue box",
  details: `
    <strong>Laroscorbine Diamond E-UF Vitamin C 150,000mg, Collagen 54,000gm - Blue Box</strong><br/><br/>
    Experience the diamond-grade Laroscorbine formulation in the premium blue box. This E-UF technology delivers exceptional vitamin C and collagen combination for superior skin brightening and structural support.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Vitamin C - 150,000 mg</li>
      <li>Collagen - 54,000 mg</li>
      <li>Diamond Complex</li>
      <li>E-UF Technology</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Diamond-grade formulation</li>
      <li>Enhanced vitamin C delivery</li>
      <li>Superior collagen support</li>
    </ul>
    <br/>
    Experience diamond-grade skin enhancement.<br/>
    <em class="text-xs text-gray-400">Note: Blue box diamond series.</em>
  `,
  benefits: ["150K Vitamin C", "54K Collagen", "Diamond Grade", "Blue Box Series"],
  sku: "LAROS-BLUE-DIAMOND",
  volume: "6 Sessions"
},
{
  id: 42,
  name: "Laroscorbine Diamond E-UF Vitamin C 20,000mg, Collagen 15,000mg - Green Box",
  category: "Injection",
  brand: "Laroscorbine",
  price: 5000,
  image: "/image/laroscorbine-green.jpg",
  description: "Diamond E-UF vitamin C and collagen - green box",
  details: `
    <strong>Laroscorbine Diamond E-UF Vitamin C 20,000mg, Collagen 15,000mg - Green Box</strong><br/><br/>
    Experience the balanced Laroscorbine Diamond formulation in the green box. This E-UF technology provides optimal vitamin C and collagen levels for effective skin brightening and health maintenance.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Vitamin C - 20,000 mg</li>
      <li>Collagen - 15,000 mg</li>
      <li>Diamond Technology</li>
      <li>E-UF Enhancement</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Balanced formulation</li>
      <li>Effective maintenance dose</li>
      <li>Diamond technology quality</li>
    </ul>
    <br/>
    Maintain skin health with balanced enhancement.<br/>
    <em class="text-xs text-gray-400">Note: Green box maintenance series.</em>
  `,
  benefits: ["20K Vitamin C", "15K Collagen", "Balanced Formula", "Green Box Series"],
  sku: "LAROS-GREEN-DIAMOND",
  volume: "6 Sessions"
},
{
  id: 43,
  name: "Lipo Lab PPC Solution Fat Loss Injections - Made In Korea",
  category: "Weight",
  brand: "Lipo Lab",
  price: 5000,
  image: "/image/lipo-lab-ppc.jpg",
  description: "Korean PPC solution fat loss injections",
  details: `
    <strong>Lipo Lab PPC Solution Fat Loss Injections - Made In Korea</strong><br/><br/>
    Experience Korean innovation in fat loss with Lipo Lab PPC Solution. Made in Korea with advanced PPC (Polyenylphosphatidylcholine) technology, these injections target stubborn fat areas for effective reduction and body contouring.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>PPC Complex</li>
      <li>Fat Emulsification Agents</li>
      <li>Korean Technology</li>
      <li>Body Contouring Matrix</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Targets stubborn fat areas</li>
      <li>Korean advanced technology</li>
      <li>Effective fat reduction</li>
    </ul>
    <br/>
    Achieve better body contouring with Korean technology.<br/>
    <em class="text-xs text-gray-400">Note: Made in Korea - professional administration required.</em>
  `,
  benefits: ["PPC Technology", "Fat Loss", "Korean Made", "Body Contouring"],
  sku: "LIPOLAB-PPC-KOREA",
  volume: "10 Sessions"
},
{
  id: 44,
  name: "Lucchini Glutathione Peptide PicoCell Brightening Solution Injection",
  category: "Injection",
  brand: "Lucchini",
  price: 11500,
  image: "/image/lucchini-picocell.jpg",
  description: "Peptide PicoCell brightening solution injection",
  details: `
    <strong>Lucchini Glutathione Peptide PicoCell Brightening Solution Injection</strong><br/><br/>
    Experience the sophisticated Lucchini formulation combining glutathione with peptide technology and PicoCell delivery. This advanced brightening solution provides multi-level skin lightening with enhanced cellular penetration.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione Complex</li>
      <li>Peptide Technology</li>
      <li>PicoCell Delivery</li>
      <li>Brightening Solution Matrix</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Combines multiple advanced technologies</li>
      <li>Enhanced cellular penetration</li>
      <li>Multi-level brightening action</li>
    </ul>
    <br/>
    Experience sophisticated multi-technology brightening.<br/>
    <em class="text-xs text-gray-400">Note: Advanced peptide and PicoCell technology.</em>
  `,
  benefits: ["Peptide Tech", "PicoCell Delivery", "Lucchini Formula", "Multi-Technology"],
  sku: "LUCCHINI-PICO-PEPTIDE",
  volume: "10 Sessions"
},
{
  id: 45,
  name: "Lucchini Placenta Fresh Cell Therapy (Human Placenta)",
  category: "Injection",
  brand: "Lucchini",
  price: 10000,
  image: "/image/lucchini-placenta-fresh.jpg",
  description: "Fresh cell therapy with human placenta",
  details: `
    <strong>Lucchini Placenta Fresh Cell Therapy (Human Placenta)</strong><br/><br/>
    Experience the rejuvenating power of Lucchini Placenta Fresh Cell Therapy. Utilizing human placenta extracts, this advanced therapy promotes cellular regeneration, skin rejuvenation, and overall vitality for more youthful appearing skin.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Human Placenta Extract</li>
      <li>Fresh Cell Technology</li>
      <li>Cellular Regeneration Complex</li>
      <li>Rejuvenation Matrix</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Promotes cellular regeneration</li>
      <li>Provides essential growth factors</li>
      <li>Enhances skin vitality</li>
    </ul>
    <br/>
    Experience cellular-level rejuvenation.<br/>
    <em class="text-xs text-gray-400">Note: Human placenta extract - professional use only.</em>
  `,
  benefits: ["Human Placenta", "Fresh Cell Therapy", "Cellular Regeneration", "Rejuvenation"],
  sku: "LUCCHINI-PLACENTA-FRESH",
  volume: "5 Sessions"
},
{
  id: 46,
  name: "Lucchini Placenta Power Cell 27th Anniversary (Human Placenta)",
  category: "Injection",
  brand: "Lucchini",
  price: 14000,
  image: "/image/lucchini-27th-anniv.jpg",
  description: "27th anniversary power cell human placenta",
  details: `
    <strong>Lucchini Placenta Power Cell 27th Anniversary (Human Placenta)</strong><br/><br/>
    Experience the special 27th Anniversary edition of Lucchini Placenta Power Cell. This commemorative formulation features enhanced power cell technology with human placenta for exceptional regenerative and rejuvenating results.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Human Placenta Power Cell</li>
      <li>27th Anniversary Formula</li>
      <li>Enhanced Regeneration Complex</li>
      <li>Commemorative Technology</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Special anniversary formulation</li>
      <li>Enhanced power cell technology</li>
      <li>Exceptional regenerative properties</li>
    </ul>
    <br/>
    Experience special anniversary rejuvenation.<br/>
    <em class="text-xs text-gray-400">Note: 27th anniversary special edition.</em>
  `,
  benefits: ["27th Anniversary", "Power Cell Tech", "Human Placenta", "Special Edition"],
  sku: "LUCCHINI-27TH-ANNIV",
  volume: "5 Sessions"
},
{
  id: 47,
  name: "Miracle White 55000mg Skin Whitening Injection, For Body",
  category: "Injection",
  brand: "Miracle White",
  price: 8800,
  image: "/image/miracle-white-body.jpg",
  description: "55,000mg skin whitening injection for body",
  details: `
    <strong>Miracle White 55000mg Skin Whitening Injection, For Body</strong><br/><br/>
    Experience comprehensive body whitening with Miracle White 55,000mg formulation. Specifically designed for body application, this formulation addresses larger surface areas and provides even skin tone across the entire body.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 55,000 mg</li>
      <li>Body Whitening Complex</li>
      <li>Even Tone Technology</li>
      <li>Large Area Formula</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Specifically for body application</li>
      <li>Addresses larger surface areas</li>
      <li>Provides even body tone</li>
    </ul>
    <br/>
    Achieve even skin tone across your entire body.<br/>
    <em class="text-xs text-gray-400">Note: Specifically formulated for body whitening.</em>
  `,
  benefits: ["Body Formula", "55,000mg Strength", "Even Tone", "Large Area Coverage"],
  sku: "MIRACLE-BODY-55K",
  volume: "8 Sessions"
},
{
  id: 48,
  name: "Miracle White Purple 60000mg Glutathione Injection",
  category: "Injection",
  brand: "Miracle White",
  price: 8800,
  image: "/image/miracle-white-purple.jpg",
  description: "Purple series 60,000mg glutathione injection",
  details: `
    <strong>Miracle White Purple 60000mg Glutathione Injection</strong><br/><br/>
    Experience the premium Purple series of Miracle White with 60,000mg glutathione potency. This special edition formulation provides enhanced whitening with the distinctive purple series technology for superior results.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 60,000 mg</li>
      <li>Purple Series Technology</li>
      <li>Enhanced Whitening Complex</li>
      <li>Special Edition Formula</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Premium purple series</li>
      <li>Enhanced whitening technology</li>
      <li>Special edition formulation</li>
    </ul>
    <br/>
    Experience premium purple series whitening.<br/>
    <em class="text-xs text-gray-400">Note: Purple series special edition.</em>
  `,
  benefits: ["Purple Series", "60,000mg Strength", "Premium Edition", "Enhanced Whitening"],
  sku: "MIRACLE-PURPLE-60K",
  volume: "8 Sessions"
},
{
  id: 49,
  name: "Miracle gain",
  category: "Supplement",
  brand: "Miracle",
  price: 1700,
  image: "/image/miracle-gain.jpg",
  description: "Weight gain and body enhancement supplement",
  details: `
    <strong>Miracle Gain</strong><br/><br/>
    Experience healthy weight gain and body enhancement with Miracle Gain supplement. Formulated to support healthy weight increase and body shaping, this supplement provides essential nutrients for optimal body development and enhancement.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Weight Gain Complex</li>
      <li>Body Enhancement Nutrients</li>
      <li>Healthy Growth Support</li>
      <li>Nutritional Matrix</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Supports healthy weight gain</li>
      <li>Provides essential nutrients</li>
      <li>Promotes body enhancement</li>
    </ul>
    <br/>
    Achieve healthy body enhancement and weight gain.<br/>
    <em class="text-xs text-gray-400">Note: Dietary supplement for weight gain support.</em>
  `,
  benefits: ["Weight Gain", "Body Enhancement", "Healthy Support", "Nutritional Aid"],
  sku: "MIRACLE-GAIN-CAP",
  volume: "90 Capsules"
},
{
  id: 50,
  name: "NC24 90000mg Japan Ultra Sense Complexion",
  category: "Injection",
  brand: "NC24",
  price: 8800,
  image: "/image/nc24-ultra-sense.jpg",
  description: "Japan ultra sense complexion 90,000mg",
  details: `
    <strong>NC24 90000mg Japan Ultra Sense Complexion</strong><br/><br/>
    Experience Japanese ultra sense technology with NC24 90,000mg formulation. This advanced complexion enhancer uses Japanese sensory technology to provide intelligent skin response and exceptional complexion improvement.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 90,000 mg</li>
      <li>Ultra Sense Technology</li>
      <li>Japanese Complexion Complex</li>
      <li>Intelligent Response System</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Japanese ultra sense technology</li>
      <li>Intelligent skin response</li>
      <li>Exceptional complexion enhancement</li>
    </ul>
    <br/>
    Experience intelligent complexion enhancement.<br/>
    <em class="text-xs text-gray-400">Note: Japanese ultra sense technology.</em>
  `,
  benefits: ["Ultra Sense Tech", "90,000mg Strength", "Japanese Formula", "Complexion Enhancement"],
  sku: "NC24-ULTRA-SENSE",
  volume: "10 Sessions"
},
{
  id: 51,
  name: "NC24 Sakura 800000mg Japan Special Edition Glutathione",
  category: "Injection",
  brand: "NC24",
  price: 11000,
  image: "/image/nc24-sakura.jpg",
  description: "Sakura special edition 800,000mg glutathione",
  details: `
    <strong>NC24 Sakura 800000mg Japan Special Edition Glutathione</strong><br/><br/>
    Experience the beauty of Japanese cherry blossoms with NC24 Sakura Special Edition. This 800,000mg glutathione formulation incorporates sakura extracts for a unique pinkish glow and exceptional whitening results inspired by Japanese beauty traditions.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 800,000 mg</li>
      <li>Sakura Cherry Blossom Extract</li>
      <li>Japanese Special Edition Formula</li>
      <li>Pink Radiance Complex</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Sakura extract for natural pink glow</li>
      <li>High-potency 800,000mg formulation</li>
      <li>Japanese beauty tradition inspired</li>
    </ul>
    <br/>
    Experience the beauty of sakura-inspired whitening.<br/>
    <em class="text-xs text-gray-400">Note: Sakura special edition formulation.</em>
  `,
  benefits: ["Sakura Edition", "800K mg", "Japanese Beauty", "Pink Glow"],
  sku: "NC24-SAKURA-800K",
  volume: "10 Sessions"
},
{
  id: 52,
  name: "Nc24 Ultra PDRN Miracle 280,000mg Glutathione Injections",
  category: "Injection",
  brand: "NC24",
  price: 2200,
  image: "/image/nc24-pdrn.jpg",
  description: "Ultra PDRN miracle 280,000mg glutathione",
  details: `
    <strong>Nc24 Ultra PDRN Miracle 280,000mg Glutathione Injections</strong><br/><br/>
    Experience the miracle of PDRN technology with NC24 Ultra formulation. Combining 280,000mg glutathione with Polydeoxyribonucleotide (PDRN) for enhanced cellular regeneration and exceptional whitening results through advanced DNA technology.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 280,000 mg</li>
      <li>PDRN Complex</li>
      <li>DNA Regeneration Technology</li>
      <li>Miracle Enhancement Formula</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>PDRN for cellular regeneration</li>
      <li>DNA-level skin improvement</li>
      <li>Enhanced whitening with regeneration</li>
    </ul>
    <br/>
    Experience DNA-level skin transformation.<br/>
    <em class="text-xs text-gray-400">Note: Advanced PDRN DNA technology.</em>
  `,
  benefits: ["PDRN Tech", "280K mg", "DNA Regeneration", "Miracle Formula"],
  sku: "NC24-PDRN-280K",
  volume: "8 Sessions"
},
{
  id: 53,
  name: "Neo Hair Lotion",
  category: "Lotion",
  brand: "Neo",
  price: 9800,
  image: "/image/neo-hair-lotion.jpg",
  description: "Advanced hair care and treatment lotion",
  details: `
    <strong>Neo Hair Lotion</strong><br/><br/>
    Experience comprehensive hair care with Neo Hair Lotion. This advanced treatment lotion is designed to improve hair health, promote growth, and address various hair concerns while providing essential nourishment and protection for your hair.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Hair Growth Complex</li>
      <li>Scalp Nourishment Agents</li>
      <li>Hair Strength Enhancers</li>
      <li>Protective Matrix</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Promotes healthy hair growth</li>
      <li>Nourishes scalp and hair follicles</li>
      <li>Improves overall hair health</li>
    </ul>
    <br/>
    Achieve healthier, stronger hair.<br/>
    <em class="text-xs text-gray-400">Note: For external use on hair and scalp.</em>
  `,
  benefits: ["Hair Growth", "Scalp Care", "Hair Strength", "Nourishment"],
  sku: "NEO-HAIR-LOTION",
  volume: "200ml Bottle"
},
{
  id: 54,
  name: "Neutro Skin Cactus fruit and avocado Glutathione Injections",
  category: "Injection",
  brand: "Neutro Skin",
  price: 9800,
  image: "/image/neutro-cactus-avocado.jpg",
  description: "Cactus fruit and avocado glutathione injections",
  details: `
    <strong>Neutro Skin Cactus fruit and avocado Glutathione Injections</strong><br/><br/>
    Experience the natural power of cactus fruit and avocado with Neutro Skin glutathione injections. This unique formulation combines the antioxidant benefits of glutathione with the nourishing properties of natural fruits for comprehensive skin health and whitening.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione Complex</li>
      <li>Cactus Fruit Extract</li>
      <li>Avocado Oil Complex</li>
      <li>Natural Antioxidant Blend</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Natural fruit extracts for nourishment</li>
      <li>Combines whitening with skin health</li>
      <li>Natural antioxidant protection</li>
    </ul>
    <br/>
    Experience natural fruit-enhanced whitening.<br/>
    <em class="text-xs text-gray-400">Note: Natural fruit extract formulation.</em>
  `,
  benefits: ["Cactus Fruit", "Avocado", "Natural Extracts", "Skin Nourishment"],
  sku: "NEUTRO-CACTUS-AVOCADO",
  volume: "10 Sessions"
},
{
  id: 55,
  name: "Neutro Skin Lemon Ultimate Whitening with Glutathione 2000000",
  category: "Injection",
  brand: "Neutro Skin",
  price: 8800,
  image: "/image/neutro-lemon-ultimate.jpg",
  description: "Lemon ultimate whitening with 2 million glutathione",
  details: `
    <strong>Neutro Skin Lemon Ultimate Whitening with Glutathione 2000000</strong><br/><br/>
    Experience the ultimate whitening power of lemon with Neutro Skin's 2 million glutathione formulation. Combining the natural brightening properties of lemon with high-potency glutathione for exceptional skin lightening and brightening results.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 2,000,000 mg</li>
      <li>Lemon Extract Complex</li>
      <li>Ultimate Whitening Technology</li>
      <li>Natural Brightening Agents</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Lemon for natural brightening</li>
      <li>High-potency 2 million glutathione</li>
      <li>Ultimate whitening combination</li>
    </ul>
    <br/>
    Experience ultimate lemon-powered whitening.<br/>
    <em class="text-xs text-gray-400">Note: Lemon extract enhanced formula.</em>
  `,
  benefits: ["Lemon Extract", "2 Million mg", "Ultimate Whitening", "Natural Brightening"],
  sku: "NEUTRO-LEMON-2M",
  volume: "10 Sessions"
},
{
  id: 56,
  name: "Neutro Skin Pomegranate 12000mg Glutathione Injections",
  category: "Injection",
  brand: "Neutro Skin",
  price: 7500,
  image: "/image/neutro-pomegranate.jpg",
  description: "Pomegranate 12,000mg glutathione injections",
  details: `
    <strong>Neutro Skin Pomegranate 12000mg Glutathione Injections</strong><br/><br/>
    Experience the antioxidant power of pomegranate with Neutro Skin's 12,000mg glutathione formulation. This combination provides dual antioxidant protection while delivering effective whitening and skin health benefits.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 12,000 mg</li>
      <li>Pomegranate Extract</li>
      <li>Antioxidant Complex</li>
      <li>Skin Health Matrix</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pomegranate for additional antioxidants</li>
      <li>Dual antioxidant protection</li>
      <li>Comprehensive skin health benefits</li>
    </ul>
    <br/>
    Experience dual antioxidant protection.<br/>
    <em class="text-xs text-gray-400">Note: Pomegranate antioxidant formula.</em>
  `,
  benefits: ["Pomegranate", "12,000mg", "Dual Antioxidants", "Skin Health"],
  sku: "NEUTRO-POMEGRANATE-12K",
  volume: "10 Sessions"
},
{
  id: 57,
  name: "Ratiopharm L Carnitine 20 Gram Weight & Fat Loss Injection",
  category: "Weight",
  brand: "Ratiopharm",
  price: 11500,
  image: "/image/ratiopharm-lcarnitine-20g.jpg",
  description: "L-Carnitine 20g weight and fat loss injection",
  details: `
    <strong>Ratiopharm L Carnitine 20 Gram Weight & Fat Loss Injection</strong><br/><br/>
    Experience the trusted quality of Ratiopharm L-Carnitine for effective weight and fat loss. This 20-gram formulation helps transport fatty acids into cells for energy production, supporting your weight management goals with pharmaceutical-grade quality.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>L-Carnitine - 20,000 mg</li>
      <li>Fat Metabolism Enhancers</li>
      <li>Energy Production Support</li>
      <li>Pharmaceutical Grade</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Enhances fat metabolism</li>
      <li>Supports energy production</li>
      <li>Pharmaceutical quality assurance</li>
    </ul>
    <br/>
    Support your weight loss journey with quality.<br/>
    <em class="text-xs text-gray-400">Note: Pharmaceutical grade L-Carnitine.</em>
  `,
  benefits: ["20g L-Carnitine", "Fat Loss", "Energy Boost", "Ratiopharm Quality"],
  sku: "RATIOPHARM-LCARN-20G",
  volume: "10 Sessions"
},
{
  id: 58,
  name: "Ratiopharm L-cartinine 10G - Weight Loss & Fat Loss Injection",
  category: "Weight",
  brand: "Ratiopharm",
  price: 16400,
  image: "/image/ratiopharm-lcarnitine-10g.jpg",
  description: "L-Carnitine 10g weight and fat loss injection",
  details: `
    <strong>Ratiopharm L-cartinine 10G - Weight Loss & Fat Loss Injection</strong><br/><br/>
    Experience the effective weight management support of Ratiopharm L-Carnitine 10g formulation. This concentrated injection helps optimize fat burning and energy metabolism while maintaining the high quality standards of Ratiopharm pharmaceuticals.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>L-Carnitine - 10,000 mg</li>
      <li>Metabolism Support Complex</li>
      <li>Fat Burning Enhancers</li>
      <li>Concentrated Formula</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Optimizes fat burning</li>
      <li>Supports metabolic function</li>
      <li>Concentrated effective formula</li>
    </ul>
    <br/>
    Enhance your weight management efforts.<br/>
    <em class="text-xs text-gray-400">Note: Concentrated L-Carnitine formula.</em>
  `,
  benefits: ["10g L-Carnitine", "Metabolism Support", "Fat Burning", "Concentrated Formula"],
  sku: "RATIOPHARM-LCARN-10G",
  volume: "8 Sessions"
},
{
  id: 59,
  name: "Relumins 2000mg Glutathione Injections - Free Glutathione Booster",
  category: "Injection",
  brand: "Relumins",
  price: 18500,
  image: "/image/relumins-2000mg-booster.jpg",
  description: "2000mg glutathione with free booster",
  details: `
    <strong>Relumins 2000mg Glutathione Injections - Free Glutathione Booster</strong><br/><br/>
    Experience the enhanced Relumins 2000mg glutathione formulation with complimentary glutathione booster. This premium package provides both immediate and sustained whitening action for comprehensive and lasting results.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 2,000 mg</li>
      <li>Free Booster Included</li>
      <li>Enhanced Formula</li>
      <li>Sustained Action Technology</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Immediate and sustained action</li>
      <li>Complimentary booster enhances results</li>
      <li>Premium Relumins quality</li>
    </ul>
    <br/>
    Get enhanced results with free booster.<br/>
    <em class="text-xs text-gray-400">Note: Includes complimentary glutathione booster.</em>
  `,
  benefits: ["2000mg Strength", "Free Booster", "Enhanced Formula", "Relumins Quality"],
  sku: "RELUMINS-2000-BOOST",
  volume: "10 Sessions + Booster"
},
{
  id: 60,
  name: "Relumins 3500mg Glutathione Injections - Free Glutathione Booster",
  category: "Injection",
  brand: "Relumins",
  price: 500,
  image: "/image/relumins-3500mg-booster.jpg",
  description: "3500mg glutathione with free booster",
  details: `
    <strong>Relumins 3500mg Glutathione Injections - Free Glutathione Booster</strong><br/><br/>
    Experience the high-potency Relumins 3500mg glutathione formulation with included glutathione booster. This powerful combination delivers intensive whitening action with the reliability and quality of the Relumins brand.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 3,500 mg</li>
      <li>Complimentary Booster</li>
      <li>High-Potency Formula</li>
      <li>Intensive Action Technology</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>High-potency 3500mg formulation</li>
      <li>Intensive whitening action</li>
      <li>Booster enhances effectiveness</li>
    </ul>
    <br/>
    Experience intensive high-potency whitening.<br/>
    <em class="text-xs text-gray-400">Note: High-potency with complimentary booster.</em>
  `,
  benefits: ["3500mg Strength", "High Potency", "Free Booster", "Intensive Action"],
  sku: "RELUMINS-3500-BOOST",
  volume: "8 Sessions + Booster"
},
{
  id: 61,
  name: "Renew Kojic Glutathione Skin Whitening Soap",
  category: "Soap",
  brand: "Renew",
  price: 16500,
  image: "/image/renew-kojic-soap.jpg",
  description: "Kojic and glutathione skin whitening soap",
  details: `
    <strong>Renew Kojic Glutathione Skin Whitening Soap</strong><br/><br/>
    Experience the powerful combination of kojic acid and glutathione in Renew Whitening Soap. This daily cleansing formula works to gradually lighten skin tone, reduce dark spots, and improve overall skin brightness with regular use.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Kojic Acid Complex</li>
      <li>Glutathione</li>
      <li>Skin Brightening Agents</li>
      <li>Gentle Cleansing Base</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Kojic acid inhibits melanin production</li>
      <li>Glutathione provides antioxidant protection</li>
      <li>Gradual and consistent lightening</li>
    </ul>
    <br/>
    Brighten your skin with daily cleansing.<br/>
    <em class="text-xs text-gray-400">Note: For daily use in whitening regimen.</em>
  `,
  benefits: ["Kojic Acid", "Glutathione", "Daily Cleansing", "Gradual Lightening"],
  sku: "RENEW-KOJIC-SOAP",
  volume: "100g Bar"
},
{
  id: 62,
  name: "Saint Blanc XIII Glutathione And Vitamin C Injections",
  category: "Injection",
  brand: "Saint Blanc",
  price: 13500,
  image: "/image/saint-blanc-xiii.jpg",
  description: "Glutathione and vitamin C injections - XIII series",
  details: `
    <strong>Saint Blanc XIII Glutathione And Vitamin C Injections</strong><br/><br/>
    Experience the premium Saint Blanc XIII series combining glutathione and vitamin C for exceptional skin whitening and antioxidant protection. This advanced formulation represents the 13th generation of Saint Blanc excellence in skin lightening technology.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione Complex</li>
      <li>Vitamin C Matrix</li>
      <li>XIII Generation Technology</li>
      <li>Premium Antioxidant Blend</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Synergistic glutathione and vitamin C</li>
      <li>13th generation advanced technology</li>
      <li>Comprehensive antioxidant protection</li>
    </ul>
    <br/>
    Experience 13 generations of whitening excellence.<br/>
    <em class="text-xs text-gray-400">Note: XIII generation premium formula.</em>
  `,
  benefits: ["XIII Series", "Glutathione + Vitamin C", "Premium Grade", "13th Generation"],
  sku: "SAINT-BLANC-XIII",
  volume: "10 Sessions"
},
{
  id: 63,
  name: "Shiro Advance Skin Whitening Injection",
  category: "Injection",
  brand: "Shiro",
  price: 1800,
  image: "/image/shiro-advance.jpg",
  description: "Advance skin whitening injection",
  details: `
    <strong>Shiro Advance Skin Whitening Injection</strong><br/><br/>
    Experience the advanced whitening technology of Shiro Advance formulation. Designed for effective and reliable skin lightening, this injection provides comprehensive whitening action with the trusted Shiro quality and performance.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Advanced Whitening Complex</li>
      <li>Glutathione Technology</li>
      <li>Skin Lightening Enhancers</li>
      <li>Quality Assurance Formula</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Advanced whitening technology</li>
      <li>Reliable and consistent results</li>
      <li>Trusted Shiro quality</li>
    </ul>
    <br/>
    Experience advanced and reliable whitening.<br/>
    <em class="text-xs text-gray-400">Note: Advanced Shiro formulation.</em>
  `,
  benefits: ["Shiro Advance", "Reliable Results", "Advanced Tech", "Quality Assurance"],
  sku: "SHIRO-ADVANCE-INJ",
  volume: "10 Sessions"
},
{
  id: 64,
  name: "St Dalfour Filipina Beauty Cream",
  category: "Cream",
  brand: "St Dalfour",
  price: 12400,
  image: "/image/st-dalfour-cream.jpg",
  description: "Filipina beauty cream by St Dalfour",
  details: `
    <strong>St Dalfour Filipina Beauty Cream</strong><br/><br/>
    Experience the elegance of St Dalfour Filipina Beauty Cream, specially formulated to enhance the natural beauty of Filipina skin. This premium cream addresses specific skin concerns while providing luxurious care and effective whitening results.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Filipina Skin Complex</li>
      <li>Luxury Whitening Agents</li>
      <li>Moisture Balance Technology</li>
      <li>Premium Cream Base</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Specifically for Filipina skin</li>
      <li>Luxury skincare experience</li>
      <li>Comprehensive beauty enhancement</li>
    </ul>
    <br/>
    Enhance your natural Filipina beauty.<br/>
    <em class="text-xs text-gray-400">Note: Specifically formulated for Filipina skin.</em>
  `,
  benefits: ["Filipina Formula", "Luxury Cream", "Skin Enhancement", "St Dalfour Quality"],
  sku: "ST-DALFOUR-FILIPINA",
  volume: "50g Jar"
},
{
  id: 65,
  name: "Tatio Active DX Japan 12G (12000mg) Glutathione Injections",
  category: "Injection",
  brand: "Tatio",
  price: 2000,
  image: "/image/tatio-active-dx.jpg",
  description: "Japan Active DX 12g glutathione injections",
  details: `
    <strong>Tatio Active DX Japan 12G (12000mg) Glutathione Injections</strong><br/><br/>
    Experience Japanese Active DX technology with Tatio 12g glutathione injections. This advanced formulation combines Japanese innovation with high-potency glutathione for effective and reliable skin whitening and health improvement.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 12,000 mg</li>
      <li>Active DX Technology</li>
      <li>Japanese Innovation Complex</li>
      <li>Enhanced Bioavailability</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Japanese Active DX technology</li>
      <li>High-potency 12g formulation</li>
      <li>Enhanced effectiveness</li>
    </ul>
    <br/>
    Experience Japanese active technology.<br/>
    <em class="text-xs text-gray-400">Note: Japanese Active DX formulation.</em>
  `,
  benefits: ["Active DX Tech", "12,000mg", "Japanese Formula", "Enhanced Bioavailability"],
  sku: "TATIO-ACTIVE-DX-12G",
  volume: "10 Sessions"
},
{
  id: 66,
  name: "VC Vitamin C Injection By Vesco Pharma Vitamin C 1000mg",
  category: "Injection",
  brand: "Vesco Pharma",
  price: 600,
  image: "/image/vesco-vitamin-c.jpg",
  description: "Vitamin C 1000mg injection by Vesco Pharma",
  details: `
    <strong>VC Vitamin C Injection By Vesco Pharma Vitamin C 1000mg</strong><br/><br/>
    Experience the pure power of Vitamin C with Vesco Pharma's 1000mg injection. This essential antioxidant supports collagen production, brightens skin, and provides comprehensive protection against environmental damage with pharmaceutical-grade quality.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Vitamin C - 1,000 mg</li>
      <li>Antioxidant Complex</li>
      <li>Collagen Support Matrix</li>
      <li>Skin Brightening Agents</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Essential antioxidant protection</li>
      <li>Supports collagen production</li>
      <li>Brightens and evens skin tone</li>
    </ul>
    <br/>
    Boost your skin health with pure Vitamin C.<br/>
    <em class="text-xs text-gray-400">Note: Pure Vitamin C antioxidant injection.</em>
  `,
  benefits: ["1000mg Vitamin C", "Antioxidant", "Collagen Support", "Vesco Pharma"],
  sku: "VESCO-VITAMIN-C-1000",
  volume: "5 Sessions"
},
{
  id: 67,
  name: "Vita Glow Glutathione Skin Whitening Soap",
  category: "Soap",
  brand: "Vita Glow",
  price: 1800,
  image: "/image/vita-glow-soap.jpg",
  description: "Glutathione skin whitening soap",
  details: `
    <strong>Vita Glow Glutathione Skin Whitening Soap</strong><br/><br/>
    Experience daily whitening care with Vita Glow Glutathione Soap. This gentle yet effective cleansing bar incorporates glutathione into your daily routine for gradual skin lightening, improved brightness, and overall skin health maintenance.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione Complex</li>
      <li>Gentle Cleansing Agents</li>
      <li>Skin Brightening Technology</li>
      <li>Moisture Balance Formula</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Daily gradual lightening</li>
      <li>Gentle on all skin types</li>
      <li>Maintains skin moisture balance</li>
    </ul>
    <br/>
    Make whitening part of your daily routine.<br/>
    <em class="text-xs text-gray-400">Note: For daily use in skincare routine.</em>
  `,
  benefits: ["Glutathione Soap", "Daily Use", "Gradual Lightening", "Gentle Formula"],
  sku: "VITA-GLOW-SOAP",
  volume: "100g Bar"
},
{
  id: 68,
  name: "Zaguta Glutathione Whitening Injections",
  category: "Injection",
  brand: "Zaguta",
  price: 10500,
  image: "/image/zaguta-injections.jpg",
  description: "Glutathione whitening injections",
  details: `
    <strong>Zaguta Glutathione Whitening Injections</strong><br/><br/>
    Experience the reliable effectiveness of Zaguta Glutathione Whitening Injections. This trusted formulation provides consistent and noticeable skin lightening results with quality ingredients and proven technology for comprehensive skin brightening.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione Complex</li>
      <li>Whitening Enhancement Technology</li>
      <li>Quality Tested Ingredients</li>
      <li>Proven Formula</li>
    </ul>
    <br/>
    <strong>Why it works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Consistent and reliable results</li>
      <li>Quality assured formulation</li>
      <li>Proven whitening effectiveness</li>
    </ul>
    <br/>
    Trust in proven whitening results.<br/>
    <em class="text-xs text-gray-400">Note: Reliable and proven formulation.</em>
  `,
  benefits: ["Zaguta Quality", "Reliable Results", "Proven Formula", "Consistent Whitening"],
  sku: "ZAGUTA-GLUTATHIONE",
  volume: "10 Sessions"
},
{
  id: 69,
  name: "Vita Glow Skin Whitening Cream",
  category: "Cream",
  brand: "Vita Glow",
  price: 2000,
  image: "/image/vita-glow-cream.jpg",
  description: "Skin whitening cream by Vita Glow",
  details: `
    <strong>Vita Glow Skin Whitening Cream</strong><br/><br/>
    Experience effective skin lightening with Vita Glow Skin Whitening Cream. This nourishing cream is designed to improve skin tone, reduce dark spots, and enhance overall brightness with regular use, providing a radiant complexion.<br/><br/>
    <strong>Key Active Components:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Whitening Agents</li>
      <li>Moisturizing Complex</li>
      <li>Skin Tone Enhancers</li>
      <li>Nourishing Ingredients</li>
    </ul>
    <br/>
    <strong>Why it works:</ strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Improves skin tone</li>
      <li>Reduces dark spots</li>
      <li>Enhances overall brightness</li>
    </ul>
    <br/>
    Achieve a radiant and even complexion.<br/>
    <em class="text-xs text-gray-400">Note: For regular use in whitening regimen.</em>
  `,
  benefits: ["Skin Lightening", "Dark Spot Reduction", "Moisturizing", "Radiant Complexion"],
  sku: "VITA-GLOW-CREAM",
  volume: "50g Jar"
}

];

const CATEGORIES = [
  { name: "Injection", id: "Injection" },
  { name: "Cream", id: "Cream" },
  { name: "Weight", id: "Weight" },
  { name: "Soap", id: "Soap" },
  { name: "Combo", id: "Combo" },
  { name: "Filler", id: "Filler" },
  { name: "Supplement", id: "Supplement" },
  { name: "Lotion", id: "Lotion" },
  { name: "Treatment", id: "Treatment" }
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
                    <img loading="lazy" src="/image/logo.jpg" alt="SHAA TRADING" className="h-10 md:h-16 w-auto object-contain" />
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
          <img loading="lazy" src="/image/logo-r.jpg" alt="SHAA TRADING" className="h-12 w-auto object-contain" />
          <p className="text-gray-400 text-sm leading-relaxed font-light max-w-xs">
            Bengaluru-based distributor, supplier, and wholesaler since 2012. Providing trusted healthcare and skincare products to professionals across India.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://www.instagram.com/shaatradingindia/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Instagram size={18} /></a>
            <a href="https://www.facebook.com/skinandherbs.in/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Facebook size={18} /></a>
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
                      <img loading="lazy" src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
                          <img loading="lazy" src={product.image} alt={`${product.name} by ${product.brand} - ${product.category} from Shaa Trading`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
                       <img loading="lazy" src="/image/ban2.jpg" alt="Clinical Lab" className="w-full h-full object-cover opacity-80" />
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
                                  <img loading="lazy" src={product.image} alt={`${product.name} by ${product.brand} - ${product.category} from Shaa Trading`} className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                                  
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
              <div className="aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden w-full relative">
                  <img loading="lazy" src={images[activeImg]} alt={product.name} className="w-full h-full object-cover" />
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
                                  <img loading="lazy" src={product.image} alt={`${product.name} by ${product.brand} - ${product.category} from Shaa Trading`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
      canonical = 'https://shaatrading.in/?page=shop';
      keywords = 'buy glutathione injections, Aqua Skin India, Glutax injections, Dr James injection, Glowtiqa whitening cream, skin whitening products online, clinic supplies India';
      break;

    case 'about':
      title = 'About Shaa Trading | Bengaluru-based Skin Whitening Product Supplier';
      description = 'Learn about Shaa Trading, a Bengaluru-based distributor of glutathione injectables, whitening creams and professional aesthetic supplies since 2012.';
      canonical = 'https://shaatrading.in/?page=about';
      keywords = 'about Shaa Trading, skin whitening supplier Bengaluru, glutathione wholesale India, aesthetic products distributor';
      break;

    case 'contact':
      title = 'Contact Shaa Trading | Wholesale & Clinic Supply Enquiries';
      description = 'Get in touch with Shaa Trading for wholesale price lists, bulk orders, reseller opportunities and clinic partnerships for skin whitening and injectable products.';
      canonical = 'https://shaatrading.in/?page=contact';
      keywords = 'contact Shaa Trading, glutathione wholesale enquiry, clinic supply contact, skin whitening distributor contact';
      break;

    case 'blog':
      title = 'Clinical Insights | Glutathione, PDRN & IV Therapy – Shaa Trading Journal';
      description = 'Read educational articles on glutathione science, PDRN, IV therapy protocols and safety guidance for clinics and practitioners.';
      canonical = 'https://shaatrading.in/?page=blog';
      keywords = 'glutathione science, PDRN information, IV therapy protocols, skin whitening education, Shaa Trading blog';
      break;

    case 'blog-post':
      if (selectedPost) {
        title = `${selectedPost.title} | Shaa Trading Clinical Journal`;
        description = selectedPost.excerpt || description;
        canonical = `https://shaatrading.in/?page=blog-post&id=${selectedPost.id}`;
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
        canonical = `https://shaatrading.in/?page=product&id=${selectedProduct.id}`;
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
      canonical = 'https://shaatrading.in/?page=terms';
      keywords = 'Shaa Trading terms and conditions, skin whitening product terms, clinic supply terms';
      robots = 'noindex,follow';
      break;

    case 'privacy':
      title = 'Privacy Policy | Shaa Trading';
      description = 'Understand how Shaa Trading handles, stores and protects your personal, clinic and order data.';
      canonical = 'https://shaatrading.in/?page=privacy';
      keywords = 'Shaa Trading privacy policy, data handling, data protection, clinic data privacy';
      robots = 'noindex,follow';
      break;

    case 'shipping':
      title = 'Shipping Policy | Shaa Trading';
      description = 'Learn about domestic shipping timelines, handling and packaging processes for Shaa Trading orders across India.';
      canonical = 'https://shaatrading.in/?page=shipping';
      keywords = 'Shaa Trading shipping policy, delivery time, order handling, India shipping whitening products';
      robots = 'noindex,follow';
      break;

    case 'return-policy':
      title = 'Return Policy | Shaa Trading';
      description = 'View our guidelines for damaged, incorrect or compromised products and return eligibility for customers and clinics.';
      canonical = 'https://shaatrading.in/?page=return-policy';
      keywords = 'Shaa Trading return policy, damaged product return, clinic returns, whitening injection returns';
      robots = 'noindex,follow';
      break;

    case 'refund-policy':
      title = 'Refund Policy | Shaa Trading';
      description = 'Read our refund conditions for cancelled orders, payment failures and exceptional disputes.';
      canonical = 'https://shaatrading.in/?page=refund-policy';
      keywords = 'Shaa Trading refund policy, payment refund, order cancellation refund';
      robots = 'noindex,follow';
      break;

    case 'success':
      title = 'Order Confirmed | Shaa Trading';
      description = 'Your order and payment have been received by Shaa Trading. Our team will confirm dispatch and shipping details shortly.';
      canonical = 'https://shaatrading.in/?page=success';
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
  
    const { title, description, jsonLd, keywords, canonical, robots } = getSeoConfig(currentPage, selectedProduct, selectedPost);
    return (
      <div className="font-sans text-gray-900 bg-[#fbfbfb] min-h-screen flex flex-col selection:bg-gray-800 selection:text-white">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          {keywords && <meta name="keywords" content={keywords} />}
          {robots && <meta name="robots" content={robots} />}
          <link rel="canonical" href={canonical} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content={currentPage === 'product' ? 'product' : 'website'} />
          <meta property="og:url" content={canonical} />
          <meta property="og:image" content="https://shaatrading.in/image/logo-t.jpg" />
          <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
          </script>
        </Helmet>
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