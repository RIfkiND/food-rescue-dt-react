import { Filter } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function OrdersHeader() {
  return (
    <motion.div variants={fadeUp} className="flex justify-between items-end mb-6">
      <div>
        <h1 className="font-h2 text-h2 text-on-surface text-[32px] font-semibold">Rescue History</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">Track your contribution to reducing food waste.</p>
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-label-md flex items-center gap-2 hover:bg-surface-container-high transition-colors font-semibold text-sm">
          <Filter className="w-5 h-5" />
          Filter
        </button>
      </div>
    </motion.div>
  )
}
