import instantPayments from "../assets/instant-payments.png";
import secureWallet from "../assets/secure-wallet.png";
import realTime from "../assets/real-time-exchange-rates.png";
import rewards from "../assets/crypto-wallet.png";
import creditCardVisa from "../assets/final_credit_card_prev_ui.png";
import { Sparkles, Shield, Wallet, ArrowRight, CreditCard } from "lucide-react";
import { useState } from "react";
import WaitlistDialog from "@/components/custom/WaitlistDialog";

const GuestHome = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="guest-home w-full">
      <section className="hero relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 via-transparent to-primary-900/30"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 w-fit">
                <Sparkles className="h-5 w-5 text-[#00ffff]" />
                <span className="text-white/90">Welcome to MintlyGo</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100">
                Digital Finance
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
              Experience seamless cryptocurrency transactions, payments, and secure digital asset management all in one place.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md mx-auto">
              <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="w-full sm:w-auto px-6 py-3 text-base rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 text-primary-900 font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                Join Waitlist
              </button>
              <a href="#learn-more" className="text-base text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 mb-6">
              <Shield className="h-5 w-5 text-primary-600" />
              <span className="text-primary-800 font-medium">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Experience the Future of <span className="text-primary-600">Payments</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Unlock a world of possibilities with our innovative crypto-powered credit card solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: instantPayments,
                icon: <CreditCard className="h-6 w-6 text-primary-600" />,
                title: "Instant Payments",
                desc: "Enable seamless transactions by paying directly with your preferred cryptocurrency.",
              },
              {
                img: secureWallet,
                icon: <Shield className="h-6 w-6 text-primary-600" />,
                title: "Secure Wallet",
                desc: "Connect your crypto wallet effortlessly and make payments with complete security and transparency.",
              },
              {
                img: realTime,
                icon: <Wallet className="h-6 w-6 text-primary-600" />,
                title: "Exchange Rates",
                desc: "Get the competitive exchange rates for your crypto. Every transaction is clear and upfront.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100 relative overflow-hidden"
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50/50 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:translate-x-8 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-50/50 rounded-full blur-2xl transform -translate-x-16 translate-y-16 group-hover:-translate-x-8 transition-transform duration-500"></div>
                
                {/* Content */}
                <div className="relative">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-cyan-50 rounded-2xl transform -rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                    <div className="relative bg-white rounded-2xl p-4 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={benefit.img}
                        alt={benefit.title}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-50 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 whitespace-nowrap">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rewards py-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100">
                <Sparkles className="h-5 w-5 text-primary-600" />
                <span className="text-primary-800 font-medium">Crypto Rewards</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Instant Rewards,
                <br />
                <span className="text-primary-600">Direct to Your Account</span>
              </h2>
              <p className="text-xl text-gray-600">
                Earn crypto rewards automatically deposited into your wallet as
                soon as you make a purchase. Watch your rewards grow and benefit
                from potential price appreciation.
              </p>
              <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="group px-6 py-3 text-base rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300 flex items-center gap-2"
              >
                Get Waitlisted Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-cyan-500/20 blur-3xl rounded-full"></div>
              <img
                src={rewards}
                alt="rewards"
                className="relative rounded-2xl shadow-2xl max-w-full hover:transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="offer py-20 bg-gradient-to-br from-[#e2f6e3] to-white">
        <div className="container mx-auto px-8">
          <div className="bg-white rounded-2xl shadow-xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left space-y-6">
                <h3 className="text-6xl font-extrabold text-primary-600">
                  
                </h3>
                <p className="text-gray-600 text-lg">
                  Exclusive offer for first-time customers!
                </p>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    New MintlyGo Customers
                  </h2>
                  <p className="text-xl text-gray-600">
                    Open a Mintly Credit account with qualifying activities.
                  </p>
                </div>
                <button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="group px-8 py-4 text-base rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300 flex items-center gap-2 mx-auto md:mx-0"
                >
                  Get Waitlisted Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-cyan-500/10 blur-3xl rounded-full"></div>
                <img
                  src={creditCardVisa}
                  alt="credit-card-offer"
                  className="relative max-w-full rounded-2xl transform hover:scale-105 transition-transform duration-300 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <WaitlistDialog
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
};

export default GuestHome;
