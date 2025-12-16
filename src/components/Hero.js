import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(26,94,195,0.15),transparent_50%)]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1a5ec3]/10 blur-[100px] rounded-full animate-pulse" />
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1a5ec3]/5 blur-[100px] rounded-full" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-lexend tracking-tight mb-6 leading-tight flex flex-col items-center">
                        <div className="relative w-[280px] h-[80px] sm:w-[350px] sm:h-[100px] lg:w-[450px] lg:h-[120px] mb-4">
                            <Image
                                src="/logo.png"
                                alt="UNLMTD"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        Growth for Brands
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#1a5ec3] to-white">
                            That Refuse to Stay Small
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
                >
                    We help ambitious brands scale faster through performance marketing, creative strategy, and systems built to convert — not just look good.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/contact"
                        className="group relative px-8 py-4 bg-[#1a5ec3] text-white rounded-full font-lexend font-semibold text-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(26,94,195,0.5)]"
                    >
                        <span className="relative z-10">Book a Free Strategy Call</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </Link>

                    <Link
                        href="/#work"
                        className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-lexend font-medium text-lg hover:bg-white/5 transition-all hover:border-white/40"
                    >
                        See Our Work
                    </Link>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 text-sm text-gray-500 font-lexend"
                >
                    No contracts. No fluff. Just results.
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#1a5ec3] to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
