import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Contact from "./ContactUs";
import Home from "./Home";
import TopSellers from "./TopSellers";
import StaffPicks from "./StaffPicks";

function Navigation() {
    return (
        <Router>
          <div className="navBar">
            <nav>
          <ul className="pageLinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topsellers">Top Sellers</Link>
            </li>
            <li>
              <Link to="/staffpicks">Staff Picks</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link></li>
          </ul>
          </nav>
          <Switch>
            <Route path="/topsellers" component={TopSellers} />
            <Route path="/staffpicks" component={StaffPicks} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
          </div>
        </Router>
    );
  }

export default Navigation
