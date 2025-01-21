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
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 text-white font-lexend">
            Welcome to the world of
            <br />
            <span className="relative">
              UNLMTD
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

      {/* Services Section - Updated gradient */}
      <section className="bg-gradient-to-b from-[#1a5ec3] to-black pt-0 pb-20 w-full">
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
            Join the ranks of successful businesses that have transformed their digital presence with UNLMTD.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <button 
              onClick={openModal}
              className="bg-white text-[#1a5ec3] px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-lexend font-bold flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Get In Touch
            </button>
            <a 
              href="https://instagram.com/unlmtd.marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1a5ec3] px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-lexend font-bold flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              DM us Today
            </a>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
