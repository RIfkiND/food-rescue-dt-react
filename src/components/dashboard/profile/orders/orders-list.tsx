import { useState } from 'react'
import { CheckCircle2, XCircle, MapPin, MoreVertical, ChevronLeft, ChevronRight, ChevronRight as ChevronRightSm } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'
import { cn } from '@/lib/utils'

const orders = [
  {
    id: 1,
    partner: 'The Hearth Bakery',
    distance: '1.2 miles away',
    date: 'Oct 24, 2024',
    time: 'Yesterday, 6:45 PM',
    items: '3x Sourdough, 1x Croissant',
    mobileItems: '2x Surprise Pastry Box',
    total: '$12.40',
    mobileTotal: '$14.50',
    status: 'COMPLETED',
    statusColor: 'bg-emerald-100 text-emerald-800',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Zu_NFsldR07g_cA2QVy8_r9flLUta7-87A3mPinZ-rGdb4WKSjSuh0fTy8vx1Sl-WeBGSsUavp0RLxp30AWaPjWzqwOS97o8URvzUms-flfr6Oj-AIbr4txlnbQ94z4-pvPvJba-kfisnyOQL8WYzmM25gC3W2hsW8GeF_km_WO9AwK4ijFcQXTMp5s1gRt5mApBA-9TvarAm_eYoXW8g3DQV8eHQG0Gdmcp6koCsvuR8Kh18WjXxKOzFZCAT9_qahqM07BIJdS_',
  },
  {
    id: 2,
    partner: 'Green Grocer Organic',
    distance: '0.5 miles away',
    date: 'Oct 21, 2024',
    time: 'Today, 2:15 PM',
    items: 'Organic Veggie Box (Large)',
    mobileItems: '1x Seasonal Veggie Bag',
    total: '$18.00',
    mobileTotal: '$8.00',
    status: 'IN_PROGRESS',
    statusLabel: 'READY FOR PICKUP',
    statusColor: 'bg-orange-100 text-orange-800',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh9rATkenU30Y7QDZGiY-8jZyX_7IlIC81AGAz38Rk6PHTSuVT3EN913Qi-G0KqeSkHVwOauOvdMzFlR-9UTDJ2LoC-vt9DEZ4bQBt04LtP_4lAjMMXUpThAwJy_q9yV7RELosCjI5JklczOuup4m403GgV0CAlY41e_aNUEyO_5rxTYHY0lUqQbZvV29QYeBNkG28YgHQLJutw45OPV7D1_PsyUuTXWo1MsGX_zEeca6rZwdQoapxoNZCs2_I2aIwQXjVS6uN_UV0',
  },
  {
    id: 3,
    partner: 'Luigi\'s Bistro',
    distance: '2.1 miles away',
    date: 'Oct 15, 2024',
    time: 'Oct 10, 8:30 AM',
    items: 'Daily Pasta Special x2',
    mobileItems: '1x Breakfast Pastry Bag',
    total: '$15.50',
    mobileTotal: '$5.50',
    status: 'CANCELLED',
    statusColor: 'bg-red-100 text-red-800',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsHVVFeWUHDv3rTnwVPrtYanp7Xu16K9Iu1U1LCiOqfzYGkBDg2_wtd5Q2d95UZnaMxDuIyXoQ-EoH-aD8pVbBPIm8d7qoSDEmz8QvgkHyHLOXcJHwt76Hix2c6xZ84BG-qy3Eoa9YcZgmVYO2Zlnpp_OuPHy15gNEg-0D2q_lV9-_toH7JHDSwUa860VxoeSkGze7c7HdLAb4IpihzpoSZgkUegX1FZbQiOd3hzqBqo3Xu_G1iBuG9frxx4ThVfgiQzfwHWNn9M-e',
  }
]

