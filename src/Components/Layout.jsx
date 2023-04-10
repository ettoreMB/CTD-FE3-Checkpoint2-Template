
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


function Layout({children}) {
  return (
    <>
    {/* //Na linha seguinte deverá ser feito um teste se a aplicação
      // está em dark mode e deverá utilizar a classe dark ou light */}
    <div className={`app light}`}>
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