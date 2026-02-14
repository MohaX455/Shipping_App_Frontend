export function AboutRole() {
    return (
        <section className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
                        What We Are
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-body">
                        Social Shipping is a connection platform, not a logistics provider. We don't handle packages, arrange insurance, or manage deliveries directly. Instead, we provide the infrastructure for senders and travelers to connect, communicate, and coordinate safely.
                    </p>
                </div>

                {/* What We Do vs What We Don't Do */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* What We Do */}
                    <div className="p-8 sm:p-10 bg-blue-50 rounded-lg border border-blue-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white">
                                ✓
                            </span>
                            What We Provide
                        </h3>
                        <ul className="space-y-3">
                            {[
                                'Smart matching algorithm to connect compatible users',
                                'Secure messaging platform for direct communication',
                                'Profile verification and user ratings',
                                'Payment processing and transaction security',
                                'Customer support and dispute resolution',
                                'Tools to track connections and build reputation',
                            ].map((item, idx) => (
                                <li key={idx} className="text-slate-700 font-body flex items-start gap-3">
                                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* What We Don't Do */}
                    <div className="p-8 sm:p-10 bg-slate-50 rounded-lg border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-400 text-white">
                                —
                            </span>
                            What You Manage
                        </h3>
                        <ul className="space-y-3">
                            {[
                                'Actual delivery of parcels (traveler responsibility)',
                                'Parcel handling or insurance claims',
                                'Negotiated terms between sender and traveler',
                                'Payment disputes beyond platform facilitation',
                                'Liability for lost or damaged items',
                                'Detailed logistics or tracking after handoff',
                            ].map((item, idx) => (
                                <li key={idx} className="text-slate-700 font-body flex items-start gap-3">
                                    <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Closing Statement */}
                <div className="mt-12 sm:mt-16 p-8 bg-slate-100 rounded-lg border border-slate-300">
                    <p className="text-slate-700 leading-relaxed font-body">
                        <strong className="font-heading">In short:</strong> We're the matchmaker and the facilitator. You're the driver. By keeping our role focused and transparent, we keep costs low and give you full control over how your delivery happens.
                    </p>
                </div>
            </div>
        </section>
    );
}
