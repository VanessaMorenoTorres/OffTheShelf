import React from "react";

function SearchArea(props) {
  return (
    <div className="SearchArea">
      <form onSubmit={props.searchBook}>
          <input onChange={props.handleSearch} type="text" />
          <button type="submit">Search</button>
          <select defaultValue="Sort" onChange={props.handleSort}>
            <option value="Sort">Sort</option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
      </form>
    </div>
  );
}

export default SearchArea;
