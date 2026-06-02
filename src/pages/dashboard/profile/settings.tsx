import { motion } from 'motion/react'
import { stagger } from '@/lib/motion'
import { TopNav } from '@/components/layout/top-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { MobileNav } from '@/components/layout/mobile-nav'
import { SettingsHeader } from '@/components/dashboard/profile/settings/settings-header'
import { SettingsForm } from '@/components/dashboard/profile/settings/settings-form'

export default function ProfileSettings() {
  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/10">
      <Sidebar variant="profile" />
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0">
        <TopNav variant="profile" />
        <main className="flex-1 p-6 lg:p-10 max-w-4xl mx-auto w-full pb-24 lg:pb-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <SettingsHeader />
            <SettingsForm />
          </motion.div>
        </main>
        <MobileNav variant="profile" />
      </div>
    </div>
  )
}
