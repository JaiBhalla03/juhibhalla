import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-[#0f0f0f] text-white font-poppins">
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Contact/>
    </div>
  );
}
