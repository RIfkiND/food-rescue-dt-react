import { MapPin, Home, Briefcase, Heart, Edit2, Trash2 } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

const addresses = [
  {
    id: 1,
    name: 'Home',
    isDefault: true,
    line1: '245 Green Valley Ave',
    line2: 'Apt 4B, Austin, TX 78701',
    icon: Home,
    iconColor: 'text-primary',
    iconBg: 'bg-primary-fixed',
    active: true
  },
  {
    id: 2,
    name: 'Tech Hub Office',
    isDefault: false,
    line1: '88 Innovation Blvd',
    line2: 'Floor 12, Austin, TX 78704',
    icon: Briefcase,
    iconColor: 'text-on-surface-variant',
    iconBg: 'bg-surface-container',
    active: false
  },
  {
    id: 3,
    name: 'Mom\'s Place',
    isDefault: false,
    line1: '102 Bluebonnet Lane',
    line2: 'Austin, TX 78745',
    icon: Heart,
    iconColor: 'text-on-surface-variant',
    iconBg: 'bg-surface-container',
    active: false
  }
]

export function AddressesList() {
  return (
    <motion.div variants={fadeUp} className="flex flex-col gap-4">
      <button className="group flex items-center justify-center gap-2 p-6 rounded-xl border-2 border-dashed border-primary/30 hover:border-primary hover:bg-primary-fixed/20 transition-all duration-300">
        <MapPin className="w-5 h-5 text-primary scale-125" />
        <span className="font-label-md text-primary font-bold">Add New Delivery Location</span>
      </button>

      <div className="flex flex-col gap-4">
        {addresses.map((address) => (
          <div 
            key={address.id} 
            className={`p-6 bg-surface-container-lowest rounded-xl relative overflow-hidden transition-all group ${
              address.active 
                ? 'shadow-[0px_4px_20px_rgba(29,53,87,0.05)] border-l-4 border-primary' 
                : 'shadow-sm hover:shadow-md border border-zinc-100'
            }`}
          >
            <div className="absolute top-0 right-0 p-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1 text-outline hover:text-primary transition-colors">
                <Edit2 className="w-4 h-4" />
              </button>
              <button className="p-1 text-outline hover:text-error transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${address.iconBg} ${address.iconColor}`}>
                <address.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-label-md text-sm font-bold text-on-surface">{address.name}</h3>
                  {address.isDefault && (
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] rounded-full font-bold uppercase tracking-wider">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-sm text-on-surface-variant">{address.line1}</p>
                <p className="text-sm text-on-surface-variant">{address.line2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
