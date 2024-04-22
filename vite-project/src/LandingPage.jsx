import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";

function LandingPage() {
    const { token } = useStateContext()
    if (token) {
        return <Navigate to="/" />
    }

    return (
        <div className="">
            <div className="">
                <Outlet />
            </div>
        </div>
    )
}

export default LandingPage;
