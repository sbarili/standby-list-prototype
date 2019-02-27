import React from "react";

//stateless functional coponent

const NavBar = ({ totalCounters }) => {
  //console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      {/* <a className="navbar-brand" href="#">
        Standyby List{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a> */}
      <h4>
        Standyby List{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </h4>
    </nav>
  );
};

export default NavBar;
