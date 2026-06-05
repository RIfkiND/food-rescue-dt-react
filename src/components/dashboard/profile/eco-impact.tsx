import { HeartHandshake, Utensils, Cloud } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function EcoImpact() {
  return (
    <motion.section variants={fadeUp} className="md:col-span-5 lg:col-span-4 bg-primary text-white rounded-[1rem] p-8 shadow-xl relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <HeartHandshake className="w-32 h-32" />
      </div>
      <h2 className="font-h3 mb-6 relative z-10 text-2xl">Dampak Lingkungan Anda</h2>
      <div className="space-y-6 relative z-10">
        <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10">
          <div className="bg-secondary-container p-3 rounded-lg">
            <Utensils className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-h2 font-bold leading-none text-3xl">42</p>
            <p className="text-caption text-emerald-100/80 mt-1">Makanan Diselamatkan</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10">
          <div className="bg-tertiary-container p-3 rounded-lg">
            <Cloud className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-h2 font-bold leading-none text-3xl">12kg</p>
            <p className="text-caption text-emerald-100/80 mt-1">Emisi CO2 Berkurang</p>
          </div>
        </div>
        <button className="w-full py-3 bg-white text-primary rounded-lg font-bold hover:bg-emerald-50 transition-colors">
          Lihat Laporan Dampak Detail
        </button>
      </div>
    </motion.section>
  )
}
