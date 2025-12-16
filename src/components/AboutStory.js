import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutStory() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-[#1a5ec3]/20 rounded-3xl blur-2xl" />
                    <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/about.jpg"
                            alt="Our Story"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-lexend mb-8">
                        More Than Just <span className="text-[#1a5ec3]">Marketing</span>
                    </h2>

                    <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                        <p>
                            At UNLMTD, we believe that every brand has a unique frequency—a signal that, when amplified correctly, resonates with the right audience. We started with a simple mission: to break the mold of traditional agencies that offer cookie-cutter solutions.
                        </p>
                        <p>
                            We are a collective of creators, strategists, and innovators obsessed with growth. We don't just chase trends; we set them. Our approach is rooted in data but driven by creativity, ensuring that every campaign we launch is not just seen, but felt.
                        </p>
                        <p>
                            From humble beginnings to partnering with industry leaders, our journey has been defined by one core principle: <strong className="text-white">Limitless Potential.</strong> We push boundaries because we know that in the digital age, playing it safe is the riskiest move you can make.
                        </p>
                    </div>

                    <div className="mt-10">
                        <a
                            href="/contact"
                            className="inline-block bg-[#1a5ec3] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#154b9f] transition-all duration-300 shadow-[0_0_20px_rgba(26,94,195,0.4)] hover:shadow-[0_0_30px_rgba(26,94,195,0.6)]"
                        >
                            Join the Movement
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
