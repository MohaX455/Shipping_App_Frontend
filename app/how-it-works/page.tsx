import { HowItWorksHeader, HowItWorksConcept, HowItWorksSteps, HowItWorksCTA } from '@/components/how-it-works';

export const metadata = {
    title: 'How It Works - Social Shipping',
    description: 'Understand how Social Shipping connects senders and travelers. Learn our direct matching process and platform role.',
};

export default function HowItWorksPage() {
    return (
        <main className="w-full bg-white">
            <HowItWorksHeader />
            <HowItWorksConcept />
            <HowItWorksSteps />
            <HowItWorksCTA />
        </main>
    );
}
