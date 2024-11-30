"use client";
import {motion} from "framer-motion";
import React, {useEffect, useState} from "react";
import {HiOutlineChevronDoubleDown} from "react-icons/hi";

const Hero = () => {
    const width = window.innerWidth;
    const [bigPadding, setBigPadding] = useState(width>=1024? "p-96" : "p-20");
    const [rounded, setRounding] = useState("rounded-2xl");

    useEffect(() => {
        // document.body.style.overflow = "hidden"; // Disable scrolling

        const timer = setTimeout(() => {
            setBigPadding("p-0");
            setRounding("rounded-none");
        }, 500);

        const timer2 = setTimeout(() => {
            document.body.style.overflow = ""; // Re-enable scrolling
        }, 1550);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
            document.body.style.overflow = ""; // Cleanup on unmount
        };
    }, []);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}} // Fade in duration
            className="w-full h-screen"
        >
            <div
                className={`bg-gradient-to-br from-orange-200 to-yellow-300 w-full h-full transition-all ease-in-out duration-1000 ${bigPadding}`}
            >
                <div
                    className={`w-full h-full text-gray-700 flex flex-col justify-center items-center bg-white transition-all ease-in-out duration-1000 ${rounded}`}
                >
                    <h1 className=" text-2xl md:text-4xl font-bold">Hi! I&apos;m <span
                        className={"text-orange-300 font-extrabold"}>Robert Garabetian</span></h1>
                    <motion.div
                        className={`flex absolute bottom-0 justify-center pb-4 w-1/3 duration-1000 transition-all ease-in-out`}
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <HiOutlineChevronDoubleDown
                            size={32}
                            className="animate-bounce text-white"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;
