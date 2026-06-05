import { CheckCircle2, Clock } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

export function RecentRescues() {
  const rescues = [
    { id: '#RE-9281', name: 'Paket Kue Ganda', customer: 'Alex Rivera', time: '12:45', status: 'Diambil', revenue: 'Rp 12.000' },
    { id: '#RE-9279', name: 'Kotak Sayur Harian', customer: 'Sarah Jenkins', time: '11:30', status: 'Diambil', revenue: 'Rp 18.500' },
    { id: '#RE-9275', name: 'Tas Sandwich Gourmet', customer: 'Marcus Chen', time: '10:15', status: 'Menunggu', revenue: 'Rp 9.000' }
  ]

  return (
    <motion.section variants={fadeUp} className="mt-8 bg-white p-6 rounded-xl shadow-level-1">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-h3 text-2xl">Penyelamatan Terbaru</h3>
        <button className="text-primary text-label-md font-semibold hover:underline">Lihat Riwayat</button>
      </div>
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-surface-container-low text-outline text-caption uppercase tracking-wider">
              <th className="py-4 px-2 font-medium">ID Pesanan</th>
              <th className="py-4 px-2 font-medium">Nama Item</th>
              <th className="py-4 px-2 font-medium">Pelanggan</th>
              <th className="py-4 px-2 font-medium">Waktu</th>
              <th className="py-4 px-2 font-medium">Status</th>
              <th className="py-4 px-2 font-medium text-right">Pendapatan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low">
            {rescues.map((rescue) => (
              <tr key={rescue.id} className="hover:bg-surface-container-low transition-colors">
                <td className="py-4 px-2 font-mono text-xs">{rescue.id}</td>
                <td className="py-4 px-2 font-label-md">{rescue.name}</td>
                <td className="py-4 px-2 text-sm">{rescue.customer}</td>
                <td className="py-4 px-2 text-sm">{rescue.time}</td>
                <td className="py-4 px-2">
                  {rescue.status === 'Diambil' ? (
                    <span className="px-2 py-1 bg-emerald-50 text-primary text-xs font-bold rounded-full flex items-center w-fit gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 fill-primary text-emerald-50" />
                      Diambil
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-secondary-fixed/30 text-secondary text-xs font-bold rounded-full flex items-center w-fit gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      Menunggu
                    </span>
                  )}
                </td>
                <td className="py-4 px-2 text-right font-bold">{rescue.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex flex-col gap-4">
        {rescues.map((rescue) => (
          <div key={rescue.id} className="p-4 border border-surface-container-low rounded-lg bg-surface-container-lowest flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-outline">{rescue.id}</span>
                <span className="font-label-md text-sm">{rescue.name}</span>
              </div>
              {rescue.status === 'Diambil' ? (
                <span className="px-2 py-1 bg-emerald-50 text-primary text-[10px] font-bold rounded-full uppercase flex items-center gap-1 shrink-0">
                  <CheckCircle2 className="w-3 h-3 fill-primary text-emerald-50" />
                  Diambil
                </span>
              ) : (
                <span className="px-2 py-1 bg-secondary-fixed/30 text-secondary text-[10px] font-bold rounded-full uppercase flex items-center gap-1 shrink-0">
                  <Clock className="w-3 h-3" />
                  Menunggu
                </span>
              )}
            </div>
            <div className="flex justify-between items-end border-t border-surface-container-low pt-3 mt-1">
              <div className="flex flex-col">
                <span className="text-xs text-on-surface font-semibold">{rescue.customer}</span>
                <span className="text-xs text-outline mt-0.5">{rescue.time}</span>
              </div>
              <span className="font-bold text-primary">{rescue.revenue}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
