export function AboutCTA() {
    return (
        <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-purple-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">
                        Join the Community
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8 font-body">
                        Whether you're a sender looking to save money or a traveler wanting to earn on the go, Social Shipping is built for you. Let's make shipping simpler together.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="/sender"
                            className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors duration-200 font-heading"
                        >
                            For Senders
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <a
                            href="/traveler"
                            className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-bold rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-colors duration-200 font-heading"
                        >
                            For Travelers
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                        {[
                            { label: 'Learn More', href: '/how-it-works' },
                            { label: 'Get Help', href: '/help' },
                            { label: 'Contact Us', href: '/contact' },
                        ].map((link, idx) => (
                            <a key={idx} href={link.href} className="text-blue-600 hover:text-blue-700 font-semibold font-heading">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
