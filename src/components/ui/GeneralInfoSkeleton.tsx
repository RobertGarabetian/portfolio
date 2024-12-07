import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import {PiFilmSlate, PiFilmStripLight} from "react-icons/pi";
import { TbAugmentedReality } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
const info = [
  { icon: FaGraduationCap, text: "Computer Science Student" },
  { icon: FaComputer, text: "Full Stack Software Developer" },
  { icon: PiFilmStripLight, text: "Los Angeles, California" },
  { icon: PiFilmSlate, text: "Film/TV Nerd" },
  { icon: TbAugmentedReality, text: "Learning more about Data Science" },
  { icon: RiTeamFill, text: "Fluent in English and Armenian" },
];
const GeneralInfoSkeleton = () => {
  return (
    <div className="flex flex-col w-full h-full min-h-[6rem] rounded-xl items-center justify-center text-neutral-500 space-y-4">
      <ul className="flex flex-col text-neutral-700 text-xl p-2 space-y-4 w-full">
        {info.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 bg-gray-400/10 rounded-lg p-3 transition-all duration-300 hover:bg-white/20 text-orange-500/80 hover:text-orange-500 "
          >
            <item.icon
              className="flex-shrink-0 text-2xl "
              aria-hidden="true"
            />
            <span className={"text-neutral-700"}>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GeneralInfoSkeleton;
