import ContentSection from "@/components/content-2";
import FeaturesSection from "@/components/features-8";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { LogoCloud } from "@/components/logo-cloud";
import TeamSection from "@/components/team";
import WallOfLoveSection from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <WallOfLoveSection />
      <ContentSection />
      <TeamSection />
      <LogoCloud />

      <FooterSection />
    </div>
  );
}
