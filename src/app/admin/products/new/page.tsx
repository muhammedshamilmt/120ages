import Link from "next/link";
import { 
  ChevronLeft, 
  Upload, 
  Save, 
  X, 
  Info,
  DollarSign,
  Package,
  Tag
} from "lucide-react";

export default function NewProductPage() {
  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/products"
            className="p-2 bg-white border border-gray-100 rounded-xl text-gray-500 hover:text-black transition-colors"
          >
            <ChevronLeft size={20} />
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
            <p className="text-gray-500 mt-1">Fill in the details to create a new product.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Link 
            href="/admin/products"
            className="px-6 py-3 bg-white border border-gray-100 rounded-xl font-bold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-black/90 transition-colors">
            <Save size={20} />
            Save Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Forms */}
        <div className="lg:col-span-2 space-y-8">
          {/* General Information */}
          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-bold">General Information</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Product Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Vintage Leather Jacket" 
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-black/5"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                <textarea 
                  rows={6}
                  placeholder="Tell us about this product..." 
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-black/5 resize-none"
                ></textarea>
              </div>
            </div>
          </section>

          {/* Pricing & Inventory */}
          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                <DollarSign size={20} />
              </div>
              <h3 className="text-xl font-bold">Pricing & Inventory</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Price ($)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input 
                    type="number" 
                    placeholder="0.00" 
                    className="w-full pl-8 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-black/5"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">SKU (Stock Keeping Unit)</label>
                <input 
                  type="text" 
                  placeholder="VIN-LJ-001" 
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-black/5"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Initial Stock</label>
                <input 
                  type="number" 
                  placeholder="0" 
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-black/5"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Low Stock Alert</label>
                <input 
                  type="number" 
                  placeholder="5" 
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-black/5"
                />
              </div>
            </div>
          </section>

          {/* Media */}
          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                <Upload size={20} />
              </div>
              <h3 className="text-xl font-bold">Media</h3>
            </div>
            
            <div className="border-2 border-dashed border-gray-100 rounded-2xl p-12 flex flex-col items-center justify-center gap-4 hover:bg-gray-50/50 transition-colors cursor-pointer group">
              <div className="p-4 bg-gray-50 text-gray-400 rounded-2xl group-hover:scale-110 transition-transform">
                <Upload size={32} />
              </div>
              <div className="text-center">
                <p className="font-bold">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Organization */}
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                <Tag size={20} />
              </div>
              <h3 className="text-xl font-bold">Organization</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                <select className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-black/5 outline-none">
                  <option>Select Category</option>
                  <option>Outerwear</option>
                  <option>Bottoms</option>
                  <option>T-Shirts</option>
                  <option>Accessories</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Status</label>
                <div className="space-y-3">
                  {['Draft', 'Published', 'Hidden'].map((status) => (
                    <label key={status} className="flex items-center gap-3 p-3 border border-gray-50 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="radio" name="status" value={status} className="w-4 h-4 text-black focus:ring-black" />
                      <span className="text-sm font-medium">{status}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tags</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {['Vintage', 'Retro', 'Leather'].map((tag) => (
                    <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-bold">
                      {tag}
                      <X size={12} className="cursor-pointer" />
                    </span>
                  ))}
                </div>
                <input 
                  type="text" 
                  placeholder="Add a tag..." 
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-black/5"
                />
              </div>
            </div>
          </section>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-800">
            <div className="flex items-center gap-3 mb-2 font-bold text-sm">
              <Info size={18} />
              Pro Tip
            </div>
            <p className="text-xs leading-relaxed opacity-80 font-medium">
              High-quality images increase conversion rates by up to 40%. Make sure your products have at least 3 clear shots from different angles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
