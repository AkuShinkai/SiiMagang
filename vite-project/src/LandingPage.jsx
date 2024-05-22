import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import Navbar from '/./src/component/Navbar.jsx';


function LandingPage() {
    // const { token } = useStateContext()
    // if (token) {
    //     return <Navigate to="/" />
    // }

    return (
        <div className="">
            <Navbar/>
            <div className="">
                <Outlet />

            </div>
        </div>
    )
}

export default LandingPage;
