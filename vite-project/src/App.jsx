import './App.css'
import { Outlet } from 'react-router-dom';
// import Navbar from './components/navbar';
// import Footer from './components/Footer';
// import ScrollButton from './components/ScrollButton';

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      {/* <ScrollButton /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App;
