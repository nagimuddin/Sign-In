import React from "react";
import { Link } from "react-router-dom";

function Zoom() {
  return (
    <div className="text-center">
      <h1>Welcome to ZOOM</h1>
      <Link to="/check-out">
        <button className="btn btn-primary">Proceed Checkout</button>
      </Link>
    </div>
  );
}

export default Zoom;
