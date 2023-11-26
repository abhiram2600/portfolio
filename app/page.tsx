"use client";
import { useState } from "react";
import Contact from "./(ui)/contact/contact";
import Homepage from "./(ui)/homepage/homepage";
import Navbar from "./(ui)/navbar/navbar";
import { GlobalContext } from "@/app/context/GlobalContext";
import { AboutHome } from "./(ui)/about/about_home";
import ProjectsHome from "./(ui)/projects/projects_home";
import Skills from "./(ui)/skills/skills";

export default function Home() {
  const [colorMode, setColorMode] = useState(false);
  const [title, setTitle] = useState("Abhiram Kasturi");
  // false = default (white theme), true = black theme
  return (
    <GlobalContext.Provider
      value={{ colorMode, setColorMode, title, setTitle }}
    >
      <Navbar />
      <Homepage />
      <AboutHome />
      <ProjectsHome />
      <Skills />
      <Contact />
    </GlobalContext.Provider>
  );
}
