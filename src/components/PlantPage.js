import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import PlantCard from "./PlantCard";

function PlantPage() {
  
  const [plants, setPlants] = useState([]) 
  //fetch plant data
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => {
      setPlants(data)
    console.log(data)
    })
  }, [])

  const handleAdd = (obj) => {
    setPlants([...plants, obj])
  }
  

  return (
    <main>
      <NewPlantForm handleAdd={handleAdd}/>
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
