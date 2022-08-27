import React from "react";
import bennar from "../Images/banner1.png";

function Bennar() {
  return (
    <div className="bennar w-1/2 mt-12">
      <img
        className="rounded-xl w-full max-w-full"
        src={bennar}
        alt="bennar-images"
      />
    </div>
  );
}

export default Bennar;
