import { useIntersectionObserver } from '../src/hooks/useIntersectionObserver';

export default function About() {
  useIntersectionObserver();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a5ec3]/20 to-black">
      <div className="w-full pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-lexend mb-8 hover-scale">
              About Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Welcome to UNLMTD, where innovation meets results in the digital landscape.
            </p>
          </div>
        
          {/* Mission Statement */}
          <div className="mb-20 fade-in">
            <h2 className="text-[#1a5ec3] text-3xl font-lexend mb-6 hover-scale">Our Mission</h2>
            <div className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20">
              <p className="text-gray-300 text-lg leading-relaxed transform hover:translate-x-2 transition-transform duration-300 mb-6">
                At UNLMTD, we transform businesses through innovative digital marketing strategies. 
                Our mission is to deliver unlimited growth potential to brands that are ready to make their mark in the digital world.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We believe in pushing boundaries and challenging the status quo. Our team of experts combines creativity with data-driven insights to deliver exceptional results that exceed expectations.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20 fade-in">
            <h2 className="text-[#1a5ec3] text-3xl font-lexend mb-8 hover-scale text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Innovation",
                  description: "Constantly exploring new technologies and strategies to keep our clients ahead of the curve.",
                  icon: "💡"
                },
                {
                  title: "Excellence",
                  description: "Delivering outstanding results through meticulous attention to detail and continuous improvement.",
                  icon: "⭐"
                },
                {
                  title: "Transparency",
                  description: "Building trust through open communication and honest reporting of results.",
                  icon: "🤝"
                },
                {
                  title: "Growth",
                  description: "Committed to the continuous growth of our clients and our own capabilities.",
                  icon: "📈"
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-black/30 p-6 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all hover-scale fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-center">
                    {value.icon}
                  </div>
                  <h3 className="text-white font-lexend text-xl mb-3 group-hover:text-[#1a5ec3] transition-colors text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-center">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Services Overview with Interactive Cards */}
          <div className="mb-20">
            <h2 className="text-[#1a5ec3] text-3xl font-lexend mb-8 hover-scale text-center">Our Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Digital Marketing",
                  description: "Strategic campaigns and data-driven marketing solutions that deliver measurable results.",
                  features: [
                    "Social Media Marketing",
                    "PPC & Search Advertising",
                    "Email Marketing",
                    "Content Marketing",
                    "Analytics & Reporting"
                  ],
                  icon: "🎯",
                  delay: 0
                },
                {
                  title: "Brand Development",
                  description: "Comprehensive brand strategy and identity design that makes you stand out.",
                  features: [
                    "Brand Strategy",
                    "Visual Identity Design",
                    "Brand Guidelines",
                    "Brand Messaging",
                    "Market Positioning"
                  ],
                  icon: "💫",
                  delay: 100
                },
                {
                  title: "Website Development",
                  description: "Custom, responsive websites that convert visitors into customers.",
                  features: [
                    "Custom Web Design",
                    "E-commerce Solutions",
                    "CMS Development",
                    "UI/UX Design",
                    "Website Optimization"
                  ],
                  icon: "💻",
                  delay: 200
                },
                {
                  title: "Mobile Development",
                  description: "Native and cross-platform mobile applications that engage users.",
                  features: [
                    "iOS Development",
                    "Android Development",
                    "Cross-Platform Apps",
                    "App Store Optimization",
                    "Mobile UI/UX Design"
                  ],
                  icon: "📱",
                  delay: 300
                },
                {
                  title: "Content Creation",
                  description: "Engaging content that tells your story across all digital platforms.",
                  features: [
                    "Social Media Content",
                    "Video Production",
                    "Graphic Design",
                    "Copywriting",
                    "Content Strategy"
                  ],
                  icon: "🎨",
                  delay: 400
                },
                {
                  title: "Digital Strategy",
                  description: "Comprehensive digital strategies that drive growth and innovation.",
                  features: [
                    "Market Research",
                    "Competitive Analysis",
                    "Growth Strategy",
                    "Digital Transformation",
                    "Performance Tracking"
                  ],
                  icon: "📊",
                  delay: 500
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="bg-black/30 p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all hover-scale fade-in group"
                  style={{ animationDelay: `${service.delay}ms` }}
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 text-center">
                    {service.icon}
                  </div>
                  <h3 className="text-white font-lexend text-2xl mb-4 group-hover:text-[#1a5ec3] transition-colors text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-300">
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

          {/* Our Process Section */}
          <div className="mb-20 fade-in">
            <h2 className="text-[#1a5ec3] text-3xl font-lexend mb-8 hover-scale text-center">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We start by understanding your business, goals, and target audience through in-depth consultation.",
                  icon: "🔍"
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Develop a customized plan aligned with your objectives and market opportunities.",
                  icon: "📋"
                },
                {
                  step: "03",
                  title: "Execution",
                  description: "Implement strategies with precision while maintaining flexibility for optimization.",
                  icon: "⚡"
                },
                {
                  step: "04",
                  title: "Growth",
                  description: "Monitor, analyze, and scale successful strategies for continued growth.",
                  icon: "📈"
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
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-center">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-12 text-center fade-in">
            <h2 className="text-3xl font-bold text-white font-lexend mb-6">Ready to Transform Your Digital Presence?</h2>
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
