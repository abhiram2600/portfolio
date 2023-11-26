"use client";
import AnimatedDiv from "@/app/(ui)/animated_div/animated_div";
import { CSSProperties } from "react";

interface AnimatedParaProps extends React.HTMLAttributes<HTMLParagraphElement> {
  style?: CSSProperties;
  children: React.ReactNode;
}

export const AnimatedPara = ({
  style,
  children,
  ...props
}: AnimatedParaProps) => {
  return (
    <AnimatedDiv>
      <p style={style} {...props}>
        {children}
      </p>
    </AnimatedDiv>
  );
};
