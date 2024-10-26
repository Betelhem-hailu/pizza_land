import axios from "axios";
axios.defaults.withCredentials = true;
const API_URI = "http://localhost:8001/pizza";
const register = formData => {
  return axios.post(API_URI + "/registerCustomer", formData).then(response => {
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

const logout = async() => {
  return axios.post(API_URI + '/logout', { withCredentials: true})
  .then(() => {
      localStorage.removeItem("userInfo");
  });
};

const userService = {
  register,
  login,
  logout
};

export default userService;