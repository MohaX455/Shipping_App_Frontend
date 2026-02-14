import { SenderIntro, SenderSteps, SenderBenefits, SenderCTA } from '@/components/sender';

export const metadata = {
    title: 'For Senders - Social Shipping',
    description: 'Send parcels affordably with Social Shipping. Save up to 50% on shipping costs.',
};

export default function SenderPage() {
    return (
        <main className="w-full">
            <SenderIntro />
            <SenderSteps />
            <SenderBenefits />
            <SenderCTA />
        </main>
    );
}
