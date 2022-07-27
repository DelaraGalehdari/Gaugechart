import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import "../App.css";

const GChart = ({ min, max, value }) => {
  return (
    <div>
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
          paddingHorizontal={600}
          textColor="black"
        />
      )}
    </div>
  );
};

export default GChart;
