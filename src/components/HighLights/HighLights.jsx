import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Shield, TrendingUp, Users, Award } from 'lucide-react';

// Import all images from assets

import farm from '../../assets/farm.jpg';
import landImg1 from '../../assets/land-img1.jpg';
import landImg2 from '../../assets/land-img2.jpg';
import landImg3 from '../../assets/land-img3.jpg';
import landImg4 from '../../assets/land-img4.jpg';
import landImg5 from '../../assets/land-img5.jpg';
import landImg6 from '../../assets/land-img6.jpg';
import landImg7 from '../../assets/land-img7.jpg';
import landImg8 from '../../assets/land-img8.jpg';
import landImg9 from '../../assets/land-img9.jpg';
import landImg10 from '../../assets/land-img10.jpg';
import landImg11 from '../../assets/land-img11.jpg';
import landImg12 from '../../assets/land-img12.jpg';
import landImg13 from '../../assets/land-img13.jpg';
import landImg14 from '../../assets/land-img14.jpg';

const HighLights = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Gallery images for the carousel
  const galleryImages = [
    {
      src: farm,
      alt: "Modern agricultural operations",
      location: "Tamil Nadu, India"
    },
    {
      src: landImg1,
      alt: "Sustainable farming practices",
      location: "Andhra Pradesh, India"
    },
    {
      src: landImg2,
      alt: "Premium crop cultivation",
      location: "Rajasthan, India"
    },
    {
      src: landImg3,
      alt: "Expert farming management",
      location: "Maharashtra, India"
    },
    // {
    //   src: landImg4,
    //   alt: "High-value agricultural land",
    //   location: "Gujarat, India"
    // },
    {
      src: landImg5,
      alt: "Professional farming operations",
      location: "Haryana, India"
    },
    {
      src: landImg6,
      alt: "Advanced irrigation systems",
      location: "Punjab, India"
    },
    {
      src: landImg7,
      alt: "Organic farming techniques",
      location: "Kerala, India"
    },
    {
      src: landImg8,
      alt: "Premium fruit orchards",
      location: "Himachal Pradesh, India"
    },
    {
      src: landImg9,
      alt: "Modern greenhouse facilities",
      location: "Uttar Pradesh, India"
    },
    {
      src: landImg10,
      alt: "Precision agriculture technology",
      location: "Madhya Pradesh, India"
    },
    {
      src: landImg11,
      alt: "Sustainable crop rotation",
      location: "West Bengal, India"
    },
    {
      src: landImg12,
      alt: "High-tech farming equipment",
      location: "Odisha, India"
    },
    {
      src: landImg13,
      alt: "Premium agricultural infrastructure",
      location: "Telangana, India"
    },
    {
      src: landImg14,
      alt: "Expert agricultural consultation",
      location: "Chhattisgarh, India"
    }
  ];

  // Benefits data - 4 key benefits
  const benefits = [
    {
      icon: TrendingUp,
      title: "30% ROI Agriculture Land ",
      description: "Consistent high returns from premium crop cultivation"
    },
    {
      icon: Shield,
      title: "Secure Land Ownership",
      description: "Legal land ownership with complete documentation"
    },
    {
      icon: Users,
      title: "Managed by IIM Alumni",
      description: "Professional team handles all farming operations"
    },
    {
      icon: Award,
      title: "Top Competitive Pricing",
      description: "Clear Investment winner among competitive landscape"
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, galleryImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 relative overflow-hidden -mt-1">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-green-400/15 to-emerald-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-400/15 to-green-500/15 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black text-green-900 mb-4">
             Over<span className="gradient-text">view</span>
          </h2>
          {/* <p className="text-base text-green-700 max-w-2xl mx-auto">
            Discover our premium farmland locations and the benefits of agricultural real estate investment
          </p> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Gallery Carousel */}
          <div className="animate-slide-up">
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-green-200/50">
              {/* Main Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {galleryImages.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50">
                <div className="flex gap-2 justify-center mb-3">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-green-500 scale-125'
                          : 'bg-green-300 hover:bg-green-400'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Location Footer */}
                <div className="flex items-center justify-center gap-2 text-green-700">
                  <MapPin className="w-4 h-4" />
                  <span className="text-md font-medium">
                    Clicked at Actual Location
                    {/* {galleryImages[currentImageIndex].location} */}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="animate-slide-up delay-200">
            <div className="space-y-4">
              <p className="text-black text-lg leading-relaxed text-justify">
                <span className="font-bold text-emerald-600">Agri-Investment:</span> Step into hassle-free, professionally managed organic farming- a sector with soaring global demand.
              </p>

              <p className="text-black text-lg leading-relaxed text-justify">
                <span className="font-bold text-emerald-600">Perfect Neighbourhood + Farmties</span> bring you land-backed ownership in premium crops like fresh dates and avocados- delivering high yields from year three. This is portfolio diversification with steady passive income, tangible land security, and sustainable growth built in.
              </p>

              <p className="text-black text-lg leading-relaxed text-justify">
                Backed by an <span className="font-semibold text-emerald-600">IIM-founded team</span> with more than a decade experience and global investors, we're now opening 300 acres in exclusive, phased releases.
              </p>

              <p className="text-black text-lg leading-relaxed font-bold text-justify">
                <span className="text-emerald-600">Invest smart.</span> <span className="text-black">Own land.</span> <span className="text-emerald-600">Grow wealth.</span>
              </p>

              {/* Decorative elements */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex-1 h-px bg-gradient-to-r from-green-300 to-emerald-300"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                <div className="flex-1 h-px bg-gradient-to-l from-green-300 to-emerald-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Cards Below */}
        {/* <div className="mt-12 animate-slide-up delay-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6"> */}
            {/* {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm rounded-2xl shadow-lg border border-green-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              > */}
                {/* Icon */}
                {/* <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div> */}

                {/* Content */}
                {/* <div>
                  <h3 className="text-lg font-bold text-green-800 mb-2 group-hover:text-green-700 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-green-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div> */}
              {/* </div>
            ))} */}
          {/* </div>
        </div> */}
      </div>
    </section>
  );
};

export default HighLights;
