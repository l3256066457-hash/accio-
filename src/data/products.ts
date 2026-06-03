export type Product = {
  slug: string;
  title: string;
  category: string; // matches Category.slug
  shortDesc: string;
  longDesc: string;
  priceFrom: number;
  priceTo: number;
  moq: number;
  leadTime: string;
  material: string;
  packing: string;
  cartonQty: number;
  image: string;
  gallery?: string[];
  tags?: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "5l-portable-electric-cooker",
    title: "Portable Korean-Style 5L Electric Cooker (Non-stick)",
    category: "small-appliances",
    shortDesc:
      "Square 5L electric cooker for dorm and small kitchens. Non-stick ceramic coating, EU/US plug optional.",
    longDesc:
      "Designed for college dorms, RVs and compact apartments. The 5-litre square body fits more food than a round pot of the same footprint. PFOA-free ceramic non-stick interior, tempered glass lid, cool-touch handles and over-heat protection.",
    priceFrom: 18.5,
    priceTo: 24.9,
    moq: 200,
    leadTime: "25–35 days",
    material: "Aluminium body + ceramic non-stick coating",
    packing: "Color box, 1 pc/box",
    cartonQty: 8,
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=1200&q=70",
    tags: ["Best Seller", "OEM Ready"],
    featured: true,
  },
  {
    slug: "usb-rechargeable-mini-fan",
    title: "USB Rechargeable Mini Desk Fan",
    category: "audio-accessories",
    shortDesc:
      "3-speed personal fan, 4000 mAh, silent brushless motor. Retail-ready packaging.",
    longDesc:
      "Pocketable, quiet, and powerful. 4000 mAh battery delivers up to 12 h of cooling at low speed. ABS housing, soft-touch buttons, foldable stand. Available in 6 colourways.",
    priceFrom: 3.2,
    priceTo: 4.6,
    moq: 500,
    leadTime: "20–28 days",
    material: "ABS + PC blades",
    packing: "Color box",
    cartonQty: 40,
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=1200&q=70",
    tags: ["High Margin"],
    featured: true,
  },
  {
    slug: "double-wall-insulated-tumbler",
    title: "20oz Double-Wall Vacuum Insulated Tumbler",
    category: "drinkware",
    shortDesc:
      "Powder-coated 18/8 stainless tumbler. Keeps cold 24 h / hot 12 h. 30+ colour options.",
    longDesc:
      "Food-grade 304 stainless steel inner and outer wall, vacuum insulated. Compatible with most cup holders. Lid options: straw, flip-top, magnetic. Laser engraving, silk-print and UV print available.",
    priceFrom: 2.85,
    priceTo: 4.2,
    moq: 1000,
    leadTime: "30–40 days",
    material: "SUS304 stainless steel",
    packing: "White box, 25 pcs/ctn",
    cartonQty: 25,
    image:
      "https://images.unsplash.com/photo-1602674809970-89ce63a3ac01?auto=format&fit=crop&w=1200&q=70",
    tags: ["OEM Ready", "Custom Logo"],
    featured: true,
  },
  {
    slug: "silicone-baking-mat-set",
    title: "Food-Grade Silicone Baking Mat (Set of 3)",
    category: "silicone-gadgets",
    shortDesc:
      "Reusable non-stick baking mats. FDA & LFGB compliant. Up to 240 °C.",
    longDesc:
      "Replace parchment forever. Glass-fibre reinforced food-grade silicone, dishwasher safe, oven safe to 240 °C. Three sizes in one set. Custom printed grid available.",
    priceFrom: 1.45,
    priceTo: 2.1,
    moq: 1000,
    leadTime: "25–32 days",
    material: "Food-grade silicone + fibreglass mesh",
    packing: "Polybag + sleeve",
    cartonQty: 80,
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1200&q=70",
    tags: ["FDA / LFGB"],
    featured: true,
  },
  {
    slug: "rotating-cheese-grater",
    title: "Rotary Drum Cheese Grater with 3 Blades",
    category: "kitchen-gadgets",
    shortDesc:
      "Hand-crank cheese & nut grater with 3 interchangeable stainless drums.",
    longDesc:
      "Sturdy ABS body with anti-slip suction base. Three stainless steel drums for fine grating, coarse grating and slicing. Easy disassembly and dishwasher safe.",
    priceFrom: 1.95,
    priceTo: 2.85,
    moq: 1000,
    leadTime: "25–30 days",
    material: "ABS + SUS430 drums",
    packing: "Color box",
    cartonQty: 60,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "stackable-pantry-containers-10pcs",
    title: "Stackable Airtight Pantry Containers (Set of 10)",
    category: "storage-containers",
    shortDesc:
      "BPA-free PET containers with flip-lock lids. Modular kitchen storage.",
    longDesc:
      "Crystal-clear PET bodies with silicone-sealed flip-lock lids. Stackable design saves shelf space. Set of 10 in graduated sizes. Includes 20 reusable labels and chalk pen.",
    priceFrom: 5.6,
    priceTo: 7.8,
    moq: 500,
    leadTime: "28–35 days",
    material: "PET body + PP lid + silicone seal",
    packing: "Color box, 1 set/box",
    cartonQty: 6,
    image:
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "silicone-garlic-press",
    title: "Roll-Style Silicone Garlic Peeler & Mincer",
    category: "kitchen-gadgets",
    shortDesc:
      "Peel & mince garlic in seconds. Food-grade silicone, dishwasher safe.",
    longDesc:
      "A simple silicone tube — drop garlic in, roll, done. No mess, no garlic smell on your fingers. Custom logo and PMS colour available.",
    priceFrom: 0.42,
    priceTo: 0.78,
    moq: 2000,
    leadTime: "20–25 days",
    material: "Food-grade silicone",
    packing: "Polybag + header card",
    cartonQty: 200,
    image:
      "https://images.unsplash.com/photo-1604908554007-90b8b5b07b34?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "tritan-sport-water-bottle-750",
    title: "750ml Tritan Sport Water Bottle with Time Marker",
    category: "drinkware",
    shortDesc:
      "BPA-free Tritan body, leak-proof flip cap, motivational time markings.",
    longDesc:
      "Lightweight Tritan body resists shattering and odours. Wide-mouth flip cap with safety lock. Motivational time markings printed on the body. Available in 12 colours; custom print MOQ 1000 pcs.",
    priceFrom: 1.85,
    priceTo: 2.6,
    moq: 1000,
    leadTime: "25–30 days",
    material: "Tritan + PP cap + silicone seal",
    packing: "Color box",
    cartonQty: 50,
    image:
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "wireless-bluetooth-earphones-tws",
    title: "TWS Wireless Bluetooth 5.3 Earphones",
    category: "audio-accessories",
    shortDesc:
      "True wireless stereo, ENC noise cancelling mic, 30 h with charging case.",
    longDesc:
      "Bluetooth 5.3, ENC dual-mic noise cancelling, touch controls. 5 h playback + 25 h via charging case. Type-C charging. Custom logo on case & retail box.",
    priceFrom: 3.9,
    priceTo: 5.5,
    moq: 500,
    leadTime: "25–32 days",
    material: "ABS + PC",
    packing: "Color box",
    cartonQty: 100,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1200&q=70",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}
