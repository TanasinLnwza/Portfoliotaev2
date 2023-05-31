import React from 'react';
import "./SVGAnimation.css";
const SVGAnimation = () => {
  return (
    <div className="hello-parent">
      <svg className="hello-word" width="120" height="120" viewBox="0 0 400 500">
        <g id="H-letter">
          <line className="H-left-stroke" x1="50" y1="0" x2="50" y2="124" stroke="aliceblue" fill="none" strokeWidth="34" />
          <line className="H-mid-stroke" x1="0" y1="17" x2="100" y2="17" stroke="aliceblue" fill="none" strokeWidth="34" />
        </g>

        <g id="E-letter">
          <line className="E-left-stroke" x1="138" y1="0" x2="138" y2="124" stroke="aliceblue" fill="none" strokeWidth="34" />
          <line className="E-top-stroke" x1="154" y1="17" x2="201" y2="17" stroke="aliceblue" fill="none" strokeWidth="34" />
          <line className="E-mid-stroke" x1="154" y1="62" x2="196" y2="62" stroke="aliceblue" fill="none" strokeWidth="34" />
          <line className="E-bottom-stroke" x1="154" y1="107" x2="201" y2="107" stroke="aliceblue" fill="none" strokeWidth="34" />
        </g>

        <g id="H-letter">
          <line className="H-left-stroke" x1="50" y1="153" x2="50" y2="277" stroke="aliceblue" fill="none" strokeWidth="34" />
          <line className="H-mid-stroke" x1="0" y1="153" x2="100" y2="153" stroke="aliceblue" fill="none" strokeWidth="34" />
        </g>

        <g id="H-letter">
          <line className="H-left-stroke" x1="138" y1="153" x2="138" y2="277" stroke="aliceblue" fill="none" strokeWidth="34" />
          <line className="H-mid-stroke" x1="138" y1="153" x2="201" y2="153" stroke="aliceblue" fill="none" strokeWidth="34" />
        </g>
        <line className="H-mid-stroke" x1="138" y1="201" x2="201" y2="201" stroke="aliceblue" fill="none" strokeWidth="34" />
        <line className="H-right-move" x1="201" y1="153" x2="201" y2="277" stroke="aliceblue" fill="none" strokeWidth="34" />

        <g id="Et-letter">
          <line className="Et-left-stroke" x1="250" y1="153" x2="250" y2="277" stroke="aliceblue" fill="none" strokeWidth="34" />
          <line className="Et-top-stroke" x1="233" y1="153" x2="297" y2="153" stroke="aliceblue" fill="none" strokeWidth="34" />
          <line className="Et-mid-stroke" x1="233" y1="207" x2="297" y2="207" stroke="aliceblue" fill="none" strokeWidth="34" />
          <line className="Et-bottom-stroke" x1="233" y1="260" x2="297" y2="260" stroke="aliceblue" fill="none" strokeWidth="34" />
        </g>

        <g id="red-dot">
          <line x1="360" y1="260" x2="360" y2="260" stroke="#FF5851" className="red-dot" />
        </g>
      </svg>
    </div>
  );
};

export default SVGAnimation;
