import { Download, Filter } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function HistoryHeader() {
  return (
    <motion.div variants={fadeUp} className="flex justify-between items-end mb-6">
      <div>
        <h1 className="font-h2 text-h2 text-primary text-[32px] font-semibold">Distribution History</h1>
        <p className="font-body-md text-body-md text-outline">Complete log of all rescued food distributions.</p>
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-label-md flex items-center gap-2 hover:bg-surface-container-high transition-colors font-semibold text-sm">
          <Filter className="w-4 h-4" />
          Filter
        </button>
        <button className="px-4 py-2 border-[1.5px] border-primary text-primary rounded-lg text-label-md flex items-center gap-2 hover:bg-emerald-50 transition-colors font-semibold text-sm">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>
    </motion.div>
  )
}
