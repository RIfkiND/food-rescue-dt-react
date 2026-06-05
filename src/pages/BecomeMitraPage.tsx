import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Store, MapPin, ArrowRight, CheckCircle2, ChevronLeft, Briefcase, Clock, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function BecomeMitraPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/dashboard/mitra');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col md:flex-row overflow-hidden font-sans">
      {/* Left Pane (Branding) */}
      <div className="hidden md:flex md:w-5/12 lg:w-1/2 relative bg-primary-container overflow-hidden p-16 flex-col justify-between">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2570&auto=format&fit=crop" 
            alt="Store Owner" 
            className="w-full h-full object-cover opacity-40 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20" />
        </div>
        
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
            <Store className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl font-h1 text-white leading-tight mb-6">Bergabung sebagai Mitra Food Rescue.</h1>
          <p className="text-xl text-white/90 font-medium">Ubah sisa makanan menjadi pendapatan tambahan sekaligus menyelamatkan lingkungan.</p>
        </div>

        <div className="relative z-10">
          <div className="flex gap-4 items-center bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 shrink-0" />
            <div>
              <h3 className="text-white font-bold text-lg">Tingkatkan Pendapatan</h3>
              <p className="text-white/80 text-sm mt-1">Dapatkan penghasilan dari makanan yang biasanya terbuang.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Pane (Interactive Form) */}
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 relative overflow-y-auto">
        {/* Skip Link (Desktop) */}
        <div className="absolute top-8 right-8 hidden md:block">
           <button onClick={() => navigate('/dashboard/mitra')} className="text-sm font-bold text-primary hover:underline">
             Sudah jadi Mitra? Masuk ke Dashboard
           </button>
        </div>

        {/* Mobile Header */}
        <div className="w-full max-w-xl mb-12 flex items-center gap-4 mt-8 md:mt-0">
          <button 
            onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)}
            className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-surface-container transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-on-surface" />
          </button>
          <div className="flex-1">
            <div className="flex gap-2">
              {[1, 2, 3].map((s) => (
                <div 
                  key={s} 
                  className={cn(
                    "h-2 flex-1 rounded-full transition-colors duration-500",
                    s <= step ? "bg-primary" : "bg-surface-container-high"
                  )}
                />
              ))}
            </div>
            <p className="text-xs font-bold text-zinc-500 mt-2 tracking-wider uppercase">Langkah {step} dari 3</p>
          </div>
        </div>

        <motion.div 
          key={`step-${step}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="w-full max-w-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* STEP 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-[32px] font-h2 text-on-surface leading-tight mb-2">Ceritakan tentang bisnis Anda</h2>
                  <p className="text-body-md text-on-surface-variant">Informasi ini akan ditampilkan kepada pelanggan yang mencari makanan di sekitar toko Anda.</p>
                </div>

                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 block">Nama Toko / Restoran</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Store className="h-5 w-5 text-zinc-400" />
                      </div>
                      <input 
                        type="text" 
                        required
                        placeholder="Misal: Roti Bakar Kenangan" 
                        className="w-full pl-11 pr-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 block">Kategori Bisnis</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Briefcase className="h-5 w-5 text-zinc-400" />
                      </div>
                      <select required className="w-full pl-11 pr-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none appearance-none">
                        <option value="">Pilih Kategori...</option>
                        <option value="bakery">Toko Roti & Kue</option>
                        <option value="restaurant">Restoran / Rumah Makan</option>
                        <option value="cafe">Kafe / Kedai Kopi</option>
                        <option value="grocery">Supermarket / Toko Buah</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 block">Nomor Telepon Bisnis</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-zinc-400" />
                      </div>
                      <input 
                        type="tel" 
                        required
                        placeholder="0812-XXXX-XXXX" 
                        className="w-full pl-11 pr-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Location */}
            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-[32px] font-h2 text-on-surface leading-tight mb-2">Di mana lokasi toko Anda?</h2>
                  <p className="text-body-md text-on-surface-variant">Tentukan titik lokasi agar pelanggan mudah mengambil pesanan (pickup).</p>
                </div>

                <div className="space-y-5">
                  <div className="w-full h-48 bg-surface-container-low rounded-2xl border border-outline-variant overflow-hidden relative flex items-center justify-center">
                    {/* Fake Map Background */}
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" alt="Map" />
                    <div className="absolute inset-0 bg-primary/5" />
                    <div className="z-10 bg-white shadow-lg p-4 rounded-xl text-center cursor-pointer hover:scale-105 transition-transform flex flex-col items-center">
                      <MapPin className="w-8 h-8 text-primary mb-2" />
                      <span className="font-bold text-sm">Ketuk untuk atur pin lokasi</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 block">Alamat Lengkap</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Contoh: Jl. Sudirman No. 123, Patokan sebelah Bank..." 
                      className="w-full p-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Operation Hours & Done */}
            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-[32px] font-h2 text-on-surface leading-tight mb-2">Kapan pelanggan bisa mengambil makanan?</h2>
                  <p className="text-body-md text-on-surface-variant">Atur jadwal operasional standar untuk proses pengambilan pesanan.</p>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 block">Jam Buka</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Clock className="h-5 w-5 text-zinc-400" />
                        </div>
                        <input 
                          type="time" 
                          required
                          defaultValue="08:00"
                          className="w-full pl-11 pr-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 block">Jam Tutup</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Clock className="h-5 w-5 text-zinc-400" />
                        </div>
                        <input 
                          type="time" 
                          required
                          defaultValue="21:00"
                          className="w-full pl-11 pr-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex gap-3 items-start mt-8">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-emerald-800 leading-relaxed">
                      Luar biasa! Setelah ini Anda dapat langsung mulai mengunggah makanan surplus Anda dan berkontribusi mengurangi *food waste*.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-primary text-white rounded-2xl font-label-md shadow-level-2 hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2 mt-8 disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  {step < 3 ? 'Lanjutkan' : 'Daftar sebagai Mitra'}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {step === 1 && (
              <p className="text-center mt-6 text-sm text-zinc-500 md:hidden">
                Sudah punya toko? <button type="button" onClick={() => navigate('/dashboard/mitra')} className="text-primary font-bold hover:underline">Masuk ke Dashboard</button>
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
