import Books from "./Books";

function Home() {
  return (
    <div className="Home">
        <h2>Home</h2>
        <p>Enter any title, author, or genre below to get 40 related books.</p>
     <Books/>
    </div>
  );
}

export default Home;
