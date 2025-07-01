function MovieCard({ movie, onDelete }) {
  return (
    <div>
      <h3 style={{ backgroundColor: "darkgray" }}>{movie.title}</h3>
      <br />

      <div>
        {movie.posterUrl && (
          <iframe
            src={movie.posterUrl}
            frameborder="0"
            width="300px"
            height="250px"
            title={`${movie.title} Poster`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <p>⭐ {movie.rating}</p>
      <p>{movie.description}</p>
       <button onClick={() => onDelete(movie.id)} style={{border:"2px dashed darkgrey", borderRadius:"90px"}}>Delete</button>
    </div>
  );
}

export default MovieCard;
