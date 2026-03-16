import { Mail, MapPin, Phone, Github, Twitter, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';
import { Wine } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-amber-900/20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-2 rounded-lg">
                                <Wine className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
                                Old Monk
                            </span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Providing the most updated and accurate pricing information for Old Monk across India. Since 1954, for the spirit of life.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors"><Github className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">India Prices</Link></li>
                            <li><Link href="/apps" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">Popular Apps</Link></li>
                            <li><Link href="/games" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">Top Games</Link></li>
                            <li><Link href="/software" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">Essential Software</Link></li>
                            <li><Link href="/vpn" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">Best VPNs</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Support</h3>
                        <ul className="space-y-4">
                            <li><Link href="/contact-us" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">Contact Us</Link></li>
                            <li><Link href="/privacy-policy" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">Terms of Service</Link></li>
                            <li><Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">Cookie Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-sm text-zinc-400">
                                <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                                <a href="mailto:shyamihtc@gmail.com" className="hover:text-amber-500 transition-colors">shyamihtc@gmail.com</a>
                            </li>
                            <li className="flex items-start space-x-3 text-sm text-zinc-400">
                                <MapPin className="h-5 w-5 text-amber-500 shrink-0" />
                                <span>Available Nationwide, India</span>
                            </li>
                            <li className="flex items-start space-x-3 text-sm text-zinc-400">
                                <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                                <span>+91 (Contact via Email)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-amber-900/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-zinc-500 text-xs">
                    <p>© {new Date().getFullYear()} Old Monk Price. All rights reserved.</p>
                    <p>This site is for information purposes only. Please drink responsibly.</p>
                </div>
            </div>
        </footer>
    );
}
