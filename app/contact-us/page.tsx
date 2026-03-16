import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - Old Monk Price',
    description: 'Get in touch with us for any queries regarding Old Monk prices or software recommendations.',
};

export default function ContactUs() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Have questions about prices or recommendations? We're here to help. Reach out to us anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-zinc-900/40 border border-amber-900/10 rounded-3xl p-8 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-amber-500 mb-8">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
                                        <Mail className="h-6 w-6 text-amber-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold mb-1">Email Us</p>
                                        <a href="mailto:shyamihtc@gmail.com" className="text-lg text-zinc-100 hover:text-amber-500 transition-colors">
                                            shyamihtc@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
                                        <Phone className="h-6 w-6 text-amber-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold mb-1">Call Us</p>
                                        <p className="text-lg text-zinc-100">+91 (Inquiry via Email)</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
                                        <MapPin className="h-6 w-6 text-amber-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold mb-1">Our Location</p>
                                        <p className="text-lg text-zinc-100">Across India - Digital Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-zinc-900/40 border border-amber-900/10 rounded-3xl p-8 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-amber-500 mb-6">Business Hours</h2>
                            <ul className="space-y-3">
                                <li className="flex justify-between text-zinc-300">
                                    <span>Monday - Friday</span>
                                    <span className="text-amber-500">9:00 AM - 6:00 PM</span>
                                </li>
                                <li className="flex justify-between text-zinc-300">
                                    <span>Saturday</span>
                                    <span className="text-amber-500">10:00 AM - 2:00 PM</span>
                                </li>
                                <li className="flex justify-between text-zinc-300">
                                    <span>Sunday</span>
                                    <span className="text-zinc-500 italic">Closed</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-zinc-900/40 border border-amber-900/10 rounded-3xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-amber-500 mb-8">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-zinc-950 border border-amber-900/20 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-amber-500/50 transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-zinc-950 border border-amber-900/20 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-amber-500/50 transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-zinc-950 border border-amber-900/20 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-amber-500/50 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-zinc-950 border border-amber-900/20 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold py-4 rounded-xl transition-all duration-300 shadow-xl shadow-amber-500/20 flex items-center justify-center space-x-2 group"
                            >
                                <span>Send Message</span>
                                <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
