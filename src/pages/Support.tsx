import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { HelpCircle, MessageCircle, FileText, Phone, Mail, Book } from 'lucide-react';

const supportCategories = [
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Find answers to commonly asked questions about our services"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team for immediate assistance"
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Detailed guides and documentation for our platform"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call us for personalized help with your account"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email for non-urgent inquiries"
  },
  {
    icon: Book,
    title: "Knowledge Base",
    description: "Browse our extensive collection of help articles"
  }
];

export default function Support() {
  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Support Center</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-600">
              Need help? Our support team is here to assist you. Choose from the options below to get the help you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-primary-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Our support team is available 24/7 to help you.
            </p>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Contact Support
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 