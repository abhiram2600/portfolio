"use client";
import { useRef } from "react";
import ProjectCard from "./components/project_card";
import styles from "./projects.module.scss";
import { useNav } from "@/app/hooks/useNav";
import { projectsData } from "./projects-data";
import { HorizontalScrollScreen } from "@/app/components/horizontal-scroll-screen/horizontal-scroll-screen";

export default function ProjectsHome() {
  const screen_ref = useRef<HTMLDivElement | null>(null);

  const { ref } = useNav({ mode: "title-change", title: "Projects" });
  return (
    <div
      ref={(el) => {
        screen_ref.current = el;
        ref.current = el;
      }}
      className={styles.proj_h}
      id={"projects"}
    >
      <HorizontalScrollScreen ref={screen_ref} end={"-85%"}>
        {projectsData.map((data) => {
          return <ProjectCard projectData={data} key={data.name} />;
        })}
      </HorizontalScrollScreen>
    </div>
  );
}
