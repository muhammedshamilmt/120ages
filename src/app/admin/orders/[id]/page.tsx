"use client";

import Link from "next/link";
import { 
  ChevronLeft, 
  Package, 
  Truck, 
  CreditCard, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  Printer,
  ChevronRight
} from "lucide-react";

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  // Mock data for a single order
  const order = {
    id: "#ORD-7429",
    date: "Jan 28, 2026",
    time: "02:45 PM",
    status: "Delivered",
    paymentStatus: "Paid",
    customer: {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      phone: "+1 (555) 123-4567",
      image: null
    },
    shipping: {
      method: "Express Shipping",
      address: "123 Vintage Lane",
      city: "Brooklyn",
      state: "NY",
      zip: "11201",
      country: "USA",
      tracking: "TRK982347102"
    },
    billing: {
      method: "Credit Card (Visa ending in 4242)",
      subtotal: "$140.00",
      shipping: "$10.00",
      tax: "$4.00",
      total: "$154.00"
    },
    items: [
      { id: 1, name: "Vintage Leather Jacket", price: "$129.00", quantity: 1, total: "$129.00" },
      { id: 2, name: "Classic Band Tee", price: "$35.00", quantity: 1, total: "$35.00" },
    ],
    timeline: [
      { date: "Jan 30", time: "10:00 AM", event: "Order delivered to customer", status: "completed" },
      { date: "Jan 29", time: "09:15 AM", event: "Package out for delivery", status: "completed" },
      { date: "Jan 28", time: "04:30 PM", event: "Order processed and shipped", status: "completed" },
      { date: "Jan 28", time: "02:45 PM", event: "Order placed by customer", status: "completed" },
    ]
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/orders"
            className="p-2 bg-white border border-gray-100 rounded-xl text-gray-500 hover:text-black transition-colors"
          >
            <ChevronLeft size={20} />
          </Link>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-3xl font-bold tracking-tight">Order {order.id}</h1>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold">
                {order.status}
              </span>
            </div>
            <p className="text-gray-500">{order.date} at {order.time}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-3 bg-white border border-gray-100 rounded-xl text-gray-500 hover:text-black transition-colors">
            <Printer size={20} />
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-black/90 transition-colors">
            Update Status
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Order Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Items Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center gap-2">
              <Package size={20} className="text-gray-400" />
              <h3 className="font-bold">Order Items ({order.items.length})</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Qty</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {order.items.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[10px] font-bold text-gray-400">IMG</div>
                          <span className="text-sm font-bold text-gray-900">{item.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.price}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.quantity}</td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 text-right">{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-gray-50/50 border-t border-gray-50 space-y-3">
              <div className="flex justify-end gap-12 text-sm text-gray-500 font-medium">
                <span>Subtotal</span>
                <span className="w-20 text-right">{order.billing.subtotal}</span>
              </div>
              <div className="flex justify-end gap-12 text-sm text-gray-500 font-medium">
                <span>Shipping</span>
                <span className="w-20 text-right">{order.billing.shipping}</span>
              </div>
              <div className="flex justify-end gap-12 text-sm text-gray-500 font-medium">
                <span>Tax</span>
                <span className="w-20 text-right">{order.billing.tax}</span>
              </div>
              <div className="flex justify-end gap-12 text-lg font-bold text-gray-900 pt-2 border-t border-gray-100">
                <span>Total</span>
                <span className="w-20 text-right">{order.billing.total}</span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-8">
              <Clock size={20} className="text-gray-400" />
              <h3 className="font-bold">Order History</h3>
            </div>
            <div className="space-y-8">
              {order.timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-black border-4 border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"></div>
                    {index !== order.timeline.length - 1 && (
                      <div className="w-px flex-1 bg-gray-100 my-1"></div>
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-bold text-gray-900 leading-none">{item.event}</p>
                    <p className="text-xs text-gray-500 mt-2 font-medium">
                      {item.date} at {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Customer & Info */}
        <div className="space-y-8">
          {/* Customer Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <User size={20} className="text-gray-400" />
              <h3 className="font-bold text-lg">Customer</h3>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center font-bold">AJ</div>
              <div>
                <p className="font-bold text-gray-900">{order.customer.name}</p>
                <p className="text-xs text-gray-500">12 previous orders</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail size={16} className="text-gray-400" />
                {order.customer.email}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone size={16} className="text-gray-400" />
                {order.customer.phone}
              </div>
            </div>
          </div>

          {/* Shipping & Payment */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Truck size={20} className="text-gray-400" />
              <h3 className="font-bold text-lg">Shipping Details</h3>
            </div>
            <div className="space-y-6">
              <div className="flex gap-3">
                <MapPin size={18} className="text-gray-400 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">{order.shipping.address}</p>
                  <p className="text-sm text-gray-600">
                    {order.shipping.city}, {order.shipping.state} {order.shipping.zip}
                  </p>
                  <p className="text-sm text-gray-600">{order.shipping.country}</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Tracking Number</p>
                <p className="text-sm font-bold text-blue-600 hover:underline cursor-pointer">
                  {order.shipping.tracking}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <CreditCard size={20} className="text-gray-400" />
              <h3 className="font-bold text-lg">Payment</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Status</span>
                <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs font-bold">PAID</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Method</span>
                <span className="font-bold">Visa 4242</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Currency</span>
                <span className="font-bold">USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
