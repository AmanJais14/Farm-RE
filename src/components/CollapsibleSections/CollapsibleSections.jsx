import React from 'react';
import InvestmentLandscape from '../InvestmentLandscape/InvestmentLandscape';
import CAGRGrowth from '../CAGRGrowth/CAGRGrowth';
import InvestmentOverview from '../InvestmentOverview/InvestmentOverview';
import PricingComparison from '../PricingComparison/PricingComparison';

const CollapsibleSections = ({ activeCard, setActiveCard, counters }) => {
  return (
    <div className="relative">
      {/* Section Header */}
      {/* <div className="py-8 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black text-green-900 mb-4">
              Investment Analysis & <span className="gradient-text">Comparison</span>
            </h2>
            <p className="text-base text-green-700 max-w-2xl mx-auto">
              Detailed investment landscape, overview & competitor analysis
            </p>
          </div>
        </div>
      </div> */}

      {/* Always Visible Content */}
      <div className="space-y-0">
        {/* Investment Landscape Section */}
        <InvestmentLandscape
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />

        {/* CAGR Growth Section */}
        {/* <CAGRGrowth /> */}

        {/* Investment Overview Section */}
        <InvestmentOverview
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          counters={counters}
        />

        {/* Pricing Comparison Section */}
        {/* <PricingComparison
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        /> */}
      </div>
    </div>
  );
};

export default CollapsibleSections;
