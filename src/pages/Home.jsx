import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import AppColors from '../constants/AppColors';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fadeInUp">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
                Hello I'm <span className="text-green-400">Atif Ali</span>
              </h1>
            </div>
            <div className="animate-fadeInUp delay-200">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                A <span className="text-green-400">Full Stack Developer</span>
              </h2>
            </div>
            <div className="animate-fadeInUp delay-400">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Solution-oriented mindset, problem-solving enthusiasm, positive attitude towards challenges, 
                overcoming obstacles with enthusiasm. 5+ years of experience in mobile and web development.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-600">
              <Link to="/contact">
                <button 
                  className="!bg-green-500 hover:!bg-green-600 !text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{backgroundColor: '#10b981', color: 'white'}}
                >
                  Hire Me
                </button>
              </Link>
              <Link to="/about">
                <button 
                  className="!bg-green-500 hover:!bg-green-600 !text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{backgroundColor: '#10b981', color: 'white'}}
                >
                  Download CV
                </button>
              </Link>
            </div>
          </div>
          
          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-8xl mb-4">💻</div>
                <h3 className="text-2xl font-bold mb-2">Full Stack Developer</h3>
                <p className="text-green-100">Mobile & Web Solutions</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400 rounded-full opacity-80"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-300 rounded-full opacity-70"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link to="/about">
            <div className="bg-green-500/10 backdrop-blur-md border border-green-400/20 rounded-2xl p-8 hover:bg-green-500/20 transition-all duration-300 hover:scale-105 animate-fadeInUp delay-500">
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
            <div className="bg-green-500/10 backdrop-blur-md border border-green-400/20 rounded-2xl p-8 hover:bg-green-500/20 transition-all duration-300 hover:scale-105 animate-fadeInUp delay-600">
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
            <div className="bg-green-500/10 backdrop-blur-md border border-green-400/20 rounded-2xl p-8 hover:bg-green-500/20 transition-all duration-300 hover:scale-105 animate-fadeInUp delay-700">
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
              <button 
                className="!bg-green-500 hover:!bg-green-600 !text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{backgroundColor: '#10b981', color: 'white'}}
              >
                🚀 View My Work
              </button>
            </Link>
            <Link to="/contact">
              <button 
                className="!bg-green-500 hover:!bg-green-600 !text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{backgroundColor: '#10b981', color: 'white'}}
              >
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
