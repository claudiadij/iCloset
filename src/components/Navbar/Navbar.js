import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { useAuth } from '../../contexts/AuthContexts'; 
import { useHistory } from "react-router";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  LogoutButton
} from './Navbar.elements';

import LogoImg from "../../images/logo.jpg";

function Navbar(props) {
  const {currentUser, logout} = useAuth()
  const history = useHistory()

  async function handleLogout() {

    try {
      await logout()
      history.push('/customer-access/signin')
    } catch {
      
    }
  }

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
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

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon logoSize="3em">
                <img src={LogoImg  } alt='iCloset logo' />
              </NavIcon>
              iCloset
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/add-item' onClick={closeMobileMenu}>
                  Add Item
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/my-wardrobe' onClick={closeMobileMenu}>
                  My Wardrobe
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/generator' onClick={closeMobileMenu}>
                  Generator
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={handleLogout} to='/customer-access/signin' >
                  Logout
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;