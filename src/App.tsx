import s from "./App.module.css";
import { Route, Routes } from "react-router";
import { CalendarPage } from "./pages/Calendar/Calendar.page.tsx";
import { DayPage } from "./pages/Day/Day.page.tsx";
import { PageProtected } from "./pages/PageProtected.tsx";
import { Analytics } from "@vercel/analytics/react";
import { SnowFall } from "./components/SnowFall.tsx";

function App() {
  return (
    <>
      <div className={s.container}>
        <Routes>
          <Route path={"/"} element={<CalendarPage />} />
          <Route
            path={"/day/:day"}
            element={
              <PageProtected>
                <DayPage />
              </PageProtected>
            }
          />
        </Routes>
        <Analytics />
      </div>

      <SnowFall />
    </>
  );
}

export default App;
