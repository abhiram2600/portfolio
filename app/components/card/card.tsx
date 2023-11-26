import { CSSProperties } from "react";
import styles from "./card.module.scss";

interface CardProps {
  children: React.ReactNode;
  style?: CSSProperties;
}

export default function Card({ children, style }: CardProps) {
  return (
    <div className={styles.card} style={style}>
      {children}
    </div>
  );
}
