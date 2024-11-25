// "use client";
// import { motion } from "framer-motion";
// import React, { useEffect, useState } from "react";
// import { HiOutlineChevronDoubleDown } from "react-icons/hi";

// const Hero = () => {
//   const [padding, setPadding] = useState("p-96");
//   const [rounded, setRounding] = useState("rounded-2xl");

//   useEffect(() => {
//     document.body.style.overflow = "hidden"; // Disable scrolling

//     const timer = setTimeout(() => {
//       setPadding("p-0");
//       setRounding("rounded-none");
//     }, 500);
//     const timer2 = setTimeout(() => {
//       document.body.style.overflow = "";
//     }, 1550);

//     return () => {
//       clearTimeout(timer);
//       clearTimeout(timer2);
//       document.body.style.overflow = ""; // Cleanup on unmount
//     }; // Cleanup timer on component unmount
//   }, []);

//   return (
//     <div
//       className={`bg-gradient-to-br from-blue-500 to-purple-600 w-screen h-screen transition-all ease-in-out duration-1000 ${padding}`}
//     >
//       <div
//         className={`w-full h-full text-white flex flex-col justify-center items-center bg-black transition-all ease-in-out duration-1000 ${rounded}`}
//       >
//         <h1 className="md: text-4xl">Hi! I&apos;m Robert Garabetian</h1>
//         <motion.div
//           className={`flex absolute bottom-0 justify-center pb-4 w-1/3 duration-1000 transition-all ease-in-out`}
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <HiOutlineChevronDoubleDown
//             size={32}
//             className="animate-bounce text-white"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Hero = () => {
  const [padding, setPadding] = useState("p-96");
  const [rounded, setRounding] = useState("rounded-2xl");

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling

    const timer = setTimeout(() => {
      setPadding("p-0");
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Fade in duration
      className="w-screen h-screen"
    >
      <div
        className={`bg-gradient-to-br from-blue-500 to-purple-600 w-screen h-screen transition-all ease-in-out duration-1000 ${padding}`}
      >
        <div
          className={`w-full h-full text-white flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 transition-all ease-in-out duration-1000 ${rounded}`}
        >
          <h1 className="md: text-4xl">Hi! I&apos;m Robert Garabetian</h1>
          <motion.div
            className={`flex absolute bottom-0 justify-center pb-4 w-1/3 duration-1000 transition-all ease-in-out`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
