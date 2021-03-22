import LoadingMask from "./components/LoadingMask";
import Hotel from "./components/Hotel";
import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("api/hotels")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
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
      {data.map((hotel) => (
        <Hotel key={hotel.name} hotel={hotel} />
      ))}
    </div>
  );
}
