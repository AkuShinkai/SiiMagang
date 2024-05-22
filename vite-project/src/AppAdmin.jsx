import './App.css'
import {Outlet } from 'react-router-dom';
import SidebarAdmin from './component/SidebarAdmin';
import HeaderAdmin from './component/HeaderAdmin';

function AppAdmin() {
    

    return (
        <>
            <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
                <SidebarAdmin/>
                <div className="flex flex-col flex-1">
                    <HeaderAdmin/>
                    <div className="flex-1 p-2 min-h-0 overflow-auto">
                        <Outlet />
                    </div>
                </div>
            </div>

        </>
    )
}

export default AppAdmin;
