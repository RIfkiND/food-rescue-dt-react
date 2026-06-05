import React, { useState, useMemo } from 'react'
import { motion } from 'motion/react'
import { stagger, fadeUp } from '@/lib/motion'
import { TopNav } from '@/components/layout/top-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { MobileNav } from '@/components/layout/mobile-nav'
import { Plus, MoreVertical, Edit2, Trash2, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const PRODUCTS = [
  {
    id: 1,
    name: 'Artisan Sourdough Loaf',
    category: 'Roti & Biji-bijian',
    image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?q=80&w=2670&auto=format&fit=crop',
    quantity: 'Sisa 12',
    originalPrice: 28.00,
    rescuePrice: 12.50,
    status: 'Aktif'
  },
  {
    id: 2,
    name: 'Assorted Pastry Box',
    category: 'Roti & Biji-bijian',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2672&auto=format&fit=crop',
    quantity: '5 kotak',
    originalPrice: 45.00,
    rescuePrice: 15.99,
    status: 'Aktif'
  },
  {
    id: 3,
    name: 'Organic Fruit Bag',
    category: 'Produk & Buah',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2670&auto=format&fit=crop',
    quantity: '8 tas',
    originalPrice: 32.00,
    rescuePrice: 13.50,
    status: 'Draf'
  },
  {
    id: 4,
    name: 'Roasted Veggie Bowl',
    category: 'Makanan Siap Saji',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop',
    quantity: 'Sisa 0',
    originalPrice: 34.50,
    rescuePrice: 15.00,
    status: 'Habis Terjual'
  },
  {
    id: 5,
    name: 'Fresh Dairy Bundle',
    category: 'Susu & Lainnya',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=2670&auto=format&fit=crop',
    quantity: '3 paket',
    originalPrice: 40.00,
    rescuePrice: 18.00,
    status: 'Aktif'
  },
  {
    id: 6,
    name: 'Classic Bagel Dozen',
    category: 'Roti & Biji-bijian',
    image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?q=80&w=2670&auto=format&fit=crop',
    quantity: '2 lusin',
    originalPrice: 38.00,
    rescuePrice: 16.00,
    status: 'Aktif'
  },
  // 10 TAMBAHAN DATA BARU
  {
    id: 7,
    name: 'Spicy Chicken Wrap',
    category: 'Makanan Siap Saji',
    image: 'https://images.unsplash.com/photo-1626804475297-4160aeceaaee?q=80&w=2670&auto=format&fit=crop',
    quantity: 'Sisa 5',
    originalPrice: 25.00,
    rescuePrice: 10.00,
    status: 'Aktif'
  },
  {
    id: 8,
    name: 'Mixed Berry Tart',
    category: 'Roti & Biji-bijian',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=2574&auto=format&fit=crop',
    quantity: '2 kotak',
    originalPrice: 55.00,
    rescuePrice: 25.00,
    status: 'Aktif'
  },
  {
    id: 9,
    name: 'Harvest Salad Bowl',
    category: 'Makanan Siap Saji',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop',
    quantity: 'Sisa 3',
    originalPrice: 30.00,
    rescuePrice: 15.00,
    status: 'Draf'
  },
  {
    id: 10,
    name: 'Baguette Duo',
    category: 'Roti & Biji-bijian',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2670&auto=format&fit=crop',
    quantity: 'Sisa 10',
    originalPrice: 20.00,
    rescuePrice: 8.00,
    status: 'Aktif'
  },
  {
    id: 11,
    name: 'Tropical Fruit Mix',
    category: 'Produk & Buah',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop',
    quantity: 'Sisa 0',
    originalPrice: 35.00,
    rescuePrice: 14.00,
    status: 'Habis Terjual'
  },
  {
    id: 12,
    name: 'Cheddar Cheese Block',
    category: 'Susu & Lainnya',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2673&auto=format&fit=crop',
    quantity: 'Sisa 7',
    originalPrice: 45.00,
    rescuePrice: 20.00,
    status: 'Aktif'
  },
  {
    id: 13,
    name: 'Vegan Sushi Pack',
    category: 'Makanan Siap Saji',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2670&auto=format&fit=crop',
    quantity: 'Sisa 4',
    originalPrice: 50.00,
    rescuePrice: 22.00,
    status: 'Aktif'
  },
  {
    id: 14,
    name: 'Chocolate Chip Cookies',
    category: 'Roti & Biji-bijian',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=2664&auto=format&fit=crop',
    quantity: '3 toples',
    originalPrice: 30.00,
    rescuePrice: 12.00,
    status: 'Aktif'
  },
  {
    id: 15,
    name: 'Avocado Toast Kit',
    category: 'Produk & Buah',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=2672&auto=format&fit=crop',
    quantity: 'Sisa 2',
    originalPrice: 42.00,
    rescuePrice: 18.00,
    status: 'Draf'
  },
  {
    id: 16,
    name: 'Grilled Salmon Bento',
    category: 'Makanan Siap Saji',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=2692&auto=format&fit=crop',
    quantity: 'Sisa 0',
    originalPrice: 60.00,
    rescuePrice: 28.00,
    status: 'Habis Terjual'
  }
]

export default function MitraFood() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  
  // Get products for current page
  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredProducts.slice(start, start + itemsPerPage)
  }, [filteredProducts, currentPage])

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  // Reset to first page when searching
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/10">
      <Sidebar variant="mitra" />
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0">
        <TopNav variant="mitra" />
        <main className="flex-1 p-6 lg:p-10 max-w-[1400px] mx-auto w-full pb-32 lg:pb-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Header & Search */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1 className="font-h2 text-[32px] text-on-surface">Surplus Makanan</h1>
                  <p className="text-zinc-500">Kelola daftar makanan yang diselamatkan dan inventaris berlebih Anda.</p>
                </div>
                <Link 
                  to="/dashboard/mitra/new-listing" 
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-container transition-all shadow-md hover:scale-[1.02] active:scale-95 whitespace-nowrap"
                >
                  <Plus className="w-5 h-5" />
                  Tambah Daftar Baru
                </Link>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-md">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-zinc-400" />
                </div>
                <input
                  type="text"
                  placeholder="Cari nama makanan atau kategori..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="block w-full pl-11 pr-4 py-3 bg-white border border-zinc-200 rounded-xl leading-5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                />
              </div>
            </motion.div>

            {/* Products Grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.length > 0 ? currentProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 group flex flex-col hover:shadow-md transition-shadow">
                  {/* Image Area */}
                  <div className="relative h-48 overflow-hidden bg-zinc-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full cursor-pointer hover:bg-white text-zinc-600 transition-colors shadow-sm">
                      <MoreVertical className="w-4 h-4" />
                    </div>
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold",
                        product.status === 'Aktif' ? "bg-emerald-500 text-white" :
                        product.status === 'Habis Terjual' ? "bg-zinc-500 text-white" :
                        "bg-amber-400 text-amber-950"
                      )}>
                        {product.status}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{product.category}</p>
                      <h3 className="font-h3 text-xl text-zinc-800 line-clamp-1">{product.name}</h3>
                      <p className="text-sm text-zinc-500 mt-1">{product.quantity} tersisa</p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-zinc-400 line-through">Rp {(product.originalPrice * 1000).toLocaleString('id-ID')}</p>
                        <p className="text-lg font-bold text-emerald-700">Rp {(product.rescuePrice * 1000).toLocaleString('id-ID')}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-full bg-zinc-50 text-zinc-600 flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-zinc-50 text-zinc-600 flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="col-span-full py-12 flex flex-col items-center justify-center text-zinc-500 bg-white rounded-3xl border border-zinc-100 border-dashed">
                  <Search className="w-12 h-12 mb-4 text-zinc-300" />
                  <p className="text-lg font-medium">Tidak ada makanan yang ditemukan</p>
                  <p className="text-sm">Coba cari dengan kata kunci lain.</p>
                </div>
              )}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 pt-4">
                <button 
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-xl border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToPage(i + 1)}
                      className={cn(
                        "w-10 h-10 rounded-xl font-bold transition-all",
                        currentPage === i + 1 
                          ? "bg-primary text-white shadow-md" 
                          : "text-zinc-600 hover:bg-zinc-100"
                      )}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-xl border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}

          </motion.div>
        </main>
        <MobileNav variant="mitra" />
      </div>
    </div>
  )
}
