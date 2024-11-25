import React from "react";
import { FaInstagram, FaGithub, FaRegFile, FaLinkedin } from "react-icons/fa";
import { FaSquareLetterboxd } from "react-icons/fa6";

const socials = [
  {
    link: "https://www.instagram.com/rrobert_garabetiann/",
    tooltip: "Instagram",
    icon: FaInstagram,
    id: 0,
  },
  {
    link: "https://github.com/RobertGarabetian",
    tooltip: "Github",
    icon: FaGithub,
    id: 1,
  },
  {
    link: "https://utfs.io/f/TyvOmWdABc6GUyg2iDZozSW4lAPm7JZYj6xFeCVvyr5dGb0p",
    tooltip: "Resume",
    icon: FaRegFile,
    id: 2,
  },
  {
    link: "https://letterboxd.com/robert_g/",
    tooltip: "Letterboxd",
    icon: FaSquareLetterboxd,
    id: 3,
  },
  {
    link: "https://www.linkedin.com/in/robert-garabetian-968396294/",
    tooltip: "LinkedIn",
    icon: FaLinkedin,
    id: 4,
  },
];

const SocialSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full min-h-[6rem] rounded-xl items-center justify-center text-white space-y-4">
      <div className="flex flex-row space-x-2">
        {socials.map((social) => (
          <a
            target="_blank"
            className="text-3xl hover:text-[#a991f7]"
            data-tip={social.tooltip}
            href={social.link}
            key={social.id}
          >
            <social.icon />
          </a>
        ))}
      </div>
      <div className="text-[#a991f7] text-lg">
        <a href="mailto:robertgarabetian90@gmail.com">
          <b>robertgarabetian90@gmail.com</b>
        </a>
      </div>
    </div>
  );
};

export default SocialSkeleton;
