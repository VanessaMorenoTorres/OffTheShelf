import React from "react";

const BookCard = (props) => {
    return(
        <div className="cardsCont">
            <img src={props.image} alt=""/>
                <h4>{props.title}</h4>
                <p>Author: {props.author}</p>
                <p> Year Published: {props.published ==='0000' ? 'Not available' : props.published.substring(0,4) }</p>
                {/* <p>{props.description}</p>  this was not included bc it was making cards too big,
                For later development is on click feature to see description*/}
                <a href={props.read} target="_blank" rel="noreferrer" >Click Here For Book Preview</a>
        </div>
    )
}

export default BookCard;