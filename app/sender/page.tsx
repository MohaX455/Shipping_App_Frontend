import { SenderIntro } from '@/components/sender/SenderIntro';
import { SenderSteps } from '@/components/sender/SenderSteps';
import { SenderBenefits } from '@/components/sender/SenderBenefits';
import { SenderCTA } from '@/components/sender/SenderCTA';

export default function SenderPage() {
    return (
        <main className="min-h-screen bg-white">
            <SenderIntro />
            <SenderSteps />
            <SenderBenefits />
            <SenderCTA />
        </main>
    );
}
