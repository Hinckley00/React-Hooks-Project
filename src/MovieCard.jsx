import { Link } from "react-router-dom";

function MovieCard({ movie, onDelete, darkMode }) {
  return (
    <div className={`movie-card ${darkMode ? "dark" : "light"}`}>
      <h3 style={{ backgroundColor: "darkgray" }}>
        <Link to={`/movie/${movie.id}`} style={{ color: "black", textDecoration: "none" }}>{movie.title}</Link>
      </h3>
      <br />

      <p>⭐ {movie.rating}</p>
      <p>{movie.description}</p>
      <button
        onClick={() => onDelete(movie.id)}
        style={{ border: "2px dashed darkgrey", borderRadius: "90px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default MovieCard;
