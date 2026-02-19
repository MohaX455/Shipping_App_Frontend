export function HowItWorksSection() {
    const steps = [
        {
            number: 1,
            title: 'Find a matching traveler or sender',
            description:
                'Social Shipping matches travelers with extra luggage space to senders who need to send packages along the same route.',
        },
        {
            number: 2,
            title: 'Agree on a delivery fee',
            description:
                'Traveler and sender negotiate a delivery fee using Social Shipping. Payment information is provided to Social Shipping as collateral.',
        },
        {
            number: 3,
            title: 'Deliver',
            description:
                'Traveler carries package to destination and gets confirmation code from recipient. Social Shipping transfers payment to traveler on successful confirmation of delivery.',
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
            <div className="max-w-330 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-600 mb-4 font-heading">
                        How It Works
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Step Number Circle */}
                            <div className="mb-6 flex justify-center md:justify-start">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-slate-600 to-gray-400 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                                    {step.number}
                                </div>
                            </div>

                            {/* Step Content */}
                            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-body">
                                    {step.description}
                                </p>
                            </div>

                            {/* Arrow - hidden on mobile, shown on md+ between cards */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:flex absolute top-8 -right-4 transform -translate-x-1/2 text-slate-300 z-10">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
