"use client";
import { projectDataType } from "../projects-data";
import styles from "../projects.module.scss";

interface ProjectCardProps {
  projectData: projectDataType[number];
}

export default function ProjectCard({ projectData }: ProjectCardProps) {
  const { name, description, tech, year } = projectData;
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <p className={styles.title}>{name}</p>
        <div className={styles.tech}>
          {tech.map((item, idx) => {
            return <p key={item + idx}>{item}</p>;
          })}
        </div>
        <p className={styles.year}>{year}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
