import React, { useState } from 'react'
import { motion } from 'motion/react'
import { stagger, fadeUp } from '@/lib/motion'
import { TopNav } from '@/components/layout/top-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { MobileNav } from '@/components/layout/mobile-nav'
import { Wallet, ArrowUpRight, ArrowDownRight, Building, CheckCircle2, History, DollarSign } from 'lucide-react'
import { cn } from '@/lib/utils'

const TRANSACTIONS = [
  { id: 1, type: 'earnings', amount: 45.00, date: 'Hari ini, 14:30', title: 'Penjualan Makanan Sisa (3 item)' },
  { id: 2, type: 'withdrawal', amount: -150.00, date: 'Kemarin, 10:00', title: 'Penarikan ke Bank ****4092' },
  { id: 3, type: 'earnings', amount: 82.50, date: '3 Jun, 18:45', title: 'Penjualan Makanan Sisa (7 item)' },
  { id: 4, type: 'earnings', amount: 35.00, date: '2 Jun, 20:15', title: 'Penjualan Makanan Sisa (2 item)' },
]

export default function ProfileWallet() {
  const [isWithdrawing, setIsWithdrawing] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [amount, setAmount] = useState('')

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        setIsWithdrawing(false)
        setAmount('')
      }, 2500)
    }, 1500)
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
                <h1 className="font-h2 text-[32px] text-on-surface">Dompet & Penghasilan</h1>
                <p className="text-zinc-500">Kelola keuntungan toko dan tarik dana Anda.</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Balance & Action */}
              <motion.div variants={fadeUp} className="lg:col-span-5 space-y-6">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-800 p-8 rounded-[2rem] text-white shadow-xl shadow-emerald-900/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                  
                  <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                    <div className="flex items-center gap-2 text-emerald-100">
                      <Wallet className="w-5 h-5" />
                      <span className="font-bold tracking-wide text-sm uppercase">Saldo Tersedia</span>
                    </div>

                    <div>
                      <div className="flex items-start gap-1">
                        <span className="text-3xl font-bold mt-1 opacity-80">Rp</span>
                        <span className="text-6xl font-black tracking-tighter">1,240.50</span>
                      </div>
                      <p className="text-emerald-100 mt-2 text-sm flex items-center gap-1">
                        <ArrowUpRight className="w-4 h-4" /> +Rp 127.500 minggu ini
                      </p>
                    </div>

                    {!isWithdrawing && !isSuccess && (
                      <button 
                        onClick={() => setIsWithdrawing(true)}
                        className="w-full bg-white text-emerald-800 font-bold py-4 rounded-xl shadow-md hover:bg-emerald-50 active:scale-95 transition-all text-center"
                      >
                        Tarik Dana
                      </button>
                    )}
                  </div>
                </div>

                {isWithdrawing && !isSuccess && (
                  <motion.form 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleWithdraw}
                    className="bg-white p-6 rounded-[2rem] border border-zinc-200 shadow-sm space-y-4"
                  >
                    <h3 className="font-bold text-zinc-800 border-b border-zinc-100 pb-3">Tarik ke Rekening Bank</h3>
                    
                    <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-zinc-400">
                          <Building className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-zinc-700">Chase Bank</p>
                          <p className="text-xs text-zinc-500">**** 4092</p>
                        </div>
                      </div>
                      <button type="button" className="text-sm font-bold text-primary hover:text-primary-container transition-colors">Ubah</button>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 block">Jumlah Penarikan</label>
                      <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                        <input 
                          type="number" 
                          required
                          min="10"
                          max="1240.50"
                          step="0.01"
                          placeholder="0.00"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-bold text-lg" 
                        />
                      </div>
                      <p className="text-xs text-zinc-500 text-right">Min: Rp 10.000</p>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button 
                        type="button"
                        onClick={() => setIsWithdrawing(false)}
                        className="flex-1 py-3 rounded-xl font-bold text-zinc-600 bg-zinc-100 hover:bg-zinc-200 transition-colors"
                      >
                        Batal
                      </button>
                      <button 
                        type="submit"
                        disabled={isSubmitting || !amount || Number(amount) < 10 || Number(amount) > 1240.5}
                        className="flex-1 py-3 rounded-xl font-bold text-white bg-primary hover:bg-primary-container transition-all shadow-md disabled:opacity-50 flex items-center justify-center"
                      >
                        {isSubmitting ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : 'Konfirmasi'}
                      </button>
                    </div>
                  </motion.form>
                )}

                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-6 rounded-[2rem] border border-emerald-100 shadow-sm text-center py-10 space-y-3"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-emerald-800 text-lg">Penarikan Diproses!</h3>
                      <p className="text-sm text-zinc-500 mt-1">Dana Anda akan tiba dalam 1-2 hari kerja.</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Right Column - Transaction History */}
              <motion.div variants={fadeUp} className="lg:col-span-7 space-y-6">
                <div className="bg-white rounded-[2rem] shadow-sm border border-zinc-100 overflow-hidden">
                  <div className="p-6 md:p-8 border-b border-zinc-100 flex items-center justify-between">
                    <h3 className="font-h3 text-xl flex items-center gap-2">
                      <History className="w-5 h-5 text-zinc-400" /> Riwayat Transaksi
                    </h3>
                    <button className="text-sm font-bold text-primary hover:text-primary-container transition-colors">
                      Lihat Semua
                    </button>
                  </div>
                  
                  <div className="p-2">
                    {TRANSACTIONS.map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between p-4 md:p-6 hover:bg-zinc-50 rounded-xl transition-colors cursor-pointer group">
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
                            tx.type === 'earnings' ? "bg-emerald-50 text-emerald-600" : "bg-zinc-100 text-zinc-600"
                          )}>
                            {tx.type === 'earnings' ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                          </div>
                          <div>
                            <p className="font-bold text-zinc-800 text-sm md:text-base group-hover:text-primary transition-colors">{tx.title}</p>
                            <p className="text-xs md:text-sm text-zinc-500">{tx.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={cn(
                            "font-black text-lg",
                            tx.type === 'earnings' ? "text-emerald-600" : "text-zinc-800"
                          )}>
                            {tx.type === 'earnings' ? '+' : ''}{tx.amount > 0 ? `Rp ${tx.amount.toFixed(2)}` : `-Rp ${Math.abs(tx.amount).toFixed(2)}`}
                          </p>
                          <span className={cn(
                            "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mt-1",
                            tx.type === 'earnings' ? "bg-emerald-100 text-emerald-700" : "bg-zinc-200 text-zinc-700"
                          )}>
                            Selesai
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </main>
        <MobileNav variant="profile" />
      </div>
    </div>
  )
}
