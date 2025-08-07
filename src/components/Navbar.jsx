import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { navLinks } from '../data';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavContainer scrolled={scrolled}>
      <div className="container">
        <Logo href="#home">Portfolio</Logo>
        
        <Hamburger onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
        
        <NavList isOpen={isOpen}>
          {navLinks.map((link) => (
            <motion.li 
              key={link.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink 
                href={link.path} 
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            </motion.li>
          ))}
        </NavList>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: ${({ scrolled }) => scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  box-shadow: ${({ scrolled }) => scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: var(--transition);
  padding: 1.5rem 0;
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  font-family: var(--font-secondary);
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--dark-color);
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => isOpen ? '0' : '-100%'};
    width: 70%;
    height: 100vh;
    background: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
`;

const NavLink = styled.a`
  font-weight: 600;
  position: relative;
  transition: var(--transition);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem 0;
  }
`;

export default Navbar;