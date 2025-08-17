import React from 'react';
import { Users, Calendar, ArrowRight, Briefcase, GraduationCap } from 'lucide-react';
import Priyesh from '../../assets/priyesh.jpg';
import Sunil from '../../assets/SunilPandey.jpg';
import Nagendra from '../../assets/Nagendra.jpg'; 


const AboutMe = () => {
  // Dummy data for 3 founders
  const founders = [
    {
      id: 1,
      name: "Mr. Sunil Pandey",
      expertise: "Partner at Perfect Neighbourhood",
      image: `${Sunil}`,
      education: "IIM Ahmedabad, B.Tech Agriculture",
      experience: "10+ years in Real Estate",
      specialization: "Precision farming and crop optimization",
      achievements: ["Led 50+ successful farm projects", "Expert in sustainable agriculture", "Technology integration specialist"]
    },
    {
      id: 2,
      name: "Mr. Nagendra Naidu",
      expertise: "Founder at Farmties India Pvt Ltd, IIM Mumbai",
      image: `${Nagendra}`,
      education: "IIM Bangalore, CA, CFA",
      experience: "10+ years in Agriculture",
      specialization: "Agricultural finance and risk management",
      achievements: ["Managed ₹500Cr+ agricultural investments", "Financial modeling expert", "Risk assessment specialist"]
    },
    // {
    //   id: 3,
    //   name: "Mr. Priyesh Jaiswal",
    //   expertise: "Advisor, IIM Mumbai",
    //   image: `${Priyesh}`,
    //   education: "IIM Calcutta, M.Sc. Agriculture",
    //   experience: "15+ years in Farm Operations",
    //   specialization: "Large-scale farm management and operations",
    //   achievements: ["Managed 1000+ acres farmland", "Crop yield optimization expert", "Supply chain management"]
    // }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-white via-green-50 to-emerald-50 relative overflow-hidden -mt-1">
      {/* Natural transition */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-emerald-50 to-transparent"></div>

      {/* Natural Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-green-400/15 to-emerald-400/15 rounded-full opacity-40 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-emerald-400/15 to-green-500/15 rounded-full opacity-40 blur-3xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-300/10 to-amber-300/10 rounded-full opacity-30 blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-xl md:text-2xl font-black text-green-900 mb-2">
              Who <span className="gradient-text">are We</span>
            </h2>
            <p className="text-xs sm:text-sm text-black max-w-2xl mx-auto leading-relaxed">
              Our leadership blends decades of expertise in agriculture & real estate to deliver exceptional investments.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <div
                key={founder.id}
                className="group rounded-3xl shadow-lg border border-green-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Founder Image */}
                <div className="relative mb-4">
                  <div className="relative w-24 h-24 mx-auto">
                    <div className="w-full h-full rounded-full shadow-lg border border-green-200/50 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      {/* Actual founder image */}
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover rounded-full"
                        loading="lazy"
                      />

                      {/* Overlay for better contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-full"></div>

                      {/* Decorative elements */}
                      <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full"></div>
                      <div className="absolute bottom-2 left-2 w-3 h-3 bg-gradient-to-br from-emerald-400/30 to-green-500/30 rounded-full"></div>
                    </div>

                    {/* Floating accent elements */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-lg"></div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-lg"></div>
                  </div>
                </div>

                {/* Founder Info */}
                <div className="mb-4">
                  <h3 className="text-base font-bold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-normal text-green-700  group-hover:text-green-600 transition-colors duration-300">
                    {founder.experience}
                  </p>
                  <p className="text-black font-medium text-xs mb-2">
                    {founder.expertise}
                  </p>
                  {/* <p className="text-green-700 text-sm leading-relaxed">
                    {founder.specialization}
                  </p> */}
                </div>

                {/* Experience & Education */}
                {/* <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-green-600 font-medium">Education</p>
                      <p className="text-sm text-green-800 font-semibold">{founder.education}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-green-600 font-medium">Experience</p>
                      <p className="text-sm text-green-800 font-semibold">{founder.experience}</p>
                    </div>
                  </div>
                </div> */}

                {/* Key Achievements */}
                {/* <div className="space-y-2">
                  {founder.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-left">
                      <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <p className="text-xs text-green-700">{achievement}</p>
                    </div>
                  ))}
                </div> */}
              </div>
            ))}
          </div>

          {/* Team Stats */}
          {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-white/80 to-green-50/80 rounded-2xl border border-green-200/50">
              <div className="text-3xl font-black text-green-600 mb-2">37+</div>
              <div className="text-sm text-green-700">Combined Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-white/80 to-green-50/80 rounded-2xl border border-green-200/50">
              <div className="text-3xl font-black text-green-600 mb-2">1500+</div>
              <div className="text-sm text-green-700">Acres Managed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-white/80 to-green-50/80 rounded-2xl border border-green-200/50">
              <div className="text-3xl font-black text-green-600 mb-2">₹500Cr+</div>
              <div className="text-sm text-green-700">Investments Managed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-white/80 to-green-50/80 rounded-2xl border border-green-200/50">
              <div className="text-3xl font-black text-green-600 mb-2">1000+</div>
              <div className="text-sm text-green-700">Happy Investors</div>
            </div>
          </div> */}

          {/* CTA Section */}
          {/* <div className="mt-16 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-premium bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-premium flex items-center justify-center gap-3 group">
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Meet the Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-premium glass text-green-700 border border-green-300/50 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow-green backdrop-blur-md hover:bg-white/20">
                View Credentials
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
