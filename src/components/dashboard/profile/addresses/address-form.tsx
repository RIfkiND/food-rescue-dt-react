import { MapPin, Navigation } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function AddressForm() {
  return (
    <motion.div variants={fadeUp} className="bg-surface-container-lowest rounded-2xl shadow-[0px_12px_32px_rgba(0,0,0,0.05)] overflow-hidden border border-outline-variant/30 sticky top-[100px]">
      <div className="h-[300px] relative w-full bg-zinc-100">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZYG16u1Wc9OKLw5uMSRjNARr60H8VsZ6fuGgNhDOW3Ijr0GP6O8xXimwXCSz0a7m2g6QXWAEaD5fLeNmzVpqUZGq9xu2NITXhT8SEjk_t0-Zq5gnOky4STmNiqxuAM9m3ENhCYkXEfTNb09rdCOtobNfdtGJ6w0AHkwGtoGuJq0PpqgM1X01LlSul5jO_0MX2nTptG6VRpv9nA1LTYWkQIh5-EZs3hl9nuHIocBE_pvTgiPu6FuA9jsY-um_YsOITBw9jWBKKyw-e" 
          alt="Interactive street map" 
          className="w-full h-full object-cover opacity-80" 
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 bg-primary rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white animate-bounce pointer-events-auto cursor-pointer">
            <MapPin className="w-6 h-6" style={{ fill: 'currentColor' }} />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm border border-zinc-200 flex items-center gap-2">
          <Navigation className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold">Pin set at 245 Green Valley Ave</span>
        </div>
      </div>
      
      <div className="p-8">
        <h2 className="font-h3 text-xl text-on-surface mb-6 font-bold">Location Details</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="font-label-md text-sm font-semibold text-on-surface">Address Nickname</label>
            <input 
              type="text" 
              className="w-full rounded-lg border-zinc-200 bg-white p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" 
              placeholder="e.g. Home, Office, Gym" 
            />
          </div>
          
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="font-label-md text-sm font-semibold text-on-surface">Street Address</label>
            <input 
              type="text" 
              className="w-full rounded-lg border-zinc-200 bg-white p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" 
              defaultValue="245 Green Valley Ave" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-label-md text-sm font-semibold text-on-surface">Apartment/Suite</label>
            <input 
              type="text" 
              className="w-full rounded-lg border-zinc-200 bg-white p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" 
              defaultValue="Apt 4B" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-label-md text-sm font-semibold text-on-surface">Postal Code</label>
            <input 
              type="text" 
              className="w-full rounded-lg border-zinc-200 bg-white p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" 
              defaultValue="78701" 
            />
          </div>
          
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="font-label-md text-sm font-semibold text-on-surface">Delivery Instructions</label>
            <textarea 
              rows={3}
              className="w-full rounded-lg border-zinc-200 bg-white p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none" 
              placeholder="Gate code, drop-off point, etc." 
            />
          </div>
          
          <div className="md:col-span-2 flex items-center gap-2">
            <input 
              type="checkbox" 
              id="default-addr" 
              defaultChecked 
              className="w-5 h-5 rounded text-primary focus:ring-primary border-zinc-300" 
            />
            <label htmlFor="default-addr" className="text-sm text-zinc-600">Set as default delivery address</label>
          </div>
          
          <div className="md:col-span-2 pt-6 border-t border-zinc-100 flex justify-end gap-4">
            <button 
              type="button" 
              className="px-6 py-2 font-semibold text-sm text-primary border border-primary rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Discard
            </button>
            <button 
              type="submit" 
              className="px-6 py-2 font-semibold text-sm text-white bg-primary rounded-lg shadow-md hover:bg-emerald-800 active:scale-95 transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}
