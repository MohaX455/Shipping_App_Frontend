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
        title: 'Post Your Parcel',
        description: 'Create a listing with details about your parcel - size, weight, destination, and preferred delivery date. Set your budget for the delivery fee.',
        image: '/Images/sender-img01.webp',
        imagePosition: 'right',
    },
    {
        number: 2,
        title: 'Browse & Connect',
        description: 'Browse available travelers going to your destination. Review their profiles, ratings, and verified information. Message them directly to discuss terms.',
        image: '/Images/sender-img02.webp',
        imagePosition: 'left',
    },
    {
        number: 3,
        title: 'Agree & Connect',
        description: 'Negotiate and agree on a final delivery fee with the traveler through our platform. Social Shipping facilitates the connection and secure messaging between both parties.',
        image: '/Images/sender-img03.webp',
        imagePosition: 'right',
    },
    {
        number: 4,
        title: 'Hand Off & Coordinate',
        description: 'Meet the traveler at the scheduled time and hand off your parcel. Track communication through the app. Once the traveler confirms pickup, you\'re all set.',
        image: '/Images/sender-img04.webp',
        imagePosition: 'left',
    },
];

export function SenderSteps() {
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
                                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl font-heading shadow-lg">
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
