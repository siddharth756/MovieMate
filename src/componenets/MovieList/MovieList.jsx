import React, { useState, useEffect } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ type, title }) => {
  const [movies, setMovies] = useState([]);
  const [filtermovies, setfiltermovies] = useState([]);
  const [minrating, setminrating] = useState(0);
  const [sort, setsort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchmovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filtermovies, [sort.by], [sort.order]);
      setfiltermovies(sortedMovies);
    }
  }, [sort]);

  const handleFilter = (rate) => {
    if (rate === minrating) {
      setminrating(0);
      setfiltermovies(movies);
    } else {
      setminrating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setfiltermovies(filtered);
    }
  };

  const handlesort = (e) => {
    const { name, value } = e.target;
    setsort((prev) => ({ ...prev, [name]: value }));
  };

  const fetchmovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=cb4041ca9ec3f5458d06536f90ae1b42`
    );
    const data = await response.json();
    setMovies(data.results);
    setfiltermovies(data.results);
  };

  return (
    <section className="movie_list" id={type}>
      <header className="movie_list_header align_center">
        <h2 className="movie_list_heading align_center">{title}</h2>

        <div className="movie_list_fs align_center">
          <FilterGroup minrating={minrating} OnRatingClick={handleFilter} />

          <select
            name="by"
            id=""
            onChange={handlesort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            onChange={handlesort}
            value={sort.order}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filtermovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
