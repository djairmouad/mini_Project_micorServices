import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Task from "../pages/Task";
import AllTasks from "../components/AllTasks";
import CreateTask from "../components/CreateTask";

const routes = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "task", element: <Task />,children:[
    {path:"AllTasks",element:<AllTasks/>},
    {path:"CreateTask",element:<CreateTask/>},
  ] },
]);

export default routes;
