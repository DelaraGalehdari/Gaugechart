import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import "../App.css";

//present data in ReactSpeedometer
const GChart = ({ min, max, value }) => {
  return (
    <div>
      <h2> Gauge Visualisation</h2>
      {min !== undefined && max !== undefined && (
        <ReactSpeedometer
          maxValue={max}
          minValue={min}
          value={value}
          needleColor="red"
          segments={1}
          needleTransition="easeElastic"
          segmentColors={["gold"]}
          valueFormat="$"
          paddingHorizontal={620}
          textColor="black"
        />
      )}
    </div>
  );
};

export default GChart;
