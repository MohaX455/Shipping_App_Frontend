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
        title: 'Cost-Smart Options',
        description: 'Choose affordable delivery options and compare offers to get the best value.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Handpicked Routes',
        description: 'Connect with travelers whose routes match your parcel’s path for efficient delivery.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 003 16.382V5.618a1 1 0 011.553-.894L9 7.618m0 0l6-3.618m-6 3.618v12l6-3.618m0 0l5.447-2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.553-.894L15 7.618m0 0v12" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Trusted Profiles',
        description: 'View traveler ratings and past activity to choose confident matches for your shipments.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 20h13a1 1 0 001-1V9a7 7 0 10-14 0v10a1 1 0 001 1z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 10l2 2 4-4" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Direct Communication',
        description: 'Message travelers directly through our secure platform to negotiate terms and coordinate pickups.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3l3 8 4-16 3 8h4" />
            </svg>
        ),
    },
    {
        id: 5,
        title: 'Easy Connections',
        description: 'Connect directly with travelers and negotiate terms that work for both. Social Shipping facilitates the entire process.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <rect x="2" y="7" width="20" height="12" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4" />
            </svg>
        ),
    },
    {
        id: 6,
        title: 'Responsive Support',
        description: 'Access helpful guidance and clear steps from a responsive support channel when needed.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
        ),
    },
];

export function SenderBenefits() {
    return (
        <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-blue-50 to-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-heading">
                        Benefits For Senders
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body">
                        Discover why thousands of senders trust Social Shipping for their deliveries
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {benefitsData.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="group p-6 sm:p-8 bg-white rounded-lg sm:rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
