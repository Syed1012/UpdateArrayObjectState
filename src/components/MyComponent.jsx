import React, { useState } from "react";

const MyComponent = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = {year: carYear, make: carMake, model: carModel}

    setCars(c => [...c, newCar]);
  };

  const handleRemoveCar = (index) => {

  };

  const handleYearChange = (e) => {
      setCarYear(e.target.value);
  };

  const handleMakeChange = (e) => {
      setCarMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setCarModel(e.target.value);
  };

  return( <div>
  <h2>List of Cars</h2>

  <ul>
    {cars.map((car, index) => <li key={index}>
    {car.year} {car.make} {car.model}
    </li>) }
  </ul>

  <input type="number" value={carYear} onChange={handleYearChange}/> <br />
  <br />
  <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Maker"/> <br />
  <br />
  <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model"/> <br />
  
  <br />
    <button onClick={handleAddCar}>Add car</button>

  </div>);
};

export default MyComponent;
