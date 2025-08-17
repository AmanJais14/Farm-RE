import React from 'react';
import { MapPin, Star, TrendingUp,Leaf, CheckCircle, Award, PieChart } from 'lucide-react';

const InvestmentLandscape = ({ activeCard, setActiveCard }) => {
  const investmentData = [
    {
      category: 'Real Estate',
      capitalAppreciation: { min: 7, max: 9, avg: 7 },
      dividends: { min: 3, max: 4, avg: 3 },
      totalRange: '7-14%',
      capitalColor: 'bg-gradient-to-r from-green-200 to-green-300',
      dividendColor: 'bg-gradient-to-r from-green-200 to-green-300'
    },
    {
      category: 'Exotic Farming',
      capitalAppreciation: { min: 8, max: 12, avg: 12 },
      dividends: { min: 12, max: 18, avg: 16, special: '16%+ ' },
      totalRange: '26-30%',
      capitalColor: 'bg-gradient-to-r from-emerald-400 to-emerald-600',
      dividendColor: 'bg-gradient-to-r from-green-400 to-green-600'
    },
    {
      category: 'Mutual Funds',
      capitalAppreciation: { min: 12, max: 14, avg: 13 },
      dividends: { min: 0, max: 0, avg: 0 },
      totalRange: '10-16%',
      capitalColor: 'bg-gradient-to-r from-green-200 to-green-300',
      dividendColor: 'bg-gradient-to-r from-purple-400 to-purple-600'
    },
    {
      category: 'Gold',
      capitalAppreciation: { min: 7, max: 9, avg: 9 },
      dividends: { min: 0, max: 0, avg: 0 },
      totalRange: '6-12%',
      capitalColor: 'bg-gradient-to-r from-green-200 to-green-300',
      dividendColor: 'bg-gradient-to-r from-purple-400 to-purple-600'
    }
  ];

  return (
    <section id="investment-landscape" className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 relative overflow-hidden -mt-1 flex items-center">
      {/* Natural transition wave */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-50 to-transparent"></div>

      {/* Natural floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-green-400/15 to-emerald-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-400/15 to-green-500/15 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative w-full">
        <div className="text-center mb-3 sm:mb-4 animate-fade-in">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-green-900 mb-1">
            Investment <span className="gradient-text">Asset classes</span>
          </h2>
          <p className="text-xs sm:text-sm text-black max-w-2xl mx-auto px-2 sm:px-0">How Indians invest and why agri-real estate outperforms traditional investments</p>
        </div>

        <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-0">
          {/* Compact Investment Comparison */}
          <div className="mb-3 sm:mb-4">
            {/* <h3 className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 text-black text-center">Investment Returns Comparison</h3> */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3">
              {investmentData.map((item, index) => (
                <div
                  key={index}
                  className={`group text-center mt-6 p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl md:rounded-2xl backdrop-blur-sm transition-all duration-300 cursor-pointer shadow-sm relative overflow-hidden ${
                    item.category === 'Exotic Farming'
                      ? 'bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-400 shadow-xl hover:shadow-2xl transform hover:scale-105'
                      : 'hover:bg-gradient-to-br hover:from-white/90 hover:to-green-50/90 border border-green-200/50 hover:border-green-400/50 hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setActiveCard(`investment-${index}`)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Agri Land special effects */}
                  {item.category === 'Exotic Farming' && (
                    <>
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/30 to-amber-200/30 rounded-2xl animate-pulse"></div>

                      {/* Sparkle effects */}
                      <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-500"></div>

                      {/* Crown icon */}
                      {/* <div className="absolute -top-1.5 sm:-top-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                          <Star className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 text-white" />
                        </div>
                      </div> */}
                    </>
                  )}

                  {/* Tax Status Tickers */}
                  {/* {(item.category === 'Real Estate' || item.category === 'Mutual Funds' || item.category === 'Gold') && (
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg rounded-tl-2xl z-10">
                      TAXABLE
                    </div>
                  )} */}

                  {item.category === 'Exotic Farming' && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-tr-lg rounded-bl-lg sm:rounded-tr-2xl z-10">
                      <span className="hidden sm:inline">TAX FREE</span>
                      <span className="sm:hidden">TAX FREE</span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 mx-auto mb-1 sm:mb-1.5 md:mb-2 rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md relative ${
                    item.category === 'Exotic Farming'
                      ? 'bg-gradient-to-br from-emerald-500 to-green-600 border-2 border-yellow-400'
                      : 'bg-gradient-to-br from-green-100 to-green-200 border border-green-300/50'
                  }`}>
                    {item.category === 'Real Estate' && <MapPin className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 text-green-700" />}
                    {item.category === 'Mutual Funds' && <PieChart className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 text-green-700" />}
                    {item.category === 'Gold' && <Star className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 text-green-700" />}
                    {item.category === 'Exotic Farming' && <Leaf className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 text-white" />}
                  </div>
                  {/* Category Name */}
                  <h4 className={`font-semibold text-xs sm:text-xs md:text-sm mb-0.5 sm:mb-1 ${
                    item.category === 'Exotic Farming' ? 'text-emerald-700 font-bold' : 'text-black'
                  }`}>{item.category}</h4>

                  {/* Total Returns Range */}
                  {/* <div className={`text-xs sm:text-sm font-black mb-2 ${
                    item.category === 'Agri Farming'
                      ? 'text-emerald-600 sm:text-base drop-shadow-lg'
                      : 'text-black'
                  }`}>{item.totalRange} Total</div> */}

                  {/* Capital Appreciation Bar */}
                  <div className="mb-0.5 sm:mb-1">
                    <div className="flex justify-between items-center mb-0.5 sm:mb-1">
                      <span className="text-xs text-gray-600 truncate">Asset Growth</span>
                      <span className="text-xs font-semibold text-gray-700 ml-1">{item.capitalAppreciation.min}-{item.capitalAppreciation.max}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1 sm:h-1.5 overflow-hidden">
                      <div
                        className={`h-1 sm:h-1.5 rounded-full transition-all duration-1000 ease-out ${item.capitalColor}`}
                        style={{ width: `${(item.capitalAppreciation.avg / 20) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Dividends Bar */}
                  <div className="mb-0.5 sm:mb-1">
                    <div className="flex justify-between items-center mb-0.5 sm:mb-1">
                      <span className="text-xs text-gray-600 truncate">Dividends</span>
                      <span className="text-xs font-semibold text-gray-700 ml-1 text-right">
                        {item.dividends.min === 0 && item.dividends.max === 0
                          ? '0%'
                          // : item.dividends.special
                          // ? item.dividends.special
                          : `${item.dividends.min}-${item.dividends.max}%`
                        }
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1 sm:h-1.5 overflow-hidden">
                      <div
                        className={`h-1 sm:h-1.5 rounded-full transition-all duration-1000 ease-out ${item.dividendColor}`}
                        style={{ width: `${(item.dividends.avg / 20) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Winner Badge */}
                  {item.category === 'Exotic Farming' && (
                    <div className="mt-0.5 sm:mt-5 relative">
                      <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-black rounded-full shadow-lg animate-bounce">
                        <Award className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                        <span className="hidden sm:inline">Winner</span>
                        <span className="sm:hidden">🏆</span>
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
