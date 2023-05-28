import React, { useState } from "react";

function Card({ id, name, info, image, price, handleRemove }) {
  const [readMore, setReadMore] = useState(false);
  const description = `${info.substring(0, 200)}...`;

  const handleReadMore = () => {
    setReadMore((prev) => !prev);
  };

  return (
    <div>
      <div className="card">
        <img src={image} className="image" />
        <div className="tour-details">
          <h4 className="tour-price">INR {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {readMore ? info : description}

          <span onClick={handleReadMore}>
            {readMore ? ` show less` : ` read more`}
          </span>
        </div>
        <button onClick={() => handleRemove(id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default Card;
