"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaGithubSquare, FaChevronUp, FaPaperPlane } from "react-icons/fa";
import { IoMdAirplane } from "react-icons/io";
const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <footer className="mb-10 px-4 text-center text-gray-500">
        <small className="mb-2 block  text-xs ">
          &copy; {new Date().getFullYear()} Kapil. All Rights reserved.
        </small>
        <div className=" flex flex-row justify-center gap-2 ">
          <Link target="_blank" href={"https://github.com/Kapil619"}>
            <Icon
              className="cursor-pointer hover:text-blue-500"
              width={25}
              height={25}
              icon={"ri:github-line"}
            />
          </Link>
          <Link
            target="_blank"
            href={" https://www.linkedin.com/in/kapil-badokar/"}
          >
            <Icon
              className="cursor-pointer hover:text-blue-500"
              width={25}
              height={25}
              icon={"mingcute:linkedin-line"}
            />
          </Link>
          <Link target="_blank" href={"https://www.instagram.com/_kapil619/"}>
            <Icon
              className="cursor-pointer hover:text-blue-500"
              width={25}
              height={25}
              icon={"fa-brands:instagram"}
            />
          </Link>
          <Link target="_blank" href={"https://twitter.com/kapil_badokar"}>
            <Icon
              className="cursor-pointer hover:text-blue-500"
              width={25}
              height={25}
              icon={"ri:twitter-line"}
            />
          </Link>
        </div>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className=" bg-gray-900 transition-all p-2 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 text-center mt-4 m-2 text-white rounded-full group"
        >
          <IoMdAirplane size={25} title="Scroll Up" />
          {isHovered && (
            <div className="opacity-0 invisible w-max group-hover:opacity-100 group-hover:visible absolute -top-8 rounded capitalize bg-slate-900/75 dark:bg-slate-700/90 text-white dark:text-slate-100 py-1 px-2 text-sm duration-200">
              Scroll to top
            </div>
          )}
        </button>
      </footer>
    </>
  );
};

export default Footer;
