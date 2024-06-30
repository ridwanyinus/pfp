import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Ridwan from "@/components/Logo";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import About from "@/components/About";
import { LampDemo } from "@/components/LampEffects";
import Services from "@/components/Services";
export default function Home() {
  return (
    <main className="relative bg-black-100 justify-center items-center flex-col  mx-auto sm:px-10 px-5 custom-scrollbar  overflow-y-scroll">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Ridwan />
        <Hero />
        <LampDemo />
        <About />
        <LampDemo />
        <Services />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
