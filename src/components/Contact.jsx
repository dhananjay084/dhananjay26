import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {
          const response = await fetch('https://formsubmit.co/ajax/dhananjaybansal28@gmail.com', {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message
            })
          });
    
          const result = await response.json();
          
          if (result.success) {
            toast.success('Message sent successfully!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
    
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
            });
          } else {
            throw new Error('Failed to send message');
          }
        } catch (error) {
          toast.error('Failed to send message. Please try again.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } finally {
          setIsSubmitting(false);
        }
      };
  
  return (
    <ContactSection id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Get In Touch</p>
        
        <ContactContent>
          <ContactInfo
            as={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <div>
                <h3>Location</h3>
                <p>Gurugram</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <div>
                <h3>Email</h3>
                <p>dhananjaybansal28@gmail.com</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <div>
                <h3>Phone</h3>
                <p>+91 9781345418</p>
              </div>
            </ContactItem>
          </ContactInfo>
          
          <ContactForm 
        onSubmit={handleSubmit}
        as={motion.form}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
            <FormGroup>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </FormGroup>
            
            <SubmitButton 
              type="submit"
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </div>
      <ToastContainer />
    </ContactSection>
  );
};
const ContactSection = styled.section`
  background-color: var(--light-color);
  padding:20px
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  
  h3 {
    margin-bottom: 0.5rem;
    color: var(--primary-color);
  }
  
  p {
    color: #555;
  }
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary-color);
  padding: 1rem;
  background: white;
  border-radius: 50%;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  input, textarea {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    background: white;
    box-shadow: var(--shadow);
    font-family: inherit;
    transition: var(--transition);
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px var(--primary-color);
    }
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow);
  
  &:hover {
    background: var(--secondary-color);
    box-shadow: var(--shadow-hover);
  }
`;

export default Contact; 