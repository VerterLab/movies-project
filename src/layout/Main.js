import { useEffect, useState } from "react";
import { Movies } from "../components/Movies";
import { Preload } from "../components/Preload";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const searching = (strMovie, typeMovie) => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${strMovie}&type=${typeMovie}`,
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  };
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
    setLoading(true);
  }, []);
  return (
    <main className="container content">
      <Search searching={searching} />
      {!loading ? (
        <Preload />
      ) : (
        <Movies movies={movies} searching={searching} />
      )}
    </main>
  );
}

export { Main };
