"use client";

import Link from "next/link";
import { 
  ChevronLeft, 
  Edit2, 
  Trash2, 
  TrendingUp, 
  TrendingDown, 
  Package, 
  Eye, 
  ShoppingCart, 
  Clock,
  ExternalLink,
  ChevronRight
} from "lucide-react";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // Mock data for a single product
  const product = {
    id: "1",
    name: "Vintage Leather Jacket",
    category: "Outerwear",
    price: "$129.00",
    stock: 12,
    status: "In Stock",
    image: "/images/product-1.jpg",
    description: "Authentic vintage leather jacket from the late 70s. Features a classic collar, multiple pockets, and a distressed finish that only gets better with age.",
    sku: "VIN-LJ-001",
    views: 1240,
    sales: 124,
    revenue: "$16,000",
    rating: 4.8,
    reviews: 24,
    created: "Oct 12, 2025",
    updated: "Jan 28, 2026",
    history: [
      { date: "Jan 28", event: "Stock updated (+5 units)", user: "Admin" },
      { date: "Jan 25", event: "Price adjusted from $119 to $129", user: "System" },
      { date: "Jan 20", event: "Product published", user: "Admin" },
    ]
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/products"
            className="p-2 bg-white border border-gray-100 rounded-xl text-gray-500 hover:text-black transition-colors"
          >
            <ChevronLeft size={20} />
          </Link>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold">
                {product.status}
              </span>
            </div>
            <p className="text-gray-500">ID: {product.id} • SKU: {product.sku}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-3 bg-white border border-gray-100 rounded-xl text-gray-500 hover:text-red-600 transition-colors">
            <Trash2 size={20} />
          </button>
          <Link 
            href={`/admin/products/new`}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-black/90 transition-colors"
          >
            <Edit2 size={20} />
            Edit Product
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Product Info & Stats */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Eye size={20} />
                </div>
                <span className="text-sm font-bold text-gray-500">Views</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold">{product.views}</p>
                  <p className="text-xs text-green-600 font-bold flex items-center gap-1 mt-1">
                    <TrendingUp size={12} /> +12%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                  <ShoppingCart size={20} />
                </div>
                <span className="text-sm font-bold text-gray-500">Sales</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold">{product.sales}</p>
                  <p className="text-xs text-green-600 font-bold flex items-center gap-1 mt-1">
                    <TrendingUp size={12} /> +8%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                  <Package size={20} />
                </div>
                <span className="text-sm font-bold text-gray-500">Revenue</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold">{product.revenue}</p>
                  <p className="text-xs text-green-600 font-bold flex items-center gap-1 mt-1">
                    <TrendingUp size={12} /> +15%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Product Information</h3>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Category</h4>
                  <p className="font-medium">{product.category}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Base Price</h4>
                  <p className="font-medium">{product.price}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Created At</h4>
                  <p className="font-medium">{product.created}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Last Updated</h4>
                  <p className="font-medium">{product.updated}</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Description</h4>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            </div>
          </div>

            {/* Activity Log */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Activity Log</h3>
              <div className="space-y-6">
                {product.history.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-black mt-2"></div>
                      {index !== product.history.length - 1 && (
                        <div className="w-px flex-1 bg-gray-100 my-1"></div>
                      )}
                    </div>
                    <div className="pb-4">
                      <p className="text-sm font-bold text-gray-900">{item.event}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 font-medium">
                        <Clock size={12} />
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>By {item.user}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Sales for this product */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                <h3 className="text-xl font-bold">Recent Sales</h3>
                <Link href="/admin/orders" className="text-sm font-bold text-gray-500 hover:text-black transition-colors flex items-center gap-1">
                  View All <ChevronRight size={14} />
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Order</th>
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Customer</th>
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { id: "#ORD-7429", customer: "Alex Johnson", date: "Jan 28, 2026", amount: "$129.00" },
                      { id: "#ORD-7312", customer: "Sarah Smith", date: "Jan 24, 2026", amount: "$129.00" },
                      { id: "#ORD-7205", customer: "Mike Wilson", date: "Jan 18, 2026", amount: "$129.00" },
                    ].map((sale) => (
                      <tr key={sale.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-8 py-4 text-sm font-bold text-gray-900">{sale.id}</td>
                        <td className="px-8 py-4 text-sm text-gray-600 font-medium">{sale.customer}</td>
                        <td className="px-8 py-4 text-sm text-gray-500">{sale.date}</td>
                        <td className="px-8 py-4 text-sm font-bold text-gray-900 text-right">{sale.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        {/* Right Column - Media & Inventory */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold mb-6">Main Image</h3>
            <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 mb-4 overflow-hidden">
               <div className="text-gray-300 font-bold">PRODUCT IMAGE</div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-bold transition-colors">
              <ExternalLink size={16} />
              Preview in Store
            </button>
          </div>

            {/* Inventory Status */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Inventory Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Current Stock</p>
                    <p className="text-xl font-bold mt-1">{product.stock} units</p>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Package size={20} className="text-black" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Alert Level</p>
                    <p className="text-lg font-bold mt-1">5 units</p>
                  </div>
                  <button className="text-xs font-bold text-blue-600 hover:underline">Edit</button>
                </div>
              </div>
            </div>

            {/* Product Variants */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Variants</h3>
              <div className="space-y-3">
                {[
                  { size: "S", stock: 2, price: "$129.00" },
                  { size: "M", stock: 5, price: "$129.00" },
                  { size: "L", stock: 5, price: "$129.00" },
                ].map((variant) => (
                  <div key={variant.size} className="flex items-center justify-between p-3 border border-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-xs font-bold">{variant.size}</div>
                      <span className="text-sm font-medium text-gray-600">{variant.stock} in stock</span>
                    </div>
                    <span className="text-sm font-bold">{variant.price}</span>
                  </div>
                ))}
              </div>
            </div>

          <div className="bg-black p-8 rounded-2xl text-white shadow-xl shadow-black/10">
            <h3 className="text-lg font-bold mb-4">Performance Insights</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              This product is in the top 10% of your catalog this month. Consider adding more variations.
            </p>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-400 uppercase">Conversion Rate</span>
              <span className="text-sm font-bold text-green-400">+2.4%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[65%] h-full bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
