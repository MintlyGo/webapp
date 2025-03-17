import { Card, CardContent } from "@/components/ui/card";
import { Newspaper, TrendingUp, Award, Globe, Megaphone, Calendar, ArrowRight, ExternalLink, BookOpen } from "lucide-react";

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

export default function Newsroom() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              MintlyGo{' '}
              <span className="text-[#00ffff]">News & Media Hub</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12">
              Your central destination for MintlyGo updates, press resources, and company developments.
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Connect Section */}
      <div className="py-16 bg-gradient-to-b from-primary-800/5 to-transparent">
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

      {/* Featured News */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Featured Story</h2>
            <Card className="border-0 shadow-xl bg-white overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-primary-800 to-primary-900 p-8 flex items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#00ffff]/10 text-[#00ffff] text-sm font-medium">
                      <Award className="h-4 w-4 mr-2" />
                      Vision 2025
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">MintlyGo's Journey Towards 1 Million Users</h3>
                    <p className="text-gray-300">
                      Discover our roadmap and strategic initiatives as we work towards making cryptocurrency accessible to everyone. Join us on this exciting journey.
                    </p>
                    <button className="inline-flex items-center text-[#00ffff] hover:text-[#00ffff]/80 transition-colors">
                      Read Our Vision
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="p-8 flex items-center">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900">1M</h4>
                        <p className="text-sm text-gray-600">Target Users</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900">150+</h4>
                        <p className="text-sm text-gray-600">Planned Countries</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900">$5B</h4>
                        <p className="text-sm text-gray-600">Volume Goal</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900">24/7</h4>
                        <p className="text-sm text-gray-600">Support Vision</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      Vision Statement - March 2024
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Latest Updates */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Latest Updates</h2>
              <button className="text-primary-600 hover:text-primary-700 flex items-center">
                View All News
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Update 1 */}
              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-green-600">Development Update</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Upcoming MintlyGo Card Features</h3>
                  <p className="text-gray-600 mb-4">
                    Preview of enhanced security features and rewards program coming to MintlyGo card users.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Coming Q2 2024</span>
                    <button className="text-primary-600 hover:text-primary-700">Read More</button>
                  </div>
                </CardContent>
              </Card>

              {/* Update 2 */}
              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-600">Expansion Plans</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Southeast Asia Expansion Strategy</h3>
                  <p className="text-gray-600 mb-4">
                    Exploring partnerships and preparing for launch in key Southeast Asian markets.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Planned for Q3 2024</span>
                    <button className="text-primary-600 hover:text-primary-700">Read More</button>
                  </div>
                </CardContent>
              </Card>

              {/* Update 3 */}
              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-sm font-medium text-purple-600">Innovation</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Building the Future of Payments</h3>
                  <p className="text-gray-600 mb-4">
                    Our commitment to developing innovative crypto payment solutions for global adoption.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Ongoing Initiative</span>
                    <button className="text-primary-600 hover:text-primary-700">Read More</button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Press Resources */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Press Resources</h2>
              <p className="text-xl text-gray-600">
                Access everything you need to cover MintlyGo stories.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Resource 1 */}
              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Newspaper className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Press Releases</h3>
                  <p className="text-gray-600 mb-4">
                    Official announcements and company news.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 flex items-center">
                    View All
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </CardContent>
              </Card>

              {/* Resource 2 */}
              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Media Kit</h3>
                  <p className="text-gray-600 mb-4">
                    Logos, brand guidelines, and visual assets.
                  </p>
                  <button className="text-green-600 hover:text-green-700 flex items-center">
                    Download
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </CardContent>
              </Card>

              {/* Resource 3 */}
              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Megaphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Media Inquiries</h3>
                  <p className="text-gray-600 mb-4">
                    Get in touch with our media relations team.
                  </p>
                  <button className="text-purple-600 hover:text-purple-700 flex items-center">
                    Contact Us
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </CardContent>
              </Card>

              {/* Resource 4 */}
              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Company Facts</h3>
                  <p className="text-gray-600 mb-4">
                    Key statistics and company information.
                  </p>
                  <button className="text-orange-600 hover:text-orange-700 flex items-center">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-20 bg-gradient-to-br from-primary-800 to-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest news and updates from MintlyGo.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
              />
              <button className="px-6 py-3 bg-[#00ffff] text-primary-900 font-medium rounded-lg hover:bg-[#00ffff]/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 