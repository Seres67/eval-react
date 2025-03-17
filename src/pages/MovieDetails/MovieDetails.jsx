import { useContext } from "react";
import { MovieContext } from "../../context/MoviesContext/MoviesContext";
import { useLocation, useNavigate } from "react-router";
import styles from "./MovieDetails.module.css";
import { MessageContext } from "../../context/MessageContext/MessageContext";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { AuthService } from "../../services/auth";

const MovieDetails = () => {
  const { showMessage } = useContext(MessageContext);
  const movieService = useContext(MovieContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const movie = state.movie;

  const editMovie = (e) => {
    e.preventDefault();
    navigate("/edit-movie", { state: { movie } });
  };

  const deleteMovie = (e) => {
    e.preventDefault();
    movieService.deleteMovie(id);
    showMessage("success", "Movie deleted successfully!");
  };

  return (
    <div className={styles["movie-details"]}>
      <div className={styles["movie-header"]}>
        <h1>{movie.title}</h1>
        {AuthService.getCurrentUser().id === movie.userId && (
          <div className={styles["movie-actions"]}>
            <button onClick={editMovie}>Edit</button>
            <button onClick={deleteMovie}>Delete</button>
          </div>
        )}
      </div>
      <div className={styles["movie-content"]}>
        <img className={styles["movie-image"]} src={movie.imageUrl} alt="" />
        <div className={styles["movie-info"]}>
          <p className={styles["release-date"]}>
            Release Date: {movie.releaseDate}
          </p>
          <p className={styles["description"]}>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
