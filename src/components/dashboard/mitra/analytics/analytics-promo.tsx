import { Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function AnalyticsPromo() {
  return (
    <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
      {/* Impact Certification Card */}
      <div className="relative rounded-[2rem] overflow-hidden min-h-[200px] group">
        <img 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          alt="Vibrant marketplace with fresh organic vegetables" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0otywgwRgiDFwYkuU_HySR1ZHB9QPgvrtEn66HoCJ3ciI-E3LkOgu--3F3n6p0YOlfkU5QTTYythLk3W9Ajv2Hpzf_7wv03z64dt_TkhXwyHfg9Ochjro1IAqfTJWCRG9-yiXUmll-fRll0psjLnDX1RSIGa9TIKAeKUJ4KwFPb3fUhiWV1HBqEXTmstWdawjFN3QjvKPf7CuyPExJm7s9pW4dwoeRnaVbbCFH_vrdK-u4LAfTfoJgqCJpQFZbwISVNf9APQohWgv"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-900/40 flex items-center p-8">
          <div className="max-w-[240px]">
            <h4 className="text-white font-h3 text-[24px] font-bold mb-2">Sertifikasi Dampak</h4>
            <p className="text-white/80 text-sm mb-4">Anda berada di 5% teratas mitra pengurang sampah bulan ini!</p>
            <button className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-transform">
              Unduh Lencana
            </button>
          </div>
        </div>
      </div>

      {/* Save More with Analytics Card */}
      <div className="bg-[#8e4e14] p-8 rounded-[2rem] text-white flex justify-between items-center min-h-[200px]">
        <div className="max-w-[240px]">
          <h4 className="font-h3 text-[24px] font-bold mb-2">Hemat Lebih Banyak dengan Analitik</h4>
          <p className="text-orange-100 text-sm">Buka wawasan prediktif untuk mengantisipasi surplus inventaris sebelum terjadi.</p>
        </div>
        <div className="p-4 bg-white/10 rounded-full border border-white/20 shrink-0">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
      </div>
    </motion.div>
  )
}
