import { Card, CardContent } from "@/components/ui/card";
import { Newspaper, TrendingUp, Award, Globe, Megaphone, Calendar, ArrowRight, ExternalLink, BookOpen } from "lucide-react";

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
                  <h3 className="text-xl font-semibold mb-3">Upcoming MintlyGo wallet Features</h3>
                  <p className="text-gray-600 mb-4">
                    Preview of enhanced security features coming to MintlyGo wallet users.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Coming Q42025</span>
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
                  <h3 className="text-xl font-semibold mb-3">Upcoming MintlyGo Card Features</h3>
                  <p className="text-gray-600 mb-4">
                  review of premium features and rewards program coming to MintlyGo card users.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Coming Q4 2025</span>
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