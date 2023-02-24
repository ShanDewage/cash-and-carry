import { Link } from "react-router-dom";
import '../components/Navbar.css';
//import { Navbar, Button,Text, useTheme } from "@nextui-org/react";
import { Navbar, useTheme } from "@nextui-org/react";
import React, { useState } from 'react';

export default function App() {
  const { isDark } = useTheme();

  const [click, setClick] = useState(false);
  //const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 /* const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  */

  return (
  <>  
        <Navbar className="navbar-container" shouldHideOnScroll  isBordered={isDark} variant="sticky"  >
        <Navbar.Brand >
          <Link to='/' className="nav-logo" onClick={closeMobileMenu}>
          <i class="fa-sharp fa-solid fa-feather-pointed"></i>
            Cash & Carry</Link>
        </Navbar.Brand>

        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <Navbar.Content hideIn="xs"  className={click ? 'nav-menu active' : 'nav-menu'}>
          <Link to='/' className='nav-links'  onClick={closeMobileMenu}>Home</Link>
          <Link to='#' className='nav-links'  onClick={closeMobileMenu}>Promotions</Link>
          <Link to='#' className='nav-links'  onClick={closeMobileMenu}>Delivery Saver</Link>
          <Link to='#' className='nav-links'  onClick={closeMobileMenu}>Recipes</Link>
          <Link to='#' className='nav-links'  onClick={closeMobileMenu}>Stores</Link>
          <Link to='#' className='nav-links'  onClick={closeMobileMenu}>News</Link>
          <Link to='/about' className='nav-links'  onClick={closeMobileMenu}>About</Link>
          
        </Navbar.Content>
        <Navbar.Content>
          <Link to='#' className='btn-signup nav-links-signup'  onClick={closeMobileMenu}>Sign up</Link>         
        </Navbar.Content>
      </Navbar>
  </>
  )
}