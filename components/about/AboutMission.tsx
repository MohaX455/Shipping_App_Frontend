export function AboutMission() {
    return (
        <section className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">
                        Our Mission
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6 font-body">
                        We believe shipping doesn't have to be expensive, and travel doesn't have to be purely personal. Social Shipping exists to bridge this gap—creating a community where people help each other move goods affordably while travelers earn from their journeys.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed font-body">
                        By connecting senders directly with travelers, we're building a more sustainable, human-centered logistics network. One where both sides benefit, transactions are transparent, and the cost of shipping drops significantly compared to traditional couriers.
                    </p>
                </div>

                {/* Key Values */}
                <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Transparency',
                            description: 'Clear communication, honest pricing, and open negotiations between senders and travelers.',
                            icon: '🎯',
                        },
                        {
                            title: 'Affordability',
                            description: 'Lower costs for senders through direct connections without courier markups.',
                            icon: '💰',
                        },
                        {
                            title: 'Opportunity',
                            description: 'Travelers earn extra income by sharing journeys they\'re already making.',
                            icon: '🚀',
                        },
                    ].map((value, idx) => (
                        <div key={idx} className="p-6 sm:p-8 bg-slate-50 rounded-lg border border-slate-200">
                            <div className="text-4xl mb-4">{value.icon}</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                                {value.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed font-body">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
