interface Benefit {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const benefits: Benefit[] = [
    {
        id: 1,
        icon: '💰',
        title: 'Extra Income',
        description: 'Earn money from the luggage space you already have. Set your own prices.'
    },
    {
        id: 2,
        icon: '🌍',
        title: 'Flexible Schedule',
        description: 'Travel when you want. Only take deliveries that fit your route and timeline.'
    },
    {
        id: 3,
        icon: '👥',
        title: 'Help Others',
        description: 'Enable senders to save money and travelers to earn. Build a community.'
    },
    {
        id: 4,
        icon: '✅',
        title: 'Trusted Platform',
        description: 'Secure payments and verified senders. Your earnings are protected.'
    }
];

export function TravelerBenefits() {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3 font-heading">
                        Earn Like a Pro
                    </h2>
                    <p className="text-slate-600 text-lg">Why travelers love Social Shipping</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit) => (
                        <div key={benefit.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <div className="text-4xl mb-4">
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-bold text-blue-900 mb-2 font-heading">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-body">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
