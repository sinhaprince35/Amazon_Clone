import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
      <header>
          <nav>
              <div className='left'>
                  <div className="navLogo">
                      <img src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png' alt='amazonLogo'/>
                  </div>
                  <div className="nav_searchbar">
                      <input type='text' name='' id='' placeholder='Amazon search'/>
                      <div className="search_icon">
                          <SearchIcon />
                      </div>
                  </div>
              </div>
              <div className='right'>
                  
              </div>
          </nav>
   </header>
  )
}

export default Navbar
