import './App.css'
import { Outlet } from 'react-router-dom';
import SideBar from './component/SideBar';
import Header from './component/Header';
// import Navbar from './components/navbar';
// import Footer from './components/Footer';
// import ScrollButton from './components/ScrollButton';

function App() {

    return (
        <>
            <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
                <SideBar />
                <div className="flex flex-col flex-1">
                    <Header />
                    <div className="flex-1 p-4 min-h-0 overflow-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
