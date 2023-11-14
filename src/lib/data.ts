import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import chatappnewImg from '/public/chatapp_flutter.png';
import gamesdomImg from '/public/Gamesdom.png';
import TrackerImg from '/public/issue-tracker.png';
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
            "I'm pursuing my bachelors degree in Electronics & Computer Engineering specialization in Data Science at PESMCOE Pune.",
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
        githubLink: "https://github.com/Kapil619/GamesDom",
        deploymentLink: "https://games-dom.vercel.app/",
        category: ["All", "Web"],

    },
    {
        title: "Chat-App",
        description:
            "Developed this mobile application with Flutter with login/logout, chat messaging, and image upload functionality. It uses Firebase and Firestore for the backend.",
        tags: ["Flutter", "Dart", "Firebase", "Firestore"],
        imageUrl: chatappnewImg,
        githubLink: "https://github.com/Kapil619/chat_app",
        deploymentLink: "https://github.com/Kapil619/chat_app",
        category: ["All", "Mobile"],
    },
    {
        title: "Prompts Nation",
        description:
            "Built a Nextjs Web app where users can create, read, update, and delete prompts. Browse prompts provided by other users ,save, copy & provide feedback to fellow users.",
        tags: ["Next.js", "Typescript", "MongoDB", "Tailwind"],
        imageUrl: promptsImg,
        githubLink: "https://github.com/Kapil619/promptsnation",
        deploymentLink: "https://promptsnation-hqvg2rwjp-kapil619.vercel.app/",
        category: ["All", "Web"],
    },
    {
        title: "Issue-Tracker",
        description:
            "Built a Nextjs Web app with SQL Database. Users can create ,update and delete issues faced by them. Can assign issues to other users & more.",
        tags: ["Next.js", "Typescript", "SQL", "Tailwind", "Prisma"],
        imageUrl: TrackerImg,
        githubLink: "https://github.com/Kapil619/Issue-Tracker",
        deploymentLink: "https://issue-tracker-kapil619.vercel.app/",
        category: ["All", "Web"],
    },
] as const;

export const skillsData = [
    { name: "HTML", src: "skill-icons:html" },
    { name: "CSS", src: "skill-icons:css" },
    { name: "JavaScript", src: "skill-icons:javascript" },
    { name: "TypeScript", src: "logos:typescript-icon" },
    { name: "React", src: "logos:react" },
    { name: "Next.js", src: "devicon:nextjs" },
    { name: "Flutter", src: "logos:flutter" },
    { name: "Tailwind", src: "devicon:tailwindcss" },
    { name: "Django", src: "vscode-icons:file-type-django" },
    { name: "MongoDB", src: "logos:mongodb-icon" },
    { name: "SQL", src: "vscode-icons:file-type-sql" },
    { name: "C++", src: "vscode-icons:file-type-cpp3" },
    { name: "Python", src: "logos:python" },
    { name: "Java", src: "logos:java" },
    { name: "Dart", src: "logos:dart" },
    { name: "Node.js", src: "logos:nodejs-icon" },
    { name: "Git", src: "devicon:git" },
] as const;









