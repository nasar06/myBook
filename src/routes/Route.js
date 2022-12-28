import { createBrowserRouter } from "react-router-dom";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import Menu from "../components/Menu/Menu";
import RightSideBar from "../components/RightSideBar/RightSideBar";
import Main from "../layOut/Main";
import Details from "../pages/Details/Details";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Media from "../pages/Media/Media";
import NotFound from "../pages/NotFound/NotFound";

const router= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
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
                element: <Media></Media>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params})=> fetch(`http://localhost:5000/details/${params.id}`)
                
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])


export default router