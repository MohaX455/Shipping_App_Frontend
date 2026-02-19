"use client";

import React from "react";
import { useAuthModal } from "@/hooks/useAuthModal";

export default function GetStartedCTA() {
  const authModal = useAuthModal();

  return (
    <button
      onClick={() => authModal.openGetStarted()}
      className="
        inline-flex items-center gap-2
        px-6 sm:px-8
        py-3 sm:py-4
        bg-cyan-400
        hover:bg-white
        hover:text-blue-950
        text-blue-950
        font-bold
        text-base sm:text-lg
        rounded-md
        shadow-lg
        hover:shadow-xl
        transition-all duration-300
        active:scale-95
        cursor-pointer
      "
    >
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
