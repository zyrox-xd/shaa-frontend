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
//     brand: "Aqua Skin",
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
    image: "/image/glutax/gtx-2kgs.jpeg",
    images: [
        "/image/glutax/gtx-2kgs.jpeg",
        "/image/glutax/gtx-2kgs-2.jpeg",
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
},
{
    id: 6,
    name: "Glutax 50000000GS Advanced Glutathione Skin Whitening Injection – 10 Sessions",
    category: "Injection",
    brand: "Glutax",
    price: 13499,
    comparePrice: 17278,
    image: "/image/glutax/gtx-50mgs.jpeg",
    images: [
        "/image/glutax/gtx-50mgs.jpeg",
        "/image/glutax/gtx-50Mgs-3.jpeg",
        "/image/glutax/gtx-50mgs-3.jpg",
        "/image/glutax/gtx-50mgs-4.jpg"
    ],
    description: "Ultra-high potency Italian glutathione whitening therapy with dramatic whitening, deep detoxification, and visible anti-aging benefits.",
    details: `
    <strong>Glutax 50000000GS Advanced Glutathione Injection</strong><br/><br/>
    One of the most powerful Italian glutathione whitening therapies available. Designed for advanced users seeking dramatic whitening, deep detoxification, and visible anti-aging benefits across 10 complete sessions.<br/><br/>
    
    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultra-High Glutathione Complex</li>
      <li>Collagen Peptides & Vitamin C</li>
      <li>Alpha Lipoic Acid & Coenzyme Q10</li>
      <li>Hyaluronic Acid</li>
      <li>Multivitamins, Minerals & Amino Acids</li>
      <li>Natural Botanical Extracts</li>
    </ul>
    <br/>

    <strong>Key Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultra-high glutathione dose for maximum whitening</li>
      <li>Reduces pigmentation and dark patches</li>
      <li>Improves elasticity and firmness with collagen</li>
      <li>Supports detoxification and liver health</li>
      <li>10 full sessions of professional results</li>
      <li>Reduces oxidative stress and slows aging</li>
    </ul>
    <br/>

    <strong>Why It Works:</strong> Glutathione suppresses melanin production while detoxifying the body. Vitamin C boosts absorption and accelerates brightening results.<br/><br/>

    <strong>Features:</strong> Made in Italy • 10-Session Protocol • Professional-grade potency<br/><br/>

    <em class="text-xs text-gray-400">Note: Results vary by individual. Consult dermatologist before use.</em>
    `,
    benefits: [
        "10 Sessions Pack",
        "Made in Italy",
        "Ultra-High Potency",
        "Maximum Whitening",
        "Reduces Pigmentation",
        "Detoxifies Body"
    ],
    sku: "GLUTAX-50000000GS-ADV",
    volume: "10 Sessions"
},
{
    id: 7,
    name: "Glutax 22000000 GS Extremely Tremendous White SPF 100 UV Protection Skin Whitening Injection",
    category: "Injection",
    brand: "Glutax",
    price: 9500,
    comparePrice: 15000,
    image: "/image/glutax/gtx-22Mgs.jpeg",
    images: [
        "/image/glutax/gtx-22Mgs.jpeg",
        "/image/glutax/gtx-22Mgs-2.jpeg",
        "/image/glutax/gtx-22Mgs-3.jpeg",
        "/image/glutax/gtx-22Mgs-4.jpeg"
    ],
    description: "Extremely Tremendous White formula with SPF 100 UV protection, featuring grape seed extract, glutathione, collagen, and vitamin C for comprehensive skin whitening.",
    details: `
    <strong>Glutax 22000000 GS Extremely Tremendous White SPF 100 UV Protection Injection</strong><br/><br/>
    Advanced skin whitening injection with built-in SPF 100 UV protection. Features a powerful combination of grape seed extract, glutathione, collagen, and vitamin C for comprehensive whitening and sun protection.<br/><br/>
    
    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Grape Seed Extract</li>
      <li>Glutathione</li>
      <li>Collagen</li>
      <li>Vitamin C</li>
      <li>Alpha Lipoic Acid</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 22,000,000 GS</li>
      <li>Packaging Size: 10 vials kit</li>
      <li>Formulation: Lyophilized Powder</li>
      <li>Injection Type: IV (Drips)</li>
      <li>Country of Origin: Italy</li>
      <li>Paraben Free & Organic: Yes</li>
      <li>Gender: Unisex</li>
      <li>SPF 100 UV Protection</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Provides SPF 100 UV protection</li>
      <li>Extremely tremendous whitening effect</li>
      <li>Powerful antioxidant protection</li>
      <li>Contains grape seed extract for enhanced results</li>
      <li>Collagen for skin elasticity</li>
      <li>Vitamin C for brightening</li>
    </ul>
    <br/>

    <strong>Additional Information:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>PCD Pharma available</li>
      <li>In Stock</li>
      <li>Brand: Glutax</li>
      <li>Form: Injection (Drips)</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Consult dermatologist before use. Results may vary by individual.</em>
    `,
    benefits: [
        "10 Sessions Pack",
        "Made in Italy",
        "SPF 100 UV Protection",
        "With Grape Seed Extract",
        "Paraben Free",
        "Unisex",
        "Contains Collagen",
        "IV Drips Format"
    ],
    sku: "GLUTAX-22000000GS-SPF",
    volume: "10 Sessions"
},
{
    id: 8,
    name: "Glutax 8000000GS Ultimate Recombined White Glutathione Skin Whitening Injection",
    category: "Injection",
    brand: "Glutax",
    price: 11600,
    comparePrice: 20000,
    image: "/image/glutax/gtx-80Mgs.jpeg",
    images: [
        "/image/glutax/gtx-80Mgs.jpeg",
        "/image/glutax/gtx-80Mgs-2.jpeg",
        "/image/glutax/gtx-80Mgs-3.jpeg",
        "/image/glutax/gtx-80Mgs-4.jpeg"
    ],
    description: "Ultimate Recombined White formula with 8,000,000g glutathione, multivitamins, collagen, and growth factors for visible whitening and anti-aging results.",
    details: `
    <strong>Glutax 8000000GS Ultimate Recombined White Glutathione Injection</strong><br/><br/>
    A popular glutathione brand featuring 8,000,000 grams of glutathione combined with multivitamins, collagen, natural extracts, and growth factors that reduce signs of aging. Suitable for those wanting clearer and firmer skin complexion.<br/><br/>
    
    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultrafiltration Glutathione - 8,000,000 g</li>
      <li>Crithmum maritimum Cells CIC2 - 100,000 mg</li>
      <li>Alpha Lipoic Acid - 100,000 mg</li>
      <li>Multivitamin - 80,000 mg</li>
      <li>miRNA White Element - 50,000 mg</li>
      <li>Natural Collagen - 40,000 mg</li>
      <li>Kojic Acid - 20,000 mg</li>
      <li>Selenium - 20,000 mg</li>
      <li>SOD (Superoxide Dismutase) - 8,000 mg</li>
      <li>Epidermal Growth Factor - 5,000 mg</li>
    </ul>
    <br/>

    <strong>Package Contents:</strong> 1 Box including 10 Injection Sets (1 Injection Set = 2 ampoules + 2 vials). Expiry: April 2029.<br/><br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Country of Origin: Italy</li>
      <li>Paraben Free & Organic: Yes</li>
      <li>Form: Injection</li>
      <li>Usage: Skin Whitening</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin whitening and lightening</li>
      <li>Anti-aging effects</li>
      <li>Minimizes acne and pimples</li>
      <li>Decreases pore size</li>
      <li>Healing of scars</li>
      <li>Promotes collagen production</li>
      <li>Detoxification</li>
      <li>Lightening dark areas</li>
      <li>Protects cells from UV damage with high SOD content</li>
    </ul>
    <br/>

    <strong>Usage:</strong> Administered intravenously (IV) or intramuscular (IM). Use once weekly. Always consult your doctor.<br/><br/>

    <strong>Not Ideal For:</strong> Breast feeders, during menstruation, vitamin allergies, cardiovascular problems.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Consult healthcare professional before use.</em>
    `,
    benefits: [
        "10 Sessions Pack",
        "Made in Italy",
        "8,000,000g Glutathione",
        "Anti-Aging",
        "Reduces Acne & Scars",
        "Promotes Collagen",
        "Detoxifies",
        "UV Protection with SOD"
    ],
    sku: "GLUTAX-8000000GS-ULTIMATE",
    volume: "10 Sessions"
},
{
    id: 9,
    name: "Glutax 2000gs Recombined White Injections",
    category: "Injection",
    brand: "Glutax",
    price: 10600,
    comparePrice: 15000,
    image: "/image/glutax/gtx-2kgs-re.jpeg",
    images: [
        "/image/glutax/gtx-2kgs-re.jpeg",
        "/image/glutax/glutax-2000gs-recombined-white-2.jpg",
        "/image/glutax/glutax-2000gs-recombined-white-3.jpg",
        "/image/glutax/glutax-2000gs-recombined-white-4.jpg"
    ],
    description: "Glutax 2000gs Recombined White Injections with ultrafiltration glutathione and natural ingredients for effective skin whitening and anti-aging benefits.",
    details: `
    <strong>Glutax 2000gs Recombined White Injections</strong><br/><br/>
    An effective skin whitening solution from the famous dermatological cosmetics company. Uses natural ingredients including Extra pone Nutgrass root essence to help the body produce more collagen for brighter, healthier looking skin with less redness.<br/><br/>
    
    <strong>Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultrafiltrazione Glutathione - 2000G</li>
      <li>Multivitaminico - 3500mg</li>
      <li>Natural Collagen - 800mg</li>
      <li>Epidermal Growth Factor - 2000mg</li>
      <li>Acido Alfa Lipoico - 700mg</li>
      <li>Pro Coenzyme Q10 - 600mg</li>
      <li>Selenio - 600mg</li>
      <li>Acido Cogico - 500mg</li>
      <li>Cinnamomum Subavenium - 325mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 2000mg</li>
      <li>Country of Origin: Italy</li>
      <li>Packaging Type: Vial & Ampoule</li>
      <li>Dose: Every 4 days once</li>
      <li>Expiry Date: Dec 2028</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Lightens the skin</li>
      <li>Clear and downy skin</li>
      <li>Anti-ageing treatment</li>
      <li>Improves texture of skin</li>
      <li>Reduces scars and blemishes</li>
      <li>Eliminates acne and pimples</li>
      <li>Removes toxins from the body</li>
      <li>Reduces pigmentation and lines</li>
      <li>Removes dark circles</li>
      <li>Transforms lips and skin to pinkish and radiant</li>
      <li>No chemicals or harmful ingredients</li>
    </ul>
    <br/>

    <strong>Dosage:</strong> One injection session every 4 days for 1-2 months depending on body metabolism. One box lasts about 40 days. Then reduce to 1 session every week for maintenance.<br/><br/>

    <strong>Not Suitable For:</strong> Breast feeders, vitamin allergies, pregnant women.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Consult dermatologist before use.</em>
    `,
    benefits: [
        "Made in Italy",
        "Lightens Skin",
        "Anti-Aging",
        "Reduces Scars & Blemishes",
        "Eliminates Acne",
        "Detoxifies Body",
        "Removes Dark Circles",
        "Chemical-Free"
    ],
    sku: "GLUTAX-2000GS-RECOMBINED",
    volume: "1 Box"
},
{
    id: 10,
    name: "Glutax 2000000GX DualNA Premium Recombined Cell 10 Sessions Glutathione Skin Whitening Injection",
    category: "Injection",
    brand: "Glutax",
    price: 10500,
    comparePrice: 15000,
    image: "/image/glutax/gtx-20mgx.jpeg",
    images: [
        "/image/glutax/gtx-20mgx.jpeg",
        "/image/glutax/glutax-2000000gx-dualna-2.jpg",
        "/image/glutax/glutax-2000000gx-dualna-3.jpg",
        "/image/glutax/glutax-2000000gx-dualna-4.jpg"
    ],
    description: "High-quality glutathione skin whitening injection with DualNA Premium Recombined Cell technology for flawless, brighter, and healthier skin.",
    details: `
    <strong>Glutax 2000000GX DualNA Premium Recombined Cell Glutathione Injection</strong><br/><br/>
    A high-quality product with a high amount of important chemicals that help to give you flawless, brighter, and healthier skin. One of the most current ground-breaking innovations from the renowned cosmetics brand, featuring advanced engineering and technologies for superior results.<br/><br/>
    
    <strong>Ingredients (DNA & RNA Formula):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>DNA & RNA Glutathione - 2,000,000g</li>
      <li>DNA & RNA Multivitaminico - 250,000mg</li>
      <li>DNA & RNA Premium Recombined (Grape, Apple, Argan Fruit, Rose) - 30,000mg</li>
      <li>DNA & RNA Collagene Naturale - 12,000mg</li>
      <li>DNA & RNA Epidermal Growth Factor - 8,000mg</li>
      <li>DNA & RNA Ultra White Elements - 6,000mg</li>
      <li>DNA & RNA Selenio - 5,000mg</li>
      <li>DNA & RNA PDRN Hyal - 4,800mg</li>
      <li>DNA & RNA ProEnzyme Q10 - 3,700mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>10 Sessions Pack</li>
      <li>Country of Origin: Italy</li>
      <li>High-dose L-Glutathione formula</li>
      <li>Popular choice among spas and skin clinics worldwide</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Anti-aging & skin lightening</li>
      <li>Whiter and brighter skin</li>
      <li>Reduces pimples and acne</li>
      <li>Lightens dark spots</li>
      <li>Stimulates collagen production</li>
      <li>Detoxifies the body</li>
      <li>Even skin tone</li>
      <li>Minimizes pores</li>
      <li>Hydrates and firms skin</li>
      <li>Removes dark spots and scars</li>
      <li>Regenerates skin cells</li>
      <li>Repairs damaged skin</li>
    </ul>
    <br/>

    <strong>Why It Works:</strong> Contains high doses of L-glutathione and Vitamin C. The added oral booster helps maintain high levels of Glutathione in the body even when not undergoing treatment.<br/><br/>

    <strong>Made in Origin Country:</strong> Italy<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Consult dermatologist before use.</em>
    `,
    benefits: [
        "10 Sessions Pack",
        "Made in Italy",
        "2,000,000g Glutathione",
        "Anti-Aging",
        "Reduces Acne",
        "Stimulates Collagen",
        "Detoxifies",
        "Minimizes Pores"
    ],
    sku: "GLUTAX-2000000GX-DUALNA",
    volume: "10 Sessions"
},
{
    id: 11,
    name: "Glutax 75GX TCRP Glutathione Skin Whitening Injection - 14 Sessions",
    category: "Injection",
    brand: "Glutax",
    price: 14000,
    comparePrice: 18000,
    image: "/image/glutax/gtx-75gx.jpeg",
    images: [
        "/image/glutax/gtx-75gx.jpeg",
        "/image/glutax/gtx-75gx.jpg",
        "/image/glutax/glutax-75gx-tcrp-3.jpg",
        "/image/glutax/glutax-75gx-tcrp-4.jpg"
    ],
    description: "Next-generation Glutathione skin whitening injection with advanced Tri-Cell Repair Power (TCRP) technology for visible transformation and cellular rejuvenation.",
    details: `
    <strong>Glutax 75GX TCRP Glutathione Skin Whitening Injection</strong><br/><br/>
    A next-generation Glutathione skin whitening injection infused with advanced Tri-Cell Repair Power (TCRP) technology. Formulated for visible transformation, it works deep within skin layers to reduce pigmentation, reverse aging signs, and restore natural glow with medical-grade skin science.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>14 Sessions Treatment Cycle</li>
      <li>Advanced TCRP Technology for faster skin repair</li>
      <li>High Glutathione strength</li>
      <li>Made in Italy</li>
      <li>Safe, certified formulation</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Intense skin brightening by targeting melanin production</li>
      <li>Reduces dark spots and hyperpigmentation</li>
      <li>Youth-boosting effects - firms skin and minimizes fine lines</li>
      <li>Deep hydration support for soft, supple skin</li>
      <li>Detoxification at cellular level</li>
      <li>Accelerates skin repair and collagen regeneration</li>
      <li>Protection from environmental damage</li>
    </ul>
    <br/>

    <strong>Dosage & Usage:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Recommended: 1 injection per week (IV or IM, under medical supervision)</li>
      <li>Treatment Cycle: 14 sessions for full visible results</li>
      <li>Maintenance: 1 injection every 15-20 days</li>
    </ul>
    <br/>

    <strong>Why It Stands Out:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Advanced TCRP technology for faster absorption</li>
      <li>Designed for Indian skin tones and climate</li>
      <li>No harmful preservatives or additives</li>
      <li>Trusted by dermatologists and skin clinics worldwide</li>
    </ul>
    <br/>

    <strong>Pro Tip:</strong> Drink plenty of water, follow a nutrient-rich diet, and avoid direct sun exposure during treatment for best results.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Consult dermatologist before use.</em>
    `,
    benefits: [
        "14 Sessions Pack",
        "Made in Italy",
        "TCRP Technology",
        "Intense Brightening",
        "Reduces Dark Spots",
        "Anti-Aging",
        "Deep Hydration",
        "Cellular Detox"
    ],
    sku: "GLUTAX-75GX-TCRP-14",
    volume: "14 Sessions"
},
{
    id: 12,
    name: "Glutax 30000000gs Extremely Tremendous White Glutathione Skin Whitening Injection",
    category: "Injection",
    brand: "Glutax",
    price: 12000,
    comparePrice: 17000,
    image: "/image/glutax/gtx-30mgs-1.jpeg",
    images: [
        "/image/glutax/gtx-30mgs-1.jpeg",
        "/image/glutax/gtx-30mgs.jpeg",
        "/image/glutax/gtx-30mgs-3.jpeg",
        "/image/glutax/gtx-30mgs-4.jpeg"
    ],
    description: "High quality, high dose glutathione skin whitening injection with Nano Glutathione technology for a brighter, more even-toned complexion.",
    details: `
    <strong>Glutax 30000000gs Extremely Tremendous White</strong><br/><br/>
    The most high quality, high dose Glutathione skin whitening injection on the market today. Considered one of the most reliable L-Glutathione injections, it helps maintain Nano l-Glutathione at high levels in your body even when not undergoing active treatment.<br/><br/>
    
    <strong>Ingredients (Per 100ml Fiale):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Acido Alfa Lipico - 200,000mg</li>
      <li>Growth Factor - 100,000mg</li>
      <li>Multivitaminco - 100,000mg</li>
      <li>Collagen Naturale - 50,000mg</li>
      <li>Selenio - 50,000mg</li>
      <li>Acido Codico - 50,000mg</li>
      <li>Pro Co Enzyme Q10 - 10,000mg</li>
      <li>RNA HA - 10,000mg</li>
    </ul>
    <br/>

    <strong>Ingredients (30 Vials):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Nano Glutathione - 30,000,000mg</li>
      <li>Grape Seed Extract - 100,000mg</li>
      <li>Pearl Extract - 100,000mg</li>
      <li>RNA White Cell - 50,000mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Country of Origin: Italy</li>
      <li>Form: IV/Infusion</li>
      <li>Nano Glutathione technology</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin whitening and brightening</li>
      <li>Anti-aging effects - helps stem skin cells</li>
      <li>Reduces acne, pimples and minimizes pores</li>
      <li>Antioxidant and detoxifier</li>
      <li>Anti-wrinkle properties</li>
      <li>Heals scars and lightens dark spots</li>
      <li>Reduces pigmentation from sun exposure</li>
      <li>Stimulates collagen production</li>
      <li>Nourishes and firms the skin</li>
      <li>Enhances metabolism and boosts immune system</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: The result depends on individual metabolism. Consult dermatologist before use.</em>
    `,
    benefits: [
        "Made in Italy",
        "30,000,000mg Nano Glutathione",
        "With Grape Seed & Pearl Extract",
        "Skin Brightening",
        "Anti-Aging",
        "Reduces Pigmentation",
        "Detoxifies",
        "Stimulates Collagen"
    ],
    sku: "GLUTAX-30000000GS-EXTREME",
    volume: "1 Box"
},
{
    id: 13,
    name: "Aqua Skin Veniscy 286 TriNa Pico Cell Glutathione Injection",
    category: "Injection",
    brand: "Aqua Skin",
    price: 12000,
    comparePrice: 16000,
    image: "/image/aqua/asv-286-2.jpeg",
    images: [
        "/image/aqua/asv-286-2.jpeg",
        "/image/aqua/asv-286-4.jpeg",
        "/image/aqua/asv-286-5.jpeg",
        "/image/aqua/asv-286-3.jpeg"
    ],
    description: "Swiss-made glutathione injection with TriNa Pico Cell technology for powerful skin lightening, anti-aging, and deep hydration.",
    details: `
    <strong>Aqua Skin Veniscy 286 TriNa Pico Cell Glutathione Injection</strong><br/><br/>
    A premium Swiss-made glutathione injection featuring advanced TriNa Pico Cell technology for maximum absorption and visible results. Designed to deliver powerful skin lightening, anti-aging benefits, and deep hydration at the cellular level.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione – Master antioxidant that reduces melanin production</li>
      <li>Vitamin C – Enhances glutathione effects and boosts collagen</li>
      <li>Collagen – Increases skin firmness and elasticity</li>
      <li>Hyaluronic Acid – Locks in moisture for lasting hydration</li>
      <li>Antioxidants – Neutralize free radicals and prevent aging</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brand: Aqua Skin</li>
      <li>Origin: Made in Switzerland</li>
      <li>Packaging: Vial in Box</li>
      <li>Administration: IV injection</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Powerful skin lightening and even skin tone</li>
      <li>Anti-aging – minimizes wrinkles and fine lines</li>
      <li>Deep hydration for soft, supple skin</li>
      <li>Stimulates collagen for skin renewal</li>
      <li>Reduces acne, scars, and pigmentation</li>
      <li>Detoxifies body at cellular level</li>
    </ul>
    <br/>

    <strong>How It Works:</strong> Administered intravenously (IV) for maximum absorption, allowing powerful antioxidants and nutrients to work at the cellular level for faster, more effective results than oral supplements.<br/><br/>

    <strong>Who Can Benefit:</strong> Individuals seeking lighter skin tone, those with dark spots or melasma, people with wrinkles or sagging skin, those with dry skin needing hydration, and anyone with acne scars.<br/><br/>

    <strong>Usage Instructions:</strong> Consult a dermatologist. Administered via IV by certified professional. Follow recommended treatment schedule based on skin goals. Post-treatment: avoid sun exposure, use sunscreen, maintain healthy skincare routine.<br/><br/>

    <strong>Safety:</strong> Generally safe with clinically tested ingredients. Possible mild redness or swelling at injection site (temporary), slight dryness, or rare allergic reactions.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use.</em>
    `,
    benefits: [
        "Made in Switzerland",
        "Powerful Skin Lightening",
        "Anti-Aging Effects",
        "Deep Hydration",
        "Reduces Acne & Scars",
        "Stimulates Collagen",
        "With Hyaluronic Acid",
        "IV Administration"
    ],
    sku: "AQUA-VENISCY-286",
    volume: "1 Box"
},
{
    id: 14,
    name: "Aqua Skin Veniscy 368 Glutathione Injection",
    category: "Injection",
    brand: "Aqua Skin",
    price: 12500,
    comparePrice: 15000,
    image: "/image/aqua/asv-368-2.jpeg",
    images: [
        "/image/aqua/asv-368-2.jpeg",
        "/image/aqua/asv-368-5.jpeg",
        "/image/aqua/asv-368-4.jpeg",
        "/image/aqua/asv-368-3.jpeg"
    ],
    description: "Swiss-formulated luxury skin whitening and anti-aging solution with QuadNA Pico-Cell NAD+ and Quecto-Glutathione for cellular-level transformation.",
    details: `
    <strong>Aqua Skin Veniscy 368 Glutathione Injection</strong><br/><br/>
    A Swiss-formulated luxury skin whitening and anti-aging solution infused with QuadNA Pico-Cell NAD+, Quecto-Glutathione, and 14+ powerful ingredients. Works at the cellular level to brighten, rejuvenate, and deeply hydrate your skin.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Quecto-Glutathione:</strong> Ultra-high dose antioxidant for detoxification and skin lightening</li>
      <li><strong>QuadNA Pico-Cell NAD+:</strong> Enhances cell repair and energy, slows visible aging</li>
      <li><strong>Coenzyme Q10 (ProQ10):</strong> Protects from UV damage, stimulates collagen</li>
      <li><strong>DMAE:</strong> Lifts, firms, and redefines facial contours</li>
      <li><strong>Nonapeptide:</strong> Reduces fine lines by relaxing facial muscles</li>
      <li><strong>2-in-1 HydraLift Complex:</strong> Vitamin C, Hyaluronic Acid, Collagen, EGF, Matrixyl 35000</li>
      <li><strong>Selenium:</strong> Supports skin resilience and immune defense</li>
      <li><strong>Blu-Cell & Multivitamin Complex:</strong> Fights oxidative stress, boosts skin renewal</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brand: Aqua Skin</li>
      <li>Origin: Made in Switzerland</li>
      <li>Formulation: Premium injectable</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brightens and evens out skin tone</li>
      <li>Reduces pigmentation, dark spots, and dullness</li>
      <li>Smoothens fine lines and firms sagging skin</li>
      <li>Deeply hydrates and naturally plumps skin</li>
      <li>Boosts cellular energy and repair mechanisms</li>
      <li>Enhances skin texture, elasticity, and luminosity</li>
      <li>Protects against pollution and environmental stress</li>
      <li>Delivers long-lasting anti-aging effects</li>
    </ul>
    <br/>

    <strong>Recommended Dosage:</strong> 1 injection every 3–7 days under certified medical supervision. Minimum 5–10 sessions advised for noticeable results. Administer via IV infusion for best results.<br/><br/>

    <em class="text-xs text-gray-400">Note: Consistency is key for long-term results. Results may vary. Consult dermatologist before use.</em>
    `,
    benefits: [
        "Made in Switzerland",
        "With NAD+ & CoQ10",
        "Ultra-High Glutathione",
        "Brightens Skin Tone",
        "Reduces Pigmentation",
        "Anti-Aging Effects",
        "Deep Hydration",
        "Cellular Repair"
    ],
    sku: "AQUA-VENISCY-368",
    volume: "1 Box"
},
{
    id: 15,
    name: "Aqua Skin Veniscy 999 Glutathione Injection",
    category: "Injection",
    brand: "Aqua Skin",
    price: 12500,
    comparePrice: 15000,
    image: "/image/aqua/asv-999.jpeg",
    images: [
        "/image/aqua/asv-999.jpeg",
        "/image/aqua/asv-999-2.jpeg",
        "/image/aqua/asv-999-3.jpeg",
        "/image/aqua/asv-999-4.jpeg"
    ],
    description: "Advanced skin whitening and anti-aging therapy with high-dose glutathione, vitamins, and natural extracts for brighter, smoother, and younger-looking skin.",
    details: `
    <strong>Aqua Skin Veniscy 999 – Advanced Glutathione Skin Whitening and Anti-Aging Therapy</strong><br/><br/>
    A scientifically advanced skin therapy that combines the power of glutathione, vitamins, peptides, and natural extracts to deliver visible results. Designed for those who want radiant skin, improved texture, and long-lasting anti-aging benefits. Works at a deeper level to repair, rejuvenate, and restore skin cells.<br/><br/>
    
    <strong>Premium Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Glutathione:</strong> 29,800,000 mg – Master antioxidant that reduces pigmentation and detoxifies</li>
      <li><strong>Vitamin C (L-Ascorbic Acid):</strong> 990,000 mg – Boosts brightness and collagen production</li>
      <li><strong>Hyaluronic Acid:</strong> 195,750 mg – Deep hydration for plump, smooth skin</li>
      <li><strong>Alpha Lipoic Acid:</strong> 198,250 mg – Powerful antioxidant for skin renewal</li>
      <li><strong>Natural Collagen Extract:</strong> 190,000 mg – Improves elasticity and firmness</li>
      <li><strong>Epidermal Growth Factor:</strong> 109,750 mg – Stimulates new cell growth</li>
      <li>Vegetal Placenta & Kojic Acid – Target stubborn pigmentation</li>
      <li>Multivitamins, Selenium & Copper Peptide – Nourishment and protection</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brand: Aqua Skin</li>
      <li>Origin: Made in Switzerland</li>
      <li>Formulation: Premium injectable</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Advanced skin whitening – reduces dark spots and evens tone</li>
      <li>Anti-aging support – minimizes wrinkles and fine lines</li>
      <li>Deep skin repair – restores elasticity with collagen</li>
      <li>Fades pigmentation, acne scars, and discoloration</li>
      <li>Cellular protection against environmental damage</li>
      <li>Deep hydration for plump, smooth skin</li>
      <li>Visible transformation with regular use</li>
    </ul>
    <br/>

    <strong>How to Use:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Mix: 1 vial of 10 ml liquid with 2 vials of lyophilized powder</li>
      <li>Frequency: Once or twice per week as recommended by professional</li>
      <li>Storage: Cool, dry place below 28°C</li>
    </ul>
    <br/>

    <strong>Note:</strong> For professional use under medical guidance only.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use.</em>
    `,
    benefits: [
        "Made in Switzerland",
        "29.8M Glutathione",
        "Advanced Whitening",
        "Anti-Aging",
        "Reduces Pigmentation",
        "With Hyaluronic Acid",
        "Deep Hydration",
        "Cellular Repair"
    ],
    sku: "AQUA-VENISCY-999",
    volume: "1 Box"
},
{
    id: 16,
    name: "Aqua Skin Veniscy 188 Glutathione Injection",
    category: "Injection",
    brand: "Aqua Skin",
    price: 10000,
    comparePrice: 15000,
    image: "/image/aqua/asv-188.jpg",
    images: [
        "/image/aqua/asv-188.jpg",
        "/image/aqua/asv-188-2.jpeg",
        "/image/aqua/asv-188-3.jpeg",
        "/image/aqua/asv-188-4.jpeg"
    ],
    description: "TriNa Pico Cell Glutathione injection for effortless skin lightening, anti-aging benefits, and youthful complexion through simple IV infusion.",
    details: `
    <strong>Aqua Skin Veniscy 188 TriNa Pico Glutathione Injection</strong><br/><br/>
    A cutting-edge treatment that offers an effortless way to achieve a lighter and more youthful complexion without surgery. Infused with powerful skin-lightening effects, this injection revitalizes your skin through a simple IV infusion process, giving you a radiant appearance effortlessly.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brand: Aqua Skin</li>
      <li>Origin: Made in Switzerland</li>
      <li>TriNa Pico Cell Technology</li>
      <li>Safe, effective, and side-effect free</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brightens and lightens skin for fair, radiant glow</li>
      <li>Anti-aging benefits – reduces signs of aging</li>
      <li>Promotes skin cell renewal</li>
      <li>Enhances skin texture and hydration</li>
      <li>Increases skin tightness and firmness</li>
      <li>Repairs and rejuvenates damaged skin</li>
      <li>Minimizes wrinkles and fine lines</li>
      <li>Clears acne for flawless complexion</li>
      <li>Reveals youthful radiance</li>
    </ul>
    <br/>

    <strong>Why It Works:</strong> Administered via IV, allowing glutathione to be absorbed directly into your bloodstream for maximum effect. Some formulations include natural antioxidants like vitamin C for enhanced effectiveness.<br/><br/>

    <strong>FAQs:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>How often?</strong> Frequency varies based on skin goals – consult a professional</li>
      <li><strong>Suitable for all skin types?</strong> Yes, safe for all skin types</li>
      <li><strong>What to expect?</strong> Quick IV treatment with minimal discomfort</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use.</em>
    `,
    benefits: [
        "Made in Switzerland",
        "Brightens & Lightens",
        "Anti-Aging",
        "Skin Cell Renewal",
        "Improves Texture",
        "Hydrates Skin",
        "Reduces Wrinkles",
        "Clears Acne"
    ],
    sku: "AQUA-VENISCY-188",
    volume: "1 Box"
},
{
    id: 17,
    name: "Aqua Skin F30 Diamond Ultra White Glutathione Skin Whitening Injection – 30 Sessions",
    category: "Injection",
    brand: "Aqua Skin",
    price: 9500,
    comparePrice: 14500,
    image: "/image/aqua/asd-f30.jpg",
    images: [
        "/image/aqua/asd-f30.jpg",
        "/image/aqua/asd-f30-2.jpeg",
        "/image/aqua/asd-f30-3.jpeg",
        "/image/aqua/asd-f30-4.jpeg"
    ],
    description: "High-dose 30,000mg glutathione injection for skin whitening and anti-aging with 24hr UV protection and deep hydration.",
    details: `
    <strong>Aqua Skin F30 Diamond Ultra White Glutathione Injection</strong><br/><br/>
    The most refined Ultra Whitening Glutathione 30,000 mg skin whitening injection for Skin Whitening and Anti-Ageing Treatment. Made in Switzerland and guaranteed genuine.<br/><br/>
    
    <strong>Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultrafiltration Skin Tone Structure - 30 Vials</li>
      <li>Glutathione - 1000mg per vial (30,000mg total)</li>
      <li>Ascorbic Acids - 1250mg</li>
      <li>Alpha Lipoic Acid - 850mg</li>
      <li>Amino Acids - 1250mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>30 Sessions Treatment</li>
      <li>Origin: Switzerland</li>
      <li>24hr UV Protection</li>
      <li>24hr Hydrating</li>
      <li>To be administered by registered nurse</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin whitening and firming</li>
      <li>Anti-aging - reduces fine lines and wrinkles</li>
      <li>24hr UV protection against sun damage</li>
      <li>Deep hydration for soft, smooth skin</li>
      <li>Renews and repairs damaged skin</li>
      <li>Minimizes dark areas and scars</li>
      <li>Detoxifies and purifies skin</li>
      <li>Prevents acne and blemishes</li>
      <li>Boosts collagen production and improves elasticity</li>
    </ul>
    <br/>

    <strong>Recommended Dosage:</strong> Mix 1-2 vials with 5-10 ml sterile water. Administer via IV Push up to 3 times weekly. Typical course: 1-2 injections weekly for up to 2 months.<br/><br/>

    <strong>Not Suitable For:</strong> Breast feeders, during menstruation, vitamin allergies, cardiovascular problems.<br/><br/>

    <strong>FAQ:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>How often?</strong> 1-2 times weekly for up to 2 months</li>
      <li><strong>Results?</strong> Visible improvements after few weeks of regular use</li>
      <li><strong>Administration?</strong> By registered nurse only</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Results vary by individual. Consult dermatologist before use.</em>
    `,
    benefits: [
        "30 Sessions Pack",
        "Made in Switzerland",
        "30,000mg Glutathione",
        "24hr UV Protection",
        "Deep Hydration",
        "Anti-Aging",
        "Detoxifies",
        "With ALA & Vitamin C"
    ],
    sku: "AQUA-DIAMOND-F30",
    volume: "30 Sessions"
},
{
    id: 18,
    name: "Aqua Skin Brilliant Diamond Max Aquaism Sparkling White 10 Sessions Skin Whitening Injection",
    category: "Injection",
    brand: "Aqua Skin",
    price: 9500,
    comparePrice: 14500,
    image: "/image/aqua/asd-max.png",
    images: [
        "/image/aqua/asd-max.png",
        "/image/aqua/asd-max-2.jpg",
        "/image/aqua/asd-max-3.jpg",
        "/image/aqua/asd-max-4.jpg"
    ],
    description: "Premium 10-session glutathione whitening course with Aquaism Sparkling White technology for visible clarity, smoothness, and radiant brightness.",
    details: `
    <strong>Aqua Skin Brilliant Diamond Max Aquaism Sparkling White Injection</strong><br/><br/>
    A premium 10-session glutathione whitening course designed for visible clarity, smoothness, and radiant brightness in a shorter treatment span. Powered by Aquaism Sparkling White technology, this formulation delivers effective whitening while preserving skin health.<br/><br/>
    
    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultrafiltration Complexion Composition</li>
      <li>High-Dose Glutathione</li>
      <li>Pro-Coenzyme Q10</li>
      <li>Fibroblast Growth Factor (FGF)</li>
      <li>Natural Collagen Extract</li>
      <li>Hyaluronic Acid</li>
      <li>Epidermal Growth Factor (EGF)</li>
      <li>Kojic Acid</li>
      <li>Multivitamin Complex</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>10 Sessions Treatment</li>
      <li>Aquaism Sparkling White Technology</li>
      <li>Enhanced cellular absorption</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Whitens complexion with visible results in 10 sessions</li>
      <li>Hydrates and smooths skin for luminous glow</li>
      <li>Reduces melasma, pigmentation, and dark spots</li>
      <li>Improves elasticity and delays early aging signs</li>
      <li>Detoxifies body and supports immunity</li>
      <li>Fast yet effective whitening solution</li>
    </ul>
    <br/>

    <strong>How It Works:</strong> Glutathione and Kojic Acid regulate melanin for clearer skin tone. Collagen, EGF, and hyaluronic acid restore firmness and hydration.<br/><br/>

    <strong>FAQ:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>How many sessions?</strong> 10 sessions included</li>
      <li><strong>Side effects?</strong> Minimal - mild fatigue or redness at injection site</li>
      <li><strong>Combine with Vitamin C?</strong> Yes, enhances antioxidant protection</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use.</em>
    `,
    benefits: [
        "10 Sessions Pack",
        "Aquaism Technology",
        "Fast Visible Results",
        "Reduces Pigmentation",
        "With EGF & FGF",
        "Collagen & Hyaluronic Acid",
        "Detoxifies",
        "Improves Elasticity"
    ],
    sku: "AQUA-BRILLIANT-DIAMOND-10",
    volume: "10 Sessions"
},
{
    id: 19,
    name: "Aqua Skin Fine Gold DualNa Cell Complex Glutathione Skin Whitening Injection",
    category: "Injection",
    brand: "Aqua Skin",
    price: 8800,
    comparePrice: 12000,
    image: "/image/aqua/asfg-70k.jpg",
    images: [
        "/image/aqua/asv-fine-gold-1.jpeg",
        "/image/aqua/asv-fine-gold-2.jpeg",
        "/image/aqua/asv-fine-gold-3.jpeg",
        "/image/aqua/asv-fine-gold-4.jpeg"
    ],
    description: "DualNa Cell Complex whitening injection with glutathione, FGF, and AHA to reduce pigmentation and give glowing, brighter, acne-free skin.",
    details: `
    <strong>Aqua Skin Fine Gold DualNa Cell Complex Glutathione Injection</strong><br/><br/>
    A premium skin treatment that enhances your skin and gives glowing, brighter results. Rich in Glutathione which helps in reducing pigmentation and gives glowing, white skin with no pimples and acne. Suitable for all skin types.<br/><br/>
    
    <strong>Ingredients (24 Vials):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>DualNA Glutathione - 70,000mg</li>
      <li>DualNA Pro-Coenzyme Q10 - 8,000mg</li>
      <li>DualNA FGF (Fibroblast Growth Factor) - 3,500mg</li>
      <li>DualNA Natural Collagen Extract - 2,800mg</li>
      <li>DualNA Polypodium Leucotomos - 1,500mg</li>
      <li>DualNA Heterotrimeric Protein - 1,300mg</li>
      <li>DualNA Alpha Lipoic Acid (ALA) - 1,200mg</li>
      <li>DualNA DMAE - 900mg</li>
      <li>DualNA Alpha-Hydroxy Acid (AHA) - 900mg</li>
      <li>DualNA Grape Seed Extract - 850mg</li>
      <li>DualNA Beta-Hydroxy Acid (Salicylic Acid) - 800mg</li>
      <li>DualNA Selenium - 450mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>24 Sessions Treatment</li>
      <li>Origin: Made in Switzerland</li>
      <li>DualNa Cell Complex Technology</li>
      <li>Suitable for all skin types</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Reduces pigmentation and dark spots</li>
      <li>Protects against free radical damage</li>
      <li>Get glowing, smooth, and softened skin</li>
      <li>Acne and pimple-free skin</li>
      <li>Whitens skin and lightens scars</li>
      <li>Improves skin complexion</li>
      <li>Removes excess free radicals</li>
    </ul>
    <br/>

    <strong>Why It Works:</strong> DualNA AHA works on reducing pigmentation on the face. Rich glutathione content helps achieve white, clear skin while protecting against environmental damage.<br/><br/>

    <strong>Availability:</strong> Cash on Delivery (COD) available with Free Shipping in India. 100% authentic products - verify through barcode.<br/><br/>

    <em class="text-xs text-gray-400">Note: The result depends on individual metabolism. Consult dermatologist before use.</em>
    `,
    benefits: [
        "Made in Switzerland",
        "24 Sessions Pack",
        "70,000mg Glutathione",
        "Reduces Pigmentation",
        "With FGF & CoQ10",
        "Acne-Free Skin",
        "Contains AHA & BHA",
        "Lightens Scars"
    ],
    sku: "AQUA-FINE-GOLD-24",
    volume: "24 Sessions"
},
{
    id: 20,
    name: "Aqua Skin Veniscy 8 Octa Strength Whitening Injection",
    category: "Injection",
    brand: "Aqua Skin",
    price: 8800,
    comparePrice: 12000,
    image: "/image/aqua/asv-8.png",
    images: [
        "/image/aqua/asv-8.jpeg",
        "/image/aqua/asv-8-2.jpeg",
        "/image/aqua/asv-8-3.jpeg",
        "/image/aqua/asv-8-4.jpeg"
    ],
    description: "Leading-edge skin whitening treatment with DualNa Octa Strength technology, formulated in Switzerland for luminous, youthful skin.",
    details: `
    <strong>Aqua Skin Veniscy 8 DualNa Octa Strength Skin Whitening Injection</strong><br/><br/>
    A leading-edge skin whitening treatment formulated in Switzerland and developed by Skinnic Laboratory. With high dosage of L-Glutathione and Vitamin C, this premium injection stands as the ultimate choice for those seeking the most effective L-Glutathione formula for luminous, youthful skin.<br/><br/>
    
    <strong>Rich Ingredient Profile:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Veniscy Complex:</strong> High-grade Glutathione, Nonapeptide, Coenzyme Q10, Selenium</li>
      <li><strong>Collagen & Hyaluronic Acid:</strong> For skin elasticity and deep hydration</li>
      <li><strong>EGF & Alpha Lipoic Acid:</strong> Promote skin regeneration, reduce oxidative stress</li>
      <li><strong>Matrixyl & Kojic Acid:</strong> Target fine lines and skin discoloration</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Origin: Made in Switzerland</li>
      <li>DualNa Octa Strength Technology</li>
      <li>Developed by Skinnic Laboratory</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Revitalizes skin with natural collagen and hyaluronic acid</li>
      <li>Brightens complexion by reducing melanin production</li>
      <li>Anti-aging - diminishes wrinkles and fine lines</li>
      <li>Evens skin tone, reduces dark spots and hyperpigmentation</li>
      <li>Enhances overall skin health with vitamins, peptides, and minerals</li>
    </ul>
    <br/>

    <strong>Recommended Usage:</strong> Administer one Intravenous IV Infusion (Drip) weekly. Consult your dermatologist to tailor treatment to individual needs.<br/><br/>

    <strong>FAQ:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Results timeline?</strong> Noticeable improvements within first few weeks of consistent use</li>
      <li><strong>Suitable for all skin types?</strong> Yes, but consult healthcare professional for compatibility</li>
      <li><strong>Helps with acne scars?</strong> Yes, reduces scars and pigmentation</li>
      <li><strong>Side effects?</strong> Generally well-tolerated, discuss with doctor</li>
      <li><strong>Storage?</strong> Keep at room temperature, away from direct sunlight</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use.</em>
    `,
    benefits: [
        "Made in Switzerland",
        "Octa Strength",
        "With Glutathione & Vitamin C",
        "Anti-Aging",
        "Reduces Pigmentation",
        "Deep Hydration",
        "Contains EGF & CoQ10",
        "Evens Skin Tone"
    ],
    sku: "AQUA-VENISCY-8-OCTA",
    volume: "1 Box"
},
{
    id: 21,
    name: "Aqua Skin Veniscy 30 Dualna Pico Cell Absorption Skin Whitening Injection",
    category: "Injection",
    brand: "Aqua Skin",
    price: 12000,
    comparePrice: 18000,
    image: "/image/aqua/asv-30.jpg",
    images: [
        "/image/aqua/asv-30.jpg",
        "/image/aqua/asv-30-2.jpeg",
        "/image/aqua/asv-30-3.jpeg",
        "/image/aqua/asv-30-4.jpeg"
    ],
    description: "Dualna Pico Cell Absorption technology for extreme skin whitening, anti-aging, and cellular regeneration with high-dose Opti-Glutathione.",
    details: `
    <strong>Aqua Skin Veniscy 30 Dualna Pico Cell Absorption Extremely Ultimate Injection</strong><br/><br/>
    Targets dark spots and acne reduction while enhancing skin whitening with anti-aging benefits. Works to neutralize harmful free radicals and combat oxidative stress, promoting glowing and youthful skin.<br/><br/>
    
    <strong>Complete Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Veniscy DualNA Pico-Cell Complex:</strong></li>
      <li>Opti-Glutathione - 6,500,000 mg</li>
      <li>Coenzyme Pro Q10 - 800,000 mg</li>
      <li>DMAE - 67,000 mg</li>
      <li>Nonapeptide - 23,000 mg</li>
      <li>Selenium - 20,000 mg</li>
      <li><strong>Aqua Skin DualNA Pico-Cell Complex:</strong></li>
      <li>L-Ascorbic Acid - 200,000 mg</li>
      <li>Multivitamin - 180,000 mg</li>
      <li>Natural Collagen Extract - 80,000 mg</li>
      <li>Hyaluronic Acid - 72,550 mg</li>
      <li>EGF - 52,000 mg</li>
      <li>Alpha Lipoic Acid - 48,250 mg</li>
      <li>Vegetal Placenta - 43,975 mg</li>
      <li>Matrixyl 9000 - 36,500 mg</li>
      <li>Copper Peptide - 23,000 mg</li>
      <li>Kojic Acid - 22,500 mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Dualna Pico Cell Absorption Technology</li>
      <li>Origin: Made in Switzerland</li>
      <li>Extremely Ultimate formula</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Whitening and lightening of skin tone</li>
      <li>Anti-aging effects</li>
      <li>Repair of damaged skin</li>
      <li>Regeneration of new cells</li>
      <li>Enhances skin texture</li>
      <li>Moisturizes the skin</li>
      <li>Minimizes wrinkles and fine lines</li>
      <li>Fair and radiant skin tone</li>
      <li>Eliminates skin blemishes</li>
      <li>Lifted and tighter skin</li>
      <li>Youthful looking skin</li>
    </ul>
    <br/>

    <strong>Availability:</strong> Available at Magicpotions India with fastest shipping and Cash On Delivery option.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Consult dermatologist before use.</em>
    `,
    benefits: [
        "Made in Switzerland",
        "6.5M Opti-Glutathione",
        "With CoQ10 & DMAE",
        "Anti-Aging",
        "Reduces Dark Spots",
        "Cell Regeneration",
        "Deep Hydration",
        "Eliminates Blemishes"
    ],
    sku: "AQUA-VENISCY-30-PICO",
    volume: "1 Box"
},
{
    id: 22,
    name: "Dr James Glutathione 1500mg Skin Whitening Injection - 10 Sessions",
    category: "Injection",
    brand: "Dr James",
    price: 11000,
    comparePrice: 15000,
    image: "/image/drjames/dr-james-10sessions.jpg",
    images: [
        "/image/drjames/dr-james-10sessions.jpg",
        "/image/drjames/drjames-1500-2.jpeg",
        "/image/drjames/drjames-1500-3.jpeg",
        "/image/drjames/drjames-1500-4.jpeg"
    ],
    description: "Trusted glutathione injection with 1500mg glutathione and 1000mg Vitamin C for effective skin whitening, anti-aging, and immune support.",
    details: `
    <strong>Dr James Glutathione 1500mg Skin Whitening Injection</strong><br/><br/>
    A trusted and popular glutathione injection known for excellent results. Features selective high-quality ingredients with 1500mg glutathione and 1000mg Vitamin C. Vitamin C further increases glutathione levels, making it one of the best antioxidants on the market. FDA-approved and proven safe through numerous tests and expert evaluations.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 1500mg</li>
      <li>Vitamin C - 1000mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>10 Sessions Treatment</li>
      <li>FDA-approved</li>
      <li>Expiry Date: Dec 2028</li>
      <li>Clinically tested for safety</li>
    </ul>
    <br/>

    <strong>How It Whitens Skin:</strong> Glutathione inhibits Tyrosine Kinase enzyme, preventing melanin production. This reduces hyperpigmentation, dark spots, and overall skin lightening. A study on 16 patients over 6 weeks showed significant improvement in skin tone.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin whitening and lightening</li>
      <li>Prevents acne outbreaks and pimples</li>
      <li>Boosts immune system against infections</li>
      <li>Powerful antioxidant prevents oxidative stress</li>
      <li>Anti-aging - boosts collagen production</li>
      <li>Reduces hyperpigmentation and dark spots</li>
    </ul>
    <br/>

    <strong>Recommended Usage:</strong> As prescribed by dermatologist. Typically administered via IV. Consult your doctor for proper dosage and schedule.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Consult dermatologist before use.</em>
    `,
    benefits: [
        "10 Sessions Pack",
        "1500mg Glutathione",
        "With Vitamin C 1000mg",
        "FDA Approved",
        "Skin Whitening",
        "Anti-Aging",
        "Boosts Immunity",
        "Prevents Acne"
    ],
    sku: "DRJAMES-GLUTA-1500-10S",
    volume: "10 Sessions"
},
{
    id: 23,
    name: "Dr James Glutathione Skin Whitening Cream",
    category: "Cream",
    brand: "Dr James",
    price: 2000,
    comparePrice: 2999,
    image: "/image/drjames/dr-james-cream.jpg",
    images: [
        "/image/drjames/dr-james-cream.jpg",
        "/image/drjames/dr-james-cream-2.jpeg",
        "/image/drjames/dr-james-cream-3.jpeg",
        "/image/drjames/dr-james-cream-4.jpeg"
    ],
    description: "Authentic skin whitening cream with glutathione, vitamins, and natural extracts for topical skin lightening and care.",
    details: `
    <strong>Dr James Glutathione Skin Whitening Cream</strong><br/><br/>
    Using a cream is the most authentic way of caring for your skin. Dr James Skin Whitening Cream whitens your skin through topical application of the best skincare ingredients. Formulated with a powerful blend of antioxidants, vitamins, and natural extracts for visible results.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione</li>
      <li>Vitamin C & E</li>
      <li>Rosehips</li>
      <li>Alpha Lipoic Acid</li>
      <li>Bearberry (Arbutin)</li>
      <li>Milk Proteins</li>
      <li>Zinc Oxide</li>
      <li>Kojic Dipalmate</li>
      <li>Niacinamide</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Topical application</li>
      <li>Authentic skincare formula</li>
      <li>With natural extracts</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Whitens skin through topical application</li>
      <li>Reduces pigmentation and dark spots</li>
      <li>Provides antioxidant protection</li>
      <li>Nourishes and hydrates skin</li>
      <li>Safe for daily use</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Apply desired amount to clean skin, gently massage until absorbed. Use regularly for best results. For external use only.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use if you have sensitive skin.</em>
    `,
    benefits: [
        "Topical Whitening",
        "With Glutathione",
        "Vitamin C & E",
        "Contains Arbutin",
        "Kojic Dipalmate",
        "Niacinamide",
        "Natural Extracts",
        "Daily Use"
    ],
    sku: "DRJAMES-CREAM-WHITE",
    volume: "1 Tube"
},
{
    id: 24,
    name: "Glowtiqa Advance Whitening Cream",
    category: "Cream",
    brand: "Glowtiqa Paris",
    price: 2000,
    comparePrice: 2999,
    image: "/image/glowtiqa/glowtiqa-advance.jpg",
    images: [
        "/image/glowtiqa/glowtiqa-advance.jpg",
        "/image/glowtiqa/advance-cream-2.jpeg",
        "/image/glowtiqa/advance-cream-3.jpeg",
        "/image/glowtiqa/advance-cream-4.jpeg"
    ],
    description: "Advanced French formulation whitening cream with TA Stem Cells to target dark spots, hyperpigmentation, and uneven skin tone.",
    details: `
    <strong>Glowtiqa Advance Whitening Cream</strong><br/><br/>
    Experience the power of advanced French formulation. Our signature whitening cream is specifically designed to target dark spots, hyperpigmentation, and uneven skin tone while nourishing your skin deep within.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Enriched with powerful TA Stem Cells</li>
      <li>Visibly reduces acne marks and dark circles</li>
      <li>Restores natural glow and skin elasticity</li>
      <li>Weight: 30 Grams</li>
      <li>Dermatologist tested – safe for all skin types including sensitive skin</li>
      <li>Paraben-free and cruelty-free</li>
    </ul>
    <br/>

    <strong>How to Use (Nighttime Routine):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Cleanse:</strong> Wash face thoroughly (preferably with Whitening Soap) and pat dry</li>
      <li><strong>Apply:</strong> Take a small amount of the cream</li>
      <li><strong>Massage:</strong> Gently massage into skin using upward circular motions until fully absorbed</li>
      <li><strong>Rest:</strong> Leave on overnight for active ingredients to repair skin</li>
    </ul>
    <br/>

    <strong>The Science Behind the Glow:</strong><br/>
    Unlike traditional bleaching creams that harm the skin barrier, Glowtiqa Paris utilizes advanced TA Stem Cell technology. This formulation penetrates the dermis to inhibit excess melanin production at the source. By promoting cellular turnover, it lifts pigmented cells and replaces them with fresh, healthy skin for a natural, luminous complexion without harsh chemicals.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Targets dark spots and hyperpigmentation</li>
      <li>Reduces acne marks and dark circles</li>
      <li>Restores natural glow and elasticity</li>
      <li>French advanced formulation</li>
      <li>Safe for sensitive skin</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: For external use only. Avoid contact with eyes. Discontinue if irritation occurs.</em>
    `,
    benefits: [
        "French Formulation",
        "TA Stem Cells",
        "Reduces Dark Spots",
        "Removes Acne Marks",
        "Reduces Dark Circles",
        "Restores Glow & Elasticity",
        "Dermatologist Tested",
        "Paraben Free"
    ],
    sku: "GLOWTIQA-ADVANCE-CREAM-30G",
    volume: "30 Grams"
},
{
    id: 25,
    name: "Glowtiqa Skin Whitening Soap",
    category: "Soap",
    brand: "Glowtiqa Paris",
    price: 600,
    comparePrice: 999,
    image: "/image/glowtiqa/glowtiqa-soap.jpg",
    images: [
        "/image/glowtiqa/glowtiqa-soap.jpg",
        "/image/glowtiqa/whitening-soap-2.jpeg",
        "/image/glowtiqa/whitening-soap-3.jpeg",
        "/image/glowtiqa/whitening-soap-4.jpeg"
    ],
    description: "Premium skin whitening soap with gentle micro-exfoliation to remove dead skin cells, clear pores, and visibly lighten dark spots.",
    details: `
    <strong>Glowtiqa Skin Whitening Soap</strong><br/><br/>
    Reveal a brighter, cleaner complexion with every wash. Our premium skin whitening soap provides gentle micro-exfoliation to remove dead skin cells, clear congested pores, and visibly lighten dark spots.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Deeply cleanses and purifies pores</li>
      <li>Gently exfoliates dull, dead skin</li>
      <li>Controls acne-causing bacteria</li>
      <li>Weight: 135 Grams</li>
      <li>Rating: 4.7/5</li>
    </ul>
    <br/>

    <strong>How to Use (Daily on Face & Body):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Lather:</strong> Wet soap and rub between hands to create rich lather</li>
      <li><strong>Apply:</strong> Gently massage lather onto face and body</li>
      <li><strong>Wait:</strong> Leave on for 1-2 minutes for active ingredients to penetrate</li>
      <li><strong>Rinse:</strong> Rinse thoroughly with lukewarm water and pat dry</li>
    </ul>
    <br/>

    <strong>The Perfect Primer:</strong> Standard body washes can leave a film that blocks expensive creams. Glowtiqa Skin Whitening Soap is formulated as the ultimate primer. Its micro-exfoliating action clears barriers, balancing skin pH so that Advance Whitening Cream can penetrate deeper and work up to 3x faster.<br/><br/>

    <strong>Pro Tip:</strong> For maximum whitening results, always follow up with our Advance Whitening Cream immediately after washing.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brightens complexion with every wash</li>
      <li>Removes dead skin cells and impurities</li>
      <li>Clears congested pores</li>
      <li>Controls acne-causing bacteria</li>
      <li>Prepares skin for better cream absorption</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: For external use only. Avoid contact with eyes. Discontinue if irritation occurs.</em>
    `,
    benefits: [
        "Brightens Complexion",
        "Micro-Exfoliation",
        "Clears Pores",
        "Controls Acne Bacteria",
        "Removes Dead Skin",
        "Prepares Skin for Creams",
        "135g Bar",
        "Daily Use"
    ],
    sku: "GLOWTIQA-WHITE-SOAP-135G",
    volume: "135 Grams"
},
{
    id: 26,
    name: "Glowtiqa Whitening Booster 1200MG",
    category: "Supplement",
    brand: "Glowtiqa Paris",
    price: 3000,
    comparePrice: 4499,
    image: "/image/glowtiqa/glowtiqa-capsule.jpeg",
    images: [
        "/image/glowtiqa/glowtiqa-capsule.jpeg",
        "/image/glowtiqa/whitening-booster-2.jpeg",
        "/image/glowtiqa/whitening-booster-3.jpeg",
        "/image/glowtiqa/whitening-booster-4.jpeg"
    ],
    description: "Potent 1200MG dietary supplement crafted in Paris to strengthen, protect, and brighten complexion by targeting hyperpigmentation at the cellular level.",
    details: `
    <strong>Glowtiqa Whitening Booster 1200MG</strong><br/><br/>
    Unlock your skin's natural radiance from within. This potent 1200MG dietary supplement is meticulously crafted in Paris to strengthen, protect, and brighten your complexion by targeting hyperpigmentation at the cellular level.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Promotes full-body skin brightening and evens out tone</li>
      <li>Strengthens and protects the skin's natural barrier</li>
      <li>Rich in antioxidants to fight premature aging</li>
      <li>Contents: 60 Premium Capsules</li>
      <li>Rating: 4.8/5</li>
    </ul>
    <br/>

    <strong>Recommended Dosage:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Dosage:</strong> Take 1 to 2 capsules daily</li>
      <li><strong>Timing:</strong> Best consumed in the morning, preferably after breakfast</li>
      <li><strong>Hydration:</strong> Drink plenty of water throughout the day to aid absorption and flush out toxins</li>
      <li><strong>Routine:</strong> For ultimate results, pair internally with our Whitening Cream and Soap</li>
    </ul>
    <br/>

    <strong>The Power of 1200MG:</strong> Topical creams work on the surface, but true radiance starts from within. The Whitening Booster 1200MG delivers high-grade antioxidants directly to your bloodstream. It actively inhibits the enzyme tyrosinase (responsible for melanin production), helping to fade dark spots, sun damage, and general discoloration uniformly across your entire body.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Full-body skin brightening and even tone</li>
      <li>Strengthens skin's natural barrier</li>
      <li>Fights premature aging with antioxidants</li>
      <li>Fades dark spots and sun damage</li>
      <li>Inhibits melanin production at cellular level</li>
    </ul>
    <br/>

    <strong>Glowtiqa Guarantee:</strong> 100% safe, meticulously tested, and formulated without harmful chemicals.<br/><br/>

    <em class="text-xs text-gray-400">Note: For best results, use consistently. Consult physician before use if pregnant, nursing, or have medical conditions.</em>
    `,
    benefits: [
        "Full-Body Brightening",
        "1200MG Potency",
        "60 Capsules",
        "Antioxidant Rich",
        "Inhibits Melanin",
        "Fades Dark Spots",
        "Strengthens Skin Barrier",
        "Made in Paris"
    ],
    sku: "GLOWTIQA-BOOSTER-1200-60C",
    volume: "60 Capsules"
},
{
    id: 27,
    name: "Advanced Vita Glow Skin Whitening Night Cream",
    category: "Cream",
    brand: "Vita Glow",
    price: 2000,
    comparePrice: 2999,
    image: "/image/vitaglow/adv-vita-glow-night.jpg",
    images: [
        "/image/vitaglow/adv-vita-glow-night.jpg",
        "/image/vitaglow/night-cream-2.jpeg",
        "/image/vitaglow/night-cream-3.jpeg",
        "/image/vitaglow/night-cream-4.jpeg"
    ],
    description: "Special formula night cream with natural ingredients, vitamins, and kojic acid to whiten skin while you sleep, remove blemishes, and reverse aging.",
    details: `
    <strong>Advanced Vita Glow Skin Whitening Night Cream</strong><br/><br/>
    A night cream is the best kind of cream to use if you want to whiten your skin amidst your busy schedule. Apply the cream and go to sleep for it to take effect and whiten your skin as you sleep. This special formula consists of natural ingredients like citric acid, ionized water, and micronutrients including vitamins A, B, B3, and E, all of which whiten your skin while maintaining pH balance. Works on all skin types – dark, dusky, or oily.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Citric Acid & Ionized Water</li>
      <li>Vitamins A, B, B3, E</li>
      <li>Kojic Acid (from mushroom fungi) – inhibits melanin production</li>
      <li>Natural Oils & Natural Wax</li>
      <li>Glutathione</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Works on all three skin layers: Epidermis, Dermis, Hypodermis</li>
      <li>Acts as a sunscreen lotion – prevents UV damage, skin tan, sunburn</li>
      <li>Removes all types of skin blemishes</li>
      <li>Unbranded version available for resellers (launch under own brand)</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Whitens skin to fair and pink complexion</li>
      <li>Reverses aging signs</li>
      <li>Removes wrinkles, freckles, dark spots, age spots, fine lines, dark circles</li>
      <li>Clears acne and scars</li>
      <li>Provides radiant glow</li>
      <li>Protects from sun damage and UV rays</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Apply desired amount to clean face and neck before bedtime. Gently massage until absorbed. Leave on overnight. Rinse in the morning.<br/><br/>

    <strong>Important Note:</strong> When freshly manufactured, cream has light green color. Due to oxidation and temperature changes, color may shift to mild beige. This is normal due to Glutathione content and does not affect efficacy or safety.<br/><br/>

    <em class="text-xs text-gray-400">Note: For external use only. Discontinue if irritation occurs.</em>
    `,
    benefits: [
        "Night Cream Action",
        "Contains Kojic Acid",
        "Vitamins A, B, B3, E",
        "Removes Blemishes",
        "Anti-Aging",
        "Sun Protection",
        "Works on All Skin Types",
        "Reseller Available"
    ],
    sku: "VITA-NIGHT-CREAM",
    volume: "1 Jar"
},
{
    id: 28,
    name: "Vita Glow Skin Whitening Night Cream",
    category: "Cream",
    brand: "Vita Glow",
    price: 2000,
    comparePrice: 2999,
    image: "/image/vitaglow/vita-glow-cream.jpg",
    images: [
        "/image/vitaglow/vita-glow-cream.jpg",
        "/image/vitaglow/vita-glow-night-cream-2.jpeg",
        "/image/vitaglow/vita-glow-night-cream-3.jpeg",
        "/image/vitaglow/vita-glow-night-cream-4.jpeg"
    ],
    description: "Ultimate night cream for glowing skin that whitens, improves texture, prevents wrinkles, heals sunburn, prevents acne, and moisturizes deeply.",
    details: `
    <strong>Vita Glow Skin Whitening Night Cream</strong><br/><br/>
    Your ultimate solution for glowing skin. Infused with all the good things our skin craves, this product transforms your skin in just seven days. A night cream that hydrates and whitens simultaneously.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Vitamin C</li>
      <li>Avocado & Jojoba Oil</li>
      <li>Kojic Acid</li>
      <li>Green Tea Extracts</li>
      <li>Mulberry Extract</li>
      <li>Glutathione</li>
    </ul>
    <br/>

    <strong>Key Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Whitens skin:</strong> Turns brown, rough skin into pink, plumped, fresh skin</li>
      <li><strong>Improves texture:</strong> Kojic acid gradually enhances skin smoothness</li>
      <li><strong>Prevents fine lines & wrinkles:</strong> Anti-aging with green tea extracts</li>
      <li><strong>Protects & heals from sunburn:</strong> Vitamin C defends against UV damage</li>
      <li><strong>Prevents acne:</strong> Mulberry extract, glutathione, and avocado treat and prevent breakouts</li>
      <li><strong>Moisturizes deeply:</strong> Complete hydration for lasting radiance</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Apply to clean face and neck before bedtime. Gently massage until absorbed. Leave on overnight. Rinse in the morning.<br/><br/>

    <strong>2026 Official Upgrade:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Upgraded QR-based security seal – scan for instant authentication</li>
      <li>Direct printing on jar (front & back) – premium look, harder to duplicate</li>
      <li>Slightly improved texture & fragrance to identify original product</li>
      <li>Quality and results remain the same – always amazing</li>
    </ul>
    <br/>

    <strong>Important Note:</strong> When freshly manufactured, cream has light green color. Due to oxidation and temperature changes, color may shift to mild beige. This is normal due to Glutathione content and does not affect efficacy or safety.<br/><br/>

    <strong>Reseller Opportunity:</strong> Unbranded version available – launch under your own brand name.<br/><br/>

    <em class="text-xs text-gray-400">Note: For external use only. Discontinue if irritation occurs.</em>
    `,
    benefits: [
        "Whitens Skin",
        "Improves Texture",
        "Anti-Aging",
        "Heals Sunburn",
        "Prevents Acne",
        "Deep Moisturization",
        "7-Day Transformation",
        "QR Authentication"
    ],
    sku: "VITA-GLOW-NIGHT-CREAM",
    volume: "1 Jar"
},
{
    id: 29,
    name: "Vita Glow Glutathione Skin Whitening Soap",
    category: "Soap",
    brand: "Vita Glow",
    price: 600,
    comparePrice: 999,
    image: "/image/vitaglow/vita-glow-soap.jpg",
    images: [
        "/image/vitaglow/vita-glow-soap.jpg",
        "/image/vitaglow/vita-glow-soap-2.jpeg",
        "/image/vitaglow/vita-glow-soap-3.jpeg",
        "/image/vitaglow/vita-glow-soap-4.jpeg"
    ],
    description: "Natural glutathione skin whitening soap that removes dead skin cells, moisturizes, reduces hyperpigmentation, and reveals fresh, young-looking skin.",
    details: `
    <strong>Vita Glow Glutathione Skin Whitening Soap</strong><br/><br/>
    A product totally made of natural resources. Used directly on skin, it has faster effect on removing all dead skin cells, revealing fresh young-looking skin. It moisturizes the body in a balanced manner, giving users glowing skin. It removes hyperpigmentation, which is a basic cause of dark circles and scars, making your face clear and youthful.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>All-natural ingredients with zero side effects</li>
      <li>Contains Glutathione and Vitamin C – key antioxidants</li>
      <li>Works on all three layers of skin</li>
      <li>Perfect alternative for those who can't take pills</li>
      <li>Whitens skin during daily bath routine</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Removes dead skin cells and rejuvenates with new cells</li>
      <li>Acts as a moisturizer to prevent drying and skin damage</li>
      <li>Removes melanin pigments – prevents hyperpigmentation</li>
      <li>Reduces dark circles, dark spots, acne, wrinkles, freckles, scars</li>
      <li>Keeps skin clear, spotless, soft, smooth, shiny with radiant glow</li>
      <li>Nourishes skin for healthy, glowing appearance</li>
      <li>Adds charisma and competitive edge in career and personal life</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Use as regular bath soap. Lather generously on wet skin, massage gently, then rinse. For best results, use daily.<br/><br/>

    <em class="text-xs text-gray-400">Note: For external use only. Avoid contact with eyes. Discontinue if irritation occurs.</em>
    `,
    benefits: [
        "Natural Ingredients",
        "Removes Dead Skin",
        "Moisturizes",
        "Reduces Hyperpigmentation",
        "Removes Dark Spots & Acne",
        "Glutathione & Vitamin C",
        "Glowing Skin",
        "Daily Bath Routine"
    ],
    sku: "VITA-GLOW-SOAP",
    volume: "1 Bar"
},
{
    id: 30,
    name: "Miracle Dermal Genesis NAD+ Renewal Complex Glutathione Injection",
    category: "Injection",
    brand: "Miracle Dermal Genesis",
    price: 15650,
    comparePrice: 20000,
    image: "/image/miracle-dermal-genesis.jpeg",
    images: [
        "/image/miracle-dermal-genesis.jpeg",
        "/image/miracle-dermal-genesis/nad-renewal-2.jpeg",
        "/image/miracle-dermal-genesis/nad-renewal-3.jpeg",
        "/image/miracle-dermal-genesis/nad-renewal-4.jpeg"
    ],
    description: "Professional skin rejuvenation injection with NAD+ renewal technology, glutathione, and stem cell extracts to restore skin energy, repair damage, and revive youthful radiance.",
    details: `
    <strong>Miracle Dermal Genesis NAD+ Renewal Complex Glutathione Injection</strong><br/><br/>
    A new generation professional skin rejuvenation solution from Hess & Co. Laboratories. Designed to work at the cellular level, this advanced formulation uses NAD+ renewal technology to help restore skin energy, repair daily damage, and revive youthful radiance from within.<br/><br/>
    
    <strong>Product Contains:</strong> 1 Box - 6 Sessions<br/><br/>

    <strong>Key Ingredients & Complexes:</strong><br/>
    
    <strong>Whitening & Growth Factor Complex:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pico-sized Kojic Acid – 12,500 mg</li>
      <li>Pico-sized Ascorbic Acid (Vitamin C) – 8,950 mg</li>
      <li>Pico-sized White Cell Enhancer – 3,900 mg</li>
      <li>Pico-sized Epidermal Growth Factor (EGF) – 8,500 mg</li>
    </ul>
    
    <strong>Antioxidant & Glutathione Complex:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pico-sized Coenzyme Q10 – 90,000 mg</li>
      <li>Pico-sized Concentrated Glutathione – 500,000 mg</li>
      <li>Pico-sized Bakuchiol Extract – 5,000 mg</li>
      <li>Pico-sized Leontopodium Alpinum Callus Culture Extract – 8,000 mg</li>
    </ul>
    
    <strong>Marine & NAD+ Cellular Complex:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pico-sized Marine Cellular Extracts – 5,000 mg</li>
      <li>Pico-sized Phyto White Tripeptide – 2,500 mg</li>
      <li>Pico-sized NAD+ (Nicotinamide Adenine Dinucleotide) – 3,000 mg</li>
    </ul>
    
    <strong>Stem Cell & Vitamin Support:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pico-sized Cyanocobalamin (Vitamin B12) – 8,000 mg</li>
      <li>Pico-sized Tomato Stem Cell Extract – 3,800 mg</li>
    </ul>
    
    <strong>Collagen & Longevity Complex:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pico-sized Resveratrol – 8,000 mg</li>
      <li>Pico-sized Peptide Collagen – 6,380 mg</li>
    </ul>
    
    <strong>Detox & Melanin Control Complex:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pico-sized Multivitamin – 3,000 mg</li>
      <li>Pico-sized Thioctic Acid – 5,000 mg</li>
      <li>Pico-sized SLC24A5 Inhibitor – 12,000 mg</li>
    </ul>
    <br/>

    <strong>Key Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Cellular Skin Renewal – supports natural repair and regeneration</li>
      <li>Improved Texture & Smoothness – softer, refined, even skin</li>
      <li>Enhanced Firmness & Elasticity – supports youthful structure</li>
      <li>Radiance Boost – revives dull, tired skin</li>
      <li>Stronger Skin Defense – protects against pollution, UV stress, oxidative damage</li>
      <li>Whitening – reduces melanin formation, brightens tone</li>
      <li>Detoxification & Anti-aging – powerful antioxidant protection</li>
      <li>DNA repair & cellular energy with NAD+ technology</li>
    </ul>
    <br/>

    <strong>How It Works:</strong> Works deep within the skin's cellular matrix, supporting internal energy renewal and natural repair mechanisms. With regular professional application, skin appears clearer, firmer, smoother, and more luminous.<br/><br/>

    <strong>Certifications:</strong> FDA Approved, GMP Approved, FSSAI Approved, Quality Certified.<br/><br/>

    <strong>Availability:</strong> Home Delivery All Over India. Use coupon code GET100 for additional ₹100 discount (Today Only).<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use.</em>
    `,
    benefits: [
        "6 Sessions Pack",
        "NAD+ Renewal Technology",
        "500,000mg Glutathione",
        "With EGF & CoQ10",
        "Stem Cell Extracts",
        "Anti-Aging",
        "Whitening & Detox",
        "FDA & GMP Approved"
    ],
    sku: "PTR000516",
    volume: "6 Sessions"
}
];


export default PRODUCTS;