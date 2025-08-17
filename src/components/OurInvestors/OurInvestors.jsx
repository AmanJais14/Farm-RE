import React from 'react';

const OurInvestors = () => {
  // Investor companies/organizations
  const investors = [
    {
      id: 1,
      name: "Flipkart",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png",
      type: "E-commerce Partner"
    },
    {
      id: 2,
      name: "Samsung",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png",
      type: "Technology Partner"
    },
    {
      id: 3,
      name: "Microsoft",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png",
      type: "Technology Partner"
    },
    {
      id: 4,
      name: "Leadschool",
      logo: "https://leadschool.in/wp-content/uploads/2022/09/lead-logo.webp",
      type: "Education Partner"
    },
    {
      id: 5,
      name: "Godrej Properties",
      logo: "https://images.moneycontrol.com/static-mcnews/2020/02/Godrej-Properties.jpg?impolicy=website&width=1600&height=900",
      type: "Real Estate Partner"
    },
    // {
    //   id: 6,
    //   name: "Yes Bank",
    //   logo: "/api/placeholder/120/60", // Replace with actual logo
    //   type: "Financial Partner"
    // },
    // {
    //   id: 7,
    //   name: "NABARD",
    //   logo: "/api/placeholder/120/60", // Replace with actual logo
    //   type: "Agricultural Development"
    // },
    // {
    //   id: 8,
    //   name: "Angel Investors",
    //   logo: "/api/placeholder/120/60", // Replace with actual logo
    //   type: "Private Equity"
    // }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-emerald-400/10 to-green-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-black text-green-900 mb-2">
            Our <span className="gradient-text">Investors</span>
          </h2>
          <p className="text-xs sm:text-sm text-black max-w-2xl mx-auto">
            Our investors are from these leading companies and organizations
          </p>
        </div>

        {/* Investors Logos */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 ">
            {investors.map((investor, index) => (
              <div
                key={investor.id}
                className="group transition-all duration-300 hover:scale-110 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={investor.logo}
                  alt={`${investor.name} logo`}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain  group-hover:opacity-100 transition-opacity duration-300 "
                  title={investor.name}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        {/* <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center animate-slide-up" style={{ animationDelay: '800ms' }}>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">₹50Cr+</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Total Investment</div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '900ms' }}>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">8+</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Financial Partners</div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '1000ms' }}>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">AAA</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Credit Rating</div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '1100ms' }}>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">100%</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Loan Approval</div>
            </div>
          </div>
        </div> */}

        {/* Trust Statement */}
        {/* <div className="text-center mt-12 sm:mt-16 animate-fade-in">
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-green-100">
            <p className="text-green-800 text-base sm:text-lg font-medium leading-relaxed">
              "Backed by India's most trusted financial institutions, ensuring secure and profitable agricultural investments with guaranteed returns."
            </p>
            <div className="mt-4 flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 text-sm font-semibold">Verified & Trusted</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default OurInvestors;
