'use client';

interface Step {
    number: number;
    title: string;
    description: string;
}

const steps: Step[] = [
    {
        number: 1,
        title: 'Create Your Profile',
        description: 'Sign up and add your travel details. Tell senders where and when you\'re traveling.'
    },
    {
        number: 2,
        title: 'Get Requests',
        description: 'Senders will contact you with parcel delivery requests along your route.'
    },
    {
        number: 3,
        title: 'Negotiate & Agree',
        description: 'Discuss the delivery fee directly with the sender. Agree on terms and payment.'
    },
    {
        number: 4,
        title: 'Deliver & Earn',
        description: 'Carry the parcel to the destination. Get paid once the recipient confirms delivery.'
    }
];

export function TravelerSteps() {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3 font-heading">
                        Four Simple Steps to Earn
                    </h2>
                    <p className="text-slate-600 text-lg">Start earning from your next trip</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {steps.map((step) => (
                        <div key={step.number} className="flex gap-6">
                            {/* Step Number Circle */}
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold text-xl font-heading shadow-lg">
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
