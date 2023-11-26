"use client";
import { useNav } from "@/app/hooks/useNav";
import AnimatedDiv from "../animated_div/animated_div";
import ALink from "../animated_link/animated_link";
import styles from "./about.module.scss";

export const AboutHome = () => {
  const { ref } = useNav({ mode: "title-change", title: "About Me" });
  return (
    <div ref={ref}>
      <AnimatedDiv className={styles.page_home}>
        <p>
          Hi, I'm Abhiram Kasturi, a dedicated Full Stack Web/ Cross-platform
          Mobile Developer, weaving seamless online experiences by combining
          business acumen, marketing insights, and robust design principles. As
          an experienced software engineer, I bring a wealth of experience to
          the digital landscape.
          <br />
          <br />
          Currently, I'm on an exciting journey as a Master's student in
          Computer Science at Clemson University, striving to deepen my
          knowledge and contribute to the ever-evolving tech realm.
        </p>
        <ALink
          style={{ marginTop: 15, fontSize: "3.5vh" }}
          name="Read more"
          href="/about#"
        />
      </AnimatedDiv>
    </div>
  );
};
