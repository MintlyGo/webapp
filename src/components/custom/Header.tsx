import { Link, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Globe, Users, Newspaper, HelpCircle, BookOpen, Building2, ChevronDown, ArrowRight, Menu, X, CreditCard, Wallet } from 'lucide-react';
import WaitlistDialog from "./WaitlistDialog";

type HeaderProps = {
  openDialog: () => void;
};

const Header: React.FC<HeaderProps> = ({ openDialog }) => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsResourcesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const ResourcesDropdown = () => {
    const navigate = useNavigate();

    const handleLinkClick = (path: string) => {
      setIsResourcesOpen(false);
      navigate(path);
    };

    return (
      <div 
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="cursor-pointer h-full flex items-center gap-1 group">
          Resources
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
        </div>
        <div 
          className={`fixed left-0 right-0 transform transition-all duration-500 bg-gradient-to-b from-white to-gray-50 shadow-2xl backdrop-blur-sm border-t border-primary-100/20 ${
            isResourcesOpen 
              ? "opacity-100 translate-y-0 visible" 
              : "opacity-0 -translate-y-4 invisible"
          }`}
          style={{ top: '64px' }}
        >
          <div className="container mx-auto">
            <div className="py-8 px-6">
              <div className="mb-8 relative">
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
                <h3 className="text-xl font-semibold text-primary-800 mb-3 relative">Resources</h3>
                <p className="text-sm text-gray-600 relative max-w-2xl">
                  Explore our comprehensive resources and learn more about MintlyGo's innovative solutions in crypto payments and digital finance.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* First Column */}
                <div className="space-y-4">
                  <div
                    onClick={() => handleLinkClick('/about')}
                    className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative cursor-pointer"
                  >
                    <div className="mt-1 shrink-0 p-2 rounded-lg bg-primary-50 group-hover/item:bg-primary-100 transition-colors duration-300">
                      <Building2 className="w-6 h-6 text-primary-600 group-hover/item:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover/item:text-primary-600 transition-colors duration-300">About Us</h4>
                      <p className="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors duration-300">Learn about our mission and vision for the future of crypto</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary-600 opacity-0 group-hover/item:opacity-100 transition-all duration-300 absolute right-4 top-1/2 -translate-y-1/2 transform group-hover/item:translate-x-1" />
                  </div>

                  <div
                    onClick={() => handleLinkClick('/team')}
                    className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative cursor-pointer"
                  >
                    <div className="mt-1 shrink-0 p-2 rounded-lg bg-primary-50 group-hover/item:bg-primary-100 transition-colors duration-300">
                      <Users className="w-6 h-6 text-primary-600 group-hover/item:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover/item:text-primary-600 transition-colors duration-300">Our Team</h4>
                      <p className="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors duration-300">Meet the experts behind MintlyGo's success</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary-600 opacity-0 group-hover/item:opacity-100 transition-all duration-300 absolute right-4 top-1/2 -translate-y-1/2 transform group-hover/item:translate-x-1" />
                  </div>
                </div>

                {/* Second Column */}
                <div className="space-y-4">
                  <div
                    onClick={() => handleLinkClick('/security-hub')}
                    className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative cursor-pointer"
                  >
                    <div className="mt-1 shrink-0 p-2 rounded-lg bg-primary-50 group-hover/item:bg-primary-100 transition-colors duration-300">
                      <Globe className="w-6 h-6 text-primary-600 group-hover/item:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover/item:text-primary-600 transition-colors duration-300">Security Hub</h4>
                      <p className="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors duration-300">Building trust through transparency</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary-600 opacity-0 group-hover/item:opacity-100 transition-all duration-300 absolute right-4 top-1/2 -translate-y-1/2 transform group-hover/item:translate-x-1" />
                  </div>

                  <div
                    onClick={() => handleLinkClick('/news')}
                    className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative cursor-pointer"
                  >
                    <div className="mt-1 shrink-0 p-2 rounded-lg bg-primary-50 group-hover/item:bg-primary-100 transition-colors duration-300">
                      <Newspaper className="w-6 h-6 text-primary-600 group-hover/item:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover/item:text-primary-600 transition-colors duration-300">News & Media Hub</h4>
                      <p className="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors duration-300">Latest updates, press resources, and company news</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary-600 opacity-0 group-hover/item:opacity-100 transition-all duration-300 absolute right-4 top-1/2 -translate-y-1/2 transform group-hover/item:translate-x-1" />
                  </div>
                </div>

                {/* Third Column */}
                <div className="space-y-4">
                  <div
                    onClick={() => handleLinkClick('/learn')}
                    className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative cursor-pointer"
                  >
                    <div className="mt-1 shrink-0 p-2 rounded-lg bg-primary-50 group-hover/item:bg-primary-100 transition-colors duration-300">
                      <BookOpen className="w-6 h-6 text-primary-600 group-hover/item:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover/item:text-primary-600 transition-colors duration-300">Learning Hub</h4>
                      <p className="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors duration-300">Your trusted source for all things crypto</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary-600 opacity-0 group-hover/item:opacity-100 transition-all duration-300 absolute right-4 top-1/2 -translate-y-1/2 transform group-hover/item:translate-x-1" />
                  </div>

                  <div
                    onClick={() => handleLinkClick('/support')}
                    className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative cursor-pointer"
                  >
                    <div className="mt-1 shrink-0 p-2 rounded-lg bg-primary-50 group-hover/item:bg-primary-100 transition-colors duration-300">
                      <HelpCircle className="w-6 h-6 text-primary-600 group-hover/item:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover/item:text-primary-600 transition-colors duration-300">Support</h4>
                      <p className="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors duration-300">Get help and find answers to your questions</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary-600 opacity-0 group-hover/item:opacity-100 transition-all duration-300 absolute right-4 top-1/2 -translate-y-1/2 transform group-hover/item:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className="bg-primary-800 py-4 px-4 relative z-50 border-b border-primary-700/50">
      {!isAuthenticated && (
        <div className="container mx-auto px-4 text-white">
          <div className="flex justify-between items-center">
            <div className="company-logo">
              <Link to="/" className="text-2xl font-bold">MintlyGo</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-primary-700 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-12">
              <nav>
                <ul className="flex gap-6 text-sm lg:text-base h-8 items-center">
                  <li className="h-full flex items-center">
                    <Link to="/credit-card">Credit Card</Link>
                  </li>
                  <li className="h-full flex items-center">
                    <Link to="/wallet">Wallet</Link>
                  </li>
                  <li className="h-full flex items-center">
                    <Link to="/prices">Prices</Link>
                  </li>
                  <li className="h-full flex items-center">
                    <ResourcesDropdown />
                  </li>
                </ul>
              </nav>
              <div className="CTA flex items-center gap-4">
                <button
                  onClick={() => {
                    openDialog();
                  }}
                  className="text-sm lg:text-base"
                >
                  Sign in
                </button>
                <button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="px-4 py-2 text-sm lg:text-base rounded-2xl bg-primary-600 hover:bg-primary-700 whitespace-nowrap"
                >
                  Join Waitlist
                </button>
                <div className="flex items-center gap-3 ml-2">
                  <a 
                    href="https://x.com/mintlygo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-300 transition-colors duration-200"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://t.me/mintlygo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-300 transition-colors duration-200"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className={`
              fixed inset-x-0 top-[73px] bg-primary-800/95 backdrop-blur-md
              transition-all duration-300 ease-in-out md:hidden
              ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}
              border-t border-primary-700/50 shadow-xl
            `}>
              <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-col gap-4">
                  <Link 
                    to="/credit-card"
                    className="text-white py-3 px-4 rounded-lg hover:bg-primary-700/50 transition-colors flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <CreditCard className="h-5 w-5" />
                    Credit Card
                  </Link>
                  <Link 
                    to="/wallet"
                    className="text-white py-3 px-4 rounded-lg hover:bg-primary-700/50 transition-colors flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Wallet className="h-5 w-5" />
                    Wallet
                  </Link>
                  <Link 
                    to="/prices"
                    className="text-white py-3 px-4 rounded-lg hover:bg-primary-700/50 transition-colors flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ChevronDown className="h-5 w-5" />
                    Prices
                  </Link>
                  <button
                    className="text-left text-white py-3 px-4 rounded-lg hover:bg-primary-700/50 transition-colors flex items-center gap-2"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsResourcesOpen(!isResourcesOpen);
                    }}
                  >
                    <Globe className="h-5 w-5" />
                    Resources
                  </button>
                </nav>
                <div className="mt-6 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openDialog();
                    }}
                    className="w-full py-3 px-4 text-base rounded-xl hover:bg-primary-700/50 transition-colors text-white text-left flex items-center gap-2"
                  >
                    Sign in
                  </button>
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsWaitlistOpen(true);
                    }}
                    className="w-full py-3 px-4 text-base rounded-xl bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center gap-2"
                  >
                    Join Waitlist
                  </button>
                  <div className="flex items-center justify-center gap-6 py-4">
                    <a 
                      href="https://x.com/mintlygo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary-300 transition-colors duration-200"
                    >
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://t.me/mintlygo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary-300 transition-colors duration-200"
                    >
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <WaitlistDialog
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </header>
  );
};

export default Header;
