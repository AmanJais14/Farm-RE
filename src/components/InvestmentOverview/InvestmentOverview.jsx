import React from 'react';
import { MapPin, TrendingUp, Shield, CheckCircle } from 'lucide-react';

const InvestmentOverview = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 relative overflow-hidden -mt-1">
      {/* Natural transition */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-50 to-transparent"></div>
      
      {/* Natural Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full opacity-40 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full opacity-40 blur-3xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-yellow-300/15 to-amber-300/15 rounded-full opacity-30 blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black text-green-900 mb-4">
            Your Investment at a <span className="gradient-text">Glance</span>
          </h2>
          <p className="text-base text-black max-w-3xl mx-auto">Transparent farmland opportunity combining land ownership & premium crop cultivation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Land Ownership Card */}
          <div className="card-premium group bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm p-10 rounded-3xl border border-green-300/50 shadow-lg hover:shadow-premium relative overflow-hidden">
            {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full opacity-50 transform translate-x-12 -translate-y-12"></div> */}

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black">Land Ownership</h3>
            </div>

            <div className="space-y-6 text-black">
              <div className="flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="font-medium text-lg">Clear legal title in your name</span>
              </div>

              <div className="bg-green-50/80 p-6 rounded-xl border border-green-300/50">
                <p className="text-sm font-semibold text-green-600 mb-4">Investment Options</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">1 acre</span>
                    <span className="font-bold text-green-600 text-xl">₹29L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">2 acres</span>
                    <span className="font-bold text-green-600 text-xl">₹55L</span>
                  </div>
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
          <div className="card-premium group bg-gradient-to-br from-white/90 to-emerald-50/90 backdrop-blur-sm p-10 rounded-3xl border border-emerald-300/50 shadow-lg hover:shadow-premium relative overflow-hidden">
            {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full opacity-50 transform translate-x-12 -translate-y-12"></div> */}

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black">Operations</h3>
            </div>

            <div className="space-y-6 text-black">
              <div className="flex justify-between items-center">
                <span className="font-medium text-lg">Location</span>
                <span className="font-semibold text-emerald-600 text-lg">100 km from Bangalore Airport</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border-2 border-yellow-300/50 shadow-lg relative overflow-hidden">
                {/* Highlight background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-amber-200/20 animate-pulse"></div>

                {/* Sparkle effects */}
                <div className="absolute top-1 left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-1 right-2 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse delay-500"></div>

                <div className="relative flex items-center gap-2">
                  <span className="font-medium text-lg text-gray-800">Operated by</span>
                  {/* Trust badge */}
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>

                <div className="relative flex items-center gap-2">
                  <span className="font-bold text-emerald-600 text-lg">IIM Alumni</span>
                  {/* Premium badge */}
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                    PREMIUM
                  </div>
                </div>
              </div>
              <div className="bg-green-50/80 p-6 rounded-xl border border-emerald-300/50">
                <p className="text-sm font-semibold text-emerald-600 mb-4">Premium Crops</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-amber-100/80 text-amber-700 rounded-full text-sm font-medium border border-amber-300/50">Dates</span>
                  <span className="px-4 py-2 bg-green-100/80 text-green-700 rounded-full text-sm font-medium border border-green-300/50">Avocados</span>
                  <span className="px-4 py-2 bg-orange-100/80 text-orange-700 rounded-full text-sm font-medium border border-orange-300/50">Exotic Fruits</span>
                </div>
              </div>
            </div>
          </div>

          {/* Support Card */}
          <div className="card-premium group bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm p-10 rounded-3xl border border-green-300/50 shadow-lg hover:shadow-premium relative overflow-hidden md:col-span-2 lg:col-span-1">
            {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full opacity-50 transform translate-x-12 -translate-y-12"></div> */}

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black">Support</h3>
            </div>

            <div className="space-y-6 text-black">
              <div className="flex justify-between items-center">
                <span className="font-medium text-lg">Service Model</span>
                <span className="font-semibold text-green-600 text-lg">Farmland-as-a-Service</span>
              </div>
              <div className="bg-green-50/80 p-6 rounded-xl border border-green-300/50">
                <p className="text-sm font-semibold text-green-600 mb-4">Price Includes</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-base">Complete development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-base">Professional management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-base">Regular site visits</span>
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
