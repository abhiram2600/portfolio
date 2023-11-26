"use client";
import ALink from "../animated_link/animated_link";
import styles from "./contact.module.scss";
import { useNav } from "@/app/hooks/useNav";

const links = [
  {
    name: "Github",
    link: "https://github.com/abhiram2600",
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/18wjtUpc1BUsHCJqSKBkl01U5TydnXLrP/view?usp=sharing",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/abhiram-kasturi/",
  },
];

const Details = () => {
  return (
    <div className={styles.details}>
      <div>
        <p className={styles.heading}>Get in touch</p>
        <ALink
          href="mailto:abhiramkasturi10@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.values}
          style={{ color: "white" }}
          name={"abhiramkasturi10@gmail.com"}
        />
      </div>
      <div>
        <p className={styles.heading}>Say hello</p>
        <ALink
          href="tel:+18647654799"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.values}
          style={{ color: "white" }}
          name={"+18647654799"}
        />
      </div>
    </div>
  );
};

export default function Contact() {
  const { ref } = useNav({
    mode: "both",
    amount: 0.91,
    title: "Contact",
  });
  return (
    <div ref={ref} className={styles.page} id={"contact"}>
      <div className={styles.detailsContainer}>
        <p className={styles.title}>
          I'm available for work. <br /> Feel free to get in touch!
        </p>
        <Details />
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.links}>
          {links.map(({ name, link }, idx) => {
            return (
              <ALink
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
                name={name}
              />
            );
          })}
        </div>
        <p className={styles.copyright}>&copy; 2023 Abhiram Kasturi</p>
      </div>
    </div>
  );
}
