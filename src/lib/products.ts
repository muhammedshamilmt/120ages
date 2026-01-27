export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  details: string[];
}

export const products: Product[] = [
  {
    id: "vintage-tea-set",
    name: "Classic Herbal Blend",
    price: 24.99,
    description: "A signature blend of mountain herbs and dried botanicals for a refreshing experience.",
    category: "Herbal Teas",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4586d517?q=80&w=800&auto=format&fit=crop",
    details: [
      "100% Organic ingredients",
      "Hand-picked from high altitude regions",
      "Rich in antioxidants",
      "Caffeine-free"
    ]
  },
  {
    id: "mountain-honey",
    name: "Wild Mountain Honey",
    price: 18.50,
    description: "Pure, unprocessed honey collected from wild hives in the pristine mountain ranges.",
    category: "Healthy Foods",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop",
    details: [
      "Cold-pressed and unfiltered",
      "No added sugars or preservatives",
      "Sustainably harvested",
      "Distinctive floral notes"
    ]
  },
  {
    id: "vintage-canvas-bag",
    name: "Heritage Canvas Tote",
    price: 45.00,
    description: "Durable vintage-style canvas tote bag, perfect for daily errands or market visits.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    details: [
      "Heavyweight 100% cotton canvas",
      "Reinforced stitching",
      "Classic vintage brown finish",
      "Internal pocket for small items"
    ]
  },
  {
    id: "artisanal-ceramic-mug",
    name: "Artisanal Stone Mug",
    price: 32.00,
    description: "Hand-thrown ceramic mug with a unique speckled glaze, designed for the perfect tea ritual.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop",
    details: [
      "Hand-thrown by local artisans",
      "Dishwasher and microwave safe",
      "Large 12oz capacity",
      "Ergonomic handle design"
    ]
  },
  {
    id: "dried-lavender-bundle",
    name: "Dried Lavender Bundle",
    price: 12.00,
    description: "Fragrant bundle of dried lavender flowers, perfect for home aromatherapy or decoration.",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1591871937453-3efae5979ef2?q=80&w=800&auto=format&fit=crop",
    details: [
      "Naturally dried",
      "Long-lasting fragrance",
      "Grown without pesticides",
      "Perfect for sachets"
    ]
  },
  {
    id: "botanical-print-notebook",
    name: "Botanical Sketchbook",
    price: 22.00,
    description: "Hand-bound notebook featuring vintage botanical prints on the cover and recycled paper inside.",
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=800&auto=format&fit=crop",
    details: [
      "Recycled acid-free paper",
      "Linen-wrapped spine",
      "120 pages of sketching space",
      "Vintage botanical cover art"
    ]
  }
];
