import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutHero() {
    return (
        <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a5ec3]/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1a5ec3]/5 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center mb-6"
                >
                    <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-lexend mb-4">About</span>
                    <div className="relative w-[180px] h-[50px] sm:w-[250px] sm:h-[75px] md:w-[300px] md:h-[90px]">
                        <Image
                            src="/logo.png"
                            alt="UNLMTD"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Where innovation meets results. We are the growth partners for brands that refuse to settle for average.
                </motion.p>
            </div>
        </section>
    );
}
