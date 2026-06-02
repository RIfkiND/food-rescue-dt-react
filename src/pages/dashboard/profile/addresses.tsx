import { motion } from 'motion/react'
import { stagger } from '@/lib/motion'
import { TopNav } from '@/components/layout/top-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { MobileNav } from '@/components/layout/mobile-nav'
import { AddressesHeader } from '@/components/dashboard/profile/addresses/addresses-header'
import { AddressesList } from '@/components/dashboard/profile/addresses/addresses-list'
import { AddressForm } from '@/components/dashboard/profile/addresses/address-form'

export default function ProfileAddresses() {
  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/10">
      <Sidebar variant="profile" />
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <TopNav variant="profile" />
        <main className="flex-1 p-6 lg:p-10 max-w-[1200px] mx-auto w-full pb-24 lg:pb-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <AddressesHeader />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <AddressesList />
              </div>
              <div className="lg:col-span-7">
                <AddressForm />
              </div>
            </div>
          </motion.div>
        </main>
        <MobileNav variant="profile" />
      </div>
    </div>
  )
}
