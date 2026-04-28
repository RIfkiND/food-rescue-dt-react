import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface flex flex-col md:flex-row overflow-hidden font-sans">
      {/* Left Pane (Web Branding) */}
      <div className="hidden md:flex md:w-5/12 lg:w-1/2 relative bg-surface-container-highest overflow-hidden p-16 flex-col justify-between">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGruGv7qwBRnRxmCfv3sWlB7Y0qLtQnRbaQYU4AmEXyputaMyHB9mFOQ2DnftRWwwghIVUBZA0cvqhzsCHVU7J5t4-Nm6nnCS905AmJ4RrNJCYKICWiWB_g-pTLWKYCi5_xtbA2dMeyuvG2s8eyHQ1nE1X0JHCWB8wuMIlB02gBI3wbIg40YQZFitBTazOUBhWEPkHPYdiKQMZjuZ80ZlTlVlTbX8NMhh1wkmEX7XyW-E0OWEOtXDYOZqQ6omfYTHfDHt6mB9ZTSY" 
          alt="Branding" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 text-white">
            <Leaf className="w-10 h-10 fill-primary stroke-white" />
            <span className="text-3xl font-h2 font-extrabold tracking-tighter">RescueFood</span>
          </div>
        </div>

        <div className="relative z-10 max-w-md space-y-4">
          <h1 className="text-5xl font-h1 text-white leading-tight">Nourish your community.</h1>
          <p className="text-body-lg text-white/80">Join 10,000+ neighbors saving perfectly good food from going to waste, turning surplus into shared abundance.</p>
        </div>
      </div>

      {/* Right Pane (Interactive Form) */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative">
        {/* Mobile Header */}
        <div className="md:hidden absolute top-12 left-8 flex items-center gap-2 text-primary">
          <Leaf className="w-8 h-8 fill-primary" />
          <span className="text-2xl font-epilogue font-bold tracking-tight">RescueFood</span>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[420px] space-y-12"
        >
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-[32px] font-h2 text-on-surface">Welcome back</h2>
            <p className="text-body-md text-on-surface-variant">Enter your mobile number to securely sign in or create a new account.</p>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <label className="font-label-md text-on-surface-variant ml-1">Mobile Number</label>
              <div className="flex items-center h-14 bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-primary shadow-level-1 transition-all">
                <div className="flex items-center gap-2 px-4 h-full bg-surface-container-low border-r border-outline-variant cursor-pointer hover:bg-surface-container transition-colors">
                  <span className="text-lg">🇺🇸</span>
                  <span className="font-body-md font-semibold">+1</span>
                </div>
                <input 
                  type="tel" 
                  placeholder="(555) 000-0000" 
                  className="flex-1 px-4 h-full bg-transparent border-none focus:ring-0 outline-none font-body-lg"
                />
              </div>
            </div>

            <button 
              onClick={() => navigate('/explore')}
              className="w-full h-14 bg-primary text-white rounded-2xl font-label-md shadow-level-2 hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Get Verification Code
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-caption text-on-surface-variant text-center md:text-left">
            By continuing, you agree to our <br className="hidden sm:block md:hidden" />
            <Link to="#" className="text-primary hover:underline underline-offset-4">Terms of Service</Link> and <Link to="#" className="text-primary hover:underline underline-offset-4">Privacy Policy</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
