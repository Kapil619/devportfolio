"use client";

import React, { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "dark" | "light";

const ThemeSwitch = () => {
  const [theme, settheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      settheme("dark");
      window.localStorage.setItem("theme", "dark"); // save to local storage
    } else {
      settheme("light");
      window.localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all  "
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
