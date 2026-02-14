export function HowItWorksConcept() {
    return (
        <section className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
                        The Platform Concept
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-body">
                        Social Shipping creates a direct bridge between people who need affordable shipping and travelers who are already making the journey.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Sender Side */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 font-heading">
                            For Senders
                        </h3>
                        <p className="text-slate-600 leading-relaxed font-body">
                            Post your parcel needs and connect with verified travelers heading your route. Compare options, negotiate directly, and get reliable delivery at better rates than traditional couriers.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'Post what you need to ship',
                                'Browse available travelers',
                                'Connect and negotiate terms',
                                'Track your parcel',
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-slate-600 font-body">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Traveler Side */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12M8 7a2 2 0 100-4 2 2 0 000 4zm0 0h.01M8 7H3a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V8a1 1 0 00-1-1h-1" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 font-heading">
                            For Travelers
                        </h3>
                        <p className="text-slate-600 leading-relaxed font-body">
                            Share your travel plans and earn extra income along the way. Connect with senders, discuss arrangements, and get compensated for helping them deliver their parcels.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'Share your upcoming trips',
                                'Accept delivery requests',
                                'Negotiate payment terms',
                                'Earn extra income',
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-slate-600 font-body">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Platform Role Clarification */}
                <div className="mt-16 p-8 bg-slate-50 rounded-lg border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                        Our Role as Intermediary
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-body">
                        Social Shipping is a connection platform. We match senders with travelers, facilitate communication, and provide tools for safe transactions. Once connected, you negotiate directly with each other—we're here to ensure a smooth, secure experience for both parties.
                    </p>
                </div>
            </div>
        </section>
    );
}
