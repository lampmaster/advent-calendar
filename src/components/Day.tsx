import s from "./Day.module.css";
import cn from "classnames";
import { useNavigate } from "react-router";

export type DayProps = {
  text: string;
  id: string;
  size?: "square" | "double" | "wide" | undefined;
  transparent?: boolean;
  color?: "white" | "gradient" | "dark-green";
};

export const Day = ({
  size = "square",
  transparent,
  color,
  text,
  id,
}: DayProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/day/${id}`);
  };

  return (
    <div
      className={cn(s.container, s[size], {
        [s.transparent]: transparent,
        [s.gradient]: color === "gradient",
        [s.white]: color === "white",
        [s.darkGreen]: color === "dark-green",
      })}
      onClick={handleClick}
    >
      <p>{text}</p>
    </div>
  );
};
