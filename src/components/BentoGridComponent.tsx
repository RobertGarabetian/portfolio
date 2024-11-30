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
import SeekingSkeleton from "@/components/ui/SeekingSkeleton";

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
    <div className="bg-white p-4">
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
                ? "lg:row-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1"
                : ""
            } ${
              i === 1
                ? "lg:row-span-1 lg:col-span-2 lg:col-start-2 lg:row-start-1"
                : ""
            } ${
              i === 2
                ? "lg:row-span-1 lg:col-span-1 lg:col-start-2 lg:row-start-2"
                : ""
            } ${
              i === 3
                ? "lg:row-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-2"
                : ""
            } ${
              i === 4
                ? "lg:row-span-1 lg:col-span-2 lg:col-start-1 lg:row-start-3"
                : ""
            }`}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

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
    title: "Seeking",
    description: "Join the quest for understanding and enlightenment.",
    header: <SeekingSkeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];
