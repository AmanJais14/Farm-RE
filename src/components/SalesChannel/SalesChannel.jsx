import React from 'react';
import { TrendingUp, ShoppingCart, Truck, Globe } from 'lucide-react';
import zepto from '../../assets/saleschannel/zepto.png';
import blinkit from '../../assets/saleschannel/blinkit.png';
import more from '../../assets/saleschannel/more.png';



const SalesChannel = () => {
  // Sales channel partners/companies
  const salesChannels = [
    {
      id: 1,
      name: "Blinkit",
      category: "Quick Commerce",
      logo: blinkit,
    },
    {
      id: 2,
      name: "Zepto",
      category: "Quick Commerce", 
      logo: zepto,
    },
    {
      id: 3,
      name: "More",
      category: "Online Retail",
      logo: more,
    },
    // {
    //   id: 4,
    //   name: "Amazon Fresh",
    //   category: "E-commerce",
    //   logo: "/api/placeholder/120/60", // Replace with actual logo
    //   description: "Premium fresh produce delivery",
    //   color: "from-blue-500 to-cyan-500"
    // },
    // {
    //   id: 5,
    //   name: "Reliance Fresh",
    //   category: "Retail Chain",
    //   logo: "/api/placeholder/120/60", // Replace with actual logo
    //   description: "Leading retail chain across India",
    //   color: "from-indigo-500 to-purple-500"
    // },
    // {
    //   id: 6,
    //   name: "Export Markets",
    //   category: "International",
    //   logo: "/api/placeholder/120/60", // Replace with actual logo
    //   description: "Premium export to Middle East & Europe",
    //   color: "from-yellow-500 to-orange-500"
    // }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-green-50 to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-green-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-black  text-green-900 mb-2">
            Our Sales <span className="gradient-text">Channels</span>
          </h2>
          <p className="text-xs sm:text-sm text-black max-w-3xl mx-auto leading-relaxed">
            Premium exotic fruits delivered through India's leading platforms and exported globally
          </p>
        </div>

        {/* Sales Channels Logos */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
            {salesChannels.map((channel, index) => (
              <div
                key={channel.id}
                className="group transition-all duration-300 hover:scale-110 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={channel.logo}
                  alt={`${channel.name} logo`}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain  group-hover:opacity-100 transition-opacity duration-300 "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center animate-slide-up" style={{ animationDelay: '600ms' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">6+</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Sales Channels</div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '700ms' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">10+</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Cities Covered</div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '800ms' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">2x</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Premium Pricing</div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '900ms' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">3+</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Export Markets</div>
            </div>
          </div>
        </div> */}

        {/* Call to Action */}
        {/* <div className="text-center mt-12 sm:mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm sm:text-base">Guaranteed Market Access</p>
                <p className="text-green-100 text-xs">Pre-sold through established channels</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SalesChannel;
