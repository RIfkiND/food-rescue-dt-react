import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function AnalyticsHeader() {
  return (
    <motion.header variants={fadeUp} className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h1 className="font-h1 text-h1 text-primary text-[40px] font-bold mb-2">Analitik Kinerja</h1>
        <p className="font-body-lg text-zinc-500 text-lg">Pelacakan dampak real-time untuk dapur Anda.</p>
      </div>
      <div className="flex gap-3 bg-white p-1 rounded-xl shadow-sm border border-zinc-100 self-start md:self-end">
        <button className="px-4 py-2 text-label-md font-label-md bg-emerald-50 text-primary rounded-lg font-semibold transition-colors">7 Hari Terakhir</button>
        <button className="px-4 py-2 text-label-md font-label-md text-zinc-500 hover:bg-zinc-50 rounded-lg font-semibold transition-colors">Bulan</button>
        <button className="px-4 py-2 text-label-md font-label-md text-zinc-500 hover:bg-zinc-50 rounded-lg font-semibold transition-colors">Tahun</button>
      </div>
    </motion.header>
  )
}
