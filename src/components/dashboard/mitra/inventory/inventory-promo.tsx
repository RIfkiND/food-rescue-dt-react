import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function InventoryPromo() {
  return (
    <motion.div variants={fadeUp} className="relative overflow-hidden rounded-xl bg-emerald-900 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
      <div className="relative z-10 space-y-2 max-w-lg text-center md:text-left">
        <h3 className="font-h3 text-[24px] font-bold">Ready to save more food?</h3>
        <p className="font-body-md text-emerald-100 opacity-90">Maximize your impact by bundling similar items into "Surprise Bags". Partners who use bundles see a 40% faster rescue rate.</p>
      </div>
      <button className="relative z-10 px-8 py-4 bg-[#8e4e14] hover:bg-[#783d01] text-white font-bold rounded-lg shadow-lg transition-all whitespace-nowrap active:scale-95">
        Create Surprise Bag
      </button>
      
      {/* Atmospheric Background Elements */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-800 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
    </motion.div>
  )
}
