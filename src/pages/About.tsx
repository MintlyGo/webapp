import { Card, CardContent } from "../components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-primary-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-0.5xl md:text-1xl lg:text-1.5xl font-normal text-white leading-tight">
          We are committed to unlocking a new era of{' '}
            <span className="text-[#00ffff]">financial empowerment</span>,{' '}
            <span className="text-[#00ffff]">creative expression</span> and{' '}
            <span className="text-[#00ffff]">personal growth</span>.
          </h1>
          
          <div className="mt-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our goal is to help you to take control of{' '}
              <span className="text-[#00ffff]">
                your journey
              </span>.
            </h2>
          </div>
        </div>
      </div>

      {/* Mission Description */}
      <div className="w-full bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-[90%] mx-auto text-center">
            We deliver innovative crypto solutions that prioritize security, cost efficiency, and ease of use. MintlyGo empowers you with seamless, intuitive tools to make purchases and pay bills effortlessly—using the cryptocurrency of your choice, directly from your wallet.
          </p>
        </div>
      </div>

      {/* Title and Features Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-center mb-6">The Three pillars of MintlyGo</h2>
            <p className="text-lg text-center text-gray-700">
              At MintlyGo, trust is at the core of everything we do. We are dedicated to building and maintaining your confidence by investing in our four key pillars, ensuring long-term security, reliability, and innovation.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-white">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-teal-900">Security</h3>
                <p className="text-teal-700">
                  Enjoy true ownership of your assets with a non-custodial wallet. We prioritize your security with industry-leading protections to keep your funds safe.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-white">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-teal-900">Cost Efficiency</h3>
                <p className="text-teal-700">
                  Save more with low conversion fees and high cashback rewards. Our intuitive platform ensures that crypto payments remain cost-effective and seamless.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-white">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-teal-900">Ease of Use</h3>
                <p className="text-teal-700">
                  Experience fast and efficient transactions with a user-friendly interface and time-saving features—making crypto management effortless.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto my-20">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>

          {/* Two Column Text Section */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-gray-800">
                  Crypto has the capacity to force a redesign of the Internet, our financial system, and money in a way that fosters and protects the rights and dignity of the individual. If we are successful, we could make as great of a contribution to personal freedom as the invention of the printing press, the personal computer, and the early, open Internet.
                </p>
                <p className="text-gray-800">
                  Crypto is not just a technology, it's a movement. But it won't happen unless we build simple, elegant, and secure ways for individuals and institutions around the world to discover and interact with this new frontier.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-gray-800">
                  We founded Mintly with a "security-first" mentality and ethos of <em>asking for permission, not forgiveness</em>. We have worked hard to provide you with a high-integrity choice and we look forward to earning and maintaining your trust.
                </p>
                <p className="text-gray-800">
                  Mintly is subject to a number of capital reserve requirements, cybersecurity requirements, and banking compliance standards, and is registered with the United States Financial Crimes Enforcement Network (FinCEN). Mintly Trust Company, LLC is a New York trust company regulated by the New York State Department of Financial Services (NYSDFS), and is a fiduciary and Qualified Custodian. Mintly Moonbase, LLC is headquartered in Florida and holds a number of state money transmitter licensenses. Please visit the Trust Center to view Mintly's U.S. and global licenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 