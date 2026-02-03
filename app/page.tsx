import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/Hero/hero";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <Footer />
    </>
  );
}
