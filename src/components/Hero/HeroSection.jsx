import React from 'react';
import { Globe,ChevronDown, Users, TrendingUp, Shield, Calendar, ArrowRight, Play, Sparkles, BarChart3 ,Rocket} from 'lucide-react';
import farm from '../../assets/hero/farm2.jpg';

const HeroSection = ({ 
  mousePosition, 
  isHovering, 
  setIsHovering, 
  scrollY, 
  activeCard, 
  setActiveCard, 
  counters 
}) => {
  return (
    <div
      className="relative h-[80vh] bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 overflow-hidden cursor-none"
      style={{
        backgroundImage: `url(${farm})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        transform: `translateY(${scrollY * 0.5}px)` // Parallax effect
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Interactive Custom Cursor */}
      {isHovering && (
        <div 
          className="fixed pointer-events-none z-50 mix-blend-difference"
          style={{
            left: mousePosition.x - 20,
            top: mousePosition.y - 20,
            transition: 'all 0.1s ease-out'
          }}
        >
          <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white animate-spin" />
          </div>
        </div>
      )}

      {/* Premium Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-float blur-sm transition-transform duration-1000"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full opacity-20 animate-bounce-slow blur-sm transition-transform duration-1000"
          style={{ transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px)` }}
        ></div>
        <div 
          className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-float delay-1000 blur-sm transition-transform duration-1000"
          style={{ transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.015}px)` }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-15 animate-pulse-slow delay-500 blur-sm transition-transform duration-1000"
          style={{ transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.01}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-10 w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-15 animate-float delay-2000 blur-sm transition-transform duration-1000"
          style={{ transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.02}px)` }}
        ></div>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-7xl mx-auto">
            

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-white mb-8 leading-tight tracking-tight">
              Exotic Organic Farming, Exceptional Returns<span className="gradient-text-hero text-yellow-400"></span> 
            </h1>
            {/* Premium Badge */}
            {/* <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
              <div className="w-3 h-3 bg-accent-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium">Led By IIM Team</span>
            </div> */}

            {/* Subheadline */}
            <div className="mb-8 animate-slide-up delay-300">
              {/* <p className="text-2xl md:text-2xl font-bold mb-2"> */}
                {/* <span className="text-white">Earn </span> */}
                {/* <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">16% dividends</span> */}
                {/* <span className="text-white text-sm"> (Tax-Free) </span> */}
                {/* <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">+ 15% land appreciation</span> */}
                {/* <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">Returns</span> */}
              {/* </p> */}
              <p className="text-lg md:text-3xl max-w-3xl mx-auto leading-relaxed">
                <span className="text-white/90">Starting at </span>
                <span className="text-green-300 font-bold">₹29L per acre</span>
                {/* <span className="text-white/90"> or </span> */}
                {/* <span className="text-emerald-300 font-bold">₹55L (2 acres)</span> */}
              </p>
              {/* <p className="text-2xl md:text-2xl font-bold mb-2 mt-1">
                <span className="text-white">Earn </span>
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">16% dividends</span>
                <span className="text-white text-sm"> (Tax-Free) </span>
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">+ 15% land appreciation</span> */}
                {/* <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">Returns</span> */}
              {/* </p> */}
            </div>
            {/* Quick Stats Preview */}
            <div className="mt-28 grid grid-cols-1 md:grid-cols-5 gap-5 max-w-6xl mx-auto animate-fade-in delay-1000">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 h-20">
                <div className="flex items-center gap-3 h-full">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-green-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-2xl font-bold text-white leading-tight">20%+</div>
                    <div className="text-sm text-white/80 leading-tight">Annual Dividends</div>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 h-20">
                <div className="flex items-center gap-3 h-full">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-green-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-2xl font-bold text-white leading-tight">IIM</div>
                    <div className="text-sm text-white/80 leading-tight">Management</div>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 h-20">
                <div className="flex items-center gap-3 h-full">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-green-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-2xl font-bold text-white leading-tight">10+ Years</div>
                    <div className="text-sm text-white/80 leading-tight">Agri Experience</div>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 h-20">
                <div className="flex items-center gap-3 h-full">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-green-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-2xl font-bold text-white leading-tight">1000+</div>
                    <div className="text-sm text-white/80 leading-tight">Acres under management</div>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 h-20">
                <div className="flex items-center gap-3 h-full">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-green-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-2xl font-bold text-white leading-tight">Live on</div>
                    <div className="text-sm text-white/80 leading-tight">Swiggy, Zepto </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 mb-1 animate-scale-in delay-700 ">
              {/* <button 
                className="btn-premium bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-premium flex items-center justify-center gap-3 group relative overflow-hidden"
                onMouseEnter={() => setActiveCard('download')}
                onMouseLeave={() => setActiveCard(null)}
              > */}
                {/* Animated background */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                
                {/* Shimmer effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <div className="relative z-10 flex items-center gap-3">
                  <Play className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  Download Deck
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                </div>
              </button> */}
              
              
              <button 
                className=" bg-white text-green-700 border border-white/30 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow-green backdrop-blur-md group relative overflow-hidden"
                onMouseEnter={() => setActiveCard('consultation')}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-white/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Pulse effect */}
                <div className="absolute inset-0 bg-white/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                
                <div className="relative z-10 flex items-center gap-3">
                  <Calendar className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  Book Consultation
                </div>
              </button>
            </div>

            
            

            {/* Enhanced Trust Indicators */}
            {/* <div className="flex flex-wrap items-center justify-center gap-8 text-white/90 text-sm animate-fade-in delay-1000">
              <div 
                className="flex items-center gap-3 px-4 py-2 rounded-xl glass hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setActiveCard('investors')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="relative">
                  <Users className="w-5 h-5 text-green-300 group-hover:scale-110 group-hover:text-green-200 transition-all duration-300" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-300 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="font-medium group-hover:text-white transition-colors">{counters.investors}+ Investors</span>
                {activeCard === 'investors' && (
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap">
                    Growing community of satisfied investors
                  </div>
                )}
              </div>
              
              <div 
                className="flex items-center gap-3 px-4 py-2 rounded-xl glass hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setActiveCard('investment')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="relative">
                  <TrendingUp className="w-5 h-5 text-emerald-300 group-hover:scale-110 group-hover:text-emerald-200 transition-all duration-300" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-300 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="font-medium group-hover:text-white transition-colors">₹{counters.investment}Cr+ Invested</span>
                {activeCard === 'investment' && (
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap">
                    Total capital deployed successfully
                  </div>
                )}
              </div>
              
              <div 
                className="flex items-center gap-3 px-4 py-2 rounded-xl glass hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setActiveCard('legal')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="relative">
                  <Shield className="w-5 h-5 text-green-300 group-hover:scale-110 group-hover:text-green-200 transition-all duration-300" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-300 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="font-medium group-hover:text-white transition-colors">100% Legal</span>
                {activeCard === 'legal' && (
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap">
                    Fully compliant with all regulations
                  </div>
                )}
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* Enhanced Premium Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div 
          className="glass rounded-full p-4 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group relative overflow-hidden"
          onClick={() => {
            const nextSection = document.querySelector('#investment-landscape');
            nextSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        > */}
          {/* Ripple effect */}
          {/* <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div> */}
          
          {/* Pulsing ring */}
          {/* <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div> */}
          
          {/* <ChevronDown className="w-6 h-6 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10" /> */}
          
          {/* Tooltip */}
          {/* <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap">
              Explore Investment Options
            </div>
          </div>
        </div> */}
        
        {/* Scroll progress indicator */}
        {/* <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <div className="w-0.5 h-8 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="w-full bg-gradient-to-b from-primary-400 to-accent-400 rounded-full transition-all duration-300"
                style={{ height: `${Math.min((scrollY / window.innerHeight) * 100, 100)}%` }}
              ></div>
            </div>
            <div className="text-white/60 text-xs">Scroll</div>
          </div>
        </div>
      </div> */}
    // </div>
  );
};

export default HeroSection;
