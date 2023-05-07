import { useState } from "react";
import "./App.css";
import "./Mobile.css"
import Nav from "./Components/Nav";
import Stopwatch from "./Components/Stopwatch";
import Timer from "./Components/Timer";

function App() {

  const [timerPage, setTimerPage] = useState(false);

  return (
    <>
      <Nav timerPage={timerPage} setTimerPage={setTimerPage} />
      {
        timerPage ?
          <Stopwatch /> :
          <Timer />
      }
    </>
  );
}

export default App;
