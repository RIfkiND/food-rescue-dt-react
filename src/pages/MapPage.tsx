import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, SlidersHorizontal, Map as MapIcon, 
  List, ChevronLeft, Filter, Navigation,
  Star, Clock, ShoppingBag
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BottomNavBar, TopAppBar } from '../components/Shared';
import { cn } from '../lib/utils';

const LOCATIONS = [
  { id: '1', name: 'Green Leaf Bakery', lat: 40.7128, lng: -74.0060, items: 3, rating: 4.8, price: '$4.99' },
  { id: '2', name: 'Fresh Market', lat: 40.7306, lng: -73.9352, items: 12, rating: 4.5, price: '$3.50' },
  { id: '3', name: 'Sushi Zen', lat: 40.7589, lng: -73.9851, items: 5, rating: 4.9, price: '$7.99' },
  { id: '4', name: 'The Burger Joint', lat: 40.7829, lng: -73.9654, items: 2, rating: 4.2, price: '$5.50' },
];

const MapPage = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="h-screen flex flex-col bg-surface overflow-hidden">
      <TopAppBar />

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Desktop Only */}
        <aside className="hidden lg:flex w-96 flex-col border-r border-outline-variant bg-surface overflow-hidden">
          <div className="p-6 space-y-4 border-b border-outline-variant">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
              <input 
                type="text" 
                placeholder="Search food heroes..." 
                className="w-full bg-surface-container-high rounded-full py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-primary border-none"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-3 px-4 bg-surface-container-highest rounded-2xl flex items-center justify-center gap-2 font-label-lg">
                <Filter className="w-4 h-4" /> Filters
              </button>
              <button className="flex-1 py-3 px-4 bg-surface-container-highest rounded-2xl flex items-center justify-center gap-2 font-label-lg">
                <Clock className="w-4 h-4" /> Pick-up
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <h3 className="font-title-lg text-on-surface flex items-center justify-between">
              Nearby Rescues
              <span className="text-secondary font-label-md">24 results</span>
            </h3>
            {LOCATIONS.map((loc) => (
              <motion.div 
                key={loc.id}
                whileHover={{ y: -2 }}
                onClick={() => setSelectedId(loc.id)}
                className={cn(
                  "p-4 rounded-3xl border transition-all cursor-pointer",
                  selectedId === loc.id 
                    ? "bg-primary-container border-primary shadow-level-1" 
                    : "bg-surface-container border-outline-variant hover:border-outline"
                )}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-title-md">{loc.name}</h4>
                  <span className="font-title-md text-primary">{loc.price}</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant font-label-md">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-secondary fill-secondary" /> {loc.rating}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <ShoppingBag className="w-3 h-3" /> {loc.items} bags left
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </aside>

        {/* Map Area */}
        <main className="flex-1 relative bg-surface-container-high">
          {/* Mock Map Background */}
          <div className="absolute inset-0 grayscale opacity-80 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2666&auto=format&fit=crop" 
              alt="Map Background" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Interactive Layer */}
          <div className="absolute inset-0">
            {LOCATIONS.map((loc) => (
              <motion.button
                key={loc.id}
                onClick={() => setSelectedId(loc.id)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className={cn(
                  "absolute transform -translate-x-1/2 -translate-y-1/2 p-1 rounded-full border-4 shadow-level-2 transition-all",
                  selectedId === loc.id 
                    ? "bg-primary border-white z-20" 
                    : "bg-white border-primary/20 z-10"
                )}
                style={{ 
                  left: `${(loc.lng + 74.1) * 1000}%`, // Dummy mapping for visualize
                  top: `${(40.8 - loc.lat) * 1000}%` 
                }}
              >
                <div className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-full font-bold",
                  selectedId === loc.id ? "text-white" : "text-primary"
                )}>
                  {loc.items}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Top Controls Overlay */}
          <div className="absolute top-6 left-6 right-6 flex justify-between lg:justify-end gap-3 lg:hidden">
            <div className="flex-1 bg-surface-container/90 backdrop-blur-md rounded-full px-6 py-3 shadow-level-2 flex items-center gap-3 border border-outline-variant/30">
              <Search className="w-5 h-5 opacity-50" />
              <input type="text" placeholder="Search area..." className="bg-transparent border-none focus:outline-none w-full" />
            </div>
            <button className="w-12 h-12 bg-primary text-on-primary rounded-full shadow-level-2 flex items-center justify-center">
              <Filter className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Card - Mobile Overlay */}
          <AnimatePresence>
            {selectedId && (
              <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="absolute bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md"
              >
                <div className="bg-surface-container rounded-[2.5rem] p-8 shadow-level-4 border border-outline-variant flex gap-6 items-center">
                  <div className="flex-1">
                    <p className="font-label-md text-primary mb-1">Rescue Available</p>
                    <h3 className="font-h3 mb-2">{LOCATIONS.find(l => l.id === selectedId)?.name}</h3>
                    <div className="flex items-center gap-3 text-on-surface-variant font-label-md">
                      <span className="flex items-center gap-1"><Star className="w-4 h-4 text-secondary fill-secondary" /> {LOCATIONS.find(l => l.id === selectedId)?.rating}</span>
                      <span>•</span>
                      <span>{LOCATIONS.find(l => l.id === selectedId)?.price}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/item/${selectedId}`}
                    className="w-16 h-16 bg-primary text-on-primary rounded-3xl flex items-center justify-center shadow-level-2 hover:bg-primary-dim transition-colors"
                  >
                    <Navigation className="w-6 h-6" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Controls */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            <button className="w-12 h-12 bg-surface/90 backdrop-blur-md rounded-2xl shadow-level-1 flex items-center justify-center border border-outline-variant/30 text-on-surface-variant">
              +
            </button>
            <button className="w-12 h-12 bg-surface/90 backdrop-blur-md rounded-2xl shadow-level-1 flex items-center justify-center border border-outline-variant/30 text-on-surface-variant">
              -
            </button>
            <button className="w-12 h-12 bg-surface/90 backdrop-blur-md rounded-2xl shadow-level-1 flex items-center justify-center border border-outline-variant/30 text-primary mt-2">
              <Navigation className="w-5 h-5" />
            </button>
          </div>
        </main>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default MapPage;
