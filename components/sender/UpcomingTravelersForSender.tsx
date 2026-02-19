'use client';

import { useState, useEffect } from 'react';

interface TravelCard {
    id: string;
    travelerName: string;
    travelDate: string;
    fromLocation: string;
    toLocation: string;
    maxWeight: number;
}

export function UpcomingTravelersForSender() {
    const [travelers, setTravelers] = useState<TravelCard[]>([]);
    const [displayCount, setDisplayCount] = useState(3);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTravelers = async () => {
            try {
                setIsLoading(true);
                const apiUrl = 'https://api.jetcamer.com/social-shipping/api/home-page-data';

                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    },
                });

                if (!response.ok) {
                    console.error(`API Error: ${response.status}`);
                    setTravelers([]);
                    return;
                }

                const data = await response.json();
                const travelerData = data?.get_all_traveler || data?.travelers || [];

                if (!Array.isArray(travelerData)) {
                    setTravelers([]);
                    return;
                }

                const transformedTravelers: TravelCard[] = travelerData.map((traveler: any, index: number) => ({
                    id: traveler?.id?.toString() || String(index),
                    travelerName: traveler?.first_name && traveler?.last_name
                        ? `${traveler.first_name} ${traveler.last_name.charAt(0)}.`
                        : traveler?.first_name || `Traveler ${index + 1}`,
                    travelDate: traveler?.travel_date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
                    fromLocation: traveler?.country_from || traveler?.from || 'Unknown',
                    toLocation: traveler?.country_to || traveler?.to || 'Unknown',
                    maxWeight: parseInt(traveler?.max_weight || '25', 10),
                }));

                setTravelers(transformedTravelers);
            } catch (error) {
                console.error('Error fetching travelers:', error);
                setTravelers([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTravelers();
    }, []);

    const handleLoadMore = () => {
        setDisplayCount((prev) => prev + 3);
    };

    if (isLoading) {
        return (
            <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center py-20">
                        <div className="relative w-12 h-12">
                            <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 border-r-blue-600 rounded-full animate-spin"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (travelers.length === 0) {
        return null;
    }

    return (
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
                        Browse Available Travelers
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-body">
                        Connect with verified travelers heading to your destination and send your parcel
                    </p>
                </div>

                {/* Travelers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {travelers.slice(0, displayCount).map((traveler) => (
                        <div
                            key={traveler.id}
                            className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                        >
                            {/* Header */}
                            <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
                                <div className="w-20 h-20 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 font-heading">{traveler.travelerName}</h3>

                                {/* Route Info */}
                                <div className="space-y-3 mb-5 flex-1">
                                    <div className="flex gap-3">
                                        <div className="p-2 bg-blue-50 rounded-lg flex-shrink-0">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-semibold text-blue-600 uppercase">From</p>
                                            <p className="text-sm font-semibold text-slate-900 truncate">{traveler.fromLocation}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="p-2 bg-purple-50 rounded-lg flex-shrink-0">
                                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.553-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 16.382V5.618a1 1 0 00-1.553-.894L15 7m0 13V7m0 0L9 4" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-semibold text-purple-600 uppercase">To</p>
                                            <p className="text-sm font-semibold text-slate-900 truncate">{traveler.toLocation}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="space-y-2 mb-5 pb-5 border-b border-slate-200 text-xs">
                                    <div className="flex gap-2 text-slate-600">
                                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>{traveler.travelDate}</span>
                                    </div>
                                    <div className="flex gap-2 text-slate-600">
                                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        <span>Max: {traveler.maxWeight} kg</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:shadow-md transition-all duration-300">
                                    Send Parcel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More */}
                {displayCount < travelers.length && (
                    <div className="flex justify-center">
                        <button
                            onClick={handleLoadMore}
                            className="px-8 py-2.5 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 text-sm"
                        >
                            Load More Travelers
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
