import { Link, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Globe, Users, Newspaper, HelpCircle, BookOpen, Building2, ChevronDown } from 'lucide-react';

type HeaderProps = {
  openDialog: () => void;
};

const Header: React.FC<HeaderProps> = ({ openDialog }) => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
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

  const ResourcesDropdown = () => (
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
        className={`fixed left-0 right-0 transform transition-all duration-300 bg-gradient-to-b from-white to-gray-50 shadow-2xl backdrop-blur-sm ${
          isResourcesOpen 
            ? "opacity-100 translate-y-0 visible" 
            : "opacity-0 -translate-y-2 invisible"
        }`}
        style={{ top: '64px' }}
      >
        <div className="container mx-auto">
          <div className="py-8 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-6 relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2 relative">Resources</h3>
                <p className="text-sm text-gray-600 relative">Explore our comprehensive resources and learn more about MintlyGo</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* First Column */}
                <div className="space-y-6">
                  <Link
                    to="/about"
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative"
                  >
                    <div className="mt-1 shrink-0 p-2 rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300">
                      <Building2 className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-300">About Us</h4>
                      <p className="text-sm text-gray-500">Learn about our mission and vision for the future of crypto</p>
                    </div>
                  </Link>

                  <Link
                    to="/team"
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative"
                  >
                    <div className="mt-1 shrink-0 p-2 rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300">
                      <Users className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-300">Our Team</h4>
                      <p className="text-sm text-gray-500">Meet the experts behind MintlyGo's success</p>
                    </div>
                  </Link>
                </div>

                {/* Second Column */}
                <div className="space-y-6">
                  <Link
                    to="/security-hub"
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative"
                  >
                    <div className="mt-1 shrink-0 p-2 rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300">
                      <Globe className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-300">Security Hub</h4>
                      <p className="text-sm text-gray-500">Building trust through transparency</p>
                    </div>
                  </Link>

                  <Link
                    to="/news"
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative"
                  >
                    <div className="mt-1 shrink-0 p-2 rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300">
                      <Newspaper className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-300">News & Media Hub</h4>
                      <p className="text-sm text-gray-500">Latest updates, press resources, and company news</p>
                    </div>
                  </Link>
                </div>

                {/* Third Column */}
                <div className="space-y-6">
                  <Link
                    to="/learn"
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative"
                  >
                    <div className="mt-1 shrink-0 p-2 rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300">
                      <BookOpen className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-300">Learning Hub</h4>
                      <p className="text-sm text-gray-500">Your trusted source for all things crypto</p>
                    </div>
                  </Link>

                  <Link
                    to="/support"
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative"
                  >
                    <div className="mt-1 shrink-0 p-2 rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300">
                      <HelpCircle className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-300">Support</h4>
                      <p className="text-sm text-gray-500">Get help and find answers to your questions</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header className="bg-primary-800 py-4 px-6 relative z-40 border-b border-primary-700/50">
      {isAuthenticated && (
        <div className="container mx-auto text-white flex justify-between items-center">
          <div className="company-logo">
            <Link to="/" className="text-2xl font-bold">MintlyGo</Link>
          </div>
          <div className="hidden md:flex items-center gap-20">
            <nav>
              <ul className="flex gap-8 text-sm lg:text-base h-8 items-center">
                <li className="h-full flex items-center">
                  <Link to="/">Card Services</Link>
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
            <div className="CTA flex gap-6">
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="px-4 py-2 text-sm lg:text-base rounded-2xl bg-primary-600 hover:bg-primary-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {!isAuthenticated && (
        <>
          <div className="container mx-auto text-white flex justify-between items-center">
            <div className="company-logo">
              <Link to="/" className="text-2xl font-bold">MintlyGo</Link>
            </div>
            <div className="hidden md:flex items-center gap-20">
              <nav>
                <ul className="flex gap-8 text-sm lg:text-base h-8 items-center">
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
              <div className="CTA flex gap-6">
                <button
                  onClick={() => {
                    openDialog();
                  }}
                  className="text-sm lg:text-base"
                >
                  Sign in
                </button>
                <button className="px-4 py-2 text-sm lg:text-base rounded-2xl bg-primary-600 hover:bg-primary-700">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
