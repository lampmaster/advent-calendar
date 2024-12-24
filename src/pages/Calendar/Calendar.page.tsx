import { Day, DayProps } from "../../components/Day.tsx";
import s from "./Calendar.page.module.css";

const DAYS: Array<DayProps> = [
  { day: 23, text: "23", color: "white" },
  { day: 24, text: "24" },
  { day: 25, text: "25", color: "white" },
  {
    day: 26,
    text: "26 december",
    size: "wide",
    transparent: true,
  },
  { day: 27, text: "27", color: "dark-green" },
  { day: 28, text: "28" },
  { day: 29, text: "29", color: "white" },
  { day: 30, text: "30", color: "white" },
  { day: 31, text: "31 dec", color: "gradient", size: "double" },
];

export const CalendarPage = () => {
  return (
    <div className={s.pageAnimation}>
      <div className={s.align}>
        <div className={s.titleContainer}>
          <h1 className={s.title}>advent calendar</h1>
          <p className={s.subTitle}>by nik remarka</p>
        </div>
      </div>

      <div className={s.calendar}>
        {DAYS.map((props) => (
          <Day key={props.day} {...props} />
        ))}
      </div>
      <div className={s.bgCircle}></div>
    </div>
  );
};
