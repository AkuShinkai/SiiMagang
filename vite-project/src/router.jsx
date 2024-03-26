import React from 'react'
import './index.css'
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Project from './pages/Project.jsx';
import Presence from './pages/Presence.jsx';
import NotFound from './pages/NotFound.jsx';
import App from './App.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
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
]);

export default router;
