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
            src={"/images/about_main.jpg"}
            width={3024}
            height={4032}
            alt={"Profile Image"}
            className={styles.main_image}
          />
          <div className={styles.content}>
            <AnimatedPara className={styles.description}>
              I am a dedicated Web and Mobile Developer based in the United
              States, bringing forth a background with 1.5 years of hands-on
              experience in the realm of Software Development. My journey is
              fueled by a passion for learning and the pursuit of perfectio.. As
              a current Master's student in Computer Science at Clemson
              University, I find myself deeply immersed in the academic
              exploration of cutting-edge technologies and methodologies. My
              focus is particularly towards Web Development, Data Science.
            </AnimatedPara>

            <AnimatedPara className={styles.description}>
              My relentless pursuit of knowledge is complemented by a commitment
              to perfection in design, driven by an unwavering dedication to
              crafting exceptional user experiences. Beyond academia, my
              professional aspirations are geared towards contributing
              innovative solutions and leveraging my skills in a full-time role.
              I am <b>actively seeking opportunities</b> where I can apply my
              expertise, drive meaningful innovation, and embark on a fulfilling
              journey of impactful contributions within the tech industry.
            </AnimatedPara>

            <AnimatedDiv>
              <p className={styles.subTitle}>My work as Software Engineer</p>
              <p className={styles.description}>
                In the early months of 2021, I commenced my professional
                journey, stepping into the realm of software development as a
                passionate and driven individual. Embarking on this path, I took
                on the role of a Software Engineering Intern, delving into the
                intricacies of technology with a focus on React JS, React
                Native, and Firebase. This immersive internship experience
                served as the foundation for my subsequent endeavors in the
                dynamic world of software engineering.
              </p>
            </AnimatedDiv>

            <AnimatedPara className={styles.description}>
              During the initial six months, I navigated through the challenges
              and triumphs of crafting applications that seamlessly blended
              innovation and user-centric design. My primary focus was on
              building robust and scalable apps for various companies,
              contributing to their digital presence and functionality.
            </AnimatedPara>
            <AnimatedPara className={styles.description}>
              In September 2021, I transitioned from an intern to a full-time
              Software Engineer, marking a significant milestone in my
              professional journey. In this capacity, I continued to harness my
              skills in React JS, React Native. Channeling my energy into
              creating impactful solutions for client projects. My commitment to
              excellence extended beyond the codebase; I actively participated
              in mentoring programs, fostering an environment of
              knowledge-sharing and collaboration within the team. I embraced
              the role of a mentor, guiding and sharing insights with interns
              who, like me, were passionate about making a mark in the tech
              landscape.
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
                During my mornings, you'll find me navigating the world of gym
                workouts, embracing the excitement of newfound fitness
                endeavors. As A fresh face in the gym scene, I'm eager to
                explore various exercises and cultivate a healthier lifestyle.
                Currently captivated by the artistry of culinary delights, my
                newfound interest in cooking has me experimenting with diverse
                recipes and flavors.
              </p>
            </AnimatedDiv>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
