import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaAward, FaFolder, FaUsers } from 'react-icons/fa';
import Image from '../assets/about.jpg';
import ResumePDF from '../assets/Resume.pdf'; // Import the PDF file

const About = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <AboutContent>
          <AboutImage 
            src={Image}
            alt="About Me"
            as={motion.img}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          
          <AboutInfo
            as={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Cards>
              <Card
                as={motion.div}
                whileHover={{ scale: 1.05 }}
              >
                <FaAward className="icon" />
                <h3>Experience</h3>
                <p>Around 5 Years Working</p>
              </Card>
              
              <Card
                as={motion.div}
                whileHover={{ scale: 1.05 }}
              >
                <FaFolder className="icon" />
                <h3>Projects</h3>
                <p>10+ Completed</p>
              </Card>
              
              <Card
                as={motion.div}
                whileHover={{ scale: 1.05 }}
              >
                <FaUsers className="icon" />
                <h3>Clients</h3>
                <p>20+ Satisfied</p>
              </Card>
            </Cards>
            
            <AboutText>
              <p>
                Hello! I'm Dhananjay, a highly motivated and detail-oriented Software Engineer specializing in developing modern web applications with a focus on user-centric design and performance optimization.
              </p>
              <p>
                I have worked on multiple projects, ranging from building small business websites to creating large-scale enterprise-level applications. My strength lies in my ability to adapt quickly to new challenges and continuously learn the latest tools and technologies.
              </p>
              <p>
                Beyond coding, I am an excellent communicator and a firm believer in teamwork. I thrive in collaborative environments and enjoy working closely with designers, product managers, and other developers to bring ideas to life.
              </p>
            </AboutText>
            
            <Skills>
              <h3>My Skills</h3>
              <SkillList>
                <Skill>React.js</Skill>
                <Skill>JavaScript</Skill>
                <Skill>HTML/CSS</Skill>
                <Skill>TypeScript</Skill>
                <Skill>Node.js</Skill>
                <Skill>UI/UX Design</Skill>
                <Skill>Responsive Design</Skill>
                <Skill>Git</Skill>
                <Skill>Next.js</Skill>
                <Skill>Styled Components</Skill>
                <Skill>Material UI</Skill>
                <Skill>Express.js</Skill>
                <Skill>JWT</Skill>
                <Skill>CI/CD</Skill>
                <Skill>MongoDB</Skill>
                <Skill>MySQL</Skill>
                <Skill>Jest</Skill>
                <Skill>Postman</Skill>
                <Skill>Swagger</Skill>
              </SkillList>
            </Skills>
            
            <DownloadBtn 
              href={ResumePDF} 
              download="Dhananjay_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </DownloadBtn>
          </AboutInfo>
        </AboutContent>
      </div>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  background-color: white;
  padding: 20px;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(45deg, transparent, var(--primary-color), transparent);
  display: grid;
  place-items: center;
  
  @media (max-width: 1024px) {
    width: 50%;
    margin: 0 auto;
  }
  
  @media (max-width: 600px) {
    width: 65%;
  }
`;

const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

const Card = styled.article`
  background: var(--light-color);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
  
  &:hover {
    background: transparent;
    border-color: var(--primary-color);
  }
  
  .icon {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    color: #666;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 1rem;
    color: #555;
  }
`;

const Skills = styled.div`
  h3 {
    margin-bottom: 1rem;
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const Skill = styled.span`
  background: var(--light-color);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  color: var(--dark-color);
  transition: var(--transition);
  
  &:hover {
    background: var(--primary-color);
    color: white;
  }
`;

const DownloadBtn = styled.a`
  width: max-content;
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: var(--transition);
  margin-top: 1rem;
  text-decoration: none;
  
  &:hover {
    background: var(--secondary-color);
    box-shadow: var(--shadow-hover);
  }
`;

export default About;