import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar d-flex w-full justify-content-between bg-warning mb-5 p-4">
        <div className="">
          <Link to="/" className="navbar-brand">
            Qoutes
          </Link>
        </div>
        <div>
          <Link to="/add" className="navbar-brand">
            Add Qoute
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
