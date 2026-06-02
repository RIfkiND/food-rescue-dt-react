import { motion } from 'motion/react'
import { stagger } from '@/lib/motion'
import { TopNav } from '@/components/layout/top-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { MobileNav } from '@/components/layout/mobile-nav'
import { AnalyticsHeader } from '@/components/dashboard/mitra/analytics/analytics-header'
import { AnalyticsStats } from '@/components/dashboard/mitra/analytics/analytics-stats'
import { AnalyticsCharts } from '@/components/dashboard/mitra/analytics/analytics-charts'
import { AnalyticsDistributions } from '@/components/dashboard/mitra/analytics/analytics-distributions'
import { AnalyticsPromo } from '@/components/dashboard/mitra/analytics/analytics-promo'

export default function MitraAnalytics() {
  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/10">
      <Sidebar variant="mitra" />
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <TopNav variant="mitra" />
        <main className="flex-1 p-6 lg:p-10 max-w-6xl mx-auto space-y-8 w-full pb-24 lg:pb-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <AnalyticsHeader />
            <AnalyticsStats />
            <AnalyticsCharts />
            <AnalyticsDistributions />
            <AnalyticsPromo />
          </motion.div>
        </main>
        <MobileNav variant="mitra" />
      </div>
    </div>
  )
}
