import React from 'react';
import { TrendingUp, Shield, Award, Eye } from 'lucide-react';

const AnimatedCounters = ({ counters, isCounterVisible, setIsCounterVisible }) => {
  return (
    <div 
      className="grid grid-cols-2 gap-6 animate-scale-in"
      onMouseEnter={() => !isCounterVisible && setIsCounterVisible(true)}
    >
      <div className="card-premium bg-gradient-to-br from-amber-400 to-orange-500 h-48 rounded-3xl shadow-lg hover:shadow-premium flex items-center justify-center group relative overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Natural floating particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-6 right-6 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-6 w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-1000"></div>
        </div>
        
        <div className="text-center text-white relative z-10">
          <div className="text-4xl font-black mb-3 flex items-center justify-center gap-2">
            {counters.returns}%+
            <TrendingUp className="w-8 h-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
          </div>
          <div className="text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity">Annual Returns</div>
          <div className="text-xs opacity-70 mt-1 group-hover:opacity-90 transition-opacity">Tax-Free Income</div>
        </div>
      </div>

      <div className="card-premium bg-gradient-to-br from-green-400 to-green-600 h-48 rounded-3xl shadow-lg hover:shadow-premium flex items-center justify-center group relative overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Shield animation */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <Shield className="w-32 h-32 text-white animate-pulse" />
        </div>
        
        <div className="text-center text-white relative z-10">
          <div className="text-4xl font-black mb-3 flex items-center justify-center gap-2">
            100%
            <Shield className="w-8 h-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
          </div>
          <div className="text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity">Legal Ownership</div>
          <div className="text-xs opacity-70 mt-1 group-hover:opacity-90 transition-opacity">Clear Title Deed</div>
        </div>
      </div>

      <div className="card-premium bg-gradient-to-br from-emerald-400 to-green-600 h-48 rounded-3xl shadow-lg hover:shadow-premium flex items-center justify-center group relative overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Experience rings */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-24 h-24 border-2 border-white rounded-full animate-ping"></div>
          <div className="absolute w-16 h-16 border border-white rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="text-center text-white relative z-10">
          <div className="text-4xl font-black mb-3 flex items-center justify-center gap-2">
            {counters.experience}+
            <Award className="w-8 h-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
          </div>
          <div className="text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity">Years Experience</div>
          <div className="text-xs opacity-70 mt-1 group-hover:opacity-90 transition-opacity">Proven Track Record</div>
        </div>
      </div>

      <div className="card-premium bg-gradient-to-br from-green-500 to-emerald-600 h-48 rounded-3xl shadow-lg hover:shadow-premium flex items-center justify-center group relative overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Monitoring waves */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-20 h-20 border-2 border-white rounded-full animate-ping"></div>
          <div className="absolute w-12 h-12 border border-white rounded-full animate-ping delay-300"></div>
          <div className="absolute w-6 h-6 bg-white rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="text-center text-white relative z-10">
          <div className="text-4xl font-black mb-3 flex items-center justify-center gap-2">
            24/7
            <Eye className="w-8 h-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
          </div>
          <div className="text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity">Farm Monitoring</div>
          <div className="text-xs opacity-70 mt-1 group-hover:opacity-90 transition-opacity">Real-time Updates</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounters;
