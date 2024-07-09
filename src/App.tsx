import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Count from "./count";

type people = {
  name: string;
  age: number;
  location?: string;
};

function App() {
  const [count, setCount] = useState<number>(0);
  const [people, setPeople] = useState<people>();
  // const emplyee = {
  //   name: "Employee",
  //   age: 48,
  //   jobTitle: "Developer",
  //   degree: "Bachelor",
  // };

  useEffect(() => {
    setPeople({ name: "John", age: 30, location: "USA" });
  }, []);

  function total(number1: number, number2: number): number {
    return number1 + number2;
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Count count={count} setCount={setCount} total={total} />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
