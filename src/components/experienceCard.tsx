import Image from "next/image";
import React from "react";
import { experienceData } from "@/lib/data";
import { motion } from "framer-motion";

type ExperienceCardProps = {
  experience: (typeof experienceData)[number];
  index: number;
};

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const isLeft = index % 2 === 0;

  // Animation variants for desktop
  const cardVariants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  // A simpler animation for mobile
  const mobileCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="mb-8 sm:mb-0 sm:flex sm:justify-between sm:items-center w-full">
      {/* This div handles the desktop positioning (left/right) */}
      <div className={`sm:w-5/12 ${isLeft ? "sm:order-1" : "sm:order-3"}`}>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="hidden sm:block" // Hide desktop card on mobile
        >
          <DesktopCard experience={experience} />
        </motion.div>

        <motion.div
          variants={mobileCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="block sm:hidden" // Hide mobile card on desktop
        >
          <MobileCard experience={experience} />
        </motion.div>
      </div>

      {/* The timeline dot (hidden on mobile) */}
      <div className="z-10 hidden sm:flex items-center order-2 bg-gray-300 dark:bg-gray-600 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-gray-800 dark:text-white">
          {index + 1}
        </h1>
      </div>
    </div>
  );
};

// Card component specifically styled for Desktop Timeline
const DesktopCard = ({
  experience,
}: {
  experience: (typeof experienceData)[number];
}) => (
  <article className="p-6 rounded-lg shadow-lg bg-gray-100 dark:bg-white/10">
    <div className="flex items-center gap-4">
      <Image
        src={experience.imageUrl}
        alt={`${experience.company} logo`}
        width={40}
        height={40}
        className="rounded-full bg-white object-contain"
      />
      <div>
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <p className="text-gray-600 dark:text-white/70">{experience.company}</p>
      </div>
    </div>
    <p className="text-sm font-semibold uppercase text-gray-500 dark:text-white/60 my-3">
      {experience.dateStarted} - {experience.dateEnded}
    </p>
    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-white/80">
      {experience.description.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </article>
);

// Card component styled for Mobile Stacked List
const MobileCard = ({
  experience,
}: {
  experience: (typeof experienceData)[number];
}) => (
  <div className="p-6 rounded-lg shadow-lg bg-gray-100 dark:bg-white/10">
    <div className="flex items-center gap-4 mb-3">
      <Image
        src={experience.imageUrl}
        alt={`${experience.company} logo`}
        width={48}
        height={48}
        className="rounded-full bg-white object-contain"
      />
      <div>
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <p className="text-gray-600 dark:text-white/70">{experience.company}</p>
      </div>
    </div>
    <p className="text-sm font-semibold uppercase text-gray-500 dark:text-white/60 my-3">
      {experience.dateStarted} - {experience.dateEnded}
    </p>
    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-white/80">
      {experience.description.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;
