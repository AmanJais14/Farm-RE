import React from 'react';
import { useNavigate } from 'react-router-dom';
import farm from '../../assets/hero/farm5.jpg';

const BlogHeroSection = () => {
  const navigate = useNavigate();

  const handleHeroClick = () => {
    navigate('/');
  };

  return (
    <div
      onClick={handleHeroClick}
      className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 overflow-hidden cursor-pointer group"
      style={{
        backgroundImage: `url(${farm})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Main Headline */}
            <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-black text-white mb-2 sm:mb-3 md:mb-2 leading-tight tracking-tight group-hover:scale-105 transition-transform duration-300">
              Invest in Exotic Farming<span className="gradient-text-hero text-yellow-400"></span>
            </h1>

            {/* Subheader */}
            <div className="mb-3 sm:mb-4 md:mb-3 animate-slide-up delay-300">
              {/* Glass card for IIM Team */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-3 sm:mb-4 ">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-yellow-300">Led by IIM Team</span>
              </div>
              <div className="mt-4 sm:mt-6">
              <p className="text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-white/90 mb-1 sm:mb-2">
                <span className="text-white/90">Starting at </span>
                <span className="text-green-300 font-bold">₹29.9L per acre</span>
              </p>
              <p className="text-xs sm:text-sm md:text-sm lg:text-base max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                <span className="text-white/80">Earn </span>
                <span className="text-green-300 font-bold">12-18% Annual Dividends</span>
              </p>
              </div>
            </div>

            {/* Click to return home indicator */}
            {/* <div className="mt-4 sm:mt-6 md:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-white/70 text-sm sm:text-base md:text-base font-medium">
                Click anywhere to return to home page
              </p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Subtle animation overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
    </div>
  );
};

export default BlogHeroSection;
