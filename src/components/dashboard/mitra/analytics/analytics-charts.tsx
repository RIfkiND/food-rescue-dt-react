import { Leaf } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function AnalyticsCharts() {
  return (
    <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Waste Recovery Breakdown */}
      <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
          <h3 className="font-h3 text-[24px] font-bold text-on-surface">Tren Pengurangan Sampah</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span className="text-caption text-zinc-500 font-medium">Dipulihkan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary-container"></span>
              <span className="text-caption text-zinc-500 font-medium">Diarahkan Ulang</span>
            </div>
          </div>
        </div>
        
        <div className="relative h-64 flex items-end justify-between gap-4 px-4 border-b border-zinc-100">
          {/* Dynamic Bars Simulator */}
          {[
            { label: 'Sen', h: '40%', opacity: 'opacity-20' },
            { label: 'Sel', h: '65%', opacity: 'opacity-40' },
            { label: 'Rab', h: '85%', opacity: 'opacity-100', active: true },
            { label: 'Kam', h: '55%', opacity: 'opacity-30' },
            { label: 'Jum', h: '75%', opacity: 'opacity-50' },
            { label: 'Sab', h: '30%', opacity: 'opacity-20' },
            { label: 'Min', h: '20%', opacity: 'opacity-10' },
          ].map((day, i) => (
            <div key={i} className="w-full flex flex-col items-center gap-2 h-full justify-end group">
              <div 
                className={`w-full bg-primary rounded-t-lg transition-all duration-300 ${day.opacity} group-hover:opacity-80 group-hover:-translate-y-1 ${day.active ? 'shadow-lg shadow-emerald-900/10' : ''}`} 
                style={{ height: day.h }}
              ></div>
              <span className={`text-caption ${day.active ? 'text-primary font-bold' : 'text-zinc-400 font-medium'}`}>{day.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Impact Demographics */}
      <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100 flex flex-col">
        <h3 className="font-h3 text-[24px] font-bold mb-6 text-on-surface">Dampak berdasarkan Kategori</h3>
        <div className="space-y-6 flex-1">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-zinc-600 font-semibold">Roti & Biji-bijian</span>
              <span className="text-primary font-bold">42%</span>
            </div>
            <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[42%] rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-zinc-600 font-semibold">Produk & Buah</span>
              <span className="text-primary font-bold">35%</span>
            </div>
            <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-300 w-[35%] rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-zinc-600 font-semibold">Makanan Siap Saji</span>
              <span className="text-primary font-bold">18%</span>
            </div>
            <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
              <div className="h-full bg-secondary-container w-[18%] rounded-full bg-orange-300"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-zinc-600 font-semibold">Susu & Lainnya</span>
              <span className="text-primary font-bold">5%</span>
            </div>
            <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
              <div className="h-full bg-zinc-300 w-[5%] rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 p-4 bg-surface rounded-xl flex items-center gap-4">
          <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
            <Leaf className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-tight">Pengurangan Emisi</p>
            <p className="text-sm font-bold text-primary">2.4 Ton CO2 Dihemat</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
