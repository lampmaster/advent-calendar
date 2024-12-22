import { Day, DayProps } from "../../components/Day.tsx";
import s from "./Calendar.page.module.css";

const DAYS: Array<DayProps> = [
  { id: "23", text: "23", color: "white" },
  { id: "24", text: "24" },
  { id: "25", text: "25", color: "white" },
  {
    id: "26",
    text: "26 december",
    size: "wide",
    transparent: true,
  },
  { id: "27", text: "27", color: "dark-green" },
  { id: "28", text: "28" },
  { id: "29", text: "29", color: "white" },
  { id: "30", text: "30", color: "white" },
  { id: "31", text: "30 dec", color: "gradient", size: "double" },
];

export const CalendarPage = () => {
  return (
    <div className={s.pageAnimation}>
      <h1 className={s.title}>advent calendar</h1>
      <div className={s.calendar}>
        {DAYS.map((props) => (
          <Day key={props.id} {...props} />
        ))}
      </div>
      <div className={s.bgCircle}></div>
    </div>
  );
};
