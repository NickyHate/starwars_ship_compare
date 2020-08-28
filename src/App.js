import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // const [starships, setStarships] = useState([]);
  const [ship, setShip] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("https://swapi.dev/api/films/2/");
  //     const data = await response.json();
  //     setStarships(data.starships);

  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    async function fetchShips() {
      const response = await fetch("http://swapi.dev/api/starships/11/");
      const data = await response.json();
      setShip(data);
    }
    fetchShips();
  }, []);
  console.log(ship);
  return (
    <div className="App">
      <div className="container">
        <div className="shipCompare">
          <div className="shipCard"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
