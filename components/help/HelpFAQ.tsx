export function HelpFAQ() {
    const faqs = [
        {
            q: 'How do I post a request?',
            a: 'From your dashboard click "Post a Request", fill details, and publish. Travelers will see your request if routes match.',
        },
        {
            q: 'How do payments work?',
            a: 'Payments are processed through the platform and released as agreed after delivery confirmation.',
        },
        {
            q: 'What if I have an issue?',
            a: 'Contact our support via the Contact page. We provide guidance and help mediate when needed.',
        },
    ];

    return (
        <section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 font-heading">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {faqs.map((f, i) => (
                            <details key={i} className="group rounded-lg border border-slate-200 p-4 bg-white">
                                <summary className="cursor-pointer list-none text-slate-800 font-medium font-heading">{f.q}</summary>
                                <div className="mt-3 text-slate-600 font-body">{f.a}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
