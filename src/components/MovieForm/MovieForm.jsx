import { useContext, useState } from "react";
import { MovieContext } from "../../context/MoviesContext/MoviesContext";
import { useNavigate } from "react-router";
import styles from "./MovieForm.module.css";

const MovieForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    releaseDate: "",
    imageUrl: "",
  });
  const movieService = useContext(MovieContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    movieService
      .createMovie(formData)
      .then((m) => navigate("/movie-details", { state: { movie: m } }))
      .catch((err) => console.log(err));
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
      <h1>Ajouter un film</h1>
      <form onSubmit={handleSubmit} id="movie-form">
        <div className={styles["form-group"]}>
          <label forHtml="title">Titre</label>
          <input
            onChange={handleChange}
            value={formData.title}
            type="text"
            id="title"
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label forHtml="description">Description</label>
          <textarea
            onChange={handleChange}
            value={formData.description}
            id="description"
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label forHtml="releaseDate">Date de sortie</label>
          <input
            onChange={handleChange}
            value={formData.releaseDate}
            type="date"
            id="releaseDate"
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label forHtml="imageUrl">URL de l'image</label>
          <input
            onChange={handleChange}
            value={formData.imageUrl}
            type="url"
            id="imageUrl"
            required
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default MovieForm;
