import React, { useEffect, useState } from "react";

import axios from "axios";

function Veggies() {
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    canEat: false,
  });

  const [veggiesArray, setVeggiesArray] = useState([]);

  useEffect(() => {
    axios("http://localhost:4001/veggies").then((response) => {
      console.log(response.data);
      setVeggiesArray(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios({
      method: "POST",
      url: "http://localhost:4001/create_veggie",
      // goes to the server the app is from!
      data: JSON.stringify(formData)
    });
    //  user negative values aren't allowed

    // send form data to server create route
  };

  const handleChange = (e) => {
    let value = e.target.name === "canEat" ? e.target.checked : e.target.value;
    let newStateObject = {
      ...formData,
      [e.target.name]: value,
    };
    setFormData(newStateObject);
  };

  let veggiesJSX = veggiesArray.map((veggies) => {
    return (
      <div key={veggies._id} className={veggies.canEat ? "green" : "red"}>
        {veggies.name}
      </div>
    );
  });

  return (
    <>
      <form id="create-veggies-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Veggie Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="color">Veggie Color</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="canEat">Can Eat Veggie?</label>
          <input
            type="checkbox"
            name="canEat"
            checked={formData.canEat}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>

      <section id="display-veggies">{veggiesJSX}</section>
    </>
  );
}

export default Veggies;
