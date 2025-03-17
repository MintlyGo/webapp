import { Link, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Globe, Users, Newspaper, HelpCircle, BookOpen, Building2 } from 'lucide-react';

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
      <div className="cursor-pointer h-full flex items-center">Resources</div>
      <div 
        className={`fixed left-0 right-0 transform transition-all duration-300 bg-white shadow-lg ${
          isResourcesOpen 
            ? "opacity-100 translate-y-0 visible" 
            : "opacity-0 -translate-y-2 invisible"
        }`}
        style={{ top: '64px' }}
      >
        <div className="container mx-auto">
          <div className="py-8 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Resources</h3>
                <p className="text-sm text-gray-600">Explore our comprehensive resources and learn more about MintlyGo</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* First Column */}
                <div className="space-y-6">
                  <Link
                    to="/about"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="mt-1 shrink-0">
                      <Building2 className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover:text-primary-600">About Us</h4>
                      <p className="text-sm text-gray-500">Learn about our mission and vision for the future of crypto</p>
                    </div>
                  </Link>

                  <Link
                    to="/trust-center"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="mt-1 shrink-0">
                      <Globe className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover:text-primary-600">Trust Center</h4>
                      <p className="text-sm text-gray-500">Building trust through transparency</p>
                    </div>
                  </Link>
                </div>

                {/* Second Column */}
                <div className="space-y-6">
                  <Link
                    to="/team"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="mt-1 shrink-0">
                      <Users className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover:text-primary-600">Our Team</h4>
                      <p className="text-sm text-gray-500">Meet the experts behind MintlyGo's success</p>
                    </div>
                  </Link>

                  <Link
                    to="/cryptopedia"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="mt-1 shrink-0">
                      <BookOpen className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover:text-primary-600">Cryptopedia</h4>
                      <p className="text-sm text-gray-500">Your trusted source for all things crypto</p>
                    </div>
                  </Link>
                </div>

                {/* Third Column */}
                <div className="space-y-6">
                  <Link
                    to="/newsroom"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="mt-1 shrink-0">
                      <Newspaper className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover:text-primary-600">Newsroom</h4>
                      <p className="text-sm text-gray-500">Latest news and press mentions</p>
                    </div>
                  </Link>

                  <Link
                    to="/support"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="mt-1 shrink-0">
                      <HelpCircle className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover:text-primary-600">Support</h4>
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
                  <Link to="/prices">Prices</Link>
                </li>
                <li className="h-full flex items-center">
                  <Link to="/">Card Services</Link>
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
                    <Link to="/prices">Prices</Link>
                  </li>
                  <li className="h-full flex items-center">
                    <Link to="/">Credit Card</Link>
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
