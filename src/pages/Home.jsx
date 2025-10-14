import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import AppColors from '../constants/AppColors';

const Home = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-content text-center">
          <div className="animate-fadeInUp">
            <h1 className="hero-title text-white animate-float">
              Hi, I'm <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Atif Ali</span>
            </h1>
          </div>
          <div className="animate-fadeInUp delay-200">
            <h2 className="text-3xl font-semibold text-white mb-6 animate-pulse">
              Full Stack Developer
            </h2>
          </div>
          <div className="animate-fadeInUp delay-400">
            <p className="hero-subtitle text-white">
              A dynamic and detail-oriented Full Stack Developer with 5+ years of experience in designing, developing, 
              and deploying high-performance mobile applications and AI-powered platforms. Proficient in Flutter, Dart, 
              React, Firebase, and MongoDB, with expertise in creating scalable solutions using REST APIs and AI integrations.
            </p>
          </div>
        </div>
        
        <div className="feature-grid">
          <Link to="/about">
            <div className="feature-card animate-fadeInUp delay-500">
              <h3 className="text-xl font-semibold text-white mb-2">
                📱 Mobile Development
              </h3>
              <p className="text-white opacity-90">
                Expert in Flutter and Dart, creating high-performance mobile applications with optimized user experiences.
              </p>
            </div>
          </Link>
          
          <Link to="/about">
            <div className="feature-card animate-fadeInUp delay-600">
              <h3 className="text-xl font-semibold text-white mb-2">
                ⚙️ Backend Development
              </h3>
              <p className="text-white opacity-90">
                Proficient in Node.js, Express.js, Firebase, and MongoDB for scalable backend solutions.
              </p>
            </div>
          </Link>
          
          <Link to="/projects">
            <div className="feature-card animate-fadeInUp delay-700">
              <h3 className="text-xl font-semibold text-white mb-2">
                🔌 API Integration
              </h3>
              <p className="text-white opacity-90">
                Specialized in REST APIs, third-party integrations, and cloud services for enhanced functionality.
              </p>
            </div>
          </Link>
        </div>
        
        <div className="text-center animate-fadeInUp delay-800">
          <Link to="/projects">
            <Button size="large" className="mr-4 animate-scaleIn">
              🚀 View My Work
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="large" className="animate-scaleIn delay-100">
              💬 Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
