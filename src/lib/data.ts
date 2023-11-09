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
        name: "Education",
        hash: "#education",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const educationData = [

    {
        title: "Bachelor's Degree",
        location: "PESMCOE, Pune",
        description:
            "I'm pursuing my bachelors degree in Electronics & Computer Engineering with honours in Data Science at PesMcoe Pune         ",
        icon: React.createElement(LuGraduationCap),
        date: "2021 - 2025",
    },
    {
        title: "HSC",
        location: "High School, Pune, India",
        description:
            "Completed my high school education at Pune University with 95%.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 - 2021",
    },
    {
        title: "SSC",
        location: "SSGMES, Shegaon",
        description:
            "Completed my schooling at SSGM School Shegaon and passed SSC with 90%.",
        icon: React.createElement(LuGraduationCap),
        date: "2009-2019",
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