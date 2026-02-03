import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/Hero/hero";
import { HotOSS } from "@/components/hot-oss";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HotOSS />
      <ProjectsSection />
      <Footer />
    </>
  );
}
