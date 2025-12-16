import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const packages = [
    {
        name: 'VISIBILITY',
        subtitle: 'PACKAGE',
        description: 'Streamlined monthly content built from curated ideas.',
        price: '$1500',
        features: [
            { text: 'Monthly shoot', included: true },
            { text: '3 videos', included: true },
            { text: '2 brand photos', included: true },
            { text: 'Premium editing', included: true },
            { text: 'Content planning', included: false },
        ],
        highlight: false,
    },
    {
        name: 'MOMENTUM',
        subtitle: 'PACKAGE',
        description: 'Consistent monthly content with collaborative planning & support.',
        price: '$2000',
        features: [
            { text: 'Monthly shoot', included: true },
            { text: '5 videos', included: true },
            { text: '4 brand photos', included: true },
            { text: 'Premium editing', included: true },
            { text: 'Content planning', included: true },
        ],
        highlight: true,
    },
    {
        name: 'ELITE',
        subtitle: 'PACKAGE',
        description: 'A full-service content system tailored to your brand growth.',
        price: '$2750',
        features: [
            { text: 'Monthly shoot', included: true },
            { text: '8 videos', included: true },
            { text: '6 brand photos', included: true },
            { text: 'Premium editing', included: true },
            { text: 'Custom content planning', included: true },
        ],
        highlight: false,
    },
];

export default function ServicePackages() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1a5ec3]/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1a5ec3]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-lexend mb-6">
                        Monthly <span className="text-[#1a5ec3]">Packages</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Choose the perfect content engine for your brand's growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group rounded-2xl p-8 border transition-all duration-300 ${pkg.highlight
                                    ? 'bg-[#1a5ec3] border-[#1a5ec3] transform md:-translate-y-4 shadow-[0_0_40px_rgba(26,94,195,0.3)]'
                                    : 'bg-white/5 border-white/10 hover:border-[#1a5ec3]/50 hover:bg-white/10'
                                }`}
                        >
                            {pkg.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#1a5ec3] px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white font-lexend">{pkg.name}</h3>
                                <span className={`text-sm font-bold tracking-wider ${pkg.highlight ? 'text-white/80' : 'text-gray-400'}`}>
                                    {pkg.subtitle}
                                </span>
                                <p className={`mt-4 text-sm leading-relaxed ${pkg.highlight ? 'text-white/90' : 'text-gray-400'}`}>
                                    {pkg.description}
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {pkg.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        {feature.included ? (
                                            <div className={`p-1 rounded-full ${pkg.highlight ? 'bg-white/20' : 'bg-[#1a5ec3]/20'}`}>
                                                <Check className={`w-4 h-4 ${pkg.highlight ? 'text-white' : 'text-[#1a5ec3]'}`} />
                                            </div>
                                        ) : (
                                            <div className="p-1 rounded-full bg-gray-800">
                                                <X className="w-4 h-4 text-gray-500" />
                                            </div>
                                        )}
                                        <span className={`text-sm ${feature.included
                                                ? (pkg.highlight ? 'text-white' : 'text-gray-200')
                                                : 'text-gray-500 line-through'
                                            }`}>
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-8 border-t border-white/10">
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                                    <span className={`text-sm ${pkg.highlight ? 'text-white/80' : 'text-gray-400'}`}>/month</span>
                                </div>

                                <a
                                    href="/contact"
                                    className={`block w-full py-4 rounded-xl text-center font-bold transition-all duration-300 ${pkg.highlight
                                            ? 'bg-white text-[#1a5ec3] hover:bg-gray-100'
                                            : 'bg-[#1a5ec3] text-white hover:bg-[#154b9f]'
                                        }`}
                                >
                                    Get Started
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
