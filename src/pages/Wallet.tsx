import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, ArrowRight, Coins, Sparkles } from "lucide-react";

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-24">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 via-transparent to-primary-900/30"></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Sparkles className="h-5 w-5 text-[#00ffff]" />
                <span className="text-white/90">
                  Next-Generation Crypto Wallet
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Crypto, Your Control with{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 text-transparent bg-clip-text">
                MintlyGo Wallet
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              A secure, non-custodial wallet that puts you in control of your
              crypto assets while making spending as simple as using a
              traditional card.
            </p>
            <Button className="bg-[#00ffff] text-primary-900 hover:bg-[#00ffff]/90 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Coming Soon
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-teal-50 to-white backdrop-blur-sm">
                <CardContent className="p-8 space-y-4">
                  <div className="h-12 w-12 bg-teal-100 rounded-xl flex items-center justify-center transform rotate-3">
                    <Shield className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Non-Custodial Security
                  </h3>
                  <p className="text-gray-600">
                    Maintain complete control of your private keys and assets.
                    Your crypto stays in your hands, always.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-cyan-50 to-white backdrop-blur-sm">
                <CardContent className="p-8 space-y-4">
                  <div className="h-12 w-12 bg-cyan-100 rounded-xl flex items-center justify-center transform -rotate-3">
                    <Zap className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Instant Transactions
                  </h3>
                  <p className="text-gray-600">
                    Seamlessly spend your crypto at millions of locations
                    worldwide with instant conversion and zero delays.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-white backdrop-blur-sm">
                <CardContent className="p-8 space-y-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center transform rotate-3">
                    <Coins className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Multi-Asset Support
                  </h3>
                  <p className="text-gray-600">
                    Store and manage multiple cryptocurrencies in one
                    location with full integration into MintlyGo services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Wallet UI Showcase */}
      <div className="bg-gray-50 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Experience the Future of Crypto Management
            </h2>
            <div className="relative">
              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Wallet UI Image 1 */}
                <div className="relative group">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <img
                      src="/images/wallet-dashboard.png"
                      alt="MintlyGo Wallet Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-6">
                    <p className="text-white text-lg font-medium">
                      Dashboard Overview
                    </p>
                  </div>
                </div>

                {/* Wallet UI Image 2 */}
                <div className="relative group md:mt-12">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <img
                      src="/images/wallet-assets.png"
                      alt="MintlyGo Asset Management"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-6">
                    <p className="text-white text-lg font-medium">
                      Asset Management
                    </p>
                  </div>
                </div>

                {/* Wallet UI Image 3 */}
                <div className="relative group">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <img
                      src="/images/wallet-transactions.png"
                      alt="MintlyGo Transaction History"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-6">
                    <p className="text-white text-lg font-medium">
                      Recieve/Send Crypto
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-teal-50 via-transparent to-teal-50 opacity-50"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Seamlessly Integrated with MintlyGo
              </h2>
              <p className="text-xl text-gray-600">
                Your wallet is the foundation of your crypto journey, perfectly
                integrated with all MintlyGo services.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Direct Card Payments
                </h3>
                <p className="text-gray-600">
                  Connect your wallet directly to your MintlyGo card for
                  seamless crypto-to-fiat payments anywhere cards are accepted.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span>Instant conversion at point of sale</span>
                  </li>
                  <li className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span>No pre-loading or manual conversions needed</span>
                  </li>
                  <li className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span>Real-time transaction monitoring</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Complete Control
                </h3>
                <p className="text-gray-600">
                  Manage your crypto assets with confidence, knowing you have
                  full control over your funds while enjoying the convenience of
                  traditional payment methods.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span>Set spending limits and controls</span>
                  </li>
                  <li className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span>Choose which assets to use for payments</span>
                  </li>
                  <li className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span>Backup and recovery options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
