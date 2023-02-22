import { Link } from "react-router-dom";
import '../components/Navbar.css';
//import { Navbar, Button,Text, useTheme } from "@nextui-org/react";
import { Navbar, useTheme } from "@nextui-org/react";

export default function App() {
  const { isDark } = useTheme();
 

  return (
  <>  
        <Navbar className="navbar-container" shouldHideOnScroll  isBordered={isDark} variant="sticky"  >
        <Navbar.Brand >
         {/* <Text b color="inherit" hideIn="xs">Cash & Carry </Text>*/}
          <Link to='/' className="nav-logo">Cash & Carry</Link>
        </Navbar.Brand>

        <Navbar.Content hideIn="xs"  className="nav-content">
        { /* <Navbar.Link isActive href="/">Home</Navbar.Link>
          <Navbar.Link  href="#">Promotions</Navbar.Link>
          <Navbar.Link  href="#">Recipes</Navbar.Link>
          <Navbar.Link  href="#">Delivery Saver</Navbar.Link>
          <Navbar.Link  href="#">Stores</Navbar.Link>
          <Navbar.Link  href="#">News</Navbar.Link>
          <Navbar.Link  href="about">About</Navbar.Link>*/}

          <Link to='/' className='nav-links'>Home</Link>
          <Link to='#' className='nav-links'>Promotions</Link>
          <Link to='#' className='nav-links'>Delivery Saver</Link>
          <Link to='#' className='nav-links'>Recipes</Link>
          <Link to='#' className='nav-links'>Stores</Link>
          <Link to='#' className='nav-links'>News</Link>
          <Link to='about' className='nav-links'>About</Link>
        </Navbar.Content>
        <Navbar.Content>
          {/*
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
          */}

          <Link to='#' className='btn-signup'>Sign up</Link>
          
        </Navbar.Content>
      </Navbar>
    

  </>
  )
}