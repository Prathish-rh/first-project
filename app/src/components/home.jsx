import React from "react";
import "./home.css"; 
import Header from "./Header";
import Services from "./services";
import AboutSection from "./aboutsection";
import { Link } from 'react-router-dom';

function Home() {
  return (
    
    <div className="home">
      <Header /> 
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to CostCraft</h1>
          <p className="hero-subtitle">
            Predict construction costs with precision and build smarter projects.
          </p>
          <Link className="hero-button" to="/">Get Started</Link>
        </div>
      </section>

      <AboutSection />
      <Services />  
    </div>
  );
}

export default Home;
