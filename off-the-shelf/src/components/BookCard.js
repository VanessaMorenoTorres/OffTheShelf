import React from "react";

const BookCard = (props) => {
    return(
        <div className="cardsCont">
            <img src={props.image} alt=""/>
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.published}</p>
            </div>
        </div>
    )
}

export default BookCard;