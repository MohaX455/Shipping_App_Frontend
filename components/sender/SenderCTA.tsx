export function SenderCTA() {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                    Ready to Save on Shipping?
                </h2>
                <p className="text-blue-100 text-lg mb-8 font-body">
                    Join thousands of senders who are saving money every day.
                </p>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl duration-300">
                    <span>My recent list</span>
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
}
