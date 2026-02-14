import { IMAGE_BASE } from "@/lib/constants";
import Image from "next/image";
import GetStartedCTA from './GetStartedCTA';

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
                {/* Dark overlay - darker on left for text contrast */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/7.5"></div>
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
                        <p className="hidden md:block text-lg md:text-xl font-medium max-w-lg leading-relaxed font-body text-white/90">
                            Social Shipping connects senders who want to save on shipping with travelers happy to earn by carrying verified parcels along their route.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4 md:pt-6">
                            <GetStartedCTA />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
