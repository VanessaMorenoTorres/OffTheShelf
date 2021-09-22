import React, {useState, useEffect} from 'react'

function TopBooks(){
    const [top, setTop] = useState([])

    useEffect(()=>{
        fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`)
        .then(response => response.json())
        .then(data => 
            setTop(data.results.books),
            console.log(setTop)
            )
            // console.log(setTop)
            // console.log(data.results.books)) this worked data appeared 
    }, [])




    return(
        <div>
            <h3>Here is where columns will appear</h3>
            <section>
                {top.map((top) => {
                    const {rank, description, title, author, primary_isbn10, book_image, amazon_product_url} = top
                return(
                    <article key={rank}>
                        <div>
                            <img src={book_image} alt={title} />
                        </div>
                        <div>
                            <h3>Rank: {rank}</h3>
                            <h3>Title: {title}</h3>
                            <h4>Author: {author}</h4>
                            <p>Description: {description}</p>
                            <p>ISBN: {primary_isbn10}</p>
                            <a href={amazon_product_url}>Buy Now</a>
                        </div>
                    </article>
                )
                })}
            </section>
        </div>
    )
}

export default TopBooks