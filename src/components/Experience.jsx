import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { experience } from '../data';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My Professional Journey</p>
        
        <Timeline>
          {experience.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineIcon>
                <FaBriefcase />
              </TimelineIcon>
              
              <TimelineContent>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <span>{exp.duration}</span>
                
                <Responsibilities>
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </Responsibilities>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </ExperienceSection>
  );
};

const ExperienceSection = styled.section`
  background-color: var(--light-color);
  padding:20px;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--primary-color);
    
    @media (max-width: 768px) {
      left: 2rem;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 5rem;
  
  @media (max-width: 768px) {
    padding-left: 4rem;
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: -1.5rem;
  top: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  box-shadow: 0 0 0 4px var(--light-color), var(--shadow);
  
  @media (max-width: 768px) {
    left: 0.5rem;
  }
`;

const TimelineContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  
  h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }
  
  h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #555;
  }
  
  span {
    display: inline-block;
    background: var(--light-color);
    padding: 0.3rem 0.8rem;
    border-radius: 50px;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;

const Responsibilities = styled.ul`
  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    
    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--primary-color);
    }
  }
`;

export default Experience;