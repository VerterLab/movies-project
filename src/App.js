import "./index.css";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Footer } from "./layout/Footer";
import { Component } from "react";

class App extends Component {
  //  const response= await  fetch("http://www.omdbapi.com/?apikey=2f2b53ed&s=matrix")
  //       .then((response) => response.json)
  //       .then((data) => data);
  // };

  render() {
    return (
      <div className="App">
        <Header />

        <h2>Hello from Movieees</h2>

        <Main />

        <Footer />
      </div>
    );
  }
}
export default App;
