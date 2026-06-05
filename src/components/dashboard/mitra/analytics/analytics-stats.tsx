import { TrendingUp, DollarSign, Users, CheckCircle2 } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function AnalyticsStats() {
  return (
    <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="md:col-span-2 bg-primary-container p-6 rounded-[2rem] text-white flex flex-col justify-between overflow-hidden relative group min-h-[240px]">
        <div className="relative z-10">
          <span className="px-3 py-1 bg-white/20 rounded-full text-caption font-label-md backdrop-blur-md text-xs font-semibold">Total Pengurangan Sampah</span>
          <h3 className="text-[40px] font-bold mt-4 mb-2">1.284 kg</h3>
          <p className="text-emerald-100 flex items-center gap-1 text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            12% peningkatan dari minggu lalu
          </p>
        </div>
        <div className="mt-8 flex items-end gap-1 h-24 opacity-40 group-hover:opacity-60 transition-opacity relative z-10">
          <div className="w-full bg-white rounded-t-sm h-[30%]"></div>
          <div className="w-full bg-white rounded-t-sm h-[45%]"></div>
          <div className="w-full bg-white rounded-t-sm h-[35%]"></div>
          <div className="w-full bg-white rounded-t-sm h-[60%]"></div>
          <div className="w-full bg-white rounded-t-sm h-[50%]"></div>
          <div className="w-full bg-white rounded-t-sm h-[85%]"></div>
          <div className="w-full bg-white rounded-t-sm h-[70%]"></div>
        </div>
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
      
      <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-zinc-100 flex flex-col justify-between min-h-[240px]">
        <div>
          <span className="p-3 inline-flex bg-orange-100 rounded-xl text-amber-700">
            <DollarSign className="w-6 h-6" />
          </span>
          <p className="text-zinc-500 font-label-md mt-6 text-sm font-semibold">Pendapatan Tersimpan</p>
          <h3 className="text-3xl font-bold text-on-surface mt-1">Rp 4.520.000</h3>
        </div>
        <div className="text-emerald-600 font-bold flex items-center gap-1 text-sm">
          <CheckCircle2 className="w-4 h-4" />
          Target Tercapai
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-zinc-100 flex flex-col justify-between min-h-[240px]">
        <div>
          <span className="p-3 inline-flex bg-blue-50 rounded-xl text-blue-600">
            <Users className="w-6 h-6" />
          </span>
          <p className="text-zinc-500 font-label-md mt-6 text-sm font-semibold">Dampak Pelanggan</p>
          <h3 className="text-3xl font-bold text-on-surface mt-1">324 Active</h3>
        </div>
        <div className="text-zinc-400 text-sm font-medium">
          +14 baru periode ini
        </div>
      </div>
    </motion.div>
  )
}
