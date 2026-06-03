export type Category = {
  slug: string;
  name: string;
  blurb: string;
  cover: string; // warm-tone editorial kitchen imagery
};

export const categories: Category[] = [
  {
    slug: "kitchen-gadgets",
    name: "Kitchen Tools & Gadgets",
    blurb:
      "Everyday utensils, peelers, graters, presses — engineered for daily professional use.",
    cover:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "drinkware",
    name: "Drinkware & Thermos",
    blurb:
      "Plastic & stainless bottles, tumblers and thermos flasks — #1 in plastic drinkware.",
    cover:
      "https://images.unsplash.com/photo-1602674809970-89ce63a3ac01?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "storage-containers",
    name: "Storage & Organisers",
    blurb:
      "Stackable food containers, pantry bins and modular kitchen organisers.",
    cover:
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "small-appliances",
    name: "Small Kitchen Appliances",
    blurb:
      "Compact cookers, choppers and electric tools for dorm, RV and pro pantries.",
    cover:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "silicone-gadgets",
    name: "Silicone Gadgets & Molds",
    blurb:
      "Food-grade silicone moulds, mats and baking accessories — flexible MOQ.",
    cover:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "audio-accessories",
    name: "Audio & Lifestyle Accessories",
    blurb:
      "Headphones, earphones and lifestyle electronics for retail packaging.",
    cover:
      "https://images.unsplash.com/photo-1518443895914-1b3375fde9b3?auto=format&fit=crop&w=1400&q=80",
  },
];
