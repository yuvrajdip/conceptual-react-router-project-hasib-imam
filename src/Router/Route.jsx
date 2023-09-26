import {createBrowserRouter} from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element : <MainLayout></MainLayout>,
    children : [
      {
        path: "/Home",
        element: <Home></Home>
      }
    ]
  }
])

export default Route;