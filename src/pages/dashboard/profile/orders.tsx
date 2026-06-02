import { motion } from 'motion/react'
import { stagger } from '@/lib/motion'
import { TopNav } from '@/components/layout/top-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { MobileNav } from '@/components/layout/mobile-nav'
import { OrdersHeader } from '@/components/dashboard/profile/orders/orders-header'
import { OrdersList } from '@/components/dashboard/profile/orders/orders-list'
import { OrdersStats } from '@/components/dashboard/profile/orders/orders-stats'

export default function ProfileOrders() {
  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/10">
      <Sidebar variant="profile" />
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <TopNav variant="profile" />
        <main className="flex-1 p-4 md:p-6 lg:p-10 max-w-[1200px] mx-auto w-full pb-24 lg:pb-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="w-full space-y-6"
          >
            <OrdersHeader />
            <OrdersList />
            <OrdersStats />
          </motion.div>
        </main>
        <MobileNav variant="profile" />
      </div>
    </div>
  )
}
