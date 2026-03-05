// const PRODUCTS = [
//   {
//     id: 1,
//     name: "Miracle White Purple 60000mg Glutathione Injection",
//     category: "Injection",
//     brand: "Miracle White",
//     price: 8800,
//     image: "/image/miracle-white-purple.jpg",
//     images: ["/image/miracle-white-purple-1.jpg", "/image/miracle-white-purple-2.jpg", "/image/miracle-white-purple-3.jpg", "/image/miracle-white-purple-4.jpg"],
//     description: "Purple series 60,000mg glutathione injection",
//     details: `
//     <strong>Miracle White Purple 60000mg Glutathione Injection</strong><br/><br/>
//     Experience the premium Purple series of Miracle White with 60,000mg glutathione potency. This special edition formulation provides enhanced whitening with the distinctive purple series technology for superior results.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 60,000 mg</li>
//       <li>Purple Series Technology</li>
//       <li>Enhanced Whitening Complex</li>
//       <li>Special Edition Formula</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Premium purple series</li>
//       <li>Enhanced whitening technology</li>
//       <li>Special edition formulation</li>
//     </ul>
//     <br/>
//     Experience premium purple series whitening.<br/>
//     <em class="text-xs text-gray-400">Note: Purple series special edition.</em>
//   `,
//     benefits: ["Purple Series", "60,000mg Strength", "Premium Edition", "Enhanced Whitening"],
//     sku: "MIRACLE-PURPLE-60K",
//     volume: "8 Sessions"
//   },
//   {
//     id: 2,
//     name: "Aqua Skin Diamond Ultra White F 30",
//     category: "Injection",
//     brand: "Aqua Skin/Veniscy",
//     price: 11400,
//     image: "/image/aqua-diamond-f30.jpg",
//     images: ["/image/aqua-diamond-f30-1.jpg", "/image/aqua-diamond-f30-2.jpg", "/image/aqua-diamond-f30-3.jpg", "/image/aqua-diamond-f30-4.jpg"],
//     description: "Diamond series whitening injection with advanced filtration",
//     details: `
//       <strong>Aqua Skin Diamond Ultra White F 30</strong><br/><br/>
//       Experience the premium Diamond series formulation featuring Ultra Filtration technology for maximum purity and effectiveness. The F30 represents 30th generation filtration for superior results.<br/><br/>
//       <strong>Key Active Components:</strong><br/>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Ultra-Filtered Glutathione - 30,000 mg</li>
//         <li>Vitamin C Complex - 5,000 mg</li>
//         <li>Collagen Peptides - 2,000 mg</li>
//         <li>Alpha Lipoic Acid - 500 mg</li>
//       </ul>
//       <br/>
//       <strong>Why it works:</strong>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Ultra-filtration ensures maximum purity</li>
//         <li>Enhanced cellular absorption</li>
//         <li>Comprehensive antioxidant protection</li>
//       </ul>
//       <br/>
//       Achieve diamond-like clarity in your complexion.<br/>
//       <em class="text-xs text-gray-400">Note: Professional administration required.</em>
//     `,
//     benefits: ["30th Gen Filtration", "Diamond Series", "Ultra Pure", "Enhanced Absorption"],
//     sku: "AQUA-DIAMOND-F30",
//     volume: "10 Sessions"
//   },
//   {
//     id: 3,
//     name: "Aqua Skin Fine Gold 70,000mg Glutathione Injection",
//     category: "Injection",
//     brand: "Aqua Skin",
//     price: 11600,
//     image: "/image/aqua-gold-70k.jpg",
//     images: ["/image/aqua-gold-70k-1.jpg", "/image/aqua-gold-70k-2.jpg", "/image/aqua-gold-70k-3.jpg", "/image/aqua-gold-70k-4.jpg"],
//     description: "Fine Gold series with 70,000mg glutathione potency",
//     details: `
//       <strong>Aqua Skin Fine Gold 70,000mg Glutathione Injection</strong><br/><br/>
//       Experience the luxurious Fine Gold series, featuring an impressive 70,000mg of pharmaceutical-grade glutathione combined with gold nanoparticles for enhanced delivery and radiant results.<br/><br/>
//       <strong>Key Active Components:</strong><br/>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Pharmaceutical Glutathione - 70,000 mg</li>
//         <li>Gold Nanoparticles - 2,000 mg</li>
//         <li>Vitamin E Complex - 3,000 mg</li>
//         <li>Coenzyme Q10 - 1,500 mg</li>
//       </ul>
//       <br/>
//       <strong>Why it works:</strong>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Gold nanoparticles enhance penetration</li>
//         <li>High-potency glutathione formulation</li>
//         <li>Provides luxurious radiance</li>
//       </ul>
//       <br/>
//       Experience golden-standard skin whitening.<br/>
//       <em class="text-xs text-gray-400">Note: Gold series premium formulation.</em>
//     `,
//     benefits: ["70,000mg Strength", "Gold Nanoparticles", "Luxury Formula", "Enhanced Radiance"],
//     sku: "AQUA-GOLD-70K",
//     volume: "8 Sessions"
//   },
//   {
//     id: 4,
//     name: "Aqua Skin Snail Complex Pro Whitening Glutathione Injection - New Arrival",
//     category: "Injection",
//     brand: "Aqua Skin",
//     price: 10400,
//     image: "/image/aqua-snail-pro.jpg",
//     images: ["/image/aqua-snail-pro-1.jpg", "/image/aqua-snail-pro-2.jpg", "/image/aqua-snail-pro-3.jpg", "/image/aqua-snail-pro-4.jpg"],
//     description: "Snail mucin complex with advanced whitening formula",
//     details: `
//       <strong>Aqua Skin Snail Complex Pro Whitening Injection</strong><br/><br/>
//       Experience the revolutionary combination of snail mucin complex with high-potency glutathione. This innovative formula not only whitens but also repairs and rejuvenates skin at the cellular level.<br/><br/>
//       <strong>Key Active Components:</strong><br/>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Glutathione Complex - 50,000 mg</li>
//         <li>Snail Mucin Extract - 10,000 mg</li>
//         <li>Allantoin - 2,000 mg</li>
//         <li>Glycolic Acid - 1,500 mg</li>
//       </ul>
//       <br/>
//       <strong>Why it works:</strong>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Snail mucin promotes skin regeneration</li>
//         <li>Combines whitening with repair</li>
//         <li>Improves skin texture and elasticity</li>
//       </ul>
//       <br/>
//       Achieve both whitening and comprehensive skin health.<br/>
//       <em class="text-xs text-gray-400">Note: New arrival with advanced formula.</em>
//     `,
//     benefits: ["Snail Mucin Complex", "Skin Regeneration", "Texture Improvement", "Dual Action"],
//     sku: "AQUA-SNAIL-PRO",
//     volume: "10 Sessions"
//   },
//   {
//     id: 5,
//     name: "Aqua Skin Veniscy 46 Dualna Pico-cell absorption Extremely Ultimate",
//     category: "Injection",
//     brand: "Aqua Skin",
//     price: 9500,
//     image: "/image/veniscy-46.jpg",
//     images: ["/image/veniscy-46-1.jpg", "/image/veniscy-46-2.jpg", "/image/veniscy-46-3.jpg", "/image/veniscy-46-4.jpg"],
//     description: "Pico-cell technology with dual absorption system",
//     details: `
//       <strong>Aqua Skin Veniscy 46 Dualna Pico-cell</strong><br/><br/>
//       Experience the cutting-edge Pico-cell absorption technology that breaks down active ingredients to picometer size for unprecedented cellular penetration. The Dualna system ensures dual-pathway delivery for maximum effectiveness.<br/><br/>
//       <strong>Key Active Components:</strong><br/>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Pico-cell Glutathione - 46,000 mg</li>
//         <li>Dual Absorption Complex</li>
//         <li>Cell Penetration Enhancers</li>
//         <li>Antioxidant Matrix</li>
//       </ul>
//       <br/>
//       <strong>Why it works:</strong>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Picometer-sized particles for deep penetration</li>
//         <li>Dual delivery system enhances bioavailability</li>
//         <li>Rapid onset of whitening action</li>
//       </ul>
//       <br/>
//       Experience ultimate absorption and results.<br/>
//       <em class="text-xs text-gray-400">Note: Advanced pico-cell technology.</em>
//     `,
//     benefits: ["Pico-cell Tech", "Dual Absorption", "Deep Penetration", "Rapid Action"],
//     sku: "VENISCY-46-PICO",
//     volume: "10 Sessions"
//   },
//   {
//     id: 6,
//     name: "Aqua Skin Veniscy 8 - DualNa Octa Strength Glutathione 3,500,000mg",
//     category: "Injection",
//     brand: "Aqua Skin",
//     price: 10800,
//     image: "/image/veniscy-8.jpg",
//     images: ["/image/veniscy-8-1.jpg", "/image/veniscy-8-2.jpg", "/image/veniscy-8-3.jpg", "/image/veniscy-8-4.jpg"],
//     description: "Octa strength with 3.5 million mg glutathione",
//     details: `
//       <strong>Aqua Skin Veniscy 8 - DualNa Octa Strength</strong><br/><br/>
//       Experience the monumental power of 3,500,000mg glutathione in the Veniscy 8 formulation. The Octa Strength represents eight-fold enhancement in potency and effectiveness for dramatic whitening results.<br/><br/>
//       <strong>Key Active Components:</strong><br/>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Glutathione - 3,500,000 mg</li>
//         <li>DualNA Complex</li>
//         <li>Octa-Boost Technology</li>
//         <li>Advanced Carriers</li>
//       </ul>
//       <br/>
//       <strong>Why it works:</strong>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Extremely high potency formulation</li>
//         <li>Eight-fold enhancement technology</li>
//         <li>Rapid and dramatic results</li>
//       </ul>
//       <br/>
//       Experience octa-level whitening power.<br/>
//       <em class="text-xs text-gray-400">Note: High concentration - professional use only.</em>
//     `,
//     benefits: ["3.5 Million mg", "Octa Strength", "DualNA Tech", "Dramatic Results"],
//     sku: "VENISCY-8-OCTA",
//     volume: "12 Sessions"
//   },
//   {
//     id: 7,
//     name: "Aqua Skin Veniscy 86 Glutathione Whitening Injection",
//     category: "Injection",
//     brand: "Aqua Skin",
//     price: 8800,
//     image: "/image/veniscy-86.jpg",
//     images: ["/image/veniscy-86-1.jpg", "/image/veniscy-86-2.jpg", "/image/veniscy-86-3.jpg", "/image/veniscy-86-4.jpg"],
//     description: "Advanced whitening injection with comprehensive formula",
//     details: `
//       <strong>Aqua Skin Veniscy 86 Glutathione Whitening Injection</strong><br/><br/>
//       Experience the balanced and effective Veniscy 86 formulation, designed for consistent and reliable whitening results. This comprehensive formula works systematically to achieve even skin tone.<br/><br/>
//       <strong>Key Active Components:</strong><br/>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Glutathione Complex - 86,000 mg</li>
//         <li>Vitamin C Matrix</li>
//         <li>Skin Brightening Agents</li>
//         <li>Antioxidant Support</li>
//       </ul>
//       <br/>
//       <strong>Why it works:</strong>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Balanced formulation for consistent results</li>
//         <li>Systematic approach to skin whitening</li>
//         <li>Comprehensive antioxidant protection</li>
//       </ul>
//       <br/>
//       Achieve reliable and consistent whitening.<br/>
//       <em class="text-xs text-gray-400">Note: Well-balanced formula for all skin types.</em>
//     `,
//     benefits: ["Balanced Formula", "Consistent Results", "Systematic Approach", "Even Tone"],
//     sku: "VENISCY-86-STD",
//     volume: "10 Sessions"
//   },
//   {
//     id: 8,
//     name: "Aqua Veniscy 22 Dualna Pico Cell Ultra Whitening",
//     category: "Injection",
//     brand: "Aqua Skin",
//     price: 8800,
//     image: "/image/veniscy-22.jpg",
//     images: ["/image/veniscy-22-1.jpg", "/image/veniscy-22-2.jpg", "/image/veniscy-22-3.jpg", "/image/veniscy-22-4.jpg"],
//     description: "Pico cell technology with ultra whitening action",
//     details: `
//       <strong>Aqua Veniscy 22 Dualna Pico Cell Ultra Whitening</strong><br/><br/>
//       Experience the precision of Pico Cell technology in the Veniscy 22 formulation. This ultra whitening solution targets pigmentation at the cellular level for comprehensive lightening action.<br/><br/>
//       <strong>Key Active Components:</strong><br/>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Pico Cell Glutathione - 22,000 mg</li>
//         <li>Ultra Whitening Complex</li>
//         <li>Cellular Targeting Agents</li>
//         <li>Penetration Enhancers</li>
//       </ul>
//       <br/>
//       <strong>Why it works:</strong>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Precision cellular targeting</li>
//         <li>Ultra whitening concentration</li>
//         <li>Enhanced cellular uptake</li>
//       </ul>
//       <br/>
//       Experience ultra-level whitening precision.<br/>
//       <em class="text-xs text-gray-400">Note: Cellular-level targeting technology.</em>
//     `,
//     benefits: ["Pico Cell Tech", "Ultra Whitening", "Cellular Targeting", "Precision Action"],
//     sku: "VENISCY-22-ULTRA",
//     volume: "10 Sessions"
//   },
//   {
//     id: 9,
//     name: "Aqua Skin Brilliant Diamond Max Glutathione 80,000mg",
//     category: "Injection",
//     brand: "Aqua Skin",
//     price: 11000,
//     image: "/image/aqua-diamond-max.jpg",
//     images: ["/image/aqua-diamond-max-1.jpg", "/image/aqua-diamond-max-2.jpg", "/image/aqua-diamond-max-3.jpg", "/image/aqua-diamond-max-4.jpg"],
//     description: "Brilliant Diamond series with 80,000mg glutathione",
//     details: `
//       <strong>Aqua skin Brilliant Diamond Max Glutathione 80,000mg</strong><br/><br/>
//       Experience the premium Brilliant Diamond Max series, featuring an impressive 80,000mg of high-purity glutathione. This formulation represents the pinnacle of the diamond series for exceptional whitening results.<br/><br/>
//       <strong>Key Active Components:</strong><br/>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>High-Purity Glutathione - 80,000 mg</li>
//         <li>Diamond Particle Complex</li>
//         <li>Premium Antioxidants</li>
//         <li>Skin Refining Agents</li>
//       </ul>
//       <br/>
//       <strong>Why it works:</strong>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Maximum potency diamond series</li>
//         <li>Exceptional purity standards</li>
//         <li>Comprehensive skin refinement</li>
//       </ul>
//       <br/>
//       Experience brilliant diamond-level results.<br/>
//       <em class="text-xs text-gray-400">Note: Premium diamond series formulation.</em>
//     `,
//     benefits: ["80,000mg Strength", "Diamond Series", "Maximum Potency", "Premium Quality"],
//     sku: "AQUA-DIAMOND-MAX",
//     volume: "10 Sessions"
//   },
//   {
//     id: 10,
//     name: "Aqua Skin Pure Gold II 30th Whitening Glutathione 30,000mg",
//     category: "Injection",
//     brand: "Aqua Skin",
//     price: 11600,
//     image: "/image/aqua-pure-gold.jpg",
//     images: ["/image/aqua-pure-gold-1.jpg", "/image/aqua-pure-gold-2.jpg", "/image/aqua-pure-gold-3.jpg", "/image/aqua-pure-gold-4.jpg"],
//     description: "30th generation Pure Gold series whitening",
//     details: `
//       <strong>Aqua skin Pure Gold II 30th Whitening Glutathione</strong><br/><br/>
//       Experience the 30th generation of Pure Gold series, representing three decades of formulation refinement. This advanced whitening solution combines tradition with cutting-edge technology.<br/><br/>
//       <strong>Key Active Components:</strong><br/>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Glutathione - 30,000 mg</li>
//         <li>Gold Nanoparticles</li>
//         <li>30th Gen Technology</li>
//         <li>Advanced Delivery System</li>
//       </ul>
//       <br/>
//       <strong>Why it works:</strong>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Three decades of formulation expertise</li>
//         <li>Gold-enhanced delivery system</li>
//         <li>Proven effective technology</li>
//       </ul>
//       <br/>
//       Experience generations of whitening expertise.<br/>
//       <em class="text-xs text-gray-400">Note: 30th generation refined formula.</em>
//     `,
//     benefits: ["30th Generation", "Gold Series", "Proven Formula", "Advanced Delivery"],
//     sku: "AQUA-GOLD-30TH",
//     volume: "10 Sessions"
//   },
//   {
//     id: 11,
//     name: "Aqua Skin Veniscy 12 - Pro Q10 Glutathione 12,000,000mg",
//     category: "Injection",
//     brand: "Aqua Skin",
//     price: 11800,
//     image: "/image/veniscy-12-pro.jpg",
//     images: ["/image/veniscy-12-pro-1.jpg", "/image/veniscy-12-pro-2.jpg", "/image/veniscy-12-pro-3.jpg", "/image/veniscy-12-pro-4.jpg"],
//     description: "Pro Q10 formula with 12 million mg glutathione",
//     details: `
//     <strong>Aqua skin Veniscy 12 - Pro Q10 Glutathione</strong><br/><br/>
//     Experience the powerful combination of high-potency glutathione with Coenzyme Q10 in the Veniscy 12 Pro formulation. This advanced formula not only whitens but also provides essential cellular energy for overall skin health.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 12,000,000 mg</li>
//       <li>Coenzyme Q10 - 3,000 mg</li>
//       <li>Pro Complex Technology</li>
//       <li>Advanced Antioxidants</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Q10 enhances cellular energy production</li>
//       <li>High-potency glutathione for rapid results</li>
//       <li>Comprehensive skin health approach</li>
//     </ul>
//     <br/>
//     Experience pro-level whitening with cellular energy support.<br/>
//     <em class="text-xs text-gray-400">Note: Professional Q10 enhanced formula.</em>
//   `,
//     benefits: ["12 Million mg", "Q10 Enhanced", "Cellular Energy", "Pro Formula"],
//     sku: "VENISCY-12-PRO",
//     volume: "12 Sessions"
//   },
//   {
//     id: 12,
//     name: "Aqua Skin Veniscy 30 - DualNa Pico Cell Absorption Glutathione Injection",
//     category: "Injection",
//     brand: "Aqua Skin",
//     price: 13000,
//     image: "/image/veniscy-30-dualna.jpg",
//     images: ["/image/veniscy-30-dualna-1.jpg", "/image/veniscy-30-dualna-2.jpg", "/image/veniscy-30-dualna-3.jpg", "/image/veniscy-30-dualna-4.jpg"],
//     description: "DualNa Pico Cell technology for maximum absorption",
//     details: `
//     <strong>Aqua skin Veniscy 30 - DualNa Pico Cell</strong><br/><br/>
//     Experience the advanced DualNa Pico Cell absorption technology in the Veniscy 30 formulation. This innovative system uses dual sodium pathways to enhance glutathione delivery at the cellular level for unprecedented results.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione Complex - 30,000 mg</li>
//       <li>DualNa Absorption Technology</li>
//       <li>Pico Cell Delivery System</li>
//       <li>Sodium Pathway Enhancers</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Dual sodium pathways for enhanced delivery</li>
//       <li>Pico cell size for maximum penetration</li>
//       <li>Optimized cellular uptake</li>
//     </ul>
//     <br/>
//     Experience maximum absorption with dual pathway technology.<br/>
//     <em class="text-xs text-gray-400">Note: Advanced DualNa absorption system.</em>
//   `,
//     benefits: ["DualNa Tech", "Pico Cell", "Max Absorption", "Dual Pathway"],
//     sku: "VENISCY-30-DUALNA",
//     volume: "10 Sessions"
//   },
//   {
//     id: 13,
//     name: "Biocell Collagen Platinum Forte + Vitamin C 90,000mg, Collagen 30,000mg",
//     category: "Injection",
//     brand: "Biocell",
//     price: 3900,
//     image: "/image/biocell-platinum.jpg",
//     images: ["/image/biocell-platinum-1.jpg", "/image/biocell-platinum-2.jpg", "/image/biocell-platinum-3.jpg", "/image/biocell-platinum-4.jpg"],
//     description: "Platinum collagen forte with vitamin C boost",
//     details: `
//     <strong>Biocell Collagen Platinum Forte + Vitamin C</strong><br/><br/>
//     Experience the powerful combination of high-dose collagen and vitamin C in the Platinum Forte formulation. This comprehensive treatment not only whitens but also significantly improves skin elasticity and firmness.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Collagen Peptides - 30,000 mg</li>
//       <li>Vitamin C - 90,000 mg</li>
//       <li>Platinum Complex</li>
//       <li>Forte Enhancement Technology</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>High-dose collagen for skin structure</li>
//       <li>Vitamin C enhances collagen synthesis</li>
//       <li>Platinum grade purity and effectiveness</li>
//     </ul>
//     <br/>
//     Achieve both whitening and superior skin firmness.<br/>
//     <em class="text-xs text-gray-400">Note: Collagen and vitamin C synergy formula.</em>
//   `,
//     benefits: ["90K Vitamin C", "30K Collagen", "Platinum Grade", "Skin Firming"],
//     sku: "BIOCELL-PLATINUM",
//     volume: "8 Sessions"
//   },
//   {
//     id: 14,
//     name: "Cindella 1200mg Glutathione Injections With Square Seal",
//     category: "Injection",
//     brand: "Cindella",
//     price: 17500,
//     image: "/image/cindella-1200.jpg",
//     images: ["/image/cindella-1200-1.jpg", "/image/cindella-1200-2.jpg", "/image/cindella-1200-3.jpg", "/image/cindella-1200-4.jpg"],
//     description: "Authentic Cindella with square seal certification",
//     details: `
//     <strong>Cindella 1200mg Glutathione Injections</strong><br/><br/>
//     Experience the authentic Cindella formulation with official square seal certification. This premium glutathione injection is known for its reliability and consistent results in skin whitening and brightening.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Pharmaceutical Glutathione - 1,200 mg</li>
//       <li>Certified Pure Ingredients</li>
//       <li>Quality Seal Verification</li>
//       <li>Premium Carriers</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Official certification ensures quality</li>
//       <li>Proven reliable formulation</li>
//       <li>Consistent whitening results</li>
//     </ul>
//     <br/>
//     Trust in certified quality and proven results.<br/>
//     <em class="text-xs text-gray-400">Note: Authentic with square seal certification.</em>
//   `,
//     benefits: ["Square Seal", "Certified Quality", "Proven Formula", "Reliable Results"],
//     sku: "CINDELLA-1200-SQ",
//     volume: "10 Vials"
//   },
//   {
//     id: 15,
//     name: "Collagen Injection By Vesco Pharma Collagen C 1000",
//     category: "Injection",
//     brand: "Vesco Pharma",
//     price: 2500,
//     image: "/image/vesco-collagen.jpg",
//     images: ["/image/vesco-collagen-1.jpg", "/image/vesco-collagen-2.jpg", "/image/vesco-collagen-3.jpg", "/image/vesco-collagen-4.jpg"],
//     description: "Collagen C 1000 by Vesco Pharma",
//     details: `
//     <strong>Collagen Injection By Vesco Pharma Collagen C 1000</strong><br/><br/>
//     Experience the trusted Vesco Pharma Collagen C 1000 formulation. This reliable collagen injection is designed to improve skin elasticity, hydration, and overall skin health while providing mild brightening effects.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Collagen Complex - 1,000 mg</li>
//       <li>Vitamin C - 500 mg</li>
//       <li>Hydration Matrix</li>
//       <li>Skin Nutrients</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Improves skin elasticity and firmness</li>
//       <li>Enhances skin hydration</li>
//       <li>Supports overall skin health</li>
//     </ul>
//     <br/>
//     Achieve healthier, more elastic skin.<br/>
//     <em class="text-xs text-gray-400">Note: Focused on skin health and elasticity.</em>
//   `,
//     benefits: ["Collagen Boost", "Skin Elasticity", "Vesco Pharma", "Hydration Support"],
//     sku: "VESCO-COLLAGEN-C",
//     volume: "5 Sessions"
//   },
//   {
//     id: 16,
//     name: "Core Switzerland SLC24A5 Inhibitors Glutathione Injection",
//     category: "Injection",
//     brand: "Core Switzerland",
//     price: 10800,
//     image: "/image/core-swiss-slc24a5.jpg",
//     images: ["/image/core-swiss-slc24a5-1.jpg", "/image/core-swiss-slc24a5-2.jpg", "/image/core-swiss-slc24a5-3.jpg", "/image/core-swiss-slc24a5-4.jpg"],
//     description: "Swiss SLC24A5 gene inhibitor technology",
//     details: `
//     <strong>Core Switzerland SLC24A5 Inhibitors Glutathione Injection</strong><br/><br/>
//     Experience the cutting-edge Swiss technology targeting the SLC24A5 gene responsible for skin pigmentation. This advanced formulation uses gene inhibition technology for precise and effective skin lightening.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione Complex</li>
//       <li>SLC24A5 Gene Inhibitors</li>
//       <li>Swiss Precision Technology</li>
//       <li>Gene Expression Modulators</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Targets pigmentation at genetic level</li>
//       <li>Swiss precision formulation</li>
//       <li>Advanced gene inhibition technology</li>
//     </ul>
//     <br/>
//     Experience genetic-level skin lightening precision.<br/>
//     <em class="text-xs text-gray-400">Note: Advanced gene targeting technology.</em>
//   `,
//     benefits: ["Gene Inhibition", "Swiss Technology", "SLC24A5 Target", "Precision Lightening"],
//     sku: "CORE-SWISS-GENE",
//     volume: "10 Sessions"
//   },
//   {
//     id: 17,
//     name: "Dr James Glutathione Skin Lightening Cream",
//     category: "Cream",
//     brand: "Dr James",
//     price: 2000,
//     image: "/image/dr-james-cream.jpg",
//     images: ["/image/dr-james-cream-1.jpg", "/image/dr-james-cream-2.jpg", "/image/dr-james-cream-3.jpg", "/image/dr-james-cream-4.jpg"],
//     description: "Dr James professional skin lightening cream",
//     details: `
//     <strong>Dr James Glutathione Skin Lightening Cream</strong><br/><br/>
//     Experience the professional-grade skin lightening cream from Dr James. This topical formulation delivers glutathione and other lightening agents directly to the skin for gradual and consistent lightening results.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Topical Glutathione</li>
//       <li>Skin Lightening Complex</li>
//       <li>Moisturizing Base</li>
//       <li>Penetration Enhancers</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Direct topical application</li>
//       <li>Gradual and consistent lightening</li>
//       <li>Professional formulation</li>
//     </ul>
//     <br/>
//     Achieve gradual lightening with daily use.<br/>
//     <em class="text-xs text-gray-400">Note: For topical use only.</em>
//   `,
//     benefits: ["Topical Application", "Gradual Lightening", "Dr James Formula", "Daily Use"],
//     sku: "DRJAMES-CREAM-50",
//     volume: "50g Tube"
//   },
//   {
//     id: 18,
//     name: "Dr James Glutathione Skin Whitening Injection 1500mg - 05 Sessions",
//     category: "Injection",
//     brand: "Dr James",
//     price: 6800,
//     image: "/image/dr-james-5sessions.jpg",
//     images: ["/image/dr-james-5sessions-1.jpg", "/image/dr-james-5sessions-2.jpg", "/image/dr-james-5sessions-3.jpg", "/image/dr-james-5sessions-4.jpg"],
//     description: "Dr James 1500mg injection - 5 session package",
//     details: `
//     <strong>Dr James Glutathione Skin Whitening Injection 1500mg - 05 Sessions</strong><br/><br/>
//     Experience the reliable Dr James glutathione formulation in a convenient 5-session package. This balanced formulation provides effective whitening with the trusted Dr James quality assurance.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 1,500 mg per session</li>
//       <li>Supporting Antioxidants</li>
//       <li>Quality Tested Ingredients</li>
//       <li>Balanced Formula</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Trusted Dr James formulation</li>
//       <li>Convenient session package</li>
//       <li>Balanced and effective</li>
//     </ul>
//     <br/>
//     Trust in professional quality and results.<br/>
//     <em class="text-xs text-gray-400">Note: 5-session complete package.</em>
//   `,
//     benefits: ["5 Sessions", "1500mg Strength", "Dr James Quality", "Complete Package"],
//     sku: "DRJAMES-1500-5S",
//     volume: "5 Sessions"
//   },
//   {
//     id: 19,
//     name: "Dr James Glutathione Skin Whitening Injections 1500mg - 10 Sessions",
//     category: "Injection",
//     brand: "Dr James",
//     price: 12000,
//     image: "/image/dr-james-10sessions.jpg",
//     images: ["/image/dr-james-10sessions-1.jpg", "/image/dr-james-10sessions-2.jpg", "/image/dr-james-10sessions-3.jpg", "/image/dr-james-10sessions-4.jpg"],
//     description: "Dr James 1500mg injection - 10 session package",
//     details: `
//     <strong>Dr James Glutathione Skin Whitening Injections 1500mg - 10 Sessions</strong><br/><br/>
//     Experience the complete whitening journey with the Dr James 10-session package. This comprehensive treatment plan ensures consistent and cumulative results for optimal skin lightening and brightening.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 1,500 mg per session</li>
//       <li>Cumulative Action Formula</li>
//       <li>Professional Grade</li>
//       <li>Complete Treatment Cycle</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Complete treatment cycle</li>
//       <li>Cumulative whitening results</li>
//       <li>Professional administration</li>
//     </ul>
//     <br/>
//     Commit to complete whitening transformation.<br/>
//     <em class="text-xs text-gray-400">Note: 10-session complete treatment cycle.</em>
//   `,
//     benefits: ["10 Sessions", "Complete Cycle", "Cumulative Results", "Professional Grade"],
//     sku: "DRJAMES-1500-10S",
//     volume: "10 Sessions"
//   },
//   {
//     id: 20,
//     name: "Glowtiqa Advance Whitening Cream 30g - Made in France",
//     category: "Cream",
//     brand: "Glowtiqa",
//     price: 2000,
//     image: "/image/glowtiqa-advance.jpg",
//     images: ["/image/glowtiqa-advance-1.jpg", "/image/glowtiqa-advance-2.jpg", "/image/glowtiqa-advance-3.jpg", "/image/glowtiqa-advance-4.jpg"],
//     description: "French advanced whitening cream 30g",
//     details: `
//     <strong>Glowtiqa Advance Whitening Cream 30g - Made in France</strong><br/><br/>
//     Experience the luxury of French skincare with Glowtiqa Advance Whitening Cream. Formulated in France with advanced European technology, this cream delivers sophisticated whitening with elegant texture and superior results.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>French Whitening Complex</li>
//       <li>Advanced Delivery System</li>
//       <li>Luxury Skincare Base</li>
//       <li>European Technology</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>French formulation expertise</li>
//       <li>Advanced European technology</li>
//       <li>Luxury skincare experience</li>
//     </ul>
//     <br/>
//     Experience French luxury in skin whitening.<br/>
//     <em class="text-xs text-gray-400">Note: Made in France with European standards.</em>
//   `,
//     benefits: ["Made in France", "Advanced Formula", "Luxury Cream", "European Tech"],
//     sku: "GLOWTIQA-ADV-30",
//     volume: "30g Jar"
//   },
//   {
//     id: 21,
//     name: "Glowtiqa Skin Whitening Soap",
//     category: "Soap",
//     brand: "Glowtiqa",
//     price: 600,
//     image: "/image/glowtiqa-soap.jpg",
//     images: ["/image/glowtiqa-soap-1.jpg", "/image/glowtiqa-soap-2.jpg", "/image/glowtiqa-soap-3.jpg", "/image/glowtiqa-soap-4.jpg"],
//     description: "Daily whitening soap for gradual lightening",
//     details: `
//     <strong>Glowtiqa Skin Whitening Soap</strong><br/><br/>
//     Experience daily whitening care with Glowtiqa Skin Whitening Soap. This gentle yet effective soap incorporates whitening agents into your daily cleansing routine for gradual and consistent skin lightening over time.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Whitening Complex</li>
//       <li>Gentle Cleansing Base</li>
//       <li>Skin Brightening Agents</li>
//       <li>Moisturizing Elements</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Daily gradual lightening</li>
//       <li>Gentle on skin</li>
//       <li>Integrates with daily routine</li>
//     </ul>
//     <br/>
//     Make whitening part of your daily routine.<br/>
//     <em class="text-xs text-gray-400">Note: For daily use as part of whitening regimen.</em>
//   `,
//     benefits: ["Daily Use", "Gradual Lightening", "Gentle Formula", "Routine Integration"],
//     sku: "GLOWTIQA-SOAP",
//     volume: "100g Bar"
//   },
//   {
//     id: 22,
//     name: "Gluta C Intense Whitening Face and Body Soap",
//     category: "Soap",
//     brand: "Gluta C",
//     price: 750,
//     image: "/image/gluta-c-soap.jpg",
//     images: ["/image/gluta-c-soap-1.jpg", "/image/gluta-c-soap-2.jpg", "/image/gluta-c-soap-3.jpg", "/image/gluta-c-soap-4.jpg"],
//     description: "Intense whitening soap for face and body",
//     details: `
//     <strong>Gluta C Intense Whitening Face and Body Soap</strong><br/><br/>
//     Experience intense whitening for both face and body with Gluta C specialized soap. This powerful formulation is designed to address pigmentation on all areas of the skin while maintaining skin health and moisture balance.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione Complex</li>
//       <li>Vitamin C Derivative</li>
//       <li>Intense Whitening Agents</li>
//       <li>Balanced pH Formula</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Addresses face and body pigmentation</li>
//       <li>Intense whitening action</li>
//       <li>Maintains skin health</li>
//     </ul>
//     <br/>
//     Achieve even tone from face to body.<br/>
//     <em class="text-xs text-gray-400">Note: Suitable for both face and body use.</em>
//   `,
//     benefits: ["Face & Body", "Intense Whitening", "Vitamin C", "Even Tone"],
//     sku: "GLUTAC-SOAP-FB",
//     volume: "120g Bar"
//   },
//   {
//     id: 23,
//     name: "Glutathione Injection By Vesco Pharma Gluta C 1000 Liquid Glutathione Formula",
//     category: "Injection",
//     brand: "Vesco Pharma",
//     price: 3900,
//     image: "/image/vesco-glutac.jpg",
//     images: ["/image/vesco-glutac-1.jpg", "/image/vesco-glutac-2.jpg", "/image/vesco-glutac-3.jpg", "/image/vesco-glutac-4.jpg"],
//     description: "Vesco Pharma Gluta C 1000 liquid formula",
//     details: `
//     <strong>Glutathione Injection By Vesco Pharma Gluta C 1000</strong><br/><br/>
//     Experience the trusted Vesco Pharma Gluta C 1000 liquid glutathione formulation. This ready-to-use liquid formula combines glutathione with vitamin C for enhanced effectiveness and convenient administration.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Liquid Glutathione - 1,000 mg</li>
//       <li>Vitamin C Complex</li>
//       <li>Ready-to-Use Formula</li>
//       <li>Enhanced Bioavailability</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Convenient liquid formulation</li>
//       <li>Glutathione and vitamin C synergy</li>
//       <li>Enhanced absorption</li>
//     </ul>
//     <br/>
//     Experience convenient and effective whitening.<br/>
//     <em class="text-xs text-gray-400">Note: Liquid formula for easy administration.</em>
//   `,
//     benefits: ["Liquid Formula", "Gluta C Complex", "Ready-to-Use", "Vesco Pharma"],
//     sku: "VESCO-GLUTAC-1000",
//     volume: "5 Sessions"
//   },
//   {
//     id: 24,
//     name: "Glutax 10000000GX DualNa Premium Recombined Cell - New Arrival",
//     category: "Injection",
//     brand: "Glutax",
//     price: 11500,
//     image: "/image/glutax-10mgx-dualna.jpg",
//     images: ["/image/glutax-10mgx-dualna-1.jpg", "/image/glutax-10mgx-dualna-2.jpg", "/image/glutax-10mgx-dualna-3.jpg", "/image/glutax-10mgx-dualna-4.jpg"],
//     description: "10 million GX DualNa premium recombined cell",
//     details: `
//     <strong>Glutax 10000000GX DualNa Premium Recombined Cell</strong><br/><br/>
//     Experience the premium Glutax 10 million GX formulation with advanced DualNa technology and recombined cell science. This new arrival represents the cutting edge of glutathione whitening technology for exceptional results.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 10,000,000 GX</li>
//       <li>DualNa Premium Technology</li>
//       <li>Recombined Cell Complex</li>
//       <li>Advanced Delivery System</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>High-potency 10 million GX</li>
//       <li>Premium DualNa technology</li>
//       <li>Recombined cell enhancement</li>
//     </ul>
//     <br/>
//     Experience premium whitening technology.<br/>
//     <em class="text-xs text-gray-400">Note: New arrival with premium features.</em>
//   `,
//     benefits: ["10 Million GX", "DualNa Premium", "Recombined Cell", "New Arrival"],
//     sku: "GLUTAX-10MGX-PRM",
//     volume: "10 Sessions"
//   },
//   {
//     id: 25,
//     name: "Glutax 20000000 GN+ Pico-QuadNA ReCombined White Glutathione injection",
//     category: "Injection",
//     brand: "Glutax",
//     price: 9500,
//     image: "/image/glutax-20mgn-pico.jpg",
//     images: ["/image/glutax-20mgn-pico-1.jpg", "/image/glutax-20mgn-pico-2.jpg", "/image/glutax-20mgn-pico-3.jpg", "/image/glutax-20mgn-pico-4.jpg"],
//     description: "20 million GN+ Pico-QuadNA recombined white",
//     details: `
//     <strong>Glutax 20000000GN+ Pico-QuadNA ReCombined White</strong><br/><br/>
//     Experience the advanced Glutax 20 million GN+ formulation featuring Pico-QuadNA technology for unprecedented cellular delivery. This recombined white formula represents the pinnacle of whitening science.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 20,000,000 GN+</li>
//       <li>Pico-QuadNA Technology</li>
//       <li>ReCombined White Complex</li>
//       <li>Quadruple Absorption System</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Pico-sized particles for deep penetration</li>
//       <li>Quadruple NA absorption pathways</li>
//       <li>High-potency 20 million formulation</li>
//     </ul>
//     <br/>
//     Experience quadruple absorption technology.<br/>
//     <em class="text-xs text-gray-400">Note: Advanced Pico-QuadNA delivery system.</em>
//   `,
//     benefits: ["20 Million GN+", "Pico-QuadNA", "Quadruple Absorption", "ReCombined White"],
//     sku: "GLUTAX-20MGN-PICO",
//     volume: "10 Sessions"
//   },
//   {
//     id: 26,
//     name: "Glutax 2000000GX DualNA Premium Recombined 2,000,000G Glutathione Injections",
//     category: "Injection",
//     brand: "Glutax",
//     price: 10600,
//     image: "/image/glutax-2mgx-dualna.jpg",
//     images: ["/image/glutax-2mgx-dualna-1.jpg", "/image/glutax-2mgx-dualna-2.jpg", "/image/glutax-2mgx-dualna-3.jpg", "/image/glutax-2mgx-dualna-4.jpg"],
//     description: "2 million GX DualNA premium recombined",
//     details: `
//     <strong>Glutax 2000000GX DualNA Premium Recombined</strong><br/><br/>
//     Experience the balanced power of Glutax 2 million GX with DualNA premium technology. This recombined formulation provides effective whitening with the reliability of proven Glutax technology and premium enhancement.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 2,000,000 GX</li>
//       <li>DualNA Premium Complex</li>
//       <li>Recombined Technology</li>
//       <li>Premium Carriers</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Balanced 2 million potency</li>
//       <li>Premium DualNA technology</li>
//       <li>Proven reliable formulation</li>
//     </ul>
//     <br/>
//     Experience balanced and reliable whitening.<br/>
//     <em class="text-xs text-gray-400">Note: Premium balanced formulation.</em>
//   `,
//     benefits: ["2 Million GX", "DualNA Premium", "Balanced Formula", "Proven Reliability"],
//     sku: "GLUTAX-2MGX-PRM",
//     volume: "10 Sessions"
//   },
//   {
//     id: 27,
//     name: "Glutax 20000gr Ultra Sirna Voluntary White 20,000G Glutathione",
//     category: "Injection",
//     brand: "Glutax",
//     price: 10500,
//     image: "/image/glutax-20k-sirna.jpg",
//     images: ["/image/glutax-20k-sirna-1.jpg", "/image/glutax-20k-sirna-2.jpg", "/image/glutax-20k-sirna-3.jpg", "/image/glutax-20k-sirna-4.jpg"],
//     description: "20,000G Ultra Sirna voluntary white technology",
//     details: `
//     <strong>Glutax 20000gr Ultra Sirna Voluntary White</strong><br/><br/>
//     Experience the innovative Ultra Sirna technology in the Glutax 20,000G formulation. This voluntary white system uses advanced RNA interference technology to encourage natural skin lightening at the cellular level.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 20,000 G</li>
//       <li>Ultra Sirna Technology</li>
//       <li>Voluntary White Complex</li>
//       <li>RNA Interference System</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>RNA interference technology</li>
//       <li>Encourages natural lightening</li>
//       <li>Advanced cellular communication</li>
//     </ul>
//     <br/>
//     Experience next-generation RNA technology.<br/>
//     <em class="text-xs text-gray-400">Note: Advanced RNA interference technology.</em>
//   `,
//     benefits: ["Ultra Sirna Tech", "RNA Interference", "Voluntary White", "Cellular Communication"],
//     sku: "GLUTAX-20K-SIRNA",
//     volume: "10 Sessions"
//   },
//   {
//     id: 28,
//     name: "Glutax 2000gs Advanced Recombined White 2000G Glutathione Injections",
//     category: "Injection",
//     brand: "Glutax",
//     price: 10000,
//     image: "/image/glutax-2000gs-adv.jpg",
//     images: ["/image/glutax-2000gs-adv-1.jpg", "/image/glutax-2000gs-adv-2.jpg", "/image/glutax-2000gs-adv-3.jpg", "/image/glutax-2000gs-adv-4.jpg"],
//     description: "Advanced recombined white 2000G glutathione",
//     details: `
//     <strong>Glutax 2000gs Advanced Recombined White</strong><br/><br/>
//     Experience the advanced recombined white technology in the Glutax 2000GS formulation. This enhanced version provides superior whitening results through advanced recombination technology and optimized delivery.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 2,000 G</li>
//       <li>Advanced Recombined Complex</li>
//       <li>White Enhancement Technology</li>
//       <li>Optimized Delivery System</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Advanced recombination technology</li>
//       <li>Enhanced whitening action</li>
//       <li>Optimized for maximum results</li>
//     </ul>
//     <br/>
//     Experience advanced recombination technology.<br/>
//     <em class="text-xs text-gray-400">Note: Advanced recombined white formula.</em>
//   `,
//     benefits: ["Advanced Formula", "Recombined White", "2000GS Strength", "Enhanced Action"],
//     sku: "GLUTAX-2000GS-ADV",
//     volume: "10 Sessions"
//   },
//   {
//     id: 29,
//     name: "Glutax 2000gs Recombined White Injections",
//     category: "Injection",
//     brand: "Glutax",
//     price: 8800,
//     image: "/image/glutax-2000gs-std.jpg",
//     images: ["/image/glutax-2000gs-std-1.jpg", "/image/glutax-2000gs-std-2.jpg", "/image/glutax-2000gs-std-3.jpg", "/image/glutax-2000gs-std-4.jpg"],
//     description: "Standard recombined white 2000GS injections",
//     details: `
//     <strong>Glutax 2000gs Recombined White Injections</strong><br/><br/>
//     Experience the reliable standard Glutax 2000GS recombined white formulation. This proven formula provides consistent whitening results with the trusted Glutax quality and recombined white technology.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 2,000 G</li>
//       <li>Recombined White Technology</li>
//       <li>Standard Formula</li>
//       <li>Quality Ingredients</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Proven reliable formulation</li>
//       <li>Consistent whitening results</li>
//       <li>Trusted Glutax quality</li>
//     </ul>
//     <br/>
//     Trust in proven whitening technology.<br/>
//     <em class="text-xs text-gray-400">Note: Standard reliable formulation.</em>
//   `,
//     benefits: ["Standard Formula", "Proven Reliability", "2000GS Strength", "Consistent Results"],
//     sku: "GLUTAX-2000GS-STD",
//     volume: "10 Sessions"
//   },
//   {
//     id: 30,
//     name: "Glutax 22000000gs Extremely Tremendous White Glutathione Injection - New Arrival",
//     category: "Injection",
//     brand: "Glutax",
//     price: 11800,
//     image: "/image/glutax-22mgs-tremendous.jpg",
//     images: ["/image/glutax-22mgs-tremendous-1.jpg", "/image/glutax-22mgs-tremendous-2.jpg", "/image/glutax-22mgs-tremendous-3.jpg", "/image/glutax-22mgs-tremendous-4.jpg"],
//     description: "22 million GS extremely tremendous white - new",
//     details: `
//     <strong>Glutax 22000000gs Extremely Tremendous White</strong><br/><br/>
//     Experience the extremely tremendous whitening power of Glutax 22 million GS. This new arrival represents one of the highest potency formulations available, designed for those seeking dramatic and rapid whitening results.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 22,000,000 GS</li>
//       <li>Tremendous White Complex</li>
//       <li>Extreme Potency Technology</li>
//       <li>Rapid Action Formula</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Extremely high potency</li>
//       <li>Rapid whitening action</li>
//       <li>Dramatic results</li>
//     </ul>
//     <br/>
//     Experience tremendous whitening power.<br/>
//     <em class="text-xs text-gray-400">Note: Extreme potency formulation - professional use.</em>
//   `,
//     benefits: ["22 Million GS", "Extreme Potency", "Tremendous White", "New Arrival"],
//     sku: "GLUTAX-22MGS-TREM",
//     volume: "10 Sessions"
//   },
//   {
//     id: 31,
//     name: "Glutax 2500gs Elixir Essence 2500G Glutathione Injections",
//     category: "Injection",
//     brand: "Glutax",
//     price: 17500,
//     image: "/image/glutax-2500gs-elixir.jpg",
//     images: ["/image/glutax-2500gs-elixir-1.jpg", "/image/glutax-2500gs-elixir-2.jpg", "/image/glutax-2500gs-elixir-3.jpg", "/image/glutax-2500gs-elixir-4.jpg"],
//     description: "Elixir essence 2500G glutathione formulation",
//     details: `
//     <strong>Glutax 2500gs Elixir Essence 2500G Glutathione Injections</strong><br/><br/>
//     Experience the elixir essence formulation of Glutax 2500GS. This premium version features enhanced essence technology for superior skin nourishment and whitening, providing an elixir-like transformation for your skin.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 2,500 G</li>
//       <li>Elixir Essence Complex</li>
//       <li>Premium Nourishment Matrix</li>
//       <li>Essence Technology</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Elixir-grade formulation</li>
//       <li>Enhanced skin nourishment</li>
//       <li>Premium essence technology</li>
//     </ul>
//     <br/>
//     Experience elixir-grade skin transformation.<br/>
//     <em class="text-xs text-gray-400">Note: Premium elixir essence formula.</em>
//   `,
//     benefits: ["Elixir Essence", "2500GS Strength", "Premium Grade", "Enhanced Nourishment"],
//     sku: "GLUTAX-2500GS-ELIXIR",
//     volume: "10 Sessions"
//   },
//   {
//     id: 32,
//     name: "Glutax 30000000gs Extremely Tremendous Glutathione 30,000,000mg - New Arrival",
//     category: "Injection",
//     brand: "Glutax",
//     price: 11900,
//     image: "/image/glutax-30mgs-tremendous.jpg",
//     images: ["/image/glutax-30mgs-tremendous-1.jpg", "/image/glutax-30mgs-tremendous-2.jpg", "/image/glutax-30mgs-tremendous-3.jpg", "/image/glutax-30mgs-tremendous-4.jpg"],
//     description: "30 million GS extremely tremendous - new arrival",
//     details: `
//     <strong>Glutax 30000000gs Extremely Tremendous Glutathione</strong><br/><br/>
//     Experience the ultimate in whitening potency with Glutax 30 million GS. This extremely tremendous formulation represents the highest concentration available, designed for those who demand the most powerful whitening results possible.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 30,000,000 GS</li>
//       <li>Extreme Potency Complex</li>
//       <li>Tremendous White Technology</li>
//       <li>Maximum Strength Formula</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Highest potency available</li>
//       <li>Extremely rapid results</li>
//       <li>Maximum whitening power</li>
//     </ul>
//     <br/>
//     Experience the ultimate in whitening potency.<br/>
//     <em class="text-xs text-gray-400">Note: Maximum strength - professional supervision required.</em>
//   `,
//     benefits: ["30 Million GS", "Maximum Potency", "Extreme Strength", "New Arrival"],
//     sku: "GLUTAX-30MGS-ULTRA",
//     volume: "10 Sessions"
//   },
//   {
//     id: 33,
//     name: "Glutax 5gs Micro Advance 5000mg Glutathione - 12 Sessions",
//     category: "Injection",
//     brand: "Glutax",
//     price: 13500,
//     image: "/image/glutax-5gs-adv-12s.jpg",
//     images: ["/image/glutax-5gs-adv-12s-1.jpg", "/image/glutax-5gs-adv-12s-2.jpg", "/image/glutax-5gs-adv-12s-3.jpg", "/image/glutax-5gs-adv-12s-4.jpg"],
//     description: "Micro advance 5000mg - 12 session package",
//     details: `
//     <strong>Glutax 5gs Micro Advance 5000mg Glutathione - 12 Sessions</strong><br/><br/>
//     Experience the comprehensive 12-session package of Glutax 5GS Micro Advance. This extended treatment plan ensures complete skin transformation with the advanced micro technology for optimal and lasting results.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 5,000 mg per session</li>
//       <li>Micro Advance Technology</li>
//       <li>Complete Treatment Package</li>
//       <li>Extended Results Formula</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Comprehensive 12-session plan</li>
//       <li>Micro technology for better absorption</li>
//       <li>Extended and lasting results</li>
//     </ul>
//     <br/>
//     Commit to complete skin transformation.<br/>
//     <em class="text-xs text-gray-400">Note: 12-session complete treatment package.</em>
//   `,
//     benefits: ["12 Sessions", "Micro Advance", "Complete Package", "Extended Treatment"],
//     sku: "GLUTAX-5GS-ADV-12",
//     volume: "12 Sessions"
//   },
//   {
//     id: 34,
//     name: "Glutax 5gs Micro Cellular Glutathione 5000mg Injection",
//     category: "Injection",
//     brand: "Glutax",
//     price: 9500,
//     image: "/image/glutax-5gs-micro.jpg",
//     images: ["/image/glutax-5gs-micro-1.jpg", "/image/glutax-5gs-micro-2.jpg", "/image/glutax-5gs-micro-3.jpg", "/image/glutax-5gs-micro-4.jpg"],
//     description: "Micro cellular glutathione 5000mg injection",
//     details: `
//     <strong>Glutax 5gs Micro Cellular Glutathione 5000mg Injection</strong><br/><br/>
//     Experience the micro cellular technology of Glutax 5GS. This formulation breaks down glutathione to micro cellular size for enhanced absorption and effectiveness, providing reliable whitening with proven technology.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 5,000 mg</li>
//       <li>Micro Cellular Technology</li>
//       <li>Cellular Absorption Enhancers</li>
//       <li>Proven Formula</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Micro-sized for better absorption</li>
//       <li>Cellular-level targeting</li>
//       <li>Proven reliable results</li>
//     </ul>
//     <br/>
//     Experience cellular-level whitening technology.<br/>
//     <em class="text-xs text-gray-400">Note: Micro cellular absorption technology.</em>
//   `,
//     benefits: ["Micro Cellular", "5000mg Strength", "Enhanced Absorption", "Cellular Targeting"],
//     sku: "GLUTAX-5GS-MICRO",
//     volume: "10 Sessions"
//   },
//   {
//     id: 35,
//     name: "Glutax 75GX DCRP 750000 DNA Cell Revitalize",
//     category: "Injection",
//     brand: "Glutax",
//     price: 11800,
//     image: "/image/glutax-75gx-dcrp.jpg",
//     images: ["/image/glutax-75gx-dcrp-1.jpg", "/image/glutax-75gx-dcrp-2.jpg", "/image/glutax-75gx-dcrp-3.jpg", "/image/glutax-75gx-dcrp-4.jpg"],
//     description: "75GX DCRP DNA cell revitalize technology",
//     details: `
//     <strong>Glutax 75GX DCRP 750000 DNA Cell Revitalize</strong><br/><br/>
//     Experience the advanced DNA Cell Revitalize Process (DCRP) in the Glutax 75GX formulation. This innovative technology works at the DNA level to revitalize and rejuvenate skin cells while providing powerful whitening action.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 750,000 GX</li>
//       <li>DCRP Technology</li>
//       <li>DNA Revitalize Complex</li>
//       <li>Cellular Rejuvenation Matrix</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>DNA-level cell revitalization</li>
//       <li>Comprehensive skin rejuvenation</li>
//       <li>Advanced DCRP technology</li>
//     </ul>
//     <br/>
//     Experience DNA-level skin revitalization.<br/>
//     <em class="text-xs text-gray-400">Note: Advanced DNA cell revitalize process.</em>
//   `,
//     benefits: ["DCRP Technology", "DNA Revitalize", "750K GX", "Cellular Rejuvenation"],
//     sku: "GLUTAX-75GX-DCRP",
//     volume: "10 Sessions"
//   },
//   {
//     id: 36,
//     name: "Glutax 8000000gs Ultimate Recombined White Glutathione Injection - New Arrival",
//     category: "Injection",
//     brand: "Glutax",
//     price: 11600,
//     image: "/image/glutax-8mgs-ultimate.jpg",
//     images: ["/image/glutax-8mgs-ultimate-1.jpg", "/image/glutax-8mgs-ultimate-2.jpg", "/image/glutax-8mgs-ultimate-3.jpg", "/image/glutax-8mgs-ultimate-4.jpg"],
//     description: "8 million GS ultimate recombined white - new",
//     details: `
//     <strong>Glutax 8000000gs Ultimate Recombined White Glutathione Injection</strong><br/><br/>
//     Experience the ultimate recombined white technology in the Glutax 8 million GS formulation. This new arrival represents the pinnacle of recombined white science, providing exceptional whitening with ultimate technology.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 8,000,000 GS</li>
//       <li>Ultimate Recombined Complex</li>
//       <li>White Enhancement Matrix</li>
//       <li>Advanced Delivery System</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Ultimate recombined technology</li>
//       <li>High-potency 8 million GS</li>
//       <li>Exceptional whitening results</li>
//     </ul>
//     <br/>
//     Experience ultimate recombined white technology.<br/>
//     <em class="text-xs text-gray-400">Note: New arrival with ultimate technology.</em>
//   `,
//     benefits: ["8 Million GS", "Ultimate Recombined", "New Arrival", "Advanced White Tech"],
//     sku: "GLUTAX-8MGS-ULT",
//     volume: "10 Sessions"
//   },
//   {
//     id: 37,
//     name: "Glutax 990000gh Dual Hydra Whitening Injection",
//     category: "Injection",
//     brand: "Glutax",
//     price: 8000,
//     image: "/image/glutax-990kgh-hydra.jpg",
//     images: ["/image/glutax-990kgh-hydra-1.jpg", "/image/glutax-990kgh-hydra-2.jpg", "/image/glutax-990kgh-hydra-3.jpg", "/image/glutax-990kgh-hydra-4.jpg"],
//     description: "990000GH dual hydra whitening injection",
//     details: `
//     <strong>Glutax 990000gh Dual Hydra Whitening Injection</strong><br/><br/>
//     Experience the dual hydra technology of Glutax 990000GH. This formulation combines powerful whitening with intensive hydration, addressing both skin tone and moisture balance for comprehensive skin improvement.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 990,000 GH</li>
//       <li>Dual Hydra Complex</li>
//       <li>Hydration Technology</li>
//       <li>Moisture Balance Matrix</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Combines whitening with hydration</li>
//       <li>Dual action technology</li>
//       <li>Improves skin moisture balance</li>
//     </ul>
//     <br/>
//     Experience whitening with intensive hydration.<br/>
//     <em class="text-xs text-gray-400">Note: Dual action whitening and hydration.</em>
//   `,
//     benefits: ["Dual Hydra", "990K GH", "Whitening + Hydration", "Moisture Balance"],
//     sku: "GLUTAX-990KGH-HYDRA",
//     volume: "10 Sessions"
//   },
//   {
//     id: 38,
//     name: "Green Natural Lip Treatment With Aloe Vera & Vitamin E - Non-Irritating, For Lips",
//     category: "Treatment",
//     brand: "Green Natural",
//     price: 750,
//     image: "/image/green-natural-lip.jpg",
//     images: ["/image/green-natural-lip-1.jpg", "/image/green-natural-lip-2.jpg", "/image/green-natural-lip-3.jpg", "/image/green-natural-lip-4.jpg"],
//     description: "Natural lip treatment with aloe vera and vitamin E",
//     details: `
//     <strong>Green Natural Lip Treatment With Aloe Vera & Vitamin E</strong><br/><br/>
//     Experience gentle and effective lip care with Green Natural Lip Treatment. Formulated with aloe vera and vitamin E, this non-irritating treatment soothes, moisturizes, and helps lighten dark lips naturally and safely.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Aloe Vera Extract</li>
//       <li>Vitamin E Complex</li>
//       <li>Natural Moisturizers</li>
//       <li>Gentle Lightening Agents</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Soothes and moisturizes lips</li>
//       <li>Gentle lightening action</li>
//       <li>Non-irritating formula</li>
//     </ul>
//     <br/>
//     Achieve naturally beautiful lips.<br/>
//     <em class="text-xs text-gray-400">Note: Specifically formulated for delicate lip skin.</em>
//   `,
//     benefits: ["Aloe Vera", "Vitamin E", "Non-Irritating", "Lip Care"],
//     sku: "GREEN-LIP-TREAT",
//     volume: "15g Tube"
//   },
//   {
//     id: 39,
//     name: "Japan Beauty Booster For Skin Whitening",
//     category: "Supplement",
//     brand: "Japan Beauty",
//     price: 4500,
//     image: "/image/japan-beauty-booster.jpg",
//     images: ["/image/japan-beauty-booster-1.jpg", "/image/japan-beauty-booster-2.jpg", "/image/japan-beauty-booster-3.jpg", "/image/japan-beauty-booster-4.jpg"],
//     description: "Japanese beauty booster for skin whitening",
//     details: `
//     <strong>Japan Beauty Booster For Skin Whitening</strong><br/><br/>
//     Experience Japanese skincare excellence with Japan Beauty Booster. This advanced supplement combines traditional Japanese ingredients with modern technology to support skin whitening from within, promoting natural radiance and clarity.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Japanese Whitening Complex</li>
//       <li>Traditional Herbal Extracts</li>
//       <li>Modern Technology</li>
//       <li>Skin Health Support</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Japanese skincare philosophy</li>
//       <li>Works from within</li>
//       <li>Supports natural skin radiance</li>
//     </ul>
//     <br/>
//     Experience Japanese beauty from within.<br/>
//     <em class="text-xs text-gray-400">Note: Dietary supplement for skin whitening support.</em>
//   `,
//     benefits: ["Japanese Formula", "Beauty Booster", "Internal Support", "Natural Radiance"],
//     sku: "JAPAN-BEAUTY-BOOST",
//     volume: "60 Capsules"
//   },
//   {
//     id: 40,
//     name: "Laroscorbine Palladium E-UF PN Vitamin C 126 g - Collagen 54g - Pink Box",
//     category: "Injection",
//     brand: "Laroscorbine",
//     price: 5700,
//     image: "/image/laroscobine-pink.jpg",
//     images: ["/image/laroscobine-pink-1.jpg", "/image/laroscobine-pink-2.jpg", "/image/laroscobine-pink-3.jpg", "/image/laroscobine-pink-4.jpg"],
//     description: "Palladium E-UF PN vitamin C and collagen - pink box",
//     details: `
//     <strong>Laroscorbine Palladium E-UF PN Vitamin C 126g - Collagen 54g - Pink Box</strong><br/><br/>
//     Experience the premium Laroscorbine Palladium series in the distinctive pink box. This E-UF PN formulation combines high-dose vitamin C with collagen for comprehensive skin brightening, firming, and overall skin health improvement.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Vitamin C - 126,000 mg</li>
//       <li>Collagen - 54,000 mg</li>
//       <li>Palladium Complex</li>
//       <li>E-UF PN Technology</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>High-dose vitamin C for brightening</li>
//       <li>Collagen for skin firmness</li>
//       <li>Palladium grade quality</li>
//     </ul>
//     <br/>
//     Achieve brightening and firming in one treatment.<br/>
//     <em class="text-xs text-gray-400">Note: Pink box premium series.</em>
//   `,
//     benefits: ["126g Vitamin C", "54g Collagen", "Palladium Grade", "Pink Box Series"],
//     sku: "LAROS-PINK-PALLADIUM",
//     volume: "6 Sessions"
//   },
//   {
//     id: 41,
//     name: "Laroscorbine Diamond E-UF Vitamin C 150,000mg, Collagen 54,000gm - Blue Box",
//     category: "Injection",
//     brand: "Laroscorbine",
//     price: 6800,
//     image: "/image/laroscorbine-blue.jpg",
//     images: ["/image/laroscorbine-blue-1.jpg", "/image/laroscorbine-blue-2.jpg", "/image/laroscorbine-blue-3.jpg", "/image/laroscorbine-blue-4.jpg"],
//     description: "Diamond E-UF vitamin C and collagen - blue box",
//     details: `
//     <strong>Laroscorbine Diamond E-UF Vitamin C 150,000mg, Collagen 54,000gm - Blue Box</strong><br/><br/>
//     Experience the diamond-grade Laroscorbine formulation in the premium blue box. This E-UF technology delivers exceptional vitamin C and collagen combination for superior skin brightening and structural support.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Vitamin C - 150,000 mg</li>
//       <li>Collagen - 54,000 mg</li>
//       <li>Diamond Complex</li>
//       <li>E-UF Technology</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Diamond-grade formulation</li>
//       <li>Enhanced vitamin C delivery</li>
//       <li>Superior collagen support</li>
//     </ul>
//     <br/>
//     Experience diamond-grade skin enhancement.<br/>
//     <em class="text-xs text-gray-400">Note: Blue box diamond series.</em>
//   `,
//     benefits: ["150K Vitamin C", "54K Collagen", "Diamond Grade", "Blue Box Series"],
//     sku: "LAROS-BLUE-DIAMOND",
//     volume: "6 Sessions"
//   },
//   {
//     id: 42,
//     name: "Laroscorbine Diamond E-UF Vitamin C 20,000mg, Collagen 15,000mg - Green Box",
//     category: "Injection",
//     brand: "Laroscorbine",
//     price: 5000,
//     image: "/image/laroscorbine-green.jpg",
//     images: ["/image/laroscorbine-green-1.jpg", "/image/laroscorbine-green-2.jpg", "/image/laroscorbine-green-3.jpg", "/image/laroscorbine-green-4.jpg"],
//     description: "Diamond E-UF vitamin C and collagen - green box",
//     details: `
//     <strong>Laroscorbine Diamond E-UF Vitamin C 20,000mg, Collagen 15,000mg - Green Box</strong><br/><br/>
//     Experience the balanced Laroscorbine Diamond formulation in the green box. This E-UF technology provides optimal vitamin C and collagen levels for effective skin brightening and health maintenance.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Vitamin C - 20,000 mg</li>
//       <li>Collagen - 15,000 mg</li>
//       <li>Diamond Technology</li>
//       <li>E-UF Enhancement</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Balanced formulation</li>
//       <li>Effective maintenance dose</li>
//       <li>Diamond technology quality</li>
//     </ul>
//     <br/>
//     Maintain skin health with balanced enhancement.<br/>
//     <em class="text-xs text-gray-400">Note: Green box maintenance series.</em>
//   `,
//     benefits: ["20K Vitamin C", "15K Collagen", "Balanced Formula", "Green Box Series"],
//     sku: "LAROS-GREEN-DIAMOND",
//     volume: "6 Sessions"
//   },
//   {
//     id: 43,
//     name: "Lipo Lab PPC Solution Fat Loss Injections - Made In Korea",
//     category: "Weight",
//     brand: "Lipo Lab",
//     price: 5000,
//     image: "/image/lipo-lab-ppc.jpg",
//     images: ["/image/lipo-lab-ppc-1.jpg", "/image/lipo-lab-ppc-2.jpg", "/image/lipo-lab-ppc-3.jpg", "/image/lipo-lab-ppc-4.jpg"],
//     description: "Korean PPC solution fat loss injections",
//     details: `
//     <strong>Lipo Lab PPC Solution Fat Loss Injections - Made In Korea</strong><br/><br/>
//     Experience Korean innovation in fat loss with Lipo Lab PPC Solution. Made in Korea with advanced PPC (Polyenylphosphatidylcholine) technology, these injections target stubborn fat areas for effective reduction and body contouring.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>PPC Complex</li>
//       <li>Fat Emulsification Agents</li>
//       <li>Korean Technology</li>
//       <li>Body Contouring Matrix</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Targets stubborn fat areas</li>
//       <li>Korean advanced technology</li>
//       <li>Effective fat reduction</li>
//     </ul>
//     <br/>
//     Achieve better body contouring with Korean technology.<br/>
//     <em class="text-xs text-gray-400">Note: Made in Korea - professional administration required.</em>
//   `,
//     benefits: ["PPC Technology", "Fat Loss", "Korean Made", "Body Contouring"],
//     sku: "LIPOLAB-PPC-KOREA",
//     volume: "10 Sessions"
//   },
//   {
//     id: 44,
//     name: "Lucchini Glutathione Peptide PicoCell Brightening Solution Injection",
//     category: "Injection",
//     brand: "Lucchini",
//     price: 11500,
//     image: "/image/lucchini-picocell.jpg",
//     images: ["/image/lucchini-picocell-1.jpg", "/image/lucchini-picocell-2.jpg", "/image/lucchini-picocell-3.jpg", "/image/lucchini-picocell-4.jpg"],
//     description: "Peptide PicoCell brightening solution injection",
//     details: `
//     <strong>Lucchini Glutathione Peptide PicoCell Brightening Solution Injection</strong><br/><br/>
//     Experience the sophisticated Lucchini formulation combining glutathione with peptide technology and PicoCell delivery. This advanced brightening solution provides multi-level skin lightening with enhanced cellular penetration.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione Complex</li>
//       <li>Peptide Technology</li>
//       <li>PicoCell Delivery</li>
//       <li>Brightening Solution Matrix</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Combines multiple advanced technologies</li>
//       <li>Enhanced cellular penetration</li>
//       <li>Multi-level brightening action</li>
//     </ul>
//     <br/>
//     Experience sophisticated multi-technology brightening.<br/>
//     <em class="text-xs text-gray-400">Note: Advanced peptide and PicoCell technology.</em>
//   `,
//     benefits: ["Peptide Tech", "PicoCell Delivery", "Lucchini Formula", "Multi-Technology"],
//     sku: "LUCCHINI-PICO-PEPTIDE",
//     volume: "10 Sessions"
//   },
//   {
//     id: 45,
//     name: "Lucchini Placenta Fresh Cell Therapy (Human Placenta)",
//     category: "Injection",
//     brand: "Lucchini",
//     price: 10000,
//     image: "/image/lucchini-placenta-fresh.jpg",
//     images: ["/image/lucchini-placenta-fresh-1.jpg", "/image/lucchini-placenta-fresh-2.jpg", "/image/lucchini-placenta-fresh-3.jpg", "/image/lucchini-placenta-fresh-4.jpg"],
//     description: "Fresh cell therapy with human placenta",
//     details: `
//     <strong>Lucchini Placenta Fresh Cell Therapy (Human Placenta)</strong><br/><br/>
//     Experience the rejuvenating power of Lucchini Placenta Fresh Cell Therapy. Utilizing human placenta extracts, this advanced therapy promotes cellular regeneration, skin rejuvenation, and overall vitality for more youthful appearing skin.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Human Placenta Extract</li>
//       <li>Fresh Cell Technology</li>
//       <li>Cellular Regeneration Complex</li>
//       <li>Rejuvenation Matrix</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Promotes cellular regeneration</li>
//       <li>Provides essential growth factors</li>
//       <li>Enhances skin vitality</li>
//     </ul>
//     <br/>
//     Experience cellular-level rejuvenation.<br/>
//     <em class="text-xs text-gray-400">Note: Human placenta extract - professional use only.</em>
//   `,
//     benefits: ["Human Placenta", "Fresh Cell Therapy", "Cellular Regeneration", "Rejuvenation"],
//     sku: "LUCCHINI-PLACENTA-FRESH",
//     volume: "5 Sessions"
//   },
//   {
//     id: 46,
//     name: "Lucchini Placenta Power Cell 27th Anniversary (Human Placenta)",
//     category: "Injection",
//     brand: "Lucchini",
//     price: 14000,
//     image: "/image/lucchini-27th-anniv.jpg",
//     images: ["/image/lucchini-27th-anniv-1.jpg", "/image/lucchini-27th-anniv-2.jpg", "/image/lucchini-27th-anniv-3.jpg", "/image/lucchini-27th-anniv-4.jpg"],
//     description: "27th anniversary power cell human placenta",
//     details: `
//     <strong>Lucchini Placenta Power Cell 27th Anniversary (Human Placenta)</strong><br/><br/>
//     Experience the special 27th Anniversary edition of Lucchini Placenta Power Cell. This commemorative formulation features enhanced power cell technology with human placenta for exceptional regenerative and rejuvenating results.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Human Placenta Power Cell</li>
//       <li>27th Anniversary Formula</li>
//       <li>Enhanced Regeneration Complex</li>
//       <li>Commemorative Technology</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Special anniversary formulation</li>
//       <li>Enhanced power cell technology</li>
//       <li>Exceptional regenerative properties</li>
//     </ul>
//     <br/>
//     Experience special anniversary rejuvenation.<br/>
//     <em class="text-xs text-gray-400">Note: 27th anniversary special edition.</em>
//   `,
//     benefits: ["27th Anniversary", "Power Cell Tech", "Human Placenta", "Special Edition"],
//     sku: "LUCCHINI-27TH-ANNIV",
//     volume: "5 Sessions"
//   },
//   {
//     id: 47,
//     name: "Advanced Vita Glow Skin Whitening Night Cream",
//     category: "Cream",
//     brand: "Vita Glow",
//     price: 1800,
//     image: "/image/adv-vita-glow-night.jpg",
//     images: ["/image/adv-vita-glow-night-1.jpg", "/image/adv-vita-glow-night-2.jpg", "/image/adv-vita-glow-night-3.jpg", "/image/adv-vita-glow-night-4.jpg"],
//     description: "Advanced night repair cream with glutathione complex",
//     details: `
//       <strong>Advanced Vita Glow Skin Whitening Night Cream</strong><br/><br/>
//       Experience overnight skin transformation with this advanced whitening night cream. Formulated to work while you sleep, it delivers potent whitening agents deep into the skin during the body's natural repair cycle.<br/><br/>
//       <strong>Key Active Components:</strong><br/>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Glutathione Complex - 2%</li>
//         <li>Vitamin C Derivative - 5%</li>
//         <li>Niacinamide - 4%</li>
//         <li>Hyaluronic Acid - 3%</li>
//         <li>Natural Plant Extracts</li>
//       </ul>
//       <br/>
//       <strong>Why it works:</strong>
//       <ul class="list-disc pl-5 mt-2 space-y-1">
//         <li>Works during nighttime repair cycle</li>
//         <li>Deeply moisturizes while whitening</li>
//         <li>Reduces appearance of dark spots</li>
//       </ul>
//       <br/>
//       Wake up to brighter, more radiant skin every morning.<br/>
//       <em class="text-xs text-gray-400">Note: Apply evenly on face and neck before bedtime.</em>
//     `,
//     benefits: ["Overnight Repair", "Deep Moisturization", "Spot Reduction", "Non-Greasy"],
//     sku: "VG-NIGHT-50",
//     volume: "50g Jar"
//   },
//   {
//     id: 48,
//     name: "Miracle White Purple 60000mg Glutathione Injection",
//     category: "Injection",
//     brand: "Miracle White",
//     price: 8800,
//     image: "/image/miracle-white-purple.jpg",
//     images: ["/image/miracle-white-purple-1.jpg", "/image/miracle-white-purple-2.jpg", "/image/miracle-white-purple-3.jpg", "/image/miracle-white-purple-4.jpg"],
//     description: "Purple series 60,000mg glutathione injection",
//     details: `
//     <strong>Miracle White Purple 60000mg Glutathione Injection</strong><br/><br/>
//     Experience the premium Purple series of Miracle White with 60,000mg glutathione potency. This special edition formulation provides enhanced whitening with the distinctive purple series technology for superior results.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 60,000 mg</li>
//       <li>Purple Series Technology</li>
//       <li>Enhanced Whitening Complex</li>
//       <li>Special Edition Formula</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Premium purple series</li>
//       <li>Enhanced whitening technology</li>
//       <li>Special edition formulation</li>
//     </ul>
//     <br/>
//     Experience premium purple series whitening.<br/>
//     <em class="text-xs text-gray-400">Note: Purple series special edition.</em>
//   `,
//     benefits: ["Purple Series", "60,000mg Strength", "Premium Edition", "Enhanced Whitening"],
//     sku: "MIRACLE-PURPLE-60K",
//     volume: "8 Sessions"
//   },
//   {
//     id: 49,
//     name: "Miracle Gain",
//     category: "Supplement",
//     brand: "Miracle",
//     price: 1700,
//     image: "/image/miracle-gain.jpg",
//     images: ["/image/miracle-gain-1.jpg", "/image/miracle-gain-2.jpg", "/image/miracle-gain-3.jpg", "/image/miracle-gain-4.jpg"],
//     description: "Weight gain and body enhancement supplement",
//     details: `
//     <strong>Miracle Gain</strong><br/><br/>
//     Experience healthy weight gain and body enhancement with Miracle Gain supplement. Formulated to support healthy weight increase and body shaping, this supplement provides essential nutrients for optimal body development and enhancement.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Weight Gain Complex</li>
//       <li>Body Enhancement Nutrients</li>
//       <li>Healthy Growth Support</li>
//       <li>Nutritional Matrix</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Supports healthy weight gain</li>
//       <li>Provides essential nutrients</li>
//       <li>Promotes body enhancement</li>
//     </ul>
//     <br/>
//     Achieve healthy body enhancement and weight gain.<br/>
//     <em class="text-xs text-gray-400">Note: Dietary supplement for weight gain support.</em>
//   `,
//     benefits: ["Weight Gain", "Body Enhancement", "Healthy Support", "Nutritional Aid"],
//     sku: "MIRACLE-GAIN-CAP",
//     volume: "90 Capsules"
//   },
//   {
//     id: 50,
//     name: "NC24 90000mg Japan Ultra Sense Complexion",
//     category: "Injection",
//     brand: "NC24",
//     price: 8800,
//     image: "/image/nc24-ultra-sense.jpg",
//     images: ["/image/nc24-ultra-sense-1.jpg", "/image/nc24-ultra-sense-2.jpg", "/image/nc24-ultra-sense-3.jpg", "/image/nc24-ultra-sense-4.jpg"],
//     description: "Japan ultra sense complexion 90,000mg",
//     details: `
//     <strong>NC24 90000mg Japan Ultra Sense Complexion</strong><br/><br/>
//     Experience Japanese ultra sense technology with NC24 90,000mg formulation. This advanced complexion enhancer uses Japanese sensory technology to provide intelligent skin response and exceptional complexion improvement.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 90,000 mg</li>
//       <li>Ultra Sense Technology</li>
//       <li>Japanese Complexion Complex</li>
//       <li>Intelligent Response System</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Japanese ultra sense technology</li>
//       <li>Intelligent skin response</li>
//       <li>Exceptional complexion enhancement</li>
//     </ul>
//     <br/>
//     Experience intelligent complexion enhancement.<br/>
//     <em class="text-xs text-gray-400">Note: Japanese ultra sense technology.</em>
//   `,
//     benefits: ["Ultra Sense Tech", "90,000mg Strength", "Japanese Formula", "Complexion Enhancement"],
//     sku: "NC24-ULTRA-SENSE",
//     volume: "10 Sessions"
//   },
//   {
//     id: 51,
//     name: "NC24 Sakura 800000mg Japan Special Edition Glutathione",
//     category: "Injection",
//     brand: "NC24",
//     price: 11000,
//     image: "/image/nc24-sakura.jpg",
//     images: ["/image/nc24-sakura-1.jpg", "/image/nc24-sakura-2.jpg", "/image/nc24-sakura-3.jpg", "/image/nc24-sakura-4.jpg"],
//     description: "Sakura special edition 800,000mg glutathione",
//     details: `
//     <strong>NC24 Sakura 800000mg Japan Special Edition Glutathione</strong><br/><br/>
//     Experience the beauty of Japanese cherry blossoms with NC24 Sakura Special Edition. This 800,000mg glutathione formulation incorporates sakura extracts for a unique pinkish glow and exceptional whitening results inspired by Japanese beauty traditions.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 800,000 mg</li>
//       <li>Sakura Cherry Blossom Extract</li>
//       <li>Japanese Special Edition Formula</li>
//       <li>Pink Radiance Complex</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Sakura extract for natural pink glow</li>
//       <li>High-potency 800,000mg formulation</li>
//       <li>Japanese beauty tradition inspired</li>
//     </ul>
//     <br/>
//     Experience the beauty of sakura-inspired whitening.<br/>
//     <em class="text-xs text-gray-400">Note: Sakura special edition formulation.</em>
//   `,
//     benefits: ["Sakura Edition", "800K mg", "Japanese Beauty", "Pink Glow"],
//     sku: "NC24-SAKURA-800K",
//     volume: "10 Sessions"
//   },
//   {
//     id: 52,
//     name: "NC24 Ultra PDRN Miracle 280,000mg Glutathione Injections",
//     category: "Injection",
//     brand: "NC24",
//     price: 2200,
//     image: "/image/nc24-pdrn.jpg",
//     images: ["/image/nc24-pdrn-1.jpg", "/image/nc24-pdrn-2.jpg", "/image/nc24-pdrn-3.jpg", "/image/nc24-pdrn-4.jpg"],
//     description: "Ultra PDRN miracle 280,000mg glutathione",
//     details: `
//     <strong>NC24 Ultra PDRN Miracle 280,000mg Glutathione Injections</strong><br/><br/>
//     Experience the miracle of PDRN technology with NC24 Ultra formulation. Combining 280,000mg glutathione with Polydeoxyribonucleotide (PDRN) for enhanced cellular regeneration and exceptional whitening results through advanced DNA technology.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 280,000 mg</li>
//       <li>PDRN Complex</li>
//       <li>DNA Regeneration Technology</li>
//       <li>Miracle Enhancement Formula</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>PDRN for cellular regeneration</li>
//       <li>DNA-level skin improvement</li>
//       <li>Enhanced whitening with regeneration</li>
//     </ul>
//     <br/>
//     Experience DNA-level skin transformation.<br/>
//     <em class="text-xs text-gray-400">Note: Advanced PDRN DNA technology.</em>
//   `,
//     benefits: ["PDRN Tech", "280K mg", "DNA Regeneration", "Miracle Formula"],
//     sku: "NC24-PDRN-280K",
//     volume: "8 Sessions"
//   },
//   {
//     id: 53,
//     name: "Neo Hair Lotion",
//     category: "Lotion",
//     brand: "Neo",
//     price: 9800,
//     image: "/image/neo-hair-lotion.jpg",
//     images: ["/image/neo-hair-lotion-1.jpg", "/image/neo-hair-lotion-2.jpg", "/image/neo-hair-lotion-3.jpg", "/image/neo-hair-lotion-4.jpg"],
//     description: "Advanced hair care and treatment lotion",
//     details: `
//     <strong>Neo Hair Lotion</strong><br/><br/>
//     Experience comprehensive hair care with Neo Hair Lotion. This advanced treatment lotion is designed to improve hair health, promote growth, and address various hair concerns while providing essential nourishment and protection for your hair.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Hair Growth Complex</li>
//       <li>Scalp Nourishment Agents</li>
//       <li>Hair Strength Enhancers</li>
//       <li>Protective Matrix</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Promotes healthy hair growth</li>
//       <li>Nourishes scalp and hair follicles</li>
//       <li>Improves overall hair health</li>
//     </ul>
//     <br/>
//     Achieve healthier, stronger hair.<br/>
//     <em class="text-xs text-gray-400">Note: For external use on hair and scalp.</em>
//   `,
//     benefits: ["Hair Growth", "Scalp Care", "Hair Strength", "Nourishment"],
//     sku: "NEO-HAIR-LOTION",
//     volume: "200ml Bottle"
//   },
//   {
//     id: 54,
//     name: "Neutro Skin Cactus fruit and avocado Glutathione Injections",
//     category: "Injection",
//     brand: "Neutro Skin",
//     price: 9800,
//     image: "/image/neutro-cactus-avocado.jpg",
//     images: ["/image/neutro-cactus-avocado-1.jpg", "/image/neutro-cactus-avocado-2.jpg", "/image/neutro-cactus-avocado-3.jpg", "/image/neutro-cactus-avocado-4.jpg"],
//     description: "Cactus fruit and avocado glutathione injections",
//     details: `
//     <strong>Neutro Skin Cactus fruit and avocado Glutathione Injections</strong><br/><br/>
//     Experience the natural power of cactus fruit and avocado with Neutro Skin glutathione injections. This unique formulation combines the antioxidant benefits of glutathione with the nourishing properties of natural fruits for comprehensive skin health and whitening.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione Complex</li>
//       <li>Cactus Fruit Extract</li>
//       <li>Avocado Oil Complex</li>
//       <li>Natural Antioxidant Blend</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Natural fruit extracts for nourishment</li>
//       <li>Combines whitening with skin health</li>
//       <li>Natural antioxidant protection</li>
//     </ul>
//     <br/>
//     Experience natural fruit-enhanced whitening.<br/>
//     <em class="text-xs text-gray-400">Note: Natural fruit extract formulation.</em>
//   `,
//     benefits: ["Cactus Fruit", "Avocado", "Natural Extracts", "Skin Nourishment"],
//     sku: "NEUTRO-CACTUS-AVOCADO",
//     volume: "10 Sessions"
//   },
//   {
//     id: 55,
//     name: "Neutro Skin Lemon Ultimate Whitening with Glutathione 2000000",
//     category: "Injection",
//     brand: "Neutro Skin",
//     price: 8800,
//     image: "/image/neutro-lemon-ultimate.jpg",
//     images: ["/image/neutro-lemon-ultimate-1.jpg", "/image/neutro-lemon-ultimate-2.jpg", "/image/neutro-lemon-ultimate-3.jpg", "/image/neutro-lemon-ultimate-4.jpg"],
//     description: "Lemon ultimate whitening with 2 million glutathione",
//     details: `
//     <strong>Neutro Skin Lemon Ultimate Whitening with Glutathione 2000000</strong><br/><br/>
//     Experience the ultimate whitening power of lemon with Neutro Skin's 2 million glutathione formulation. Combining the natural brightening properties of lemon with high-potency glutathione for exceptional skin lightening and brightening results.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 2,000,000 mg</li>
//       <li>Lemon Extract Complex</li>
//       <li>Ultimate Whitening Technology</li>
//       <li>Natural Brightening Agents</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Lemon for natural brightening</li>
//       <li>High-potency 2 million glutathione</li>
//       <li>Ultimate whitening combination</li>
//     </ul>
//     <br/>
//     Experience ultimate lemon-powered whitening.<br/>
//     <em class="text-xs text-gray-400">Note: Lemon extract enhanced formula.</em>
//   `,
//     benefits: ["Lemon Extract", "2 Million mg", "Ultimate Whitening", "Natural Brightening"],
//     sku: "NEUTRO-LEMON-2M",
//     volume: "10 Sessions"
//   },
//   {
//     id: 56,
//     name: "Neutro Skin Pomegranate 12000mg Glutathione Injections",
//     category: "Injection",
//     brand: "Neutro Skin",
//     price: 7500,
//     image: "/image/neutro-pomegranate.jpg",
//     images: ["/image/neutro-pomegranate-1.jpg", "/image/neutro-pomegranate-2.jpg", "/image/neutro-pomegranate-3.jpg", "/image/neutro-pomegranate-4.jpg"],
//     description: "Pomegranate 12,000mg glutathione injections",
//     details: `
//     <strong>Neutro Skin Pomegranate 12000mg Glutathione Injections</strong><br/><br/>
//     Experience the antioxidant power of pomegranate with Neutro Skin's 12,000mg glutathione formulation. This combination provides dual antioxidant protection while delivering effective whitening and skin health benefits.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 12,000 mg</li>
//       <li>Pomegranate Extract</li>
//       <li>Antioxidant Complex</li>
//       <li>Skin Health Matrix</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Pomegranate for additional antioxidants</li>
//       <li>Dual antioxidant protection</li>
//       <li>Comprehensive skin health benefits</li>
//     </ul>
//     <br/>
//     Experience dual antioxidant protection.<br/>
//     <em class="text-xs text-gray-400">Note: Pomegranate antioxidant formula.</em>
//   `,
//     benefits: ["Pomegranate", "12,000mg", "Dual Antioxidants", "Skin Health"],
//     sku: "NEUTRO-POMEGRANATE-12K",
//     volume: "10 Sessions"
//   },
//   {
//     id: 57,
//     name: "Ratiopharm L Carnitine 20 Gram Weight & Fat Loss Injection",
//     category: "Weight",
//     brand: "Ratiopharm",
//     price: 11500,
//     image: "/image/ratiopharm-lcarnitine-20g.jpg",
//     images: ["/image/ratiopharm-lcarnitine-20g-1.jpg", "/image/ratiopharm-lcarnitine-20g-2.jpg", "/image/ratiopharm-lcarnitine-20g-3.jpg", "/image/ratiopharm-lcarnitine-20g-4.jpg"],
//     description: "L-Carnitine 20g weight and fat loss injection",
//     details: `
//     <strong>Ratiopharm L Carnitine 20 Gram Weight & Fat Loss Injection</strong><br/><br/>
//     Experience the trusted quality of Ratiopharm L-Carnitine for effective weight and fat loss. This 20-gram formulation helps transport fatty acids into cells for energy production, supporting your weight management goals with pharmaceutical-grade quality.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>L-Carnitine - 20,000 mg</li>
//       <li>Fat Metabolism Enhancers</li>
//       <li>Energy Production Support</li>
//       <li>Pharmaceutical Grade</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Enhances fat metabolism</li>
//       <li>Supports energy production</li>
//       <li>Pharmaceutical quality assurance</li>
//     </ul>
//     <br/>
//     Support your weight loss journey with quality.<br/>
//     <em class="text-xs text-gray-400">Note: Pharmaceutical grade L-Carnitine.</em>
//   `,
//     benefits: ["20g L-Carnitine", "Fat Loss", "Energy Boost", "Ratiopharm Quality"],
//     sku: "RATIOPHARM-LCARN-20G",
//     volume: "10 Sessions"
//   },
//   {
//     id: 58,
//     name: "Ratiopharm L-cartinine 10G - Weight Loss & Fat Loss Injection",
//     category: "Weight",
//     brand: "Ratiopharm",
//     price: 16400,
//     image: "/image/ratiopharm-lcarnitine-10g.jpg",
//     images: ["/image/ratiopharm-lcarnitine-10g-1.jpg", "/image/ratiopharm-lcarnitine-10g-2.jpg", "/image/ratiopharm-lcarnitine-10g-3.jpg", "/image/ratiopharm-lcarnitine-10g-4.jpg"],
//     description: "L-Carnitine 10g weight and fat loss injection",
//     details: `
//     <strong>Ratiopharm L-cartinine 10G - Weight Loss & Fat Loss Injection</strong><br/><br/>
//     Experience the effective weight management support of Ratiopharm L-Carnitine 10g formulation. This concentrated injection helps optimize fat burning and energy metabolism while maintaining the high quality standards of Ratiopharm pharmaceuticals.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>L-Carnitine - 10,000 mg</li>
//       <li>Metabolism Support Complex</li>
//       <li>Fat Burning Enhancers</li>
//       <li>Concentrated Formula</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Optimizes fat burning</li>
//       <li>Supports metabolic function</li>
//       <li>Concentrated effective formula</li>
//     </ul>
//     <br/>
//     Enhance your weight management efforts.<br/>
//     <em class="text-xs text-gray-400">Note: Concentrated L-Carnitine formula.</em>
//   `,
//     benefits: ["10g L-Carnitine", "Metabolism Support", "Fat Burning", "Concentrated Formula"],
//     sku: "RATIOPHARM-LCARN-10G",
//     volume: "8 Sessions"
//   },
//   {
//     id: 59,
//     name: "Relumins 2000mg Glutathione Injections - Free Glutathione Booster",
//     category: "Injection",
//     brand: "Relumins",
//     price: 18500,
//     image: "/image/relumins-2000mg-booster.jpg",
//     images: ["/image/relumins-2000mg-booster-1.jpg", "/image/relumins-2000mg-booster-2.jpg", "/image/relumins-2000mg-booster-3.jpg", "/image/relumins-2000mg-booster-4.jpg"],
//     description: "2000mg glutathione with free booster",
//     details: `
//     <strong>Relumins 2000mg Glutathione Injections - Free Glutathione Booster</strong><br/><br/>
//     Experience the enhanced Relumins 2000mg glutathione formulation with complimentary glutathione booster. This premium package provides both immediate and sustained whitening action for comprehensive and lasting results.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 2,000 mg</li>
//       <li>Free Booster Included</li>
//       <li>Enhanced Formula</li>
//       <li>Sustained Action Technology</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Immediate and sustained action</li>
//       <li>Complimentary booster enhances results</li>
//       <li>Premium Relumins quality</li>
//     </ul>
//     <br/>
//     Get enhanced results with free booster.<br/>
//     <em class="text-xs text-gray-400">Note: Includes complimentary glutathione booster.</em>
//   `,
//     benefits: ["2000mg Strength", "Free Booster", "Enhanced Formula", "Relumins Quality"],
//     sku: "RELUMINS-2000-BOOST",
//     volume: "10 Sessions + Booster"
//   },
//   {
//     id: 60,
//     name: "Relumins 3500mg Glutathione Injections - Free Glutathione Booster",
//     category: "Injection",
//     brand: "Relumins",
//     price: 500,
//     image: "/image/relumins-3500mg-booster.jpg",
//     images: ["/image/relumins-3500mg-booster-1.jpg", "/image/relumins-3500mg-booster-2.jpg", "/image/relumins-3500mg-booster-3.jpg", "/image/relumins-3500mg-booster-4.jpg"],
//     description: "3500mg glutathione with free booster",
//     details: `
//     <strong>Relumins 3500mg Glutathione Injections - Free Glutathione Booster</strong><br/><br/>
//     Experience the high-potency Relumins 3500mg glutathione formulation with included glutathione booster. This powerful combination delivers intensive whitening action with the reliability and quality of the Relumins brand.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 3,500 mg</li>
//       <li>Complimentary Booster</li>
//       <li>High-Potency Formula</li>
//       <li>Intensive Action Technology</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>High-potency 3500mg formulation</li>
//       <li>Intensive whitening action</li>
//       <li>Booster enhances effectiveness</li>
//     </ul>
//     <br/>
//     Experience intensive high-potency whitening.<br/>
//     <em class="text-xs text-gray-400">Note: High-potency with complimentary booster.</em>
//   `,
//     benefits: ["3500mg Strength", "High Potency", "Free Booster", "Intensive Action"],
//     sku: "RELUMINS-3500-BOOST",
//     volume: "8 Sessions + Booster"
//   },
//   {
//     id: 61,
//     name: "Renew Kojic Glutathione Skin Whitening Soap",
//     category: "Soap",
//     brand: "Renew",
//     price: 16500,
//     image: "/image/renew-kojic-soap.jpg",
//     images: ["/image/renew-kojic-soap-1.jpg", "/image/renew-kojic-soap-2.jpg", "/image/renew-kojic-soap-3.jpg", "/image/renew-kojic-soap-4.jpg"],
//     description: "Kojic and glutathione skin whitening soap",
//     details: `
//     <strong>Renew Kojic Glutathione Skin Whitening Soap</strong><br/><br/>
//     Experience the powerful combination of kojic acid and glutathione in Renew Whitening Soap. This daily cleansing formula works to gradually lighten skin tone, reduce dark spots, and improve overall skin brightness with regular use.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Kojic Acid Complex</li>
//       <li>Glutathione</li>
//       <li>Skin Brightening Agents</li>
//       <li>Gentle Cleansing Base</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Kojic acid inhibits melanin production</li>
//       <li>Glutathione provides antioxidant protection</li>
//       <li>Gradual and consistent lightening</li>
//     </ul>
//     <br/>
//     Brighten your skin with daily cleansing.<br/>
//     <em class="text-xs text-gray-400">Note: For daily use in whitening regimen.</em>
//   `,
//     benefits: ["Kojic Acid", "Glutathione", "Daily Cleansing", "Gradual Lightening"],
//     sku: "RENEW-KOJIC-SOAP",
//     volume: "100g Bar"
//   },
//   {
//     id: 62,
//     name: "Saint Blanc XIII Glutathione And Vitamin C Injections",
//     category: "Injection",
//     brand: "Saint Blanc",
//     price: 13500,
//     image: "/image/saint-blanc-xiii.jpg",
//     images: ["/image/saint-blanc-xiii-1.jpg", "/image/saint-blanc-xiii-2.jpg", "/image/saint-blanc-xiii-3.jpg", "/image/saint-blanc-xiii-4.jpg"],
//     description: "Glutathione and vitamin C injections - XIII series",
//     details: `
//     <strong>Saint Blanc XIII Glutathione And Vitamin C Injections</strong><br/><br/>
//     Experience the premium Saint Blanc XIII series combining glutathione and vitamin C for exceptional skin whitening and antioxidant protection. This advanced formulation represents the 13th generation of Saint Blanc excellence in skin lightening technology.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione Complex</li>
//       <li>Vitamin C Matrix</li>
//       <li>XIII Generation Technology</li>
//       <li>Premium Antioxidant Blend</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Synergistic glutathione and vitamin C</li>
//       <li>13th generation advanced technology</li>
//       <li>Comprehensive antioxidant protection</li>
//     </ul>
//     <br/>
//     Experience 13 generations of whitening excellence.<br/>
//     <em class="text-xs text-gray-400">Note: XIII generation premium formula.</em>
//   `,
//     benefits: ["XIII Series", "Glutathione + Vitamin C", "Premium Grade", "13th Generation"],
//     sku: "SAINT-BLANC-XIII",
//     volume: "10 Sessions"
//   },
//   {
//     id: 63,
//     name: "Shiro Advance Skin Whitening Injection",
//     category: "Injection",
//     brand: "Shiro",
//     price: 1800,
//     image: "/image/shiro-advance.jpg",
//     images: ["/image/shiro-advance-1.jpg", "/image/shiro-advance-2.jpg", "/image/shiro-advance-3.jpg", "/image/shiro-advance-4.jpg"],
//     description: "Advance skin whitening injection",
//     details: `
//     <strong>Shiro Advance Skin Whitening Injection</strong><br/><br/>
//     Experience the advanced whitening technology of Shiro Advance formulation. Designed for effective and reliable skin lightening, this injection provides comprehensive whitening action with the trusted Shiro quality and performance.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Advanced Whitening Complex</li>
//       <li>Glutathione Technology</li>
//       <li>Skin Lightening Enhancers</li>
//       <li>Quality Assurance Formula</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Advanced whitening technology</li>
//       <li>Reliable and consistent results</li>
//       <li>Trusted Shiro quality</li>
//     </ul>
//     <br/>
//     Experience advanced and reliable whitening.<br/>
//     <em class="text-xs text-gray-400">Note: Advanced Shiro formulation.</em>
//   `,
//     benefits: ["Shiro Advance", "Reliable Results", "Advanced Tech", "Quality Assurance"],
//     sku: "SHIRO-ADVANCE-INJ",
//     volume: "10 Sessions"
//   },
//   {
//     id: 64,
//     name: "St Dalfour Filipina Beauty Cream",
//     category: "Cream",
//     brand: "St Dalfour",
//     price: 2000,
//     image: "/image/st-dalfour-cream.jpg",
//     images: ["/image/st-dalfour-cream-1.jpg", "/image/st-dalfour-cream-2.jpg", "/image/st-dalfour-cream-3.jpg", "/image/st-dalfour-cream-4.jpg"],
//     description: "Filipina beauty cream by St Dalfour",
//     details: `
//     <strong>St Dalfour Filipina Beauty Cream</strong><br/><br/>
//     Experience the elegance of St Dalfour Filipina Beauty Cream, specially formulated to enhance the natural beauty of Filipina skin. This premium cream addresses specific skin concerns while providing luxurious care and effective whitening results.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Filipina Skin Complex</li>
//       <li>Luxury Whitening Agents</li>
//       <li>Moisture Balance Technology</li>
//       <li>Premium Cream Base</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Specifically for Filipina skin</li>
//       <li>Luxury skincare experience</li>
//       <li>Comprehensive beauty enhancement</li>
//     </ul>
//     <br/>
//     Enhance your natural Filipina beauty.<br/>
//     <em class="text-xs text-gray-400">Note: Specifically formulated for Filipina skin.</em>
//   `,
//     benefits: ["Filipina Formula", "Luxury Cream", "Skin Enhancement", "St Dalfour Quality"],
//     sku: "ST-DALFOUR-FILIPINA",
//     volume: "50g Jar"
//   },
//   {
//     id: 65,
//     name: "Tatio Active DX Japan 12G (12000mg) Glutathione Injections",
//     category: "Injection",
//     brand: "Tatio",
//     price: 2000,
//     image: "/image/tatio-active-dx.jpg",
//     images: ["/image/tatio-active-dx-1.jpg", "/image/tatio-active-dx-2.jpg", "/image/tatio-active-dx-3.jpg", "/image/tatio-active-dx-4.jpg"],
//     description: "Japan Active DX 12g glutathione injections",
//     details: `
//     <strong>Tatio Active DX Japan 12G (12000mg) Glutathione Injections</strong><br/><br/>
//     Experience Japanese Active DX technology with Tatio 12g glutathione injections. This advanced formulation combines Japanese innovation with high-potency glutathione for effective and reliable skin whitening and health improvement.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione - 12,000 mg</li>
//       <li>Active DX Technology</li>
//       <li>Japanese Innovation Complex</li>
//       <li>Enhanced Bioavailability</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Japanese Active DX technology</li>
//       <li>High-potency 12g formulation</li>
//       <li>Enhanced effectiveness</li>
//     </ul>
//     <br/>
//     Experience Japanese active technology.<br/>
//     <em class="text-xs text-gray-400">Note: Japanese Active DX formulation.</em>
//   `,
//     benefits: ["Active DX Tech", "12,000mg", "Japanese Formula", "Enhanced Bioavailability"],
//     sku: "TATIO-ACTIVE-DX-12G",
//     volume: "10 Sessions"
//   },
//   {
//     id: 66,
//     name: "VC Vitamin C Injection By Vesco Pharma Vitamin C 1000mg",
//     category: "Injection",
//     brand: "Vesco Pharma",
//     price: 600,
//     image: "/image/vesco-vitamin-c.jpg",
//     images: ["/image/vesco-vitamin-c-1.jpg", "/image/vesco-vitamin-c-2.jpg", "/image/vesco-vitamin-c-3.jpg", "/image/vesco-vitamin-c-4.jpg"],
//     description: "Vitamin C 1000mg injection by Vesco Pharma",
//     details: `
//     <strong>VC Vitamin C Injection By Vesco Pharma Vitamin C 1000mg</strong><br/><br/>
//     Experience the pure power of Vitamin C with Vesco Pharma's 1000mg injection. This essential antioxidant supports collagen production, brightens skin, and provides comprehensive protection against environmental damage with pharmaceutical-grade quality.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Vitamin C - 1,000 mg</li>
//       <li>Antioxidant Complex</li>
//       <li>Collagen Support Matrix</li>
//       <li>Skin Brightening Agents</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Essential antioxidant protection</li>
//       <li>Supports collagen production</li>
//       <li>Brightens and evens skin tone</li>
//     </ul>
//     <br/>
//     Boost your skin health with pure Vitamin C.<br/>
//     <em class="text-xs text-gray-400">Note: Pure Vitamin C antioxidant injection.</em>
//   `,
//     benefits: ["1000mg Vitamin C", "Antioxidant", "Collagen Support", "Vesco Pharma"],
//     sku: "VESCO-VITAMIN-C-1000",
//     volume: "5 Sessions"
//   },
//   {
//     id: 67,
//     name: "Vita Glow Glutathione Skin Whitening Soap",
//     category: "Soap",
//     brand: "Vita Glow",
//     price: 600,
//     image: "/image/vita-glow-soap.jpg",
//     images: ["/image/vita-glow-soap-1.jpg", "/image/vita-glow-soap-2.jpg", "/image/vita-glow-soap-3.jpg", "/image/vita-glow-soap-4.jpg"],
//     description: "Glutathione skin whitening soap",
//     details: `
//     <strong>Vita Glow Glutathione Skin Whitening Soap</strong><br/><br/>
//     Experience daily whitening care with Vita Glow Glutathione Soap. This gentle yet effective cleansing bar incorporates glutathione into your daily routine for gradual skin lightening, improved brightness, and overall skin health maintenance.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione Complex</li>
//       <li>Gentle Cleansing Agents</li>
//       <li>Skin Brightening Technology</li>
//       <li>Moisture Balance Formula</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Daily gradual lightening</li>
//       <li>Gentle on all skin types</li>
//       <li>Maintains skin moisture balance</li>
//     </ul>
//     <br/>
//     Make whitening part of your daily routine.<br/>
//     <em class="text-xs text-gray-400">Note: For daily use in skincare routine.</em>
//   `,
//     benefits: ["Glutathione Soap", "Daily Use", "Gradual Lightening", "Gentle Formula"],
//     sku: "VITA-GLOW-SOAP",
//     volume: "100g Bar"
//   },
//   {
//     id: 68,
//     name: "Zaguta Glutathione Whitening Injections",
//     category: "Injection",
//     brand: "Zaguta",
//     price: 10500,
//     image: "/image/zaguta-injections.jpg",
//     images: ["/image/zaguta-injections-1.jpg", "/image/zaguta-injections-2.jpg", "/image/zaguta-injections-3.jpg", "/image/zaguta-injections-4.jpg"],
//     description: "Glutathione whitening injections",
//     details: `
//     <strong>Zaguta Glutathione Whitening Injections</strong><br/><br/>
//     Experience the reliable effectiveness of Zaguta Glutathione Whitening Injections. This trusted formulation provides consistent and noticeable skin lightening results with quality ingredients and proven technology for comprehensive skin brightening.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Glutathione Complex</li>
//       <li>Whitening Enhancement Technology</li>
//       <li>Quality Tested Ingredients</li>
//       <li>Proven Formula</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Consistent and reliable results</li>
//       <li>Quality assured formulation</li>
//       <li>Proven whitening effectiveness</li>
//     </ul>
//     <br/>
//     Trust in proven whitening results.<br/>
//     <em class="text-xs text-gray-400">Note: Reliable and proven formulation.</em>
//   `,
//     benefits: ["Zaguta Quality", "Reliable Results", "Proven Formula", "Consistent Whitening"],
//     sku: "ZAGUTA-GLUTATHIONE",
//     volume: "10 Sessions"
//   },
//   {
//     id: 69,
//     name: "Vita Glow Skin Whitening Cream",
//     category: "Cream",
//     brand: "Vita Glow",
//     price: 2000,
//     image: "/image/vita-glow-cream.jpg",
//     images: ["/image/vita-glow-cream-1.jpg", "/image/vita-glow-cream-2.jpg", "/image/vita-glow-cream-3.jpg", "/image/vita-glow-cream-4.jpg"],
//     description: "Skin whitening cream by Vita Glow",
//     details: `
//     <strong>Vita Glow Skin Whitening Cream</strong><br/><br/>
//     Experience effective skin lightening with Vita Glow Skin Whitening Cream. This nourishing cream is designed to improve skin tone, reduce dark spots, and enhance overall brightness with regular use, providing a radiant complexion.<br/><br/>
//     <strong>Key Active Components:</strong><br/>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Whitening Agents</li>
//       <li>Moisturizing Complex</li>
//       <li>Skin Tone Enhancers</li>
//       <li>Nourishing Ingredients</li>
//     </ul>
//     <br/>
//     <strong>Why it works:</strong>
//     <ul class="list-disc pl-5 mt-2 space-y-1">
//       <li>Improves skin tone</li>
//       <li>Reduces dark spots</li>
//       <li>Enhances overall brightness</li>
//     </ul>
//     <br/>
//     Achieve a radiant and even complexion.<br/>
//     <em class="text-xs text-gray-400">Note: For regular use in whitening regimen.</em>
//   `,
//     benefits: ["Skin Lightening", "Dark Spot Reduction", "Moisturizing", "Radiant Complexion"],
//     sku: "VITA-GLOW-CREAM",
//     volume: "50g Jar"
//   }
// ];


