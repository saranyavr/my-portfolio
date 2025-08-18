import { BrowserRouter} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainLayout from "./components/Mainlayout";
import React, { useEffect } from "react";



const App = () => {
   useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', e.clientX + 'px');
      document.documentElement.style.setProperty('--y', e.clientY + 'px');
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <MainLayout />
      </div>
    </BrowserRouter>
   
  )
};

export default App;