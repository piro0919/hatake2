import { createContext } from "react";
import styles from "../../styles/style.module.scss";

export type Style = Record<
  | "breakpoints-mobile"
  | "breakpoints-tablet"
  | "breakpoints-desktop"
  | "breakpoints-wide",
  string
>;

const StyleContext = createContext<Style>(styles as Style);

export default StyleContext;
