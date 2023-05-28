import React from "react";
import Card from "./Card";
function Tours({ tours, handleRemove }) {
  return (
    <div>
      <div>
        <h2>Plan Your Tour</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Card {...tour} handleRemove={handleRemove} />;
        })}
      </div>
    </div>
  );
}

export default Tours;
