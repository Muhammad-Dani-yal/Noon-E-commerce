import Navbar from '../NavBar/navBar.jsx'
import MenuBar from '../MenuBar/menuBar.jsx'
import './siteHeader.css'

const SiteHeader = () => {
  return (
    <div className='site-header'>
      <Navbar />
      <MenuBar />
    </div>
  )
}

export default SiteHeader
