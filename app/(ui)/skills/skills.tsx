import styles from "./skills.module.scss";
import Image from "next/image";
import Card from "@/app/components/card/card";
import { useNav } from "@/app/hooks/useNav";
import { skillsData } from "./skills-data.js";
import { CSSProperties } from "react";

function IndividualCard({ index }: { index: number }) {
  const { ref } = useNav({ mode: "title-change", title: "Skills" });
  const data = skillsData[index];
  return (
    <div ref={ref}>
      <Card style={{ padding: "2vh" }}>
        <p className={styles.title}>{data.name}</p>
        <div className={styles.skillsGrid}>
          {data.skills.map((skill, idx) => {
            return (
              <div key={idx} className={styles.skillContainer}>
                <Image
                  src={"/images/code_icon.svg"}
                  alt="code icon"
                  height={20}
                  width={20}
                />
                <div>
                  <p className={styles.name}>{skill.name}</p>
                  <p className={styles.level}>{skill.level}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default function Skills() {
  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        <IndividualCard index={0} />
        <IndividualCard index={1} />
      </div>
      <IndividualCard index={2} />
    </div>
  );
}
