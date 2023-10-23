"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 ">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
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
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello I'm <span className="font-bold">Kapil. </span>
        I'm a{" "}
        <span className="font-bold">
          Full-stack developer & Mobile App Developer.
        </span>
        I enjoy building webapps and mobile apps.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          //group class for hover animation
          href="#contact"
          className="group  bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  transition"
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition " />
        </Link>
        <a
          //group class for hover animation
          href="/CV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110  active:scale-105  transition border border-black/10 "
        >
          Resume
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href=" https://www.linkedin.com/in/kapil-badokar/"
          target="_blank"
          className="bg-white p-4 text-gray-700  flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]  hover:text-gray-950 active:scale-105  transition border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Kapil619"
          target="_blank"
          className="bg-white p-4 text-gray-700  flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105  transition border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
