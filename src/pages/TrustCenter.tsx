import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Shield, Lock, FileCheck, Scale } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Security First",
    description: "Industry-leading security measures to protect your assets and data"
  },
  {
    icon: Lock,
    title: "Privacy Protection",
    description: "Advanced encryption and privacy controls to keep your information safe"
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description: "Full regulatory compliance and licensing across jurisdictions"
  },
  {
    icon: Scale,
    title: "Fair Trading",
    description: "Transparent pricing and fair trading practices"
  }
];

export default function TrustCenter() {
  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Trust Center</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-600">
              At MintlyGo, trust and security are our top priorities. We're committed to providing a safe and transparent platform for all our users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 