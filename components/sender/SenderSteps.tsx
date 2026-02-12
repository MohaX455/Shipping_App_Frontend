'use client';

interface Step {
    number: number;
    title: string;
    description: string;
}

const steps: Step[] = [
    {
        number: 1,
        title: 'Post Your Parcel',
        description: 'Fill in the parcel details, size, weight, and destination. Upload a photo and set your price.'
    },
    {
        number: 2,
        title: 'Find a Traveler',
        description: 'Browse available travelers heading your way. Check their profiles and ratings to find the perfect match.'
    },
    {
        number: 3,
        title: 'Agree & Pay',
        description: 'Negotiate the delivery fee directly with the traveler. Secure payment is held until delivery confirmation.'
    },
    {
        number: 4,
        title: 'Track & Receive',
        description: 'Track your parcel in real-time. Get confirmation when it arrives safely at your destination.'
    }
];

export function SenderSteps() {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3 font-heading">
                        Four Simple Steps
                    </h2>
                    <p className="text-slate-600 text-lg">Get started sending parcels in minutes</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {steps.map((step) => (
                        <div key={step.number} className="flex gap-6">
                            {/* Step Number Circle */}
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-xl font-heading shadow-lg">
                                    {step.number}
                                </div>
                            </div>
                            
                            {/* Step Content */}
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-blue-900 mb-2 font-heading">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-body">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
