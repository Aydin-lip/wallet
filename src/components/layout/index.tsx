import Footer from "../footer"
import LiftComponent from "../lift"
import Navbar from "../navbar"
import ThemeComponent from "../theme"

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navbar />
      <ThemeComponent />
      <LiftComponent />
      {children}
      <Footer />
    </>
  )
}

export default Layout