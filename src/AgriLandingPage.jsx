import React, { useState, useEffect, useRef } from 'react';
import { Users, TrendingUp, Shield, MapPin, Phone, Mail, Calendar, Star, ArrowRight, CheckCircle, Play, ChevronLeft, ChevronRight, X } from 'lucide-react';

// Import components
import HeroSection from './components/Hero/HeroSection';
import CAGRGrowth from './components/CAGRGrowth/CAGRGrowth';
import AboutMe from './components/AboutMe/AboutMe';
import HighLights from './components/HighLights/HighLights';
import CollapsibleSections from './components/CollapsibleSections/CollapsibleSections';
import FloatingActionButton from './components/FloatingActionButton/FloatingActionButton';
import GalleryModal from './components/Gallery/GalleryModal';
import AnimatedCounters from './components/common/AnimatedCounters';

// Import assets
import farm from './assets/farm.jpg';
import landImg1 from './assets/land-img1.jpg';
import landImg2 from './assets/land-img2.jpg';
import landImg3 from './assets/land-img3.jpg';
import landImg4 from './assets/land-img4.jpg';
import landImg5 from './assets/land-img5.jpg';
import landImg6 from './assets/land-img6.jpg';
import landImg7 from './assets/land-img7.jpg';
import landImg8 from './assets/land-img8.jpg';
import landImg9 from './assets/land-img9.jpg';
import landImg10 from './assets/land-img10.jpg';
import landImg11 from './assets/land-img11.jpg';
import landImg12 from './assets/land-img12.jpg';
import landImg13 from './assets/land-img13.jpg';
import landImg14 from './assets/land-img14.jpg';


