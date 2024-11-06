"use client";
import { experienceDataType } from "../experience-data";
import styles from "../experience.module.scss";

interface ExperienceCardProps {
  experienceData: experienceDataType[number];
}

export default function ExperinceCard({ experienceData }: ExperienceCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.organization}>{experienceData.organization}</p>
      <p className={styles.title}>{experienceData.title}</p>
      <p
        className={styles.date}
      >{`${experienceData.from} - ${experienceData.to}`}</p>
      {experienceData.dutiesPerformed.map((duty) => {
        return <p className={styles.duty} key={duty}>{`- ${duty}`}</p>;
      })}
    </div>
  );
}
