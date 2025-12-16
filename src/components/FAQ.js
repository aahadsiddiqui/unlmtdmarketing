import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "How quickly can we expect to see results?",
        answer: "We focus on quick wins while building long-term value. Typically, our paid advertising campaigns start generating leads within the first 2 weeks. SEO and brand building efforts compound over time, showing significant growth around months 3-6. We provide transparent timelines during our strategy phase so you know exactly what to expect."
    },
    {
        question: "Do you work with businesses in my specific industry?",
        answer: "Our strategies are principle-based and adaptable. We've successfully scaled brands in E-commerce, SaaS, Real Estate, Healthcare, and Professional Services. The core mechanics of growth—attention, trust, and conversion—apply universally, but we tailor the execution to your specific market dynamics."
    },
    {
        question: "What makes UNLMTD different from other agencies?",
        answer: "Most agencies are 'task-doers'—they post content or run ads without caring about the bottom line. We are 'growth-partners'. We obsess over your ROI, your revenue, and your scalability. If it doesn't drive growth, we don't do it. Plus, our creative is simply on another level."
    },
    {
        question: "What is your pricing structure?",
        answer: "We don't believe in cookie-cutter packages because your business isn't cookie-cutter. We offer custom retainers based on your goals and the resources required to hit them. During our discovery call, we'll assess your needs and propose a strategy that maximizes your budget's impact."
    },
    {
        question: "Who will I be working with directly?",
        answer: "You won't be handed off to a junior account manager. You'll have direct access to a dedicated strategist and our creative leads. We believe in close collaboration and keeping the lines of communication open to ensure we're always aligned with your vision."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="w-full bg-black py-20 lg:py-32 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white font-lexend mb-6"
                    >
                        Frequently Asked <span className="text-[#1a5ec3]">Questions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg"
                    >
                        Everything you need to know about partnering with us.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden hover:border-[#1a5ec3]/50 transition-colors duration-300"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-lg md:text-xl font-bold text-white font-lexend pr-8">
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-[#1a5ec3] border-[#1a5ec3] rotate-180' : ''}`}>
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 pt-0 text-gray-400 leading-relaxed font-light">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
