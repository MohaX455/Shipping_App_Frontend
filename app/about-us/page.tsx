import { AboutHeader, AboutMission, AboutConcept, AboutRole, AboutCTA } from '@/components/about';

export const metadata = {
    title: 'About Social Shipping',
    description: 'Discover our mission, concept, and role. Learn how Social Shipping connects senders and travelers directly.',
};

export default function AboutPage() {
    return (
        <main className="w-full bg-white">
            <AboutHeader />
            <AboutMission />
            <AboutConcept />
            <AboutRole />
            <AboutCTA />
        </main>
    );
}
