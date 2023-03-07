import Axios from "axios";

export default Axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-type": "application/json",
  },
});
