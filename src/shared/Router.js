import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import AddTodo from "../pages/AddTodo";
import Detail from "../pages/Detail";
import EditTodo from "../pages/EditTodo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login />}/>
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/home" element = {<Home />}/>
        <Route path = "/todos/AddTodo" element = {<AddTodo/>}/>
        <Route path = "/todos/" element = {<Todos/>}/>
        <Route path = "/todos/:id" element = {<Detail/>}/>
        <Route path = "/todos/:id/EditTodo" element = {<EditTodo/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;