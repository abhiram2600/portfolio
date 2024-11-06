"use client";
import { useState } from "react";
import Contact from "./(ui)/contact/contact";
import Homepage from "./(ui)/homepage/homepage";
import Navbar from "./(ui)/navbar/navbar";
import { GlobalContext } from "@/app/context/GlobalContext";
import About from "./(ui)/about/about";
import Projects from "./(ui)/projects/projects";
import Skills from "./(ui)/skills/skills";
import Experience from "./(ui)/experience/experience";

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
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </GlobalContext.Provider>
  );
}
