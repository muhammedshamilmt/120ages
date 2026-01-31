"use client";

import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  ArrowUpRight, 
  ArrowDownRight,
  Calendar,
  Download,
  Info
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-gray-500 mt-1">Deep dive into your store's performance metrics.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors">
            <Calendar size={18} />
            Last 30 Days
          </button>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-black/90 transition-colors">
            <Download size={20} />
            Download Report
          </button>
        </div>
      </div>

      {/* High Level Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Revenue", value: "$128,430", change: "+12.5%", positive: true, icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
          { label: "Total Orders", value: "1,240", change: "+8.2%", positive: true, icon: ShoppingCart, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Total Visitors", value: "45,200", change: "-2.4%", positive: false, icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
          { label: "Conv. Rate", value: "2.75%", change: "+0.5%", positive: true, icon: BarChart3, color: "text-orange-600", bg: "bg-orange-50" },
        ].map((metric) => (
          <div key={metric.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 ${metric.bg} ${metric.color} rounded-lg`}>
                <metric.icon size={20} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${metric.positive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {metric.change}
              </span>
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{metric.label}</p>
            <p className="text-2xl font-bold mt-1 tracking-tight">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Main Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Revenue Growth</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-gray-50 text-xs font-bold rounded-lg hover:bg-gray-100">Daily</button>
              <button className="px-3 py-1 bg-black text-white text-xs font-bold rounded-lg">Monthly</button>
            </div>
          </div>
          <div className="h-80 w-full bg-gray-50/50 rounded-2xl flex items-end justify-between px-8 pb-4 relative overflow-hidden group">
             {/* Simple visual bar chart representation */}
             {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
               <div key={i} className="w-[6%] bg-black/5 group-hover:bg-black/10 transition-colors rounded-t-lg relative" style={{ height: `${h}%` }}>
                 <div className="absolute bottom-0 w-full bg-black rounded-t-lg" style={{ height: `${h * 0.7}%` }}></div>
               </div>
             ))}
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-[1px]">
                <p className="px-4 py-2 bg-white shadow-xl rounded-xl font-bold text-sm">Revenue: $12,450.00 (Dec 2025)</p>
             </div>
          </div>
          <div className="mt-6 flex justify-between text-xs font-bold text-gray-400 px-4 uppercase tracking-widest">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-xl font-bold mb-8">Visitor Sources</h3>
          <div className="flex-1 space-y-6">
            {[
              { source: "Direct", value: "45%", color: "bg-black" },
              { source: "Organic Search", value: "30%", color: "bg-gray-400" },
              { source: "Social Media", value: "15%", color: "bg-gray-200" },
              { source: "Referral", value: "10%", color: "bg-gray-100" },
            ].map((item) => (
              <div key={item.source}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-gray-700">{item.source}</span>
                  <span className="text-sm font-bold">{item.value}</span>
                </div>
                <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color}`} style={{ width: item.value }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-gray-50 rounded-xl flex items-start gap-3">
             <Info size={18} className="text-gray-400 shrink-0 mt-0.5" />
             <p className="text-xs text-gray-500 leading-relaxed font-medium">
               Most of your traffic is coming from direct links. Consider investing more in SEO to increase organic reach.
             </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
           <h3 className="text-xl font-bold mb-6">Top Selling Categories</h3>
           <div className="space-y-4">
              {[
                { name: "Outerwear", sales: 450, growth: "+15%" },
                { name: "T-Shirts", sales: 380, growth: "+8%" },
                { name: "Bottoms", sales: 240, growth: "+12%" },
                { name: "Accessories", sales: 170, growth: "-3%" },
              ].map((cat) => (
                <div key={cat.name} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-xs uppercase tracking-tighter">CAT</div>
                    <div>
                      <p className="text-sm font-bold">{cat.name}</p>
                      <p className="text-xs text-gray-500 font-medium">{cat.sales} items sold</p>
                    </div>
                  </div>
                  <div className={`text-xs font-bold ${cat.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {cat.growth}
                  </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
           <h3 className="text-xl font-bold mb-6">Customer Demographics</h3>
           <div className="space-y-8 py-4">
              <div className="flex items-center justify-between">
                 <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">New vs Returning</p>
                    <p className="text-xl font-bold">62% / 38%</p>
                 </div>
                 <div className="flex gap-1 h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-black w-[62%]"></div>
                    <div className="bg-gray-300 w-[38%]"></div>
                 </div>
              </div>
              <div className="flex items-center justify-between">
                 <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Avg. Order Value</p>
                    <p className="text-xl font-bold">$103.50</p>
                 </div>
                 <p className="text-xs font-bold text-green-600 px-2 py-1 bg-green-50 rounded-lg">+$12.40</p>
              </div>
              <div className="flex items-center justify-between">
                 <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Lifetime Value</p>
                    <p className="text-xl font-bold">$450.20</p>
                 </div>
                 <p className="text-xs font-bold text-blue-600 px-2 py-1 bg-blue-50 rounded-lg">Top 5%</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
