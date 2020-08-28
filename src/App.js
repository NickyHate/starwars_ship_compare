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
  const ship_id = [3,10,11,12,15,21,22,23];
  const arr = [];
  useEffect(() => {
    async function fetchShips() {
      ship_id.map(async (item) => {
        const response = await fetch(`https://swapi.dev/api/starships/${item}/`);
        const response_1 = await response.json();
        console.log(response_1)
      }) 
    }
    fetchShips();
  }, []);
  // console.log(ship);
  return (
    <div className="App">
      <div className="container">
        {/* <div className="shipCompare">
          {ship.map((item) => {
            return <div className="shipCard" key={item.model}>
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
          })}
          
        </div> */}
      </div>
    </div>
  );
}

export default App;
