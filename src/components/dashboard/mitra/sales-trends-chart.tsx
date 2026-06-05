import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'
import { ChevronDown } from 'lucide-react'

const data = [
  { name: 'Sen', revenue: 400 },
  { name: 'Sel', revenue: 600 },
  { name: 'Rab', revenue: 450 },
  { name: 'Kam', revenue: 800 },
  { name: 'Jum', revenue: 550 },
  { name: 'Sab', revenue: 900 },
  { name: 'Min', revenue: 750 },
]

export function SalesTrendsChart() {
  return (
    <motion.section variants={fadeUp} className="lg:col-span-2 bg-white p-6 rounded-xl shadow-level-1">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-h3 text-2xl">Tren Penjualan</h3>
          <p className="text-caption text-outline">Kinerja pendapatan selama 7 hari terakhir</p>
        </div>
        <div className="relative">
          <select className="appearance-none bg-surface-container-low border-none rounded-lg font-label-md text-sm pl-4 pr-10 py-2 ring-0 focus:ring-1 focus:ring-primary outline-none">
            <option>Minggu Ini</option>
            <option>Bulan Lalu</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-outline pointer-events-none" />
        </div>
      </div>
      <div className="h-[300px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0f5238" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#0f5238" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#707973', fontSize: 12 }} 
              dy={10} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#707973', fontSize: 12 }} 
              tickFormatter={(value) => `Rp ${value}`} 
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '8px', 
                border: 'none', 
                boxShadow: '0px 4px 20px rgba(29, 53, 87, 0.05)',
                fontSize: '14px',
                fontWeight: '600'
              }}
              itemStyle={{ color: '#0f5238' }}
              cursor={{ stroke: '#2d6a4f', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#0f5238" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  )
}
