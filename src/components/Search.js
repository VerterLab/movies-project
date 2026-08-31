import { useState } from "react";

function Search(props) {
  const { searching } = props;
  const [search, setSearch] = useState("");
  const [typeMovie, setTypeMovie] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searching(search, typeMovie);
    }
  };

  return (
    <div className="row">
      <div className="input-field ">
        <input
          id="search"
          className="validate"
          placeholder="search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn search-btn"
          onClick={() => searching(search, typeMovie)}
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
                onChange={(e) => setTypeMovie(e.target.dataset.type)}
                checked={typeMovie === ""}
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
                onChange={(e) => setTypeMovie(e.target.dataset.type)}
                checked={typeMovie === "movie"}
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
                onChange={(e) => setTypeMovie(e.target.dataset.type)}
                checked={typeMovie === "series"}
              />
              <span>Series</span>
            </label>
          </p>
        </div>
      </div>
    </div>
  );
}

export { Search };
