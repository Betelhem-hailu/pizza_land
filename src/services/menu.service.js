import axios from "axios";
axios.defaults.withCredentials = true;
const API_URI = "http://localhost:8001/pizza";

//get menu by id
const getMenuById = (id) => {
  return axios
    .get(API_URI + "/getMenuById/" + id, { withCredentials: true })
    .then((response) => {
      return response.data;
    });
};

//get all menus
const getAllMenus = (search) => {
  return axios
    .get(API_URI + "/getAllMenus", {params: {
      search: search || '',
      }, withCredentials: true })
    .then((response) => {
      return response.data;
    });
};

//get popular menus
const getPopularMenus = () => {
  return axios
    .get(API_URI + "/getPopularMenus",{withCredentials: true })
    .then((response) => {
      return response.data;
    });
};

//get top restaurants
const getTopRestaurants = () => {
  return axios
    .get(API_URI + "/getTopRestaurants", { withCredentials: true })
    .then((response) => {
      return response.data;
    });
};

const menuService = {
    getMenuById,
    getAllMenus,
    getPopularMenus,
    getTopRestaurants,
  };
  
  export default menuService;