
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { ThemeContext } from "../context/theme-context";
import { useContext } from "react";


function Layout({children}) {
  const {darkmode} = useContext(ThemeContext)
  return (
    <>
    {/* //Na linha seguinte deverá ser feito um teste se a aplicação
      // está em dark mode e deverá utilizar a classe dark ou light */}
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