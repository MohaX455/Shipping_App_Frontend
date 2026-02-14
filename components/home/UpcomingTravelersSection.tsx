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
        <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-4 font-heading">
                        Upcoming Travelers Trips
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-body">
                        Browse upcoming trips and connect with verified travelers heading your way
                    </p>
                </div>

                {/* Travelers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
                    {placeholderTravelers.slice(0, displayCount).map((traveler) => (
                        <div
                            key={traveler.id}
                            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            {/* Traveler Avatar - Larger */}
                            <div className="h-40 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                                {/* Decorative background elements */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-2 right-4 w-24 h-24 bg-white/30 rounded-full blur-xl" />
                                    <div className="absolute bottom-2 left-2 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl" />
                                </div>
                                <div className="relative z-10 w-24 h-24 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
                                    <svg
                                        className="w-12 h-12 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 font-heading">
                                    {traveler.travelerName}
                                </h3>

                                {/* Route Info */}
                                <div className="space-y-3.5 mb-5 flex-1">
                                    {/* From */}
                                    <div className="flex items-start gap-3 group/item">
                                        <div className="flex-shrink-0 mt-0.5 p-2 bg-blue-50 rounded-lg">
                                            <svg
                                                className="w-4 h-4 text-blue-600"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M6 2a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V5a3 3 0 00-3-3H6z" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">From</p>
                                            <p className="text-sm font-semibold text-slate-900 truncate group-hover/item:text-blue-600 transition-colors">
                                                {traveler.fromLocation}
                                            </p>
                                        </div>
                                    </div>

                                    {/* To */}
                                    <div className="flex items-start gap-3 group/item">
                                        <div className="flex-shrink-0 mt-0.5 p-2 bg-purple-50 rounded-lg">
                                            <svg
                                                className="w-4 h-4 text-purple-600"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6.553-3.276A1 1 0 0117 16.382V5.618a1 1 0 00-.553-.894L11 7m0 13V7m0 13L5.447 10.276M11 7V5.618a1 1 0 00-.553-.894l-6-3A1 1 0 003 2v13.764a1 1 0 001.447.894l5.553 2.776" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest">To</p>
                                            <p className="text-sm font-semibold text-slate-900 truncate group-hover/item:text-purple-600 transition-colors">
                                                {traveler.toLocation}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="space-y-2.5 mb-5 pb-5 border-b border-slate-200 text-xs">
                                    <div className="flex items-center gap-3 text-slate-600">
                                        <div className="flex-shrink-0 p-1.5 bg-slate-100 rounded-md">
                                            <svg
                                                className="w-3.5 h-3.5"
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
                                        </div>
                                        <span className="font-medium text-slate-700">{traveler.travelDate}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-600">
                                        <div className="flex-shrink-0 p-1.5 bg-slate-100 rounded-md">
                                            <svg
                                                className="w-3.5 h-3.5"
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
                                        </div>
                                        <span className="font-medium text-slate-700">Max: {traveler.maxWeight} kg</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
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
                            className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 text-sm hover:border-purple-600 hover:text-purple-600"
                        >
                            <svg
                                className="w-4 h-4"
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
