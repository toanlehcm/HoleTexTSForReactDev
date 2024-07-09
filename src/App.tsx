import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Count from "./count";

// interface People {
//   name: string;
//   age: number;
//   location?: string;
// }

// interface RelationShip {
//   wifeName: string;
//   childName: string;
// }

// interface Employee extends People, RelationShip {
//   jobTitle: string;
//   degree: string;
// }

enum Degree {
  ASSOCIATES = "ASSOCIATES",
  BACHELORS = "BACHELORS",
  MASTERS = "MASTERS",
  DOCTORATE = "DOCTORATE",
  PROFESSIONAL = "PROFESSIONAL",
}

type People = {
  name: string;
  age: number;
  location?: string;
};

type RelationShip = {
  wifeName: string;
  childName: string;
};

type Employee = People &
  RelationShip & {
    jobTitle: string;
    degree: Degree;
    level?: string | number | Degree;
  };

type ApiResponse<DataType, MessageType = undefined> = {
  data: DataType;
  status: "success" | "failure";
  message?: MessageType;
};

// type BookResponse = {
//   data: { id: number; bookName: string };
//   status: "success" | "failure";
// };

function App() {
  const [count, setCount] = useState<number>(0);
  const [people, setPeople] = useState<People>();

  const userResponse: ApiResponse<{ id: number; name: string }> = {
    data: { id: 1, name: "Joint" },
    status: "success",
  };

  const bookResponse: ApiResponse<{ id: number; bookName: string }> = {
    data: { id: 1, bookName: "book" },
    status: "success",
  };

  const employee: Employee = {
    name: "Employee",
    age: 48,
    jobTitle: "Developer",
    degree: Degree.BACHELORS,
    wifeName: "Wife",
    childName: "Child",
    level: "Level",
  };

  const employee2: typeof employee = {
    name: "Employee2",
    age: 48,
    jobTitle: "Developer",
    degree: Degree.BACHELORS,
    wifeName: "Wife",
    childName: "Child",
    level: "Level",
  };

  console.log(people, userResponse, bookResponse, employee2);

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
