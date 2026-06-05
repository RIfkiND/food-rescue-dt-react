import { Award, Leaf, Users, Lock } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function Badges() {
  return (
    <motion.section variants={fadeUp} className="md:col-span-12 bg-white dark:bg-slate-900 rounded-[1rem] p-8 shadow-level-1 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-h3 text-primary text-2xl">Lencana Diperoleh</h2>
        <span className="text-caption text-primary font-bold cursor-pointer hover:underline">Lihat Semua</span>
      </div>
      <div className="flex flex-wrap gap-6">
        <div className="group flex flex-col items-center text-center space-y-2 cursor-help">
          <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 transition-transform group-hover:scale-110">
            <Award className="w-8 h-8 fill-amber-600" />
          </div>
          <span className="text-xs font-bold text-gray-700">Pelopor</span>
        </div>
        <div className="group flex flex-col items-center text-center space-y-2 cursor-help">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 transition-transform group-hover:scale-110">
            <Leaf className="w-8 h-8 fill-emerald-600" />
          </div>
          <span className="text-xs font-bold text-gray-700">Pejuang Hijau</span>
        </div>
        <div className="group flex flex-col items-center text-center space-y-2 cursor-help">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 transition-transform group-hover:scale-110">
            <Users className="w-8 h-8 fill-blue-600" />
          </div>
          <span className="text-xs font-bold text-gray-700">Pilar Komunitas</span>
        </div>
        <div className="group flex flex-col items-center text-center space-y-2 opacity-40 grayscale cursor-help">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
            <Lock className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold text-gray-700">Pahlawan Sampah</span>
        </div>
      </div>
    </motion.section>
  )
}
