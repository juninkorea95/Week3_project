import axios from "axios";

const todoInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL 
})

const loginInstance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/users`,
  });

export {todoInstance, loginInstance};