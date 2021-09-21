import axios from "axios";
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [pokeData, setPokeData] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        console.log(response.data.results);
        setPokeData(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <button>Fetch Pokemon</button>
      <ul>
        {pokeData.map((pokeName, index) => (
          <li key={index}>{pokeName.name}</li>
        ))}
      </ul>
      )
    </div>
  );
}

export default App;
