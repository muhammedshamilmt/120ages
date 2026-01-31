"use client";

import { 
  User, 
  Store, 
  Bell, 
  Shield, 
  Globe, 
  CreditCard,
  Mail,
  Lock,
  ChevronRight,
  Save,
  Trash2
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your account and store configuration.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation */}
        <div className="lg:col-span-1">
          <nav className="space-y-1 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm sticky top-8">
            {[
              { label: "Profile", icon: User, active: true },
              { label: "Store Info", icon: Store, active: false },
              { label: "Notifications", icon: Bell, active: false },
              { label: "Security", icon: Shield, active: false },
              { label: "Domain", icon: Globe, active: false },
              { label: "Billing", icon: CreditCard, active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                  item.active 
                    ? "bg-black text-white shadow-lg shadow-black/10" 
                    : "text-gray-500 hover:bg-gray-50 hover:text-black"
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Profile Section */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-50">
              <h3 className="text-xl font-bold">Public Profile</h3>
              <p className="text-sm text-gray-500 mt-1">This information will be displayed to other admins.</p>
            </div>
            <div className="p-8 space-y-8">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="w-24 h-24 rounded-2xl bg-black text-white flex items-center justify-center text-3xl font-bold relative group cursor-pointer">
                   AD
                   <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-white">
                      Change
                   </div>
                </div>
                <div className="flex-1 space-y-4">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                         <input type="text" defaultValue="Admin" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-black/5" />
                      </div>
                      <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                         <input type="text" defaultValue="User" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-black/5" />
                      </div>
                   </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="email" defaultValue="admin@vintage-store.com" className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-black/5" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Bio</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-black/5 resize-none" placeholder="Write a brief bio..."></textarea>
              </div>
            </div>
            <div className="p-8 bg-gray-50/50 flex justify-end">
               <button className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-black/90 transition-colors">
                  <Save size={18} />
                  Save Changes
               </button>
            </div>
          </section>

          {/* Account Security */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-50">
              <h3 className="text-xl font-bold">Security</h3>
              <p className="text-sm text-gray-500 mt-1">Manage your password and security settings.</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                 <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                       <Lock size={18} className="text-gray-400" />
                    </div>
                    <div>
                       <p className="text-sm font-bold">Change Password</p>
                       <p className="text-xs text-gray-500 font-medium">Last changed 3 months ago</p>
                    </div>
                 </div>
                 <button className="text-sm font-bold text-blue-600 hover:underline">Update</button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                 <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                       <Shield size={18} className="text-gray-400" />
                    </div>
                    <div>
                       <p className="text-sm font-bold">Two-Factor Authentication</p>
                       <p className="text-xs text-red-500 font-bold tracking-tight">Not enabled</p>
                    </div>
                 </div>
                 <button className="text-sm font-bold text-blue-600 hover:underline">Enable</button>
              </div>
            </div>
          </section>

          {/* Danger Zone */}
          <section className="bg-white rounded-2xl border border-red-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-red-50">
              <h3 className="text-xl font-bold text-red-600">Danger Zone</h3>
              <p className="text-sm text-gray-500 mt-1">Irreversible actions for your account.</p>
            </div>
            <div className="p-8 flex items-center justify-between">
               <div>
                  <p className="text-sm font-bold text-gray-900">Deactivate Store</p>
                  <p className="text-xs text-gray-500 font-medium mt-1">Temporarily take your store offline.</p>
               </div>
               <button className="flex items-center gap-2 text-red-600 px-6 py-3 border border-red-100 rounded-xl font-bold hover:bg-red-50 transition-colors">
                  <Trash2 size={18} />
                  Deactivate
               </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
