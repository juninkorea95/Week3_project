import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,

    headers: {
        "Content-Type": `application/json;charset=UTF-8`,
        "Accept": "application/json",
      
        // 추가  
        "Access-Control-Allow-Origin": "http://localhost:3000",
        'Access-Control-Allow-Credentials':"true",
    }
   
})

export default instance;