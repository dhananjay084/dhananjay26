import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { testimonials } from '../data';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimonials">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">What Clients Say</p>
        
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              as={motion.article}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FaQuoteLeft className="quote-icon" />
              <p>{testimonial.content}</p>
              
              <TestimonialAuthor>
                <AuthorImage src={testimonial.avatar} alt={testimonial.name} />
                <AuthorInfo>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </div>
    </TestimonialsSection>
  );
};

const TestimonialsSection = styled.section`
  background-color: white;
  padding:20px;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.article`
  background: var(--light-color);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }
  
  .quote-icon {
    font-size: 2rem;
    color: var(--primary-color);
    opacity: 0.3;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  
  p {
    margin-bottom: 2rem;
    font-style: italic;
    color: #555;
    position: relative;
    z-index: 1;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--primary-color);
`;

const AuthorInfo = styled.div`
  h4 {
    margin-bottom: 0.3rem;
  }
  
  span {
    font-size: 0.9rem;
    color: #666;
  }
`;

export default Testimonials;