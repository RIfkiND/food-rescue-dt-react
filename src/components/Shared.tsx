import React from 'react';
import { 
  Search, 
  Heart, 
  Bell, 
  MapPin, 
  LayoutGrid, 
  PlusCircle, 
  History, 
  User,
  ArrowLeft,
  Share2,
  CheckCircle2,
  ShieldCheck,
  Star,
  Timer,
  ShoppingBag,
  Store,
  ChevronRight,
  Leaf,
  ShoppingCart
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export const TopAppBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-12 h-16 bg-white/90 backdrop-blur-md border-b border-surface-container/50 shadow-level-1">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-2xl font-bold text-primary tracking-tighter transition-transform active:scale-95">
          RescueFood
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/explore" className="font-epilogue text-sm font-medium text-primary border-b-2 border-primary pb-1 transition-all">Explore</Link>
        <Link to="#" className="font-epilogue text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Donate</Link>
        <Link to="#" className="font-epilogue text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Partners</Link>
        <Link to="#" className="font-epilogue text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Impact</Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-surface-container transition-colors active:scale-95">
          <Bell className="w-5 h-5 text-on-surface-variant" />
        </button>
        <button className="p-2 rounded-full hover:bg-surface-container transition-colors active:scale-95">
          <Heart className="w-5 h-5 text-on-surface-variant" />
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant transition-transform active:scale-95 cursor-pointer">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGM4xomPvzrAvANe8kVMFYMGBGo_BsUIhqkL9nEa7tetbppKx_-KrNuteD-sdV7UZK_BqkF4gCVfGfE6UNn0DZoF7bFlfYRaQRVGj25OL0c6mt1S3EYFvNdxqCm17l1Frn4rbI_24NQMi6I80-JFdhV9ndjQwQ_fohn73M1hBtwCevwI_0eYNqL4PifHjRBfDZnkLQOiDPqQXXCrQA7lQk9Ee54NhFUg7PMpMb7nYzBPD63js7a4igVpHpIb5_dQmq3lBfZ_Iez1U" 
            alt="User" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export const BottomNavBar = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Search, label: 'Explore', path: '/explore' },
    { icon: PlusCircle, label: 'Donate', path: '/login' },
    { icon: History, label: 'Activity', path: '#' },
    { icon: User, label: 'Profile', path: '#' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-6 pt-2 h-20 md:hidden bg-white/80 backdrop-blur-lg rounded-t-3xl border-t border-surface-container shadow-level-3">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link 
            key={item.label}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center transition-all duration-200 active:scale-90",
              isActive ? "text-primary px-4 py-1 bg-primary/5 rounded-2xl" : "text-on-surface-variant"
            )}
          >
            <item.icon className={cn("w-6 h-6 mb-1", isActive && "fill-primary/20")} />
            <span className="font-epilogue text-[10px] font-semibold">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export const FoodCard = ({ item }: { item: any }) => {
  return (
    <Link to={`/item/${item.id}`} className="group bg-surface-container-lowest rounded-2xl shadow-level-1 overflow-hidden border border-outline-variant/30 transition-all hover:shadow-level-2">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        {item.discount && (
          <div className="absolute top-3 left-3 bg-secondary text-white px-2 py-1 rounded-lg font-label-md shadow-sm">
            {item.discount}
          </div>
        )}
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm active:scale-90 transition-transform">
          <Heart className="w-4 h-4 text-on-surface-variant hover:text-red-500 transition-colors" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-h3 text-lg text-on-surface leading-tight transition-colors group-hover:text-primary">{item.title}</h3>
          <div className="text-right">
            <span className="block font-h3 text-lg text-primary leading-none">${item.price}</span>
            <span className="text-caption text-on-surface-variant line-through block mt-1">${item.originalPrice}</span>
          </div>
        </div>
        <p className="text-caption text-on-surface-variant flex items-center gap-1">
          <Store className="w-3 h-3" /> {item.store}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1 text-secondary">
            <Timer className="w-4 h-4" />
            <span className="font-label-md text-xs">{item.timeLeft}</span>
          </div>
          <button className="p-2 bg-primary text-white rounded-full shadow-level-1 hover:bg-primary-container transition-colors active:scale-95">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
};
