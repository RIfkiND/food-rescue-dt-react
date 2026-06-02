import { 
  LayoutDashboard, 
  Package, 
  LineChart, 
  History, 
  ShieldCheck, 
  Users, 
  Plus, 
  Settings, 
  LogOut,
  Receipt,
  MapPin,
  Leaf,
  HelpCircle
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface SidebarProps {
  variant?: 'mitra' | 'profile'
}

export function Sidebar({ variant = 'mitra' }: SidebarProps) {
  const isProfile = variant === 'profile'
  const location = useLocation()
  const path = location.pathname

  const mitraLinks = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard/mitra' },
    { name: 'Inventory', icon: Package, path: '/dashboard/mitra/inventory' },
    { name: 'Analytics', icon: LineChart, path: '/dashboard/mitra/analytics' },
    { name: 'History', icon: History, path: '/dashboard/mitra/history' },
    { name: 'Verification', icon: ShieldCheck, path: '/dashboard/mitra/verification' },
    { name: 'Users', icon: Users, path: '/dashboard/mitra/users' },
  ]

  const profileLinks = [
    { name: 'Profile', icon: LayoutDashboard, path: '/dashboard/profile' },
    { name: 'Orders', icon: Receipt, path: '/dashboard/profile/orders' },
    { name: 'Addresses', icon: MapPin, path: '/dashboard/profile/addresses' },
    { name: 'Impact', icon: Leaf, path: '/dashboard/profile/impact' },
    { name: 'Settings', icon: Settings, path: '/dashboard/profile/settings' },
  ]

  const activeLinks = isProfile ? profileLinks : mitraLinks

  return (
    <aside className={cn(
      "fixed left-0 top-0 bottom-0 z-50 hidden lg:flex flex-col p-4 font-epilogue border-r transition-colors h-screen w-64",
      isProfile 
        ? "bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-800 text-sm font-medium space-y-2"
        : "bg-white dark:bg-zinc-950 border-zinc-100 dark:border-zinc-800 text-sm gap-2"
    )}>
      {isProfile ? (
        <div className="px-2 py-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm">
              <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOrOEqYJAbY-iMs9WrTbyVGYwOefZqNhTxHSNQRAAYCyhxVZPzebsQw7c50ZVaCnxyTzknfZwwNKJqgh9jsxLC3voucEya4LW_P-rjbOLkHHJR_80ZN3LGM13vQEsQdiKifAygircmVIjBjhLoBINKxnYjRiOSeYfNU-70NIRSNhbS0HMVEbURh_Az9tqIIoFEv8bbSsvLsgZkka6r8cd2G59XGOVew3zPlKvLSF1mKjCx5noiAVrcFR7cmGgPGUISE5qo8PyVWC4R" />
            </div>
            <div>
              <p className="font-bold text-primary">Alex Rivers</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">Local Hero • Level 4</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-6 px-2">
          <p className="text-lg font-black text-emerald-800 dark:text-emerald-400">RescueEat Admin</p>
          <p className="text-xs text-zinc-500">Food Waste Reduction Hub</p>
        </div>
      )}

      <nav className={cn("flex-1 space-y-1", isProfile ? "space-y-1" : "")}>
        {activeLinks.map((link) => {
          const isActive = path === link.path
          return (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                isActive 
                  ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-bold"
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-emerald-700 dark:hover:text-emerald-300"
              )}
            >
              <link.icon className="w-5 h-5" /> {link.name}
            </Link>
          )
        })}
      </nav>

      {isProfile ? (
        <>
          <button className="mt-6 w-full py-3 px-4 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-transform">
            Donate Food
          </button>
          <div className="pt-6 border-t border-gray-100 dark:border-slate-800 space-y-1">
            <Link to="/help" className="flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-slate-400 hover:bg-gray-50 rounded-lg">
              <HelpCircle className="w-5 h-5" /> Help Center
            </Link>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-error dark:text-red-400 hover:bg-red-50 rounded-lg transition-all">
              <LogOut className="w-5 h-5" /> Logout
            </button>
          </div>
        </>
      ) : (
        <div className="mt-auto pb-20 space-y-1">
          <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-bold shadow-md hover:scale-[1.02] active:scale-95 transition-all">
            <Plus className="w-5 h-5" />
            Add New Listing
          </button>
          <div className="pt-4 mt-4 border-t border-zinc-100">
            <Link to="/dashboard/mitra/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-600 hover:bg-zinc-50 transition-all">
              <Settings className="w-5 h-5" /> Settings
            </Link>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-error hover:bg-error-container/20 transition-all">
              <LogOut className="w-5 h-5" /> Logout
            </button>
          </div>
        </div>
      )}
    </aside>
  )
}
