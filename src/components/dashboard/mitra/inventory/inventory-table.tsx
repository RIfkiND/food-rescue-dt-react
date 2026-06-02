import { Edit2, Trash2, Check, HeartHandshake, TimerOff, ChevronLeft, ChevronRight, History } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'

const inventoryItems = [
  {
    id: 'ITM-001',
    name: 'Artisan Sourdough Bread',
    subtext: 'Fresh baked daily, organic wheat',
    quantity: '8 loaves',
    quantitySub: 'Expires in 4h',
    price: '$3.50',
    oldPrice: '$8.00',
    status: 'Active',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaoFQWYR3PoL9AK2KjJAa27xB8Y4vmslgNHHgBl4hHu1VC3JZNx7psd-pT0dn1wMustxSX80W0uiWDTvkVmF4rV8TA7lDAprZgwB34P5TMFfsCNbmTk_vq1DTtJudqTNxPj3Y_dLTCPVj_dMPB05QjGEYu1Vd8cMuXvla6ZujAN0LLai678W6I65s22swJwthRzBo6daR3W63oa_46j8IKThA32AIp_zzgBYE6_aITe4VMiQfMyhB7O2D4yZE4EEgoAHWia2OLJCDo',
  },
  {
    id: 'ITM-002',
    name: 'Morning Pastry Box',
    subtext: 'Mixed croissants & danishes (6pc)',
    quantity: '0 boxes',
    quantitySub: 'Fully Claimed',
    price: '$12.00',
    oldPrice: '$24.00',
    status: 'Rescued',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAMmpNhXeNtGO9SRaDAOA0VwSE9WoRH48FCQsYXTGwhYhCAtlDPVgvigSC4-HfSV7APdbT18xFJWeWJ_5W--DXISHUQHXe3DJ8tUF_ioqtF1AKp5n6rgJaqWMLNICYnyPURu12j-rtxR0qIHtVShm8JOiYilL5BYSnYj1OSQXsxJJnxQP7RDXJhqhzpFamZPPY_fp3r3RaN4P1drh9SKVpTNJ5phIDyBXN6dIAJaprI6OzYRdld9y9rreSY8Ij8V026sWqlxvHK7jw',
  },
  {
    id: 'ITM-003',
    name: 'Assorted Muffin Set',
    subtext: 'Gluten-free options included',
    quantity: '4 sets',
    quantitySub: 'Ended 2h ago',
    price: '$5.00',
    oldPrice: '$15.00',
    status: 'Expired',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXqdbKwf9d49FQz8Q7XDRfzrqsdP0LKsHVobriDozMSu1YbOGPW1soksYHevRjLTdXCJC4opKysNN1mfkxCo1xYuWFtk9kxKDi0zKKFTpQhejlLP3xNdYe1x0clgOYKigkkZYo0gbhcawh2wkwILL6Dyx76xjhRsYfElbGq1NVEfHCMZjxUjdNdiseRjATGT3zwQVOckbiEXzEuZxB1G6_5tEbJmsepj3wBdPowieMUl7OGanh75zUQyEbcxEErS6wBYhobiIVo-ev',
  }
]

export function InventoryTable() {
  return (
    <motion.section variants={fadeUp} className="bg-white rounded-xl shadow-level-1 overflow-hidden border border-zinc-100">
      <div className="p-6 border-b border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-emerald-50 text-primary font-label-md rounded-lg text-sm font-semibold">All Items</button>
          <button className="px-4 py-2 text-outline font-label-md hover:bg-zinc-50 rounded-lg text-sm font-semibold transition-colors">Active</button>
          <button className="px-4 py-2 text-outline font-label-md hover:bg-zinc-50 rounded-lg text-sm font-semibold transition-colors">Expired</button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-caption text-outline text-xs">Sort by:</span>
          <select className="border-none bg-surface-container-low rounded-lg text-sm font-label-md focus:ring-0 cursor-pointer p-2 font-semibold text-gray-700">
            <option>Latest Added</option>
            <option>Expiry Date</option>
            <option>Price: Low to High</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-surface-container-lowest text-outline font-label-md uppercase text-[11px] tracking-widest border-b border-zinc-100">
              <th className="px-6 py-4">Item Details</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Quantity</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {inventoryItems.map((item) => (
              <tr key={item.id} className="hover:bg-zinc-50/50 transition-colors">
                <td className="px-6 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-zinc-100 overflow-hidden flex-shrink-0">
                      <img src={item.imgSrc} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-label-md text-on-surface font-semibold text-sm">{item.name}</p>
                      <p className="text-caption text-outline text-xs mt-0.5">{item.subtext}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-6">
                  {item.status === 'Active' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-primary text-xs font-bold">
                      <Check className="w-3.5 h-3.5" />
                      Active
                    </span>
                  )}
                  {item.status === 'Rescued' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-100 text-[#783d01] text-xs font-bold">
                      <HeartHandshake className="w-3.5 h-3.5" />
                      Rescued
                    </span>
                  )}
                  {item.status === 'Expired' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-error text-xs font-bold">
                      <TimerOff className="w-3.5 h-3.5" />
                      Expired
                    </span>
                  )}
                </td>
                <td className="px-6 py-6">
                  <p className="font-label-md text-on-surface font-semibold text-sm">{item.quantity}</p>
                  <p className={`text-caption text-xs mt-0.5 ${
                    item.status === 'Rescued' ? 'text-primary' : item.status === 'Expired' ? 'text-error' : 'text-[#8e4e14]'
                  }`}>
                    {item.quantitySub}
                  </p>
                </td>
                <td className="px-6 py-6">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-on-surface">{item.price}</span>
                    <span className="text-xs text-outline line-through">{item.oldPrice}</span>
                  </div>
                </td>
                <td className="px-6 py-6 text-right">
                  {item.status === 'Rescued' ? (
                    <button className="px-4 py-2 bg-emerald-50 text-primary font-label-md rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-all">
                      Relist Items
                    </button>
                  ) : item.status === 'Expired' ? (
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-zinc-400 hover:text-primary transition-colors">
                        <History className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-zinc-400 hover:text-error transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-zinc-400 hover:text-primary transition-colors">
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-zinc-400 hover:text-error transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-6 flex items-center justify-between border-t border-zinc-100 bg-surface-container-lowest">
        <p className="text-caption text-outline text-xs">Showing 1 to 3 of 42 items</p>
        <div className="flex gap-2">
          <button className="p-2 rounded-lg border border-zinc-100 text-outline hover:bg-zinc-50 disabled:opacity-50 transition-colors" disabled>
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold transition-colors">1</button>
          <button className="w-10 h-10 rounded-lg text-outline hover:bg-zinc-50 font-bold transition-colors">2</button>
          <button className="w-10 h-10 rounded-lg text-outline hover:bg-zinc-50 font-bold transition-colors">3</button>
          <button className="p-2 rounded-lg border border-zinc-100 text-outline hover:bg-zinc-50 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.section>
  )
}
