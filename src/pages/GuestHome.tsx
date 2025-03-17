import instantPayments from "../assets/instant-payments.png";
import secureWallet from "../assets/secure-wallet.png";
import realTime from "../assets/real-time-exchange-rates.png";
import rewards from "../assets/crypto-wallet.png";
import creditCardVisa from "../assets/final_credit_card_prev_ui.png";

const GuestHome = () => {
  return (
    <div className="guest-home w-full">
      <section className="hero p-4 md:px-10 h-screen">
        <div className="container mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="hero-content flex flex-col gap-6 px-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-primary-800">Revolutionize</span> Your
              Payments with Crypto!
            </h1>
            <p className="text-base md:text-lg lg:text-xl">
              Pay your bills with the cryptocurrency of your choice – directly
              from your wallet. No exchanges, no hassles, just seamless
              transactions.
            </p>
            <div className="hero-cta flex gap-4 items-center">
              <button className="px-6 py-3 text-sm lg:text-base rounded-2xl bg-primary-600 hover:bg-primary-800 text-white">
                Get Your Card Now
              </button>
              <a href="#" className="text-sm lg:text-base text-slate-600">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-img flex justify-center perspective:1000px">
            <img
              src={creditCardVisa}
              alt="credit-img"
              className="max-w-full rounded-lg rotate-[10deg]"
            />
          </div>
        </div>
      </section>

      <section className="benefits p-4 md:px-10">
        <div className="container mx-auto p-6 rounded-xl ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl  text-center font-bold mb-8 text-primary-800">
            What We Offer
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: instantPayments,
                title: "Instant Crypto Payments",
                desc: "Enable seamless transactions by paying directly with your preferred cryptocurrency.",
              },
              {
                img: secureWallet,
                title: "Secure Wallet Integration",
                desc: "Connect your crypto wallet effortlessly and make payments with complete security and transparency.",
              },
              {
                img: realTime,
                title: "Real-Time Exchange Rates",
                desc: "Get the competitive exchange rates for your crypto in real time. Every transaction is clear and upfront.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg text-center border border-gray-200"
              >
                <img
                  src={benefit.img}
                  alt={benefit.title}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-4 p-6"
                />
                <h2 className="bg-primary-800 text-white font-medium text-md mb-2 py-1">
                  {benefit.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base p-6 ">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rewards p-4 md:px-10">
        <div className="container mx-auto p-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-800">
              Instant Rewards, Direct to Your Account
            </h1>
            <p className="text-base md:text-lg text-gray-700">
              Earn crypto rewards automatically deposited into your wallet as
              soon as you make a purchase. Watch your rewards grow and benefit
              from potential price appreciation.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={rewards}
              alt="rewards"
              className="max-w-full rounded-lg h-[400px]"
            />
          </div>
        </div>
      </section>

      <section className="offer p-6 md:px-12 bg-[#e2f6e3]">
        <div className="container mx-auto flex flex-col md:flex-row gap-10 p-6">
          {/* First Section: $100 and New Mintly Customers */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8  p-8 rounded-lg">
            {/* $100 */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-extrabold text-primary-800 drop-shadow-md">
                $100
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                Exclusive offer for first-time customers!
              </p>
            </div>
            {/* New Mintly Customers */}
            <div className="flex-1">
              <h1 className="text-3xl font-semibold text-gray-800">
                New Mintly Customers
              </h1>
              <h4 className="mt-4 text-lg text-gray-600">
                Open a Mintly Credit account with qualifying activities.
              </h4>
              <button className="mt-6 px-5 py-3 bg-primary-600 hover:bg-primary-800 text-white rounded-full text-base shadow-md transition-all">
                Open Account
              </button>
            </div>
          </div>

          {/* Second Section: Next Steps */}
          <div className="next-steps flex flex-col  p-6">
            <h1 className="text-3xl font-semibold mb-4">Next Steps</h1>
            <ul className="list-decimal list-inside text-gray-700 text-lg space-y-2">
              <li>Open Credit Account</li>
              <li>Spend on your Bills</li>
              <li>Pay using your crypto</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-200 p-4 md:px-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 p-6">
          {/* Company Name and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl font-bold text-white">MintlyGo</h1>
            <p className="mt-2 text-sm text-gray-400">
              Simplify your finances, embrace the future.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-center md:text-left">
            {/* Product Links */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                Products
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-green-400">
                    Credit Cards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Crypto Wallet
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Investments
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">Support</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-green-400">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* About Links */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">Company</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-green-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>© 2025 Mintly. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GuestHome;
