import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import './Components/theme.css';
import { useContext } from 'react'
import { ContextGlobal } from "./Components/utils/ContextGlobalProvider"

function App() {

  const { contextValue } = useContext(ContextGlobal);
  const { theme } = contextValue;

  return (
    <>
      <div className={`app ${theme}`}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
