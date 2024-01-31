import React from 'react'
import './index.css'
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from './pages/Home.jsx';
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
            // {
            //     path: "/blogs",
            //     element: <Blogs />
            // },
            // {
            //     path: "/contact",
            //     element: <Contact />
            // },
            // {
            //     path: "/about",
            //     element: <About />
            // },
            // {
            //     path: "/blogs/:id",
            //     element: <BlogView />,
            //     loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            // }
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
]);

export default router;
