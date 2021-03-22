import LoadingMask from "./components/LoadingMask";
import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("api/hotels")
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hotels</h1>
      {isLoading && <LoadingMask />}
    </div>
  );
}
