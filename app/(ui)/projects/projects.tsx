"use client";
import { useRef } from "react";
import ProjectCard from "./components/project_card";
import styles from "./projects.module.scss";
import { useNav } from "@/app/hooks/useNav";
import { projectsData } from "./projects-data";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ProjectsHome() {
  const screen_ref = useRef<HTMLDivElement | null>(null);
  const { ref } = useNav({ mode: "title-change", title: "Projects" });

  const { scrollYProgress } = useScroll({
    target: screen_ref,
  });
  const y_s = useSpring(scrollYProgress, { mass: 0.1 });
  const x = useTransform(y_s, [0, 1], ["1%", "-87%"]);
  return (
    <div
      ref={(el) => {
        screen_ref.current = el;
        ref.current = el;
      }}
      className={styles.proj_h}
      id={"projects"}
    >
      <div className={styles.container}>
        <motion.div style={{ x: x }} className={styles.cards}>
          {projectsData.map((data) => {
            return <ProjectCard projectData={data} key={data.name} />;
          })}
        </motion.div>
      </div>
    </div>
  );
}
