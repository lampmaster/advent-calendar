import s from "./Day.module.css";
import cn from "classnames";
import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";

export type DayProps = {
  text: string;
  day: number;
  className?: string;
  size?: "square" | "double" | "wide" | undefined;
  transparent?: boolean;
  color?: "white" | "gradient" | "dark-green";
  isButton?: boolean;
};

const NOTIFICATION_DELAY = 3000;

export const Day = ({
  className,
  size = "square",
  transparent,
  color,
  text,
  day,
  isButton,
}: DayProps) => {
  const navigate = useNavigate();
  const notificationRef = useRef<HTMLDivElement>(null);

  const currentDay = new Date().getDate();
  const isLockedDay = currentDay < day;

  useEffect(() => {
    notificationRef.current?.setAttribute("popover", "manual");

    return () => {
      notificationRef.current?.hidePopover();
    };
  }, []);

  const handleClick = () => {
    if (isLockedDay) {
      notificationRef.current?.showPopover();

      setTimeout(() => {
        notificationRef.current?.hidePopover();
      }, NOTIFICATION_DELAY);
      return;
    }

    navigate(`/day/${day}`);
  };

  return (
    <>
      <div className={s.notification} ref={notificationRef}>
        День еще не наступил
      </div>
      <div
        className={cn(s.container, className, {
          [s[size]]: !isButton,
          [s.button]: isButton,
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
