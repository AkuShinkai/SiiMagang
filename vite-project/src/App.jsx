import './App.css';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import SideBar from './component/SideBar';
import Header from './component/Header';
import { useEffect } from 'react';
import { useStateContext } from './contexts/ContextProvider';

function App() {
    const { token, roles } = useStateContext();
    const navigate = useNavigate();

    useEffect(() => {
        // console.log("App - roles:", roles);
        if (roles === 'mentor') {
            navigate('/admin');
        }
    }, [roles, navigate]);

    if (!token) {
        // console.log("No token found, redirecting to /welcome");
        return <Navigate to="/welcome" />;
    }

    return (
        <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
            <SideBar />
            <div className="flex flex-col flex-1">
                <Header />
                <div className="flex-1 p-2 min-h-0 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default App;
