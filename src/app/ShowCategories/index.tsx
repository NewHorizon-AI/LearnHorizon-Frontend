'use client';

import { useRouter } from 'next/navigation';
import LandingPage from '@/components/LandingPage';

const HomePage = () => {
    const router = useRouter();

    const goToVideoModels = () => {
        router.push('/VideoModels');
    };

    return (
        <div>
            <LandingPage />
            <button onClick={goToVideoModels}>Ver Modelos de Video</button>
        </div>
    );
};

export default HomePage;
