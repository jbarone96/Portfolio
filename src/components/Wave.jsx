import React from "react";

const Wave = () => {
  return (
    <div className="lg:mt-6">
      <svg
        xmlns="https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        className="w-full h-18 sm:h-20 lg:h-[15vh]"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="waves">
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="0"
            fill="#8aa0de"
            fillOpacity=".2"
          />
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="0"
            fill="#8aa0de"
            fillOpacity=".5"
          />
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="0"
            fill="#8aa0de"
            fillOpacity=".9"
          />
        </g>
      </svg>
    </div>
  );
};

export default Wave;
