export function AboutConcept() {
    return (
        <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
                        The Concept
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-body">
                        Social Shipping emerged from a simple observation: millions of people travel every day with available space in their luggage or vehicles. Meanwhile, millions others need affordable ways to ship packages. We connect these two groups directly.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* The Problem */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading">
                            The Problem We Solve
                        </h3>
                        <ul className="space-y-4">
                            {[
                                'Traditional courier services charge high markups for logistics overhead',
                                'Travelers waste potential to monetize their journeys',
                                'Senders and travelers have no easy way to connect',
                                'Shipping costs don\'t reflect the actual simplicity of the transaction',
                            ].map((problem, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-600 font-body">{problem}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading">
                            How We Help
                        </h3>
                        <ul className="space-y-4">
                            {[
                                'Direct connection means senders get better rates and travelers keep more earnings',
                                'Senders benefit from competitive pricing and flexible delivery options',
                                'Travelers turn regular trips into income-generating opportunities',
                                'Our platform handles matching, communication, and secure transactions',
                            ].map((solution, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-600 font-body">{solution}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
