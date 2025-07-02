import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MovieDetails({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <h2>Movie Not Found</h2>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>
        <strong>Rating:</strong>⭐ {movie.rating}
      </p>
      <p>
        <strong>Description:</strong>
        {movie.description}
      </p>

      <iframe
        src={movie.posterUrl}
        frameborder="0"
        width="560px"
        height="315px"
        title={`${movie.title} Poster`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <br />
      <br />
      <button
        onClick={() => navigate("/")}
        style={{ border: "2px dashed darkgrey", borderRadius: "90px" }}
      >
        ← Back to Home
      </button>
    </div>
  );
}

export default MovieDetails;
