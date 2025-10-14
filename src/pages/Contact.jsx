import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import AppColors from '../constants/AppColors';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Let's <span className="text-gray-900">Connect</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information Card */}
          <div className="group relative overflow-hidden bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating elements */}
            <div className="absolute top-6 right-6 w-4 h-4 bg-green-400 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute top-12 right-12 w-3 h-3 bg-emerald-400 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-green-300 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-8 group-hover:scale-105 transition-transform duration-300">
                📞 Contact Information
              </h2>
              
              <div className="space-y-10">
                <div className="animate-fadeInUp delay-300 group/item">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-2xl mb-6 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-3xl">📞</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
                  <p className="text-lg text-gray-600 font-medium">+92 314 4551419</p>
                </div>
                
                <div className="animate-fadeInUp delay-400 group/item">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-2xl mb-6 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-3xl">✉️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
                  <p className="text-lg text-gray-600 font-medium">malikatifali94@gmail.com</p>
                </div>
                
                <div className="animate-fadeInUp delay-500 group/item">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-2xl mb-6 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Location</h3>
                  <p className="text-lg text-gray-600 font-medium">Islamabad, Pakistan</p>
                </div>

                <div className="animate-fadeInUp delay-600 group/item">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-2xl mb-6 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🔗</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Social Links</h3>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href="https://github.com/atif1994" 
                      className="px-8 py-4 bg-green-500 text-white rounded-2xl hover:bg-green-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🐙 GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/malikatifali94/" 
                      className="px-8 py-4 bg-green-500 text-white rounded-2xl hover:bg-green-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💼 LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 animate-fadeInUp delay-700">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">💼 Availability</h3>
                  <p className="text-gray-600 mb-2 font-medium">
                    Currently working as Flutter Developer at Tecrux Global
                  </p>
                  <p className="text-gray-600 font-medium">
                    Open to new opportunities and freelance projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Card */}
          <div className="group relative overflow-hidden bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating elements */}
            <div className="absolute top-6 right-6 w-4 h-4 bg-emerald-400 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute top-12 right-12 w-3 h-3 bg-green-400 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-emerald-300 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-8 text-center group-hover:scale-105 transition-transform duration-300">
                💬 Send Message
              </h2>
              
              <form className="space-y-8">
                <div className="animate-fadeInUp delay-300">
                  <label className="block text-lg font-bold text-gray-900 mb-4">
                    👤 Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="animate-fadeInUp delay-400">
                  <label className="block text-lg font-bold text-gray-900 mb-4">
                    📧 Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="animate-fadeInUp delay-500">
                  <label className="block text-lg font-bold text-gray-900 mb-4">
                    📝 Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="animate-fadeInUp delay-600">
                  <label className="block text-lg font-bold text-gray-900 mb-4">
                    💭 Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>
                
                <div className="animate-fadeInUp delay-700">
                  <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    🚀 Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Card padding="large" className="text-center">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Why Work With Me?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl mb-2">🚀</div>
                <h4 className="font-medium text-text-primary mb-2">Performance Optimized</h4>
                <p className="text-sm text-text-secondary">
                  Reduced API response time by 40% through database optimization
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">🔧</div>
                <h4 className="font-medium text-text-primary mb-2">Full Stack Expertise</h4>
                <p className="text-sm text-text-secondary">
                  End-to-end development from mobile apps to backend services
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">📱</div>
                <h4 className="font-medium text-text-primary mb-2">Mobile Specialist</h4>
                <p className="text-sm text-text-secondary">
                  5+ years experience in Flutter and cross-platform development
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;