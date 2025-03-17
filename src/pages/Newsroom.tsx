import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Calendar } from 'lucide-react';

const newsItems = [
  {
    date: "March 8, 2024",
    title: "MintlyGo Launches Revolutionary Crypto Payment Solution",
    description: "New platform enables seamless cryptocurrency payments for everyday transactions.",
    tag: "Press Release"
  },
  {
    date: "March 5, 2024",
    title: "Expanding Global Reach: MintlyGo Partners with Major Retailers",
    description: "Strategic partnerships to increase cryptocurrency adoption in retail.",
    tag: "Partnership"
  },
  {
    date: "March 1, 2024",
    title: "MintlyGo Featured in Crypto Innovation Report",
    description: "Leading industry publication highlights MintlyGo's innovative approach to crypto payments.",
    tag: "Media Coverage"
  },
  {
    date: "February 28, 2024",
    title: "Security First: MintlyGo Completes Advanced Security Audit",
    description: "Independent security audit confirms platform's robust security measures.",
    tag: "Company Update"
  }
];

export default function Newsroom() {
  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Newsroom</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-600">
              Stay up to date with the latest news, announcements, and media coverage about MintlyGo.
            </p>
          </div>
          
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <button className="mt-4 text-primary-600 font-medium hover:text-primary-700">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 