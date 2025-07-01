import { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import Filter from "./Filter";
import moviesData from "./Movie";
import Footer from "./Footer";
import AddMovieForm from "./AddMovieForm";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= parseFloat(ratingFilter || 0)
  );

  return (
    <>
       <Filter
          titleFilter={titleFilter}
          ratingFilter={ratingFilter}
          onTitleChange={setTitleFilter}
          onRatingChange={setRatingFilter}
        />
      <div style={{ textAlign: "left" }}>
        <h1>🎬</h1>
        <h1> Movie App</h1>
      </div>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} onDelete={handleDeleteMovie} />
      <Footer />
    </>
  );
}

export default App;
