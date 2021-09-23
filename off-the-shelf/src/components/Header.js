import React from "react";
import { ReactComponent as BookLogo } from './images/booklogo.svg'

function Header() {
  return (
    <div className="Header">
      <BookLogo className="BookLogo" />
      <h1>Off the Shelf</h1>
    </div>
  );
}

export default Header;
