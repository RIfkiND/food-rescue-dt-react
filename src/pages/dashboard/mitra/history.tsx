import { motion } from 'motion/react'
import { stagger } from '@/lib/motion'
import { TopNav } from '@/components/layout/top-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { MobileNav } from '@/components/layout/mobile-nav'
import { HistoryHeader } from '@/components/dashboard/mitra/history/history-header'
import { HistoryTable } from '@/components/dashboard/mitra/history/history-table'

export default function MitraHistory() {
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
            <HistoryHeader />
            <HistoryTable />
          </motion.div>
        </main>
        <MobileNav variant="mitra" />
      </div>
    </div>
  )
}
