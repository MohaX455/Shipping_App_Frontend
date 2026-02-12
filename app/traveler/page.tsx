import { TravelerIntro } from '@/components/traveler/TravelerIntro';
import { TravelerSteps } from '@/components/traveler/TravelerSteps';
import { TravelerBenefits } from '@/components/traveler/TravelerBenefits';
import { TravelerCTA } from '@/components/traveler/TravelerCTA';

export default function TravelerPage() {
    return (
        <main className="min-h-screen bg-white">
            <TravelerIntro />
            <TravelerSteps />
            <TravelerBenefits />
            <TravelerCTA />
        </main>
    );
}
