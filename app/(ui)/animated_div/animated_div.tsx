"use client";
import { HTMLMotionProps, motion } from "framer-motion";

interface AnimDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export default function AnimatedDiv({ children, ...props }: AnimDivProps) {
  const variants = {
    initial: { opacity: 0.3, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0.3, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={variants}
      initial={"initial"}
      whileInView={"visible"}
      exit={"exit"}
      viewport={{ amount: 0.5, once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
