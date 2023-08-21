
import axios from "axios";

let headers = {};
const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "https://api.ens.sch.ae:8444/",
  headers,
});
console.log(client);
client.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("userToken");

    if (token) {
      // config.headers.Authorization = `Bearer ${token}`;
      config.headers.Authorization = "Bearer " + JSON.parse(token);
      config.headers.Accept = "application/json";
      config.headers.ContentType = "multipart/form-data";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
  );


export const login = async (body) => {

  console.log(body,"this is login");
  return await client.post("auth/login", body);
};
