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
          Hi, I am Abhiram Kasturi, a dedicated Full Stack Software Engineer.
          With a Master's in Computer Science from Clemson University and
          experience as a professional software engineer, I bring wealth of
          knowledge in software Development.
          <br />
          <br />I specialize in Python and Typescript and have strong skills in
          AWS and Tableau. I'm actively seeking full-time opportunities.
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
