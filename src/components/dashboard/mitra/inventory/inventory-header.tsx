import { Download } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function InventoryHeader() {
  return (
    <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h2 className="font-h2 text-h2 text-primary text-[32px] font-semibold">Inventory Management</h2>
        <p className="font-body-md text-body-md text-outline">Manage and track your rescued food listings in real-time.</p>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border-[1.5px] border-primary text-primary font-label-md hover:bg-emerald-50 transition-all text-sm font-semibold">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>
    </motion.div>
  )
}
