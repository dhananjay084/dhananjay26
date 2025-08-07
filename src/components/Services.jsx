import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { services } from '../data';

const Services = () => {
  return (
    <ServicesSection id="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">What I Offer</p>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              as={motion.article}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </div>
    </ServicesSection>
  );
};

const ServicesSection = styled.section`
  background-color: var(--light-color);
  padding: 20px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.article`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: var(--transition);
  box-shadow: var(--shadow);
  height: 100%;
  
  &:hover {
    box-shadow: var(--shadow-hover);
  }
  
  h3 {
    margin: 1.5rem 0 1rem;
    font-size: 1.3rem;
  }
  
  p {
    color: #666;
    line-height: 1.7;
    font-size: 0.95rem;
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

export default Services;