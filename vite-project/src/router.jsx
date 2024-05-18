import React from 'react'
import './index.css'
import {
    createBrowserRouter,
} from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx'
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import App from './App.jsx';
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Logbook from './pages/Logbook.jsx'
import AddLogbook from './pages/AddLogbook.jsx'
import Attendance from './pages/Attendance.jsx'
import Project from './pages/Project.jsx'
import AddProject from './pages/AddProject.jsx';
import LandingPage from './LandingPage.jsx';
import Welcome from './pages/Welcome.jsx';
import Profile from './pages/Profile.jsx';
import EditProfile from './pages/EditProfile.jsx';
import Submission from './pages/Submission.jsx';

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
                path: "/logbooks",
                element: <Logbook />
            },
            {
                path: "/addlogbook",
                element: <AddLogbook />
            },
            {
                path: "/project",
                element: <Project />
            },
            {
                path: "/addproject",
                element: <AddProject />
            },
            {
                path: "/attendance",
                element: <Attendance />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/editprofile",
                element: <EditProfile />
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
    {
        path: '/',
        element: <LandingPage />,
        children: [
            {
                path: '/welcome',
                element: <Welcome />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/submission',
                element: <Register />
            }

        ]

    }
]);

export default router;
