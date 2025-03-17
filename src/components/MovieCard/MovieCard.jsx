import React from "react";
import styles from "./MovieCard.module.css";
import { useNavigate } from "react-router";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/movie-details", { state: { movie } });
  };

  return (
    <div onClick={handleClick} className={styles["movie-card"]}>
      <img src={movie.imageUrl} alt="test" />
      <div className={styles["movie-card-content"]}>
        <h2>{movie.title}</h2>
        <p>{movie.releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
