import React from "react";
import { FaCode, FaGraduationCap } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { PiFilmStripLight } from "react-icons/pi";
import { TbAugmentedReality } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
const info = [
  { icon: FaGraduationCap, text: "Computer Science Student" },
  { icon: FaComputer, text: "Full Stack Software Developer" },
  { icon: PiFilmStripLight, text: "Los Angeles, California" },
  { icon: TbAugmentedReality, text: "Learning more about AR/VR" },
  { icon: FaCode, text: "Specialization in UI/UX" },
  { icon: RiTeamFill, text: "Fluent in English and Armenian" },
];
const GeneralInfoSkeleton = () => {
  return (
    <div className="flex flex-col w-full h-full min-h-[6rem] rounded-xl items-center justify-center text-white space-y-4">
      <ul className="flex flex-col text-white text-xl p-2 space-y-4 w-full">
        {info.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 bg-white/10 rounded-lg p-3 transition-all duration-300 hover:bg-white/20"
          >
            <item.icon
              className="flex-shrink-0 text-2xl text-[#a991f7]"
              aria-hidden="true"
            />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GeneralInfoSkeleton;
