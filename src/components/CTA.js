import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1a5ec3]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white font-lexend mb-6"
                >
                    Ready to Scale <span className="text-[#1a5ec3]">Without Limits?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light"
                >
                    Join the ambitious brands that are redefining their industries. Limited spots available for this quarter.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                        href="/contact"
                        className="group relative px-10 py-5 bg-[#1a5ec3] text-white rounded-full font-lexend font-bold text-xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(26,94,195,0.6)] hover:scale-105 inline-block"
                    >
                        <span className="relative z-10">Book Your Strategy Call</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </Link>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 text-sm text-gray-500"
                >
                    Free 30-Minute Consultation • No Commitment Required
                </motion.p>
            </div>
        </section>
    );
}
