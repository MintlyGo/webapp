import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Bitcoin, Wallet, ArrowRightLeft, Lightbulb, BookOpen, TrendingUp } from 'lucide-react';

const articles = [
  {
    icon: Bitcoin,
    title: "What is Cryptocurrency?",
    description: "Learn the basics of digital currencies and blockchain technology"
  },
  {
    icon: Wallet,
    title: "Crypto Wallets Explained",
    description: "Understanding different types of wallets and how to keep your assets safe"
  },
  {
    icon: ArrowRightLeft,
    title: "Trading Basics",
    description: "Essential knowledge for trading cryptocurrencies"
  },
  {
    icon: Lightbulb,
    title: "Smart Contracts",
    description: "Exploring the technology behind decentralized applications"
  },
  {
    icon: BookOpen,
    title: "DeFi Fundamentals",
    description: "Understanding decentralized finance and its applications"
  },
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description: "Learn how to analyze crypto markets and trends"
  }
];

export default function Cryptopedia() {
  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Cryptopedia</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-600">
              Your comprehensive guide to understanding cryptocurrency and blockchain technology. Explore our educational resources to enhance your crypto knowledge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                    <h3 className="text-xl font-semibold">{article.title}</h3>
                  </div>
                  <p className="text-gray-600">{article.description}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 