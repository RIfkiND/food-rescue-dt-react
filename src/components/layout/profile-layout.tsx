import { ReactNode } from 'react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'
import { TopNav } from '@/components/layout/top-nav'
import { MobileNav } from '@/components/layout/mobile-nav'
import { User, History, MapPin, Settings } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface ProfileLayoutProps {
  children: ReactNode
}

export function ProfileLayout({ children }: ProfileLayoutProps) {
  const location = useLocation()
  const path = location.pathname

  const links = [
    { name: 'Personal Info', icon: User, path: '/dashboard/profile' },
    { name: 'Order History', icon: History, path: '/dashboard/profile/orders' },
    { name: 'Saved Addresses', icon: MapPin, path: '/dashboard/profile/addresses' },
    { name: 'Settings', icon: Settings, path: '/dashboard/profile/settings' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#345c36] font-sans selection:bg-white/20">
      <TopNav variant="profile" className="bg-white sticky top-0 z-50 border-none shadow-sm" />
      
      <main className="flex-1 w-full max-w-[1200px] mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 pb-24 lg:pb-12">
        {/* Inner Sidebar for Profile */}
        <aside className="w-full lg:w-[280px] shrink-0">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-3xl p-6 shadow-xl flex flex-col items-center sticky top-[100px]"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-emerald-50 mb-4 shadow-sm">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkzM1QkQvKj-3ngJ0-HJ9st8x8VSYf170m2z3qFrfwHGLrl80E1rcf7OsjKgHxuYdOFzeqqKcl4cB_hIgWNP95bYgeVfDNkqVXDWWxbJatqeEXUzB3fRlWZSXS8LaCKAHECS6KWv3eyRvbMDXZXm3phMLPVTjGMF-cajIc84gNtMY66dMQ-nalGzC4uzwWRjBPRJozt4SRxOl94j9zdC0j22SHd3enCwSdHqfGr0N024g9Dr_0ulML5Ja22egpesKcfQ8O3TSviiX6" 
                alt="Alex Rivera"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-h3 text-xl font-bold text-on-surface mb-1">Alex Rivera</h2>
            <p className="text-xs text-zinc-500 mb-8 font-medium">Rescue Member since 2023</p>

            <nav className="w-full flex flex-col gap-2">
              {links.map((link) => {
                const isActive = path === link.path
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 font-label-md text-sm",
                      isActive 
                        ? "bg-primary text-white shadow-md font-bold" 
                        : "text-zinc-600 hover:bg-zinc-50 hover:text-primary font-semibold"
                    )}
                  >
                    <link.icon className={cn("w-5 h-5", isActive ? "text-white" : "text-zinc-400")} />
                    {link.name}
                  </Link>
                )
              })}
            </nav>
            
            <div className="w-full mt-8 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex flex-col items-center">
              <p className="text-[10px] text-primary font-bold uppercase tracking-wider mb-1">Impact</p>
              <p className="text-xl font-black text-primary">12.5 kg</p>
              <p className="text-[10px] text-zinc-600 font-medium">Food Rescued</p>
            </div>
          </motion.div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl overflow-hidden min-h-[600px]">
          {children}
        </div>
      </main>

      <MobileNav variant="profile" />
    </div>
  )
}
