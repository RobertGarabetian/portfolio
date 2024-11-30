"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid lg:auto-rows-[18rem] grid-cols-1 lg:grid-cols-3 gap-8 mx-auto transition-all duration-1000 max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    index: number;
    triggerAnimation: boolean;
  }
>(
  (
    { className, title, description, header, icon, index, triggerAnimation },
    ref
  ) => {
    const fadeInVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.5 },
      }),
    };

    return (
      <motion.div
        ref={ref} // Forward the ref here
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] border border-gray-200 justify-between flex flex-col space-y-4",
          className
        )}
        variants={fadeInVariants}
        initial="hidden"
        animate={triggerAnimation ? "visible" : "hidden"}
        custom={index} // Pass the index for staggered animation
      >
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200 ">
          <span className="hidden">{icon}</span>
          <div className="font-sans font-bold text-lg text-neutral-500 dark:text-neutral-200 mb-2 mt-2 ">
            <span className="relative px-3 py-1">
              {title}
              <span
                className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent  to-neutral-500"
                style={{ content: '""' }}
              ></span>
            </span>
          </div>
          <div className="hidden font-sans font-normal text-neutral-200 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
      </motion.div>
    );
  }
);

// Set a display name for easier debugging (optional)
BentoGridItem.displayName = "BentoGridItem";
