import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [values, setValues] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result) => {
        console.log(`Hello ${result}!`);
        setValues(result);
        console.log(result);
        console.log(values);
      });
  }, []);

  return (
    <>
      <h1>Ivanna</h1>
      <div>
        {values && (
          <ul>
            {values.map((value) => (
              <li key={value.id}>{value.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
