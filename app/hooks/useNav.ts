"use client";
import { useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";

interface useNavProps {
  mode: "color-change" | "title-change" | "both";
  title?: string;
  amount?: number;
}

export const useNav = ({
  mode,
  title = "Abhiram Kasturi",
  amount = 0.4,
}: useNavProps) => {
  const { setColorMode, setTitle } = useContext(GlobalContext);
  const ref = useRef<any>();
  const isInView = useInView(ref, { amount: amount });

  useEffect(() => {
    if (isInView) {
      if (mode === "color-change" || mode === "both") {
        setColorMode?.(true);
      }
      if (mode === "title-change" || mode === "both") {
        setTitle?.(title);
      }
    } else {
      if (mode === "color-change" || mode === "both") {
        setColorMode?.(false);
      }
      if (mode === "title-change" || mode === "both") {
        // do nothing
      }
    }
  }, [isInView]);
  return { ref };
};
