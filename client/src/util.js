import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:8080'
})

instance.interceptors.request.use(
    function (config) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(config);
        }, 2000); // Delay of 2 seconds
      });
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  export default instance;
