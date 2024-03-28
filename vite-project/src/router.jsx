import React from 'react'
import './index.css'
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import App from './App.jsx';
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Logbook from './pages/Logbook.jsx'
import AddLogbook from './pages/AddLogbook.jsx'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/LogBooks",
                element: <Logbook />
            },
            {
                path: "/AddLogbook",
                element: <AddLogbook />
            },
             {
                 path: "/project",
                 element: <Project />
             },
             {
                 path: "/presence",
                 element: <Presence />
             },
            // {
            //     path: "/about",
            //     element: <About />
            // },
            //{
              //   path: "/blogs/:id",
                // element: <BlogView />,
                //loader: ({ params }) => fetch(`http://localhost:5173/SiiMagang/${params.id}`)
             //},
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },

    // buat navigate button di login atau register
    // {
    //     path: "/login",
    //     element: <Login />,
    // },
    // {
    //     path: "/register",
    //     element: <Register />,
    // },
]);

export default router;
