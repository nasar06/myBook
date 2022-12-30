import { createBrowserRouter } from "react-router-dom";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import Menu from "../components/Menu/Menu";
import RightSideBar from "../components/RightSideBar/RightSideBar";
import Main from "../layOut/Main";
import About from "../pages/About/About";
import Details from "../pages/Details/Details";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Media from "../pages/Media/Media";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";

const router= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: '/home',
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/media',
                element: <PrivateRoute><Media></Media></PrivateRoute>
            },
            {
                path: '/about',
                element: <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params})=> fetch(`https://my-book-server.vercel.app/details/${params.id}`)
                
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])


export default router