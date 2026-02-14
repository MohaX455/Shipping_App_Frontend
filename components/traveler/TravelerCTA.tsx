export function TravelerCTA() {
    return (
        <section className="w-full py-16 sm:py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
                        Ready to Earn While You Travel?
                    </h2>
                    <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto font-body">
                        Join thousands of travelers making money on every trip
                    </p>

                    {/* CTA Button */}
                    <div className="pt-6">
                        <button className="inline-flex items-center px-8 sm:px-12 py-4 sm:py-5 bg-white text-purple-600 font-bold text-lg sm:text-xl rounded-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer font-heading">
                            My Recent List
                            <svg
                                className="ml-3 w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
