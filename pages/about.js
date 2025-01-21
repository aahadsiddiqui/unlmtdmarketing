export default function About() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white font-lexend mb-8">About Us</h1>
        
        {/* Mission Statement */}
        <div className="mb-16">
          <h2 className="text-[#1a5ec3] text-2xl font-lexend mb-4">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            At UNLMTD, we transform businesses through innovative digital marketing strategies. 
            Our mission is to deliver unlimited growth potential to brands that are ready to make their mark in the digital world.
          </p>
        </div>

        {/* Core Services Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-black/30 p-6 rounded-lg border border-[#1a5ec3]/20">
            <h3 className="text-white font-lexend text-xl mb-3">Digital Marketing</h3>
            <p className="text-gray-400">
              Strategic social media management, targeted advertising, and data-driven campaigns that connect with your audience.
            </p>
          </div>
          <div className="bg-black/30 p-6 rounded-lg border border-[#1a5ec3]/20">
            <h3 className="text-white font-lexend text-xl mb-3">Brand Development</h3>
            <p className="text-gray-400">
              Comprehensive brand strategy, visual identity design, and brand voice development that sets you apart.
            </p>
          </div>
          <div className="bg-black/30 p-6 rounded-lg border border-[#1a5ec3]/20">
            <h3 className="text-white font-lexend text-xl mb-3">Content Creation</h3>
            <p className="text-gray-400">
              Engaging content that tells your story across all platforms, from social media to websites.
            </p>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16">
          <h2 className="text-[#1a5ec3] text-2xl font-lexend mb-6">The UNLMTD Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-lexend text-xl mb-3">Strategy First</h3>
              <p className="text-gray-400 mb-4">
                Every campaign begins with a deep understanding of your business goals, target audience, and market position.
              </p>
            </div>
            <div>
              <h3 className="text-white font-lexend text-xl mb-3">Results Driven</h3>
              <p className="text-gray-400 mb-4">
                We focus on metrics that matter, ensuring every marketing dollar drives real business growth.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-[#1a5ec3]/10 to-black p-8 rounded-lg">
          <h2 className="text-[#1a5ec3] text-2xl font-lexend mb-6">Why Choose UNLMTD?</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#1a5ec3] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Customized strategies for your unique needs
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#1a5ec3] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Transparent reporting and communication
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#1a5ec3] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Cutting-edge digital marketing techniques
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#1a5ec3] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Dedicated support throughout your journey
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
