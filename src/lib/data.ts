import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "/public/corpcomment.png";
import rmtdevImg from "/public/rmtdev.png";
import wordanalyticsImg from "/public/wordanalytics.png";
import gamesDomImg from '/public/gamesdom.png'
import chatappImg from '/public/chatapp.png'
import gamesdomImg from '/public/gamesdom2.png'
import chatappnewImg from '/public/chatapp_flutter.png'
import promptsImg from '/public/promptsnation.png';


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "GamesDom",
        description:
            "Created this React web app where users can search for games and see details about them. It uses the RAWG API.",
        tags: ["React", "Typescript", "ChakraUI", "Tailwind",],
        imageUrl: gamesdomImg,
    },
    {
        title: "Chat-App",
        description:
            "Developed this mobile application with Flutter with login/logout, chat messaging, and image upload functionality. It uses Firebase and Firestore for the backend.",
        tags: ["Flutter", "Dart", "Firebase", "Firestore"],
        imageUrl: chatappnewImg,
    },
    {
        title: "Prompts Nation",
        description:
            "Built a Nextjs Web app where users can create, read, update, and delete prompts. Browse prompts provided by other users ,save, copy & provide feedback to fellow users.",
        tags: ["Next.js", "Typescript", "MongoDB", "Tailwind", "PostCSS"],
        imageUrl: promptsImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Flutter",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "Dart",
    "C++",
    "Python",
    "Java",
    "SQL",
    "Django",
    "Node.js",
    "Git",
] as const;