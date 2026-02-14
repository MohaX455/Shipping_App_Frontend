export function HelpContent() {
    const topics = [
        {
            title: 'How to send a package',
            text: 'Step-by-step: create a request, add parcel details, choose pickup and destination, and connect with travelers.',
        },
        {
            title: 'How to become a traveler',
            text: 'Create a profile, list your upcoming trips, accept delivery requests, and get paid after confirmation.',
        },
        {
            title: 'Using the platform',
            text: 'Learn how messaging, offers, and confirmations work to keep transactions clear and simple.',
        },
        {
            title: 'Account & Payments',
            text: 'Manage your profile, payment methods, and view transaction history in your dashboard.',
        },
    ];

    return (
        <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {topics.map((t, idx) => (
                        <article key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <h3 className="text-xl font-semibold text-slate-900 mb-2 font-heading">{t.title}</h3>
                            <p className="text-slate-600 font-body leading-relaxed">{t.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
