import Navbar from "../navbar"

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout