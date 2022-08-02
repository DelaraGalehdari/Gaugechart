import React, { useEffect, useState } from "react";
import "./charStylet.css";

const GaugeChartDesign = ({ max, min, value, unit }) => {
  const [calcDegree, setCalcDegree] = useState(-90);
  const [currency, setCurrency] = useState("$");

  //checking the currency
  useEffect(() => {
    switch (unit) {
      case "EUR":
        setCurrency("€");
        break;
      case "USD":
        setCurrency("$");
        break;

      case "CHF":
        setCurrency("Fr.");
        break;
      case "GBP":
        setCurrency("£");
        break;
      default:
        break;
    }
  }, [unit]);

  //default value for calcAngle by conditions
  useEffect(() => {
    if (value < min) {
      setCalcDegree(-90);
    } else if (value > max) {
      setCalcDegree(90);
    } else {
      const calcAngle = ((value - min) / (max - min)) * 180.0 - 90.0;
      setCalcDegree(calcAngle.toFixed());
    }
  }, []);

  return (
    <div className="container">
      <div className="gauge">
        <h5 className="valueText">
          {currency} {value}
        </h5>
        <div className="progress">
          <div className="bar"></div>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "50%",
              backgroundColor: "white",
              clipPath: "polygon(50% 0, 50% 0, 52% 100%, 48% 100%)",
              transform: `rotate(${calcDegree}deg)`,
              transformOrigin: "bottom center",
              animation: "rotate 2s ease-in-out",
              zindex: "300",
            }}
          ></div>
        </div>
      </div>
      <div className="minmax-text">
        <h5>
          {currency} {min}
        </h5>
        <h5>
          {currency} {max}
        </h5>
      </div>
      <button
        className="btnReload"
        onClick={() => window.location.reload(false)}
      >
        Click to reload!
      </button>
    </div>
  );
};

export default GaugeChartDesign;
