import { useIntersectionObserver } from '../src/hooks/useIntersectionObserver';

export default function WhyUnlimited() {
  useIntersectionObserver();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a5ec3]/20 to-black">
      <div className="w-full pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-lexend mb-8 hover-scale">
              Why UNLMTD?
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're not just another agency - we're your growth partner, committed to pushing boundaries and delivering exceptional results.
            </p>
          </div>

          {/* Main Value Proposition */}
          <div className="mb-20 fade-in">
            <h2 className="text-[#1a5ec3] text-3xl font-lexend mb-6 hover-scale">Unlimited Potential for Growth</h2>
            <div className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all">
              <p className="text-gray-300 text-lg leading-relaxed transform hover:translate-x-2 transition-transform duration-300 mb-6">
                At UNLMTD, we believe in pushing boundaries and breaking through limitations. 
                Our name reflects our commitment to unlocking the unlimited potential in every brand we work with.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Through innovative strategies, cutting-edge technology, and a deep understanding of the digital landscape, 
                we help businesses achieve extraordinary growth and establish a commanding online presence.
              </p>
            </div>
          </div>

          {/* Key Differentiators with Interactive Cards */}
          <div className="mb-20">
            <h2 className="text-[#1a5ec3] text-3xl font-lexend mb-8 hover-scale text-center">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Results-First Approach",
                  description: "We focus on metrics that matter. Every strategy is designed with clear, measurable objectives and ROI in mind.",
                  features: [
                    "Data-driven decision making",
                    "Regular performance reporting",
                    "Continuous optimization",
                    "Transparent communication"
                  ]
                },
                {
                  icon: "💡",
                  title: "Innovation at Core",
                  description: "We stay ahead of digital trends, bringing cutting-edge strategies and creative solutions to your brand.",
                  features: [
                    "Latest technology adoption",
                    "Creative problem solving",
                    "Trend forecasting",
                    "Innovative strategies"
                  ]
                },
                {
                  icon: "🤝",
                  title: "True Partnership",
                  description: "We're not just a service provider - we're your growth partner, fully invested in your success.",
                  features: [
                    "Dedicated support team",
                    "Strategic consultation",
                    "Long-term relationship",
                    "Proactive communication"
                  ]
                }
              ].map((diff, index) => (
                <div 
                  key={index}
                  className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all hover-scale fade-in group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 text-center">
                    {diff.icon}
                  </div>
                  <h3 className="text-white font-lexend text-xl mb-4 group-hover:text-[#1a5ec3] transition-colors text-center">
                    {diff.title}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {diff.description}
                  </p>
                  <ul className="space-y-3">
                    {diff.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-400 group-hover:translate-x-2 transition-transform">
                        <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Our Process with Interactive Timeline */}
          <div className="mb-20 fade-in">
            <h2 className="text-[#1a5ec3] text-3xl font-lexend mb-8 hover-scale text-center">The UNLMTD Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Deep dive into your brand, goals, and market position",
                  icon: "🔍",
                  details: [
                    "Business analysis",
                    "Goal setting",
                    "Market research",
                    "Competitor analysis"
                  ]
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Develop customized plans aligned with your objectives",
                  icon: "📋",
                  details: [
                    "Custom roadmap",
                    "Resource planning",
                    "Timeline creation",
                    "KPI definition"
                  ]
                },
                {
                  step: "03",
                  title: "Execution",
                  description: "Implement strategies with precision and creativity",
                  icon: "⚡",
                  details: [
                    "Strategy deployment",
                    "Content creation",
                    "Campaign launch",
                    "Performance tracking"
                  ]
                },
                {
                  step: "04",
                  title: "Growth",
                  description: "Monitor, analyze, and scale successful strategies",
                  icon: "📈",
                  details: [
                    "Data analysis",
                    "Strategy optimization",
                    "Scale successful tactics",
                    "Continuous improvement"
                  ]
                }
              ].map((phase, index) => (
                <div 
                  key={index}
                  className="bg-black/30 p-6 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all hover-scale fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-[#1a5ec3] text-5xl font-bold mb-4 group-hover:scale-110 transition-transform text-center">
                    {phase.step}
                  </div>
                  <div className="text-4xl mb-4 text-center">{phase.icon}</div>
                  <h3 className="text-white font-lexend text-xl mb-3 group-hover:text-[#1a5ec3] transition-colors text-center">
                    {phase.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-center">
                    {phase.description}
                  </p>
                  <ul className="space-y-2">
                    {phase.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-400 group-hover:translate-x-2 transition-transform">
                        <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-12 text-center fade-in">
            <h2 className="text-3xl font-bold text-white font-lexend mb-6">Ready to Experience the UNLMTD Difference?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful businesses that have achieved extraordinary growth with UNLMTD.
            </p>
            <button 
              onClick={() => window.openModal?.()}
              className="bg-[#1a5ec3] text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-all hover-scale pulse text-lg font-lexend"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 