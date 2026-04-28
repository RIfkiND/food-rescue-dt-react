import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, MapPin, Home, CheckCircle2, 
  CreditCard, Wallet, Banknote, ChevronRight,
  ChevronDown, ChevronUp, Tag, Plus, Truck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('wallet');
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(true);

  const subtotal = 4.50;
  const deliveryFee = 1.50;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-surface pb-28">
      {/* Transactional Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-outline-variant/30 h-16 flex items-center justify-between px-6 shadow-sm">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="font-display font-bold text-xl">Checkout</h1>
        <div className="w-10" />
      </header>

      <main className="max-w-xl mx-auto w-full pt-20 px-4 space-y-6">
        
        {/* Delivery Address Section */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] p-6 shadow-level-1 border border-outline-variant/20"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-label-lg text-on-surface">Delivery Address</h2>
            <button className="text-primary font-label-md hover:underline">Change</button>
          </div>
          
          <div className="flex gap-4 items-center p-2">
            <div className="w-20 h-20 rounded-2xl bg-surface-container overflow-hidden shrink-0 border border-outline-variant/30">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2666&auto=format&fit=crop" 
                alt="Map Preview" 
                className="w-full h-full object-cover saturate-50 opacity-80"
              />
            </div>
            <div className="flex-1">
              <p className="font-title-md text-on-surface flex items-center gap-2">
                <Home className="w-4 h-4 text-primary" /> Home
              </p>
              <p className="font-body-md text-on-surface-variant line-clamp-2 mt-1">
                123 Green Street, Eco Village, Apt 4B, Earth City
              </p>
            </div>
          </div>
        </motion.section>

        {/* Order Summary Section */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[2rem] p-6 shadow-level-1 border border-outline-variant/20"
        >
          <button 
            onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
            className="w-full flex justify-between items-center mb-4"
          >
            <h2 className="font-label-lg text-on-surface">Order Summary</h2>
            {isSummaryExpanded ? <ChevronUp className="w-5 h-5 text-outline" /> : <ChevronDown className="w-5 h-5 text-outline" />}
          </button>

          <AnimatePresence>
            {isSummaryExpanded && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden space-y-4"
              >
                <div className="flex items-center gap-4 py-2 border-b border-outline-variant/30">
                  <div className="w-16 h-16 rounded-xl bg-surface-container-low shrink-0 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2670&auto=format&fit=crop" 
                      alt="Pastries" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-title-md text-on-surface">Surprise Pastry Bag</p>
                      <p className="font-title-md">${subtotal.toFixed(2)}</p>
                    </div>
                    <p className="font-body-sm text-on-surface-variant">The Local Bakery • 1x</p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex justify-between items-center text-on-surface-variant">
                    <span className="font-body-md">Subtotal</span>
                    <span className="font-title-sm">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-on-surface-variant">
                    <span className="font-body-md">Delivery Fee</span>
                    <span className="font-title-sm">${deliveryFee.toFixed(2)}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* Promo Code */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2rem] p-6 shadow-level-1 border border-outline-variant/20"
        >
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
              <input 
                type="text" 
                placeholder="Enter promo code" 
                className="w-full bg-surface-container-low rounded-2xl pl-12 pr-4 py-4 border-none focus:ring-2 focus:ring-secondary text-on-surface font-body-md placeholder:text-outline"
              />
            </div>
            <button className="bg-secondary text-white font-title-sm px-8 rounded-2xl hover:opacity-90 active:scale-95 transition-all">
              Apply
            </button>
          </div>
        </motion.section>

        {/* Payment Methods */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[2rem] p-6 shadow-level-1 border border-outline-variant/20 space-y-6"
        >
          <h2 className="font-label-lg text-on-surface">Payment Method</h2>
          
          <div className="space-y-3">
            {[
              { id: 'wallet', title: 'EcoPay Wallet', icon: Wallet, desc: 'Balance: $12.50', active: true },
              { id: 'card', title: 'Credit / Debit Card', icon: CreditCard },
              { id: 'cash', title: 'Cash on Delivery', icon: Banknote },
            ].map((method) => (
              <label 
                key={method.id}
                onClick={() => setPaymentMethod(method.id)}
                className={cn(
                  "flex items-center justify-between p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all",
                  paymentMethod === method.id 
                    ? "border-primary bg-primary/5 shadow-sm" 
                    : "border-outline-variant/30 bg-surface hover:bg-surface-container-low"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                    paymentMethod === method.id ? "bg-primary text-white" : "bg-surface-container-high text-outline"
                  )}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-title-md text-on-surface block">{method.title}</span>
                    {method.desc && <span className="font-caption text-primary">{method.desc}</span>}
                  </div>
                </div>
                <div className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                  paymentMethod === method.id ? "border-primary" : "border-outline"
                )}>
                  {paymentMethod === method.id && <div className="w-3 h-3 rounded-full bg-primary" />}
                </div>
              </label>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Floating Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 p-4 pt-2">
        <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-level-4 border border-outline-variant/30 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-on-surface-variant">Total Payment</span>
            <span className="font-display font-bold text-3xl text-primary">${total.toFixed(2)}</span>
          </div>
          <button 
            className="bg-primary text-on-primary font-title-lg px-12 py-5 rounded-[2rem] shadow-level-2 hover:bg-primary-dim transition-all active:scale-95 flex items-center gap-2 group"
          >
            Place Order
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
