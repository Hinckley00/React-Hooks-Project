import MovieCard from "./MovieCard";

function MovieList({ movies, onDelete, darkMode }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onDelete={onDelete}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
}

export default MovieList;
