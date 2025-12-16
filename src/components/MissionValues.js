import { motion } from 'framer-motion';
import Image from 'next/image';

const values = [
    {
        title: "Innovation",
        description: "Constantly exploring new technologies and strategies to keep our clients ahead of the curve.",
        icon: "💡"
    },
    {
        title: "Excellence",
        description: "Delivering outstanding results through meticulous attention to detail and continuous improvement.",
        icon: "⭐"
    },
    {
        title: "Transparency",
        description: "Building trust through open communication and honest reporting of results.",
        icon: "🤝"
    },
    {
        title: "Growth",
        description: "Committed to the continuous growth of our clients and our own capabilities.",
        icon: "📈"
    }
];

export default function MissionValues() {
    return (
        <section className="w-full bg-black py-20 lg:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mission */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend mb-6">
                            Our Mission
                        </h2>
                        <div className="h-1 w-20 bg-[#1a5ec3] mb-8" />
                        <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
                            At UNLMTD, we transform businesses through innovative digital marketing strategies. Our mission is to deliver unlimited growth potential to brands that are ready to make their mark in the digital world.
                        </p>

                        <div className="bg-white/5 p-6 rounded-xl border-l-4 border-[#1a5ec3]">
                            <h3 className="text-white font-bold mb-2">Our Philosophy</h3>
                            <p className="text-gray-400 text-sm italic">
                                "We don't just chase trends; we build sustainable systems for growth. In a world of noise, we help you become the signal."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden border border-[#1a5ec3]/20 flex items-center justify-center group"
                    >
                        <div className="absolute inset-0">
                            <Image
                                src="/about.jpg"
                                alt="Pushing Boundaries"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    </motion.div>
                </div>

                {/* Values */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white font-lexend mb-16 text-center"
                    >
                        Our Core Values
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-[#1a5ec3]/50 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2"
                            >
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white font-lexend mb-4 group-hover:text-[#1a5ec3] transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
