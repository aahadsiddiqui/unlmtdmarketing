import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "Audit brand, funnel, and data",
        icon: "🔍"
    },
    {
        number: "02",
        title: "Build",
        description: "Design strategy, creative, and systems",
        icon: "🛠️"
    },
    {
        number: "03",
        title: "Scale",
        description: "Optimize, test, and grow aggressively",
        icon: "📈"
    }
];

export default function HowItWorks() {
    return (
        <section className="w-full bg-[#0a0a0a] py-20 lg:py-32 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white font-lexend mb-4"
                    >
                        Simple. Strategic. Scalable.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#1a5ec3]/30 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-[#0a0a0a] border-2 border-[#1a5ec3]/30 group-hover:border-[#1a5ec3] flex items-center justify-center mb-8 relative z-10 transition-colors duration-300 shadow-[0_0_30px_rgba(26,94,195,0.1)] group-hover:shadow-[0_0_30px_rgba(26,94,195,0.3)]">
                                <span className="text-3xl">{step.icon}</span>
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#1a5ec3] rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    {step.number}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white font-lexend mb-3 group-hover:text-[#1a5ec3] transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 max-w-xs leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
