import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//create function for fetching data from api
export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://widgister.herokuapp.com/challenge/frontend"
    );
    return response.data;
  } catch (error) {
    toast.error("Something went wrong. Please try again!", {
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
