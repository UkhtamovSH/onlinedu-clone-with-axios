import Footer from './sections/Footer.jsx'
import Navbar from './sections/Navbar.jsx'

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
