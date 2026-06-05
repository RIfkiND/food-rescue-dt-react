import { Edit2, BadgeCheck } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function PersonalInfo() {
  return (
    <motion.section variants={fadeUp} className="md:col-span-7 lg:col-span-8 bg-white dark:bg-slate-900 rounded-[1rem] p-8 shadow-level-1 border border-gray-100 relative overflow-hidden">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="font-h3 text-primary mb-1 text-2xl">Informasi Pribadi</h2>
          <p className="text-caption text-gray-400">Perbarui detail Anda untuk pengalaman yang lebih baik</p>
        </div>
        <button className="flex items-center gap-2 text-primary hover:bg-emerald-50 px-4 py-2 rounded-lg transition-colors font-label-md border border-primary/20">
          <Edit2 className="w-4 h-4" />
          Edit Profil
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Nama Lengkap</label>
            <p className="text-body-md font-semibold">Alex Rivers</p>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Alamat Email</label>
            <p className="text-body-md font-semibold">alex.rivers@eco-hero.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Nomor Telepon</label>
            <div className="flex items-center gap-2">
              <span className="text-lg">🇬🇧</span>
              <p className="text-body-md font-semibold">+44 7700 900077</p>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Jenis Akun</label>
            <div className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full">
              <BadgeCheck className="w-4 h-4 fill-primary text-primary-fixed" />
              <span className="text-xs font-bold">Individu Terverifikasi</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
