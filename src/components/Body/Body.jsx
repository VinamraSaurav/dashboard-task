import React from "react";
import LeftBody from "./LeftBody/LeftBody";
import RightBody from "./RightBody/RightBody";

const Body = () => {
  return (
    <div className="max-w-[108rem] mx-auto">
      <div className="md:flex justify-between">
        <div className="md:max-w-[82.4375rem] md:w-8/12 lg:w-atuo">
          <LeftBody />
        </div>
        <div className="md:max-w-[25.5625rem] w-screen md:w-4/12  lg:w-auto">
          <RightBody />
        </div>
      </div>
    </div>
  );
};

export default Body;
