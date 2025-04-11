import { useEffect, useState } from 'react';
import { Sparkles, Shield, Wallet, CreditCard, ExternalLink, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Toast from "@/components/ui/Toast";
import { submitWaitlistEmail } from "@/lib/api";

interface ToastState {
  message: string;
  type: 'success' | 'error';
}

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await submitWaitlistEmail(email);
      
      if (response.success) {
        setToast({
          type: 'success',
          message: 'Thank you for joining our waitlist! We\'ll keep you updated.',
        });
        setEmail('');
      } else {
        setToast({
          type: 'error',
          message: response.message,
        });
      }
    } catch (error) {
      setToast({
        type: 'error',
        message: 'Failed to join waitlist. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Custom X (Twitter) icon component
  const XIcon = () => (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6 text-white"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1567 12.8955L4 20.0264H5.38119L10.7775 13.7878L15.0678 20.0264H19.7297L13.3171 10.7749H13.3174ZM11.4789 12.9738L10.8506 12.0881L5.87244 5.07295H8.00119L12.0351 10.8611L12.6633 11.7467L17.8894 19.0378H15.7607L11.4789 12.9741V12.9738Z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Mouse Following Gradient */}
      <div 
        className="pointer-events-none fixed inset-0 z-10 transition-transform duration-300 ease-out"
        style={{
          background: `radial-gradient(circle 500px at ${mousePosition.x}% ${mousePosition.y}%, rgba(45, 212, 191, 0.15), transparent)`,
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-8 relative z-20">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 w-fit">
                <Sparkles className="h-5 w-5 text-[#00ffff]" />
                <span className="text-white/90">Welcome to MintlyGo</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Financial Future is<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100">
                Digital, Secure, and Simplified
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mb-8">
              Seamless cryptocurrency transactions, payments, and secure digital asset management all in one place.
            </p>
            <form onSubmit={handleWaitlistSubmit} className="flex w-full max-w-md gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="satoshi@mintlygo.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="whitespace-nowrap min-w-[140px] px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 text-primary-900 font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    'Join Waitlist'
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>

            {toast && (
              <Toast
                message={toast.message}
                type={toast.type}
                onClose={() => setToast(null)}
              />
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Secure Transactions */}
            <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-primary-50 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Transactions</h3>
              <p className="text-gray-600">
                State-of-the-art encryption and security measures to protect your digital assets and transactions.
              </p>
            </div>

            {/* Crypto Credit Card */}
            <Link to="/credit-card" className="block">
              <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 bg-cyan-50 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Crypto Credit Card</h3>
                <p className="text-gray-600">
                  Experience seamless and direct cryptocurrency payments with your MintlyGo credit card. 
                </p>
              </div>
            </Link>

            {/* Digital Wallet */}
            <Link to="/wallet" className="block">
              <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 bg-primary-50 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wallet className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Crypto Wallet</h3>
                <p className="text-gray-600">
                  A comprehensive digital wallet linked to your MintlyGo card for managing all your crypto assets and payments.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Connect Section */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Connect With Us</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Stay updated with the latest news and announcements through our social channels
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {/* X (Twitter) Card */}
              <a 
                href="https://x.com/mintlygo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <Card className="border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-14 w-14 bg-black rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <XIcon />
                      </div>
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black/5 transition-colors duration-300">
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Follow us on X</h3>
                    <p className="text-gray-600 mb-6">
                      Get real-time updates, announcements, and engage with our community
                    </p>
                    <div className="flex items-center text-sm">
                      <span className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors">@mintlygo</span>
                      <div className="ml-2 h-px w-12 bg-primary-600/30 group-hover:w-24 transition-all duration-300"></div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* Telegram Card */}
              <a 
                href="https://t.me/mintlygo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#229ED9]/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <Card className="border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#229ED9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-14 w-14 bg-[#229ED9] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <svg 
                          viewBox="0 0 24 24" 
                          className="w-7 h-7 text-white"
                          fill="currentColor"
                        >
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#229ED9]/5 transition-colors duration-300">
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-[#229ED9] transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#229ED9] to-blue-500">Join our Telegram</h3>
                    <p className="text-gray-600 mb-6">
                      Be part of our vibrant community and receive instant updates
                    </p>
                    <div className="flex items-center text-sm">
                      <span className="text-[#229ED9] font-medium group-hover:text-blue-600 transition-colors">t.me/mintlygo</span>
                      <div className="ml-2 h-px w-12 bg-[#229ED9]/30 group-hover:w-24 transition-all duration-300"></div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
