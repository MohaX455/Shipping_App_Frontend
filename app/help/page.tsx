import { HelpHero, HelpContent, HelpFAQ } from '@/components/help';

export const metadata = {
    title: 'Help Center - Social Shipping',
    description: 'Help articles, guides and frequently asked questions for Social Shipping users.',
};

export default function HelpPage() {
    return (
        <main className="w-full bg-white">
            <HelpHero />
            <HelpContent />
            <HelpFAQ />
        </main>
    );
}
