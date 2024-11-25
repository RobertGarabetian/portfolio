"use client";
import { BentoGridComponent } from "@/components/BentoGridComponent";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-gray-900 w-auto h-auto">
      <Hero />
      <div className="text-4xl text-white text-center p-10 mt-5 items-center justify-center w-full flex">
        <h3 className="relative px-3 py-2 text-white w-1/2">
          <span>About Me</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500"></span>
        </h3>
      </div>
      <BentoGridComponent />
    </div>
  );
}
