import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "./horizontal-scroll-screen.module.scss";
import { RefObject, forwardRef } from "react";

interface HorizontalScrollScreenProps {
  children: React.ReactNode;
  end: string;
}

export const HorizontalScrollScreen = forwardRef<
  HTMLDivElement,
  HorizontalScrollScreenProps
>(function ({ children, end }, ref) {
  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLElement>,
  });
  const y_s = useSpring(scrollYProgress, { mass: 0.1 });
  const x = useTransform(y_s, [0, 1], ["1%", end]);
  return (
    <div className={styles.container}>
      <motion.div style={{ x: x }} className={styles.cards}>
        {children}
      </motion.div>
    </div>
  );
});
