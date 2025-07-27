import Image from "next/image";
import React from "react";
import { experienceData } from "@/lib/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const ExperienceCard = () => {
  return (
    <>
      {experienceData.map((experience) => (
        <article
          className="sm:w-full flex flex-col rounded-lg items-center space-y-7 md:w-[700px] xl:w-[900px] snap-center bg-[#fdfbff] hover:opacity-100 hover:bg-[#e3d4f4]/50 opacity-70 cursor-pointer transition-opacity duration-200 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white p-2 overflow-y-auto"
          key={experience.title}
        >
          <Image
            className="xl:w-32 xl:h-32 rounded-full w-[80px] h-[80px] object-cover object-center"
            width={64}
            height={64}
            src={experience.imageUrl}
            alt="Image of the company"
          />
          <div className="px-0 md:px-10">
            <h4 className="text-2xl xl:text-3xl font-light text-black dark:text-white">
              {experience.title}
            </h4>
            <p className="font-bold text-xl mt-1 xl:text-2xl dark:text-white">
              {experience.company}
            </p>
            <div className="flex space-x-2 my-2">
              {experience.skills.map((skill, index) => (
                <Icon width={32} height={32} key={index} icon={skill}></Icon>
              ))}
            </div>
            <p className="uppercase py-5 font-semibold text-red-700 dark:text-white">
              {experience.dateStarted} - {experience.dateEnded}
            </p>
            <ul className="list-disc space-y-4 ml-3 pl-5 text-lg h-80 pr-1 dark:text-white/80">
              {experience.description.map((point, index) => (
                <li key={index}> {point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </>
  );
};

export default ExperienceCard;
