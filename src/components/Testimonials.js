import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        quote: "UNLMTD helped us scale profitably while fixing our funnel. Best decision we made.",
        author: "Founder, E-Commerce Brand"
    },
    {
        quote: "Finally an agency that understands performance AND creative.",
        author: "Startup CEO"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full bg-black py-20 lg:py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1a5ec3]/5 blur-[120px] rounded-full" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white font-lexend mb-16"
                >
                    Real Growth. Real Results.
                </motion.h2>

                <div className="relative h-[200px] sm:h-[150px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <p className="text-2xl sm:text-3xl md:text-4xl text-white font-light italic mb-8 leading-relaxed">
                                "{testimonials[currentIndex].quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-[#1a5ec3]" />
                                <p className="text-[#1a5ec3] font-bold tracking-wide uppercase text-sm">
                                    {testimonials[currentIndex].author}
                                </p>
                                <div className="h-[1px] w-12 bg-[#1a5ec3]" />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#1a5ec3] w-8' : 'bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
