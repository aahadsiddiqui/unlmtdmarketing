import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
    { label: 'CLIENTS SCALED', value: 50, suffix: '+' },
    { label: 'AD SPEND MANAGED', value: 2, prefix: '$', suffix: 'M+' },
    { label: 'CONTENT CREATED', value: 10, suffix: 'k+' },
    { label: 'ROI GENERATED', value: 300, suffix: '%' },
];

const Counter = ({ value, prefix = '', suffix = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepTime = duration / steps;
            let current = 0;
            const increment = value / steps;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    );
};

export default function AboutStats() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center p-8 rounded-3xl bg-[#050505] border border-white/5 hover:border-[#1a5ec3]/30 transition-all duration-300 group"
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a5ec3] font-lexend mb-3 group-hover:scale-110 transition-transform duration-300">
                                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            </div>
                            <div className="text-xs md:text-sm text-gray-400 font-medium tracking-[0.2em] uppercase text-center">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
