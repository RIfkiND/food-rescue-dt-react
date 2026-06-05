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
  HelpCircle,
  ShoppingBag,
  Ticket,
  Store,
  Wallet
} from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface SidebarProps {
  variant?: 'mitra' | 'profile'
}

export function Sidebar({ variant = 'mitra' }: SidebarProps) {
  const navigate = useNavigate()
  const isProfile = variant === 'profile'
  const location = useLocation()
  const path = location.pathname

  const mitraLinks = [
    { name: 'Dasbor', icon: LayoutDashboard, path: '/dashboard/mitra' },
    { name: 'Inventaris', icon: Package, path: '/dashboard/mitra/inventory' },
    { name: 'Analitik', icon: LineChart, path: '/dashboard/mitra/analytics' },
    { name: 'Riwayat', icon: History, path: '/dashboard/mitra/history' },
    { name: 'Makanan', icon: ShoppingBag, path: '/dashboard/mitra/food' },
    { name: 'Kupon', icon: Ticket, path: '/dashboard/mitra/coupons' },
  ]

  const profileLinks = [
    { name: 'Profil', icon: LayoutDashboard, path: '/dashboard/profile' },
    { name: 'Profil Toko', icon: Store, path: '/dashboard/profile/store' },
    { name: 'Lokasi', icon: MapPin, path: '/dashboard/profile/addresses' },
    { name: 'Dompet', icon: Wallet, path: '/dashboard/profile/wallet' },
    { name: 'Pengaturan', icon: Settings, path: '/dashboard/profile/settings' },
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
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">Pahlawan Lokal • Level 4</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-6 px-2">
          <p className="text-lg font-black text-emerald-800 dark:text-emerald-400">Admin Mitra</p>
          <p className="text-xs text-zinc-500">Pusat Penyelamatan Makanan</p>
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

          <div className="pt-6 border-t border-gray-100 dark:border-slate-800 space-y-1">
            <Link to="/help" className="flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-slate-400 hover:bg-gray-50 rounded-lg">
              <HelpCircle className="w-5 h-5" /> Pusat Bantuan
            </Link>
            <button onClick={() => navigate('/login')} className="w-full flex items-center gap-3 px-4 py-3 text-error dark:text-red-400 hover:bg-red-50 rounded-lg transition-all">
              <LogOut className="w-5 h-5" /> Keluar
            </button>
          </div>
        </>
      ) : (
        <div className="mt-auto pb-20 space-y-1">
          <Link to="/dashboard/mitra/new-listing" className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-bold shadow-md hover:scale-[1.02] active:scale-95 transition-all">
            <Plus className="w-5 h-5" />
            Tambah Daftar Baru
          </Link>
          <div className="pt-4 mt-4 border-t border-zinc-100">
            <Link to="/dashboard/mitra/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-600 hover:bg-zinc-50 transition-all">
              <Settings className="w-5 h-5" /> Pengaturan
            </Link>
            <button onClick={() => navigate('/login')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-error hover:bg-error-container/20 transition-all">
              <LogOut className="w-5 h-5" /> Keluar
            </button>
          </div>
        </div>
      )}
    </aside>
  )
}
