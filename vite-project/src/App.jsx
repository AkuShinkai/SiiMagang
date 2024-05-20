import './App.css'
import { Navigate, Outlet } from 'react-router-dom';
import SideBar from './component/SideBar';
import Header from './component/Header';
// import Login from './pages/Login';
// import Navbar from './components/navbar';
// import Footer from './components/Footer';
// import ScrollButton from './components/ScrollButton';
import { useState } from 'react';
import { useStateContext } from './contexts/ContextProvider';

function App() {
    const { user, token } = useStateContext()

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <>
            {/* <Login/>    alur page login bagaimana? */}
            <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
                <SideBar/>
                <div className="flex flex-col flex-1">
                    <Header/>
                    <div className="flex-1 p-2 min-h-0 overflow-auto">
                        <Outlet />
                    </div>
                </div>
            </div>

        </>
    )
}

export default App;
