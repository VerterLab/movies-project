import { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    typeMovie: "",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searching(this.state.search, this.state.typeMovie);
    }
  };

  //   componentDidUpdate() {
  //     console.log(this.state.search, "--");
  //   }
  render() {
    return (
      <div className="row">
        <div className="input-field ">
          <input
            className="validate"
            placeholder="search"
            type="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() =>
              this.props.searching(this.state.search, this.state.typeMovie)
            }
          >
            Search
          </button>
          <div className="radioSearch">
            <p>
              <label>
                <input
                  className="with-gap"
                  name="group1"
                  type="radio"
                  data-type=""
                  onChange={(e) =>
                    this.setState({ typeMovie: e.target.dataset.type })
                  }
                  checked={this.state.typeMovie === ""}
                />
                <span>All </span>
              </label>
            </p>
            <p>
              <label>
                <input
                  className="with-gap"
                  name="group1"
                  type="radio"
                  data-type="movie"
                  onChange={(e) =>
                    this.setState({ typeMovie: e.target.dataset.type })
                  }
                  checked={this.state.typeMovie === "movie"}
                />
                <span>Movie</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  className="with-gap"
                  name="group1"
                  type="radio"
                  data-type="series"
                  onChange={(e) =>
                    this.setState({ typeMovie: e.target.dataset.type })
                  }
                  checked={this.state.typeMovie === "series"}
                />
                <span>Series</span>
              </label>
            </p>
            {/* <input
              type="radio"
              id="all"
              name="typeMovie"
              value={this.state.typeMovie}
              checked
              onChange={(e) => this.setState({ typeMovie: e.target.value })}
            />
            <label for="all">All</label> */}
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
