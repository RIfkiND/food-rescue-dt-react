import { ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'
import { Link } from 'react-router-dom'

export function SettingsHeader() {
  return (
    <motion.div variants={fadeUp} className="mb-6">
      <nav className="flex items-center gap-1 text-xs text-outline mb-2">
        <Link to="/dashboard/profile" className="hover:text-primary transition-colors font-medium">Profile</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-primary font-bold">Settings</span>
      </nav>
      <h1 className="font-h1 text-[40px] text-on-surface font-bold">Account Settings</h1>
      <p className="text-body-lg text-on-surface-variant mt-1">Manage your profile, preferences, and security settings.</p>
    </motion.div>
  )
}
