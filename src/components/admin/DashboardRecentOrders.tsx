import Link from "next/link";
import { ArrowRight, MoreHorizontal } from "lucide-react";

const recentOrders = [
  {
    id: "#ORD-7392",
    customer: "Alex Johnson",
    product: "Vintage Leather Jacket",
    amount: "$129.00",
    status: "Completed",
    date: "2 mins ago"
  },
  {
    id: "#ORD-7391",
    customer: "Sarah Williams",
    product: "Retro Denim Jeans",
    amount: "$89.00",
    status: "Processing",
    date: "15 mins ago"
  },
  {
    id: "#ORD-7390",
    customer: "Michael Brown",
    product: "Classic Band Tee",
    amount: "$35.00",
    status: "Shipped",
    date: "1 hour ago"
  },
  {
    id: "#ORD-7389",
    customer: "Emily Davis",
    product: "Woolen Fedora Hat",
    amount: "$45.00",
    status: "Completed",
    date: "3 hours ago"
  },
];

const statusStyles = {
  Completed: "bg-green-50 text-green-700",
  Processing: "bg-blue-50 text-blue-700",
  Shipped: "bg-purple-50 text-purple-700",
  Cancelled: "bg-red-50 text-red-700",
};

export function DashboardRecentOrders() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-6 flex items-center justify-between border-b border-gray-50">
        <div>
          <h3 className="text-lg font-bold">Recent Orders</h3>
          <p className="text-sm text-gray-500">Overview of latest transactions</p>
        </div>
        <Link 
          href="/admin/orders" 
          className="text-sm font-medium text-black hover:underline flex items-center gap-1"
        >
          View all <ArrowRight size={14} />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Product</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {recentOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{order.product}</td>
                <td className="px-6 py-4 text-sm font-bold text-gray-900">{order.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusStyles[order.status as keyof typeof statusStyles]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-black transition-colors">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
