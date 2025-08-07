import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #4e54c8;
    --secondary-color: #8f94fb;
    --dark-color: #1e1e1e;
    --light-color: #f5f5f5;
    --success-color: #4caf50;
    --danger-color: #f44336;
    --warning-color: #ff9800;
    --info-color: #2196f3;
    
    --font-main: 'Poppins', sans-serif;
    --font-secondary: 'Montserrat', sans-serif;
    
    --transition: all 0.3s ease;
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--font-main);
    background-color: #f9f9f9;
    color: var(--dark-color);
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  .section {
    padding: 6rem 0;
  }
  
  .section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
      border-radius: 2px;
    }
  }
  
  .btn {
    display: inline-block;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: var(--transition);
    cursor: pointer;
    border: none;
    outline: none;
    
    &-primary {
      background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
      color: white;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-hover);
      }
    }
    
    &-outline {
      background: transparent;
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
      
      &:hover {
        background: var(--primary-color);
        color: white;
      }
    }
  }
  
  @media (max-width: 768px) {
    .section {
      padding: 4rem 0;
    }
    
    .section-title {
      font-size: 2rem;
    }
  }
`;