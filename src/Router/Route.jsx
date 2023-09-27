import {createBrowserRouter} from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Favorites from "../components/Favorites/Favorites";
import Login from "../components/Login/Login";

const Route = createBrowserRouter([
  {
    path: "/",
    element : <MainLayout></MainLayout>,
    children : [
      {
        path: "/Home",
        element: <Home></Home>
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  }
])

export default Route;