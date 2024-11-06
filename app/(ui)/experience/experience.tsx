"use client";
import { useNav } from "@/app/hooks/useNav";
import { useRef } from "react";
import styles from "./experience.module.scss";
import { experienceData } from "./experience-data";
import ExperinceCard from "./components/experience_card";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Experience() {
  const screen_ref = useRef<HTMLDivElement | null>(null);
  const { ref } = useNav({ mode: "title-change", title: "Experience" });

  const { scrollYProgress } = useScroll({
    target: screen_ref,
  });
  const y_s = useSpring(scrollYProgress, { mass: 0.1 });
  const x = useTransform(y_s, [0, 1], ["1%", "-76%"]);
  return (
    <div
      ref={(el) => {
        screen_ref.current = el;
        ref.current = el;
      }}
      className={styles.proj_h}
      id={"experience"}
    >
      <div className={styles.container}>
        <motion.div style={{ x: x }} className={styles.cards}>
          {experienceData.map((data) => {
            return (
              <ExperinceCard
                experienceData={data}
                key={data.dutiesPerformed[0]}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
