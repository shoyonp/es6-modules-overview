import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./components/Watch/Watch";

function App() {
  const [watches, setWatches] = useState([]);
  // useEffect(() => {
  //   fetch("watches.json")
  //     .then((res) => res.json())
  //     .then((data) => setWatches(data));
  // }, []);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/shoyonp/watches-data/refs/heads/main/watches.json"
    )
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  // const watches = [
  //   { id: 1, name: "Apple watch", price: 200 },
  //   { id: 1, name: "Samsung watch", price: 200 },
  //   { id: 1, name: "MI watch", price: 200 },
  // ];

  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 9",
  //     price: 399,
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 6",
  //     price: 349,
  //   },
  //   {
  //     id: 3,
  //     name: "Fitbit Sense 2",
  //     price: 299,
  //   },
  //   {
  //     id: 4,
  //     name: "Garmin Venu 2",
  //     price: 399,
  //   },
  //   {
  //     id: 5,
  //     name: "Amazfit GTR 4",
  //     price: 199,
  //   },
  // ];

  return (
    <>
      <h1>Vite + React</h1>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
