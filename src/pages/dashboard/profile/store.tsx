import { motion } from 'motion/react'
import { stagger, fadeUp } from '@/lib/motion'
import { TopNav } from '@/components/layout/top-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { MobileNav } from '@/components/layout/mobile-nav'
import { Store, Star, MapPin, Clock, ShieldCheck, Mail, Phone, Edit2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProfileStore() {
  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/10">
      <Sidebar variant="profile" />
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0">
        <TopNav variant="profile" />
        <main className="flex-1 p-4 md:p-6 lg:p-10 max-w-[1200px] mx-auto w-full pb-24 lg:pb-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="w-full space-y-8"
          >
            {/* Header / Cover Image Area */}
            <motion.div variants={fadeUp} className="relative rounded-[2rem] overflow-hidden bg-white shadow-sm border border-zinc-100 group">
              <div className="h-48 md:h-64 w-full relative overflow-hidden bg-zinc-200">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop" 
                  alt="Store Cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-white transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>

              {/* Profile Info Overlay */}
              <div className="relative px-6 pb-8 md:px-10 flex flex-col md:flex-row items-center md:items-end gap-6 -mt-16 md:-mt-20">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2694&auto=format&fit=crop" 
                    alt="Store Logo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full"></div>
                </div>

                <div className="flex-1 text-center md:text-left space-y-2 mt-4 md:mt-0">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h1 className="font-h1 text-3xl md:text-4xl text-zinc-900">The Green Bakery</h1>
                    <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold w-fit mx-auto md:mx-0">
                      <ShieldCheck className="w-3 h-3" /> Mitra Terverifikasi
                    </span>
                  </div>
                  <p className="text-zinc-500 font-medium flex items-center justify-center md:justify-start gap-1">
                    <Store className="w-4 h-4" /> Toko Roti & Kue
                  </p>
                </div>

                <div className="flex gap-3 mt-4 md:mt-0 w-full md:w-auto justify-center">
                  <Link 
                    to="/dashboard/profile/store/edit"
                    className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-primary-container hover:scale-105 active:scale-95 transition-all"
                  >
                    Edit Profil
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Grid Layout for Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Store Details */}
              <motion.div variants={fadeUp} className="lg:col-span-1 space-y-8">
                <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-zinc-100 space-y-6">
                  <h3 className="font-h3 text-xl border-b border-zinc-100 pb-4">Detail Toko</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-zinc-700">Location</p>
                        <p className="text-sm text-zinc-500">123 Baker Street<br/>Portland, OR 97204</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-zinc-700">Jam Operasional</p>
                        <p className="text-sm text-zinc-500">Sen-Jum: 18:00 - 20:00<br/>Sab-Min: 16:00 - 18:00</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-zinc-700">Contact Email</p>
                        <p className="text-sm text-zinc-500">hello@greenbakery.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-zinc-700">Phone</p>
                        <p className="text-sm text-zinc-500">(555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating Card */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-[2rem] shadow-sm border border-emerald-100 flex flex-col items-center justify-center text-center">
                  <h3 className="font-bold text-emerald-900 mb-2">Penilaian Pelanggan</h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-black text-emerald-700 tracking-tighter">4.9</span>
                    <span className="text-emerald-600/60 font-bold mb-1">/ 5</span>
                  </div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-sm text-emerald-700/80 font-medium">Berdasarkan 1.284 ulasan penyelamat makanan</p>
                </div>
              </motion.div>

              {/* Right Column - Description & Highlights */}
              <motion.div variants={fadeUp} className="lg:col-span-2 space-y-8">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100">
                  <div className="flex justify-between items-center border-b border-zinc-100 pb-4 mb-6">
                    <h3 className="font-h3 text-xl">Tentang Toko</h3>
                    <button className="text-sm font-bold text-primary hover:text-primary-container transition-colors">
                      Edit
                    </button>
                  </div>
                  <p className="text-zinc-600 leading-relaxed">
                    Di The Green Bakery, kami percaya bahwa makanan enak tidak boleh terbuang percuma. Kami memanggang roti, kue kering, dan kue artisan segar setiap pagi menggunakan bahan-bahan organik lokal. 
                    <br/><br/>
                    Dengan bermitra bersama inisiatif penyelamatan makanan, kami memastikan bahwa sisa makanan harian kami—yang masih sangat lezat dan aman—dapat dinikmati oleh masyarakat dengan harga yang terjangkau. Bergabunglah dalam misi kami mengurangi sisa makanan sambil menikmati kue favorit kota ini!
                  </p>

                  <div className="mt-8 pt-8 border-t border-zinc-100">
                    <h4 className="font-bold text-zinc-900 mb-4">Keunggulan Toko</h4>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-medium text-zinc-700">🌱 100% Bahan Organik</span>
                      <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-medium text-zinc-700">♻️ Kemasan Ramah Lingkungan</span>
                      <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-medium text-zinc-700">🥖 Dipanggang Segar Setiap Hari</span>
                      <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-medium text-zinc-700">☕ Kopi Panggang Lokal</span>
                    </div>
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
