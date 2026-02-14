"use client";

import React from 'react';
import { useAuthModal } from '@/hooks/useAuthModal';

export default function GetStartedCTA() {
    const authModal = useAuthModal();

    return (
        <button onClick={() => authModal.openGetStarted()} className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-500 via-cyan-500 to-sky-400 hover:from-blue-600 hover:via-cyan-600 hover:to-sky-500 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95">
            <span>Get Started</span>
            <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
            </svg>
        </button>
    );
}
