import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, IMAGE_BASE } from '@/lib/constants';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full text-white border-t border-slate-800 flex items-center">
            <Image
                src={`${IMAGE_BASE}/footer-banner.webp`}
                alt="Footer background"
                fill
                priority
                className="object-cover object-center"
            />
            <div className="z-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Footer Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center">
                            <Image
                                src={`${IMAGE_BASE}/SS-Logo.webp`}
                                alt="Social Shipping"
                                width={160}
                                height={48}
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed font-body">
                            Social Shipping connects senders and travelers to make shipping affordable and rewarding.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 font-heading">Platform</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/sender"
                                    className="text-slate-400 hover:text-white transition-colors text-sm"
                                >
                                    For Senders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/traveler"
                                    className="text-slate-400 hover:text-white transition-colors text-sm"
                                >
                                    For Travelers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/how-it-works"
                                    className="text-slate-400 hover:text-white transition-colors text-sm"
                                >
                                    How It Works
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 font-heading">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/about-us"
                                    className="text-slate-400 hover:text-white transition-colors text-sm"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/help"
                                    className="text-slate-400 hover:text-white transition-colors text-sm"
                                >
                                    Help & Support
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact-us"
                                    className="text-slate-400 hover:text-white transition-colors text-sm"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 font-heading">Connect</h3>
                        <p className="text-slate-400 text-sm mb-4 font-body">
                            Follow us on social media to stay updated.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
                                aria-label="Twitter"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.08-7-2-11z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm">
                        &copy; {currentYear} Social Shipping. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="#"
                            className="text-slate-400 hover:text-white transition-colors text-sm"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-slate-400 hover:text-white transition-colors text-sm"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
