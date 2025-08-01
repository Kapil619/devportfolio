"use client";

import { projectsData } from "@/lib/data";
import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
  deploymentLink,
  category,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="[perspective:800px] bg-gray-100 max-w-[42rem] border-black/5 rounded-lg overflow-hidden sm:pr-8 relative
        sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <ul className="flex flex-shrink-0 gap-2">
              <Link target="_blank" href={githubLink}>
                <Icon
                  className="cursor-pointer hover:text-blue-500"
                  width={25}
                  height={25}
                  icon={"ri:github-line"}
                />
              </Link>
              <a target="_blank" href={deploymentLink}>
                <Icon
                  className="cursor-pointer hover:text-blue-500"
                  width={25}
                  height={25}
                  icon={"mi:external-link"}
                />
              </a>
            </ul>
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 ">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {category === "Mobile" ? (
          <div
            className="absolute top-1/2 -translate-y-1/2 w-[9rem] h-[19rem] bg-gray-800 dark:bg-gray-900 rounded-[1.75rem] border-8 border-gray-800 dark:border-gray-900 overflow-hidden shadow-xl transition-transform duration-500 [transform-style:preserve-3d]
            hidden sm:block
            right-[1.5rem]
            
            // --- 2. ADD NEW HOVER ANIMATIONS HERE ---
            group-hover:[transform:translateY(-50%)_rotateY(-25deg)]
            
            group-even:right-[initial]
            group-even:left-[1.5rem]
            group-even:group-hover:[transform:translateY(-50%)_rotateY(25deg)]"
          >
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            quality={90}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial] group-even:-left-40"
          />
        )}
      </section>
    </motion.div>
  );
}
