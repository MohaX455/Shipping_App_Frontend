export function ValuePropositionSection() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
            ),
            title: 'Save on Shipping',
            description: 'Reduce delivery costs by up to 50% compared to traditional carriers.',
        },
        {
            icon: (
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
            ),
            title: 'Earn While You Travel',
            description: 'Monetize your trips by carrying vetted, insured parcels on your route.',
        },
        {
            icon: (
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
            ),
            title: 'Safe & Transparent',
            description: 'Reviews, verified profiles, and real‑time tracking for peace of mind.',
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-4 font-heading">
                        Why Choose Social Shipping?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body">
                        A better way to ship and travel
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="mb-4 p-3 bg-white rounded-lg w-fit">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed font-body">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
