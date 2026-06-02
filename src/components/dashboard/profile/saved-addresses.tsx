import { Home, Navigation, MapPinPlus } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function SavedAddresses() {
  return (
    <motion.section variants={fadeUp} className="md:col-span-12 bg-white dark:bg-slate-900 rounded-[1rem] overflow-hidden shadow-level-1 border border-gray-100">
      <div className="p-8 pb-4">
        <h2 className="font-h3 text-primary text-2xl">Saved Addresses</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-8 border-r border-gray-50 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-5 h-5 text-primary fill-primary" />
              <span className="font-bold text-primary">Home</span>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded uppercase font-black">Default</span>
            </div>
            <p className="text-body-md text-gray-600 mb-6">
              42 Sustainable Way, Eco Village<br/>
              London, SW1A 1AA
            </p>
          </div>
          <div className="flex gap-4">
            <button className="text-label-md text-gray-400 hover:text-primary transition-colors">Delete</button>
            <button className="text-label-md text-primary font-bold hover:underline">Edit Details</button>
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-2 relative min-h-[240px]">
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Map showing London" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9Efm9i3MyFwE_VQCPNhDhlGtODf0vNIBAexMghahtPODwjPvFv9aKkZ_rzA_kBearHyleMXslSLxLhap1_zIhCXg1i4scbK8RFfJQ7FnNuPZuM1G7Q0wAykUuVKMWfACJtpUdctZxmD-utmutY-Kg-QpSKGRaKRwf2EB-IRgGuzPl9aWFxBfwH7P5kOUy8MVyw3YDfWWG8gYBDvCZX284ChHE1iyNyMvJnQ-ldot-RrCk9rL56_OioIbl3Lpneng_QypAB7suProH"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent"></div>
          <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-xs font-bold">
            <Navigation className="w-4 h-4 text-primary" />
            Current location verified
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-50 dark:bg-slate-800/50 flex justify-center border-t border-gray-100">
        <button className="flex items-center gap-2 text-primary font-bold hover:scale-105 transition-transform">
          <MapPinPlus className="w-5 h-5" />
          Add New Address
        </button>
      </div>
    </motion.section>
  )
}
