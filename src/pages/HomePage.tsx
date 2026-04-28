import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Store, Utensils, ShoppingBag, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { TopAppBar, BottomNavBar } from '../components/Shared';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col pb-20 md:pb-0">
      <TopAppBar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-24 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full">
              <Leaf className="w-4 h-4 fill-primary" />
              <span className="font-label-md">Join the movement</span>
            </div>
            <h1 className="font-h1 md:text-[56px]">
              Rescue Delicious Food.<br/>
              <span className="text-primary">Save the Planet.</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-lg">
              Discover and rescue perfectly good surplus food from your favorite local restaurants, bakeries, and grocers at up to 70% off.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/explore" className="bg-primary text-white rounded-xl py-4 px-8 font-label-md text-center shadow-level-2 hover:bg-primary-container transition-all active:scale-95">
                Start Rescuing
              </Link>
              <button className="bg-transparent border-2 border-primary text-primary rounded-xl py-4 px-8 font-label-md text-center hover:bg-surface-container transition-all active:scale-95">
                Partner With Us
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative"
          >
            <div className="aspect-square rounded-[40px] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-level-1 relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWJ6PPZ7fpuforEqgttu9Q6NbZ2AVsGmbAl7x16HuXOP6j3g6YU1jtY5s8rgewrDRlD4iDfUTIf1yaZ07XpKVzBqJTu5oNWPI9Ms2RoWSHqf_sztdZwByYzRzHlos-F2X1D4gyJCTUWNwutrv38tqz67q26gYVomUwU_imJELlmj9c4wix_YZZ6tQ9OmhvM1zKbPUAr03s2YWmRZVGLmVbv-IksJ750Ky2iugLCS2DpYhMoDK4h1DSnjb5bZEV3VgItqmtCRiIzro" 
                alt="Rescue Food" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-level-3 flex items-center gap-3 border border-white/20">
                <div className="bg-secondary-container text-on-secondary-container rounded-full p-2 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-label-md text-on-surface leading-tight">Magic Bag</p>
                  <p className="font-caption text-on-surface-variant leading-tight">Saved $15.00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Impact Bento Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-primary-container text-on-primary-container rounded-3xl p-8 flex flex-col justify-between min-h-[200px] shadow-level-1">
              <Utensils className="w-10 h-10 opacity-60" />
              <div>
                <h3 className="font-h1 mb-1">2.4M</h3>
                <p className="font-body-md opacity-90">Meals rescued globally</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-secondary-fixed text-on-secondary-fixed rounded-3xl p-8 flex flex-col justify-between min-h-[200px] shadow-level-1">
              <Leaf className="w-10 h-10 opacity-60" />
              <div>
                <h3 className="font-h1 mb-1">6.1K</h3>
                <p className="font-body-md opacity-90">Tons of CO2e prevented</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-surface-container-high text-on-surface rounded-3xl p-8 flex flex-col justify-between min-h-[200px] shadow-level-1 border border-outline-variant/30">
              <Store className="w-10 h-10 text-primary opacity-60" />
              <div>
                <h3 className="font-h1 mb-1">8,500+</h3>
                <p className="font-body-md text-on-surface-variant">Active local partners</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-surface-container-lowest py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-h2">Rescue food in 3 easy steps</h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Make a tangible impact on local food waste while enjoying delicious meals at a fraction of the cost.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: MapPin, title: 'Find', desc: 'Browse the app to discover nearby restaurants and stores with surplus food available today.', color: 'bg-primary-fixed' },
                { icon: ShoppingBag, title: 'Rescue', desc: 'Reserve your Surprise Bag through the app at a heavily discounted price and head to the store.', color: 'bg-secondary-fixed' },
                { icon: Utensils, title: 'Eat', desc: 'Pick up your food at the specified time, enjoy your meal, and feel good about helping the planet.', color: 'bg-tertiary-fixed' },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-6">
                  <div className={cn("w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-level-1 transition-transform hover:rotate-6", step.color)}>
                    <step.icon className="w-10 h-10 text-on-surface" />
                  </div>
                  <h3 className="font-h3">{step.title}</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Partners */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 py-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-h2">Local Partners</h2>
              <p className="font-body-md text-on-surface-variant">Discover who's fighting food waste in your neighborhood.</p>
            </div>
            <Link to="/explore" className="hidden md:flex items-center gap-2 text-primary font-label-md group">
              See all <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Green Bean Cafe', dist: '0.8 mi', price: '$4.99', type: 'Surprise Bag', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa-yQ5TvJQOjeeuodcLLN3J-VkmbQIRVpsn9x9vilnRFYadhp0P5L86pv1F1hxNY8yPY6VF27tGrIhQWFaQ91Hingo55oeVpFUUUqGv28_Zcw7NV32CKWSOvnHRur94Zna1wVHskSu7RAcklUDj7b7YzkdB0_8-C_ll0QQxob6AKxpG91vbpkTzbX-qbl5T4SLvBcSkxC8HzU1Oc2tqUlbapuI8X0KspKflVdVy_9J5LOSZxTYDOxiPL0nuXsJz56OJjHIlsKVRxo', verified: true },
              { name: 'Artisan Bakehouse', dist: '1.2 mi', price: '$3.50', type: 'Pastry Box', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuBx4mNcbCGXjF4mdZKyKcVbl-rnQqpno_ROrc7RRPp_iouKjFLH1Vz7XhiQV-4B3p9zO3P-dQUJuoXqQwCiYf0tPlmwg8tFF3ySfAJpYYAu9-6Ib15MO6HT8Gyfz2A5TzKD12XtPhjQaz8gQbKM4Isso7AYZJlC46-qCaPzeuysj_3Sy-NOfHi1F92-phSs2yFLnUI-qjR6Kng1O7lH16QI8PeNaGembS92fy5kFX5mnbKjSX6VFyvGxA4OmVWDo6m_tawnUV0ss', discount: 'Discount' },
              { name: 'City Fresh Grocers', dist: '2.5 mi', price: '$5.99', type: 'Produce Bag', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0dcJt5fJo0LnrbIdFgjLczXmwjE9NFXWBfWyLK-X9cWlpR0fmG70uGFeqSTCh_LM6pV_YjTflAjKamBqc0gOzQlSAJKj5cA41TmorvSLkgcAtEOEmjEmpTlj4GhmG7fjt9eYDLOppkMlp-YdE_ByRQpgcP_1REC8Ou2btn87hR2moFOuDGZKZTAJxA4znPok-GZIu6JxAf3ZtjQSmTuEtmCJeGfV9MOccdLFrQ-CM51DQVMeWYfVWNs4pCW24F23qZoAaizbdY5c' },
              { name: 'Mama\'s Kitchen', dist: '3.1 mi', price: '$6.50', type: 'Dinner Portion', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXXpN4V30zZrnue0WDJDaYGAyX1eO1CP1JR1oTqwGOvcU43fq_SwyEKFiZhsteI8o_gBCvvbMqiIQZSSQSYqKjTfYaWtRwextsE5XzXWUhXdX5Z2EGkbJSdwft_fdripS7zu8JxLOdEj_mjtYeB8upIstdoEyfq0OoDGLp9I5Y3hmB2FdJv_FH5P_Avvz4JRY25_wtl1RIz6SxKEKB1mvZiTOVAcenwmLlWGsMSyLAv2ddiC7FN3XgnPppdkGwKH_L4cKBlJzK0tk' },
            ].map((partner, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                className="bg-surface-container-lowest rounded-2xl p-4 shadow-level-1 border border-outline-variant/30 flex flex-col group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <img src={partner.img} alt={partner.name} className="w-16 h-16 rounded-full object-cover border-2 border-surface-container" />
                  {partner.verified && (
                    <div className="bg-primary/10 text-primary-fixed-dim text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 fill-primary-container" /> Verified
                    </div>
                  )}
                  {partner.discount && (
                    <div className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-1 rounded-full">
                      Discount
                    </div>
                  )}
                </div>
                <h3 className="font-label-md mb-1">{partner.name}</h3>
                <p className="text-caption text-on-surface-variant flex items-center gap-1 mb-4">
                  <MapPin className="w-3 h-3" /> {partner.dist} away
                </p>
                <div className="mt-auto bg-surface-container-low rounded-xl p-3 flex justify-between items-center group-hover:bg-primary/5 transition-colors">
                  <span className="text-caption text-on-surface-variant">{partner.type}</span>
                  <span className="font-label-md text-primary">{partner.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-surface-container py-12 border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
          <div>
            <span className="font-bold text-primary text-xl mb-2 block">RescueFood</span>
            <p className="font-epilogue text-sm text-on-surface-variant">© 2024 RescueFood. Community-led food sustainability.</p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center md:justify-end">
            <Link to="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Safety Guidelines</Link>
            <Link to="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Partner Terms</Link>
            <Link to="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Contact Support</Link>
          </div>
        </div>
      </footer>

      <BottomNavBar />
    </div>
  );
};

export default HomePage;
