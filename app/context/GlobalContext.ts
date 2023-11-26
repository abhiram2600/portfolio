"use client";
import { Dispatch, SetStateAction, createContext } from "react";

export interface GlobalContextInterface {
  colorMode: boolean;
  setColorMode: Dispatch<SetStateAction<boolean>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<Partial<GlobalContextInterface>>({});
