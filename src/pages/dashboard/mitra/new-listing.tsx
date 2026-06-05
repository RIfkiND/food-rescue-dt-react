import React, { useState } from 'react'
import { motion } from 'motion/react'
import { stagger, fadeUp } from '@/lib/motion'
import { TopNav } from '@/components/layout/top-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { MobileNav } from '@/components/layout/mobile-nav'
import { ArrowLeft, Upload, CheckCircle2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function MitraNewListing() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => {
        navigate('/dashboard/mitra/inventory')
      }, 1500)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/10">
      <Sidebar variant="mitra" />
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0">
        <TopNav variant="mitra" />
        <main className="flex-1 p-6 lg:p-10 max-w-4xl mx-auto w-full pb-32 lg:pb-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <Link to="/dashboard/mitra/inventory" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-500 hover:text-primary hover:bg-emerald-50 transition-colors shadow-sm">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="font-h2 text-[32px] text-on-surface">Tambah Daftar Baru</h1>
                <p className="text-zinc-500">Buat item penyelamatan makanan baru.</p>
              </div>
            </motion.div>

            {/* Form */}
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 rounded-[2rem] shadow-sm border border-emerald-100 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-emerald-800">Daftar Diterbitkan!</h2>
                <p className="text-zinc-500 max-w-sm">Item Anda sekarang ditayangkan dan dapat dilihat oleh penyelamat makanan di sekitar.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Image Upload */}
                <motion.div variants={fadeUp} className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100">
                  <h3 className="font-h3 text-xl mb-4">Foto Item</h3>
                  <div className="border-2 border-dashed border-zinc-200 rounded-2xl p-12 flex flex-col items-center justify-center text-center hover:bg-zinc-50 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Upload className="w-8 h-8" />
                    </div>
                    <p className="font-bold text-zinc-700 mb-1">Klik untuk mengunggah atau seret dan lepas</p>
                    <p className="text-sm text-zinc-500">SVG, PNG, JPG atau GIF (maks. 5MB)</p>
                  </div>
                </motion.div>

                {/* Details */}
                <motion.div variants={fadeUp} className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100 space-y-6">
                  <h3 className="font-h3 text-xl">Detail Item</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 block">Nama Item</label>
                    <input 
                      type="text" 
                      required
                      placeholder="contoh. Kotak Kue Campur" 
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 block">Kategori</label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none appearance-none">
                        <option value="">Pilih kategori...</option>
                        <option value="bakery">Roti & Biji-bijian</option>
                        <option value="produce">Produk & Buah</option>
                        <option value="meals">Makanan Siap Saji</option>
                        <option value="dairy">Susu & Lainnya</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 block">Kuantitas / Berat</label>
                      <input 
                        type="text" 
                        required
                        placeholder="contoh. 5 kg atau 10 kotak" 
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 block">Harga Asli (Rp)</label>
                      <input 
                        type="number" 
                        step="0.01"
                        required
                        placeholder="0.00" 
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 block">Harga Penyelamatan (Rp)</label>
                      <input 
                        type="number" 
                        step="0.01"
                        required
                        placeholder="0.00" 
                        className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-emerald-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-emerald-800 font-bold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 block">Batas Waktu Pengambilan</label>
                    <input 
                      type="time" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 block">Deskripsi (Opsional)</label>
                    <textarea 
                      rows={4}
                      placeholder="Tambahkan detail spesifik tentang makanan, kemasan, atau instruksi pengambilan..." 
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                    />
                  </div>
                </motion.div>

                {/* Actions */}
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
                  <Link 
                    to="/dashboard/mitra/inventory"
                    className="px-8 py-4 rounded-xl font-bold text-zinc-600 bg-white border border-zinc-200 hover:bg-zinc-50 transition-colors text-center"
                  >
                    Batal
                  </Link>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 rounded-xl font-bold text-white bg-primary hover:bg-primary-container transition-all shadow-lg shadow-primary/20 flex items-center justify-center min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      "Terbitkan Daftar"
                    )}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </main>
        <MobileNav variant="mitra" />
      </div>
    </div>
  )
}
