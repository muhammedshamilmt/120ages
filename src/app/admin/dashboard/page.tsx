import { DashboardStats } from "@/components/admin/DashboardStats";
import { DashboardChart } from "@/components/admin/DashboardChart";
import { DashboardRecentOrders } from "@/components/admin/DashboardRecentOrders";
import { Bell, Search } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back, here's what's happening today.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 w-64"
            />
          </div>
          <button className="relative p-2 bg-white border border-gray-100 rounded-xl text-gray-500 hover:text-black transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white font-bold">
            AD
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <DashboardChart />
          <DashboardRecentOrders />
        </div>

        <div className="space-y-8">
          {/* Top Products */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold mb-6">Top Products</h3>
            <div className="space-y-6">
              {[
                { name: "Vintage Leather Jacket", sales: 124, price: "$129", trend: "+12%" },
                { name: "Retro Denim Jeans", sales: 98, price: "$89", trend: "+8%" },
                { name: "Classic Band Tee", sales: 85, price: "$35", trend: "+15%" },
                { name: "Woolen Fedora", sales: 64, price: "$45", trend: "+5%" },
              ].map((product) => (
                <div key={product.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center font-bold text-xs">
                      IMG
                    </div>
                    <div>
                      <p className="text-sm font-medium">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.sales} sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">{product.price}</p>
                    <p className="text-xs text-green-600 font-medium">{product.trend}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-bold transition-colors">
              View All Products
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-black p-6 rounded-2xl shadow-xl shadow-black/10 text-white">
            <h3 className="text-lg font-bold mb-2">Need help?</h3>
            <p className="text-gray-400 text-sm mb-6">Check our documentation for advanced settings and integrations.</p>
            <button className="w-full py-3 bg-white text-black rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors">
              View Docs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
