import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="relative w-32 h-12 mb-6">
                            <Image
                                src="/logo.png"
                                alt="Unlmtd Marketing"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-400 max-w-sm mb-8 font-lexend font-light">
                            We help ambitious brands scale faster through performance marketing, creative strategy, and systems built to convert.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Links */}
                            {['instagram', 'linkedin', 'twitter'].map((social) => (
                                <a
                                    key={social}
                                    href={`https://${social}.com/unlmtdmarketing`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#1a5ec3] hover:text-white transition-all duration-300"
                                >
                                    <span className="capitalize sr-only">{social}</span>
                                    <div className="w-5 h-5 bg-current mask-icon" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold font-lexend mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About', 'Services', 'Case Studies', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-400 hover:text-[#1a5ec3] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold font-lexend mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:hello@unlmtdmarketing.ca"
                                    className="text-gray-400 hover:text-[#1a5ec3] transition-colors"
                                >
                                    hello@unlmtdmarketing.ca
                                </a>
                            </li>
                            <li className="text-gray-400">
                                Toronto, Canada
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} UNLMTD Marketing. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
