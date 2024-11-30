"use client";
import { BentoGridComponent } from "@/components/BentoGridComponent";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-white w-auto h-auto">
      <Hero />
      <div className="text-4xl black text-center p-10 pt-5 items-center justify-center w-full flex">
        <h3 className="relative px-3 py-2 text-neutral-700 w-1/2 font-bold">
          <span>About Me</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-yellow-300"></span>
        </h3>
      </div>
      <BentoGridComponent />
      <div className="bg-white text-4xl text-center p-10 pt-5 items-center justify-center w-full flex">
        <h3 className="relative px-3 py-2 text-neutral-700 w-1/2">
          <span>Projects</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-yellow-300"></span>
        </h3>
      </div>
      <Projects />
      <div className="h-40 bg-gray-300" />
    </div>
  );
}
