"use client";

import Link from "next/link";
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  Download,
  Calendar,
  ChevronRight
} from "lucide-react";

const orders = [
  {
    id: "#ORD-7429",
    customer: "Alex Johnson",
    date: "Jan 28, 2026",
    amount: "$154.00",
    status: "Delivered",
    items: 3,
    method: "Credit Card"
  },
  {
    id: "#ORD-7428",
    customer: "Sarah Williams",
    date: "Jan 27, 2026",
    amount: "$89.00",
    status: "Processing",
    items: 1,
    method: "PayPal"
  },
  {
    id: "#ORD-7427",
    customer: "Michael Brown",
    date: "Jan 27, 2026",
    amount: "$210.00",
    status: "Shipped",
    items: 4,
    method: "Apple Pay"
  },
  {
    id: "#ORD-7426",
    customer: "Emily Davis",
    date: "Jan 26, 2026",
    amount: "$45.00",
    status: "Cancelled",
    items: 1,
    method: "Credit Card"
  },
  {
    id: "#ORD-7425",
    customer: "David Wilson",
    date: "Jan 25, 2026",
    amount: "$129.00",
    status: "Delivered",
    items: 2,
    method: "Google Pay"
  },
];

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
          <p className="text-gray-500 mt-1">Monitor and manage all customer purchases.</p>
        </div>
        
        <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-black/90 transition-colors w-fit">
          <Download size={20} />
          Export Orders
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by Order ID or Customer..." 
              className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 w-full"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors">
              <Calendar size={18} />
              Last 30 Days
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors">
              <Filter size={18} />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Items</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors group cursor-pointer" onClick={() => window.location.href=`/admin/orders/${order.id.replace('#', '')}`}>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">{order.id}</td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900">{order.customer}</p>
                    <p className="text-xs text-gray-500">{order.method}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.items} items</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      order.status === "Delivered" ? "bg-green-50 text-green-700" :
                      order.status === "Processing" ? "bg-blue-50 text-blue-700" :
                      order.status === "Shipped" ? "bg-orange-50 text-orange-700" :
                      "bg-red-50 text-red-700"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/admin/orders/${order.id.replace('#', '')}`} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-black transition-colors">
                        <Eye size={16} />
                      </Link>
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
          <p className="text-sm text-gray-500">Showing 1 to 5 of 128 orders</p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-gray-100 rounded-xl text-sm font-medium disabled:opacity-50">Previous</button>
            <button className="px-4 py-2 bg-black text-white rounded-xl text-sm font-medium">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
