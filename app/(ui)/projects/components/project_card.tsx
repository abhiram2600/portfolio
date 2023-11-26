"use client";
import { projectsData } from "../projects-data";
import styles from "../projects.module.scss";

interface ProjectCardProps {
  index: number;
}

export default function ProjectCard({ index }: ProjectCardProps) {
  const { name, description, tech, year } = projectsData[index];
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <p className={styles.title}>{name}</p>
        <div className={styles.tech}>
          {tech.map((item, idx) => {
            return <p key={item + idx}>| {item} |</p>;
          })}
          <p className={styles.year}>{year}</p>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
