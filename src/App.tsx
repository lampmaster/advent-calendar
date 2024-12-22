import s from "./App.module.css";
import { Route, Routes } from "react-router";
import { CalendarPage } from "./pages/Calendar/Calendar.page.tsx";
import { DayPage } from "./pages/Day/Day.page.tsx";

function App() {
  return (
    <div className={s.container}>
      <Routes>
        <Route path={"/"} element={<CalendarPage />} />
        <Route path={"/day/:id"} element={<DayPage />} />
      </Routes>
    </div>
  );
}

export default App;
