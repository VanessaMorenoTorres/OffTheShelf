import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
    return(
        <div className="Searchlist">
            {
                props.books.map((book, i)=>{
                    return <BookCard 
                    key={i}
                    image={book.volumeInfo.imageLinks.smallThumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    published={book.volumeInfo.publishedDate}
                    description={book.volumeInfo.description}
                    read={book.volumeInfo.previewLink}
                    />
                })
            }
        </div>
    )
}

export default BookList;

// this component contains books prop (data from state) map through array and output will be indiv book cards.