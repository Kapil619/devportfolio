"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] "
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.3, delay: 0.2 }}
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={192}
              height={192}
              quality={95}
              priority={true}
              alt="My Image"
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl "
            />
          </motion.div>

          <motion.span
            className="text-4xl absolute bottom-0 right-0  "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.6,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.div className="text-center">
        <motion.p
          className="text-sm mt-2 md:text-base font-mono"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 75, delay: 0.6 }}
        >
          I'm
        </motion.p>
        <motion.div className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter  ">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 75, delay: 0.8 }}
            className=" text-slate-900 dark:text-white capitalize mb-2 leading-[1.1"
          >
            Kapil Badokar
          </motion.h1>
          <motion.h3
            className="text-2xl md:text-4xl lg:text-5xl text-slate-700 dark:text-gray-300 leading-[1.2]"
            // transition={{ delay: 1.1 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 75, delay: 1.2 }}
          >
            Full-stack developer & Mobile App Developer.
          </motion.h3>
        </motion.div>
      </motion.div>

      <motion.div className="flex flex-col sm:flex-row  justify-center items-center gap-2  pt-3  text-lg font-medium">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <Link
            //group class for hover animation
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition " />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <Link
            //group class for hover animation
            href="/CV.pdf"
            download
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110  active:scale-105  transition cursor-pointer borderBlack dark:bg-white/10 "
          >
            Resume
            <HiDownload className="opacity-60 group-hover:translate-y-0.5 group-hover:text-blue-500 transition" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <Link
            href=" https://www.linkedin.com/in/kapil-badokar/"
            target="_blank"
            className="bg-white p-4 tex t-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]  hover:text-blue-700 dark:hover:text-blue-700 active:scale-105  transition borderBlack dark:bg-white/10 dark:text-white/60 cursor-pointer"
          >
            <BsLinkedin />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
        >
          <Link
            href="https://github.com/Kapil619"
            target="_blank"
            className="bg-white p-4 text-gray-700  flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 dark:hover:text-gray-900  active:scale-105  transition borderBlack dark:bg-white/10 dark:text-white/60"
          >
            <FaGithubSquare />
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>

    // <motion.section
    //   ref={ref}
    //   id="home"
    //   className="mb-28 max-w-[70rem]  text-center sm:text-left sm:mb-0 scroll-mt-[100rem]"
    //   initial={{ opacity: 0, y: 100 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ type: "spring", stiffness: 125, delay: 0.2 }}
    // >
    //   <div className="flex justify-between">
    //     <motion.div>
    //       <motion.p
    //         className="text-sm md:text-base text-accent font-mono"
    //         initial={{ opacity: 0, y: 100 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ type: "spring", stiffness: 125, delay: 0.4 }}
    //       >
    //         "Hello fren 👋, I'm "
    //       </motion.p>
    //       <motion.div
    //         className="text-4xl md:text-7xl font-bold tracking-tighter max-w-5xl"
    //         initial={{ opacity: 0, y: 100 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ type: "spring", stiffness: 125, delay: 0.8 }}
    //       >
    //         <motion.h1 className="text-slate-900 dark:text-slate-200 capitalize mb-2 leading-[1.1]">
    //           "Kapil Badokar"
    //         </motion.h1>
    //         <motion.h1 className="leading-[1.2]" transition={{ delay: 1.1 }}>
    //           I'm a Full-stack developer & Mobile App Developer.
    //         </motion.h1>
    //       </motion.div>
    //     </motion.div>

    //     <motion.div
    //       initial={{ opacity: 0, scale: 0 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{ type: "tween", duration: 0.2, delay: 1.4 }}
    //     >
    //       <Image
    //         src={
    //           "https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //         }
    //         width={240}
    //         height={240}
    //         quality={95}
    //         priority={true}
    //         alt="My Image"
    //         className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
    //       />
    //     </motion.div>
    //   </div>

    //   <motion.div
    //     className="flex flex-col sm:flex-row gap-3  text-lg font-medium mt-2"
    //     initial={{ opacity: 0, y: 100 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ type: "spring", stiffness: 125, delay: 1.7 }}
    //   >
    //     <Link
    //       href="#contact"
    //       className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  transition"
    //       onClick={() => {
    //         setActiveSection("Contact");
    //         setTimeOfLastClick(Date.now());
    //       }}
    //     >
    //       Contact me{" "}
    //       <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition " />
    //     </Link>
    //     <a
    //       href="/CV.pdf"
    //       download
    //       className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110  active:scale-105  transition cursor-pointer borderBlack dark:bg-white/10 "
    //     >
    //       Resume
    //       <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
    //     </a>
    //     <a
    //       href="https://www.linkedin.com/in/kapil-badokar/"
    //       target="_blank"
    //       className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]  hover:text-gray-950 active:scale-105  transition borderBlack dark:bg-white/10 dark:text-white/60 cursor-pointer"
    //     >
    //       <BsLinkedin />
    //     </a>
    //     <a
    //       href="https://github.com/Kapil619"
    //       target="_blank"
    //       className="bg-white p-4 text-gray-700  flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105  transition borderBlack dark:bg-white/10 dark:text-white/60"
    //     >
    //       <FaGithubSquare />
    //     </a>
    //   </motion.div>
    // </motion.section>
    //working implmentation above
  );
};

export default Intro;
