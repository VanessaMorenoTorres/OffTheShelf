import React from "react";

function StaffPicks() {
  return (
    <div className="Recs">
      <h2>Recommended by creator</h2>
      <ul>
        <li>A Thousand Splendind Suns</li>
        <li>The Book Thief</li>
        <li>The Alchemist</li>
        <li>Daughter of Fortune</li>
        <li>Love in the Times of Cholera</li>
        <li>The Outsiders</li>
        <li>The Count of Monte Cristo</li>
        <li>The Kite Runner</li>
      </ul>
      <div>
        <h4>Do you ever wish your favorite characters were still having adventures?</h4>
        <p>
          Many individuals feel that way too, so much so that they have taken it upon 
          themselves to create the content they would like to see. 
          Check out <a href='https://archiveofourown.org/media' target="_blank" rel="noreferrer">Archive of Our Own</a>,
          here people like you have written amazing stories that keep our favorite characters alive.
          You can look up virtually any character, show, anime, movie, or book and find
           a variety of content to read. These stories range from placing your favorite characters
          in an alternative universe, changing an ending you didn't like, and many more.
          </p>
      </div>
    </div>
  );
}

export default StaffPicks;
