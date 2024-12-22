import { Day } from "./components/Day.tsx";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>advent calendar</h1>
      <div className={s.calendar}>
        <Day text={"23"} color={"white"} />
        <Day text={"24"} />
        <Day text={"25"} color={"white"} />
        <Day text={"26 december"} size={"wide"} transparent />
        <Day text={"27"} color={"dark-green"} />
        <Day text={"28"} />
        <Day text={"29"} color={"white"} />
        <Day text={"30"} color={"white"} />
        <Day text={"31 dec"} size={"double"} color={"gradient"} />
      </div>
    </div>
  );
}

export default App;
