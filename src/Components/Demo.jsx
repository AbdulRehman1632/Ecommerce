import React, { useState } from "react";

const Demo = () => {
  const [rating, setRating] = useState(0); // Current selected rating

  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      {[...Array(5)].map((_, index) => (
        <span className="responsive"
          key={index}
          onClick={() => setRating(index + 1)} // Set rating on click
          style={{
            fontSize: "24px",
            color: index < rating ? "gold" : "lightgray", // Change color if active
            marginRight: "5px",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Demo;
