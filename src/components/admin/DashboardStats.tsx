import { 
  Users, 
  ShoppingBag, 
  DollarSign, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const stats = [
  {
    label: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    label: "Total Orders",
    value: "2,345",
    change: "+15.2%",
    trend: "up",
    icon: ShoppingBag,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    label: "Total Products",
    value: "142",
    change: "+4.1%",
    trend: "up",
    icon: TrendingUp,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    label: "Active Customers",
    value: "1,203",
    change: "-2.4%",
    trend: "down",
    icon: Users,
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div className={`flex items-center gap-1 text-sm font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
              {stat.change}
              {stat.trend === "up" ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
