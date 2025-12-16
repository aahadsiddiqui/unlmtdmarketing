import { motion } from 'framer-motion';

const companies = [
    "TechFlow",
    "Nexus",
    "Vanguard",
    "Elevate",
    "Momentum",
    "Apex"
];

export default function TrustBar() {
    return (
        <section className="w-full bg-black py-12 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-500 text-sm font-lexend mb-8 tracking-wider uppercase">
                    Trusted by fast-growing brands & founders across industries
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.1,
                                opacity: 1,
                                color: "#1a5ec3"
                            }}
                            className="text-2xl font-bold text-gray-400 cursor-pointer transition-colors duration-300 font-lexend"
                        >
                            {company}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
