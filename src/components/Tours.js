import React from "react";
import Card from "./Card";
function Tours({ tours, handleRemove }) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan Your Tour</h2>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card {...tour} handleRemove={handleRemove} key={tour.id} />;
        })}
      </div>
    </div>
  );
}

export default Tours;
