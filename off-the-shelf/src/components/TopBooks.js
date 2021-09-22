import React, {useState, useEffect} from 'react'

function TopBooks(){
    const [top, setTop] = useState([])

    useEffect(()=>{
        fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`)
        .then(response => response.json())
        .then(data => 
            // setTop(data.data.results.books),
            console.log(data.results.books))
    }, [])



    return(
        <div>
            <h3>Here is where columns will appear</h3>
            <section>
                {/* {books.map((top) => {
                    const {} = top
                })} */}
            </section>
        </div>
    )
}

export default TopBooks