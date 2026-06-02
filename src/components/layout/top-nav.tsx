import { Search, Bell, HelpCircle, ShoppingCart, History, Settings, LogOut, ChevronDown, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState, useRef, useEffect } from 'react'

interface TopNavProps {
  variant?: 'mitra' | 'profile'
  className?: string
}

import { Link, useLocation } from 'react-router-dom'

export function TopNav({ variant = 'mitra', className }: TopNavProps) {
  const isProfile = variant === 'profile'
  const location = useLocation()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  const getActiveRouteName = () => {
    if (isProfile) {
      if (location.pathname.includes('/orders')) return 'Orders'
      if (location.pathname.includes('/addresses')) return 'Addresses'
      if (location.pathname.includes('/settings')) return 'Settings'
      return 'Profile'
    } else {
      if (location.pathname.includes('/inventory')) return 'Inventory'
      if (location.pathname.includes('/analytics')) return 'Analytics'
      if (location.pathname.includes('/history')) return 'History'
      if (location.pathname.includes('/marketplace')) return 'Marketplace'
      if (location.pathname.includes('/reports')) return 'Reports'
      return 'Dashboard'
    }
  }

  const activeRouteName = getActiveRouteName()

  return (
    <header className={cn(
      "sticky top-0 z-40 flex items-center justify-between px-6 h-16 w-full shadow-sm font-epilogue border-b transition-colors",
      isProfile 
        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-gray-100 dark:border-slate-800" 
        : "bg-white dark:bg-zinc-950 dark:shadow-none border-zinc-100 dark:border-zinc-800",
      className
    )}>
      <div className={cn("flex items-center w-full max-w-[1200px] mx-auto", isProfile ? "justify-between" : "justify-between")}>
        <div className="flex items-center gap-4">
          <Link to={isProfile ? "/dashboard/profile" : "/dashboard/mitra"} className="text-xl font-bold tracking-tight text-emerald-800 dark:text-emerald-400">
            {isProfile ? "Food Rescue" : "RescueEat"}
          </Link>
          <div className="hidden md:flex items-center gap-3 ml-2">
            <span className="text-zinc-300 dark:text-zinc-600">/</span>
            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
              {activeRouteName}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {!isProfile && (
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
              <input
                className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm focus:ring-2 focus:ring-primary w-64 transition-all"
                placeholder="Search orders..."
                type="text"
              />
            </div>
          )}
          
          <div className={cn("flex items-center", isProfile ? "gap-4" : "gap-2")}>
            <button className={cn("p-2 rounded-full transition-colors relative", isProfile ? "text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 active:scale-95" : "hover:bg-emerald-50")}>
              <Bell className={isProfile ? "w-6 h-6" : "w-6 h-6 text-emerald-800"} />
              {!isProfile && <span className="absolute top-2 right-2 w-2 h-2 bg-secondary-container rounded-full"></span>}
            </button>
            <button className={cn("p-2 rounded-full transition-colors", isProfile ? "text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 active:scale-95" : "hover:bg-emerald-50")}>
              {isProfile ? <ShoppingCart className="w-6 h-6" /> : <HelpCircle className="w-6 h-6 text-emerald-800" />}
            </button>
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={cn(
                  "flex items-center cursor-pointer transition-transform active:scale-95", 
                  isProfile ? "w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container" : "ml-2 border-l border-zinc-200 pl-4 gap-1"
                )}
              >
                <img
                  className={cn(isProfile ? "w-full h-full object-cover" : "w-8 h-8 rounded-full border border-primary-fixed")}
                  alt="Profile"
                  src={isProfile 
                    ? "https://lh3.googleusercontent.com/aida-public/AB6AXuCkzM1QkQvKj-3ngJ0-HJ9st8x8VSYf170m2z3qFrfwHGLrl80E1rcf7OsjKgHxuYdOFzeqqKcl4cB_hIgWNP95bYgeVfDNkqVXDWWxbJatqeEXUzB3fRlWZSXS8LaCKAHECS6KWv3eyRvbMDXZXm3phMLPVTjGMF-cajIc84gNtMY66dMQ-nalGzC4uzwWRjBPRJozt4SRxOl94j9zdC0j22SHd3enCwSdHqfGr0N024g9Dr_0ulML5Ja22egpesKcfQ8O3TSviiX6"
                    : "https://lh3.googleusercontent.com/aida-public/AB6AXuASX7SfYp6w_TWjPKQvidaj6eV0zleTLuAV85zeQgE9Hy0FjxSc9nPDO29uc4ij2SM5E25qxvuFPw_CYT-W6gg-2sRvmKuZiXeDkzGaJ-SwbirUutJECm-Vg1CD1G8D1YGvD_3MOP9A5jTyhvQ1307Ub4C9GHvFMrwmKu-Mr7hSi38oETGRd_Ca5FrYI-DQvBMMKxUzUcrXllvMycYVkg0PScLLTCXdoYTkGe3W60Ihe89gmimCY_olGclRQr6RUoSPeDKArRgfm1_S"
                  }
                />
                {!isProfile && <ChevronDown className="w-4 h-4 text-zinc-500" />}
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-900 rounded-xl shadow-level-2 border border-zinc-100 dark:border-zinc-800 py-1 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-2 border-b border-zinc-100 dark:border-zinc-800 mb-1">
                    <p className="font-bold text-sm text-on-surface dark:text-white">
                      {isProfile ? "Alex Rivers" : "RescueEat Admin"}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {isProfile ? "Local Hero" : "The Green Bakery"}
                    </p>
                  </div>
                  <Link 
                    to= "/dashboard/profile"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                  <Link 
                    to={isProfile ? "/dashboard/profile/orders" : "/dashboard/mitra/history"}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <History className="w-4 h-4" />
                    History
                  </Link>
                  <Link 
                    to={isProfile ? "/dashboard/profile/settings" : "/dashboard/mitra/settings"}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </Link>
                  <div className="h-px bg-zinc-100 dark:bg-zinc-800 my-1"></div>
                  <button 
                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <LogOut className="w-4 h-4" />
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
