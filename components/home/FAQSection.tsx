'use client';

import { useState } from 'react';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    type: 'sender' | 'traveler';
}

const faqData: FAQItem[] = [
    {
        id: 'sender-1',
        type: 'sender',
        question: 'How does Social Shipping work?',
        answer:
            'Social Shipping is a platform that connects senders with travelers going the same route. You post your parcel details, browse available travelers, and negotiate directly with them. Once you reach an agreement, the transaction is between you and the traveler.',
    },
    {
        id: 'sender-2',
        type: 'sender',
        question: 'What happens after I connect with a traveler?',
        answer:
            'After you and the traveler agree on terms and payment information is secured, Social Shipping\'s role as an intermediary is complete. The delivery arrangements, insurance, and any issues that arise during delivery are between you and the traveler. We are not involved in what happens after the initial connection.',
    },
    {
        id: 'sender-3',
        type: 'sender',
        question: 'Can I save money using Social Shipping?',
        answer:
            'Yes, by connecting directly with travelers instead of using traditional shipping services, you can often negotiate better rates. The potential savings depend on the route and traveler availability.',
    },
    {
        id: 'traveler-1',
        type: 'traveler',
        question: 'How can I earn money as a traveler?',
        answer:
            'List your upcoming trips on Social Shipping and let senders contact you with delivery requests. Negotiate the fee directly with interested senders. Once you both agree, the rest is between you and the sender. Social Shipping only facilitates the connection.',
    },
    {
        id: 'traveler-2',
        type: 'traveler',
        question: 'What is Social Shipping\'s responsibility?',
        answer:
            'Social Shipping is an intermediary platform that connects travelers with senders. We facilitate the initial connection and help you communicate. After you and the sender agree on terms, Social Shipping\'s involvement ends. Any issues, disputes, or arrangements regarding delivery are between you and the sender.',
    },
    {
        id: 'traveler-3',
        type: 'traveler',
        question: 'What if the parcel gets lost or damaged during delivery?',
        answer:
            'Once you accept a delivery and agree with the sender on terms, any issues with the parcel are between you and the sender. Social Shipping is only a platform for making the connection. You and the sender should agree on responsibilities and insurance arrangements before delivery.',
    },
];

export function FAQSection() {
    const [activeTab, setActiveTab] = useState<'sender' | 'traveler'>('sender');
    const [openId, setOpenId] = useState<string | null>(null);

    const filteredFaqs = faqData.filter((faq) => faq.type === activeTab);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tabs */}
                <div className="flex gap-4 mb-12 border-b border-slate-200">
                    <button
                        onClick={() => setActiveTab('sender')}
                        className={`px-6 py-3 font-semibold transition-colors font-heading ${activeTab === 'sender'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                    >
                        For Senders
                    </button>
                    <button
                        onClick={() => setActiveTab('traveler')}
                        className={`px-6 py-3 font-semibold transition-colors font-heading ${activeTab === 'traveler'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                    >
                        For Travelers
                    </button>
                </div>

                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4 font-heading">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600 font-body">
                        {activeTab === 'sender'
                            ? 'How to send parcels with Social Shipping'
                            : 'How to deliver parcels and make money'}
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {filteredFaqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="border border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
                        >
                            <button
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-slate-50 to-white hover:from-slate-100 hover:to-slate-50 transition-colors"
                            >
                                <span className="text-left font-semibold text-slate-900 text-lg font-heading">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-6 h-6 text-slate-600 flex-shrink-0 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                    />
                                </svg>
                            </button>

                            {openId === faq.id && (
                                <div className="px-6 py-4 bg-white border-t border-slate-200">
                                    <p className="text-slate-600 leading-relaxed font-body">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
