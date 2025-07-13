import AboutSection from '@/components/AboutSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import ProjectsSection from '@/components/ProjectSection';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
