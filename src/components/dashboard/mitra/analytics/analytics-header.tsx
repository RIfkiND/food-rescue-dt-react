import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function AnalyticsHeader() {
  return (
    <motion.header variants={fadeUp} className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h1 className="font-h1 text-h1 text-primary text-[40px] font-bold mb-2">Performance Analytics</h1>
        <p className="font-body-lg text-zinc-500 text-lg">Real-time impact tracking for your neighborhood kitchen.</p>
      </div>
      <div className="flex gap-3 bg-white p-1 rounded-xl shadow-sm border border-zinc-100 self-start md:self-end">
        <button className="px-4 py-2 text-label-md font-label-md bg-emerald-50 text-primary rounded-lg font-semibold transition-colors">Last 7 Days</button>
        <button className="px-4 py-2 text-label-md font-label-md text-zinc-500 hover:bg-zinc-50 rounded-lg font-semibold transition-colors">Month</button>
        <button className="px-4 py-2 text-label-md font-label-md text-zinc-500 hover:bg-zinc-50 rounded-lg font-semibold transition-colors">Year</button>
      </div>
    </motion.header>
  )
}
