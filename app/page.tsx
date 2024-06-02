import Approach from "@/components/Approach";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FlotingNavBar";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav

          navItems={navItems}

        />
        <Hero />
        <Grid/>
        <RecentProject/>
        <Client/>
        <Experience/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