const PRODUCTS = [

  {
    id: 1,
    name: "Glutax 20000000GN Pico-QuadNA ReCombined White Skin Whitening Injection",
    category: "Injection",
    brand: "Glutax",
    price: 9800,
    comparePrice: 14500,
    image: "/image/glutax/gtx-20Mgn+.jpeg",
    images: [
        "/image/glutax/gtx-20Mgn+.jpeg",
        "/image/glutax/gtx-20Mgn+-2.jpeg",
        "/image/glutax/gtx-20Mgn+-3.jpeg",
        "/image/glutax/gtx-20Mgn+-4.jpeg"
    ],
    description: "Ultimate skin brightening & whitening with stem cell therapy and NAD+ for deep repair and anti-aging effects.",
    details: `
    <strong>Glutax 20000000GN Pico-QuadNA ReCombined White Skin Whitening Injection</strong><br/><br/>
    Ultimate skin brightening & whitening with advanced Pico-QuadNA technology and stem cell therapy. This medical-grade formulation combines powerful antioxidants and NAD+ for deep skin repair, detox, and visible rejuvenation.<br/><br/>
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 20,000,000 mg (20 million mg) Glutathione Complex</li>
      <li>Composition: Glutathione, Stem Cells, NAD+</li>
      <li>Formulation: Lyophilized Powder for IV Injection</li>
      <li>Packaging: 10 sessions per box</li>
      <li>Country of Origin: India</li>
      <li>Availability: In Stock</li>
    </ul>
    <br/>
    <strong>What's Included:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Box includes lyophilized powder for 10 sessions</li>
      <li>Push set (optional): 10cc syringe, butterfly, 5ml sterile water (x10)</li>
      <li>Drip set (optional): 10cc syringe, macroset, 100ml PNSS, cannula or butterfly (x10)</li>
    </ul>
    <br/>
    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultimate skin brightening & whitening</li>
      <li>Deep skin repair & anti-aging effects</li>
      <li>Powerful antioxidants for detox & glow</li>
      <li>Stem Cell Therapy for total rejuvenation</li>
      <li>Medical-grade potency for real, visible results</li>
    </ul>
    <br/>
    <em class="text-xs text-gray-400">Note: Push set and drip set available separately. Suitable for 10 sessions.</em>
    `,
    benefits: [
        "Ultimate Skin Brightening",
        "Deep Skin Repair & Anti-Aging",
        "Antioxidant Detox & Glow",
        "Stem Cell Rejuvenation",
        "Medical-Grade Potency",
        "10 Sessions Pack"
    ],
    sku: "GLUTAX-20000000GN",
    volume: "10 Sessions"
},
  {
    id: 2,
    name: "Glutax 5gs Micro Advance Glutathione 5000mg 12 Sessions Skin Whitening Injection",
    category: "Injection",
    brand: "Glutax",
    price: 12900,
    comparePrice: 18000,
    image: "/image/glutax/gtx-5gs-adv.jpeg",
    images: [
        "/image/glutax/gtx-5gs-adv.jpeg",
        "/image/glutax/gtx-5gs-adv-3.jpg",
        "/image/glutax/gtx-5gs-adv-2.png",
        "/image/glutax/gtx-5gs-adv-4.png"
    ],
    description: "Glutax 5gs Micro Advance Glutathione injections reduce hyperpigmentation, sun spots, wrinkles, acne, and melasma by eliminating toxins and free radicals.",
    details: `
    <strong>Glutax 5gs Micro Advance Glutathione 5000mg Injection</strong><br/><br/>
    Glutax 5gs Micro Advance Glutathione injections effectively reduce hyperpigmentation, sun spots, wrinkles, acne, and even melasma by eliminating toxins and free radicals from the body. It possesses powerful anti-inflammatory properties and requires regular administration for optimal results.<br/><br/>
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 5000 mg Glutathione</li>
      <li>Packaging: 12 sessions per box</li>
      <li>Composition: Pure Glutathione</li>
      <li>With UltraCell Estratto & Natural Collagen</li>
      <li>Form: Injections (IV Infusion)</li>
      <li>Grade Standard: A+</li>
      <li>Manufactured By: Switzerland</li>
      <li>Shelf Life: 24 Months</li>
      <li>Vegetarian: Yes</li>
      <li>Suitable for: Men & Women</li>
    </ul>
    <br/>
    <strong>How To Use:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Must be taken as per dosage prescribed by dermatologist</li>
      <li>Intravenous IV Infusion (Drip) once a week</li>
      <li>Consult dermatologist before taking the injection</li>
    </ul>
    <br/>
    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Reduces hyperpigmentation, sun spots & melasma</li>
      <li>Minimizes wrinkles and acne</li>
      <li>Eliminates toxins and free radicals</li>
      <li>Anti-inflammatory properties</li>
      <li>Whitens skin and lightens scars</li>
      <li>Powerful antioxidant effects</li>
    </ul>
    <br/>
    <strong>Additional Information:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Common Name: Glutax 5gs Micro Advance</li>
      <li>Product Type: Skin Whitening Injection</li>
      <li>Dose: Once a week</li>
      <li>Side Effects: No side effects</li>
      <li>Features: Skin whitening, antioxidants, scar lightening</li>
    </ul>
    <br/>
    <strong>Not Suitable For:</strong> Pregnant women or individuals with any kind of vitamin allergy.<br/><br/>
    <em class="text-xs text-gray-400">Note: PCD Pharma, Wholesale, and Third Party Manufacturing also available. Always consult a dermatologist before use.</em>
    `,
    benefits: [
        "Reduces Hyperpigmentation",
        "Eliminates Sun Spots & Melasma",
        "Minimizes Wrinkles & Acne",
        "Anti-Inflammatory Properties",
        "Detoxifies & Lightens Scars",
        "12 Sessions Pack",
        "No Side Effects",
        "Vegetarian Formula"
    ],
    sku: "GLUTAX-5GS-MICRO-12",
    volume: "12 Sessions"
},
  {
    id: 3,
    name: "Glutax 5GS Micro Cellular Ultra Whitening Injection 6 Sessions",
    category: "Injection",
    brand: "Glutax",
    price: 6800,
    comparePrice: 9900,
    image: "/image/glutax/gtx-5gs-micro.jpeg",
    images: [
        "/image/glutax/gtx-5gs-micro.jpeg",
        "/image/glutax/glutax-5gs-micro-cellular-2.jpg",
        "/image/glutax/glutax-5gs-micro-cellular-3.jpg",
        "/image/glutax/glutax-5gs-micro-cellular-4.jpg"
    ],
    description: "Safe and effective skin whitening injection with gentle ingredients suitable for sensitive and dark-colored skin.",
    details: `
    <strong>Glutax 5GS Micro Cellular Ultra Whitening Injection (6 Sessions)</strong><br/><br/>
    A safe, effective, and convenient way to whiten your skin using gentle ingredients suitable for sensitive and dark-colored skin. Contains all-natural ingredients designed to lighten skin without causing damage or irritation.<br/><br/>
    
    <strong>Complete Box Contents (6 Sessions):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Large Ampoules (6 x 5 ml): Ascorbic Acid 1500mg, Collagen 350mg</li>
      <li>Small Ampoules (6 x 2 ml): Vitamin E 300mg, Pro-vitamin B3 250mg, Pro-Vitamin B5 100mg</li>
      <li>Vials (6): Glutathione 5000mg, Alpha Lipoic acid 200mg</li>
    </ul>
    <br/>

    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 5000mg per vial</li>
      <li>Collagen Extract - 350mg</li>
      <li>Vitamin E - 300mg</li>
      <li>Ascorbic Acid - 1500mg</li>
      <li>Alpha Lipoic Acid - 200mg</li>
      <li>Pro-Vitamin B3 & B5</li>
    </ul>
    <br/>

    <strong>Manufacturing Details:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Manufactured By: Derma Medical Skin Sciences, Italy</li>
      <li>Country of Origin: Italy</li>
      <li>Storage: Keep at room temperature, avoid direct sunlight</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Detoxifies body and eliminates free radicals</li>
      <li>Whitens skin and improves complexion</li>
      <li>Shrinks large pores and reduces hyperpigmentation</li>
      <li>Cures pimples, acne, freckles, and blemishes</li>
      <li>Prevents pre-mature aging and wrinkles</li>
      <li>Improves collagen and elastin levels</li>
      <li>Protects skin from sun and environmental damage</li>
    </ul>
    <br/>

    <strong>Recommended Dosage:</strong> Intravenous IV Infusion (Drip) once a week. Consult your doctor for best results.<br/><br/>

    <strong>Not Suitable For:</strong> Men, pregnant women, breast feeders, vitamin allergies, cardiovascular patients.<br/><br/>

    <strong>Important Notes:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Results depend on individual metabolism</li>
      <li>Consult dermatologist before use</li>
      <li>PCD Pharma also available</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Always consult a dermatologist before use. Results vary by individual metabolism.</em>
    `,
    benefits: [
        "Complete 6 Session Kit",
        "Detoxifies & Eliminates Free Radicals",
        "Reduces Hyperpigmentation",
        "Shrinks Large Pores",
        "Prevents Premature Aging",
        "Italian Origin",
        "Suitable for Sensitive Skin"
    ],
    sku: "GLUTAX-5GS-CELLULAR-6S",
    volume: "6 Sessions"
},
{
    id: 4,
    name: "Glutax 10000000GX DualNA Premium Recombined Cell Formula Injection",
    category: "Injection",
    brand: "Glutax",
    price: 11500,
    comparePrice: 16000,
    image: "/image/glutax/gtx-10mgx.jpg",
    images: [
        "/image/glutax/gtx-10mgx.jpg",
        "/image/glutax/gtx-10mgx-2.jpeg",
        "/image/glutax/gtx-10mgx-3.jpg",
        "/image/glutax/gtx-10mgx-4.jpg"
    ],
    description: "Highly concentrated skin whitening injection with premium recombined stem cells, Q10, collagen, and multivitamins for enhanced brightness.",
    details: `
    <strong>Glutax 10000000GX DualNA Premium Recombined Cell Formula</strong><br/><br/>
    A highly concentrated skin whitening injection designed to enhance skin brightness with premium recombined stem cells from grape, apple, argan fruit, and rose.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 10,000,000 mg</li>
      <li>Multivitamin - 500,000 mg</li>
      <li>Premium Recombined Stem Cells - 60,000 mg</li>
      <li>Natural Collagen - 24,000 mg</li>
      <li>Epidermal Growth Factor - 16,000 mg</li>
      <li>ProEnzyme Q10 - 7,400 mg</li>
    </ul>
    <br/>

    <strong>Package Contents:</strong> 1 box containing 10 injection sets (each set includes 2 vials + 2 ampoules). Made in Italy.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brightens and smoothens skin</li>
      <li>Eliminates free radicals</li>
      <li>Increases skin elasticity</li>
      <li>Tightens pores with anti-aging effects</li>
      <li>Fades scars and reduces pigmentation</li>
      <li>Minimizes fine lines and wrinkles</li>
      <li>Prevents acne and blemishes</li>
    </ul>
    <br/>

    <strong>Usage:</strong> IM or IV. One set per week for first two months, then one set every two weeks for maintenance.<br/><br/>

    <strong>Not Recommended For:</strong> Breastfeeding women, during menstruation, vitamin allergies, cardiovascular conditions.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results vary by individual. Paraben free & organic. Consult dermatologist before use.</em>
    `,
    benefits: [
        "10 Sessions Pack",
        "Made in Italy",
        "With Stem Cells & Q10",
        "Brightens & Smoothens",
        "Anti-Aging Effects",
        "Reduces Pigmentation",
        "Fades Scars",
        "Paraben Free"
    ],
    sku: "GLUTAX-10000000GX-DUALNA",
    volume: "10 Sessions"
},
{
    id: 5,
    name: "Glutax 2000gs Advanced II Glutathione Injection",
    category: "Injection",
    brand: "Glutax",
    price: 12000,
    comparePrice: 18000,
    image: "/image/glutax/gtx-50Mgs.png",
    images: [
        "/image/glutax/gtx-50Mgs.png",
        "/image/glutax/glutax-2000gs-advanced-ii-2.jpg",
        "/image/glutax/glutax-2000gs-advanced-ii-3.jpg",
        "/image/glutax/glutax-2000gs-advanced-ii-4.jpg"
    ],
    description: "Advanced II Recombined White RNA Active Cells skin whitening injection with complete detoxification and immunity boosting benefits.",
    details: `
    <strong>Glutax 2000GS Advanced II Recombined White RNA Active Cells</strong><br/><br/>
    Unlock the power of Glutax, featuring glutathione, the body's ultimate antioxidant. Each box offers ten sessions designed to brighten your skin.<br/><br/>
    
    <strong>What's Included (10 Sessions):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>10 ampoules: Multivitamin 3500mg, Natural Collagen 800mg, Selenium 600mg</li>
      <li>10 ampoules: Recombined Stem Cell (Grape Seed, Apple, Argan Fruit, Rose Placenta Extract) 600mg</li>
      <li>10 ampoules: Pure DNA & RNA Extract 2000 mcg, Cyanocobalamine 2000mg</li>
      <li>10 vials: Glutathione 2000g, Epidermal Growth Factor 2000mg, Alpha Lipoic Acid 700mg, Kojic Acid 500mg</li>
      <li>10 vials: Glutathione 2000g, ProCoenzyme Q10 600mg, Cinnamomum Subavenium 325mg</li>
    </ul>
    <br/>

    <strong>Key Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Complete Detoxification: Supports liver, kidneys, GI tract, and intestines</li>
      <li>Enhanced Immunity: Boosts T cell lymphocytes</li>
      <li>Revitalized Skin: Glowing, youthful complexion with reduced aging signs</li>
    </ul>
    <br/>

    <strong>Expected Results:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>1 Box: Radiant glow</li>
      <li>2 Boxes: Noticeably brighter and lighter skin</li>
    </ul>
    <br/>

    <strong>How to Use:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Combine contents of ampoules and vials</li>
      <li>Administer slowly through intravenous injection</li>
      <li>Dosage: Once weekly, or every four days for accelerated results</li>
      <li>Hydrate adequately 1-2 hours prior</li>
    </ul>
    <br/>

    <strong>Key Features:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Country of Origin: Italy</li>
      <li>Paraben Free & Organic: Yes</li>
      <li>Form: Injection</li>
      <li>Usage: Skin Whitening</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Results vary based on individual usage, absorption rates, and lifestyle choices. Consistent use recommended for optimal results. Consult dermatologist before use.</em>
    `,
    benefits: [
        "10 Sessions Pack",
        "Made in Italy",
        "Complete Detoxification",
        "Boosts Immunity",
        "Revitalizes Skin",
        "With Stem Cells & Q10",
        "Paraben Free",
        "Contains Kojic Acid"
    ],
    sku: "GLUTAX-2000GS-ADVANCED-II",
    volume: "10 Sessions"
}
];


export default PRODUCTS;