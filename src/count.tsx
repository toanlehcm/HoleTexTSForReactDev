import React from "react";

export default function Count({ count, setCount }: { count: number; setCount: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}
