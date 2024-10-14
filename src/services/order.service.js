import axios from "axios";
axios.defaults.withCredentials = true;
const API_URI = "http://localhost:8001/pizza";

//place order
const placeOrder = (order) => {
  console.log(order);
  return axios
    .post(API_URI + "/placeOrder", order, { withCredentials: true })
    .then((response) => {
      return response.data;
    });
};

//get order history
const getOrderHistory = () => {
  return axios
    .get(API_URI + "/orderhistory", { withCredentials: true })
    .then((response) => {
      return response.data.orders;
    });
};


const orderService = {
    placeOrder,
    getOrderHistory,
  };
  
  export default orderService;
