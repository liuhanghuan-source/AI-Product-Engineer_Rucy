import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import WorkflowLab from './components/PhilosophySection';
import ExperienceSection from './components/ExperienceSection';
import CareerSection from './components/CareerSection';
import FutureVisionSection from './components/FutureVisionSection';
import Navigation from './components/Navigation';
import { ReactLenis } from '@studio-freight/react-lenis';

function App() {
  return (
    <ReactLenis root>
      <main className="font-sans antialiased text-zinc-900 bg-[#FAFAFA] selection:bg-brand-blue selection:text-white">
        <Navigation />
        <HeroSection />
        <ProfileSection />
        <WorkflowLab />
        <ExperienceSection />
        <CareerSection />
        <FutureVisionSection />
      </main>
    </ReactLenis>
  );
}

export default App;
