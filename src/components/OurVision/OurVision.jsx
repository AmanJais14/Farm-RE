import React from 'react';
import { Leaf, Globe, TrendingUp } from 'lucide-react';
import exports from '../../assets/exports.jpg';

const OurVision = () => {
  // Vision cards data
  const visionCards = [
    {
      id: 1,
      title: "Biodiversity",
      description: "Preserving and enhancing natural ecosystems through sustainable farming practices that protect wildlife and promote ecological balance.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      icon: Leaf,
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      id: 2,
      title: "Exports",
      description: "Expanding global reach by exporting premium exotic fruits to international markets, bringing Indian agriculture to the world stage.",
      image: exports,
      icon: Globe,
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50"
    },
    // {
    //   id: 3,
    //   title: "Fruit Juices",
    //   // description: "Building a sustainable future through innovative farming techniques that ensure long-term profitability and environmental stewardship.",
    //   image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80",
    //   icon: TrendingUp,
    //   color: "from-purple-500 to-pink-600",
    //   bgColor: "from-purple-50 to-pink-50"
    // }
  ];

  return (
    <section id="our-vision" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-green-50 to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-green-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-black text-green-900 mb-2">
            Our <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-xs sm:text-sm text-black max-w-2xl mx-auto">
            Building a sustainable future through Biodiversity and global partnerships
          </p>
        </div>

        {/* Vision Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {visionCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className="group bg-white rounded-3xl shadow-lg border border-green-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${card.bgColor} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-green-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision Statement */}
        {/* <div className="text-center mt-12 sm:mt-16 animate-fade-in">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-green-100">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">2030</div>
                <div className="text-green-600 text-sm font-medium">Carbon Neutral Goal</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">50+</div>
                <div className="text-green-600 text-sm font-medium">Export Countries</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">100%</div>
                <div className="text-green-600 text-sm font-medium">Organic Certified</div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-green-200">
              <p className="text-green-800 text-base font-medium leading-relaxed">
                "Transforming agriculture through innovation, sustainability, and global partnerships to create a better future for farmers, investors, and the planet."
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default OurVision;
