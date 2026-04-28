import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Heart, Share2, Star, MapPin, 
  Clock, ShieldCheck, CheckCircle2, Leaf,
  ShoppingBag, ShoppingCart, Timer
} from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { BottomNavBar } from '../components/Shared';

const ItemPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-surface flex flex-col pb-32">
      {/* Visual Header */}
      <div className="relative h-80 w-full bg-surface-container-high md:h-[450px]">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC5MGGMPDVaRoa5Oz4QpNrFrTTqeawjhFpukwKFjn_5mYipcSUAwud0Gt2pqfc56q1-aFleISZ0scz1Y72SQIhCtMhiGfqA7uUVLXee_vUGzwfJhGj6en4ZuEAi7eAID73YsB_jHAslv_hyOgWK_G74Ez7XvVOAmr4DJgQRHDU_kBjOmH407m_TZe0YirU27ZC1Lc7JDjlZPmC9EYWe_-zydw1Len5S_YB6k6iVnOcWNLaoHHAO8-hQVR4MvbBlY1QvVzgRatPaL8" 
          alt="Item" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/10" />
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-10 md:px-12 md:py-8">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-on-surface shadow-level-1 active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-on-surface shadow-level-1 active:scale-95">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-on-surface shadow-level-1 active:scale-95">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full -mt-8 bg-surface rounded-t-[2.5rem] relative z-20 px-4 md:px-8 pt-8 space-y-10">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-1.5 bg-primary-fixed/30 text-on-primary-fixed-variant px-4 py-2 rounded-full border border-primary-fixed">
              <ShieldCheck className="w-4 h-4 fill-primary" />
              <span className="font-label-md">Safe to Eat</span>
            </div>
            <div className="flex items-center gap-1.5 px-4 py-2 bg-surface-container rounded-full text-on-surface-variant">
              <MapPin className="w-4 h-4" />
              <span className="font-caption font-semibold">0.8 mi</span>
            </div>
          </div>
          <h1 className="font-h1 md:text-[48px]">Artisan Bakery Surplus</h1>
          <div className="flex items-baseline gap-2">
            <span className="font-h2 text-primary">$4.50</span>
            <span className="font-body-lg text-on-surface-variant line-through">$12.00</span>
            <span className="ml-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-lg font-label-md">60% OFF</span>
          </div>
        </div>

        {/* Store Info */}
        <section className="flex items-center gap-4 p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-level-1 transition-all hover:bg-surface-container-low cursor-pointer">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV8NQME2BB-Z6PHy7rzLLEKBbbBMapQOA0ZR0z8F_yGExkt5pxa40Lr_OBvMgwrcQ4XkVJ7p7v39CfPA7N8h_ClSUJSwMAyerYNMtYfnL4ozuHfD4_4dKtF1j1qP5VDfKFe5gtsHV1PX5xg_L7IJOn7CyQdnHsxjK6q68IAs6mTTNM5E9vJg7JXjQsLaI8DZR-XRvFSjRdho4bhKOxbN-9P3mTgqdFvemj6wOQu_AsAaAk_JTagBiJZNxXBvjk4h5PW_uzsjjGpwU" 
            alt="Daily Bread Co" 
            className="w-14 h-14 rounded-full object-cover border-2 border-surface-container"
          />
          <div className="flex-1">
            <h3 className="font-label-md">Daily Bread Co.</h3>
            <div className="flex items-center gap-1.5 mt-1 text-secondary">
              <Star className="w-3.5 h-3.5 fill-secondary" />
              <span className="font-caption font-bold">4.9 (120+ rescued)</span>
            </div>
          </div>
          <button className="text-primary font-label-md px-4 py-2 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
            View
          </button>
        </section>

        {/* Pickup Window */}
        <section className="bg-secondary-fixed/20 p-6 rounded-3xl border border-secondary-fixed-dim/30 flex items-start gap-5">
          <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
            <Clock className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-label-md">Pickup Window</h4>
            <p className="font-body-md text-on-surface-variant">Today, 4:00 PM - 6:00 PM</p>
            <p className="font-caption text-red-600 flex items-center gap-1.5 font-semibold">
              <Timer className="w-3.5 h-3.5" /> Ends in 2 hours
            </p>
          </div>
        </section>

        {/* Description */}
        <div className="space-y-4">
          <h3 className="font-h3 text-xl">Description</h3>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            An assortment of our daily baked goods that didn't sell today. Typically includes 1-2 loaves of sourdough, a baguette, and a couple of pastries (croissants or muffins). Perfectly safe and delicious to eat, just not fresh out of the oven.
          </p>
          <div className="bg-primary/5 p-4 rounded-2xl flex items-center gap-3 border border-primary/10">
            <Leaf className="w-5 h-5 text-primary" />
            <p className="font-label-md text-primary">You're saving 0.5kg of food with this rescue!</p>
          </div>
        </div>

        {/* Location Placeholder */}
        <div className="space-y-4 pt-4">
          <h3 className="font-h3 text-xl">Location</h3>
          <p className="font-body-md text-on-surface-variant">124 Main Street, Downtown</p>
          <div className="w-full h-48 bg-surface-container rounded-3xl overflow-hidden relative border border-outline-variant/30 shadow-level-1">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGYfkMAkXaBIkj2cCMnlROOIpGnqXyCdqgGUMBnr75HJinnCCLp4ThDxkJK7i8q-QoYhXp0vvJAVjUFZNl-oD7dbStsPtkPapyxD-fh6epTXScfxPcl265jJWyyl9TYcQ7opvqnEPglPW2h5ItG8KFc8UztsC7HaJhRomo3BX1zbl8CJm5jkAjw4zmQ-pdAM26ids_6qUYQ5ZW-MVT1Ghj6lceuFJ0anjTcnKs8yujHNAwz-yl2YDTajXkVz7kOtGXXy-C-yOLHs0" 
              alt="Map" 
              className="w-full h-full object-cover grayscale opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="w-10 h-10 text-primary drop-shadow-md fill-white/20" />
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-outline-variant/20 p-6 md:px-12 z-50 flex items-center gap-6 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
        <div className="hidden md:block">
          <span className="text-caption text-on-surface-variant block leading-tight">Total Price</span>
          <span className="font-h2 text-primary leading-tight">$4.50</span>
        </div>
        <div className="flex-1 flex gap-4">
          <button className="flex-1 py-4 px-6 rounded-2xl border-2 border-primary text-primary font-label-md hover:bg-primary/5 transition-all active:scale-95 text-center">
            Add to Cart
          </button>
          <button className="flex-1 py-4 px-6 rounded-2xl bg-primary text-white font-label-md shadow-level-2 hover:bg-primary-container transition-all active:scale-95 text-center flex items-center justify-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Reserve Now
          </button>
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default ItemPage;
