import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Shield, Wallet, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
              The Future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100">
                Digital Finance
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mb-8">
              Experience seamless cryptocurrency transactions, smart investments, and secure digital asset management all in one place.
            </p>
            <Link to="/credit-card">
              <button className="group px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 text-primary-900 font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
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

            {/* Smart Investments */}
            <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-cyan-50 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Crypto Credit Card</h3>
              <p className="text-gray-600">
                Experience the future of crypto payments with MitlyGo credit card. 
              </p>
            </div>

            {/* Digital Wallet */}
            <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-primary-50 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wallet className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Crypto Wallet</h3>
              <p className="text-gray-600">
                A comprehensive digital wallet solution for managing all your cryptocurrency assets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
