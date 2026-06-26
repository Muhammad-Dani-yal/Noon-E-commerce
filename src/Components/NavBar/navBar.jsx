import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import noonLogo from '../../assets/noon.svg'
import './navBar.css'

const Navbar = () => {
  return (
    <header className='navbar'>
      {/* Logo and delivery location match the first row of a marketplace header. */}
      <a className='logo-link' href='#' aria-label='Noon home'>
        <img src={noonLogo} alt='noon' />
      </a>

      <button className='delivery' type='button'>
        <LocationOnOutlinedIcon fontSize='small' />
        <span>
          <small>Deliver to</small>
          <strong>Pakistan</strong>
        </span>
      </button>

      <form className='search-box'>
        <SearchIcon className='search-icon' fontSize='small' />
        <input type='search' placeholder='What are you looking for?' />
      </form>

      {/* These buttons are intentionally simple so beginners can style or link them later. */}
      <nav className='nav-links' aria-label='Account navigation'>
        <button type='button'><LanguageIcon fontSize='small' /> {'\u0627\u0644\u0639\u0631\u0628\u064A\u0629'}</button>
        <button type='button'><PersonOutlineOutlinedIcon fontSize='small' /> Sign In</button>
        <button type='button'><Inventory2OutlinedIcon fontSize='small' /> Orders</button>
        <button type='button'><FavoriteBorderIcon fontSize='small' /> Wishlist</button>
        <button className='cart-button' type='button'>
          <span className='cart-icon-wrap'>
            <ShoppingCartOutlinedIcon fontSize='small' />
            <span className='cart-badge'>2</span>
          </span>
          Cart
        </button>
      </nav>
    </header>
  )
}

export default Navbar
