"use client";
import { useRef } from "react";
import ProjectCard from "./components/project_card";
import styles from "./projects.module.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useNav } from "@/app/hooks/useNav";

export default function ProjectsHome() {
  const s_ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: s_ref,
  });
  const y_s = useSpring(scrollYProgress, { mass: 0.1 });
  const x = useTransform(y_s, [0, 1], ["1%", "-80%"]);

  const { ref } = useNav({ mode: "title-change", title: "Projects" });
  return (
    <div
      ref={(el) => {
        s_ref.current = el;
        ref.current = el;
      }}
      className={styles.proj_h}
      id={"projects"}
    >
      <div className={styles.container}>
        <motion.div style={{ x: x }} className={styles.cards}>
          {[1, 2, 3, 4, 5].map((_, idx) => {
            return <ProjectCard index={idx} key={idx} />;
          })}
        </motion.div>
      </div>
    </div>
  );
}
