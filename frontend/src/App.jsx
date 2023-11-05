import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [values, setValues] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result) => {
        setValues(result);
      });
  }, []);

  return (
    <>
      <h1>Katthemsida</h1>
      <div className="presentation">
        <p>
          Varje katt på webbplatsen presenteras med detaljer om ålder, namn, ras
          och färg. Denna information hjälper potentiella adoptörer att få en
          uppfattning om katternas egenskaper och utseende. Målet är att
          underlätta adoptionsprocessen och hjälpa katterna att hitta
          kärleksfulla hem.
        </p>
      </div>
      <div className="catbox">
        {values &&
          values.map((value) => (
            <div key={value.id}>
              <p>
                Denna katt heter {value.name} och är {value.age}
                år gammal.
              </p>
              <p>
                {value.name} har färgen {value.color} och är av rasen{" "}
                {value.breed}
              </p>
            </div>
          ))}
      </div>
      <p>Hemsidan gjord av Ivanna JSU22</p>
    </>
  );
}
