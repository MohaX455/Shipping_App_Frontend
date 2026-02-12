import { IMAGE_BASE } from "@/lib/constants";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative w-full min-h-fit md:min-h-[750px] flex items-end md:items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={`${IMAGE_BASE}/home-banner.webp`}
                    alt="Hero background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/5"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-0">
                <div className="w-full flex flex-col justify-end md:justify-center min-h-fit md:min-h-[750px]">
                    <div className="space-y-4 md:space-y-6">
                        {/* Main Heading */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-heading text-white">
                            <span className="block">Save Money</span>
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-sky-300 to-blue-300 block">
                                Shipping
                            </span>
                            <span className="block mt-1 md:mt-2">Make Money</span>
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-amber-300 to-orange-300 block">
                                Traveling
                            </span>
                        </h1>

                        {/* Description - Hidden on mobile */}
                        <p className="hidden md:block text-lg md:text-xl font-medium max-w-xl leading-relaxed font-body text-white/90">
                            Social Shipping connects senders who want to save on shipping with travelers happy to earn by carrying verified parcels along their route.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4 md:pt-6">
                            <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-500 via-cyan-500 to-sky-400 hover:from-blue-600 hover:via-cyan-600 hover:to-sky-500 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
