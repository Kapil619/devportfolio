"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="mb-10 px-4 text-center text-gray-500">
        <small className="mb-2 block  text-xs ">
          &copy; 2023 Kapil. All Rights reserved.
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
      </footer>
    </>
  );
};

export default Footer;
