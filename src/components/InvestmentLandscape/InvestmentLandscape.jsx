import React from 'react';
import { MapPin, Star, TrendingUp, CheckCircle, Award, PieChart } from 'lucide-react';

const InvestmentLandscape = ({ activeCard, setActiveCard }) => {
  const investmentData = [
    { category: 'Real Estate', percentage: 4, color: 'bg-gradient-to-r from-green-400 to-green-600' },
    { category: 'Mutual Funds', percentage: 15, color: 'bg-gradient-to-r from-green-400 to-green-600' },
    { category: 'Gold', percentage: 8, color: 'bg-gradient-to-r from-green-400 to-green-600' },
    { category: 'Agri Farming', percentage: 20, color: 'bg-gradient-to-r from-green-400 to-green-600' }
  ];

  return (
    <section id="investment-landscape" className="py-8 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 relative overflow-hidden -mt-1  flex items-center">
      {/* Natural transition wave */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-50 to-transparent"></div>

      {/* Natural floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-green-400/15 to-emerald-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-400/15 to-green-500/15 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative w-full">
        <div className="text-center mb-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black text-green-900 mb-3">
            Investment  <span className="gradient-text">Asset classes</span>
          </h2>
          <p className="text-base text-black max-w-2xl mx-auto">How Indians invest and why agri-real estate outperforms traditional investments</p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Compact Investment Comparison */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-4 text-black text-center">Investment Returns Comparison</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {investmentData.map((item, index) => (
                <div
                  key={index}
                  className={`group text-center p-3 rounded-2xl backdrop-blur-sm transition-all duration-300 cursor-pointer shadow-sm relative overflow-hidden ${
                    item.category === 'Agri Farming'
                      ? 'bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-400 shadow-xl hover:shadow-2xl transform hover:scale-105'
                      : 'hover:bg-gradient-to-br hover:from-white/90 hover:to-green-50/90 border border-green-200/50 hover:border-green-400/50 hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setActiveCard(`investment-${index}`)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Agri Land special effects */}
                  {item.category === 'Agri Farming' && (
                    <>
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/30 to-amber-200/30 rounded-2xl animate-pulse"></div>

                      {/* Sparkle effects */}
                      <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-500"></div>

                      {/* Crown icon */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                          <Star className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 mx-auto mb-2 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md relative ${
                    item.category === 'Agri Farming'
                      ? 'bg-gradient-to-br from-emerald-500 to-green-600 border-2 border-yellow-400'
                      : 'bg-gradient-to-br from-green-100 to-green-200 border border-green-300/50'
                  }`}>
                    {item.category === 'Real Estate' && <MapPin className="w-5 h-5 text-green-700" />}
                    {item.category === 'Mutual Funds' && <PieChart className="w-5 h-5 text-green-700" />}
                    {item.category === 'Gold' && <Star className="w-5 h-5 text-green-700" />}
                    {item.category === 'Agri Farming' && <TrendingUp className="w-5 h-5 text-white" />}
                  </div>
                  {/* Category Name */}
                  <h4 className={`font-semibold text-sm mb-1 ${
                    item.category === 'Agri Farming' ? 'text-emerald-700 font-bold' : 'text-black'
                  }`}>{item.category}</h4>

                  {/* Percentage */}
                  <div className={`text-xl font-black mb-2 ${
                    item.category === 'Agri Farming'
                      ? 'text-emerald-600 text-2xl drop-shadow-lg'
                      : 'text-black'
                  }`}>{item.percentage}%</div>

                  {/* Progress Bar */}
                  <div className="w-full bg-green-100 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${item.color}`}
                      style={{ width: `${(item.percentage / 30) * 100}%` }}
                    />
                  </div>

                  {/* Winner Badge */}
                  {item.category === 'Agri Farming' && (
                    <div className="mt-1 relative">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-black rounded-full shadow-lg animate-bounce">
                        <Award className="w-3 h-3" />
                        Winner
                      </span>
                      {/* Additional glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-30 blur-md animate-pulse"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Compact Benefits Grid */}
          {/* <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-200/50 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-green-800 mb-2">Premium Crops</h4>
              <p className="text-green-700 text-sm">Dates, avocados & exotic fruits</p>
            </div>

            <div className="bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-200/50 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-green-800 mb-2">High Returns</h4>
              <p className="text-green-700 text-sm">30%+ annual returns with tax benefits</p>
            </div>

            <div className="bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-200/50 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-green-800 mb-2">Expert Management</h4>
              <p className="text-green-700 text-sm">Professional farming & management</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default InvestmentLandscape;
