import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Lightbulb, GraduationCap, TrendingUp, Coins, ArrowRight, Zap, LineChart, ShieldCheck, Wallet, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function LearningHub() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Guide to the{' '}
              <span className="text-[#00ffff]">Crypto World</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12">
              Explore comprehensive guides, tutorials, and insights about cryptocurrency, blockchain technology, and digital finance.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Start Guides */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Quick Start Guides</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Guide 1 - Crypto Basics */}
              <div className="space-y-4">
                <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Lightbulb className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Crypto Basics</h3>
                    <p className="text-gray-600 mb-4">
                      Learn the fundamentals of cryptocurrency, blockchain technology, and digital wallets.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                        What is Cryptocurrency?
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                        Understanding Blockchain
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                        Digital Wallet Guide
                      </li>
                    </ul>
                    <button
                      onClick={() => toggleSection('crypto')}
                      className="mt-4 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Learn More
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${expandedSection === 'crypto' ? 'rotate-180' : ''}`} />
                    </button>
                  </CardContent>
                </Card>
                
                {/* Crypto Basics Explanation */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSection === 'crypto' ? 'h-[400px] opacity-100' : 'h-0 opacity-0'}`}>
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white h-full">
                    <CardContent className="p-6 h-full">
                      <div className="space-y-6 h-full overflow-y-auto fancy-scrollbar pr-2">
                        <div>
                          <h4 className="font-semibold text-blue-800 mb-2">What is Cryptocurrency?</h4>
                          <div className="bg-white rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow">
                            <p className="text-gray-600 mb-3">A cryptocurrency is a digital or virtual form of currency that uses cryptography for security. Unlike traditional currencies, it operates on decentralized networks based on blockchain technology.</p>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                                <p className="text-gray-600">Decentralized: Not controlled by any central authority like banks or governments</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                                <p className="text-gray-600">Digital: Exists purely in electronic form, secured by cryptography</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                                <p className="text-gray-600">Transparent: All transactions are recorded on a public ledger</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-800 mb-2">Understanding Blockchain</h4>
                          <div className="bg-white rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow">
                            <p className="text-gray-600 mb-3">Blockchain is a distributed ledger technology that records all cryptocurrency transactions in a secure, permanent way. Think of it as a digital chain of blocks, each containing transaction data.</p>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                                <p className="text-gray-600">Immutable: Once recorded, transactions cannot be altered or deleted</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                                <p className="text-gray-600">Consensus: Network participants validate and agree on all transactions</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                                <p className="text-gray-600">Distributed: Copies exist across thousands of computers worldwide</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-800 mb-2">Digital Wallet Guide</h4>
                          <div className="bg-white rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow">
                            <p className="text-gray-600 mb-3">A digital wallet is your gateway to the cryptocurrency world. It stores your private keys, which prove your ownership of digital assets and allow you to manage them.</p>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                                <p className="text-gray-600">Hot Wallets: Online wallets for frequent transactions (e.g., mobile apps)</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                                <p className="text-gray-600">Cold Storage: Offline wallets for maximum security (e.g., hardware wallets)</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                                <p className="text-gray-600">Key Management: Secure storage of private keys and recovery phrases</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Guide 2 - Payment Solutions */}
              <div className="space-y-4">
                <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Payment Solutions</h3>
                    <p className="text-gray-600 mb-4">
                      Learn how to make the most of MintlyGo's payment and card services.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-green-600" />
                        Card Services Guide
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-green-600" />
                        Crypto Payment Benefits
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-green-600" />
                        Rewards & Cashback
                      </li>
                    </ul>
                    <button
                      onClick={() => toggleSection('payment')}
                      className="mt-4 flex items-center text-green-600 hover:text-green-700 transition-colors"
                    >
                      Learn More
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${expandedSection === 'payment' ? 'rotate-180' : ''}`} />
                    </button>
                  </CardContent>
                </Card>

                {/* Payment Solutions Explanation */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSection === 'payment' ? 'h-[400px] opacity-100' : 'h-0 opacity-0'}`}>
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-white h-full">
                    <CardContent className="p-6 h-full">
                      <div className="space-y-6 h-full overflow-y-auto fancy-scrollbar pr-2">
                        <div>
                          <h4 className="font-semibold text-green-800 mb-2">Card Services Guide</h4>
                          <div className="bg-white rounded-lg p-4 border border-green-100 hover:shadow-md transition-shadow">
                            <p className="text-gray-600 mb-3">MintlyGo's crypto-backed card bridges the gap between digital assets and everyday spending. Our cards allow you to spend your crypto assets anywhere traditional cards are accepted.</p>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                                <p className="text-gray-600">Instant Conversion: Automatically converts crypto to fiat at the best rates</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                                <p className="text-gray-600">Global Acceptance: Use your card at millions of locations worldwide</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                                <p className="text-gray-600">Flexible Limits: Customize spending limits and security preferences</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-800 mb-2">Crypto Payment Benefits</h4>
                          <div className="bg-white rounded-lg p-4 border border-green-100 hover:shadow-md transition-shadow">
                            <p className="text-gray-600 mb-3">Cryptocurrency payments offer numerous advantages over traditional payment methods. Understand how MintlyGo's payment solutions can benefit you.</p>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                                <p className="text-gray-600">Lower Fees: Reduce transaction costs compared to traditional banking</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                                <p className="text-gray-600">Fast Settlement: Transactions complete in minutes, not days</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                                <p className="text-gray-600">Enhanced Privacy: Control what transaction information you share</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-800 mb-2">Rewards & Cashback</h4>
                          <div className="bg-white rounded-lg p-4 border border-green-100 hover:shadow-md transition-shadow">
                            <p className="text-gray-600 mb-3">MintlyGo's reward program lets you earn while you spend. Our tiered system offers increasing benefits based on your usage and holdings.</p>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                                <p className="text-gray-600">Cashback: Earn up to 5% back on all purchases in cryptocurrency</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                                <p className="text-gray-600">Staking Rewards: Additional benefits for holding MintlyGo tokens</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                                <p className="text-gray-600">Special Perks: Access to exclusive features and premium services</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Guide 3 - Security Best Practices */}
              <div className="space-y-4">
                <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <ShieldCheck className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Security Best Practices</h3>
                    <p className="text-gray-600 mb-4">
                      Master essential security practices to protect your digital assets and transactions.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-purple-600" />
                        Wallet Security
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-purple-600" />
                        Safe Trading Tips
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-purple-600" />
                        Scam Prevention
                      </li>
                    </ul>
                    <button
                      onClick={() => toggleSection('security')}
                      className="mt-4 flex items-center text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      Learn More
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${expandedSection === 'security' ? 'rotate-180' : ''}`} />
                    </button>
                  </CardContent>
                </Card>

                {/* Security Best Practices Explanation */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSection === 'security' ? 'h-[400px] opacity-100' : 'h-0 opacity-0'}`}>
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white h-full">
                    <CardContent className="p-6 h-full">
                      <div className="space-y-6 h-full overflow-y-auto fancy-scrollbar pr-2">
                        <div>
                          <h4 className="font-semibold text-purple-800 mb-2">Wallet Security</h4>
                          <div className="bg-white rounded-lg p-4 border border-purple-100 hover:shadow-md transition-shadow">
                            <p className="text-gray-600 mb-3">Your crypto wallet is your bank vault in the digital world. Understanding proper security measures is crucial for protecting your assets.</p>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                                <p className="text-gray-600">Private Keys: Never share your private keys or recovery phrases</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                                <p className="text-gray-600">2FA: Enable two-factor authentication for all accounts</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                                <p className="text-gray-600">Backup: Maintain secure offline copies of important information</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-800 mb-2">Safe Trading Tips</h4>
                          <div className="bg-white rounded-lg p-4 border border-purple-100 hover:shadow-md transition-shadow">
                            <p className="text-gray-600 mb-3">Safe trading practices help protect your investments and ensure secure transactions on the MintlyGo platform.</p>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                                <p className="text-gray-600">Verification: Always double-check addresses before sending</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                                <p className="text-gray-600">Small Tests: Send a small amount first for new recipients</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                                <p className="text-gray-600">Limits: Set daily transaction limits for added security</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-800 mb-2">Scam Prevention</h4>
                          <div className="bg-white rounded-lg p-4 border border-purple-100 hover:shadow-md transition-shadow">
                            <p className="text-gray-600 mb-3">Stay one step ahead of cryptocurrency scams by learning to identify and avoid common fraudulent schemes.</p>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                                <p className="text-gray-600">Phishing: Be wary of unsolicited emails and fake websites</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                                <p className="text-gray-600">Social Engineering: Never share sensitive information via social media</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                                <p className="text-gray-600">Investment Scams: If it sounds too good to be true, it probably is</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Paths */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Learning Paths</h2>
              <p className="text-xl text-gray-600">
                Choose your journey and master cryptocurrency at your own pace.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Beginner Path */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                    <h3 className="text-2xl font-semibold">Beginner Track</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <Coins className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Introduction to Crypto</h4>
                        <p className="text-gray-600">Basic concepts and terminology</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <Wallet className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Setting Up Your First Wallet</h4>
                        <p className="text-gray-600">Step-by-step wallet creation guide</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <Zap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Making Your First Transaction</h4>
                        <p className="text-gray-600">Learn to send and receive crypto</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Advanced Path */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <LineChart className="h-8 w-8 text-purple-600" />
                    <h3 className="text-2xl font-semibold">Advanced Track</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <TrendingUp className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Advanced Trading Strategies</h4>
                        <p className="text-gray-600">Technical analysis and market patterns</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">DeFi Deep Dive</h4>
                        <p className="text-gray-600">Explore decentralized finance protocols</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <ShieldCheck className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Advanced Security</h4>
                        <p className="text-gray-600">Hardware wallets and multi-sig setups</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Articles */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Article 1 */}
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-sm text-blue-600 font-medium">BASICS</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Understanding Web3 Technology</h3>
                  <p className="text-gray-600 mb-4">
                    Explore the next generation of internet technology and its impact on cryptocurrency.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>5 min read</span>
                    <span className="mx-2">•</span>
                    <span>Updated 2 days ago</span>
                  </div>
                </CardContent>
              </Card>

              {/* Article 2 */}
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-sm text-green-600 font-medium">TRADING</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Market Analysis Techniques</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to analyze cryptocurrency markets using technical and fundamental analysis.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>8 min read</span>
                    <span className="mx-2">•</span>
                    <span>Updated 1 week ago</span>
                  </div>
                </CardContent>
              </Card>

              {/* Article 3 */}
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-sm text-purple-600 font-medium">SECURITY</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Crypto Security Guide 2024</h3>
                  <p className="text-gray-600 mb-4">
                    Essential security practices for protecting your cryptocurrency investments.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>6 min read</span>
                    <span className="mx-2">•</span>
                    <span>Updated 3 days ago</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 