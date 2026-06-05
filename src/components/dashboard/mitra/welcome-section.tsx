import { Calendar, Download } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function WelcomeSection() {
  return (
    <motion.header variants={fadeUp} className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h1 className="font-h1 text-[40px] text-on-background">Selamat datang kembali, Green Bistro</h1>
        <p className="text-body-lg text-outline mt-2">Berikut adalah kinerja penyelamatan makanan Anda hari ini.</p>
      </div>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-all">
          <Calendar className="w-4 h-4" />
          24 Okt - 30 Okt
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:shadow-lg transition-all">
          <Download className="w-4 h-4" />
          Unduh Laporan
        </button>
      </div>
    </motion.header>
  )
}
