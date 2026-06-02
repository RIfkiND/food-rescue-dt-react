import { PiggyBank, Leaf } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function OrdersStats() {
  return (
    <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pb-8">
      <div className="bg-orange-50/50 border border-orange-100 p-6 rounded-xl flex items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
          <PiggyBank className="w-8 h-8" />
        </div>
        <div>
          <h4 className="font-label-md text-sm font-semibold text-orange-800">Total Savings</h4>
          <p className="font-h3 text-[24px] font-bold text-[#8e4e14]">$142.50</p>
          <p className="font-caption text-xs text-on-surface-variant mt-1">Compared to retail prices</p>
        </div>
      </div>
      
      <div className="bg-emerald-50/50 border border-emerald-100 p-6 rounded-xl flex items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
          <Leaf className="w-8 h-8" />
        </div>
        <div>
          <h4 className="font-label-md text-sm font-semibold text-emerald-800">Carbon Offset</h4>
          <p className="font-h3 text-[24px] font-bold text-primary">31.2 kg CO₂</p>
          <p className="font-caption text-xs text-on-surface-variant mt-1">Equivalent to 5 trees planted</p>
        </div>
      </div>
    </motion.div>
  )
}
