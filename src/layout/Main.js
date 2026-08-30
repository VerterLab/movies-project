import { Component } from "react";
import { Movies } from "../components/Movies";
import { Preload } from "../components/Preload";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_APP_API;

export class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    this.setState();
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searching = (strMovie, typeMovie) => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${strMovie}&type=${typeMovie}`,
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <Search searching={this.searching} />
        {loading ? <Preload /> : <Movies movies={movies} searching />}
      </main>
    );
  }
}
