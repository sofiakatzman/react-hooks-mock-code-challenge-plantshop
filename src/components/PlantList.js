import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleAdd, search }) {
const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toString().toLowerCase())
  );

  return (
    <ul className="cards">
      {filteredPlants.map((plant) => (
        <PlantCard plant={plant} key={plant.id} handleAdd={handleAdd} />
      ))}
    </ul>
  );
}

export default PlantList;