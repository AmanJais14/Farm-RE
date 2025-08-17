import React from 'react';
import { Phone } from 'lucide-react';

const FloatingActionButton = ({ activeCard, setActiveCard }) => {
  return (
    <div className="fixed bottom-8  right-8 z-50">
      <div className="relative group">
        {/* Main FAB */}
        <button
          className="w-14 h-14 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative overflow-hidden"
          onMouseEnter={() => setActiveCard('fab')}
          onMouseLeave={() => setActiveCard(null)}
          onClick={() => {
            const contactSection = document.getElementById('contact-form');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          {/* Ripple effect */}
          <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          
          {/* Pulsing ring */}
          <div className="absolute inset-0 border-2 border-accent-400 rounded-full animate-ping opacity-50"></div>
          
          <Phone className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <div className="bg-black/80 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
              Contact Us
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-black/80"></div>
            </div>
          </div>
        </button>
        
        {/* Floating particles around FAB */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-2 -left-2 w-2 h-2 bg-accent-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse delay-500 opacity-60"></div>
          <div className="absolute -top-1 -right-3 w-1 h-1 bg-yellow-400 rounded-full animate-bounce delay-1000 opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingActionButton;
