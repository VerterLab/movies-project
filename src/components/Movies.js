import { Movie } from "./Movie";

function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => (
          // console.log(movie, "id"),
          <Movie key={movie.imdbID} {...movie} />
        ))
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

export { Movies };
