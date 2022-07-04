import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-light d-flex justify-content-around">
        <Link
          to="/"
          className="navbar-brand btn btn-secondary font-weight-bold"
        >
          To Do Do
        </Link>
        <Link to="/login" className="btn btn-warning">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
