import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const initialItem = {
  director: "",
  metascore: "",
  actors: ""
};

const UpdateMovie = props => {
  const [updateMovie, setUpdateMovie] = useState(initialItem);
  const { id } = useParams();

  useEffect(() => {
    const movieToUpdate = props.movieList.find(movie => `${movie.id}` === id);

    if (movieToUpdate) {
      setUpdateMovie(movieToUpdate);
    }
  }, [props.movieList]);

  const changeHandler = e => {
    e.persist();

    setUpdateMovie({
      ...updateMovie,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/api/movies/${id}`, updateMovie)
      .then(res => {
        console.log("We out here", res.data);
        // props.setMovieList(res.data);
        // props.history.push(`/${id}`);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          value={updateMovie.title}
        />

        <input
          type="text"
          name="director"
          onChange={changeHandler}
          value={updateMovie.director}
        />

        <input
          type="text"
          name="metascore"
          onChange={changeHandler}
          value={updateMovie.metascore}
        />

        <input
          type="text"
          name="stars"
          onChange={changeHandler}
          value={updateMovie.stars}
        />

        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
