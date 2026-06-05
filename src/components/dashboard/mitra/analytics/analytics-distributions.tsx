import { ArrowRight, CheckCheck, RefreshCw, Croissant, Apple, UtensilsCrossed } from 'lucide-react'
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
    revenue: 'Rp 142.000'
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
    revenue: 'Rp 84.500'
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
    revenue: 'Rp 312.000'
  }
]

export function AnalyticsDistributions() {
  return (
    <motion.section variants={fadeUp} className="bg-white rounded-[2rem] shadow-sm border border-zinc-100 overflow-hidden mb-8">
      <div className="px-8 py-6 border-b border-zinc-100 flex justify-between items-center">
        <h3 className="font-h3 text-[24px] font-bold text-on-surface">Distribusi Terbaru</h3>
        <button className="text-primary font-label-md flex items-center gap-1 hover:underline text-sm font-semibold">
          Lihat Riwayat Lengkap <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[800px]">
          <thead className="bg-surface">
            <tr>
              <th className="px-8 py-4 text-zinc-500 font-label-md text-sm font-semibold">Kategori Item</th>
              <th className="px-8 py-4 text-zinc-500 font-label-md text-sm font-semibold">Kuantitas</th>
              <th className="px-8 py-4 text-zinc-500 font-label-md text-sm font-semibold">Waktu</th>
              <th className="px-8 py-4 text-zinc-500 font-label-md text-sm font-semibold">Status Penyelamatan</th>
              <th className="px-8 py-4 text-zinc-500 font-label-md text-right text-sm font-semibold">Pendapatan Dipulihkan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-50">
            {distributions.map((item) => (
              <tr key={item.id} className="hover:bg-zinc-50 transition-colors">
                <td className="px-8 py-4 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${item.iconBg} flex items-center justify-center ${item.iconColor} shrink-0`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm text-on-surface">{item.name}</span>
                </td>
                <td className="px-8 py-4 text-sm font-medium">{item.quantity}</td>
                <td className="px-8 py-4 text-zinc-500 text-sm">{item.timestamp}</td>
                <td className="px-8 py-4">
                  <span className={`px-3 py-1 text-[11px] font-bold rounded-full inline-flex items-center gap-1 ${item.statusColor}`}>
                    <item.statusIcon className="w-3.5 h-3.5" /> {item.status}
                  </span>
                </td>
                <td className="px-8 py-4 text-right font-bold text-emerald-800 text-sm">{item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  )
}
