"use client";
import { motion } from "framer-motion";
import React from "react";

const SectionDivider = () => {
  return (
    <motion.div
      className="bg-gray-200 my-20 h-16 w-1 rounded-full hidden sm:block"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
};

export default SectionDivider;
