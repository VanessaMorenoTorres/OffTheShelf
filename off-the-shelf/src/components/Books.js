import React, { Component } from "react";
import SearchArea from "./SearchArea";


class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }


  handleSearch = (e) => {
    // console.log(e.target.value) <--this worked, state is changing as user types
    this.setState({searchField: e.target.value })
  }
  searchBook = (e) =>{
    e.preventDefault();
    console.log(e.target.value)
    let searchField = e.target.value
    // fetch(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key`)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchField}`)
      .then(response => response.json())
      .then(json => console.log(json))}
  //   .then(result => {
  // this.setState({ books: Books.books})

  

  render() {
    return (
      <div className="books">
        <SearchArea searchBook={this.handleSearch} handleSearch={this.handleSearch} />
        <p>Showing results for:</p>
      
      </div>
    );
  };
}
export default Books;
