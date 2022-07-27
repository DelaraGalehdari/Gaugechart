import React, { useEffect, useState } from "react";
import { fetchData } from "../Apis/fetcher";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import GChart from "./GChart";

const ShowChart = () => {
  const [dataValue, setDataValue] = useState();
  const [minNum, setMinNum] = useState(undefined);
  const [maxNum, setMaxNum] = useState(undefined);

  //call fetchData function and save data in state
  useEffect(() => {
    const fetch = async () => {
      const response = await fetchData();
      if (response) {
        setDataValue(response.value);
        setMinNum(response.min);
        setMaxNum(response.max);
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
    <div>
      <GChart min={minNum} max={maxNum} value={dataValue} />
    </div>
  );
};

export default ShowChart;
