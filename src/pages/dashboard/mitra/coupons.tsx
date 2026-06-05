import React from 'react'
import { motion } from 'motion/react'
import { stagger, fadeUp } from '@/lib/motion'
import { TopNav } from '@/components/layout/top-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { MobileNav } from '@/components/layout/mobile-nav'
import { Plus, Ticket, Copy, Trash2, Edit2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const COUPONS = [
  {
    id: 1,
    code: 'SAVEFOOD20',
    discount: 'DISKON 20%',
    type: 'Persentase',
    status: 'Aktif',
    used: 14,
    limit: 50,
    expiry: '2026-12-31',
    description: 'Diskon khusus untuk penyelamat pertama kali.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2570&auto=format&fit=crop'
  },
  {
    id: 2,
    code: 'FRESH5',
    discount: 'DISKON Rp 5.000',
    type: 'Jumlah Tetap',
    status: 'Aktif',
    used: 42,
    limit: 100,
    expiry: '2026-08-15',
    description: 'Potongan tetap Rp 5.000 untuk semua item surplus toko roti.',
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2715&auto=format&fit=crop'
  },
  {
    id: 3,
    code: 'WEEKEND30',
    discount: 'DISKON 30%',
    type: 'Persentase',
    status: 'Kedaluwarsa',
    used: 100,
    limit: 100,
    expiry: '2026-05-01',
    description: 'Obral besar-besaran akhir pekan.',
    image: 'https://images.unsplash.com/photo-1555529733-0e67056058e1?q=80&w=2670&auto=format&fit=crop'
  }
]

export default function MitraCoupons() {
  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/10">
      <Sidebar variant="mitra" />
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0">
        <TopNav variant="mitra" />
        <main className="flex-1 p-6 lg:p-10 max-w-[1400px] mx-auto w-full pb-32 lg:pb-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Header */}
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="font-h2 text-[32px] text-on-surface">Kupon & Diskon</h1>
                <p className="text-zinc-500">Kelola kode promosi untuk meningkatkan penjualan penyelamatan makanan Anda.</p>
              </div>
              <Link 
                to="/dashboard/mitra/new-coupon"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-container transition-all shadow-md hover:scale-[1.02] active:scale-95"
              >
                <Plus className="w-5 h-5" />
                Buat Kupon
              </Link>
            </motion.div>

            {/* Coupons Grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COUPONS.map((coupon) => (
                <div key={coupon.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 group flex flex-col hover:shadow-md transition-shadow">
                  {/* Image Area */}
                  <div className="relative h-40 overflow-hidden bg-zinc-100">
                    <img 
                      src={coupon.image} 
                      alt="Coupon theme" 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                    
                    <div className="absolute top-4 right-4">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-md",
                        coupon.status === 'Aktif' ? "bg-emerald-500/90 text-white" : "bg-zinc-500/90 text-white"
                      )}>
                        {coupon.status}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-6">
                      <h3 className="font-h2 text-3xl text-white drop-shadow-md">{coupon.discount}</h3>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-6 flex items-center justify-between bg-zinc-50 p-3 rounded-xl border border-zinc-100 border-dashed">
                      <span className="font-mono text-lg font-bold tracking-widest text-emerald-800">{coupon.code}</span>
                      <button className="text-zinc-400 hover:text-primary transition-colors p-2 bg-white rounded-lg shadow-sm">
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-sm text-zinc-600 mb-6">{coupon.description}</p>

                    <div className="mt-auto space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-500">Batas Penggunaan</span>
                        <span className="font-medium text-zinc-700">{coupon.used} / {coupon.limit}</span>
                      </div>
                      <div className="w-full bg-zinc-100 rounded-full h-2">
                        <div 
                          className={cn("h-2 rounded-full", coupon.status === 'Aktif' ? "bg-primary" : "bg-zinc-400")} 
                          style={{ width: `${(coupon.used / coupon.limit) * 100}%` }}
                        ></div>
                      </div>

                      <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                        <div className="text-xs text-zinc-500">
                          Kedaluwarsa: <span className="font-bold text-zinc-700">{coupon.expiry}</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="w-8 h-8 rounded-full bg-zinc-50 text-zinc-600 flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                            <Edit2 className="w-3 h-3" />
                          </button>
                          <button className="w-8 h-8 rounded-full bg-zinc-50 text-zinc-600 flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-colors">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </main>
        <MobileNav variant="mitra" />
      </div>
    </div>
  )
}
