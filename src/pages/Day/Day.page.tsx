import s from "./Day.page.module.css";
import cn from "classnames";
import { useNavigate, useParams } from "react-router";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Day } from "../../components/Day.tsx";
import CalendarIcon from "../../assets/icons/calendar.svg?react";
import {
  DAY_TASKS,
  FIRST_CALENDAR_DAY,
  LAST_CALENDAR_DAY,
  WISHES_DAY,
} from "./constants.ts";
import { ChristmasTreePage } from "../ChristmasTree/ChristmasTree.tsx";

export const DayPage = () => {
  const { day: dayFromParam } = useParams();
  const navigate = useNavigate();
  const day = Number(dayFromParam);

  const currentDay = new Date().getDate();
  const isNextDayAvaliable =
    day && currentDay > Number(day) && Number(day) !== LAST_CALENDAR_DAY;

  const isPrevDayAvailable = Number(day) !== FIRST_CALENDAR_DAY;

  const currentDayIssue = day ? DAY_TASKS[day] : undefined;

  const handleBack = () => {
    navigate("/");
  };

  if (day === WISHES_DAY) {
    return (
      <div className={cn(s.pageAnimation)}>
        <div className={s.title}>
          <button onClick={handleBack} className={s.buttonBack}>
            <CalendarIcon className={s.calendarIcon} />
          </button>
          {day} Декабря
        </div>
        <ChristmasTreePage />
      </div>
    );
  }
  return (
    <div className={cn(s.container, s.pageAnimation)}>
      <div className={s.title}>
        <button onClick={handleBack} className={s.buttonBack}>
          <CalendarIcon className={s.calendarIcon} />
        </button>
        {day} Декабря
      </div>
      <Markdown remarkPlugins={[remarkGfm]} className={s.text}>
        {currentDayIssue ? currentDayIssue : "Something went wrong"}
      </Markdown>
      <>
        <div className={s.footerControls}>
          {isPrevDayAvailable && (
            <Day
              className={s.buttonNextDay}
              text={"Вчера"}
              day={Number(day) - 1}
              size={"double"}
              color={"dark-green"}
              isButton
            />
          )}
          {isNextDayAvaliable && (
            <Day
              className={s.buttonNextDay}
              text={"Завтра"}
              day={Number(day) + 1}
              size={"double"}
              color={"gradient"}
              isButton
            />
          )}
        </div>
      </>
    </div>
  );
};
