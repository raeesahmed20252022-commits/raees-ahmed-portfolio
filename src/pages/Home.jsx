import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import AppColors from '../constants/AppColors';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Atif Ali</span>
            </h1>
          </div>
          <div className="animate-fadeInUp delay-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-200 mb-8">
              Full Stack Developer & AI Specialist
            </h2>
          </div>
          <div className="animate-fadeInUp delay-400">
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              A dynamic and detail-oriented Full Stack Developer with 5+ years of experience in designing, developing, 
              and deploying high-performance mobile applications and AI-powered platforms. Proficient in Flutter, Dart, 
              React, Firebase, and MongoDB, with expertise in creating scalable solutions using REST APIs and AI integrations.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link to="/about">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fadeInUp delay-500">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Mobile Development
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Expert in Flutter and Dart, creating high-performance mobile applications with optimized user experiences.
              </p>
            </div>
          </Link>
          
          <Link to="/about">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fadeInUp delay-600">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Backend Development
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Proficient in Node.js, Express.js, Firebase, and MongoDB for scalable backend solutions.
              </p>
            </div>
          </Link>
          
          <Link to="/projects">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fadeInUp delay-700">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                AI Integration
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Specialized in AI-powered applications using OpenAI API, ElevenLabs, and advanced AI integrations.
              </p>
            </div>
          </Link>
        </div>
        
        <div className="text-center animate-fadeInUp delay-800">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/projects">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                🚀 View My Work
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105">
                💬 Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
