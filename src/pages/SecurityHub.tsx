import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, FileCheck, Building2, Scale, Users, Bell, CheckCircle2 } from "lucide-react";

export default function SecurityHub() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Trust is Our{' '}
              <span className="text-[#00ffff]">Foundation</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12">
              At MintlyGo, we've built our platform on the principles of security, transparency, and regulatory compliance. Explore how we protect your assets and maintain your trust.
            </p>
          </div>
        </div>
      </div>

      {/* Security Measures Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Enterprise-Grade Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Security Feature 1 */}
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Multi-Layer Security</h3>
                  <p className="text-gray-600 text-sm">
                    Advanced encryption and multi-factor authentication protect your assets
                  </p>
                </CardContent>
              </Card>

              {/* Security Feature 2 */}
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Cold Storage</h3>
                  <p className="text-gray-600 text-sm">
                    Majority of assets stored in secure offline vaults
                  </p>
                </CardContent>
              </Card>

              {/* Security Feature 3 */}
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Bell className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">24/7 Monitoring</h3>
                  <p className="text-gray-600 text-sm">
                    Real-time threat detection and prevention systems
                  </p>
                </CardContent>
              </Card>

              {/* Security Feature 4 */}
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Access Control</h3>
                  <p className="text-gray-600 text-sm">
                    Strict protocols and role-based access management
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Regulatory Compliance</h2>
              <p className="text-xl text-gray-600">
                MintlyGo maintains the highest standards of regulatory compliance and works closely with financial authorities.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Building2 className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Licensed Institution</h3>
                    <p className="text-gray-600">
                      We are actively working on obtaining all necessary regulatory approvals to serve bests
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Scale className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Legal Framework</h3>
                    <p className="text-gray-600">
                      Compliant with federal and state regulations for digital asset custody and transactions
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <FileCheck className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Regular Audits</h3>
                    <p className="text-gray-600">
                      Independent third-party audits and security assessments
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Industry Standards</h3>
                    <p className="text-gray-600">
                      Adherence to SOC 2 Type II and ISO 27001 security standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance & Protection */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Asset Protection</h2>
              <p className="text-xl text-gray-600">
                Your assets are protected by secure wallets and robust security measures.
              </p>
            </div>
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Security Measures</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center text-gray-600">
                        <Shield className="h-5 w-5 text-primary-600 mr-3" />
                        Advanced security infrastructure
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Shield className="h-5 w-5 text-primary-600 mr-3" />
                        Multi-signature authorization system
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Shield className="h-5 w-5 text-primary-600 mr-3" />
                        Continuous security monitoring 
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Additional Safeguards</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center text-gray-600">
                        <Lock className="h-5 w-5 text-primary-600 mr-3" />
                        Non-custodial accounts
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Lock className="h-5 w-5 text-primary-600 mr-3" />
                        Regular penetration testing
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Lock className="h-5 w-5 text-primary-600 mr-3" />
                        Disaster recovery planning
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Transparency Commitment */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Transparency</h2>
            <p className="text-xl text-gray-600 mb-12">
              We believe in complete transparency in our operations and security measures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-4">100%</div>
                <p className="text-gray-600">On-chain Transparency</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-4">24/7</div>
                <p className="text-gray-600">Security Monitoring</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-4">0</div>
                <p className="text-gray-600">Security Incidents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 