import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { MovieContext } from "../../context/MoviesContext/MoviesContext";
import { MessageContext } from "../../context/MessageContext/MessageContext";
import styles from "./EditMovie.module.css";

const EditMovie = () => {
  const { state } = useLocation();
  const movie = state.movie;

  const [formData, setFormData] = useState({
    title: movie.title,
    description: movie.description,
    releaseDate: movie.releaseDate,
    imageUrl: movie.imageUrl,
  });
  const { showMessage } = useContext(MessageContext);
  const movieService = useContext(MovieContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    movieService
      .updateMovie(movie.id, formData)
      .then((movie) => {
        navigate("/movie-details", {
          replace: true,
          state: {
            movie,
          },
        });
      })
      .catch((err) => showMessage("error", err.message));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div className={styles["movie-form"]}>
      <h1>Edit Movie</h1>
      <form onSubmit={handleSubmit} id="movie-form">
        <div className={styles["form-group"]}>
          <label htmlFor="title">Titre</label>
          <input
            onChange={handleChange}
            value={formData.title}
            type="text"
            id="title"
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleChange}
            value={formData.description}
            id="description"
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="releaseDate">Date de sortie</label>
          <input
            onChange={handleChange}
            value={formData.releaseDate}
            type="date"
            id="releaseDate"
            required=""
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="imageUrl">URL de l'image</label>
          <input
            onChange={handleChange}
            value={formData.imageUrl}
            type="url"
            id="imageUrl"
            required=""
          />
        </div>
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
};

export default EditMovie;
