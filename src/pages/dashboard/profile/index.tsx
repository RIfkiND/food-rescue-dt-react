import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { stagger, fadeUp } from '@/lib/motion'
import { TopNav } from '@/components/layout/top-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { MobileNav } from '@/components/layout/mobile-nav'
import { PersonalInfo } from '@/components/dashboard/profile/personal-info'
import { EcoImpact } from '@/components/dashboard/profile/eco-impact'
import { Badges } from '@/components/dashboard/profile/badges'
import { SavedAddresses } from '@/components/dashboard/profile/saved-addresses'

export default function ProfileDashboard() {
  const [greeting, setGreeting] = useState("Welcome back, Alex. Your contributions are making a real difference today.")

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) {
      setGreeting("Good morning, Alex. Ready to rescue some food today?")
    } else if (hour < 18) {
      setGreeting("Good afternoon, Alex. Your contributions are making a real difference today.")
    } else {
      setGreeting("Good evening, Alex. Thank you for your continued support for the community.")
    }
  }, [])

  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/10">
      <Sidebar variant="profile" />
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <TopNav variant="profile" />
        <main className="flex-1 p-6 lg:p-10 max-w-6xl mx-auto space-y-8 w-full pb-24 lg:pb-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-8 w-full"
          >
            <motion.header variants={fadeUp}>
              <h1 className="font-h1 text-primary text-[40px]">Profile</h1>
              <p className="text-body-lg text-gray-500 mt-2">{greeting}</p>
            </motion.header>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
              <PersonalInfo />
              <EcoImpact />
              <Badges />
              <SavedAddresses />
            </div>
          </motion.div>
        </main>
        <MobileNav variant="profile" />
      </div>
    </div>
  )
}
