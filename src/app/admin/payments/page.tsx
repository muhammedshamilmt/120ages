"use client";

import { 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Search, 
  Filter, 
  Download,
  DollarSign,
  TrendingUp,
  Clock
} from "lucide-react";

const transactions = [
  { id: "TXN-8923", customer: "Alex Johnson", amount: "+$154.00", date: "Jan 28, 2026", status: "Success", method: "Visa ****4242" },
  { id: "TXN-8922", customer: "Sarah Williams", amount: "+$89.00", date: "Jan 27, 2026", status: "Success", method: "PayPal" },
  { id: "TXN-8921", customer: "Michael Brown", amount: "+$210.00", date: "Jan 27, 2026", status: "Success", method: "Apple Pay" },
  { id: "TXN-8920", customer: "System Refund", amount: "-$45.00", date: "Jan 26, 2026", status: "Success", method: "Visa ****4242" },
  { id: "TXN-8919", customer: "David Wilson", amount: "+$129.00", date: "Jan 25, 2026", status: "Pending", method: "Google Pay" },
];

export default function PaymentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
          <p className="text-gray-500 mt-1">Track your earnings and manage transactions.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors">
            <Download size={18} />
            Payout History
          </button>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-black/90 transition-colors">
            Configure Stripe
          </button>
        </div>
      </div>

      {/* Payment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <DollarSign size={20} />
            </div>
            <span className="text-sm font-bold text-gray-500">Available for Payout</span>
          </div>
          <p className="text-3xl font-bold">$12,450.00</p>
          <p className="text-xs text-gray-400 mt-2 font-medium">Next payout scheduled for Feb 1st</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <TrendingUp size={20} />
            </div>
            <span className="text-sm font-bold text-gray-500">Total Revenue</span>
          </div>
          <p className="text-3xl font-bold">$142,890.00</p>
          <p className="text-xs text-green-600 font-bold flex items-center gap-1 mt-2">
            <TrendingUp size={12} /> +12.5% from last month
          </p>
        </div>

        <div className="bg-black p-6 rounded-2xl text-white shadow-xl shadow-black/10">
          <div className="flex items-center gap-4 mb-4 text-white/70">
            <div className="p-2 bg-white/10 text-white rounded-lg">
              <CreditCard size={20} />
            </div>
            <span className="text-sm font-bold">Stripe Account</span>
          </div>
          <p className="text-lg font-bold">Vintage Store • Active</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs font-medium text-white/50 italic">Verified Account</span>
            <button className="text-xs font-bold hover:underline">Manage Account</button>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-lg font-bold">Recent Transactions</h3>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search transactions..." 
                className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 w-64"
              />
            </div>
            <button className="p-2 bg-gray-50 rounded-xl text-gray-500 hover:text-black transition-colors">
              <Filter size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Method</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">{txn.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{txn.customer}</td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-bold ${txn.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {txn.amount}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{txn.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{txn.method}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      txn.status === "Success" ? "bg-green-50 text-green-700" : "bg-orange-50 text-orange-700"
                    }`}>
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 border-t border-gray-50 text-center">
          <button className="text-sm font-bold text-gray-400 hover:text-black transition-colors flex items-center justify-center gap-2 mx-auto">
            <Clock size={16} />
            Load More Transactions
          </button>
        </div>
      </div>
    </div>
  );
}
