import { useState } from "react";

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      id: Date.now(),
      title,
      rating: parseFloat(rating),
      description,
      posterUrl,
    };

    onAddMovie(newMovie);
    setTitle("");
    setRating("");
    setDescription("");
    setPosterUrl("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "auto" }}>
      <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          value={rating}
          placeholder="Rating"
          onChange={(e) => setRating(e.target.value)}
          required
          min="0"
          max="10"
          step="0.1"
        />
        <input
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          value={posterUrl}
          placeholder="Poster URL"
          onChange={(e) => setPosterUrl(e.target.value)}
        />
      </div>
      <button type="submit" style={{ border: "2px solid darkgrey" }}>
        Add New Movie
      </button>
    </form>
  );
}

export default AddMovieForm;
