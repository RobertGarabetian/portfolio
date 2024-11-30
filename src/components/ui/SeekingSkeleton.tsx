import React from "react";

const SeekingSkeleton = () => {
    return (
        <div className="flex w-full h-full min-h-[6rem] rounded-xl items-center justify-center p-4">
            <p>I am currently <span className={"font-semibold text-orange-500"}>seeking technical internships</span> where I can contribute my skills while continuing to learn and grow as an engineer, team member, and leader.
                I love tackling challenging problems, collaborating with teams, and planning/building impactful solutions. <span className={"font-semibold text-orange-500"}>If you&apos;re looking for a driven and eager-to-learn engineer, I would love to connect!</span></p>
        </div>
    );
};

export default SeekingSkeleton;
