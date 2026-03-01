import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="divide-y divide-border">
      <Hero />
      <FeaturedProjects />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <HomeCTA />
      <Contact />
    </div>
  );
}
