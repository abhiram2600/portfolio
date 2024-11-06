import { ComponentProps } from "react";
import styles from "./card.module.scss";

interface CardProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export default function Card({ children, ...props }: CardProps) {
  return (
    <div className={styles.card} {...props}>
      {children}
    </div>
  );
}
