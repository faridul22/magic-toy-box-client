import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import UpdateToyInfo from "../pages/UpdateToyInfo/UpdateToyInfo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
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
                path: '/allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/toy')
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/addAToy',
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/details',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
            },
            {
                path: '/updateToyInfo/:id',
                element: <UpdateToyInfo></UpdateToyInfo>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            }

        ]

    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;