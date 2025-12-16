import { motion } from 'framer-motion';

const services = [
    {
        category: "Digital Marketing",
        description: "Data-driven campaigns that scale your revenue, not just your traffic.",
        items: [
            "Social Media Management",
            "Paid Advertising (Meta/Google)",
            "Email Marketing & Automation",
            "SEO & Content Strategy",
            "Conversion Rate Optimization"
        ],
        deliverables: "Monthly Strategy, Ad Creatives, Copywriting, A/B Testing, Analytics Dashboard",
        outcome: "Predictable lead generation and measurable ROI.",
        icon: "📈"
    },
    {
        category: "Brand Development",
        description: "Building an identity that commands attention and builds trust instantly.",
        items: [
            "Brand Strategy & Positioning",
            "Visual Identity System",
            "Logo Design & Typography",
            "Brand Voice & Messaging",
            "Brand Guidelines"
        ],
        deliverables: "Logo Suite, Color Palette, Typography System, Brand Book, Social Assets",
        outcome: "A cohesive brand that stands out in a crowded market.",
        icon: "💫"
    },
    {
        category: "Content Creation",
        description: "High-end production that tells your story and engages your audience.",
        items: [
            "Social Media Content (Reels/TikTok)",
            "Professional Photography",
            "Video Production & Editing",
            "Copywriting & Blog Writing",
            "Graphic Design"
        ],
        deliverables: "Content Calendar, 12-15 Short-form Videos, Photo Library, Weekly Posts",
        outcome: "Consistent, high-quality content that builds community.",
        icon: "🎨"
    },
    {
        category: "Web Development",
        description: "Fast, responsive, and stunning websites designed to convert visitors.",
        items: [
            "Custom Web Design & Dev",
            "E-commerce (Shopify/Woo)",
            "Landing Page Optimization",
            "UI/UX Design",
            "Speed & SEO Optimization"
        ],
        deliverables: "Fully Responsive Site, CMS Integration, SEO Setup, Analytics Integration",
        outcome: "A 24/7 salesperson that looks amazing on every device.",
        icon: "💻"
    }
];

export default function ServicesList() {
    return (
        <section className="w-full bg-black py-20 lg:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-[#1a5ec3]/50 hover:shadow-[0_0_30px_rgba(26,94,195,0.2)] transition-all duration-500 group ${index % 2 === 1 ? 'md:translate-y-12' : ''
                                }`}
                        >
                            <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-3xl font-bold text-white font-lexend mb-4 group-hover:text-[#1a5ec3] transition-colors">
                                {service.category}
                            </h3>

                            <p className="text-gray-300 mb-8 text-lg font-light leading-relaxed">
                                {service.description}
                            </p>

                            <div className="space-y-6 mb-8 flex-grow">
                                <div>
                                    <h4 className="text-[#1a5ec3] font-bold text-sm uppercase tracking-wider mb-3">Includes</h4>
                                    <ul className="space-y-2">
                                        {service.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors">
                                                <span className="w-1.5 h-1.5 bg-[#1a5ec3] rounded-full mr-3" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/10">
                                <div className="mb-4">
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Deliverables</h4>
                                    <p className="text-gray-400 text-sm">{service.deliverables}</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">The Outcome</h4>
                                    <p className="text-[#1a5ec3] text-sm font-medium">{service.outcome}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
