import React from "react";

function SearchArea(props) {
  return (
    <div className="SearchArea">
      <form onSubmit={props.searchBook}>
          <input onChange={props.handleSearch} type="text" />
          <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchArea;
