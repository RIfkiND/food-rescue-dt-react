import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Store, ShieldCheck, MapPin, Phone, 
  ChevronRight, ArrowRight, HelpCircle, 
  LayoutDashboard, UserCheck, UploadCloud, 
  Verified, BarChart3, History, Settings, 
  LogOut, Plus, Leaf, TrendingUp, HandHeart,
  Box, ClipboardEdit, Users, Receipt, Clock,
  MoreVertical, ArrowUpRight
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Cell 
} from 'recharts';
import { cn } from '../lib/utils';

const SALES_DATA = [
  { name: 'Mon', sales: 120 },
  { name: 'Tue', sales: 195 },
  { name: 'Wed', sales: 240 },
  { name: 'Thu', sales: 285 },
  { name: 'Fri', sales: 150 },
  { name: 'Sat', sales: 90 },
  { name: 'Sun', sales: 30 },
];

const URGENT_ITEMS = [
  {
    id: '1',
    name: 'Assorted Pastry Box',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2670&auto=format&fit=crop',
    timeLeft: '2h left',
    stock: 4,
    status: 'urgent'
  },
  {
    id: '2',
    name: 'Mediterranean Salad',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop',
    timeLeft: '5h left',
    stock: 12,
    status: 'warning'
  },
  {
    id: '3',
    name: 'Beef Stew Portion',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2671&auto=format&fit=crop',
    timeLeft: 'Tomorrow',
    stock: 8,
    status: 'safe'
  }
];

const MitraPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [registrationStep, setRegistrationStep] = useState(1);

  const renderDashboard = () => (
    <div className="space-y-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-display font-bold text-4xl text-on-surface">Overview</h1>
          <p className="font-body-md text-on-surface-variant mt-2">Here's what's happening at your kitchen today.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl border border-outline-variant text-primary font-title-sm hover:bg-primary/5 transition-colors">
            <ClipboardEdit className="w-4 h-4" />
            Bulk Edit Prices
          </button>
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-on-primary font-title-sm shadow-level-2 hover:bg-primary-dim transition-all">
            <Plus className="w-4 h-4" />
            Add New Listing
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-white rounded-3xl p-8 border border-outline-variant/30 shadow-level-1 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 transition-transform group-hover:scale-110">
            <Receipt className="w-24 h-24" />
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Receipt className="w-6 h-6" />
            </div>
            <div>
              <p className="font-label-md text-on-surface-variant uppercase tracking-wider text-xs">Today's Revenue</p>
              <div className="flex items-end justify-between mt-1">
                <h3 className="font-display font-bold text-3xl">$248.50</h3>
                <span className="flex items-center gap-1 text-primary font-label-md bg-primary/10 px-2 py-1 rounded-lg">
                  <TrendingUp className="w-3 h-3" /> 12%
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-white rounded-3xl p-8 border border-outline-variant/30 shadow-level-1 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 transition-transform group-hover:scale-110">
            <Leaf className="w-24 h-24" />
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <p className="font-label-md text-on-surface-variant uppercase tracking-wider text-xs">Items Rescued</p>
              <div className="flex items-end justify-between mt-1">
                <h3 className="font-display font-bold text-3xl">42</h3>
                <span className="text-on-surface-variant font-label-md">meals saved</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-white rounded-3xl p-8 border border-outline-variant/30 shadow-level-1 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 transition-transform group-hover:scale-110">
            <Box className="w-24 h-24" />
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary">
              <Box className="w-6 h-6" />
            </div>
            <div>
              <p className="font-label-md text-on-surface-variant uppercase tracking-wider text-xs">Active Listings</p>
              <div className="flex items-end justify-between mt-1">
                <h3 className="font-display font-bold text-3xl">18</h3>
                <span className="text-on-surface-variant font-label-md">live right now</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sales Trends Chart */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 border border-outline-variant/30 shadow-level-1 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-display font-bold text-2xl">Sales Trends</h2>
            <div className="flex gap-2">
              <select className="bg-surface-container-low border-none rounded-xl px-4 py-2 font-label-md focus:ring-2 focus:ring-primary">
                <option>This Week</option>
                <option>Last Month</option>
              </select>
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SALES_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <Tooltip 
                  cursor={{ fill: '#F3F4F6' }}
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                  }}
                />
                <Bar 
                  dataKey="sales" 
                  radius={[8, 8, 8, 8]}
                  barSize={40}
                >
                  {SALES_DATA.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.name === 'Thu' ? '#0F5238' : '#B1F0CE'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Urgent Items */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-outline-variant/30 shadow-level-1 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-display font-bold text-2xl">Urgent Items</h2>
            <button className="text-primary font-label-md hover:underline">View All</button>
          </div>

          <div className="space-y-4">
            {URGENT_ITEMS.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 hover:border-outline-variant transition-colors group">
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-title-md truncate text-on-surface">{item.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={cn(
                      "px-2 py-0.5 rounded-lg font-label-sm flex items-center gap-1",
                      item.status === 'urgent' ? "bg-error/10 text-error" : 
                      item.status === 'warning' ? "bg-secondary/10 text-secondary" : 
                      "bg-primary/10 text-primary"
                    )}>
                      <Clock className="w-3 h-3" />
                      {item.timeLeft}
                    </span>
                    <span className="font-label-sm text-on-surface-variant">{item.stock} left</span>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center transition-colors">
                  <MoreVertical className="w-4 h-4 text-outline" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <button className="w-full py-4 rounded-2xl bg-secondary/10 text-secondary font-title-sm flex items-center justify-center gap-2 hover:bg-secondary/20 transition-all">
              <BarChart3 className="w-4 h-4" />
              View Full Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRegistration = () => (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Hero Promo Section */}
      <section className="relative overflow-hidden bg-primary-container rounded-[2.5rem] p-8 md:p-12 text-on-primary-container shadow-level-2">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-xl space-y-6">
          <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight">
            Join the Movement.<br />Turn Surplus into Impact.
          </h1>
          <p className="font-body-lg opacity-90">
            Partner with FoodRescue to reduce food waste, reach new customers, and make a tangible difference in your community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center">
              <Leaf className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <h3 className="font-title-sm mb-1">Reduce Waste</h3>
              <p className="text-[10px] opacity-70 uppercase tracking-wider">Eco Impact</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <h3 className="font-title-sm mb-1">Boost Revenue</h3>
              <p className="text-[10px] opacity-70 uppercase tracking-wider">Recover Costs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center">
              <HandHeart className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <h3 className="font-title-sm mb-1">CSR Impact</h3>
              <p className="text-[10px] opacity-70 uppercase tracking-wider">Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Card */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-level-1 border border-outline-variant/30"
      >
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display font-bold text-3xl">Registration</h2>
          <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full font-label-md flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            Verified Partner
          </span>
        </div>

        {/* Stepper */}
        <div className="mb-12">
          <div className="flex justify-between font-label-md text-on-surface-variant mb-4 px-2">
            <span className={cn(registrationStep >= 1 ? "text-primary" : "")}>Business Details</span>
            <span className={cn(registrationStep >= 2 ? "text-primary" : "")}>Documents</span>
            <span className={cn(registrationStep >= 3 ? "text-primary" : "")}>Verification</span>
          </div>
          <div className="h-2 bg-surface-container rounded-full overflow-hidden">
            <div className={cn("h-full bg-primary transition-all duration-500", registrationStep === 1 ? "w-1/3" : registrationStep === 2 ? "w-2/3" : "w-full")} />
          </div>
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="font-label-md block">Business Name</label>
              <input 
                type="text" 
                placeholder="e.g. Green Bakery" 
                className="w-full bg-surface-container-low rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-primary transition-all font-body-md"
              />
            </div>
            <div className="space-y-3">
              <label className="font-label-md block">Business Type</label>
              <select className="w-full bg-surface-container-low rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-primary transition-all font-body-md appearance-none">
                <option>Select type...</option>
                <option>Restaurant</option>
                <option>Bakery</option>
                <option>Grocery Store</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <label className="font-label-md block">Business Address</label>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Street Address" 
                className="w-full bg-surface-container-low rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-primary font-body-md"
              />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <input 
                  type="text" 
                  placeholder="City" 
                  className="w-full bg-surface-container-low rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-primary font-body-md"
                />
                <input 
                  type="text" 
                  placeholder="State" 
                  className="w-full bg-surface-container-low rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-primary font-body-md"
                />
                <input 
                  type="text" 
                  placeholder="ZIP" 
                  className="w-full bg-surface-container-low rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-primary font-body-md"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="font-label-md block">Contact Phone</label>
            <div className="flex gap-2">
              <div className="bg-surface-container-low rounded-2xl px-6 py-4 flex items-center font-body-md">+1</div>
              <input 
                type="tel" 
                placeholder="(555) 000-0000" 
                className="flex-1 bg-surface-container-low rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-primary font-body-md"
              />
            </div>
          </div>

          <div className="pt-8 flex justify-end">
            <button 
              type="button"
              className="bg-primary text-on-primary font-title-md px-10 py-5 rounded-2xl shadow-level-2 hover:bg-primary-dim transition-all flex items-center gap-3 group"
            >
              Next Step
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </motion.section>
    </div>
  );

  return (
    <div className="min-h-screen bg-surface flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="hidden md:flex w-72 flex-col bg-white border-r border-outline-variant p-6 fixed h-full z-20">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Store className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="font-display font-bold text-lg text-primary leading-tight">Mitra Portal</h2>
            <p className="text-xs text-on-surface-variant">Merchant Hub</p>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'inventory', label: 'Inventory', icon: Box },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 },
            { id: 'history', label: 'History', icon: History },
            { id: 'registration', label: 'Registration', icon: UserCheck },
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-xl font-title-sm text-left transition-all",
                activeTab === item.id 
                  ? "bg-primary/5 text-primary border-r-4 border-primary" 
                  : "text-on-surface-variant hover:bg-surface-container"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
          <button className="flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant font-title-sm text-left hover:bg-surface-container transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </nav>

        <div className="mt-auto flex flex-col gap-4">
          <button className="w-full py-3 rounded-xl bg-surface-container-highest/20 text-on-surface font-title-sm flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
          <div className="pt-6 border-t border-outline-variant">
            <button className="w-full py-3 rounded-xl border border-primary text-primary font-title-sm hover:bg-primary/5 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-72 p-6 md:p-12 lg:p-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'dashboard' ? renderDashboard() : 
             activeTab === 'registration' ? renderRegistration() : 
             <div className="flex flex-col items-center justify-center h-[60vh] text-on-surface-variant">
               <HelpCircle className="w-16 h-16 mb-4 opacity-20" />
               <p className="font-title-lg">Section under development</p>
               <button 
                 onClick={() => setActiveTab('dashboard')}
                 className="mt-6 text-primary font-title-md hover:underline"
               >
                 Go back to Dashboard
               </button>
             </div>}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default MitraPage;