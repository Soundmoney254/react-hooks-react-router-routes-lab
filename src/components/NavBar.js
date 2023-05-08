import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  marginRight: "10px",
  color: "white",
  textDecoration: "none",
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={{ ...linkStyles, background: "red" }}
        activeStyle={{
          fontWeight: "bold",
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={{ ...linkStyles, background: "green" }}
        activeStyle={{
          fontWeight: "bold",
          background: "darkblue",
        }}
      >
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
        style={{ ...linkStyles, background: "blue" }}
        activeStyle={{
          fontWeight: "bold",
          background: "darkblue",
        }}
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        exact
        style={{ ...linkStyles, background: "purple" }}
        activeStyle={{
          fontWeight: "bold",
          background: "darkblue",
        }}
      >
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
