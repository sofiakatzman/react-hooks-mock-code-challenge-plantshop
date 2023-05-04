import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

const [plants, setPlants] = useState([]) 
//fetch plant data
useEffect(() => {
  fetch('http://localhost:6001/plants')
  .then(r => r.json())
  .then(data => setPlants(data))
}, [])





  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
