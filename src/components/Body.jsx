import React from "react";
import LeftBody from "./LeftBody";
import RightBody from "./RightBody";

const Body = () => {
  return (
    <div className="max-w-[108rem] mx-auto">
      <div className="md:flex">
        <div className=" md:w-9/12">
          <LeftBody />
        </div>
        <div className="md:w-3/12">
          {" "}
          <RightBody />{" "}
        </div>
      </div>
    </div>
  );
};

export default Body;
