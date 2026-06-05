import React, { useState } from 'react'
import { motion } from 'motion/react'
import { stagger, fadeUp } from '@/lib/motion'
import { TopNav } from '@/components/layout/top-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { MobileNav } from '@/components/layout/mobile-nav'
import { ArrowLeft, Upload, CheckCircle2, Save } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'

export default function ProfileEditStore() {
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
        navigate('/dashboard/profile/store')
      }, 1500)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/10">
      <Sidebar variant="profile" />
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0">
        <TopNav variant="profile" />
        <main className="flex-1 p-6 lg:p-10 max-w-4xl mx-auto w-full pb-32 lg:pb-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <Link to="/dashboard/profile/store" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-500 hover:text-primary hover:bg-emerald-50 transition-colors shadow-sm">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="font-h2 text-[32px] text-on-surface">Edit Profil Toko</h1>
                <p className="text-zinc-500">Perbarui informasi publik dan detail penyelamatan toko Anda.</p>
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
                <h2 className="text-2xl font-bold text-emerald-800">Profil Diperbarui!</h2>
                <p className="text-zinc-500 max-w-sm">Profil toko Anda telah berhasil diperbarui dan sekarang sudah aktif.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Images Upload */}
                <motion.div variants={fadeUp} className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100 space-y-6">
                  <h3 className="font-h3 text-xl">Gambar Toko</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-bold text-zinc-700 block mb-2">Logo Toko</label>
                      <div className="border-2 border-dashed border-zinc-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-zinc-50 transition-colors cursor-pointer group h-48">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <Upload className="w-5 h-5" />
                        </div>
                        <p className="font-bold text-zinc-700 text-sm">Unggah Logo</p>
                        <p className="text-xs text-zinc-500 mt-1">1:1 Persegi (Maks 2MB)</p>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-bold text-zinc-700 block mb-2">Foto Sampul</label>
                      <div className="border-2 border-dashed border-zinc-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-zinc-50 transition-colors cursor-pointer group h-48">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <Upload className="w-5 h-5" />
                        </div>
                        <p className="font-bold text-zinc-700 text-sm">Unggah Sampul</p>
                        <p className="text-xs text-zinc-500 mt-1">16:9 Banner (Maks 5MB)</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Basic Info */}
                <motion.div variants={fadeUp} className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100 space-y-6">
                  <h3 className="font-h3 text-xl">Informasi Dasar</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 block">Nama Toko</label>
                    <input 
                      type="text" 
                      required
                      defaultValue="The Green Bakery"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 block">Kategori Toko</label>
                    <select required className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none appearance-none">
                      <option value="bakery">Toko Roti & Kue</option>
                      <option value="restaurant">Restoran</option>
                      <option value="grocery">Toko Kelontong</option>
                      <option value="cafe">Kafe</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 block">Tentang Toko</label>
                    <textarea 
                      rows={5}
                      required
                      defaultValue="At The Green Bakery, we believe that good food should never go to waste. We bake our artisan breads, pastries, and cakes fresh every single morning using locally sourced, organic ingredients."
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                    />
                  </div>
                </motion.div>

                {/* Contact & Location */}
                <motion.div variants={fadeUp} className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100 space-y-6">
                  <h3 className="font-h3 text-xl">Kontak & Lokasi</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 block">Email Kontak</label>
                      <input 
                        type="email" 
                        required
                        defaultValue="hello@greenbakery.com"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 block">Nomor Telepon</label>
                      <input 
                        type="tel" 
                        required
                        defaultValue="(555) 123-4567"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 block">Alamat Lengkap</label>
                    <input 
                      type="text" 
                      required
                      defaultValue="123 Baker Street, Portland, OR 97204"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    />
                  </div>
                </motion.div>

                {/* Operating Hours */}
                <motion.div variants={fadeUp} className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100 space-y-6">
                  <h3 className="font-h3 text-xl">Jam Operasional</h3>
                  <p className="text-sm text-zinc-500 mb-4">Atur jam buka ketika pengguna dapat mengambil makanan sisa mereka.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 block">Hari Kerja (Sen-Jum)</label>
                      <div className="flex items-center gap-2">
                        <input type="time" defaultValue="18:00" className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                        <span className="text-zinc-500 font-bold">sampai</span>
                        <input type="time" defaultValue="20:00" className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 block">Akhir Pekan (Sab-Min)</label>
                      <div className="flex items-center gap-2">
                        <input type="time" defaultValue="16:00" className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                        <span className="text-zinc-500 font-bold">sampai</span>
                        <input type="time" defaultValue="18:00" className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Actions */}
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
                  <Link 
                    to="/dashboard/profile/store"
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
                      <>
                        <Save className="w-5 h-5 mr-2" /> Simpan Perubahan
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </main>
        <MobileNav variant="profile" />
      </div>
    </div>
  )
}
