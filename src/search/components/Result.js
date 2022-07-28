const Result = (props) => {
    const showDetails = () => console.log(movie.title);
  const { movie } = props;
  return (
    <div key={movie.id} className="article">
      <img onClick={showDetails} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
      <h3>{movie.title}</h3>
    </div>
  );
}

export default Result;
