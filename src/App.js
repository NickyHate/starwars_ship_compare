import React,{ useEffect } from 'react';
import './App.css';

function App() {

  useEffect( async () => {
    const response = await fetch("http https://swapi.dev/api/starships/9/");
    const data = await response.json();
    const [item] = data.results;
    console.log(item)
  }, [])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
