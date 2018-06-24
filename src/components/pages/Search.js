import React from "react";



const Search = props => (
  <div>
    <h1>SEARCH Page</h1>
     <form>
    <div className="form-group">
      <label htmlFor="search">Search:</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search For a Dog Breed"
        id="search"
      />
      <br />
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-primary"
      >
        Search
      </button>
    </div>
  </form>

  </div>
);

export default Search;
