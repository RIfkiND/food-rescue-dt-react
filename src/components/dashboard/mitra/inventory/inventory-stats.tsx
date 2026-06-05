import { CheckCircle2, HeartHandshake, DollarSign, TimerOff } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function InventoryStats() {
  return (
    <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-level-1 border border-zinc-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 bg-emerald-50 text-primary rounded-lg flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </span>
          <span className="text-caption font-label-md text-outline uppercase tracking-wider">Daftar Aktif</span>
        </div>
        <p className="text-h2 font-h2 text-on-surface text-[32px] font-bold">12</p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-level-1 border border-zinc-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 bg-orange-50 text-secondary-container rounded-lg flex items-center justify-center text-amber-600">
            <HeartHandshake className="w-5 h-5" />
          </span>
          <span className="text-caption font-label-md text-outline uppercase tracking-wider">Total Diselamatkan</span>
        </div>
        <p className="text-h2 font-h2 text-on-surface text-[32px] font-bold">348</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-level-1 border border-zinc-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
            <DollarSign className="w-5 h-5" />
          </span>
          <span className="text-caption font-label-md text-outline uppercase tracking-wider">Pendapatan Tersimpan</span>
        </div>
        <p className="text-h2 font-h2 text-on-surface text-[32px] font-bold">Rp 1.240.000</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-level-1 border border-zinc-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 bg-red-50 text-error rounded-lg flex items-center justify-center">
            <TimerOff className="w-5 h-5" />
          </span>
          <span className="text-caption font-label-md text-outline uppercase tracking-wider">Sampah Dihindari</span>
        </div>
        <p className="text-h2 font-h2 text-on-surface text-[32px] font-bold">84kg</p>
      </div>
    </motion.div>
  )
}
