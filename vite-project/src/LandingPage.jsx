import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import Navbar from '/./src/component/Navbar.jsx';
import About from "./pages/About";
import Requirements from "./pages/requirements";


function LandingPage() {
    const { token } = useStateContext()
    if (token) {
        return <Navigate to="/" />
    }

    return (
        <div className="overflow-x-hidden">
            <Navbar/>
            <Outlet />
            <About/>
            <Requirements/>
        </div>
    )
}

export default LandingPage;
