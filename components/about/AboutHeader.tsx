export function AboutHeader() {
    return (
        <section className="w-full relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/Images/about-banner.webp)',
                }}
            >
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full py-18 sm:py-24 lg:py-26 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-heading drop-shadow-lg">
                            About Social Shipping
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-100 leading-relaxed font-body drop-shadow-md max-w-2xl">
                            Connecting people, simplifying shipping, and making travel more valuable—one parcel at a time.
                        </p>

                        {/* Decorative Element */}
                        <div className="mt-10 flex items-center gap-2">
                            <div className="w-1 h-12 bg-gradient-to-b from-purple-400 to-transparent rounded" />
                            <span className="text-sm font-semibold text-purple-300 uppercase tracking-widest">Our Story</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
