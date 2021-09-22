import React, { Component } from "react";
import SearchArea from "./SearchArea";
import request from 'superagent';
import BookList from "./BookList";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
      sort: ''
    }
  }

  searchBook = (e) =>{
    e.preventDefault();
    request
    .get(`https://www.googleapis.com/books/v1/volumes/?q=${this.state.searchField}&maxResults=40`)
    // .query({q: this.state.searchField})
    .then((data)=> {
      console.log(data)
      const cleanData = this.cleanData(data)
      this.setState({books: cleanData});
      // spread operator grabs items from api items aray and placing in new array
    })
  }

  handleSearch = (e) => {
    console.log(e.target.value) 
    // ^this worked, state is changing as user types
    this.setState({searchField: e.target.value })
  }

  handleSort = (e) => {
    console.log(e.target.value)
    this.setState({ sort: e.target.value})
  }

  cleanData = (data) => {
    const cleanedData = data.body.items.map((book) =>{
      if(book.volumeInfo.hasOwnProperty('publishedDate')=== false) {
        book.volumeInfo['publishedDate'] = '0000'
      }
      if(book.volumeInfo.hasOwnProperty('imageLinks')=== false) {
        book.volumeInfo['imageLinks'] = { smallThumbnail: 'https://tightlinesandtidalwaters.com/wp/wp-content/themes/powerwp-pro/assets/images/no-image.png'}
      }
      return book;
    })
    return cleanedData;
  }

  render() {
    const sortedBooks = this.state.books.sort((a, b) => {
      if(this.state.sort === 'Newest'){
        return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
      // parseInt conversts date string into integer to sort year (1st 4 nums are the year displayed)
      }
      else if(this.state.sort === 'Oldest'){
        return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
      }
    })
    return (
      <div className="searchResults">
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
        <p>Showing results for:</p>
        <BookList books={sortedBooks}/>
      </div>
    );
  };
}
export default Books;