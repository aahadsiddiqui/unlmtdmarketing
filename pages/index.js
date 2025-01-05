import { useState } from 'react';
import Modal from '../src/components/Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <main className="w-full max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative min-h-[70vh]">
        {/* Stars Background */}
        <div className="fixed inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                opacity: Math.random() * 0.7 + 0.1
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 text-white font-lexend">
            Welcome to the world of
            <br />
            <span className="relative">
              Unlmtd Marketing
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#1a5ec3]"></span>
            </span>
          </h1>
          <p className="text-2xl text-center text-[#1a5ec3] font-lexend mt-6 mb-8">
            For Brands that Mean Business
          </p>
          <div className="flex justify-center">
            <button 
              onClick={openModal}
              className="bg-[#1a5ec3] text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-lexend"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section className="bg-gradient-to-b from-black to-[#0a1829] pt-0 pb-20 w-full">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white font-lexend text-center mb-12">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
            {[
              {
                title: "Digital\nMarketing",
                description: "Strategic campaigns that drive real results",
                icon: "🎯"
              },
              {
                title: "Brand\nDevelopment",
                description: "Creating memorable brand identities",
                icon: "💫"
              },
              {
                title: "Content\nStrategy",
                description: "Engaging content that tells your story",
                icon: "📱"
              },
              {
                title: "Website\nDevelopment",
                description: "Custom websites that convert visitors into customers",
                icon: "💻"
              },
              {
                title: "Graphic\nDesign",
                description: "Stunning visuals that capture your brand essence",
                icon: "🎨"
              }
            ].map((service, index) => (
              <div key={index} className="bg-black/50 p-6 lg:p-8 rounded-lg border border-[#1a5ec3]/20 hover:border-[#1a5ec3] transition-all">
                <div className="text-3xl lg:text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg lg:text-xl font-lexend font-bold text-white mb-2 whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-black py-16 lg:py-20 w-full">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white font-lexend text-center mb-12">
            Why Choose Unlmtd?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {[
                {
                  title: "Data-Driven Approach",
                  description: "We leverage advanced analytics and real-time insights to make strategic decisions that drive measurable results for your business.",
                  icon: "📊"
                },
                {
                  title: "Customized Solutions",
                  description: "Every business is unique. We create tailored strategies that align perfectly with your goals, brand identity, and target audience.",
                  icon: "🎯"
                },
                {
                  title: "Proven Track Record",
                  description: "With years of experience and countless success stories, we've helped businesses across industries achieve exceptional growth.",
                  icon: "🏆"
                },
                {
                  title: "Innovative Strategies",
                  description: "Stay ahead of the curve with cutting-edge marketing techniques and the latest industry trends.",
                  icon: "💡"
                },
                {
                  title: "Dedicated Support",
                  description: "Our team of experts is always available to provide guidance and ensure your marketing success.",
                  icon: "🤝"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start group hover:bg-[#1a5ec3]/5 p-4 rounded-lg transition-all">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1a5ec3]/10 group-hover:bg-[#1a5ec3] flex items-center justify-center mt-1 transition-colors">
                    <span className="text-[#1a5ec3] group-hover:text-white text-xl transition-colors">
                      {feature.icon}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-lexend font-bold text-white mb-2 group-hover:text-[#1a5ec3] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#1a5ec3]/10 to-black/50 rounded-lg p-8 border border-[#1a5ec3]/20 backdrop-blur-sm self-start">
              <h3 className="text-2xl font-lexend font-bold text-white mb-4">
                Ready to Grow?
              </h3>
              <p className="text-gray-400 mb-6">
                Let's discuss how we can help your brand reach its full potential. Our team of experts is ready to create a customized strategy that will:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Increase your brand visibility",
                  "Drive qualified leads",
                  "Boost conversion rates",
                  "Maximize ROI",
                  "Scale your business"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-[#1a5ec3] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button 
                onClick={openModal}
                className="w-full bg-[#1a5ec3] text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-lexend flex items-center justify-center group"
              >
                Get Started
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a5ec3] py-12 lg:py-16 w-full">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-lexend mb-4">
            Ready to Take Your Brand to the Next Level?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful businesses that have transformed their digital presence with Unlmtd Marketing.
          </p>
          <button 
            onClick={openModal}
            className="bg-white text-[#1a5ec3] px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-lexend font-bold"
          >
            Contact Us Today
          </button>
        </div>
      </section>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
