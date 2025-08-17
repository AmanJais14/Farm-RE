import React from 'react';
import { MapPin, TrendingUp, Shield, CheckCircle } from 'lucide-react';

const InvestmentOverview = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 relative overflow-hidden -mt-1">
      {/* Natural transition */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-50 to-transparent"></div>
      
      {/* Natural Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full opacity-40 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full opacity-40 blur-3xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-yellow-300/15 to-amber-300/15 rounded-full opacity-30 blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative max-w-6xl">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-black text-green-900 mb-2">
            Your Investment at a <span className="gradient-text">Glance</span>
          </h2>
          <p className="text-xs sm:text-sm text-black max-w-3xl mx-auto">Transparent farmland opportunity combining land ownership & premium crop cultivation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Land Ownership Card */}
          <div className="card-premium group bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm p-6 rounded-3xl border border-green-300/50 shadow-lg hover:shadow-premium relative overflow-hidden">
            {/* Prelaunch Price Ticker */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-3xl animate-pulse shadow-lg">
              PRELAUNCH PRICE
            </div>

            {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full opacity-50 transform translate-x-12 -translate-y-12"></div> */}

            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-200 to-green-200 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-black">Land Ownership</h3>
            </div>

            <div className="space-y-4 text-black">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="font-medium text-sm">Clear legal title in your name</span>
              </div>

              <div className="bg-green-50/80 p-4  rounded-xl border border-green-300/50">
                <p className="text-xs font-semibold text-emerald-600 mb-3">Investment Options</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">1 Acre</span>
                    <span className="font-bold text-green-600 text-base">₹29.9L</span>
                  </div>
                  {/* <div className="flex justify-between items-center">
                    <span className="text-sm">2 acres</span>
                    <span className="font-bold text-green-600 text-base">₹55L</span>
                  </div> */}
                </div>
              </div>

              {/* <div className="space-y-4">
                <div className="flex justify-between items-center bg-green-200/80 p-4 rounded-xl">
                  <span className="text-lg">Returns</span>
                  <span className="font-bold text-emerald-600 text-xl">4.5 - 5L(Tax-free)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Appreciation</span>
                  <span className="font-bold text-green-600 text-xl">15%+ annually</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Operations Card */}
          <div className="card-premium group bg-gradient-to-br from-white/90 to-emerald-50/90 backdrop-blur-sm p-6 rounded-3xl border border-emerald-300/50 shadow-lg hover:shadow-premium relative overflow-hidden">
            {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full opacity-50 transform translate-x-12 -translate-y-12"></div> */}

            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-200 to-green-200 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-black">Operations</h3>
            </div>

            <div className="space-y-4 text-black">
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm">Location:</span>
                <span className=" text-black font-medium text-sm">100km from <span className='font-extrabold'>Bangalore Airport</span></span>
              </div>
              <div className="bg-green-50/80 p-4 rounded-xl border border-emerald-300/50 flex justify-between items-center shadow-sm relative overflow-hidden">
                {/* Highlight background effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-amber-200/20 animate-pulse"></div> */}

                {/* Sparkle effects */}
                {/* <div className="absolute top-1 left-2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-1 right-2 w-1 h-1 bg-amber-400 rounded-full animate-pulse delay-500"></div> */}

                <div className="relative flex items-center gap-2">
                  <span className="font-medium text-sm text-gray-800">Operated by</span>
                  {/* Trust badge */}
                  {/* <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div> */}
                </div>

                <div className="relative flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-bold text-emerald-600 text-xs">Farmties,IIM Team</span>
                  {/* Premium badge */}
                  {/* <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                    PREMIUM
                  </div> */}
                </div>
              </div>
              <div className="bg-green-50/80 p-4 rounded-xl border border-emerald-300/50">
                <p className="text-xs font-semibold text-emerald-600 mb-3">Premium Crops</p>
                <div className="flex  gap-2">
                  <span className="px-2 py-1 bg-orange-100/80 text-orange-700 font-semibold rounded-xl text-xs  border border-orange-300/50">Fresh Yellow Dates</span>
                  <span className="px-2 py-1 bg-orange-100/80 text-orange-700 font-semibold rounded-xl text-xs  border border-orange-300/50">Avocados</span>
                  {/* <span className="px-2 py-1 bg-orange-100/80 text-orange-700 font-semibold rounded-xl text-xs  border border-orange-300/50">Exotic Fruits</span> */}
                </div>
              </div>
            </div>
          </div>

          {/* Support Card */}
          <div className="card-premium group bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm p-6 rounded-3xl border border-green-300/50 shadow-lg hover:shadow-premium relative overflow-hidden md:col-span-2 lg:col-span-1">
            {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full opacity-50 transform translate-x-12 -translate-y-12"></div> */}

            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-200 to-green-200 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-black">Support</h3>
            </div>

            <div className="space-y-4 text-black">
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm">Service Model:</span>
                <span className="font-extrabold text-black text-sm">Farmland as a Service</span>
              </div>
              <div className="bg-green-50/80 p-4 rounded-xl border border-green-300/50">
                <p className="text-xs font-semibold text-emerald-600 mb-3">Price Includes</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Complete development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Professional management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Regular site visits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOverview;
