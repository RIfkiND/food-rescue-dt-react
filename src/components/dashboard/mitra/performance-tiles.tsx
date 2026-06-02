import { DollarSign, Leaf, Archive } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function PerformanceTiles() {
  return (
    <motion.section variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-level-1 border border-white hover:shadow-md transition-shadow group">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <DollarSign className="w-6 h-6" />
          </div>
          <span className="text-primary text-label-md bg-primary-fixed/20 px-2 py-1 rounded">+12.5%</span>
        </div>
        <p className="text-outline font-label-md mb-1">Today's Revenue</p>
        <h2 className="font-h2 text-[32px] text-on-background">$1,284.50</h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-level-1 border border-white hover:shadow-md transition-shadow group">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-secondary-container/10 rounded-full flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
            <Leaf className="w-6 h-6" />
          </div>
          <span className="text-secondary text-label-md bg-secondary-fixed/20 px-2 py-1 rounded">+5 items</span>
        </div>
        <p className="text-outline font-label-md mb-1">Items Rescued Today</p>
        <h2 className="font-h2 text-[32px] text-on-background">42 Items</h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-level-1 border border-white hover:shadow-md transition-shadow group">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-tertiary-fixed/30 rounded-full flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
            <Archive className="w-6 h-6" />
          </div>
          <span className="text-label-md text-outline">8 expiring soon</span>
        </div>
        <p className="text-outline font-label-md mb-1">Active Listings</p>
        <h2 className="font-h2 text-[32px] text-on-background">18 Listings</h2>
      </div>
    </motion.section>
  )
}