export function OrdersList() {
  const [activeTab, setActiveTab] = useState('All Orders')
  const tabs = ['All Orders', 'In Progress', 'Completed', 'Cancelled']

  return (
    <motion.div variants={fadeUp} className="w-full">
      {/* Mobile Tabs */}
      <div className="md:hidden flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "whitespace-nowrap px-4 py-2 rounded-full font-label-md text-sm font-semibold transition-all",
              activeTab === tab 
                ? "bg-primary-container text-white shadow-sm" 
                : "bg-white text-on-surface-variant border border-gray-100"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-xl shadow-level-1 border border-outline-variant overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left min-w-[800px]">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="px-6 py-4 font-label-md text-sm text-on-surface-variant uppercase tracking-wider font-semibold">Partner</th>
                <th className="px-6 py-4 font-label-md text-sm text-on-surface-variant uppercase tracking-wider font-semibold">Date & Items</th>
                <th className="px-6 py-4 font-label-md text-sm text-on-surface-variant uppercase tracking-wider font-semibold">Total</th>
                <th className="px-6 py-4 font-label-md text-sm text-on-surface-variant uppercase tracking-wider font-semibold">Status</th>
                <th className="px-6 py-4 font-label-md text-sm text-on-surface-variant uppercase tracking-wider text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {orders.map((order) => (
                <tr key={order.id} className={cn("hover:bg-zinc-50 transition-colors group", order.status === 'CANCELLED' && "opacity-60")}>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className={cn("w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-surface-container shadow-sm", order.status === 'CANCELLED' && "grayscale")}>
                        <img src={order.img} alt={order.partner} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-label-md text-sm font-semibold text-on-surface">{order.partner}</p>
                        <p className="font-caption text-xs text-on-surface-variant flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3.5 h-3.5" /> {order.distance}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <p className="font-label-md text-sm font-semibold text-on-surface">{order.date}</p>
                    <p className="font-caption text-xs text-on-surface-variant mt-0.5">{order.items}</p>
                  </td>
                  <td className="px-6 py-6">
                    <p className={cn("font-label-md text-sm font-bold", order.status === 'CANCELLED' ? "text-on-surface-variant line-through" : "text-primary")}>
                      {order.total}
                    </p>
                  </td>
                  <td className="px-6 py-6">
                    <span className={cn("inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold uppercase", order.statusColor)}>
                      {order.status === 'COMPLETED' && <CheckCircle2 className="w-4 h-4" />}
                      {order.status === 'CANCELLED' && <XCircle className="w-4 h-4" />}
                      {order.status === 'IN_PROGRESS' && <div className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />}
                      {order.statusLabel || order.status}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <div className="flex justify-end items-center gap-2">
                      {order.status === 'CANCELLED' ? (
                        <button className="px-4 py-2 rounded-lg border border-outline text-on-surface-variant text-sm font-semibold hover:bg-surface-container-high transition-colors">
                          View Details
                        </button>
                      ) : (
                        <button className="px-4 py-2 rounded-lg border border-primary text-primary text-sm font-semibold hover:bg-emerald-50 transition-colors">
                          Reorder
                        </button>
                      )}
                      <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-surface-container-low border-t border-outline-variant flex justify-between items-center">
          <p className="font-caption text-xs text-on-surface-variant">Showing 1-3 of 24 rescues</p>
          <div className="flex gap-1">
            <button className="p-1 rounded-lg hover:bg-surface-container-high disabled:opacity-30 transition-colors" disabled>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-8 h-8 rounded-lg bg-primary text-white font-semibold text-sm transition-colors">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface font-semibold text-sm transition-colors">2</button>
            <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface font-semibold text-sm transition-colors">3</button>
            <button className="p-1 rounded-lg hover:bg-surface-container-high transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {orders.map((order) => (
          <div key={order.id} className={cn(
            "bg-white rounded-xl p-4 border transition-all",
            order.status === 'IN_PROGRESS' ? "border-2 border-primary-container/20 shadow-[0_8px_24px_rgba(45,106,79,0.15)]" : "border-gray-100 shadow-level-1",
            order.status === 'CANCELLED' && "opacity-80 bg-white/60"
          )}>
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className={cn("w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-surface-container", order.status === 'CANCELLED' && "grayscale")}>
                  <img src={order.img} alt={order.partner} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-label-md text-sm font-semibold text-on-surface">{order.partner}</h3>
                  <p className="text-caption text-xs text-on-surface-variant mt-0.5">{order.time}</p>
                </div>
              </div>
              <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold uppercase", order.statusColor)}>
                {order.statusLabel || order.status}
              </span>
            </div>
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-caption text-xs text-on-surface-variant">{order.mobileItems}</p>
                <p className={cn("font-h3 text-lg font-bold", order.status === 'CANCELLED' ? "text-on-surface-variant line-through" : "text-primary")}>
                  {order.mobileTotal}
                </p>
              </div>
              {order.status === 'IN_PROGRESS' ? (
                <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold text-xs shadow-sm">
                  Show Code
                </button>
              ) : (
                <button className="text-primary font-semibold text-xs flex items-center gap-1">
                  View Details <ChevronRightSm className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
