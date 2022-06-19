import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Sample() {

  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = (x) => {
    setCar((previousState) => {
      return { ...previousState, color: x };
    });
  };

  return (
    <div className="App">
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>

      <button type="button" onClick={() => updateColor("blue")}>
        Blue
      </button>
      <input
        id="fname"
        value={car.color}
        onChange={(e) => updateColor(e.target.value)}
      ></input>
    </div>
  );
  
}


export default Sample;

// DOM element
if (document.getElementById('sample')) {
    ReactDOM.render(<Sample />, document.getElementById('sample'));
}

