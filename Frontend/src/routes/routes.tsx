import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Task from "../pages/Task";
import AllTasks from "../components/AllTasks";
import CreateTask, { actionCreate } from "../components/CreateTask";
import SignUp from "../pages/SignUp";
import { fetchAllTasks } from "../util/https";

const routes = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "SignUp", element: <SignUp/> },
  { path: "task", element: <Task />,children:[
    {path:"AllTasks",element:<AllTasks/>,loader:fetchAllTasks},
    {path:"CreateTask",element:<CreateTask/>,action:actionCreate},
  ] },
]);

export default routes;
