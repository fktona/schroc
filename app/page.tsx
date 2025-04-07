import Image from "next/image";
import Hero, { Sliding } from "./hero";
import About from "./about";
import Missing from "./missing";
import Footer, { Lines } from "./footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative  isolate w-full">
        <Lines />
        <Sliding />
        <Lines />
        <About />
        <Lines />
        <Missing />
        <Lines />
        <Footer />
      </div>
    </div>
  );
}
