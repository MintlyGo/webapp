import { Card, CardContent } from "@/components/ui/card";
import { Search, MessageCircle, Phone, Mail, Clock, ArrowRight, ChevronDown, FileText, Shield, CreditCard, Wallet } from "lucide-react";
import { useState } from "react";

export default function Support() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const faqs = [
    {
      id: "card",
      category: "Card Services",
      icon: <CreditCard className="h-5 w-5 text-primary-600" />,
      questions: [
        {
          id: "card-1",
          q: "How do I activate my MintlyGo card?",
          a: "Once you receive your card, log into your MintlyGo account, navigate to Card Services, and follow the activation steps. You'll need your card number and the security code."
        },
        {
          id: "card-2",
          q: "What are the card spending limits?",
          a: "Default limits are set based on your account tier. You can view and adjust your limits in the Card Settings section of your dashboard, subject to verification requirements."
        }
      ]
    },
    {
      id: "wallet",
      category: "Wallet & Transactions",
      icon: <Wallet className="h-5 w-5 text-primary-600" />,
      questions: [
        {
          id: "wallet-1",
          q: "How do I add funds to my wallet?",
          a: "You can add funds through bank transfer, card payment, or by depositing cryptocurrency. Go to your Wallet section and click 'Add Funds' to see all available options."
        },
        {
          id: "wallet-2",
          q: "What cryptocurrencies are supported?",
          a: "We currently support major cryptocurrencies including Bitcoin, Ethereum, and selected stablecoins. Check the Wallet section for the complete list of supported assets."
        }
      ]
    },
    {
      id: "security",
      category: "Security",
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      questions: [
        {
          id: "security-1",
          q: "How do I enable 2FA?",
          a: "Go to Security Settings in your account, select '2FA Setup', and follow the instructions to set up authentication using your preferred method (SMS or authenticator app)."
        },
        {
          id: "security-2",
          q: "What should I do if I suspect unauthorized activity?",
          a: "Immediately lock your card in the app, change your password, and contact our 24/7 support team. We'll help secure your account and investigate any suspicious activity."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How can we{' '}
              <span className="text-[#00ffff]">help you?</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12">
              Get the support you need, when you need it. We're here to help 24/7.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent pr-12"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Help Categories */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Category 1 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
                  <p className="text-gray-600 mb-4">
                    Connect instantly with our support team for real-time assistance.
                  </p>
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700">
                    Start Chat
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </CardContent>
              </Card>

              {/* Category 2 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Call Us</h3>
                  <p className="text-gray-600 mb-4">
                    Speak directly with our support team available 24/7.
                  </p>
                  <button className="inline-flex items-center text-green-600 hover:text-green-700">
                    View Numbers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </CardContent>
              </Card>

              {/* Category 3 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Email Support</h3>
                  <p className="text-gray-600 mb-4">
                    Send us a detailed message and we'll respond within 24 hours.
                  </p>
                  <a 
                    href="mailto:supprot@mintlygo.com"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700"
                  >
                    Send Email
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Find quick answers to common questions about MintlyGo services.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {faqs.map((category) => (
                <div key={category.id} className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                  </div>
                  {category.questions.map((faq) => (
                    <Card key={faq.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <button
                          className="w-full flex justify-between items-center"
                          onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                        >
                          <span className="font-medium text-gray-900">{faq.q}</span>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 transition-transform ${
                              expandedFaq === faq.id ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`mt-4 text-gray-600 transition-all duration-300 ${
                            expandedFaq === faq.id ? "block" : "hidden"
                          }`}
                        >
                          {faq.a}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Submit Ticket Section */}
      <div className="py-20 bg-gradient-to-br from-primary-800 to-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need More Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Submit a support ticket and our team will get back to you as soon as possible.
            </p>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="Brief description of your issue"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your issue in detail"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Support Hours Banner */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <Clock className="h-5 w-5" />
              <span>Our support team is available 24/7 to assist you with any questions or concerns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 