import { ArrowRight, CheckCheck, RefreshCw, Croissant, Apple, UtensilsCrossed, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

const distributions = [
  {
    id: 1,
    name: 'Assorted Pastries',
    icon: Croissant,
    iconColor: 'text-primary',
    iconBg: 'bg-emerald-50',
    quantity: '12.5 kg',
    timestamp: '2 mins ago',
    status: 'Selesai',
    statusIcon: CheckCheck,
    statusColor: 'text-emerald-700 bg-emerald-100',
    revenue: 'Rp 142.000',
    user: 'Alex R.'
  },
  {
    id: 2,
    name: 'Seasonal Fruit Mix',
    icon: Apple,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-50',
    quantity: '8.2 kg',
    timestamp: '45 mins ago',
    status: 'Selesai',
    statusIcon: CheckCheck,
    statusColor: 'text-emerald-700 bg-emerald-100',
    revenue: 'Rp 84.500',
    user: 'Sarah M.'
  },
  {
    id: 3,
    name: 'Hot Deli Trays',
    icon: UtensilsCrossed,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    quantity: '24.0 kg',
    timestamp: '1 hour ago',
    status: 'Dalam Perjalanan',
    statusIcon: RefreshCw,
    statusColor: 'text-blue-700 bg-blue-100',
    revenue: 'Rp 312.000',
    user: 'Delivery #442'
  },
  {
    id: 4,
    name: 'Sourdough Loaves',
    icon: Croissant,
    iconColor: 'text-primary',
    iconBg: 'bg-emerald-50',
    quantity: '5.0 kg',
    timestamp: '3 hours ago',
    status: 'Selesai',
    statusIcon: CheckCheck,
    statusColor: 'text-emerald-700 bg-emerald-100',
    revenue: 'Rp 45.000',
    user: 'John D.'
  }
]

export function HistoryTable() {
  return (
    <motion.section variants={fadeUp} className="w-full mb-8">
      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-xl shadow-level-1 border border-zinc-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead className="bg-surface border-b border-zinc-100">
              <tr>
                <th className="px-6 py-4 text-zinc-500 font-label-md text-sm font-semibold uppercase tracking-wider">Kategori Item</th>
                <th className="px-6 py-4 text-zinc-500 font-label-md text-sm font-semibold uppercase tracking-wider">Kuantitas</th>
                <th className="px-6 py-4 text-zinc-500 font-label-md text-sm font-semibold uppercase tracking-wider">Waktu</th>
                <th className="px-6 py-4 text-zinc-500 font-label-md text-sm font-semibold uppercase tracking-wider">Penerima</th>
                <th className="px-6 py-4 text-zinc-500 font-label-md text-sm font-semibold uppercase tracking-wider">Status Penyelamatan</th>
                <th className="px-6 py-4 text-zinc-500 font-label-md text-right text-sm font-semibold uppercase tracking-wider">Pendapatan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {distributions.map((item) => (
                <tr key={item.id} className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${item.iconBg} flex items-center justify-center ${item.iconColor} shrink-0`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm text-on-surface">{item.name}</span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">{item.quantity}</td>
                  <td className="px-6 py-4 text-zinc-500 text-sm">{item.timestamp}</td>
                  <td className="px-6 py-4 text-sm font-medium">{item.user}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-[11px] font-bold rounded-full inline-flex items-center gap-1 uppercase tracking-wide ${item.statusColor}`}>
                      <item.statusIcon className="w-3.5 h-3.5" /> {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-emerald-800 text-sm">{item.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 bg-surface-container-lowest border-t border-zinc-100 flex justify-between items-center">
          <p className="font-caption text-xs text-outline">Menampilkan 1-4 dari 128 distribusi</p>
          <div className="flex gap-1">
            <button className="p-1 rounded-lg border border-zinc-100 text-outline hover:bg-zinc-50 disabled:opacity-50 transition-colors" disabled>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-8 h-8 rounded-lg bg-primary text-white font-semibold text-sm transition-colors">1</button>
            <button className="w-8 h-8 rounded-lg text-outline hover:bg-zinc-50 font-semibold text-sm transition-colors">2</button>
            <button className="p-1 rounded-lg border border-zinc-100 text-outline hover:bg-zinc-50 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {distributions.map((item) => (
          <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-zinc-100">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-lg ${item.iconBg} flex items-center justify-center ${item.iconColor} shrink-0`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-on-surface">{item.name}</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">{item.timestamp}</p>
                </div>
              </div>
              <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wide ${item.statusColor}`}>
                {item.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-3 bg-zinc-50 rounded-lg p-2">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase font-semibold">Kuantitas</p>
                <p className="text-sm font-medium">{item.quantity}</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase font-semibold">Penerima</p>
                <p className="text-sm font-medium">{item.user}</p>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-zinc-100 pt-3">
              <p className="text-xs text-zinc-500 font-medium">Pendapatan</p>
              <p className="text-sm font-bold text-emerald-800">{item.revenue}</p>
            </div>
          </div>
        ))}
        
        <div className="flex justify-center gap-2 mt-2">
          <button className="p-2 rounded-lg border border-zinc-100 text-outline disabled:opacity-50 transition-colors" disabled>
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg border border-zinc-100 text-outline bg-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.section>
  )
}
