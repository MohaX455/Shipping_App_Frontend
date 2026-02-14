export function HowItWorksCTA() {
    return (
        <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8 font-body">
                        Whether you're a sender looking for affordable shipping or a traveler wanting to earn on the go, the next step is simple.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="/sender"
                            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-200 font-heading"
                        >
                            Get Started as Sender
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <a
                            href="/traveler"
                            className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-bold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200 font-heading"
                        >
                            Get Started as Traveler
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-slate-500 font-body">
                        Have questions? <a href="/help" className="text-blue-600 hover:underline font-semibold">Visit our Help Center</a> or <a href="/contact" className="text-blue-600 hover:underline font-semibold">Contact us</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}
