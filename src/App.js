import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  const [tours, setTours] = useState(data);
  function handleRemove(id) {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  }

  function handleRefresh() {
    setTours(data);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button onClick={handleRefresh}>Refresh </button>
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} handleRemove={handleRemove} />
    </div>
  );
};

export default App;
