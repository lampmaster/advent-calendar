import s from "./Day.module.css";
import cn from "classnames";
import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";

export type DayProps = {
  text: string;
  day: string;
  size?: "square" | "double" | "wide" | undefined;
  transparent?: boolean;
  color?: "white" | "gradient" | "dark-green";
};

const NOTIFICATION_DELAY = 3000;

export const Day = ({
  size = "square",
  transparent,
  color,
  text,
  day,
}: DayProps) => {
  const navigate = useNavigate();
  const notificationRef = useRef<HTMLDivElement>(null);

  const currentDay = new Date().getDate();
  const isLockedDay = currentDay < Number(day);

  useEffect(() => {
    notificationRef.current?.setAttribute("popover", "manual");
  }, []);

  const handleClick = () => {
    if (isLockedDay) {
      notificationRef.current?.showPopover();

      setTimeout(() => {
        notificationRef.current?.hidePopover();
      }, NOTIFICATION_DELAY);
      return;
    }

    console.log("clicked");
    navigate(`/day/${day}`);
  };

  return (
    <>
      <div className={s.notification} ref={notificationRef}>
        The day has not yet come
      </div>
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
    </>
  );
};
