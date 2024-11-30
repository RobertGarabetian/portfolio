import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiCplusplus,
  SiUnity,
  SiCsharp,
  SiGo,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const techs = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiPython, name: "Python" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiCplusplus, name: "C++" },
  { icon: SiCsharp, name: "C#" },
  { icon: SiUnity, name: "Unity" },
  { icon: SiGo, name: "Go" },
  { icon: FaJava, name: "Java" },
];
const TechnologiesSkeleton = () => {
  return (
    <div className="flex w-full h-full min-h-[6rem] rounded-xl items-center justify-center ">
      <div className="flex flex-row flex-wrap justify-center items-center gap-2">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center  size-[100px] rounded-md bg-gray-400/10  hover:bg-white/20  transition-all duration-300 p-1 text-orange-500/80 hover:text-orange-500 "
          >
            <tech.icon className="  text-2xl mb-2" />
            <span className="text-neutral-700 text-md ">
              <b>{tech.name}</b>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesSkeleton;
