import React, { useState } from "react";

const StarRating = ({ initialRating, maxRating }) => {
  const [stars, setStars] = useState(
    [...Array(maxRating).keys()].map((i) => i + 1)
  );
  const [rating, setRating] = useState(initialRating || 0);
  const [highlightedRating, setHighlightedRating] = useState(0);

  return (
    <div className="star-rating">
      {stars.map((value) => (
        <span
          key={value}
          className={`star ${
            value <= (highlightedRating || rating) ? "filled" : ""
          }`}
          onClick={() => setRating(value)}
          onMouseOver={() => setHighlightedRating(value)}
          onMouseLeave={() => setHighlightedRating(0)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
