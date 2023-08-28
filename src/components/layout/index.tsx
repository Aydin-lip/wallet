import Footer from "../footer"
import Navbar from "../navbar"

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout