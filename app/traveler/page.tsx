import { TravelerIntro, TravelerSteps, TravelerBenefits, TravelerCTA } from '@/components/traveler';

export const metadata = {
    title: 'For Travelers - Social Shipping',
    description: 'Earn money while you travel with Social Shipping. Flexible, secure, and rewarding.',
};

export default function TravelerPage() {
    return (
        <main className="w-full">
            <TravelerIntro />
            <TravelerSteps />
            <TravelerBenefits />
            <TravelerCTA />
        </main>
    );
}
