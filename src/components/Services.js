import { motion } from 'framer-motion';

const services = [
    {
        title: "Performance Marketing",
        subtitle: "Paid Media That Actually Performs",
        description: "Meta — campaigns optimized for ROI, not vanity metrics.",
        bullets: ["Funnel strategy", "Creative testing", "Conversion tracking", "Scaling & optimization"],
        icon: "📈"
    },
    {
        title: "Creative & Branding",
        subtitle: "Creative That Stops the Scroll",
        description: "Design and messaging that captures attention and drives action.",
        bullets: ["Ad creative & UGC direction", "Brand positioning", "Landing page visuals", "Content frameworks"],
        icon: "🎨"
    },
    {
        title: "Web & Funnels",
        subtitle: "Websites Built to Convert",
        description: "Your website should sell — not just exist.",
        bullets: ["High-conversion landing pages", "CRO & UX optimization", "Analytics & heatmaps", "Speed & mobile optimization"],
        icon: "💻"
    },
    {
        title: "Strategy & Consulting",
        subtitle: "Clarity Before Scale",
        description: "Fix what’s broken before spending more on ads.",
        bullets: ["Funnel audits", "Growth strategy", "Market positioning", "Data-driven decisions"],
        icon: "🧠"
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Services() {
    return (
        <section className="w-full bg-black py-20 lg:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white font-lexend mb-4"
                    >
                        Built for Growth. Engineered to Convert.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 font-lexend"
                    >
                        We don’t sell marketing. We build scalable growth engines.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1a5ec3]/50 transition-all duration-500 hover:bg-white/[0.07]"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-4xl grayscale group-hover:grayscale-0">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white font-lexend mb-2 group-hover:text-[#1a5ec3] transition-colors">
                                {service.title}
                            </h3>
                            <h4 className="text-lg text-gray-300 mb-4 font-medium">
                                {service.subtitle}
                            </h4>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-2">
                                {service.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                                        <span className="w-1.5 h-1.5 bg-[#1a5ec3] rounded-full mr-3" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
