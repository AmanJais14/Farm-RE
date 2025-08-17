import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  TrendingUp,
  Shield,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Star,
  ArrowRight,
  CheckCircle,
  Play,
  ChevronLeft,
  ChevronRight,
  X,
  MessageCircle,
  Map,
} from "lucide-react";
import {
  submitContactForm,
  validateFormData,
  formatFormData,
} from "./services/formService";

// Import components
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import HighLights from "./components/HighLights/HighLights";
import CollapsibleSections from "./components/CollapsibleSections/CollapsibleSections";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import InviteFriend from "./components/InviteFriend/InviteFriend";
import FloatingActionButton from "./components/FloatingActionButton/FloatingActionButton";
import GalleryModal from "./components/Gallery/GalleryModal";
import AnimatedCounters from "./components/common/AnimatedCounters";
import SalesChannel from "./components/SalesChannel/SalesChannel";
import OurInvestors from "./components/OurInvestors/OurInvestors";
import OurVision from "./components/OurVision/OurVision";

// Import assets
import farm from "./assets/farm.jpg";
import satellite from "./assets/satellite3.png";

// Import Gallery2 assets
import img1 from "./assets/gallery2/img1.jpg";
import img2 from "./assets/gallery2/img2.jpg";
import img3 from "./assets/gallery2/img3.jpg";
import img4 from "./assets/gallery2/img4.jpg";
import img5 from "./assets/gallery2/img5.png";
import vdo1 from "./assets/gallery2/vdo1.mp4";
import vdo2 from "./assets/gallery2/vdo2.mp4";
import vdo3 from "./assets/gallery2/vdo3.mp4";
import vdo4 from "./assets/gallery2/vdo4.mp4";
import vdo6 from "./assets/gallery2/vdo6.mp4";
import vdo7 from "./assets/gallery2/vdo7.mp4";

