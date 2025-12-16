import { motion } from 'framer-motion';
import Image from 'next/image';

const reasons = [
    {
        title: "Results Over Buzzwords",
        description: "Growth first, always. We don't hide behind jargon; we deliver measurable impact.",
        icon: "📊"
    },
    {
        title: "Creative + Data",
        description: "Performance powered by design. We blend analytical rigor with world-class aesthetics.",
        icon: "⚡"
    },
    {
        title: "Founder-Level Thinking",
        description: "We think like owners. Your ROI is our obsession, and we treat your budget like our own.",
        icon: "🧠"
    },
    {
        title: "Lean & Fast",
        description: "No bloated teams, no delays. We move with the speed your market demands.",
        icon: "🚀"
    }
];

export default function WhyUnlmtd() {
    return (
        <section className="w-full bg-[#0a0a0a] py-20 lg:py-32 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="flex flex-wrap items-center gap-3 text-4xl md:text-5xl font-bold text-white font-lexend mb-6 leading-tight">
                            <span>Why Brands Choose</span>
                            <div className="relative w-[140px] h-[40px] md:w-[180px] md:h-[55px] inline-block align-middle">
                                <Image
                                    src="/logo.png"
                                    alt="UNLMTD"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </h2>
                        <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                            In a sea of agencies that over-promise and under-deliver, we stand apart by focusing on what actually matters: your bottom line.
                        </p>
                        <div className="h-1 w-20 bg-[#1a5ec3]" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-[#1a5ec3]/30 transition-colors"
                            >
                                <div className="text-3xl mb-4">{reason.icon}</div>
                                <h3 className="text-xl font-bold text-white font-lexend mb-3">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {reason.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
