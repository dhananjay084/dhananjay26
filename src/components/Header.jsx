import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsMouse } from 'react-icons/bs';
import Image from '../assets/banner-image.svg';

const Header = () => {
  return (
    <HeaderSection id="home">
      <div className="container">
        <Content>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Subtitle>Hello, I'm</Subtitle>
            <Title>Dhananjay Bansal</Title>
            <JobTitle>Senior Software Engineer</JobTitle>
            <Description>
              I create beautiful, responsive websites and applications with modern technologies.
              Passionate about user experience and clean code.
            </Description>
            <ButtonGroup>
              <PrimaryButton 
                as={motion.a}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
              >
                Contact Me
              </PrimaryButton>
              <SecondaryButton 
                as={motion.a}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portfolio"
              >
                View Work
              </SecondaryButton>
            </ButtonGroup>
          </motion.div>
          
          <HeroImage 
            src={Image}
            alt="Profile"
            as={motion.img}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </Content>
        
        {/* <SocialLinks>
          <SocialLink href="#"><FaGithub /></SocialLink>
          <SocialLink href="#"><FaLinkedin /></SocialLink>
          <SocialLink href="#"><FaTwitter /></SocialLink>
          <SocialLink href="#"><HiOutlineMail /></SocialLink>
        </SocialLinks> */}
        
        <ScrollDown>
          <BsMouse />
          <span>Scroll Down</span>
        </ScrollDown>
      </div>
    </HeaderSection>
  );
};

const HeaderSection = styled.header`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 80%;
    height: 150%;
    background: linear-gradient(45deg, rgba(78, 84, 200, 0.1), rgba(143, 148, 251, 0.1));
    border-radius: 50%;
    z-index: -1;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const Subtitle = styled.span`
  display: block;
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const JobTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: #555;
`;

const Description = styled.p`
  max-width: 600px;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.7;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.a`
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: var(--transition);
  box-shadow: var(--shadow);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }
`;

const SecondaryButton = styled.a`
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background: var(--primary-color);
    color: white;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 20px;

  animation: float 3s ease-in-out infinite;
  
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0); }
  }
  
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const SocialLinks = styled.div`
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
  
  @media (max-width: 768px) {
    position: static;
    flex-direction: row;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: var(--dark-color);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const ScrollDown = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--dark-color);
  font-size: 0.9rem;
  
  svg {
    font-size: 1.5rem;
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;