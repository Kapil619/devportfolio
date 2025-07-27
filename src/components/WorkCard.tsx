"use client";

import { featuredWorkData } from "@/lib/data";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";

type WorkCardProps = {
  work: (typeof featuredWorkData)[number];
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <motion.div
      className="max-w-4xl mx-auto bg-gray-100 dark:bg-white/10 p-6 sm:p-8 rounded-xl shadow-lg border border-black/5"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Left Column: Image, Title, and Store Links */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:w-1/3 flex-shrink-0">
          <Image
            src={work.logoUrl}
            alt={`${work.title} Logo`}
            width={100}
            height={100}
            className="rounded-2xl mb-4 bg-white object-contain shadow-md"
          />
          <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
          <p className="text-gray-600 dark:text-white/70 mb-4">
            {work.tagline}
          </p>
          <div className="flex gap-4">
            {work.appStoreUrl && (
              <a
                href={work.appStoreUrl}
                target="_blank"
                className="hover:scale-110 transition"
                aria-label="Download on the App Store"
              >
                <Icon icon="logos:apple-app-store" width="32" />
              </a>
            )}
            {work.playStoreUrl && (
              <a
                href={work.playStoreUrl}
                target="_blank"
                className="hover:scale-110 transition"
                aria-label="Get it on Google Play"
              >
                <Icon icon="logos:google-play-icon" width="32" />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="flex-grow">
          <p className="mb-4 border-l-4 border-amber-500 pl-4">
            {work.description}
          </p>

          <div>
            <h4 className="font-semibold mb-2">Product Insights:</h4>
            <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
              {work.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {work.tech.map((tag, i) => (
                <div key={i} className="flex flex-col items-center gap-1 w-20">
                  <Icon
                    icon={tag.icon}
                    width="28"
                    className="text-gray-700 dark:text-gray-300"
                  />
                  {/* --- MODIFIED SPAN --- */}
                  <span className="text-xs font-medium text-center h-8 flex items-center justify-center">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
