import React, { useState, useEffect } from 'react';
import { CheckCircle, X, Star, TrendingUp, Shield, BarChart3, LineChart } from 'lucide-react';

const PricingComparison = () => {
  const comparisonData = [
    {
      feature: "Investment Amount",
      us: "₹29L per acre",
      competitor1: "₹39.99L per acre",
      competitor2: "₹1Cr+ per acre",
      competitor3: "₹1.2Cr per acre",
      highlight: true
    }
  ];

  const getIcon = (value, isUs = false) => {
    if (isUs) {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
    
    if (value.includes("Tax-Free") || value.includes("16%") || value.includes("₹29L") || 
        value.includes("Clear Title") || value.includes("Professional") || 
        value.includes("Premium") || value.includes("Unlimited") || value.includes("Flexible")) {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    } else if (value.includes("Taxable") || value.includes("Self-Managed") || 
               value.includes("No Exit") || value.includes("Limited")) {
      return <X className="w-5 h-5 text-red-400" />;
    } else {
      return <CheckCircle className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 relative overflow-hidden -mt-1">
      {/* Natural transition */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-50 to-transparent"></div>
      
      {/* Natural Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full opacity-40 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full opacity-40 blur-3xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-yellow-300/15 to-amber-300/15 rounded-full opacity-30 blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black text-green-900 mb-4">
             Competitive<span className="gradient-text"> Landscape</span>
          </h2>
          <p className="text-base text-black max-w-3xl mx-auto">Compare our offering with other agricultural investment platforms and see the clear advantage</p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Comparison Table */}
          <div className="card-premium bg-gradient-to-br from-white/95 to-green-50/95 backdrop-blur-sm rounded-3xl shadow-premium border border-green-200/50 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <div className="font-bold text-lg">Features</div>
              <div className="text-center relative">
                {/* Enhanced highlight background */}
                <div className="absolute -top-3 -left-3 -right-3 -bottom-3 bg-gradient-to-r from-yellow-400/30 to-amber-400/30 rounded-xl animate-pulse"></div>
                <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-xl"></div>

                {/* Crown icon */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="relative flex items-center justify-center gap-2 py-2">
                  <Star className="w-5 h-5 text-yellow-300 animate-pulse" />
                  <span className="font-black text-lg text-white drop-shadow-lg">Farmties</span>
                  <Star className="w-5 h-5 text-yellow-300 animate-pulse" />
                </div>

                {/* Winner badge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  {/* <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    BEST VALUE
                  </span> */}
                </div>
              </div>
              <div className="text-center font-bold text-lg">Gosmartagro</div>
              <div className="text-center font-bold text-lg">HosachiGuru</div>
              <div className="text-center font-bold text-lg">Mangomist Farms</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-green-200/50">
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-5 gap-4 p-6 hover:bg-green-50/50 transition-all duration-300 ${
                    row.highlight ? 'bg-green-50/30' : ''
                  }`}
                >
                  {/* Feature Name */}
                  <div className="font-semibold text-black flex items-center gap-3">
                    {row.highlight && <TrendingUp className="w-5 h-5 text-green-500" />}
                    {row.feature}
                  </div>

                  {/* Our Platform */}
                  <div className="text-center relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl blur-lg animate-pulse"></div>

                    <div className="relative inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl border-2 border-yellow-400 shadow-xl transform hover:scale-105 transition-all duration-300">
                      {/* Sparkle effects */}
                      <div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-pulse delay-500"></div>

                      {getIcon(row.us, true)}
                      <span className="font-black text-white text-lg drop-shadow-lg">{row.us}</span>

                      {/* Winner icon */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* Savings badge */}
                    {/* <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                        SAVES ₹7L-₹91L
                      </span>
                    </div> */}
                  </div>

                  {/* Competitor A */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100/80 rounded-xl border border-gray-300/50">
                      {getIcon(row.competitor1)}
                      <span className="text-gray-700">{row.competitor1}</span>
                    </div>
                  </div>

                  {/* Competitor B */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100/80 rounded-xl border border-gray-300/50">
                      {getIcon(row.competitor2)}
                      <span className="text-gray-700">{row.competitor2}</span>
                    </div>
                  </div>

                  {/* Competitor C */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100/80 rounded-xl border border-gray-300/50">
                      {getIcon(row.competitor3)}
                      <span className="text-gray-700">{row.competitor3}</span>
                    </div>
                  </div>

                  {/* Competitor D */}
                  {/* <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-gray-100/80 rounded-lg border border-gray-300/50">
                      {getIcon(row.competitor4)}
                      <span className="text-gray-700 text-xs">{row.competitor4}</span>
                    </div>
                  </div> */}
                </div>
              ))}
            </div>

            {/* Table Footer */}
            {/* <div className="p-8 bg-gradient-to-r from-green-50/80 to-emerald-50/80 border-t border-green-200/50">
              <div className="text-center">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-premium transition-all duration-300 transform hover:scale-105 cursor-pointer group">
                  <Shield className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-lg">Choose the Clear Winner - Start Your Investment Today</span>
                  <TrendingUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div> */}
          </div>

          {/* Additional Benefits
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="card-premium bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-green-200/50 text-center group hover:shadow-premium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Highest Returns</h3>
              <p className="text-green-700">Industry-leading 16%+ annual returns with complete tax benefits</p>
            </div>

            <div className="card-premium bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-green-200/50 text-center group hover:shadow-premium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Complete Ownership</h3>
              <p className="text-green-700">Clear title deeds in your name, not just lease agreements</p>
            </div>

            <div className="card-premium bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-green-200/50 text-center group hover:shadow-premium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Premium Service</h3>
              <p className="text-green-700">Professional management with unlimited site access</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
