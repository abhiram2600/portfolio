"use client";
import { useNav } from "@/app/hooks/useNav";
import { useRef } from "react";
import styles from "./experience.module.scss";
import { HorizontalScrollScreen } from "@/app/components/horizontal-scroll-screen/horizontal-scroll-screen";
import { experienceData } from "./experience-data";
import ExperinceCard from "./components/experience_card";

export default function Experience() {
  const screen_ref = useRef<HTMLDivElement | null>(null);

  const { ref } = useNav({ mode: "title-change", title: "Experience" });

  return (
    <div
      ref={(el) => {
        screen_ref.current = el;
        ref.current = el;
      }}
      className={styles.proj_h}
      id={"experience"}
    >
      <HorizontalScrollScreen ref={screen_ref} end={"-75%"}>
        {experienceData.map((data) => {
          return (
            <ExperinceCard
              experienceData={data}
              key={data.dutiesPerformed[0]}
            />
          );
        })}
      </HorizontalScrollScreen>
    </div>
  );
}
