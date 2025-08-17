import React, { useState, useEffect } from 'react';
import { Calendar, Users, Menu, X, Leaf, BookOpen } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const handleScheduleVisit = () => {
    // Scroll to contact form section
    scrollToSection('contact-form');
  };

  const handleInviteFriend = () => {
    // Scroll to invite friend section
    scrollToSection('invite-friend');
  };

  const handleBlogClick = () => {
    navigate('/blog');
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsOpen(false);
  };

  const handleVisionClick = () => {
    // Only scroll if we're on the home page
    if (location.pathname === '/') {
      scrollToSection('our-vision');
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        scrollToSection('our-vision');
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100' 
        : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100' 
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-black text-green-900">
                Exotic<span className="text-emerald-600">Farming</span>
              </h1>
              <p className="text-xs text-green-600 hidden sm:block">Premium Agricultural Investment</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <button
              onClick={handleVisionClick}
              className="text-green-700 hover:bg-green-50 hover:text-green-800 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300"
            >
              Our Vision
            </button>

            <button
              onClick={handleBlogClick}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                location.pathname.startsWith('/blog')
                  ? 'bg-green-100 text-green-700 border-2 border-green-300'
                  : 'text-green-700 hover:bg-green-50 hover:text-green-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Blog
            </button>

            <button
              onClick={handleScheduleVisit}
              className="flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              Schedule a visit
            </button>

            {/* <button
              onClick={handleInviteFriend}
              className="flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-white hover:bg-green-50 text-green-700 border-2 border-green-500 hover:border-green-600 rounded-xl font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105"
            >
              <Users className="w-4 h-4" />
              Invite a friend
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-green-100 hover:bg-green-200 text-green-700 transition-colors duration-300"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-64 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-green-100 p-4 mt-2">
            <div className="space-y-3">
              <button
                onClick={handleVisionClick}
                className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-green-50 text-green-700 border-2 border-green-200 hover:border-green-300 rounded-xl font-semibold text-sm transition-all duration-300"
              >
                Our Vision
              </button>

              <button
                onClick={handleBlogClick}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  location.pathname.startsWith('/blog')
                    ? 'bg-green-100 text-green-700 border-2 border-green-300'
                    : 'bg-white hover:bg-green-50 text-green-700 border-2 border-green-200 hover:border-green-300'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Blog
              </button>

              <button
                onClick={handleScheduleVisit}
                className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold text-sm transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                Schedule a visit
              </button>

              {/* <button
                onClick={handleInviteFriend}
                className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-green-50 text-green-700 border-2 border-green-500 hover:border-green-600 rounded-xl font-semibold text-sm transition-all duration-300"
              >
                <Users className="w-4 h-4" />
                Invite a friend
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
