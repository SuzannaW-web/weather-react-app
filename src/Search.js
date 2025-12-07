import "./styles.css";
import React, { useState } from "react";

export default function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (query.trim().length > 0) {
      onSearch(query);
    } else {
      alert("Enter a city");
    }
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-9 col-12">
          <input
            type="search"
            placeholder="Type a city"
            className="search-input"
            onChange={updateQuery}
          />
          ss
        </div>
        <div className="col-sm-3 col-12">
          <input type="submit" value="Search" className="search-button" />
        </div>{" "}
      </div>
    </form>
  );
}
