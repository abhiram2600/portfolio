import Link, { LinkProps } from "next/link";
import styles from "./animated_link.module.scss";
import { CSSProperties } from "react";

interface ALinkInterface
  extends LinkProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  href: string;
  sColor?: string;
  className?: string;
  style?: CSSProperties;
}

export default function ALink({
  name,
  href,
  style,
  className,
  sColor = "black",
  target,
  rel,
  download,
  ...props
}: ALinkInterface) {
  return (
    <Link
      className={`${styles.link} ${className}`}
      style={style}
      href={href}
      data-center={name}
      s-color={sColor}
      target={target}
      rel={rel}
      download={download}
      {...props}
    >
      <span>{name}</span>
    </Link>
  );
}
