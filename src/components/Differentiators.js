import { motion } from 'framer-motion';

const differentiators = [
    {
        title: "Results-First Approach",
        description: "We focus on metrics that matter. Every strategy is designed with clear, measurable objectives and ROI in mind.",
        features: ["Data-driven decision making", "Regular performance reporting", "Continuous optimization"],
        icon: "🎯"
    },
    {
        title: "Innovation at Core",
        description: "We stay ahead of digital trends, bringing cutting-edge strategies and creative solutions to your brand.",
        features: ["Latest technology adoption", "Creative problem solving", "Trend forecasting"],
        icon: "💡"
    },
    {
        title: "True Partnership",
        description: "We're not just a service provider; we're your growth partner, fully invested in your success.",
        features: ["Dedicated support team", "Strategic consultation", "Long-term relationship"],
        icon: "🤝"
    }
];

export default function Differentiators() {
    return (
        <section className="w-full bg-black py-20 lg:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white font-lexend mb-6"
                    >
                        What Sets Us <span className="text-[#1a5ec3]">Apart</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-[#1a5ec3] transition-colors duration-300 group"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white font-lexend mb-4 group-hover:text-[#1a5ec3] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                                {item.description}
                            </p>
                            <ul className="space-y-3">
                                {item.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-500 text-sm group-hover:text-gray-300 transition-colors">
                                        <svg className="w-4 h-4 text-[#1a5ec3] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
