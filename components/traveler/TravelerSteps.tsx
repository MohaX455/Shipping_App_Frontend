'use client';

import Image from 'next/image';
import { IMAGE_BASE } from '@/lib/constants';

interface StepData {
    number: number;
    title: string;
    description: string;
    image?: string;
    imagePosition?: 'left' | 'right';
}

const stepsData: StepData[] = [
    {
        number: 1,
        title: 'Create Your Profile',
        description: 'Sign up and build your traveler profile. Add your upcoming trips, destinations, and luggage space availability. Verify your identity for trust.',
        image: '/Images/traveler-img01.webp',
        imagePosition: 'right',
    },
    {
        number: 2,
        title: 'Browse & Offer',
        description: 'View incoming parcel requests from senders heading to your destination. Review details and make competitive offers to transport their packages.',
        image: '/Images/traveler-img02.webp',
        imagePosition: 'left',
    },
    {
        number: 3,
        title: 'Accept & Coordinate',
        description: 'Negotiate terms and agree on a delivery fee with the sender. Coordinate pickup details, location, and timing through our secure messaging.',
        image: '/Images/traveler-img03.webp',
        imagePosition: 'right',
    },
    {
        number: 4,
        title: 'Pickup & Deliver',
        description: 'Pick up the parcel at the agreed time and location. Transport it carefully to the destination. Coordinate with the sender for final handoff and confirm on the app.',
        image: '/Images/traveler-img04.webp',
        imagePosition: 'left',
    },
];

export function TravelerSteps() {
    return (
        <section className="w-full py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-16 sm:space-y-20">
                    {stepsData.map((step, index) => (
                        <div key={step.number} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Content */}
                            <div className={`space-y-4 ${step.imagePosition === 'left' ? 'lg:order-2' : ''}`}>
                                {/* Step Number & Title */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl font-heading shadow-lg">
                                        {step.number}
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 pt-1 font-heading">
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body ml-0 sm:ml-4 lg:ml-0">
                                    {step.description}
                                </p>
                            </div>

                            {/* Image */}
                            {step.image && (
                                <div className={`relative w-full h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg ${step.imagePosition === 'left' ? 'lg:order-1' : ''}`}>
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
