function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;
  return (
    <div id={id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img
            className="activator"
            src=""
            onerror={(this.src = "")}
            alt=""
            title="No pictur"
          />
        ) : (
          <img
            className="activator"
            src={poster}
            onerror="this.src=''"
            alt=""
          />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {type}
          <span className="right">{year}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
