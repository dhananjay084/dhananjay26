import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <PortfolioSection id="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">My Recent Work</p>
        
        {/* <FilterButtons>
          {filters.map(filter => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              as={motion.button}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </FilterButton>
          ))}
        </FilterButtons> */}
        
        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              as={motion.article}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectOverlay>
                <ContentWrapper>
                  <h3>{project.title}</h3>
                  <Description>{project.description}</Description>
                  <Tags>
                    {project.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Tags>
                  <ProjectLinks>
                    {project.link  &&
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink />
                    </a>
}
                  </ProjectLinks>
                </ContentWrapper>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </PortfolioSection>
  );
};

const PortfolioSection = styled.section`
  background-color: white;
  padding: 20px;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${({ active }) => active ? 'var(--primary-color)' : 'transparent'};
  color: ${({ active }) => active ? 'white' : 'var(--dark-color)'};
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  border: ${({ active }) => active ? 'none' : '1px solid var(--primary-color)'};
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background: ${({ active }) => active ? 'var(--secondary-color)' : 'rgba(78, 84, 200, 0.1)'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  background: var(--light-color);
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow);
  transition: var(--transition);
  height: 350px; /* Fixed height for consistent cards */
  
  &:hover {
    box-shadow: var(--shadow-hover);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 1.5rem;
  color: white;
  opacity: 0;
  transition: var(--transition);
  overflow-y: auto; /* Enable vertical scrolling */
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 3px;
  }
`;

const ContentWrapper = styled.div`
  transform: translateY(20px);
  transition: var(--transition);
  min-height: 100%; /* Ensure content fills the overlay */
  
  ${ProjectCard}:hover & {
    transform: translateY(0);
  }

  h3 {
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    line-height: 1.3;
  }
`;

const Description = styled.p`
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
  white-space: pre-line; /* Preserve line breaks */
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto; /* Push links to bottom */
  padding-top: 1rem; /* Add some space above links */
  
  a {
    color: white;
    font-size: 1.2rem;
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

export default Portfolio;