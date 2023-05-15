import React, { useState } from "react";
import "./movie.css";

const AddMovie = ({ addMovie }) => {
  const [movieData, setMovieData] = useState({
    name: "3okal",
    duration: "2h",
    productionYear: "2010",
    rate: 10,
  });

  const handleChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    setMovieData({ ...movieData, [name]: value }); //computed property
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMovie(movieData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>movie name</label>
      <input
        name="name"
        type="text"
        value={movieData.name}
        onChange={handleChange}
      />
      <label>Duration</label>
      <input
        name="duration"
        type="text"
        value={movieData.duration}
        onChange={handleChange}
      />
      <label>Production Year</label>
      <input
        name="productionYear"
        type="text"
        value={movieData.productionYear}
        onChange={handleChange}
      />
      <label>Rate</label>
      <input
        name="rate"
        type="number"
        value={movieData.rate}
        onChange={handleChange}
      />
      <input type="submit"></input>
    </form>
  );
};

export default AddMovie;
