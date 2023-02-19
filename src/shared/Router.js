import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import AddTodo from "../pages/AddTodo";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/todos/AddTodo" element = {<AddTodo/>}/>
        <Route path = "/todos/" element = {<Todos/>}/>
        <Route path = "/todos/:id" element = {<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;