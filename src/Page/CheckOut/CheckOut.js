import React from 'react';
import { Link } from "react-router-dom";

function CheckOut() {
  return (
    <div className='text-center'>
      <h1>Please Checkout Your Visiting</h1>
      <Link to="/check-out">
        <button className="btn btn-primary">Proceed Checkout</button>
      </Link>
    </div>
  );
}

export default CheckOut;
