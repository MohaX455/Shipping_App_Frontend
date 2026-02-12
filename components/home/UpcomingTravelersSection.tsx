'use client';

import { useState } from 'react';

interface TravelCard {
    id: string;
    travelerName: string;
    travelDate: string;
    fromLocation: string;
    toLocation: string;
    maxWeight: number;
    imageUrl?: string;
}

// Placeholder data - sera remplacé par API
const placeholderTravelers: TravelCard[] = [
    {
        id: '1',
        travelerName: 'John D.',
        travelDate: 'Feb 15, 2026',
        fromLocation: 'New York',
        toLocation: 'Los Angeles',
        maxWeight: 25,
    },
    {
        id: '2',
        travelerName: 'Sarah M.',
        travelDate: 'Feb 16, 2026',
        fromLocation: 'Chicago',
        toLocation: 'Denver',
        maxWeight: 20,
    },
    {
        id: '3',
        travelerName: 'Mike T.',
        travelDate: 'Feb 17, 2026',
        fromLocation: 'Boston',
        toLocation: 'Miami',
        maxWeight: 30,
    },
];

export function UpcomingTravelersSection() {
    const [displayCount, setDisplayCount] = useState(3);

    const handleLoadMore = () => {
        setDisplayCount((prev) => prev + 3);
    };

    return (
        <section className="py-15 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-4 font-heading">
                        Upcoming Travelers Trips
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body">
                        Browse upcoming trips and connect with verified travelers
                    </p>
                </div>

                {/* Travelers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {placeholderTravelers.slice(0, displayCount).map((traveler) => (
                        <div
                            key={traveler.id}
                            className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Traveler Avatar */}
                            <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                                    <svg
                                        className="w-12 h-12 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">
                                    {traveler.travelerName}
                                </h3>

                                {/* Route Info */}
                                <div className="space-y-4 mb-6">
                                    {/* From */}
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg
                                                className="w-5 h-5 text-blue-600"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M6 2a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V5a3 3 0 00-3-3H6z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">From</p>
                                            <p className="text-lg font-semibold text-slate-900">
                                                {traveler.fromLocation}
                                            </p>
                                        </div>
                                    </div>

                                    {/* To */}
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg
                                                className="w-5 h-5 text-green-600"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6.553-3.276A1 1 0 0117 16.382V5.618a1 1 0 00-.553-.894L11 7m0 13V7m0 13L5.447 10.276M11 7V5.618a1 1 0 00-.553-.894l-6-3A1 1 0 003 2v13.764a1 1 0 001.447.894l5.553 2.776" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">To</p>
                                            <p className="text-lg font-semibold text-slate-900">
                                                {traveler.toLocation}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-slate-600">
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <span className="text-sm">{traveler.travelDate}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-slate-600">
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                                />
                                            </svg>
                                            <span className="text-sm">Max: {traveler.maxWeight} kg</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                                    Send Package
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More */}
                {displayCount < placeholderTravelers.length && (
                    <div className="flex justify-center">
                        <button
                            onClick={handleLoadMore}
                            className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                            Load More Trips
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
