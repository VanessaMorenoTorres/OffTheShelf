import React from "react";

const BookCard = (props) => {
    return(
        <div className="cardsCont">
            <img src={props.image} alt=""/>
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>Author: {props.author}</h3>
                <p> Year Published: {props.published ==='0000' ? 'Not available' : props.published.substring(0,4) }</p>
                <p>{props.description}</p>
                <a href={props.read} target="_blank" rel="noreferrer" >Click Here For Book Preview</a>
            </div>
        </div>
    )
}

export default BookCard;