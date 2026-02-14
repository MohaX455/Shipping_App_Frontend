import React from 'react';

interface BenefitCard {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const benefitsData: BenefitCard[] = [
    {
        id: 1,
        title: 'Earn on the Go',
        description: 'Turn planned trips into extra income by connecting with nearby senders.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Flexible Trips',
        description: 'Pick deliveries that fit your schedule and travel plans—work on your terms.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Grow Reputation',
        description: 'Collect ratings and reviews to build a dependable traveler profile.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Clear Guidelines',
        description: 'Find straightforward steps and clear expectations for each delivery you accept.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12V7a2 2 0 00-2-2H5a2 2 0 00-2 2v5" />
            </svg>
        ),
    },
    {
        id: 5,
        title: 'Fast Payouts',
        description: 'Receive clear payout options and straightforward transfer timing after confirmation.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        id: 6,
        title: 'Join a Network',
        description: 'Connect with a global community of travelers to expand opportunities on your routes.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2v20" />
            </svg>
        ),
    },
];

export function TravelerBenefits() {
    return (
        <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-purple-50 to-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-heading">
                        Benefits For Travelers
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body">
                        Discover why travelers love Social Shipping and how they earn more with every trip
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {benefitsData.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="group p-6 sm:p-8 bg-white rounded-lg sm:rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {benefit.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed font-body text-sm sm:text-base">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
