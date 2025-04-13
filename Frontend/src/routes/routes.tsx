import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Task from "../pages/Task";

const routes = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "task", element: <Task /> },
]);

export default routes;
