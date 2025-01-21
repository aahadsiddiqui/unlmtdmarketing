export default function Services() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white font-lexend mb-12">Services We Offer</h1>

        {/* Digital Marketing */}
        <section className="mb-20">
          <h2 className="text-3xl text-[#1a5ec3] font-lexend mb-8">Digital Marketing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-black/30 p-6 rounded-lg border border-[#1a5ec3]/20">
                <h3 className="text-white font-lexend text-xl mb-3">Social Media Management</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• Platform-specific content strategy</li>
                  <li>• Community engagement and growth</li>
                  <li>• Content calendar development</li>
                  <li>• Performance analytics and reporting</li>
                  <li>• Trend monitoring and implementation</li>
                </ul>
              </div>
              <div className="bg-black/30 p-6 rounded-lg border border-[#1a5ec3]/20">
                <h3 className="text-white font-lexend text-xl mb-3">Paid Advertising</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• Meta Ads (Facebook & Instagram)</li>
                  <li>• Google Ads campaigns</li>
                  <li>• Audience targeting and optimization</li>
                  <li>• Budget management and ROI tracking</li>
                  <li>• A/B testing and performance optimization</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-black/30 p-6 rounded-lg border border-[#1a5ec3]/20">
                <h3 className="text-white font-lexend text-xl mb-3">Email Marketing</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• Campaign strategy and planning</li>
                  <li>• Newsletter design and copywriting</li>
                  <li>• Automation workflow setup</li>
                  <li>• List segmentation and management</li>
                  <li>• Performance tracking and optimization</li>
                </ul>
              </div>
              <div className="bg-black/30 p-6 rounded-lg border border-[#1a5ec3]/20">
                <h3 className="text-white font-lexend text-xl mb-3">SEO Optimization</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• Keyword research and strategy</li>
                  <li>• On-page SEO optimization</li>
                  <li>• Content optimization</li>
                  <li>• Technical SEO improvements</li>
                  <li>• Local SEO optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Development */}
        <section className="mb-20">
          <h2 className="text-3xl text-[#1a5ec3] font-lexend mb-8">Brand Development</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg border border-[#1a5ec3]/20">
              <h3 className="text-white font-lexend text-xl mb-3">Brand Strategy</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Brand positioning and messaging</li>
                <li>• Target audience analysis</li>
                <li>• Competitive research</li>
                <li>• Brand voice development</li>
                <li>• Brand guidelines creation</li>
              </ul>
            </div>
            <div className="bg-black/30 p-6 rounded-lg border border-[#1a5ec3]/20">
              <h3 className="text-white font-lexend text-xl mb-3">Visual Identity</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Logo design and variations</li>
                <li>• Color palette selection</li>
                <li>• Typography system</li>
                <li>• Brand asset creation</li>
                <li>• Style guide development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Creation */}
        <section className="mb-20">
          <h2 className="text-3xl text-[#1a5ec3] font-lexend mb-8">Content Creation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/30 p-6 rounded-lg border border-[#1a5ec3]/20">
              <h3 className="text-white font-lexend text-xl mb-3">Social Media Content</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Platform-optimized posts</li>
                <li>• Engaging visuals and graphics</li>
                <li>• Reels and short-form video</li>
                <li>• Hashtag strategy</li>
                <li>• Content calendar planning</li>
              </ul>
            </div>
            <div className="bg-black/30 p-6 rounded-lg border border-[#1a5ec3]/20">
              <h3 className="text-white font-lexend text-xl mb-3">Website Content</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Website copywriting</li>
                <li>• Blog post creation</li>
                <li>• Landing page optimization</li>
                <li>• SEO-friendly content</li>
                <li>• Call-to-action optimization</li>
              </ul>
            </div>
            <div className="bg-black/30 p-6 rounded-lg border border-[#1a5ec3]/20">
              <h3 className="text-white font-lexend text-xl mb-3">Visual Content</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Photography direction</li>
                <li>• Graphic design</li>
                <li>• Video production</li>
                <li>• Animation creation</li>
                <li>• Visual asset library building</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#1a5ec3]/20 to-black p-8 rounded-lg text-center">
          <h2 className="text-2xl text-white font-lexend mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-gray-300 mb-6">Let's create a customized strategy that fits your business needs.</p>
          <button 
            onClick={() => window.openModal?.()}
            className="bg-[#1a5ec3] text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-lexend"
          >
            Get Started Today
          </button>
        </section>
      </div>
    </div>
  );
}
