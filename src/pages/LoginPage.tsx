import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck, ChevronLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const LoginPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleSendCode = () => {
    if (phoneNumber.length > 5) {
      setStep('otp');
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple chars
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    if (otp.join('').length === 6) {
      setIsVerifying(true);
      // Simulate verification delay
      setTimeout(() => {
        setIsVerifying(false);
        navigate('/become-mitra');
      }, 1500);
    }
  };

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
          <h1 className="text-5xl font-h1 text-white leading-tight">Nutrisi untuk komunitas.</h1>
          <p className="text-body-lg text-white/80">Bergabunglah dengan 10.000+ tetangga yang menyelamatkan makanan layak konsumsi dari limbah, mengubah surplus menjadi kelimpahan bersama.</p>
        </div>
      </div>

      {/* Right Pane (Interactive Form) */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative bg-surface">
        {/* Mobile Header */}
        <div className="md:hidden absolute top-8 left-6 flex items-center gap-2 text-primary">
          <Leaf className="w-8 h-8 fill-primary" />
          <span className="text-2xl font-epilogue font-bold tracking-tight">RescueFood</span>
        </div>

        <div className="w-full max-w-[420px] relative mt-16 md:mt-0">
          <AnimatePresence mode="wait">
            {step === 'phone' ? (
              <motion.div 
                key="phone-step"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <div className="space-y-2 text-center md:text-left">
                  <h2 className="text-[32px] font-h2 text-on-surface">Selamat datang</h2>
                  <p className="text-body-md text-on-surface-variant">Masukkan nomor ponsel Anda untuk masuk dengan aman atau membuat akun baru.</p>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="font-label-md text-on-surface-variant ml-1">Nomor Ponsel</label>
                    <div className="flex items-center h-14 bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-primary shadow-sm transition-all">
                      <div className="flex items-center gap-2 px-4 h-full bg-surface-container-low border-r border-outline-variant cursor-pointer hover:bg-surface-container transition-colors">
                        <span className="text-lg">🇮🇩</span>
                        <span className="font-body-md font-semibold">+62</span>
                      </div>
                      <input 
                        type="tel" 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="812 3456 7890" 
                        className="flex-1 px-4 h-full bg-transparent border-none focus:ring-0 outline-none font-body-lg"
                      />
                    </div>
                  </div>

                  <button 
                    onClick={handleSendCode}
                    disabled={phoneNumber.length < 5}
                    className="w-full h-14 bg-primary text-white rounded-2xl font-label-md shadow-md hover:bg-primary-container disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    Dapatkan Kode Verifikasi
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-caption text-on-surface-variant text-center md:text-left">
                  Dengan melanjutkan, Anda menyetujui <br className="hidden sm:block md:hidden" />
                  <Link to="#" className="text-primary hover:underline underline-offset-4">Syarat Layanan</Link> dan <Link to="#" className="text-primary hover:underline underline-offset-4">Kebijakan Privasi</Link> kami.
                </p>
              </motion.div>
            ) : (
              <motion.div 
                key="otp-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-10"
              >
                <div className="space-y-4 text-center md:text-left relative">
                  <button 
                    onClick={() => setStep('phone')}
                    className="absolute -top-12 left-0 w-10 h-10 bg-surface-container-low rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-[32px] font-h2 text-on-surface leading-tight">Cek pesan Anda</h2>
                  <p className="text-body-md text-on-surface-variant">Kami telah mengirimkan kode verifikasi 6 digit ke <span className="font-bold text-on-surface">+62 {phoneNumber}</span>.</p>
                </div>

                <div className="space-y-8">
                  <div className="flex justify-between gap-2 sm:gap-3">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-12 h-14 sm:w-14 sm:h-16 bg-surface-container-lowest border border-outline-variant rounded-xl text-center text-2xl font-bold focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    ))}
                  </div>

                  <button 
                    onClick={handleVerify}
                    disabled={otp.join('').length < 6 || isVerifying}
                    className="w-full h-14 bg-primary text-white rounded-2xl font-label-md shadow-md hover:bg-primary-container disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    {isVerifying ? (
                      <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      "Verifikasi & Masuk"
                    )}
                  </button>
                </div>

                <p className="text-body-sm text-center md:text-left text-on-surface-variant">
                  Tidak menerima kode? <button className="text-primary font-bold hover:underline">Kirim Ulang</button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
