import { Link } from "react-router-dom";
import { Github, Send } from "lucide-react";
import { XIcon } from "../icons/XIcon";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-gray-300 py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">MintlyGo</h2>
            <p className="text-gray-400">Simplify your finances, embrace the future.</p>
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://x.com/mintlygo?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <XIcon size={20} />
              </a>
              <a 
                href="https://t.me/MintlyGo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Send className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/MintlyGo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-500">© 2025 Mintly. All Rights Reserved.</p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/credit-card" 
                  className="hover:text-white transition-colors duration-200 block transform hover:translate-x-1"
                >
                  Credit Cards
                </Link>
              </li>
              <li>
                <Link 
                  to="/wallet" 
                  className="hover:text-white transition-colors duration-200 block transform hover:translate-x-1"
                >
                  Crypto Wallet
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/support" 
                  className="hover:text-white transition-colors duration-200 block transform hover:translate-x-1"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  to="/support" 
                  className="hover:text-white transition-colors duration-200 block transform hover:translate-x-1"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link 
                  to="/support" 
                  className="hover:text-white transition-colors duration-200 block transform hover:translate-x-1"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-white transition-colors duration-200 block transform hover:translate-x-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/security-hub" 
                  className="hover:text-white transition-colors duration-200 block transform hover:translate-x-1"
                >
                  Security Hub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </footer>
  );
} 