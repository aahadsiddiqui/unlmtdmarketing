import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyUrl: '',
        service: '',
        budget: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const services = [
        "Digital Marketing (Ads/SEO)",
        "Brand Development",
        "Content Creation",
        "Web Development",
        "Full Service Partnership"
    ];

    const budgets = [
        "$3k - $5k",
        "$5k - $10k",
        "$10k - $25k",
        "$25k+"
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', companyUrl: '', service: '', budget: '', message: '' });
    };

    return (
        <section className="w-full min-h-screen bg-black pt-32 pb-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1a5ec3]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1a5ec3]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white font-lexend mb-8">
                            Let's Build <br />
                            <span className="text-[#1a5ec3]">Something Big.</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-lg">
                            Ready to scale? Tell us about your project, and let's determine if we're the right growth partner for you.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-white font-bold text-lg mb-2">Email Us</h3>
                                <a href="mailto:admin@unlmtdmarketing.ca" className="text-gray-400 hover:text-[#1a5ec3] transition-colors text-lg">admin@unlmtdmarketing.ca</a>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-2">Call Us</h3>
                                <div className="space-y-2">
                                    <p className="text-gray-400 text-lg">
                                        Shayan: <a href="tel:+14167880756" className="hover:text-[#1a5ec3] transition-colors">+1 (416)-788-0756</a>
                                    </p>
                                    <p className="text-gray-400 text-lg">
                                        Ryan: <a href="tel:+16479897926" className="hover:text-[#1a5ec3] transition-colors">+1 (647)-989-7926</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1a5ec3] focus:ring-1 focus:ring-[#1a5ec3] transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1a5ec3] focus:ring-1 focus:ring-[#1a5ec3] transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 font-medium ml-1">Company Website</label>
                                <input
                                    type="url"
                                    name="companyUrl"
                                    value={formData.companyUrl}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1a5ec3] focus:ring-1 focus:ring-[#1a5ec3] transition-all"
                                    placeholder="https://company.com"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">Service Interest</label>
                                    <div className="relative">
                                        <select
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1a5ec3] focus:ring-1 focus:ring-[#1a5ec3] transition-all appearance-none"
                                        >
                                            <option value="" disabled>Select a service</option>
                                            {services.map(s => <option key={s} value={s} className="bg-black">{s}</option>)}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">Monthly Budget</label>
                                    <div className="relative">
                                        <select
                                            name="budget"
                                            required
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1a5ec3] focus:ring-1 focus:ring-[#1a5ec3] transition-all appearance-none"
                                        >
                                            <option value="" disabled>Select range</option>
                                            {budgets.map(b => <option key={b} value={b} className="bg-black">{b}</option>)}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 font-medium ml-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1a5ec3] focus:ring-1 focus:ring-[#1a5ec3] transition-all resize-none"
                                    placeholder="Tell us about your goals..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-[#1a5ec3] text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-[1.02] ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {submitStatus === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-green-400 text-center text-sm mt-4"
                                >
                                    Message sent! We'll be in touch shortly.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
