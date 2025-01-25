import { useIntersectionObserver } from '../src/hooks/useIntersectionObserver';

export default function Services() {
  useIntersectionObserver();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a5ec3]/20 to-black">
      <div className="w-full pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-lexend mb-8 hover-scale">
              Services We Offer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to elevate your brand's presence and drive measurable results.
            </p>
          </div>

          {/* Digital Marketing */}
          <section className="mb-20 fade-in">
            <h2 className="text-3xl text-[#1a5ec3] font-lexend mb-8 hover-scale">Digital Marketing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all hover-scale group">
                  <h3 className="text-white font-lexend text-xl mb-4 group-hover:text-[#1a5ec3] transition-colors">
                    Social Media Management
                  </h3>
                  <ul className="text-gray-400 space-y-3">
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Platform-specific content strategy
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Community engagement and growth
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Content calendar development
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Performance analytics and reporting
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Trend monitoring and implementation
                    </li>
                  </ul>
                </div>
                <div className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all hover-scale group">
                  <h3 className="text-white font-lexend text-xl mb-4 group-hover:text-[#1a5ec3] transition-colors">
                    Paid Advertising
                  </h3>
                  <ul className="text-gray-400 space-y-3">
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Meta Ads (Facebook & Instagram)
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Google Ads campaigns
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Audience targeting and optimization
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Budget management and ROI tracking
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      A/B testing and performance optimization
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all hover-scale group">
                  <h3 className="text-white font-lexend text-xl mb-4 group-hover:text-[#1a5ec3] transition-colors">
                    Email Marketing
                  </h3>
                  <ul className="text-gray-400 space-y-3">
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Campaign strategy and planning
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Newsletter design and copywriting
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Automation workflow setup
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      List segmentation and management
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Performance tracking and optimization
                    </li>
                  </ul>
                </div>
                <div className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all hover-scale group">
                  <h3 className="text-white font-lexend text-xl mb-4 group-hover:text-[#1a5ec3] transition-colors">
                    SEO Optimization
                  </h3>
                  <ul className="text-gray-400 space-y-3">
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Keyword research and strategy
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      On-page SEO optimization
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Content optimization
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Technical SEO improvements
                    </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform">
                      <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Local SEO optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Brand Development */}
          <section className="mb-20 fade-in">
            <h2 className="text-3xl text-[#1a5ec3] font-lexend mb-8 hover-scale">Brand Development</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all hover-scale group">
                <h3 className="text-white font-lexend text-xl mb-4 group-hover:text-[#1a5ec3] transition-colors">
                  Brand Strategy
                </h3>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Brand positioning and messaging
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Target audience analysis
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Competitive research
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Brand voice development
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Brand guidelines creation
                  </li>
                </ul>
              </div>
              <div className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all hover-scale group">
                <h3 className="text-white font-lexend text-xl mb-4 group-hover:text-[#1a5ec3] transition-colors">
                  Visual Identity
                </h3>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Logo design and variations
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Color palette selection
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Typography system
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Brand asset creation
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Style guide development
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Content Creation */}
          <section className="mb-20 fade-in">
            <h2 className="text-3xl text-[#1a5ec3] font-lexend mb-8 hover-scale">Content Creation</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all hover-scale group">
                <h3 className="text-white font-lexend text-xl mb-4 group-hover:text-[#1a5ec3] transition-colors">
                  Social Media Content
                </h3>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Platform-optimized posts
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Engaging visuals and graphics
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Reels and short-form video
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Hashtag strategy
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Content calendar planning
                  </li>
                </ul>
              </div>
              <div className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all hover-scale group">
                <h3 className="text-white font-lexend text-xl mb-4 group-hover:text-[#1a5ec3] transition-colors">
                  Website Content
                </h3>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Website copywriting
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Blog post creation
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Landing page optimization
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    SEO-friendly content
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Call-to-action optimization
                  </li>
                </ul>
              </div>
              <div className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all hover-scale group">
                <h3 className="text-white font-lexend text-xl mb-4 group-hover:text-[#1a5ec3] transition-colors">
                  Visual Content
                </h3>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Photography direction
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Graphic design
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Video production
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Animation creation
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-[#1a5ec3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Visual asset library building
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20 fade-in">
            <h2 className="text-3xl text-[#1a5ec3] font-lexend mb-8 hover-scale text-center">Our Development Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your needs and objectives",
                  icon: "🔍"
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Developing a tailored plan",
                  icon: "💡"
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Bringing your vision to life",
                  icon: "🚀"
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Continuously improving",
                  icon: "🔧"
                }
              ].map((phase, index) => (
                <div 
                  key={index}
                  className="bg-black/30 p-6 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all hover-scale fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform text-center">
                    {phase.icon}
                  </div>
                  <h3 className="text-white font-lexend text-xl mb-4 group-hover:text-[#1a5ec3] transition-colors">
                    {phase.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-12 fade-in">
            <h2 className="text-3xl font-bold text-white font-lexend mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <button 
              onClick={() => window.openModal?.()}
              className="bg-[#1a5ec3] text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-all hover-scale pulse text-lg font-lexend"
            >
              Schedule a Consultation
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
