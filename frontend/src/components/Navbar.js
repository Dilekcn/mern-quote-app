import React from "react";

function Navbar() {
  return (
    <nav className="navbar d-flex w-full justify-content-between bg-warning mb-5 p-4">
      <div className="">
        <a className="navbar-brand" href="/">
          Qoutes
        </a>
      </div>
      <div>
        <a className="navbar-brand" href="/">
          Add Qoute
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
