import { Card, CardContent } from "../components/ui/card";
import { Shield, DollarSign, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-primary-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ffff]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/50 via-transparent to-primary-900/50"></div>
        
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Sparkles className="h-5 w-5 text-[#00ffff]" />
                <span className="text-white/90">Empowering Financial Freedom</span>
              </div>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white leading-tight text-center">
              Unlocking a new era of{' '}
              <span className="text-[#00ffff] font-medium">financial empowerment</span>,{' '}
              <span className="text-[#00ffff] font-medium">creative expression</span> and{' '}
              <span className="text-[#00ffff] font-medium">personal growth</span>.
            </h1>
            
            <div className="mt-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
                Our goal is to help you to take control of{' '}
                <span className="bg-gradient-to-r from-[#00ffff] to-cyan-300 text-transparent bg-clip-text">
                  your journey
                </span>.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Description */}
      <div className="relative w-full bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-[90%] mx-auto text-center font-medium">
            We deliver innovative crypto solutions that prioritize security, cost efficiency, and ease of use. MintlyGo empowers you with seamless, intuitive tools to make purchases and pay bills effortlessly—using the cryptocurrency of your choice, directly from your wallet.
          </p>
        </div>
      </div>

      {/* Title and Features Section */}
      <div className="bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-primary-900 to-primary-700 text-transparent bg-clip-text">
              The Three Pillars of MintlyGo
            </h2>
            <p className="text-lg text-center text-gray-700">
              At MintlyGo, trust is at the core of everything we do. We are dedicated to building and maintaining your confidence by investing in our four key pillars, ensuring long-term security, reliability, and innovation.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-teal-50 to-white backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 bg-teal-100 rounded-xl flex items-center justify-center transform rotate-3">
                  <Shield className="h-7 w-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-teal-900">Security</h3>
                <ul className="text-teal-700 space-y-3 list-disc pl-4">
                  <li>Enjoy true ownership of your assets with a non-custodial wallet</li>
                  <li>We prioritize your security with industry-leading protections</li>
                  <li>Keep your funds safe with advanced security measures</li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-cyan-50 to-white backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 bg-cyan-100 rounded-xl flex items-center justify-center transform -rotate-3">
                  <DollarSign className="h-7 w-7 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-900">Cost Efficiency</h3>
                <ul className="text-cyan-700 space-y-3 list-disc pl-4">
                  <li>Save more with low conversion fees</li>
                  <li>Earn high cashback rewards</li>
                  <li>Our intuitive platform ensures crypto payments remain cost-effective</li>
                  <li>Experience seamless transactions</li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-white backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center transform rotate-3">
                  <Sparkles className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900">Ease of Use</h3>
                <ul className="text-blue-700 space-y-3 list-disc pl-4">
                  <li>Experience fast and efficient transactions</li>
                  <li>User-friendly interface</li>
                  <li>Time-saving features</li>
                  <li>Making crypto management effortless</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 