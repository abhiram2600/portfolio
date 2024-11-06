"use client";
import { AnimatedPara } from "@/app/components/animated-para/animated-para";
import AnimatedDiv from "../animated_div/animated_div";
import styles from "./about.module.scss";
import ALink from "../animated_link/animated_link";
import { AnimatePresence, Spring, motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        style={{
          backgroundColor: "#565656",
          position: "fixed",
          width: "100vw",
          zIndex: 1,
          top: 0,
        }}
        transition={transitionSpringPhysics}
        initial={{ height: "100vh" }}
        animate={{ height: "0vh", transition: { duration: 0.5 } }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
      >
        <ALink href="/" name="Back" className={styles.back_link} />
        <div className={styles.page_main}>
          <p className={styles.title}>
            Hi there! My name is Abhiram. <br /> Full Stack Developer based in
            US.
          </p>
          <Image
            src={"/images/about_main.png"}
            width={700}
            height={700}
            alt={"Profile Image"}
            className={styles.main_image}
          />
          <div className={styles.content}>
            <AnimatedPara className={styles.description}>
              I'm a committed full-stack software engineer in the United States.
              I have 1.5 years of hands-on experience in software development
              and am driven by my love for learning and striving for perfection.
              Currently pursuing a Master's in Computer Science at Clemson
              University, I'm deeply engaged in exploring the latest
              technologies and methods, with a specific interest in web
              development and data science.
            </AnimatedPara>

            <AnimatedPara className={styles.description}>
              I'm constantly learning and striving for perfection in design,
              aiming to create outstanding user experiences with dedication.
              Outside of academia, I'm focused on contributing innovative
              solutions and using my skills in a full-time position. I'm
              <b>actively looking</b> for opportunities to apply my expertise,
              drive innovation, and make meaningful contributions in the tech
              industry.
            </AnimatedPara>

            <AnimatedDiv>
              <p className={styles.subTitle}>My work as Software Engineer</p>
              <p className={styles.description}>
                In early 2021, I began my professional journey in software
                development with enthusiasm and determination. I started as a
                Software Engineering Intern, focusing on React JS, React Native,
                and Firebase to learn about technology intricacies. This
                internship laid the groundwork for my future work in the
                fast-paced field of software engineering.
              </p>
            </AnimatedDiv>

            <AnimatedPara className={styles.description}>
              In the first six months, I dealt with both challenges and
              successes while creating applications that combined innovation and
              user-friendly design seamlessly. My main goal was to develop
              strong and scalable apps for different companies, enhancing their
              digital presence and functionality.
            </AnimatedPara>
            <AnimatedPara className={styles.description}>
              In September 2021, I transitioned from being an intern to becoming
              a full-time Software Engineer, which was a significant milestone
              in my career. In this role, I continued to use my skills in React
              JS and React Native to create effective solutions for client
              projects. I didn't just focus on writing code; I also took part in
              mentoring programs to encourage knowledge-sharing and
              collaboration within the team. I enjoyed being a mentor and shared
              my insights with interns who, like me, were eager to make an
              impact in the tech industry.
            </AnimatedPara>

            <AnimatedPara style={{ marginBottom: "10vh" }}>
              <p className={styles.subTitle}>Capabilities</p>
              <p className={styles.listItem}>ReactJS</p>
              <p className={styles.listItem}>React-Native</p>
              <p className={styles.listItem}>Django</p>
              <p className={styles.listItem}>NodeJS</p>
            </AnimatedPara>

            <AnimatedDiv>
              <p className={styles.subTitle}>What I do outside of work</p>
              <p className={styles.description}>
                In the mornings, I enjoy going to the gym to work out and
                explore my newfound interest in fitness. My newfound interest in
                cooking has me experimenting with diverse recipes and flavors.
              </p>
            </AnimatedDiv>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
