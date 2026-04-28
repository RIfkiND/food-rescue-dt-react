import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, MapPin, Star, Share2, 
  Clock, ShieldCheck, Heart, Info,
  Store, ShoppingBag, Leaf, ExternalLink
} from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { BottomNavBar, FoodCard } from '../components/Shared';
import { cn } from '../lib/utils';

const PARTNER_DATA = {
  id: 'green-bakery',
  name: 'Green Leaf Bakery',
  description: 'Artisanal breads and pastries made with organic ingredients. Join us in reducing food waste while enjoying fresh, high-quality baked goods.',
  rating: 4.8,
  reviews: 1250,
  address: '123 Eco Street, Sustainability District',
  distance: '0.8 miles',
  hours: '08:00 - 19:00',
  impact: '2,450 kg CO2 saved',
  bannerUrl: 'https://images.unsplash.com/photo-1540333563391-64551131917c?q=80&w=2670&auto=format&fit=crop',
  logoUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2672&auto=format&fit=crop',
};

const ITEMS = [
  {
    id: '1',
    title: 'Surprise Bag: Pastries',
    store: 'Green Leaf Bakery',
    distance: '0.8 miles',
    time: '18:30 - 19:00',
    originalPrice: 15,
    discountedPrice: 4.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2670&auto=format&fit=crop',
    tags: ['Vegetarian', 'Organic'],
    itemsLeft: 3
  },
  {
    id: '2',
    title: 'Daily Bread Bundle',
    store: 'Green Leaf Bakery',
    distance: '0.8 miles',
    time: '18:45 - 19:15',
    originalPrice: 12,
    discountedPrice: 3.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1582211594533-268f4f1edeb9?q=80&w=2670&auto=format&fit=crop',
    tags: ['Vegan'],
    itemsLeft: 5
  }
];

const PartnerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface pb-24">
      {/* Header Banner */}
      <div className="relative h-[250px] md:h-[400px]">
        <img 
          src={PARTNER_DATA.bannerUrl} 
          alt={PARTNER_DATA.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="absolute top-6 right-6 flex gap-2">
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Merchant Info Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface-container rounded-[2.5rem] p-8 shadow-level-2 border border-outline-variant"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-level-1 border-4 border-surface">
                    <img src={PARTNER_DATA.logoUrl} alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h1 className="font-display font-bold text-4xl mb-2">{PARTNER_DATA.name}</h1>
                    <div className="flex items-center gap-4 text-on-surface-variant font-body-md">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-secondary fill-secondary" />
                        {PARTNER_DATA.rating} ({PARTNER_DATA.reviews} reviews)
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {PARTNER_DATA.distance}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-label-lg flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    Verified Partner
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-surface-container-low rounded-3xl border border-outline-variant">
                <div className="flex flex-col items-center text-center">
                  <Clock className="w-6 h-6 text-primary mb-2" />
                  <span className="font-label-sm text-on-surface-variant">Hours</span>
                  <span className="font-title-md">{PARTNER_DATA.hours}</span>
                </div>
                <div className="flex flex-col items-center text-center border-l border-outline-variant">
                  <ShoppingBag className="w-6 h-6 text-primary mb-2" />
                  <span className="font-label-sm text-on-surface-variant">Rescued</span>
                  <span className="font-title-md">1,240 meals</span>
                </div>
                <div className="flex flex-col items-center text-center border-l border-outline-variant">
                  <Leaf className="w-6 h-6 text-primary mb-2" />
                  <span className="font-label-sm text-on-surface-variant">Impact</span>
                  <span className="font-title-md">Elite Hero</span>
                </div>
                <div className="flex flex-col items-center text-center border-l border-outline-variant">
                  <Info className="w-6 h-6 text-primary mb-2" />
                  <span className="font-label-sm text-on-surface-variant">Type</span>
                  <span className="font-title-md">Bakery</span>
                </div>
              </div>
            </motion.div>

            {/* About Section */}
            <section className="space-y-4">
              <h2 className="font-h2 pl-2">About the Merchant</h2>
              <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant leading-relaxed text-on-surface-variant">
                <p>{PARTNER_DATA.description}</p>
                <div className="mt-6 flex items-center gap-2 text-primary font-label-lg cursor-pointer hover:underline">
                  Visit Website <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </section>

            {/* Available Rescues */}
            <section className="space-y-6">
              <div className="flex items-center justify-between px-2">
                <h2 className="font-h2">Available Rescues</h2>
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-md">
                  {ITEMS.length} listed today
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ITEMS.map((item) => (
                  <FoodCard key={item.id} {...item} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Impact Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-primary text-on-primary rounded-[2.5rem] p-8 shadow-level-3 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4">
                <Leaf className="w-32 h-32" />
              </div>
              <p className="font-label-lg opacity-80 mb-2">Our Environmental Impact</p>
              <h3 className="font-h1 mb-4">{PARTNER_DATA.impact}</h3>
              <p className="font-body-md opacity-90">
                By ordering from this bakery, you're directly helping prevent food waste and reduce global carbon emissions.
              </p>
              <div className="mt-8 pt-8 border-t border-on-primary/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-on-primary/10 flex items-center justify-center">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-label-sm opacity-80">Waste Reduction Level</p>
                  <p className="font-title-md">Platinum Savior</p>
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant space-y-6">
              <h3 className="font-h3 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                Location
              </h3>
              <div className="aspect-square bg-surface-container-high rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2666&auto=format&fit=crop" 
                  alt="Map" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-body-md text-on-surface-variant">{PARTNER_DATA.address}</p>
              <button className="w-full py-4 text-primary border border-primary rounded-full font-title-md hover:bg-primary/5 transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default PartnerPage;
