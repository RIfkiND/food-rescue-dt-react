import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, SlidersHorizontal, Map as MapIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { TopAppBar, BottomNavBar, FoodCard } from '../components/Shared';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const FOOD_ITEMS = [
  {
    id: '1',
    title: 'Rustic Sourdough Loaf',
    store: 'The Daily Crumb',
    price: '2.00',
    originalPrice: '6.00',
    timeLeft: '2h left',
    discount: 'SAFE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLmYT9I0yMgut6h9ujpuoyBhrEAswLHIIOZn7UhX8wGQCNy2Wp1AWsktX0OCPPZ4KhPzUiZq75jFPaAjt9wdAIIrxXlGkDb01LwVOz39PiUB71qPfwt4NLYwSbFRnGGb-jMQaiBl8_gT37htOzcdIilnbUdvscf2CU69UalvKcJvg8k6aii0bGuRgoBih1YAIwa7--AsSkenW0lUG_e6zH2nJnWVXWvRwxKBN_C5LQ2xxFOQ1QjkVC1D_zvlJ1CkOoE75PO12tdxk'
  },
  {
    id: '2',
    title: 'Roasted Veggie Bowl',
    store: 'Green Leaf Cafe',
    price: '4.00',
    originalPrice: '12.50',
    timeLeft: 'Verified',
    discount: 'HEALTHY',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtcyTNj5KwHUY5yos_qe7kbtu0GsO84zjxZkVz146AxJYpzplORav70ngXk0f_aI6ug_-XXGrSaUsb2k_M-VzfY07oFAmYQlszN4hAV_jCvsYWNabN68I_DXyK6e1rFrt-gCvwFLFM7i_C58eCiuegUWoi-iDuToKRMIiFr-n9VmB3YQ9JGKNhfSL77MRpqHtOmOq_WxWadAm_M6DPsQi9HY5th6ESrju3cDuLkofO3EAiYBCuvYVQiB_8BywH5Es5jPjxW68kTNc'
  },
  {
    id: '3',
    title: 'Organic Produce Box',
    store: 'City Farm Co-op',
    price: '8.50',
    originalPrice: '25.00',
    timeLeft: 'Ends soon',
    discount: 'SAFE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbBZ1-F0p78b2sWg5POkEwm4FTmXxrP9JCcgVpQAOPgfL_ZSWiK7kYgfyLEurHjfXAVluHrYfRIWRM58dTfuhQkYoRaBw88MoZBigqwO3cn_s-XOMm-62yjCZ7ecZhNNREHulrCQkLYQtpjVmuWx2ZJ0I1KAJRDC9-ngAzPZp-KcOdZMVtkMCe8J3vCxOeoJknaYN7wT63ZM7MWmN5C1TFnCdSdTZZ-2RSM5BC3hCdBJ-RXNfuAyxu1bhgeyPmnd1WrfNB7ZyF-Q0'
  },
  {
    id: '4',
    title: 'Assorted Pastry Pack',
    store: 'Sunrise Bakery',
    price: '5.00',
    originalPrice: '15.00',
    timeLeft: 'Discount',
    discount: '60% OFF',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN8xeCbRnHpoFOjGFu2KuLz0KDAvlkT8wse7rgMxdgbr3kaG2vhAbJD3PzazgmaL3BHHl60lDr1YptCkwB2DozTxaNZOqC_4HK2un9r1Vzy8YKM_1vBrQcIrBiI8aH1AcCBkAJAyKmJb5LH8gv9giR3C9UibI_h6K-iGVbz-Hxl3H-vhV_kT62DOdxJkF5qO2ECbKKKix6nPdWpbohAOSoT3_a2GM-YXo-0UOKrwcpyqDWFI_7mLAgN_7kpTVIgMko7_xhMQTaJNw'
  }
];

const CATEGORIES = ['All Items', 'Bakery', 'Meals', 'Groceries', 'Produce', 'Vegan'];

const ExplorePage = () => {
  const [activeCategory, setActiveCategory] = useState('All Items');

  return (
    <div className="min-h-screen flex flex-col pb-24">
      <TopAppBar />
      
      <main className="flex-1 pt-16 px-4 md:px-12 max-w-7xl mx-auto w-full">
        {/* Search Header */}
        <div className="sticky top-[64px] z-40 bg-surface/95 backdrop-blur-sm py-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 flex items-center bg-surface-container-lowest rounded-2xl shadow-level-1 border border-outline-variant/30 px-4 py-3 focus-within:border-primary transition-all">
              <Search className="w-5 h-5 text-on-surface-variant mr-3" />
              <input 
                type="text" 
                placeholder="Search available food nearby..." 
                className="w-full bg-transparent border-none outline-none font-body-md text-on-surface placeholder:text-on-surface-variant/60"
              />
              <button className="p-1 rounded-lg hover:bg-surface-container transition-colors">
                <SlidersHorizontal className="w-4 h-4 text-primary" />
              </button>
            </div>
            <Link to="/map" className="hidden sm:flex md:hidden lg:flex items-center gap-2 px-6 h-[52px] bg-primary text-white rounded-2xl shadow-level-2 transition-transform active:scale-95">
              <MapIcon className="w-5 h-5" />
              <span className="font-label-md">Map</span>
            </Link>
          </div>

          <div className="flex overflow-x-auto gap-2 no-scrollbar -mx-4 px-4 pb-2">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "shrink-0 rounded-full px-6 py-2 font-label-md border transition-all",
                  activeCategory === cat 
                    ? "bg-primary text-white border-primary shadow-level-1" 
                    : "bg-surface-container-lowest text-on-surface-variant border-outline-variant hover:bg-surface-container"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Section Title */}
        <div className="flex items-center justify-between mt-6 mb-8">
          <h2 className="font-h2">Available Nearby</h2>
          <Link to="/map" className="font-label-md text-primary flex items-center gap-2 group">
            Map View <MapIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOOD_ITEMS.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <FoodCard 
                id={item.id}
                title={item.title}
                store={item.store}
                distance="0.8 mi" // Default distance since mock data doesn't have it
                discountedPrice={parseFloat(item.price)}
                originalPrice={parseFloat(item.originalPrice)}
                timeLeft={item.timeLeft}
                rating={4.5}
                image={item.image}
                discount={item.discount}
              />
            </motion.div>
          ))}
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
};

export default ExplorePage;
