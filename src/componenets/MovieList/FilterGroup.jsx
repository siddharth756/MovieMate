import React from "react";

const FilterGroup = ({minrating, OnRatingClick}) => {
  return (
    <ul className="movie_filter align_center">
      <li
        className={
          minrating === 8
            ? "movie_filter_item active active"
            : "movie_filter_item"
        }
        onClick={() => OnRatingClick(8)}
      >
        8+ Star
      </li>
      <li
        className={
          minrating === 7
            ? "movie_filter_item active active"
            : "movie_filter_item"
        }
        onClick={() => OnRatingClick(7)}
      >
        7+ Star
      </li>
      <li
        className={
          minrating === 6
            ? "movie_filter_item active active"
            : "movie_filter_item"
        }
        onClick={() => OnRatingClick(6)}
      >
        6+ Star
      </li>
    </ul>
  );
};

export default FilterGroup;
