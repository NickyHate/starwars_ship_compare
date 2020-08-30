import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [starships, setStarships] = useState([]);
  const [ship, setShip] = useState([]);

  async function fetchData() {
    const response = await fetch("https://swapi.dev/api/films/2/");
    const data = await response.json();
    setStarships(data.starships);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchShips = () => {
    Promise.all(starships.map((item) => fetch(item)))
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((texts) => {
        console.log(texts)
      })
  };

  useEffect(() => {
    fetchShips();
  });

  return (
    <div className="App">
      <div className="container">
        <div className="shipCompare">
          {/* {
          starships.map((item) => {
            fetch(`${item}`).then((response) => {
              response.json().then((data) => {
                setShip(data);
                console.log(ship)
              });
            });
          })
          
          } */}
          {/* {ship.map((item) => {
            return (
              <div className="shipCard" key={item.model}>
                <div className="name">{`Name : ${item.name}`}</div>
                <div className="name">{`Model : ${item.model}`}</div>
                <div className="name">{`Consumables : ${item.consumables}`}</div>
                <div className="name">{`Manufacturer : ${item.manufacturer}`}</div>
                <div className="name">{`Cost : ${item.cost_in_credits}`}</div>
                <div className="name">{`Speed : ${item.MGLT} MGLT`}</div>
                <div className="name">{`MaxSpeed(atmosphering): ${item.max_atmosphering_speed}`}</div>
                <div className="name">{`Hyperdrive_rating : ${item.hyperdrive_rating}`}</div>
                <div className="name">{`Crew : ${item.crew}`}</div>
                <div className="name">{`Passengers : ${item.passengers}`}</div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}

export default App;
