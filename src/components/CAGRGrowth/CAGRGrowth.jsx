import React from 'react';
import { TrendingUp } from 'lucide-react';
import graphImage from '../../assets/graph.jpg';

const CAGRGrowth = () => {
  return (
    <section
      id="cagr-section"
      className="py-6 sm:py-10 md:py-16 bg-gradient-to-br from-white via-green-50 to-emerald-50 relative overflow-hidden -mt-1"
    >
      {/* Natural transition */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-emerald-50 to-transparent"></div>

      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-green-400/15 to-emerald-400/15 rounded-full opacity-40 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-400/15 to-green-500/15 rounded-full opacity-40 blur-3xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-br from-yellow-300/10 to-amber-300/10 rounded-full opacity-30 blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-4 sm:mb-6 md:mb-8 animate-fade-in">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-green-900 mb-1 sm:mb-2">
            20 Year Dividend <span className="gradient-text">Projections</span>
          </h2>
          {/* <p className="text-xs text-black max-w-3xl mx-auto">
            20-year investment timeline showing three distinct growth phases with projected returns
          </p> */}
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Chart Container */}
          <div className="card-premium bg-gradient-to-br from-white/95 to-green-50/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-premium border border-green-200/50 p-3 sm:p-4 md:p-6 mb-1">
            <div className="relative">
              {/* Chart Header */}
              {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 sm:mb-3 md:mb-4">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-black mb-0.5 sm:mb-1">Investment Growth Timeline</h3>
                  // {/* <p className="text-black">Starting Investment: ₹29L per acre</p> */}
                {/* </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-3 md:mt-0">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-green-100 rounded-md sm:rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4 text-white stroke-green-500" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-black">20-Year Projection</span>
                </div>
              </div> */} 

              {/* Graph Image */}
              <div className="w-full flex justify-center">
                <img
                  src={graphImage}
                  alt="CAGR Growth Projection Chart"
                  className="w-full max-w-4xl h-auto rounded-xl shadow-lg border border-green-200/50"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CAGRGrowth;
