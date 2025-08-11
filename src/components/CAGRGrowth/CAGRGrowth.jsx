import React from 'react';
import { TrendingUp } from 'lucide-react';
import graphImage from '../../assets/graph.jpg';

const CAGRGrowth = () => {
  return (
    <section
      id="cagr-section"
      className="py-16 bg-gradient-to-br from-white via-green-50 to-emerald-50 relative overflow-hidden -mt-1"
    >
      {/* Natural transition */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-emerald-50 to-transparent"></div>

      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-green-400/15 to-emerald-400/15 rounded-full opacity-40 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-400/15 to-green-500/15 rounded-full opacity-40 blur-3xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-br from-yellow-300/10 to-amber-300/10 rounded-full opacity-30 blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black text-green-900 mb-4">
             Growth <span className="gradient-text">Projection</span>
          </h2>
          {/* <p className="text-base text-black max-w-3xl mx-auto">
            20-year investment timeline showing three distinct growth phases with projected returns
          </p> */}
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Chart Container */}
          <div className="card-premium bg-gradient-to-br from-white/95 to-green-50/95 backdrop-blur-sm rounded-3xl shadow-premium border border-green-200/50 p-8 mb-12">
            <div className="relative">
              {/* Chart Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">Investment Growth Timeline</h3>
                  {/* <p className="text-black">Starting Investment: ₹29L per acre</p> */}
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white stroke-green-500" />
                  </div>
                  <span className="text-lg font-semibold text-black">20-Year Projection</span>
                </div>
              </div>

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
