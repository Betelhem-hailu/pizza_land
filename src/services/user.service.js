import axios from "axios";
axios.defaults.withCredentials = true;
const API_URI = "http://localhost:8001/pizza";
const register = formData => {
  return axios.post(API_URI + "/registerCustomer", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  }).then(response => {
    return response.data;
  }).catch(error => {
    if (error.response && error.response.status === 409) {
      // Handle conflict
      throw new Error(error);
    } else {
      // Handle other errors
      throw new Error(error || 'An unexpected error occurred'); 
    }
  });
};


const login = async (email, password) => {
  return axios
    .post(
      API_URI + "/login",
      { email, password },
      { withCredentials: true }
    )
    .then(response => {
      return response.data;
    });
};


const userService = {
  register,
  login,
};

export default userService;