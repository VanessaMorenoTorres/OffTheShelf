import React, { Component } from "react";
import SearchArea from "./SearchArea";
import request from 'superagent';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    }
  }

  searchBook = (e) =>{
    e.preventDefault();
    request
    .get('https://www.googleapis.com/books/v1/volumes')
    .query({q: this.state.searchField})
    .then((data)=> {
      console.log(data);
    })
  }

  handleSearch = (e) => {
    console.log(e.target.value) 
    // ^this worked, state is changing as user types
    this.setState({searchField: e.target.value })
  }

  render() {
    return (
      <div className="books">
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
        <p>Showing results for:</p>
      
      </div>
    );
  };
}
export default Books;



// below is original attempt to get api but it did not work, trying alternative way above 
// class Books extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       books: [],
//       searchField: "",
//     };
//   }


//   handleSearch = (e) => {
//     console.log(e.target.value) 
//     // ^this worked, state is changing as user types
//     this.setState({searchField: e.target.value })
//   }
//   searchBook = (e) =>{
//     e.preventDefault();
//     // console.log(e.target.value)
//     // let searchField = e.target.value
//     let searchField = Books.searchField.value
//     console.log(e.target.value)
//     // fetch(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key`)
//     fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchField}`)
//       .then(response => response.json())
//       .then(data => console.log(data))}
//   //   .then(result => {
//   // this.setState({ books: Books.books})

  

//   render() {
//     return (
//       <div className="books">
//         <SearchArea searchBook={this.handleSearch} handleSearch={this.handleSearch} />
//         <p>Showing results for:</p>
      
//       </div>
//     );
//   };
// }
// export default Books;
