import React from "react";
import {
  MapPin,
  FileText,
  Home,
  Sprout,
  TrendingUp,
  Calendar,
  CheckCircle,
  Clock,
} from "lucide-react";

const HowItWorks = () => {
  const timelineSteps = [
    // {
    //   id: 1,
    //   icon: MapPin,
    //   title: "Site Visit & Consultation",
    //   description: "Visit our farms and select the best land for your investment",
    //   duration: "Day 1",
    //   timeframe: "Immediate",
    //   color: "from-blue-500 to-blue-600",
    //   bgColor: "bg-blue-50",
    //   borderColor: "border-blue-200"
    // },
    {
      id: 1,
      icon: FileText,
      title: "Sale Agreement",
      description: "Sign the sale agreement",
      duration: "Day 0",
      Price: "₹ 14.95 L",
      color: "from-green-200 to-green-300",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      id: 2,
      icon: Home,
      title: "Land Registration",
      description: "Complete documentation",
      duration: "0-60 days",
      Price: "₹ 14.95 L",
      color: "from-green-300 to-green-400",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    // {
    //   id: 3,
    //   icon: Sprout,
    //   title: "Pre Development",
    //   description: "Irrigation, Procurement, Logistics",
    //   duration: "60-90\ndays",
    //   // Price: "9.9 Lacs",
    //   color: "from-green-400 to-green-500",
    //    bgColor: "bg-green-50",
    //   borderColor: "border-green-200"
    // },
    {
      id: 4,
      icon: Sprout,
      title: "Land Development",
      description: "Premium crops cultivation",
      duration: "60-180 days",
      Price: "₹ 0",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      id: 5,
      icon: TrendingUp,
      title: "Earn Annual Dividends",
      description: "Y3 : 10%+\nY4 onwards: 12-18%",
      duration: "Year 3+",
      // Price: "0",
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 relative overflow-hidden -mt-1">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-100 to-transparent"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-green-400/15 to-emerald-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-400/15 to-green-500/15 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-2  animate-fade-in">
          <h2 className="text-xl sm:text-2xl md:text-2xl font-black text-green-900 mb-2 sm:mb-2">
            Process &<span className="gradient-text"> Payments</span>
          </h2>
          <p className="text-xs sm:text-sm  text-black max-w-2xl mx-auto">
            Simple steps to start your investment journey.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline View */}
          <div className="hidden lg:block">
            <div className="relative max-w-5xl mx-auto">
              {/* Main Timeline Container */}
              <div className="relative  backdrop-blur-sm rounded-3xl p-8 ">
                {/* Central Timeline Line */}
                {/* <div className="absolute top-1/2 left-20 right-20 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full transform -translate-y-1/2 shadow-lg"></div> */}

                {/* Timeline Steps */}
                <div className="flex justify-between items-center relative">
                  {timelineSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className="flex flex-col items-center group animate-slide-up"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {/* Step Circle */}
                      <div
                        className={`leading-relaxed whitespace-pre-line relative w-18 h-18 bg-green-200 text-green-700 rounded-full flex items-center justify-center font-black text-[10px] font-semibold text-center shadow-xl group-hover:scale-110 transition-all duration-300  z-10 mb-6`}
                      >
                        {step.duration}
                        <div
                          className={`absolute inset-0 bg-green-200 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse`}
                        ></div>
                      </div>

                      {/* Content Card */}
                      <div
                        className={`w-40 ${step.bgColor} h-40 p-5 rounded-xl shadow-lg border-2 ${step.borderColor} group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 relative`}
                      >
                        {/* Icon Header */}
                        <div className="flex items-center gap-3 mb-3">
                          {/* <div className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-md`}>
                            <step.icon className="w-4 h-4 text-white" />
                          </div> */}
                          <h3 className="font-bold text-gray-800 text-xs">
                            {step.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-xs mb-4 leading-relaxed whitespace-pre-line">
                          {step.description}
                        </p>

                        {/* price Badge */}
                        {step.Price && (
                          <div className="flex ">
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-100/80 text-orange-700 font-semibold rounded-xl text-xs  border border-orange-300/50`}
                            >
                              {/* <Clock className="w-3 h-3" /> */}{step.Price}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Timeline View */}
          <div className="block lg:hidden">
            <div className="relative max-w-2xl mx-auto">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-300 to-green-400 rounded-full"></div>

              {/* Timeline Steps */}
              <div className="space-y-8 sm:space-y-12">
                {timelineSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className="relative flex items-start gap-6 animate-slide-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Step Circle */}
                    <div
                      className={` text-xs  font-semibold text-center relative flex-shrink-0 w-20 h-20  bg-green-200 text-green-700 rounded-full flex items-center justify-center font-black  shadow-xl border-4  z-10`}
                    >
                      <p className="leading-relaxed whitespace-pre-line">
                        {step.duration}
                      </p>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`flex-1 ${step.bgColor} p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg ${step.borderColor} border-2`}
                    >
                      {/* Icon & Title Row */}
                      <div className="flex items-center gap-3 mb-3">
                        {/* <div className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-md`}>
                          <step.icon className="w-5 h-5 text-white" />
                        </div> */}
                        <h3 className="font-bold text-gray-800 text-base sm:text-lg">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed whitespace-pre-line">
                        {step.description}
                      </p>

                      {/* Duration & Timeframe */}
                      {/* <div className="flex flex-wrap gap-2"> */}
                      {/* <span className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${step.color} text-white text-xs font-semibold rounded-full shadow-md`}>
                          <Clock className="w-3 h-3" />
                          {step.duration}
                        </span> */}
                      {/* <span className="inline-block px-3 py-1 bg-white/80 text-gray-700 text-xs font-medium rounded-full border border-gray-200">
                          {step.timeframe}
                        </span> */}
                      {/* </div> */}
                      {step.Price && (
                        <div className="flex ">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-100/80 text-orange-700 font-semibold rounded-xl text-xs  border border-orange-300/50`}
                          >
                            {/* <Clock className="w-3 h-3" /> */}{step.Price}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className="text-center mt-12 sm:mt-16 animate-fade-in">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 sm:w-6 h-5 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <p className="font-black text-base sm:text-xl">Ready to Start Your Journey?</p>
                  <p className="text-green-100 text-xs sm:text-sm">Book a consultation to learn more</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
