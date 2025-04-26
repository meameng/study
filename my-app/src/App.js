import Button from "./Button";
import {useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const clickBtn = () => {
    setValue((prev) => prev +1);
  } 
  console.log ("I start all the time ");
  const eftEx = () => {
    console.log ("I view only one time ");
  }
  useEffect("eftEx",[]);

  // 6.2부터~~
  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={clickBtn} text={"Click Me!"}/>
    </div>
  );
}

export default App;
