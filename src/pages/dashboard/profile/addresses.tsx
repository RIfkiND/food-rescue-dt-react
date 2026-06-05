import React, { useState } from 'react'
import { motion } from 'motion/react'
import { stagger, fadeUp } from '@/lib/motion'
import { TopNav } from '@/components/layout/top-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { MobileNav } from '@/components/layout/mobile-nav'
import { MapPin, Store, Plus, Edit2, Trash2, CheckCircle2, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const BRANCHES = [
  {
    id: 1,
    name: 'Toko Utama',
    isDefault: true,
    address: 'Jl. Roti No. 123',
    city: 'Jakarta Selatan 12345',
    phone: '(021) 123-4567',
    type: 'Pusat'
  },
  {
    id: 2,
    name: 'Cabang Pusat Kota',
    isDefault: false,
    address: 'Jl. Sudirman No. 45',
    city: 'Jakarta Pusat 10110',
    phone: '(021) 987-6543',
    type: 'Cabang'
  }
]

export default function ProfileAddresses() {
  const [isAdding, setIsAdding] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        setIsAdding(false)
      }, 2000)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/10">
      <Sidebar variant="profile" />
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0">
        <TopNav variant="profile" />
        <main className="flex-1 p-6 lg:p-10 max-w-5xl mx-auto w-full pb-32 lg:pb-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Header */}
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="font-h2 text-[32px] text-on-surface">Lokasi Toko</h1>
                <p className="text-zinc-500">Kelola cabang toko dan lokasi pengambilan Anda.</p>
              </div>
              {!isAdding && !isSuccess && (
                <button 
                  onClick={() => setIsAdding(true)}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-container transition-all shadow-md hover:scale-[1.02] active:scale-95"
                >
                  <Plus className="w-5 h-5" />
                  Tambah Cabang Baru
                </button>
              )}
            </motion.div>

            {/* Content */}
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 rounded-[2rem] shadow-sm border border-emerald-100 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-emerald-800">Lokasi Ditambahkan!</h2>
                <p className="text-zinc-500 max-w-sm">Cabang toko baru Anda telah berhasil disimpan.</p>
              </motion.div>
            ) : isAdding ? (
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit} 
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100 space-y-6"
              >
                <h3 className="font-h3 text-xl border-b border-zinc-100 pb-4">Tambah Lokasi Baru</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 block">Nama Cabang</label>
                    <input type="text" required placeholder="Contoh: Kafe Uptown" className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 block">Jenis Lokasi</label>
                    <select required className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none appearance-none">
                      <option value="branch">Cabang</option>
                      <option value="hq">Kantor Pusat</option>
                      <option value="kiosk">Kios / Pop-up</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 block">Alamat Jalan</label>
                  <input type="text" required placeholder="Jl. Sudirman No. 123" className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 block">Kota, Provinsi, Kode Pos</label>
                    <input type="text" required placeholder="Jakarta Selatan 12345" className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 block">Nomor Telepon Cabang</label>
                    <input type="tel" required placeholder="(021) 000-0000" className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
                  <button 
                    type="button"
                    onClick={() => setIsAdding(false)}
                    className="px-8 py-4 rounded-xl font-bold text-zinc-600 bg-white border border-zinc-200 hover:bg-zinc-50 transition-colors text-center"
                  >
                    Batal
                  </button>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 rounded-xl font-bold text-white bg-primary hover:bg-primary-container transition-all shadow-lg shadow-primary/20 flex items-center justify-center min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      "Simpan Lokasi"
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {BRANCHES.map((branch) => (
                  <div key={branch.id} className={cn(
                    "bg-white p-6 rounded-[2rem] border relative overflow-hidden transition-all group",
                    branch.isDefault ? "border-emerald-500 shadow-md ring-1 ring-emerald-500" : "border-zinc-200 shadow-sm hover:shadow-md"
                  )}>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-zinc-50 text-zinc-600 flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-zinc-50 text-zinc-600 flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0",
                        branch.isDefault ? "bg-emerald-100 text-emerald-600" : "bg-zinc-100 text-zinc-600"
                      )}>
                        {branch.isDefault ? <Store className="w-6 h-6" /> : <Building2 className="w-6 h-6" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-h3 text-xl text-zinc-800">{branch.name}</h3>
                          {branch.isDefault && (
                            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] rounded-full font-bold uppercase tracking-wider">
                              Cabang Utama
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-medium text-zinc-500">{branch.type}</p>
                      </div>
                    </div>

                    <div className="space-y-3 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-zinc-600 leading-relaxed">
                          {branch.address}<br/>
                          {branch.city}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </main>
        <MobileNav variant="profile" />
      </div>
    </div>
  )
}
