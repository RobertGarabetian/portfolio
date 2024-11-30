import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
const experiences = [
  {
    name: "Technix Academy",
    details: {
      location: "Montrose, California",
      role: "Coding Instructor",
      duration: "Oct 2023 – Sep 2024, Part-time",
      description: [
        "Taught over 80 children (ages 6-18) beginner to college-level computer science concepts in languages such as Python, Java, and C++.",
        "Instructed students on graphic design software such as Adobe Illustrator, Tinekercad, and Paint 3D, to provide them with a strong foundation of digital tools that will help them express creativity.",
        "Collaborated with supervisors to develop and revise over 200 pages of C++ and Python curriculum for teaching students more advanced object-oriented topics.",
      ],
    },
  },
  {
    name: "Glendale Community College",
    details: {
      location: "Glendale, California",
      role: "Computer Science Supplemental Instructor",
      duration: "July 2024 – Aug 2024, Part-time",
      description: [
        "Hosted online collaborative sessions to provide supplemental instruction for students in CSIS 151 Python Programming (28 students) and CSIS 135 Programming in C/C++ (30 students).",
        "Worked alongside students to debug programming assignments, teach and utilize Git for version control, and improve overall understanding of class material.",
        "Managed the lab portion of the CSIS 135 class by planning weekly activities where students could work in teams to solve programming problems relating to what they had learned in class that week.",
      ],
    },
  },
  {
    name: "Starbucks Coffee Company",
    details: {
      location: "La Crescenta, California",
      role: "Barista",
      duration: "May 2022 – April 2023, Part-time",
      description: [
        "Efficiently processed customer orders through in-store and drive-thru POS systems, mastering complex drink recipes and operational protocols in a fast-paced, time-sensitive environment.",
        "Collaborated with a dynamic and rotating team of baristas to consistently deliver high-quality customer experiences in a high-demand setting.",
      ],
    },
  },
];
const ExperienceSkeleton = () => {
  return (
    <div className="flex w-full h-full min-h-[6rem] rounded-xl items-center justify-center ">
      <div className="w-full p-6">
        <ul className="space-y-8">
          {experiences.map((exp) => (
            <li key={exp.name} className="relative pl-8">
              <div className="absolute left-0 top-0 w-px h-full bg-orange-500" />
              <div className="bg-transparent rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-base lg:text-lg text-orange-500">
                  {exp.name}
                </h3>
                <p className="text-muted-foreground">
                  <b>{exp.details.role}</b>
                </p>
                <div className="flex items-center mt-2 text-xs md:text-sm text-muted-foreground">
                  <FaCalendarAlt className="w-4 h-4 mr-1" />
                  <span> {exp.details.duration} </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>{" "}
    </div>
  );
};

export default ExperienceSkeleton;
