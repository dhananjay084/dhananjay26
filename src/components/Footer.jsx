import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <FooterContent
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FooterLogo>Dhananjay Bansal</FooterLogo>
          
          <FooterLinks>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </FooterLinks>
          
          {/* <SocialIcons>
            <li>
              <a href="#"><FaGithub /></a>
            </li>
            <li>
              <a href="#"><FaLinkedin /></a>
            </li>
            <li>
              <a href="#"><FaTwitter /></a>
            </li>
            <li>
              <a href="#"><FaInstagram /></a>
            </li>
          </SocialIcons> */}
        </FooterContent>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Dhananjay Bansal. All Rights Reserved.
        </Copyright>
      </div>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-color: var(--dark-color);
  color: white;
  padding: 4rem 0 2rem;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FooterLogo = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FooterLinks = styled.ul`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  
  a {
    color: #ccc;
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: white;
    font-size: 1.5rem;
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-color);
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.p`
  color: #999;
  font-size: 0.9rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
`;

export default Footer;