const AgriLandingPage = () => {
  const [activeTab, setActiveTab] = useState('investment');
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [counters, setCounters] = useState({
    investors: 0,
    investment: 0,
    returns: 0,
    experience: 0
  });
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Mouse tracking for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Scroll tracking for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Gallery images data
  const galleryImages = [
    {
      src: farm,
      title: "Premium Farmland",
      description: "Lush green farmland with optimal soil conditions for premium crop cultivation"
    },
    {
      src: landImg1,
      title: "Modern Agriculture",
      description: "State-of-the-art farming techniques ensuring maximum yield and sustainability"
    },
    {
      src: landImg2,
      title: "Expert Management",
      description: "Professional agricultural management with years of experience in crop optimization"
    },
    {
      src: landImg3,
      title: "Premium Location",
      description: "Strategically located farmland with excellent connectivity and infrastructure"
    },
    {
      src: landImg4,
      title: "Sustainable Practices",
      description: "Environmentally conscious farming methods for long-term productivity and growth"
    },
    {
      src: landImg5,
      title: "Advanced Irrigation",
      description: "Modern irrigation systems ensuring optimal water management and crop health"
    },
    {
      src: landImg6,
      title: "Organic Farming",
      description: "Chemical-free organic farming practices for premium quality produce"
    },
    {
      src: landImg7,
      title: "Fruit Orchards",
      description: "Premium fruit orchards with high-value crops and excellent market demand"
    },
    {
      src: landImg8,
      title: "Greenhouse Technology",
      description: "Climate-controlled greenhouse facilities for year-round cultivation"
    },
    {
      src: landImg9,
      title: "Precision Agriculture",
      description: "Technology-driven precision farming for maximum efficiency and yield"
    },
    {
      src: landImg10,
      title: "Crop Rotation",
      description: "Scientific crop rotation methods maintaining soil health and productivity"
    },
    {
      src: landImg11,
      title: "Modern Equipment",
      description: "High-tech farming equipment ensuring efficient and cost-effective operations"
    },
    {
      src: landImg12,
      title: "Infrastructure",
      description: "Premium agricultural infrastructure supporting large-scale farming operations"
    },
    {
      src: landImg13,
      title: "Quality Assurance",
      description: "Rigorous quality control measures ensuring premium produce standards"
    },
    {
      src: landImg14,
      title: "Expert Consultation",
      description: "Professional agricultural consultation and ongoing farm management support"
    }
  ];

  // Gallery navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!isGalleryOpen) {
      const interval = setInterval(nextImage, 5000);
      return () => clearInterval(interval);
    }
  }, [isGalleryOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isGalleryOpen) {
        if (e.key === 'ArrowLeft') {
          prevImage();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'Escape') {
          closeGallery();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isGalleryOpen]);

  // Prevent body scroll when gallery is open
  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isGalleryOpen]);

  // Animated counters
  useEffect(() => {
    if (isCounterVisible) {
      const targets = {
        investors: 500,
        investment: 100,
        returns: 16,
        experience: 3
      };

      const duration = 2000; // 2 seconds
      const steps = 60; // 60 fps
      const increment = duration / steps;

      Object.keys(targets).forEach(key => {
        let current = 0;
        const target = targets[key];
        const step = target / steps;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, increment);
      });
    }
  }, [isCounterVisible]);

  const testimonials = [
    // {
    //   name: 'Rahul, NRI Investor',
    //   location: 'Investing in the US for 5 years',
    //   quote: 'Amazing pay-back'
    // },
    // {
    //   name: 'Priya, Bangalore',
    //   quote: 'The team is professional and supportive throughout my investment grows each year'
    // },
    // {
    //   name: 'Omar, Dubai',
    //   quote: 'I love visiting my farm - it\'s become my second home'
    // },
    {
      name: 'Komal Prajapati, IIT Madras',
      quote: 'I partnered with Farmties in 2023, and the experience has been exceptional. The operations are expertly managed, leaving me with no day-to-day worries. Their large-scale model provides cost advantages that no other player in the market can match. The founder’s solid decade-long experience in the agri sector truly reflects in the efficiency and success of the project'
    },
    {
      name: 'Swadha Jaiswal, NID Bangalore',
      quote: 'I’ve invested in real estate and mutual funds before, but nothing has matched the returns from my farmland with Farmties. The 18% annual tax-free dividends, along with the value growth of the land itself, make this one of the best decisions I’ve made in my portfolio'
    },
    {
      name: 'Raghav Yadav, IIM Ahmedabad',
      // location: 'Investing in the US for 5 years',
      quote: 'As an NRI, I was initially cautious about investing in Indian agriculture. But Farmties gave me complete transparency, from investment timelines to yield projections. In just three years, I’ve seen consistent growth and steady appreciation in my land value. It’s a rare combination of security and growth.'
    }
  ];

  const steps = [
    'Choose your land',
    '₹20 acres or ₹55L (2 acres)',
    'Sign investor agreement',
    'Make payment',
    'Farming begins immediately',
    'Year 1',
    'Site visits',
    'Year 3',
    'Harvest appreciation & resale'
  ];

  return (
    <>
      {/* Premium CSS Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.6s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }

        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .gradient-text {
          background: linear-gradient(135deg, #22c55e, #16a34a, #15803d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-primary {
          background: linear-gradient(135deg, #10b981, #059669);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-premium {
          position: relative;
          overflow: hidden;
        }

        .btn-premium::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .btn-premium:hover::before {
          left: 100%;
        }

        .card-premium {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(20px);
        }

        .card-premium:hover {
          transform: translateY(-8px) scale(1.02);
        }

        /* Smooth section transitions */
        section {
          position: relative;
        }

        section::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
        }

        .shadow-premium {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .shadow-glow-green {
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.4);
        }

        .shadow-glow-natural {
          box-shadow: 0 0 40px rgba(34, 197, 94, 0.2);
        }

        .gallery-container:hover .gallery-nav {
          opacity: 1;
        }

        .gallery-thumbnail.active {
          transform: scale(1.1);
        }

        .gallery-image.loaded {
          animation: fade-in 0.5s ease-out;
        }

        .progress-dot.active {
          animation: glow 2s ease-in-out infinite;
        }

        .font-display {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 900;
          letter-spacing: -0.02em;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50">
      {/* Hero Section */}
      <HeroSection
        mousePosition={mousePosition}
        isHovering={isHovering}
        setIsHovering={setIsHovering}
        scrollY={scrollY}
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        counters={counters}
      />

      {/* HighLights Section */}
      <HighLights />

      {/* Collapsible Sections: Investment Landscape, Overview & Pricing Comparison */}
      <CollapsibleSections
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        counters={counters}
      />

      {/* CAGR Growth */}
      <CAGRGrowth />



      {/* Proven Results */}
      {/* <section className="py-16 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 relative overflow-hidden -mt-1"> */}
        {/* Natural transition */}
        {/* <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-100 to-transparent"></div> */}

        {/* Natural Background Elements */}
        {/* <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full opacity-40 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full opacity-40 blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-yellow-300/15 to-amber-300/15 rounded-full opacity-30 blur-2xl animate-pulse-slow"></div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-black text-green-900 mb-4">
              Proven Results & <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-base text-green-700 max-w-3xl mx-auto">Delivering strong yields and attracting investors worldwide with transparent operations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-white/80 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-green-200/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-green-800">Large-scale Operations</h3>
                    <p className="text-green-700 text-lg">100+ acre farmland operations across multiple regions with proven scalability</p>
                    <div className="mt-3 flex items-center gap-2 text-emerald-600">
                      <span className="font-bold text-2xl">100+</span>
                      <span className="text-sm">Acres Under Management</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-white/80 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-green-200/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-green-800">Proven Track Record</h3>
                    <p className="text-green-700 text-lg">3+ years of successful operations and satisfied investors with consistent returns</p>
                    <div className="mt-3 flex items-center gap-2 text-green-600">
                      <span className="font-bold text-2xl">500+</span>
                      <span className="text-sm">Happy Investors</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-white/80 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-green-200/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-green-800">Market Distribution</h3>
                    <p className="text-green-700 text-lg">Sold via Shakti & Zapro for immediate market access and guaranteed sales</p>
                    <div className="mt-3 flex items-center gap-2 text-emerald-600">
                      <span className="font-bold text-2xl">₹100Cr+</span>
                      <span className="text-sm">Total Investment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Animated Counters Component */}
            {/* <AnimatedCounters
              counters={counters}
              isCounterVisible={isCounterVisible}
              setIsCounterVisible={setIsCounterVisible}
            />
          </div>
        </div>
      </section> */}




      {/* How It Works */}
      <section className="py-8 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 relative overflow-hidden -mt-1  flex items-center">
        {/* Natural transition */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-100 to-transparent"></div>

        {/* Natural floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-green-400/15 to-emerald-400/15 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-400/15 to-green-500/15 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative w-full">
          {/* <div className="text-center my-12 animate-fade-in">
              <div className="inline-flex items-center gap-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden"> */}
                {/* Shimmer effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="text-left">
                    <p className="font-black text-xl">Ready to Start Your Journey?</p>
                    <p className="text-green-100 text-sm">Book a consultation to learn more</p>
                  </div>
                </div>
              </div>
            </div> */}
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-black text-green-900 mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-base text-green-700 max-w-2xl mx-auto">Simple steps to start your investment journey</p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Elegant Horizontal Flow */}
            <div className="relative">
              {/* Progress Line */}
              <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-green-300 to-green-400 rounded-full"></div>

              {/* Key Steps - Horizontal Layout */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Step 1: Choose Land */}
                <div className="group text-center animate-slide-up relative">
                  <div className="relative mx-auto mb-6 w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-white">
                    1
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-2xl shadow-lg border border-green-200/50 group-hover:shadow-xl transition-all duration-300">
                    <h3 className="font-bold text-green-800 text-lg mb-2">Choose Land</h3>
                    <p className="text-green-600 text-sm">Select premium farmland from our curated portfolio</p>
                  </div>
                </div>

                {/* Step 2: Investment */}
                <div className="group text-center animate-slide-up relative" style={{ animationDelay: '200ms' }}>
                  <div className="relative mx-auto mb-6 w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-white">
                    2
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-2xl shadow-lg border border-green-200/50 group-hover:shadow-xl transition-all duration-300">
                    <h3 className="font-bold text-green-800 text-lg mb-2">Invest</h3>
                    <p className="text-green-600 text-sm">₹29L per acre or ₹55L for 2 acres</p>
                  </div>
                </div>

                {/* Step 3: Legal Process */}
                <div className="group text-center animate-slide-up relative" style={{ animationDelay: '400ms' }}>
                  <div className="relative mx-auto mb-6 w-24 h-24 bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-full flex items-center justify-center font-black text-xl shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-white">
                    3
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-2xl shadow-lg border border-green-200/50 group-hover:shadow-xl transition-all duration-300">
                    <h3 className="font-bold text-green-800 text-lg mb-2">Legal Process</h3>
                    <p className="text-green-600 text-sm">Complete documentation & title transfer</p>
                  </div>
                </div>

                {/* Step 4: Farming Begins */}
                <div className="group text-center animate-slide-up relative" style={{ animationDelay: '600ms' }}>
                  <div className="relative mx-auto mb-6 w-24 h-24 bg-gradient-to-br from-emerald-600 to-green-700 text-white rounded-full flex items-center justify-center font-black text-xl shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-white">
                    4
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-2xl shadow-lg border border-green-200/50 group-hover:shadow-xl transition-all duration-300">
                    <h3 className="font-bold text-green-800 text-lg mb-2">Farming Begins</h3>
                    <p className="text-green-600 text-sm">Professional cultivation with premium crops</p>
                  </div>
                </div>

                {/* Step 5: Harvest Returns */}
                <div className="group text-center animate-slide-up relative" style={{ animationDelay: '800ms' }}>
                  <div className="relative mx-auto mb-6 w-24 h-24 bg-gradient-to-br from-green-700 to-emerald-800 text-white rounded-full flex items-center justify-center font-black text-xl shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-white">
                    5
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-2xl shadow-lg border border-green-200/50 group-hover:shadow-xl transition-all duration-300">
                    <h3 className="font-bold text-green-800 text-lg mb-2">Earn Returns</h3>
                    <p className="text-green-600 text-sm">30%+ annual returns(16% Dividends Tax free)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elegant Call to Action */}
            {/* <div className="text-center mt-12 animate-fade-in"> */}
              {/* <div className="inline-flex items-center gap-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden"> */}
                {/* Shimmer effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="text-left">
                    <p className="font-black text-xl">Ready to Start Your Journey?</p>
                    <p className="text-green-100 text-sm">Book a consultation to learn more</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Payment Schedule */}
      <section className="py-16 bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 relative overflow-hidden -mt-1">
        {/* Natural transition */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-emerald-50 to-transparent"></div>

        {/* Natural Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-300/15 to-amber-300/15 rounded-full blur-2xl animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-black text-green-900 mb-4">
              Payment <span className="gradient-text">Schedule</span>
            </h2>
            <p className="text-base text-green-700 max-w-2xl mx-auto">Clear milestones to secure your farmland investment</p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="card-premium bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-premium border border-green-300/50 relative overflow-hidden">
              {/* Natural Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full opacity-50 transform translate-x-20 -translate-y-20"></div>

              {/* Horizontal Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
                {/* Step 1: Sale Agreement */}
                <div className="group text-center">
                  <div className="relative mx-auto mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                      <span className="text-white font-bold text-2xl">20%</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3">Sale Agreement</h3>
                    <p className="text-green-700 text-base md:text-lg">Initial payment after signing the sale agreement</p>
                  </div>
                </div>

                {/* Step 2: Land Registration */}
                <div className="group text-center">
                  <div className="relative mx-auto mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                      <span className="text-white font-bold text-2xl">65%</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3">Land Registration</h3>
                    <p className="text-green-700 text-base md:text-lg">Payment when Land is registered in your name</p>
                  </div>
                </div>

                {/* Step 3: Development Start */}
                <div className="group text-center">
                  <div className="relative mx-auto mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                      <span className="text-white font-bold text-2xl">100%</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3">Development Start</h3>
                    <p className="text-green-700 text-base md:text-lg">Final payment when infrastructure development begins</p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-10 pt-8 border-t border-green-200/50">
                <div className="flex items-center justify-center gap-4 text-green-700">
                  <Shield className="w-6 h-6 text-green-500" />
                  <span className="font-medium text-lg">100% Transparent & Legally Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Gallery Carousel */}
      <section className="py-16 bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 relative overflow-hidden -mt-1">
        {/* Natural transition */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-emerald-50 to-transparent"></div>

        {/* Natural Background Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full opacity-40 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full opacity-40 blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-yellow-300/15 to-amber-300/15 rounded-full opacity-30 blur-2xl animate-pulse-slow"></div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-black text-green-900 mb-4">
              Farm <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-base text-green-700 max-w-2xl mx-auto">Explore our premium farmland and see the quality of our agricultural operations</p>
          </div>

          {/* Gallery Carousel */}
          <div className="max-w-6xl mx-auto">
            <div className="relative group gallery-container">
              {/* Main Carousel Container */}
              <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-premium bg-green-50 border border-green-200/50">
                <div
                  className="flex transition-transform duration-700 ease-in-out h-full gallery-slide"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {galleryImages.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 relative group/slide">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover gallery-image loaded transition-transform duration-500 group-hover/slide:scale-105"
                        loading="lazy"
                      />

                      {/* Premium Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>

                      {/* Image Info */}
                      <div className="absolute bottom-6 left-6 right-6 text-white animate-slide-up">
                        <div className="glass p-6 rounded-2xl border border-white/20">
                          <h3 className="text-2xl md:text-3xl font-bold mb-3 gradient-text-primary">{image.title}</h3>
                          <p className="text-lg text-white/90 leading-relaxed">{image.description}</p>

                          {/* View Details Button */}
                          <button
                            onClick={() => openGallery(index)}
                            className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                          >
                            <Play className="w-4 h-4" />
                            View Full Size
                          </button>
                        </div>
                      </div>

                      {/* Premium Expand Button */}
                      <button
                        onClick={() => openGallery(index)}
                        className="absolute top-6 right-6 glass text-white p-4 rounded-2xl hover:bg-white/20 transition-all duration-300 group/expand hover:scale-110"
                        title="View in full screen"
                      >
                        <div className="relative">
                          <Play className="w-6 h-6 group-hover/expand:scale-110 transition-transform" />
                          <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover/expand:scale-150 transition-transform duration-300"></div>
                        </div>
                      </button>

                      {/* Image Number Indicator */}
                      <div className="absolute top-6 left-6 glass text-white px-4 py-2 rounded-xl">
                        <span className="font-bold">{index + 1}</span>
                        <span className="text-white/70 mx-1">/</span>
                        <span className="text-white/70">{galleryImages.length}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="gallery-nav absolute left-6 top-1/2 transform -translate-y-1/2 glass text-white p-4 rounded-2xl hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                  title="Previous image"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>

                <button
                  onClick={nextImage}
                  className="gallery-nav absolute right-6 top-1/2 transform -translate-y-1/2 glass text-white p-4 rounded-2xl hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                  title="Next image"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </div>

              {/* Enhanced Thumbnail Navigation */}
              <div className="flex justify-center gap-6 mt-10">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`gallery-thumbnail relative group ${
                      currentImageIndex === index ? 'active' : ''
                    }`}
                  >
                    <div className={`relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden transition-all duration-300 ${
                      currentImageIndex === index
                        ? 'ring-4 ring-primary-500 shadow-premium'
                        : 'hover:shadow-lg opacity-70 hover:opacity-100'
                    }`}>
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Overlay for active state */}
                      {currentImageIndex === index && (
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-500/30 to-transparent"></div>
                      )}

                      {/* Play icon overlay */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        currentImageIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}>
                        <div className="glass text-white p-2 rounded-lg">
                          <Play className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Thumbnail Title */}
                    <p className={`text-sm font-medium mt-2 transition-colors duration-300 ${
                      currentImageIndex === index
                        ? 'text-primary-600'
                        : 'text-neutral-600 group-hover:text-neutral-800'
                    }`}>
                      {image.title}
                    </p>
                  </button>
                ))}
              </div>

              {/* Enhanced Progress Indicators */}
              <div className="flex justify-center gap-3 mt-8">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`progress-dot h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      currentImageIndex === index
                        ? 'w-10 bg-gradient-to-r from-primary-500 to-primary-600 active'
                        : 'w-3 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                    title={`View ${galleryImages[index].title}`}
                  ></button>
                ))}
              </div>

              {/* Auto-play Controls */}
              <div className="flex justify-center mt-6">
                <div className="glass px-4 py-2 rounded-xl text-neutral-600 text-sm">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                    Auto-advancing every 5 seconds
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <AboutMe />

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 relative overflow-hidden -mt-1">
        {/* Natural transition */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-emerald-50 to-transparent"></div>

        {/* Natural Background Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full opacity-40 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full opacity-40 blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-yellow-300/15 to-amber-300/15 rounded-full opacity-30 blur-2xl animate-pulse-slow delay-500"></div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-black text-green-900 mb-4">
              What Our <span className="gradient-text">Investors Say</span>
            </h2>
            <p className="text-base text-green-700 max-w-2xl mx-auto">Real stories from satisfied investors who are earning consistent returns</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-premium group bg-white p-8 rounded-3xl shadow-lg border border-neutral-100 hover:shadow-premium relative overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Decorative Element */}
                {/* <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-50 transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-300"></div> */}

                {/* Star Rating */}
                <div className="flex mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform duration-200" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative z-10 mb-6">
                  <div className="text-6xl text-primary-200 font-bold absolute -top-4 -left-2">"</div>
                  <p className="text-neutral-700 text-lg font-medium leading-relaxed pl-8">{testimonial.quote}</p>
                  <div className="text-6xl text-primary-200 font-bold absolute -bottom-8 -right-2 rotate-180">"</div>
                </div>

                {/* Author Info */}
                <div className="border-t border-neutral-100 pt-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-neutral-800 text-lg">{testimonial.name}</p>
                      {testimonial.location && (
                        <p className="text-sm text-neutral-600 font-medium">{testimonial.location}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  <CheckCircle className="w-3 h-3" />
                  Verified
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="inline-flex items-center gap-8 bg-white p-6 rounded-2xl shadow-lg border border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-neutral-800">100+</p>
                  <p className="text-neutral-600 text-sm">Happy Investors</p>
                </div>
              </div>

              <div className="w-px h-12 bg-neutral-200"></div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-neutral-800">4.9/5</p>
                  <p className="text-neutral-600 text-sm">Average Rating</p>
                </div>
              </div>

              <div className="w-px h-12 bg-neutral-200"></div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-neutral-800">₹100Cr+</p>
                  <p className="text-neutral-600 text-sm">Invested</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-400 rounded-full blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Own Profitable <span className="gradient-text">Farmland?</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-100 mb-3 max-w-3xl mx-auto">Let's Talk</p>
            <p className="text-base text-primary-200 mb-8 max-w-2xl mx-auto">Fill out the form below and our team will reach out to you within 24 hours</p>
          </div>

          <div className="max-w-lg mx-auto animate-scale-in">
            <div className="glass p-10 rounded-3xl shadow-premium border border-white/20 backdrop-blur-md">
              <div className="space-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-6 py-4 rounded-2xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm group-hover:bg-white/20"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 rounded-2xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm group-hover:bg-white/20"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <div className="relative group">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-6 py-4 rounded-2xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm group-hover:bg-white/20"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <div className="relative group">
                  <select className="w-full px-6 py-4 rounded-2xl border border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm group-hover:bg-white/20">
                    <option value="" className="text-neutral-800">Investment Interest</option>
                    <option value="1-acre" className="text-neutral-800">₹29L - 1 Acre</option>
                    <option value="2-acre" className="text-neutral-800">₹55L - 2 Acres</option>
                    <option value="custom" className="text-neutral-800">Custom Investment</option>
                  </select>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <button className="btn-premium w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow-orange flex items-center justify-center gap-3 group">
                  <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Get Started Today
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>100% Secure</span>
                  </div>
                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>No Spam</span>
                  </div>
                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>24h Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & FAQ */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="animate-slide-up">
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-neutral-800">
                Contact
                <span className="gradient-text">Information</span>
              </h3>
              <div className="space-y-8">
                <div className="card-premium group flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-800 text-lg mb-1">Call/WhatsApp</p>
                    <p className="text-neutral-600 text-lg">+91 90084 08888</p>
                    <p className="text-neutral-500 text-sm">Available 24/7</p>
                  </div>
                </div>

                {/* <div className="card-premium group flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-800 text-lg mb-1">Email</p>
                    <p className="text-neutral-600 text-lg">info@agrifarms.com</p>
                    <p className="text-neutral-500 text-sm">Response within 24 hours</p>
                  </div>
                </div> */}

                <div className="card-premium group flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-800 text-lg mb-1">Office Location</p>
                    <p className="text-neutral-600 text-lg">Bangalore, Karnataka</p>
                    <p className="text-neutral-500 text-sm">Visit by appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-neutral-800">
                Trust &
                <span className="gradient-text">FAQs</span>
              </h3>
              <p className="text-xl font-semibold mb-8 text-neutral-700">Clear answers to common questions</p>

              <div className="space-y-6">
                <div className="card-premium bg-white p-6 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-800 mb-3 text-lg">Is the land registered in my name?</p>
                      <p className="text-neutral-600 leading-relaxed">Yes, you get clear legal title registered in your name with complete documentation and transparency.</p>
                    </div>
                  </div>
                </div>

                <div className="card-premium bg-white p-6 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-800 mb-3 text-lg">What are the key benefits?</p>
                      <p className="text-neutral-600 leading-relaxed">Premium crops like dates, avocados and exotic fruits targeted at local and online markets with guaranteed returns.</p>
                    </div>
                  </div>
                </div>

                <div className="card-premium bg-white p-6 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-800 mb-3 text-lg">How secure is my investment?</p>
                      <p className="text-neutral-600 leading-relaxed">100% legal protection with clear title deeds, professional management, and transparent operations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600 to-accent-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-black mb-4">
                <span className="gradient-text">Agricultural Real Estate</span>
              </h3>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Transforming agriculture through premium farmland investments and professional management
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 mb-8 text-neutral-300">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-400" />
                <span>100% Legal</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent-400" />
                <span>30%+ Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                <span>100+ Investors</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>IIM Alumni Led</span>
              </div>
            </div>

            <div className="border-t border-neutral-700 pt-8">
              <p className="text-neutral-500">© 2025 Agricultural Real Estate. All rights reserved.</p>
              <p className="text-neutral-600 text-sm mt-2">Invest in India's most rewarding agri real estate</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Full-Screen Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 glass text-white p-3 rounded-xl hover:bg-white/20 transition-all duration-300 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 glass text-white px-4 py-2 rounded-xl z-10">
            <span className="font-medium">{currentImageIndex + 1} / {galleryImages.length}</span>
          </div>

          {/* Main Image Container */}
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].title}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-premium"
              />

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 glass text-white p-6 rounded-b-2xl">
                <h3 className="text-2xl font-bold mb-2">{galleryImages[currentImageIndex].title}</h3>
                <p className="text-white/90">{galleryImages[currentImageIndex].description}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 glass text-white p-4 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 glass text-white p-4 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Strip */}
          {galleryImages.length > 1 && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    currentImageIndex === index
                      ? 'ring-2 ring-white scale-110'
                      : 'opacity-60 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}



      {/* Gallery Modal */}
      <GalleryModal
        isGalleryOpen={isGalleryOpen}
        closeGallery={closeGallery}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        galleryImages={galleryImages}
        prevImage={prevImage}
        nextImage={nextImage}
      />

      {/* Floating Action Button */}
      <FloatingActionButton
        activeCard={activeCard}
        setActiveCard={setActiveCard}
      />
    </div>
    </>
  );
};

export default AgriLandingPage;