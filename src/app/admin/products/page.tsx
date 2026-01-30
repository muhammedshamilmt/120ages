import Link from "next/link";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Edit2, 
  Trash2, 
  ExternalLink 
} from "lucide-react";

const products = [
  {
    id: "1",
    name: "Vintage Leather Jacket",
    category: "Outerwear",
    price: "$129.00",
    stock: 12,
    status: "In Stock",
    image: "/images/product-1.jpg"
  },
  {
    id: "2",
    name: "Retro Denim Jeans",
    category: "Bottoms",
    price: "$89.00",
    stock: 45,
    status: "In Stock",
    image: "/images/product-2.jpg"
  },
  {
    id: "3",
    name: "Classic Band Tee",
    category: "T-Shirts",
    price: "$35.00",
    stock: 0,
    status: "Out of Stock",
    image: "/images/product-3.jpg"
  },
  {
    id: "4",
    name: "Woolen Fedora Hat",
    category: "Accessories",
    price: "$45.00",
    stock: 8,
    status: "Low Stock",
    image: "/images/product-4.jpg"
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-gray-500 mt-1">Manage your product catalog and inventory.</p>
        </div>
        
        <Link 
          href="/admin/products/new"
          className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-black/90 transition-colors w-fit"
        >
          <Plus size={20} />
          Add Product
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 w-full"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors">
              <Filter size={18} />
              Filter
            </button>
            <select className="bg-gray-50 border-none rounded-xl px-4 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-black/5">
              <option>All Categories</option>
              <option>Outerwear</option>
              <option>Bottoms</option>
              <option>T-Shirts</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center font-bold text-[10px] text-gray-400">
                        IMG
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{product.name}</p>
                        <p className="text-xs text-gray-500">ID: {product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">{product.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.stock} units</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      product.status === "In Stock" ? "bg-green-50 text-green-700" :
                      product.status === "Low Stock" ? "bg-orange-50 text-orange-700" :
                      "bg-red-50 text-red-700"
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-black transition-colors">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg text-gray-500 hover:text-red-600 transition-colors">
                        <Trash2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-black transition-colors">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-gray-50 flex items-center justify-between">
          <p className="text-sm text-gray-500">Showing 1 to 10 of 42 products</p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-gray-100 rounded-xl text-sm font-medium disabled:opacity-50">Previous</button>
            <button className="px-4 py-2 bg-black text-white rounded-xl text-sm font-medium">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
