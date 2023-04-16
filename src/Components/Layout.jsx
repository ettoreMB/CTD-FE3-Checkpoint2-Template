
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { ThemeContext } from "../context/theme-context";
import { useContext } from "react";


function Layout({children}) {
  const {darkmode} = useContext(ThemeContext)
  return (
    <>
    <div className={`app ${darkmode ? "dark":"light" }`}>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  </>
  )
}

export default Layout