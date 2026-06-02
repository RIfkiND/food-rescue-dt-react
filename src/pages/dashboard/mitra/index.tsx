import { motion } from 'motion/react'
import { stagger } from '@/lib/motion'
import { TopNav } from '@/components/layout/top-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { MobileNav } from '@/components/layout/mobile-nav'
import { WelcomeSection } from '@/components/dashboard/mitra/welcome-section'
import { PerformanceTiles } from '@/components/dashboard/mitra/performance-tiles'
import { SalesTrendsChart } from '@/components/dashboard/mitra/sales-trends-chart'
import { UrgentItems } from '@/components/dashboard/mitra/urgent-items'
import { RecentRescues } from '@/components/dashboard/mitra/recent-rescues'

export default function MitraDashboard() {
  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <TopNav />
        <main className="flex-1 p-6 pb-24 md:pb-6">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <WelcomeSection />
              <PerformanceTiles />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <SalesTrendsChart />
                <UrgentItems />
              </div>
              
              <RecentRescues />
            </motion.div>
          </div>
        </main>
        <MobileNav />
      </div>
    </div>
  )
}
