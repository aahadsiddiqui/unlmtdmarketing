import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "Deep dive into your brand, goals, and market position.",
        details: ["Business analysis", "Goal setting", "Market research", "Competitor analysis"]
    },
    {
        number: "02",
        title: "Strategy",
        description: "Develop customized plans aligned with your objectives.",
        details: ["Custom roadmap", "Resource planning", "Timeline creation", "KPI definition"]
    },
    {
        number: "03",
        title: "Execution",
        description: "Implement strategies with precision and creativity.",
        details: ["Strategy deployment", "Content creation", "Campaign launch", "Performance tracking"]
    },
    {
        number: "04",
        title: "Growth",
        description: "Monitor, analyze, and scale successful strategies.",
        details: ["Data analysis", "Strategy optimization", "Scale successful tactics", "Continuous improvement"]
    }
];

export default function ProcessTimeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="w-full bg-black py-20 lg:py-32 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-20">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 sm:gap-4 mb-6"
                    >
                        <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-white font-lexend whitespace-nowrap">The</span>
                        <div className="relative w-[80px] h-[30px] sm:w-[120px] sm:h-[40px] md:w-[180px] md:h-[60px]">
                            <Image
                                src="/logo.png"
                                alt="UNLMTD"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1a5ec3] font-lexend whitespace-nowrap">Process</span>
                    </motion.h2>
                </div>

                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-32 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block">
                    <motion.div
                        style={{ height: lineHeight }}
                        className="w-full bg-[#1a5ec3] origin-top"
                    />
                </div>

                <div className="space-y-12 md:space-y-24">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Content */}
                            <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <div className="text-[#1a5ec3] text-6xl font-bold opacity-20 mb-4 font-lexend">
                                    {step.number}
                                </div>
                                <h3 className="text-2xl font-bold text-white font-lexend mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {step.description}
                                </p>
                                <ul className={`space-y-2 inline-block text-left`}>
                                    {step.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-500">
                                            <span className="w-1.5 h-1.5 bg-[#1a5ec3] rounded-full mr-3" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Center Point */}
                            <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black border-2 border-[#1a5ec3] shadow-[0_0_20px_rgba(26,94,195,0.5)]">
                                <div className="w-3 h-3 bg-white rounded-full" />
                            </div>

                            {/* Empty Space for Balance */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
