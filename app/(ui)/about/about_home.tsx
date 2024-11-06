"use client";
import { useNav } from "@/app/hooks/useNav";
import AnimatedDiv from "../animated_div/animated_div";
import styles from "./about.module.scss";

export const AboutHome = () => {
  const { ref } = useNav({ mode: "title-change", title: "About Me" });
  return (
    <div ref={ref} id={"about"}>
      <AnimatedDiv className={styles.page_home}>
        <p>
          Hi, I am Abhiram Kasturi, a dedicated Full Stack Software Engineer.
          With a Master's degree in Computer Science from Clemson University and
          experience as a professional software engineer, I bring wealth of
          knowledge in software Development.
          <br />
          <br />I specialize in ReactJS, ReactNative, Node, Tyepscript and have
          strong skills in AWS and python. I'm actively seeking full-time
          opportunities.
        </p>
      </AnimatedDiv>
    </div>
  );
};
