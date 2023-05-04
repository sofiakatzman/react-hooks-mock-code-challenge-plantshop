import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const handleAdd = (object) => {
    console.log(object)
  }



  return ( 
    <ul className="cards">
      {plants.map(item => {
        return <PlantCard plant={item} key={item.id} handleAdd={handleAdd}/> 
      })}</ul>
  );
}

export default PlantList;
