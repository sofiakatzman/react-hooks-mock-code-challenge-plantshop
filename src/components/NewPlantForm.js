import React, { useState } from "react";

function NewPlantForm({ handleAdd }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      id: Math.random(), // generate a unique ID for the new plant
      name: name,
      image: image,
      price: price,
    };
    handleAdd(newPlant);
    setName("");
    setImage("");
    setPrice(0);
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;