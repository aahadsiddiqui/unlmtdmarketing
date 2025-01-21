export default function WhyUnlimited() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white font-lexend mb-12">Why UNLMTD?</h1>

        {/* Main Value Proposition */}
        <div className="mb-16">
          <h2 className="text-[#1a5ec3] text-2xl font-lexend mb-6">Unlimited Potential for Growth</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            At UNLMTD, we believe in pushing boundaries and breaking through limitations. 
            Our name reflects our commitment to unlocking the unlimited potential in every brand we work with.
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-white font-lexend text-xl mb-3">Results-First Approach</h3>
            <p className="text-gray-400">
              We focus on metrics that matter. Every strategy is designed with clear, measurable objectives and ROI in mind.
            </p>
          </div>
          <div className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-white font-lexend text-xl mb-3">Innovation at Core</h3>
            <p className="text-gray-400">
              We stay ahead of digital trends, bringing cutting-edge strategies and creative solutions to your brand.
            </p>
          </div>
          <div className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-white font-lexend text-xl mb-3">True Partnership</h3>
            <p className="text-gray-400">
              We're not just a service provider - we're your growth partner, fully invested in your success.
            </p>
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-16">
          <h2 className="text-[#1a5ec3] text-2xl font-lexend mb-8">The UNLMTD Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Deep dive into your brand, goals, and market position"
              },
              {
                step: "02",
                title: "Strategy",
                description: "Develop customized plans aligned with your objectives"
              },
              {
                step: "03",
                title: "Execution",
                description: "Implement strategies with precision and creativity"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring and improvement of results"
              }
            ].map((phase, index) => (
              <div key={index} className="relative p-6 bg-black/30 rounded-lg border border-[#1a5ec3]/20">
                <span className="text-[#1a5ec3] text-4xl font-bold font-lexend mb-4 block">
                  {phase.step}
                </span>
                <h3 className="text-white font-lexend text-xl mb-2">{phase.title}</h3>
                <p className="text-gray-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-[#1a5ec3]/10 to-black p-8 rounded-lg mb-16">
          <h2 className="text-[#1a5ec3] text-2xl font-lexend mb-6">What Success Looks Like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Increased Brand Visibility",
              "Higher Engagement Rates",
              "Improved Conversion Rates",
              "Sustainable Growth"
            ].map((metric, index) => (
              <div key={index} className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#1a5ec3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center py-12">
          <h2 className="text-2xl text-white font-lexend mb-4">Ready to Experience the UNLMTD Difference?</h2>
          <p className="text-gray-300 mb-8">Join the brands that are breaking through limitations.</p>
          <button 
            onClick={() => window.openModal?.()}
            className="bg-[#1a5ec3] text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-lexend"
          >
            Start Your Journey
          </button>
        </section>
      </div>
    </div>
  );
} 