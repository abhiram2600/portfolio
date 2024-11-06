"use client";
import { useRef } from "react";
import styles from "./homepage.module.scss";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useNav } from "@/app/hooks/useNav";
import Scroll from "@/app/components/scroll/scroll";

const description = "Abhiram Kasturi - Full Stack Software Engineer - ";

const HeadLine = ({ opacity }: { opacity: MotionValue<number> }) => {
  const { ref } = useNav({ mode: "title-change", title: "Abhiram Kasturi" });

  return (
    <div ref={ref} className={styles.headline}>
      <motion.h1
        animate={{ translateX: [0, -10000] }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 70,
        }}
        style={{ opacity: opacity }}
      >
        {description.repeat(10)}
      </motion.h1>
    </div>
  );
};

export default function Homepage() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.6, 0.01]);
  const scrollTextOpacity = useTransform(scrollYProgress, [0, 0.001], [1, 0]);
  return (
    <div ref={ref} className={styles.container}>
      <HeadLine opacity={opacity} />

      <motion.div
        style={{ opacity: scrollTextOpacity }}
        className={styles.scrollDown}
      >
        <Scroll />
        <p style={{ marginTop: 15 }}>Scroll Down</p>
      </motion.div>
      <motion.div style={{ y: 100 }} className={styles.image}>
        <Image
          src={"/images/prof_pic.png"}
          height={400}
          width={500}
          className={styles.image}
          alt="profile picture"
          priority={true}
        />
      </motion.div>
    </div>
  );
}
