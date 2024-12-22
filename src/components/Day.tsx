import s from "./Day.module.css";
import cn from "classnames";

type DayProps = {
  text: string;
  size?: "square" | "double" | "wide" | undefined;
  transparent?: boolean;
  color?: "white" | "gradient" | "dark-green";
};

export const Day = ({
  size = "square",
  transparent,
  color,
  text,
}: DayProps) => {
  return (
    <div
      className={cn(s.container, s[size], {
        [s.transparent]: transparent,
        [s.gradient]: color === "gradient",
        [s.white]: color === "white",
        [s.darkGreen]: color === "dark-green",
      })}
    >
      <p>{text}</p>
    </div>
  );
};
