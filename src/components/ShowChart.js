import React, { useEffect, useState } from "react";
import { fetchData } from "../Apis/fetcher";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GaugeChartDesign from "./GaugeChartDesign/GaugeChartDesign";
import "../components/GaugeChartDesign/charStylet.css";

const ShowChart = () => {
  const [dataValue, setDataValue] = useState(undefined);
  const [minNum, setMinNum] = useState(undefined);
  const [maxNum, setMaxNum] = useState(undefined);
  const [unit, setUnit] = useState(undefined);

  //call fetchData function and save data in state
  useEffect(() => {
    const fetch = async () => {
      const response = await fetchData();
      if (response) {
        setDataValue(response.value);
        setMinNum(response.min);
        setMaxNum(response.max);
        setUnit(response.unit);
      } else {
        toast.warn("Something went wrong. Please refresh the page!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    };
    fetch();
  }, []);

  return (
    <div className="chart-container">
      <h2> Gauge Visualisation</h2>
      {minNum !== undefined &&
        maxNum !== undefined &&
        dataValue !== undefined && (
          <GaugeChartDesign
            min={minNum}
            max={maxNum}
            value={dataValue}
            unit={unit}
          />
        )}
    </div>
  );
};

export default ShowChart;
