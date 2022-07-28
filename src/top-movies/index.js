import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./components/Movie";

const TopMovies = (props) => {
  const { search } = props;
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=1"
      );
      setMovies(data.data.results);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(movies);
  return (
    <div className="App">

      <div>
        <h1>{props.search}</h1>
        <input className="search" value = {props.search} onChange = {(event) => props.searchMovies(event.target.value, event)}></input>
      </div>

      <div className="mostPopular-inner layout">
        {movies.map((movie) => {
          return <Movie movie = {movie}></Movie>
        })}
      </div>
    </div>
  );
}

export default TopMovies