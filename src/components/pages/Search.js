import React, {Component} from "react";
import API from '../../utils/API.js';
import SearchResults from '../SearchResults';



class Search extends Component {

    state = {
      search: "",
    breeds: [],
    results: [],
    error: ""

    }

    componentDidMount() {

    }

    handleInputChange = event => {
      this.setState({search: event.target.value})

    }

    handleFormSubmit = event => {
      event.preventDefault()
      API.getDogByBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }

        this.setState({ results: res.data.message, error: "" })
      
      .catch(err => this.setState({ error: err.message }));

      })


    }


  render(){
    return(
      <div>
        <h1>Search Page</h1>
        <form>
          <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
              onChange={this.handleInputChange}
              value={this.value}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search For a Dog Breed"
              id="search"
            />
            <br />
            <button
              onClick={this.handleFormSubmit}
              className="btn btn-primary"
              >
              Search
            </button>
          </div>
        </form>
        <SearchResults results={this.state.results} />
      </div>  
    )
  }

}
export default Search;
