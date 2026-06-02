import { 
  LayoutDashboard, 
  Package, 
  Plus, 
  LineChart, 
  User,
  Home,
  List,
  HeartHandshake
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  variant?: 'mitra' | 'profile'
}

export function MobileNav({ variant = 'mitra' }: MobileNavProps) {
  const isProfile = variant === 'profile'
  const location = useLocation()
  const path = location.pathname

  const profileLinks = [
    { name: 'Home', icon: Home, path: '/dashboard/profile' },
    { name: 'Orders', icon: List, path: '/dashboard/profile/orders' },
    { name: 'Impact', icon: HeartHandshake, path: '/dashboard/profile/impact' },
    { name: 'Profile', icon: User, path: '/dashboard/profile/settings' },
  ]

  const mitraLinks = [
    { name: 'Home', icon: LayoutDashboard, path: '/dashboard/mitra' },
    { name: 'Items', icon: Package, path: '/dashboard/mitra/inventory' },
    { name: 'Stats', icon: LineChart, path: '/dashboard/mitra/analytics' },
    { name: 'Profile', icon: User, path: '/dashboard/mitra/users' },
  ]

  const links = isProfile ? profileLinks : mitraLinks

  return (
    <nav className={cn(
      "fixed bottom-0 left-0 w-full z-50 flex items-center justify-around",
      isProfile 
        ? "lg:hidden px-4 pb-safe pt-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-gray-100 dark:border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-2xl"
        : "h-16 bg-white/80 backdrop-blur-md border-t border-zinc-100 md:hidden px-6"
    )}>
      {links.map((link, index) => {
        const isActive = path === link.path
        // Insert the Add button in the middle for Mitra
        if (!isProfile && index === 2) {
          return (
            <div key="add-button" className="flex items-center gap-2">
              <div className="-mt-8 mx-2">
                <button className="w-12 h-12 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
                  <Plus className="w-6 h-6" />
                </button>
              </div>
              <Link 
                to={link.path}
                className={cn(
                  "flex flex-col items-center gap-1", 
                  isActive ? "text-primary" : "text-zinc-400"
                )}
              >
                <link.icon className={cn("w-6 h-6", isActive && "fill-primary")} />
                <span className={cn("text-[10px]", isActive && "font-bold")}>{link.name}</span>
              </Link>
            </div>
          )
        }

        return (
          <Link 
            key={link.name}
            to={link.path}
            className={cn(
              "flex flex-col items-center justify-center py-1",
              isProfile 
                ? (isActive ? "text-emerald-700 dark:text-emerald-400 relative after:content-[''] after:w-1 after:h-1 after:bg-emerald-700 after:rounded-full after:mt-1" : "text-gray-400 dark:text-slate-500")
                : (isActive ? "text-primary gap-1" : "text-zinc-400 gap-1")
            )}
          >
            <link.icon className={cn(isProfile ? "w-6 h-6" : "w-6 h-6", isActive && !isProfile && "fill-primary", isActive && isProfile && "fill-emerald-700")} />
            <span className={cn("font-epilogue text-[10px] mt-1", isProfile ? "font-medium" : (isActive ? "font-bold" : ""))}>{link.name}</span>
          </Link>
        )
      })}
    </nav>
  )
}
