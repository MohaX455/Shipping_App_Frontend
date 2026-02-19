'use client';

import { useRouter } from 'next/navigation';

export function SenderCTA() {
    const router = useRouter();

    return (
        <section className="w-full py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading">
                        Ready to Save on Shipping?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body">
                        Browse available travelers heading your way and send your first parcel today
                    </p>

                    {/* CTA Button */}
                    <div className="pt-4">
                        <button
                            onClick={() => router.push('/#upcoming-travelers')}
                            className="inline-flex items-center px-8 sm:px-10 py-3 sm:py-4 bg-blue-600 text-white font-semibold text-base sm:text-lg rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer font-heading"
                        >
                            Browse Travels
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
