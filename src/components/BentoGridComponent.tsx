// "use client";
// import React from "react";
// import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
// import {
//   IconArrowWaveRightUp,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";

// export function BentoGridComponent() {
//   return (
//     <div className="bg-gradient-to-b from-gray-900 to-black ">
//       <BentoGrid className="w-full mx-auto">
//         {items.map((item, i) => (
//           <BentoGridItem
//             key={i}
//             title={item.title}
//             description={item.description}
//             header={item.header}
//             icon={item.icon}
//             className={`${
//               i === 0
//                 ? "md:row-span-2 md:col-span-1 md:col-start-1 md:row-start-1"
//                 : ""
//             } ${
//               i === 1
//                 ? "md:row-span-1 md:col-span-2 md:col-start-2 md:row-start-1"
//                 : ""
//             } ${
//               i === 2
//                 ? "md:row-span-1 md:col-span-1 md:col-start-2 md:row-start-2"
//                 : ""
//             } ${
//               i === 3
//                 ? "md:row-span-2 md:col-span-1 md:col-start-3 md:row-start-2"
//                 : ""
//             } ${
//               i === 4
//                 ? "md:row-span-1 md:col-span-2 md:col-start-1 md:row-start-3"
//                 : ""
//             }`}
//           />
//         ))}
//       </BentoGrid>
//     </div>
//   );
// }
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );

// const items = [
//   {
//     title: "The Dawn of Innovation",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     header: <Skeleton />,
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Digital Revolution",
//     description: "Dive into the transformative power of technology.",
//     header: <Skeleton />,
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     header: <Skeleton />,
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Power of Communication",
//     description:
//       "Understand the impact of effective communication in our lives.",
//     header: <Skeleton />,
//     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Pursuit of Knowledge",
//     description: "Join the quest for understanding and enlightenment.",
//     header: <Skeleton />,
//     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
//   },
// ];
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { useInView } from "react-intersection-observer";
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import TechnologiesSkeleton from "./ui/TechnologiesSkeleton";
import SocialSkeleton from "./ui/SocialSkeleton";
import GeneralInfoSkeleton from "./ui/GeneralInfoSkeleton";
import ExperienceSkeleton from "./ui/ExperienceSkeleton";

export function BentoGridComponent() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const { ref: firstItemRef, inView: firstItemInView } = useInView({
    threshold: 0.5, // Adjust visibility threshold if needed
    triggerOnce: true,
    onChange: (inView) => {
      console.log(firstItemInView);

      if (inView) {
        setTriggerAnimation(true);
      }
    },
  });

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black p-4">
      <BentoGrid className="w-full mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            ref={i === 0 ? firstItemRef : undefined} // Attach ref to the first item
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            index={i} // Pass index for staggered animation
            triggerAnimation={triggerAnimation} // Pass animation trigger state
            className={`${
              i === 0
                ? "md:row-span-2 md:col-span-1 md:col-start-1 md:row-start-1"
                : ""
            } ${
              i === 1
                ? "md:row-span-1 md:col-span-2 md:col-start-2 md:row-start-1"
                : ""
            } ${
              i === 2
                ? "md:row-span-1 md:col-span-1 md:col-start-2 md:row-start-2"
                : ""
            } ${
              i === 3
                ? "md:row-span-2 md:col-span-1 md:col-start-3 md:row-start-2"
                : ""
            } ${
              i === 4
                ? "md:row-span-1 md:col-span-2 md:col-start-1 md:row-start-3"
                : ""
            }`}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "About Me",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <GeneralInfoSkeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Technologies",
    description: "Dive into the transformative power of technology.",
    header: <TechnologiesSkeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Social",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <SocialSkeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Experience",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <ExperienceSkeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];
