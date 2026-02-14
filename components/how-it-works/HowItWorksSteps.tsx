export function HowItWorksSteps() {
    const steps = [
        {
            id: 1,
            title: 'Sender Posts Request',
            description: 'A sender shares their parcel details, pickup location, and destination—either a specific trip or open to any traveler heading that way.',
            icon: (
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m-7 7h14" />
                </svg>
            ),
        },
        {
            id: 2,
            title: 'Traveler Responds',
            description: 'A traveler with a matching route sees the request and expresses interest. They review the parcel details and sender profile.',
            icon: (
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5-4a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            id: 3,
            title: 'Direct Negotiation',
            description: 'They connect directly through the platform. Discuss delivery details, payment, timing, and any special handling requirements.',
            icon: (
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
            ),
        },
        {
            id: 4,
            title: 'Delivery & Completion',
            description: 'Once agreed, the traveler carries the parcel as promised. Both confirm completion and leave feedback for future transactions.',
            icon: (
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mb-16 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
                        Step by Step
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-body">
                        Here's how the connection happens—from request to completion.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="flex flex-col h-full p-6 sm:p-8 bg-white rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                        >
                            {/* Step Number Circle */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100">
                                    {step.icon}
                                </div>
                                <span className="text-sm font-bold text-slate-500 uppercase tracking-wide font-heading">
                                    Step {step.id}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed font-body flex-grow">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Connection Flow Visual */}
                <div className="mt-16 p-8 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">
                        Direct Connection Model
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-body mb-4">
                        Once matched on our platform, senders and travelers communicate and coordinate directly. Social Shipping provides the connection infrastructure, messaging tools, and secure transaction management—but the relationship is between you and your partner.
                    </p>
                    <p className="text-slate-600 leading-relaxed font-body">
                        This direct model means lower costs, better flexibility, and personal service tailored to each delivery.
                    </p>
                </div>
            </div>
        </section>
    );
}
