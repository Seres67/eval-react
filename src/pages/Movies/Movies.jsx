import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/MoviesContext/MoviesContext";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./Movies.module.css";

const Movies = () => {
  const movieService = useContext(MovieContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService.getAllMovies().then((m) => setMovies(m));
  }, []);
  console.log(movies.length);

  if (movies.length === 0)
    return (
      <div className={styles["movies-page"]}>
        <h1>Films</h1>
        <div className={styles["movies-grid"]}>
          <p>Aucun film trouvé</p>
        </div>
      </div>
    );

  return (
    <div className={styles["movies-page"]}>
      <h1>Films</h1>
      <div className={styles["movies-grid"]}>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
