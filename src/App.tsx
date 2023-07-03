import { useState } from "react";
import enUS from "./locale/en_US";
import dayjsGenrate from "./generate/dayjs";
import "./App.css";
import Picker from ".";

function App() {
  return (
    <>
      <Picker
        locale={enUS}
        picker="date"
        generateConfig={dayjsGenrate}
        showToday
        showNow
        showTime
      />
    </>
  );
}

export default App;
