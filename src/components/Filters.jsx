import React from "react";
import { Link } from "react-router-dom";
import "./filters.css";

const Filters = () => {

  return (
      <div className="container-filters">
        <form onSubmit className="form-filters">
          <input
            placeholder="Projects"
            type="text"
          />

          <input
            placeholder="Clients"
            type="text"
          />

          <input
            placeholder="Date"
            type="date"
          />

          
          <button className="button-searchproject btn">
            Search
          </button>
          
        </form>
      </div>
  );
};

export default Filters;