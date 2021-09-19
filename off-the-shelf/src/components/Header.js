import React from "react";
import { ReactComponent as BookLogo } from './images/booklogo.svg'
// import Navigation from "./Navigation";

function Header() {
  return (
    <div className="Header">
      <BookLogo className="BookLogo" />
      <h1>Off the Shelf</h1>
      {/* <Navigation> </Navigation> */}
      
    </div>
  );
}

export default Header;
