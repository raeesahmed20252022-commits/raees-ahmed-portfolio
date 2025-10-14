import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import AppColors from '../constants/AppColors';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="text-center mb-12">
          <div className="animate-fadeInUp">
            <h1 className="text-6xl font-bold text-white mb-4 animate-float">
              Hi, I'm <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Atif Ali</span>
            </h1>
          </div>
          <div className="animate-fadeInUp delay-200">
            <h2 className="text-3xl font-semibold text-white mb-6 animate-pulse">
              Full Stack Developer
            </h2>
          </div>
          <div className="animate-fadeInUp delay-400">
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
              A dynamic and detail-oriented Full Stack Developer with 5+ years of experience in designing, developing, 
              and deploying high-performance mobile applications and AI-powered platforms. Proficient in Flutter, Dart, 
              React, Firebase, and MongoDB, with expertise in creating scalable solutions using REST APIs and AI integrations.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link to="/about">
            <Card className="animate-fadeInUp delay-500 hover:rotate-1 cursor-pointer">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                📱 Mobile Development
              </h3>
              <p className="text-text-secondary">
                Expert in Flutter and Dart, creating high-performance mobile applications with optimized user experiences.
              </p>
            </Card>
          </Link>
          
          <Link to="/about">
            <Card className="animate-fadeInUp delay-600 hover:-rotate-1 cursor-pointer">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                ⚙️ Backend Development
              </h3>
              <p className="text-text-secondary">
                Proficient in Node.js, Express.js, Firebase, and MongoDB for scalable backend solutions.
              </p>
            </Card>
          </Link>
          
          <Link to="/projects">
            <Card className="animate-fadeInUp delay-700 hover:rotate-1 cursor-pointer">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                🔌 API Integration
              </h3>
              <p className="text-text-secondary">
                Specialized in REST APIs, third-party integrations, and cloud services for enhanced functionality.
              </p>
            </Card>
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