const AgriLandingPage = () => {
  const [activeTab, setActiveTab] = useState("investment");
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [counters, setCounters] = useState({
    investors: 0,
    investment: 0,
    returns: 0,
    experience: 0,
  });
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const heroRef = useRef(null);

  // Form state management
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    investmentInterest: "",
    slotDateTime: "",
    notes: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // Form handling functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Format and validate form data
    const formattedData = formatFormData(formData);
    const validation = validateFormData(formattedData);

    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    try {
      const docId = await submitContactForm(formattedData);
      setSubmitStatus("success");

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        investmentInterest: "",
        slotDateTime: "",
        notes: "",
      });

      // Show success message for 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");

      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);

    // Scroll tracking for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Gallery media data (4 images + 4 videos from Gallery2)
  const galleryImages = [
    {
      src: vdo1,
      type: "video",
      title: "Farm Operations",
      description:
        "Live footage of our professional farming operations and crop management",
    },
    
    
    {
      src: img1,
      type: "image",
      title: "Premium Farmland",
      description:
        "Lush green farmland with optimal soil conditions for premium crop cultivation",
    },
    {
      src: vdo6,
      type: "video",
      title: "Farm Operations",
      description: "Irrigation",
    },
    
    {
      src: img2,
      type: "image",
      title: "Modern Agriculture",
      description:
        "State-of-the-art farming techniques ensuring maximum yield and sustainability",
    },
    {
      src: vdo7,
      type: "video",
      title: "Farm Operations",
      description:
        "Live footage of our professional farming operations and crop management",
    },
    {
      src: vdo2,
      type: "video",
      title: "Irrigation Systems",
      description: "Advanced irrigation and water management systems in action",
    },
    {
      src: img3,
      type: "image",
      title: "Expert Management",
      description:
        "Professional agricultural management with years of experience in crop optimization",
    },
    {
      src: vdo3,
      type: "video",
      title: "Crop Cultivation",
      description:
        "Premium crop cultivation techniques and sustainable farming practices",
    },
    {
      src: img4,
      type: "image",
      title: "Premium Location",
      description:
        "Strategically located farmland with excellent connectivity and infrastructure",
    },
    {
      src: vdo4,
      type: "video",
      title: "Harvest Season",
      description:
        "Harvest operations showcasing the quality and yield of our premium crops",
    },
    // {
    //   src: img5,
    //   type: "image",
    //   title: "Premium Farmland",
    //   description:
    //     "Lush green farmland with optimal soil conditions for premium crop cultivation",
    // },
  ];

  // Gallery navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
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
        if (e.key === "ArrowLeft") {
          prevImage();
        } else if (e.key === "ArrowRight") {
          nextImage();
        } else if (e.key === "Escape") {
          closeGallery();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isGalleryOpen]);

  // Prevent body scroll when gallery is open
  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isGalleryOpen]);

  // Animated counters
  useEffect(() => {
    if (isCounterVisible) {
      const targets = {
        investors: 500,
        investment: 100,
        returns: 16,
        experience: 3,
      };

      const duration = 2000; // 2 seconds
      const steps = 60; // 60 fps
      const increment = duration / steps;

      Object.keys(targets).forEach((key) => {
        let current = 0;
        const target = targets[key];
        const step = target / steps;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
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
      name: "Komal Prajapati, IIT Madras",
      quote:
        "I partnered with Farmties in 2023, and the experience has been exceptional. The operations are expertly managed, leaving me with no day-to-day worries. Their large-scale model provides cost advantages that no other player in the market can match. The founder’s solid decade-long experience in the agri sector truly reflects in the efficiency and success of the project",
    },
    {
      name: "Swadha Jaiswal, NID Bangalore",
      quote:
        "I had never tasted fresh Barhi dates before, and the farm visit completely changed my perspective. The natural sweetness and unique texture were unlike anything I had tried earlier. Walking through the orchards, seeing the crops up close, and meeting the farmers gave me a real sense of connection to the land. That experience convinced me this was a rare and meaningful investment opportunity",
    },
    {
      name: "Uttra Rana, Deloitte",
      // location: 'Investing in the US for 5 years',
      quote:
        "I became an early investor in Farmties with their 200-acre project in 2022. From day one, the land development and farm management have been handled with exceptional professionalism. The community feedback has been consistently positive, and seeing the produce already available in quick commerce platforms is reassuring. Overall, it has been a smooth and satisfying experience.",
    },
  ];

  const steps = [
    "Choose your land",
    "₹20 acres or ₹55L (2 acres)",
    "Sign investor agreement",
    "Make payment",
    "Farming begins immediately",
    "Year 1",
    "Site visits",
    "Year 3",
    "Harvest appreciation & resale",
  ];

  return (
    <>
      {/* Premium CSS Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

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
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
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
          content: "";
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.3),
            transparent
          );
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
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 900;
          letter-spacing: -0.02em;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          scrollY={scrollY}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          counters={counters}
        />

        {/* Content Wrapper with Extra Horizontal Padding */}
        {/* <div className="px-4 md:px-12 lg:px-12 xl:px-16"> */}
        {/* HighLights Section */}
        <HighLights />

        {/* Collapsible Sections: Investment Landscape, Overview & Pricing Comparison */}
        <CollapsibleSections
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          counters={counters}
        />

        {/* CAGR Growth - Now moved to CollapsibleSections after Investment Asset Class */}
        {/* </div> */}

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
        <HowItWorks />

        {/* Content Wrapper with Extra Horizontal Padding */}
        <div className="">
          {/* Payment Schedule */}
          {/* <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 relative overflow-hidden -mt-1"> */}
            {/* Natural transition */}
            {/* <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-emerald-50 to-transparent"></div> */}

            {/* Natural Background Pattern */}
            {/* <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-float"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-300/15 to-amber-300/15 rounded-full blur-2xl animate-pulse-slow"></div>
            </div> */}

            {/* <div className="container mx-auto px-6 relative">
              <div className="text-center mb-8 animate-fade-in">
                <h2 className="text-xl md:text-2xl font-black text-green-900 mb-2">
                  Payment <span className="gradient-text">Schedule</span>
                </h2>
                <p className="text-xs text-black max-w-2xl mx-auto">
                  Clear milestones to secure your farmland investment
                </p>
              </div> */}

              {/* <div className="max-w-5xl mx-auto"> */}
                {/* <div className="card-premium bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-premium border border-green-300/50 relative overflow-hidden"> */}
                  {/* Natural Decorative Elements */}
                  {/* <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full opacity-50 transform translate-x-20 -translate-y-20"></div> */}

                  {/* Horizontal Grid Layout */}
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative"> */}
                    {/* Step 1: Sale Agreement */}
                    {/* <div className="group text-center">
                      <div className="relative">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <h3 className="text-base md:text-sm font-bold text-green-800">
                            Sale Agreement
                          </h3>
                          <div className="w-5 h-5 bg-gradient-to-br from-green-200 to-green-200 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                          </div>
                        </div> */}
                        {/* <p className="text-green-700 text-xs md:text-xs">Initial payment after signing the sale agreement</p> */}
                      {/* </div>
                      <div className="relative mx-auto mb-4">
                        <div className="w-20 h-20 text-center bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                          <span className="text-white font-bold text-md">
                            14.95 L
                          </span>
                        </div>
                      </div> */}
                      {/* <div className="flex justify-center">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded-full shadow-md`}
                        > */}
                          {/* <Clock className="w-3 h-3" /> */}
                          {/* 0-7 days post launch
                        </span>
                      </div>
                    </div> */}

                    {/* Step 2: Land Registration */}
                    {/* <div className="group text-center">
                      <div className="relative">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <h3 className="text-base md:text-sm font-bold text-green-800">
                            Land Registration
                          </h3>
                          <div className="w-5 h-5 bg-gradient-to-br from-green-200 to-green-200 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                          </div>
                        </div> */}
                        {/* <p className="text-green-700 text-xs md:text-xs">Payment when Land is registered in your name</p> */}
                      {/* </div> */}
                      {/* <div className="relative mx-auto mb-4">
                        <div className="w-20 h-20 text-center bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                          <span className="text-white font-bold text-md">
                            14.95 L
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded-full shadow-md`}
                        > */}
                          {/* <Clock className="w-3 h-3" /> */}
                          {/* 0-60 days post
                        </span>
                      </div>
                    </div> */}

                    {/* Step 3: Development Start */}
                    {/* <div className="group text-center">
                  <div className="relative mx-auto mb-4">
                    <div className="w-20 h-20 text-center bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                      <span className="text-white font-bold text-lg">9.9Lac</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <h3 className="text-base md:text-sm font-bold text-green-800">Pre Development</h3>
                      <div className="w-5 h-5 bg-gradient-to-br from-green-200 to-green-200 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                    </div> */}
                    {/* <p className="text-green-700 text-xs md:text-xs">Final payment when infrastructure development begins</p> */}
                    {/* </div>
                </div> */}
                  {/* </div> */}

                  {/* Trust Badge */}
                  {/* <div className="mt-3 pt-8 border-t border-green-200/50">
                    <div className="flex items-center justify-center gap-4 text-black"> */}
                      {/* <Shield className="w-6 h-6 text-green-500" /> */}
                      {/* <span className="font-medium text-sm">
                        100% Transparent & Legally Protected
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* Premium Gallery Carousel */}
          <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 relative overflow-hidden -mt-1">
            {/* Natural transition */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-emerald-50 to-transparent"></div>

            {/* Natural Background Elements */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full opacity-40 blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full opacity-40 blur-3xl animate-float delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-yellow-300/15 to-amber-300/15 rounded-full opacity-30 blur-2xl animate-pulse-slow"></div>

            <div className="container mx-auto px-6 relative">
              <div className="text-center mb-8 animate-fade-in">
                <h2 className="text-xl md:text-2xl font-black text-green-900 ">
                  Farm <span className="gradient-text">Gallery</span>
                </h2>
                {/* <p className="text-xs text-green-700 max-w-2xl mx-auto">Explore our premium farmland and see the quality of our agricultural operations</p> */}
                <div className="flex justify-center mt-1">
                  <div className="glass px-3 py-1 rounded-xl text-neutral-600 text-xs">
                    <span className="text-xs sm:text-sm text-black flex items-center gap-1">
                      {/* <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></div> */}
                      Explore the picture shot at our existing farmland project.
                    </span>
                  </div>
                </div>
              </div>

              {/* Gallery Carousel */}
              <div className="max-w-5xl mx-auto px-4 md:px-0">
                <div className="relative group gallery-container">
                  {/* Main Carousel Container */}
                  <div className="relative h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-premium bg-green-50 border border-green-200/50">
                    <div
                      className="flex transition-transform duration-2000 ease-in-out h-full gallery-slide"
                      style={{
                        transform: `translateX(-${currentImageIndex * 100}%)`,
                      }}
                    >
                      {galleryImages.map((media, index) => (
                        <div
                          key={index}
                          className="w-full h-full flex-shrink-0 relative group/slide"
                        >
                          {media.type === "video" ? (
                            <video
                              src={media.src}
                              className="w-full h-full object-cover gallery-image loaded transition-transform duration-500 group-hover/slide:scale-105"
                              autoPlay
                              loop
                              muted
                              playsInline
                            />
                          ) : (
                            <img
                              src={media.src}
                              alt={media.title}
                              className="w-full h-full object-cover gallery-image loaded transition-transform duration-500 group-hover/slide:scale-105"
                              loading="lazy"
                            />
                          )}

                          {/* Premium Gradient Overlay */}
                          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div> */}

                          {/* Media Info */}
                          {/* <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white animate-slide-up">
                        <div className="glass p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20">
                          <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 gradient-text-primary">{media.title}</h3>
                          <p className="text-xs sm:text-sm text-white/90 leading-relaxed hidden sm:block">{media.description}</p>
                        </div>
                      </div> */}

                          {/* Premium Expand Button */}
                          <button
                            onClick={() => openGallery(index)}
                            className="absolute top-2 sm:top-4 right-2 sm:right-4 glass text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl hover:bg-white/20 transition-all duration-300 group/expand hover:scale-110"
                            title="View in full screen"
                          >
                            <div className="relative">
                              <Play className="w-3 h-3 sm:w-4 sm:h-4 group-hover/expand:scale-110 transition-transform" />
                              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover/expand:scale-150 transition-transform duration-300"></div>
                            </div>
                          </button>

                          {/* Image Number Indicator */}
                          {/* <div className="absolute top-4 left-4 glass text-white px-3 py-1 rounded-xl">
                          <span className="font-bold text-sm">{index + 1}</span>
                          <span className="text-white/70 mx-1">/</span>
                          <span className="text-white/70">{galleryImages.length}</span>
                        </div> */}
                        </div>
                      ))}
                    </div>

                    {/* Enhanced Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="gallery-nav absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 glass text-white p-2 sm:p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-white/20 transition-all duration-300 opacity-70 sm:opacity-0 group-hover:opacity-100 hover:scale-110"
                      title="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </button>

                    <button
                      onClick={nextImage}
                      className="gallery-nav absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 glass text-white p-2 sm:p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-white/20 transition-all duration-300 opacity-70 sm:opacity-0 group-hover:opacity-100 hover:scale-110"
                      title="Next image"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </button>
                  </div>

                  {/* Enhanced Thumbnail Navigation */}
                  {/* <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 overflow-x-auto pb-2 px-4 md:px-0">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`gallery-thumbnail relative group flex-shrink-0 ${
                      currentImageIndex === index ? 'active' : ''
                    }`}
                  >
                    <div className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                      currentImageIndex === index
                        ? 'ring-2 sm:ring-4 ring-primary-500 shadow-premium'
                        : 'hover:shadow-lg opacity-70 hover:opacity-100'
                    }`}>
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />

                      Overlay for active state
                      {currentImageIndex === index && (
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-500/30 to-transparent"></div>
                      )}

                      Play icon overlay
                      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        currentImageIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}>
                        <div className="glass text-white p-2 rounded-lg">
                          <Play className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    Thumbnail Title
                    <p className={`text-xs font-medium mt-2 transition-colors duration-300 ${
                      currentImageIndex === index
                        ? 'text-primary-600'
                        : 'text-neutral-600 group-hover:text-neutral-800'
                    }`}>
                      {image.title}
                    </p>
                  </button>
                ))}
              </div> */}

                  {/* Enhanced Progress Indicators */}
                  {/* <div className="flex justify-center gap-3 mt-8">
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
              </div> */}

                  {/* Auto-play Controls */}
                  {/* <div className="flex justify-center mt-4">
                <div className="glass px-3 py-1 rounded-xl text-neutral-600 text-xs">
                  <span className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></div>
                    Clicked at Actual location
                  </span>
                </div>
              </div> */}
                </div>
              </div>
            </div>
          </section>

          {/* Our Sales Channel Section */}
          <SalesChannel />

          {/* Our Investors Section */}
          <OurInvestors />

          {/* About Me Section */}
          <AboutMe />

          {/* Testimonials */}
          <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 relative overflow-hidden -mt-1">
            {/* Natural transition */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-emerald-50 to-transparent"></div>

            {/* Natural Background Elements */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full opacity-40 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full opacity-40 blur-3xl animate-pulse-slow delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-yellow-300/15 to-amber-300/15 rounded-full opacity-30 blur-2xl animate-pulse-slow delay-500"></div>

            <div className="container mx-auto px-6 relative">
              <div className="text-center mb-8 animate-fade-in">
                <h2 className="text-xl md:text-2xl font-black text-green-900 mb-2">
                  What Our <span className="gradient-text">Investors Say</span>
                </h2>
                <p className="text-xs sm:text-sm text-black max-w-2xl mx-auto">
                  Real stories from satisfied investors who are earning
                  consistent returns
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="card-premium group bg-white p-6 rounded-3xl shadow-lg border border-neutral-100 hover:shadow-premium relative overflow-hidden animate-scale-in flex flex-col h-45"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Decorative Element */}
                    {/* <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-50 transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-300"></div> */}

                    {/* Star Rating */}
                    <div className="flex justify-center mb-4 relative z-10">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform duration-200"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="relative z-10 mb-4 flex-1 overflow-hidden">
                      <div className="text-4xl text-primary-200 font-bold absolute -top-2 -left-1 z-20">
                        "
                      </div>
                      <div className="h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-100 pr-2">
                        <p className="text-neutral-700 text-sm font-medium leading-relaxed pl-6 text-left">
                          {testimonial.quote}
                        </p>
                      </div>
                      <div className="text-4xl text-primary-200 font-bold absolute -bottom-4 -right-1 rotate-180 z-20">
                        "
                      </div>
                    </div>

                    {/* Author Info */}
                    <div className="border-t border-neutral-100 pt-4 relative z-10 mt-auto mb-6 ">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-neutral-800 text-sm">
                            {testimonial.name}
                          </p>
                          {/* {testimonial.location && (
                        <p className="text-xs text-neutral-600 font-medium">{testimonial.location}</p>
                      )} */}
                        </div>
                      </div>
                    </div>

                    {/* Verified Badge */}
                    <div className=" absolute bottom-4 right-4 flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              {/* <div className="mt-8 sm:mt-12 md:mt-16 text-center animate-fade-in"> */}
              {/* <div className="inline-block bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-neutral-100 max-w-full"> */}
              {/* Mobile: Vertical Stack */}
              {/* <div className="flex flex-col sm:hidden gap-4">
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-neutral-800 text-sm">50+</p>
                    <p className="text-neutral-600 text-xs">Happy Investors</p>
                  </div>
                </div>

                <div className="h-px bg-neutral-200 mx-4"></div>

                <div className="flex items-center gap-3 justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-neutral-800 text-sm">4.9/5</p>
                    <p className="text-neutral-600 text-xs">Average Rating</p>
                  </div>
                </div>

                <div className="h-px bg-neutral-200 mx-4"></div>

                <div className="flex items-center gap-3 justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-neutral-800 text-sm">₹100Cr+</p>
                    <p className="text-neutral-600 text-xs">Invested</p>
                  </div>
                </div>
              </div> */}

              {/* Desktop: Horizontal Layout */}
              {/* <div className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-neutral-800">50+</p>
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
              </div> */}
              {/* </div> */}
              {/* </div> */}
            </div>
          </section>

          {/* Our Vision Section */}
          <OurVision />

          {/* Invite a Friend Section */}
          {/* <InviteFriend /> */}

          {/* CTA Section */}
          <section
            id="contact-form"
            className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-400 rounded-full blur-3xl animate-float delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 text-center relative">
              <div className="animate-fade-in">
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-6">
                  Ready to Own Profitable{" "}
                  <span className="gradient-text">Farmland?</span>
                </h2>
                {/* <p className="text-sm md:text-base text-primary-100 mb-2 max-w-3xl mx-auto">Schedule a Visit</p> */}
                {/* <p className="text-xs text-primary-200 mb-4 sm:mb-6 max-w-2xl mx-auto">Fill out the form below and our team will reach out to you within 24 hours</p> */}
              </div>

              <div className="max-w-lg mx-auto animate-scale-in px-4 sm:px-0">
                <div className="glass p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-premium border border-white/20 backdrop-blur-md">
                  {/* Success/Error Messages */}
                  {submitStatus === "success" && (
                    <div className="mb-4 p-3 bg-green-500/20 border border-green-400/50 rounded-xl text-green-100 text-sm text-center">
                      ✅ Thank you! Your request has been submitted
                      successfully. We'll contact you soon.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="mb-4 p-3 bg-red-500/20 border border-red-400/50 rounded-xl text-red-100 text-sm text-center">
                      ❌ Something went wrong. Please try again or contact us
                      directly.
                    </div>
                  )}

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="relative group">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className={`w-full px-4 py-3 rounded-2xl border ${
                          formErrors.fullName
                            ? "border-red-400"
                            : "border-white/20"
                        } bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm group-hover:bg-white/20 text-sm`}
                        required
                      />
                      {formErrors.fullName && (
                        <p className="text-red-300 text-xs mt-1">
                          {formErrors.fullName}
                        </p>
                      )}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address (Optional)"
                        className={`w-full px-4 py-3 rounded-2xl border ${
                          formErrors.email
                            ? "border-red-400"
                            : "border-white/20"
                        } bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm group-hover:bg-white/20 text-sm`}
                        
                      />
                      {formErrors.email && (
                        <p className="text-red-300 text-xs mt-1">
                          {formErrors.email}
                        </p>
                      )}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <div className="relative group">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className={`w-full px-4 py-3 rounded-2xl border ${
                          formErrors.phone
                            ? "border-red-400"
                            : "border-white/20"
                        } bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm group-hover:bg-white/20 text-sm`}
                        required
                      />
                      {formErrors.phone && (
                        <p className="text-red-300 text-xs mt-1">
                          {formErrors.phone}
                        </p>
                      )}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <div className="relative group">
                      <select
                        name="investmentInterest"
                        value={formData.investmentInterest}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-2xl border ${
                          formErrors.investmentInterest
                            ? "border-red-400"
                            : "border-white/20"
                        } bg-white/10 text-white focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm group-hover:bg-white/20 text-sm`}
                        required
                      >
                        <option value="" className="text-neutral-800">
                          Investment Interest
                        </option>
                        <option value="1-acre" className="text-neutral-800">
                          1 Acre
                        </option>
                        <option value="2-3 acre" className="text-neutral-800">
                          2-3 Acre
                        </option>
                        <option value="3-5 acre" className="text-neutral-800">
                          3-5 Acre
                        </option>
                        <option value="5+ acre" className="text-neutral-800">
                          5+ Acre
                        </option>
                        {/* <option value="2-acre" className="text-neutral-800">₹55L - 2 Acres</option> */}
                        {/* <option value="custom" className="text-neutral-800">Custom Investment</option> */}
                      </select>
                      {formErrors.investmentInterest && (
                        <p className="text-red-300 text-xs mt-1">
                          {formErrors.investmentInterest}
                        </p>
                      )}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <div className="relative group">
                      <label className="block text-white/70 text-sm mb-2 font-medium">
                        Book a Slot (Optional)
                      </label>
                      <input
                        type="datetime-local"
                        name="slotDateTime"
                        value={formData.slotDateTime}
                        onChange={handleInputChange}
                        placeholder="Select date and time"
                        className={`w-full px-4 py-3 rounded-2xl border ${
                          formErrors.slotDateTime
                            ? "border-red-400"
                            : "border-white/20"
                        } bg-white/90 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm group-hover:bg-white text-sm appearance-none`}
                        style={{
                          colorScheme: "light",
                        }}
                      />
                      {formErrors.slotDateTime && (
                        <p className="text-red-300 text-xs mt-1">
                          {formErrors.slotDateTime}
                        </p>
                      )}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-premium w-full ${
                        isSubmitting
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                      } text-white py-4 rounded-2xl font-bold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-glow-orange flex items-center justify-center gap-2 group`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          Schedule a visit
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Trust Indicators */}
                {/* <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center justify-center gap-4 text-white/80 text-xs">
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>100% Secure</span>
                  </div>
                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>No Spam</span>
                  </div>
                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    <span>24h Response</span>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </section>

          {/* Contact & FAQ */}
          <section id="contact-info" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative">
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
                <div className="animate-slide-up">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-green-900">
                    Contact
                    <span className="gradient-text"> Information</span>
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="card-premium group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300">
                      <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-neutral-800 text-sm mb-1">
                          Call/WhatsApp
                        </p>
                        <p className="text-neutral-600 text-sm">
                          +91 9379627377
                        </p>
                        <p className="text-neutral-500 text-xs">
                          Available 24/7
                        </p>
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

                    <div className="card-premium group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-lg sm:rounded-2xl border border-neutral-100 hover:shadow-premium transition-all duration-300">
                      <div className="min-w-12 min-h-12 bg-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-neutral-800 text-sm mb-1">
                          Office Location
                        </p>
                        <p className="text-neutral-600 text-[0.85rem]">
                          3A Srinidhi Envoy, 4th Cross, Banaswadi, Bengaluru,
                          Karnataka 560043
                        </p>
                        <p className="text-neutral-500 text-xs">
                          Visit by appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="animate-slide-up"
                  style={{ animationDelay: "200ms" }}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-green-900">
                    F<span className="gradient-text">AQs</span>
                  </h3>
                  {/* <p className="text-sm font-semibold mb-6 text-neutral-700">Clear answers to common questions</p> */}

                  <div className="space-y-3 sm:space-y-4">
                    <div className="card-premium bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300 group">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-green-200 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-bold text-neutral-800 mb-2 text-sm">
                            Is the land registered in my name?
                          </p>
                          <p className="text-neutral-600 leading-relaxed text-xs">
                            Yes, you get clear legal title registered in your
                            name with complete documentation and transparency.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card-premium bg-white p-4 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300 group">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-green-200 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-bold text-neutral-800 mb-2 text-sm">
                            What are the key benefits?
                          </p>
                          <p className="text-neutral-600 leading-relaxed text-xs">
                            Premium crops like dates, avocados and exotic fruits
                            targeted at local and online markets with guaranteed
                            returns.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card-premium bg-white p-4 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-premium transition-all duration-300 group">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-green-200 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                          <Shield className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-bold text-neutral-800 mb-2 text-sm">
                            How secure is my investment?
                          </p>
                          <p className="text-neutral-600 leading-relaxed text-xs">
                            100% legal protection with clear title deeds,
                            professional management, and transparent operations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Satellite Image Section */}
          <section className="bg-white">
            <div
              className="relative cursor-pointer group overflow-hidden w-full h-64 sm:h-80 md:h-98"
              onClick={() => {
                // Replace with your actual farm coordinates
                // Example: window.open('https://maps.google.com/?q=28.6139,77.2090', '_blank');
                window.open(
                  `https://www.google.com/maps/place/13%C2%B057'01.1%22N+77%C2%B034'58.0%22E/@13.9503746,77.5825449,536m/data=!3m1!1e3!4m4!3m3!8m2!3d13.950303!4d77.582768?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D`,
                  "_blank"
                );
              }}
            >
              <img
                src={satellite}
                alt="Farm Satellite View"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Hover overlay with map icon */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full">
                  <Map className="w-6 h-6 text-gray-700" />
                </div>
              </div>

              {/* Click indicator */}
              {/* <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
            Click to view on map
          </div> */}
            </div>
          </section>

          {/* Text Strip Above Footer */}
          <section className="bg-gradient-to-br from-green-500 to-green-800 py-4">
            <div className="container mx-auto px-6 py-3 text-center">
              <p className="text-white font-semibold italic text-sm">
                "Your land-backed, AI-proof income engine. Real farms, real
                produce, real dividends."
              </p>
            </div>
          </section>

          {/* Premium Footer */}
          <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-8 sm:py-10 md:py-12 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600 to-accent-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative">
              <div className="text-center">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-black mb-2">
                    <span className="gradient-text">Exotic Farming</span>
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm max-w-2xl mx-auto">
                    Transforming agriculture through premium farmland
                    investments and professional management
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-4 sm:mb-6 text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-white" />
                    <span className="text-sm">100% Legal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-white" />
                    <span className="text-sm">12-18% Returns</span>
                  </div>
                  {/* <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-white" />
                <span className="text-sm">50+ Investors</span>
              </div> */}
                  {/* <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-white" />
                    <span className="text-sm">IIM Alumni Led</span>
                  </div> */}
                </div>

                <div className="border-t border-neutral-700 pt-6">
                  <p className="text-neutral-500 text-sm">
                    © 2025 All rights reserved.
                  </p>
                  <p className="text-neutral-600 text-xs mt-1">
                    Invest in India's most rewarding agri real estate
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>

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
            {/* <div className="absolute top-6 left-6 glass text-white px-4 py-2 rounded-xl z-10">
              <span className="font-medium">
                {currentImageIndex + 1} / {galleryImages.length}
              </span>
            </div> */}

            {/* Main Media Container */}
            <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                {galleryImages[currentImageIndex].type === "video" ? (
                  <video
                    src={galleryImages[currentImageIndex].src}
                    className="max-w-full max-h-full object-contain rounded-2xl shadow-premium"
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={galleryImages[currentImageIndex].src}
                    alt={galleryImages[currentImageIndex].title}
                    className="max-w-full max-h-full object-contain rounded-2xl shadow-premium"
                  />
                )}

                {/* Media Info Overlay */}

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
                {galleryImages.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                      currentImageIndex === index
                        ? "ring-2 ring-white scale-110"
                        : "opacity-60 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    {media.type === "video" ? (
                      <video
                        src={media.src}
                        className="w-full h-full object-cover"
                        muted
                      />
                    ) : (
                      <img
                        src={media.src}
                        alt={media.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {media.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white drop-shadow-lg" />
                      </div>
                    )}
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
