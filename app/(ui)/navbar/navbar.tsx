"use client";
import { GlobalContext } from "@/app/context/GlobalContext";
import styles from "./navbar.module.scss";
import { useContext } from "react";
import ALink from "../animated_link/animated_link";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { colorMode, title } = useContext(GlobalContext);
  const textStyle = {
    name: { color: colorMode ? "rgb(225, 220, 220)" : "rgb(103, 102, 102)" },
    link: { color: colorMode ? "white" : "black" },
  };
  return (
    <div className={styles.navbar}>
      <p style={textStyle.name} className={styles.name}>
        {title}
      </p>
      <div className={styles.linkItems}>
        {links.map((item) => {
          return (
            <ALink
              name={item.name}
              href={item.href}
              key={`${item.name}${item.href}`}
              style={textStyle.link}
            />
          );
        })}
      </div>
    </div>
  );
}
