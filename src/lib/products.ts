export interface FAQ {
  question: string;
  answer: string;
}

export interface FrequentlyBoughtItem {
  productId: string;
  name: string;
  originalPrice: number;
  price: number;
  image: string;
  variants?: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  details: string[];
  offer?: string;
  availability?: string;
  type?: string;
  categories?: string[];
  tags?: string[];
  soldRecently?: number;
  reviewCount?: number;
  rating?: number;
  benefits?: string[];
  storage?: string[];
  howToUse?: string[];
  faqs?: FAQ[];
  frequentlyBoughtTogether?: FrequentlyBoughtItem[];
}

export const products: Product[] = [
  {
    id: "vintage-tea-set",
    name: "Classic Herbal Blend",
    price: 24.99,
    description: "A signature blend of mountain herbs and dried botanicals for a refreshing experience.",
    category: "Herbal Teas",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4586d517?q=80&w=800&auto=format&fit=crop",
    offer: "Best Seller",
    availability: "In Stock",
    type: "Herbal Tea",
    categories: ["Herbal Teas", "Wellness", "Shop All"],
    tags: ["Organic", "Caffeine-Free", "Antioxidants", "Mountain Herbs"],
    soldRecently: 8,
    reviewCount: 14,
    rating: 5,
    details: [
      "100% Organic ingredients",
      "Hand-picked from high altitude regions",
      "Rich in antioxidants",
      "Caffeine-free"
    ],
    benefits: [
      "Boosts immunity with natural antioxidants",
      "Supports digestive health and gut balance",
      "Calms the nervous system — ideal before sleep",
      "Anti-inflammatory properties from mountain botanicals",
      "Caffeine-free, safe for all ages"
    ],
    storage: [
      "Store in a cool, dry place away from direct sunlight",
      "Keep in an airtight container after opening",
      "Best consumed within 12 months of purchase",
      "Do not refrigerate — moisture reduces shelf life"
    ],
    howToUse: [
      "Add 1 teaspoon of blend to a cup of hot water (90°C)",
      "Steep for 5–7 minutes for full flavour",
      "Strain and enjoy plain or with a dash of honey",
      "Best consumed in the morning or before bed",
      "Can be brewed cold — steep overnight in the fridge"
    ],
    faqs: [
      { question: "Is this blend safe during pregnancy?", answer: "We recommend consulting your doctor before consuming herbal blends during pregnancy." },
      { question: "Can children drink this?", answer: "Yes, it is caffeine-free and safe for children above 5 years in small quantities." },
      { question: "How many cups per day is recommended?", answer: "1–3 cups per day is ideal for most adults." },
      { question: "Is it certified organic?", answer: "Yes, all ingredients are sourced from certified organic farms." }
    ]
  },
  {
    id: "mountain-honey",
    name: "Gift Box — Honey, Bee Pollen & Spoon",
    price: 1200,
    originalPrice: 1500,
    description: "Shiva Organic's Handpicked Superfood Gift Box for all Festive Occasions. This gift box contains: Lemon Infused Honey 250g, Mustard Bee Pollen 125g, Jamun Honey 250g, and a Sheesham Wood Honey Dipper. Celebrate and enhance a healthy festival with your loved ones.",
    category: "Healthy Foods",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop",
    offer: "Save 20%",
    availability: "In Stock",
    type: "Gift Box",
    categories: ["Bee Pollen", "Gift Hampers", "Herbs", "Infused Honey", "Natural Nectar Honey", "Shop All", "Shop Honey Tasters"],
    tags: ["Bee Pollen", "Combo", "Gift Box", "GST 5%", "Honey", "Infused Honey", "Tasters"],
    soldRecently: 6,
    reviewCount: 2,
    rating: 5,
    details: [
      "Lemon Infused Honey — 250g",
      "Mustard Bee Pollen — 125g",
      "Jamun Honey — 250g",
      "Sheesham Wood Honey Dipper — 1 piece",
      "100% natural, unprocessed honey",
      "Ethically sourced from wild hives"
    ],
    benefits: [
      "Honey boosts immunity and has anti-bacterial, anti-inflammatory properties",
      "100% natural, unprocessed and ethically sourced",
      "Supports digestive health and improves skin health",
      "Mustard Bee Pollen is a nutrition bomb — 22 essential amino acids",
      "Great source of protein, vitamins and minerals",
      "Bee Pollen boosts immunity, fertility, endurance and muscle recovery",
      "The combination of bee pollen and honey is an elixir for physical and mental health"
    ],
    storage: [
      "Store honey at room temperature away from direct sunlight",
      "Do not refrigerate — honey crystallises in cold temperatures",
      "Keep bee pollen in an airtight container in a cool, dry place",
      "Consume bee pollen within 6 months of opening for best potency",
      "Honey has an indefinite shelf life if stored properly"
    ],
    howToUse: [
      "Take one spoonful of honey every morning on an empty stomach",
      "Mix bee pollen into smoothies, yogurt, or sprinkle over fruit",
      "Combine a teaspoon of bee pollen with honey for a daily elixir",
      "Use the wooden dipper to drizzle honey over teas, toast, or desserts",
      "Start with a small amount of bee pollen to test for any sensitivity"
    ],
    faqs: [
      { question: "Is this a good festive gift?", answer: "Absolutely — it is beautifully packaged and contains premium superfoods, making it perfect for any festive occasion." },
      { question: "Is the honey raw and unprocessed?", answer: "Yes, all honey in this box is 100% raw, unprocessed and cold-extracted to preserve natural enzymes." },
      { question: "Can people with pollen allergies consume bee pollen?", answer: "People with pollen allergies should consult a doctor before consuming bee pollen." },
      { question: "What is the shelf life of the products?", answer: "Honey has an indefinite shelf life. Bee pollen is best consumed within 12 months of the production date." },
      { question: "Is GST included in the price?", answer: "GST at 5% is applicable and included in the displayed price." }
    ],
    frequentlyBoughtTogether: [
      {
        productId: "mountain-honey",
        name: "Gift Box — Honey, Bee Pollen & Spoon",
        originalPrice: 1500,
        price: 1200,
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop"
      },
      {
        productId: "positive-millets",
        name: "5 Positive Millets — Unpolished Whole Grain",
        originalPrice: 950,
        price: 850,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
        variants: ["5×500g", "5×900g"]
      }
    ]
  },
  {
    id: "vintage-canvas-bag",
    name: "Heritage Canvas Tote",
    price: 45.00,
    description: "Durable vintage-style canvas tote bag, perfect for daily errands or market visits.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    availability: "In Stock",
    type: "Accessory",
    categories: ["Accessories", "Shop All"],
    tags: ["Canvas", "Vintage", "Tote", "Eco-Friendly"],
    soldRecently: 3,
    reviewCount: 7,
    rating: 4,
    details: [
      "Heavyweight 100% cotton canvas",
      "Reinforced stitching",
      "Classic vintage brown finish",
      "Internal pocket for small items"
    ],
    benefits: [
      "Eco-friendly alternative to plastic bags",
      "Durable enough for daily market use",
      "Spacious interior fits groceries and essentials",
      "Reinforced handles for heavy loads"
    ],
    storage: [
      "Machine washable at 30°C",
      "Air dry to maintain shape",
      "Store folded in a dry place"
    ],
    howToUse: [
      "Use for grocery shopping, farmers markets, or daily errands",
      "Internal pocket keeps small items organised",
      "Folds flat for easy storage when not in use"
    ],
    faqs: [
      { question: "Is it machine washable?", answer: "Yes, wash at 30°C and air dry." },
      { question: "What is the weight capacity?", answer: "The reinforced stitching supports up to 10kg comfortably." }
    ]
  },
  {
    id: "artisanal-ceramic-mug",
    name: "Artisanal Stone Mug",
    price: 32.00,
    description: "Hand-thrown ceramic mug with a unique speckled glaze, designed for the perfect tea ritual.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop",
    offer: "New Arrival",
    availability: "In Stock",
    type: "Homeware",
    categories: ["Home", "Shop All"],
    tags: ["Ceramic", "Handmade", "Artisan", "Mug"],
    soldRecently: 5,
    reviewCount: 9,
    rating: 5,
    details: [
      "Hand-thrown by local artisans",
      "Dishwasher and microwave safe",
      "Large 12oz capacity",
      "Ergonomic handle design"
    ],
    benefits: [
      "Retains heat longer than standard ceramic",
      "Unique speckled glaze — no two mugs are identical",
      "Ergonomic handle reduces wrist strain",
      "Food-safe glaze with no harmful chemicals"
    ],
    storage: [
      "Dishwasher safe — top rack recommended",
      "Avoid sudden temperature changes to prevent cracking",
      "Stack carefully to avoid chipping the glaze"
    ],
    howToUse: [
      "Pre-warm the mug with hot water before brewing for best results",
      "Ideal for teas, coffees, and warm tonics",
      "Microwave safe for reheating"
    ],
    faqs: [
      { question: "Is each mug unique?", answer: "Yes — hand-thrown and hand-glazed, so each piece has its own character." },
      { question: "Is it microwave safe?", answer: "Yes, fully microwave and dishwasher safe." }
    ]
  },
  {
    id: "dried-lavender-bundle",
    name: "Dried Lavender Bundle",
    price: 12.00,
    description: "Fragrant bundle of dried lavender flowers, perfect for home aromatherapy or decoration.",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1591871937453-3efae5979ef2?q=80&w=800&auto=format&fit=crop",
    offer: "Limited Stock",
    availability: "Low Stock",
    type: "Wellness",
    categories: ["Wellness", "Shop All"],
    tags: ["Lavender", "Aromatherapy", "Natural", "Dried Flowers"],
    soldRecently: 11,
    reviewCount: 5,
    rating: 5,
    details: [
      "Naturally dried",
      "Long-lasting fragrance",
      "Grown without pesticides",
      "Perfect for sachets"
    ],
    benefits: [
      "Promotes relaxation and reduces anxiety",
      "Natural insect repellent for wardrobes",
      "Long-lasting fragrance — up to 12 months",
      "Pesticide-free and safe for homes with children and pets"
    ],
    storage: [
      "Hang upside down in a cool, dry place to preserve fragrance",
      "Avoid direct sunlight to prevent colour fading",
      "Place in a breathable linen bag for drawer sachets"
    ],
    howToUse: [
      "Place in wardrobes or drawers as a natural freshener",
      "Use in a vase as a decorative dried arrangement",
      "Crumble flowers into a sachet for pillows to aid sleep",
      "Add to a warm bath for a relaxing soak"
    ],
    faqs: [
      { question: "How long does the fragrance last?", answer: "Up to 12 months when stored properly away from sunlight." },
      { question: "Is it safe around pets?", answer: "Lavender is generally safe but keep away from cats who may be sensitive to essential oils." }
    ]
  },
  {
    id: "botanical-print-notebook",
    name: "Botanical Sketchbook",
    price: 22.00,
    description: "Hand-bound notebook featuring vintage botanical prints on the cover and recycled paper inside.",
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=800&auto=format&fit=crop",
    availability: "In Stock",
    type: "Stationery",
    categories: ["Stationery", "Shop All"],
    tags: ["Notebook", "Recycled", "Botanical", "Handmade"],
    soldRecently: 2,
    reviewCount: 4,
    rating: 4,
    details: [
      "Recycled acid-free paper",
      "Linen-wrapped spine",
      "120 pages of sketching space",
      "Vintage botanical cover art"
    ],
    benefits: [
      "Acid-free paper prevents yellowing over time",
      "Linen spine is durable and lay-flat friendly",
      "Recycled materials reduce environmental impact",
      "Thick pages suitable for watercolour and ink"
    ],
    storage: [
      "Store flat or upright in a dry environment",
      "Keep away from moisture to prevent page warping"
    ],
    howToUse: [
      "Use for sketching, journaling, or botanical illustration",
      "Thick pages support pencil, ink, and light watercolour",
      "The lay-flat spine makes it comfortable for extended writing sessions"
    ],
    faqs: [
      { question: "Is the paper suitable for watercolour?", answer: "Yes, the thick acid-free pages handle light watercolour washes well." },
      { question: "How many pages does it have?", answer: "120 pages (60 sheets) of premium recycled paper." }
    ]
  }
];
