import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import AppColors from '../constants/AppColors';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fadeInUp">
            Let's <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto animate-fadeInUp delay-200">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information Card */}
          <Card padding="large" className="group relative overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating elements */}
            <div className="absolute top-6 right-6 w-3 h-3 bg-primary rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute top-12 right-12 w-2 h-2 bg-accent rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="mobile-heading text-3xl font-bold text-text-primary mb-8 group-hover:text-primary transition-colors duration-300 mobile-text-visible">
                📞 Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="animate-fadeInUp delay-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mb-4">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Phone</h3>
                  <p className="text-text-secondary text-lg">+92 314 4551419</p>
                </div>
                
                <div className="animate-fadeInUp delay-400">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-4">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Email</h3>
                  <p className="text-text-secondary text-lg">malikatifali94@gmail.com</p>
                </div>
                
                <div className="animate-fadeInUp delay-500">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Location</h3>
                  <p className="text-text-secondary text-lg">Islamabad, Pakistan</p>
                </div>

                <div className="animate-fadeInUp delay-600">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-4">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-4">Social Links</h3>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="https://github.com/atif1994" 
                      className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all duration-300 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🐙 GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/malikatifali94/" 
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all duration-300 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💼 LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border animate-fadeInUp delay-700">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl">
                  <h3 className="font-bold text-text-primary mb-3 text-lg">💼 Availability</h3>
                  <p className="text-text-secondary mb-2">
                    Currently working as Flutter Developer at Tecrux Global
                  </p>
                  <p className="text-text-secondary">
                    Open to new opportunities and freelance projects
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Contact Form Card */}
          <Card padding="large" className="group relative overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating elements */}
            <div className="absolute top-6 right-6 w-3 h-3 bg-accent rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute top-12 right-12 w-2 h-2 bg-primary rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <h2 className="mobile-heading text-3xl font-bold text-text-primary mb-8 text-center group-hover:text-primary transition-colors duration-300 mobile-text-visible">
                💬 Send Message
              </h2>
              
              <form className="mobile-form space-y-6">
                <div className="animate-fadeInUp delay-300">
                  <label className="block text-sm font-semibold text-text-primary mb-3 mobile-text-visible">
                    👤 Your Name
                  </label>
                  <input
                    type="text"
                    className="mobile-form-input w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="animate-fadeInUp delay-400">
                  <label className="block text-sm font-semibold text-text-primary mb-3 mobile-text-visible">
                    📧 Email Address
                  </label>
                  <input
                    type="email"
                    className="mobile-form-input w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="animate-fadeInUp delay-500">
                  <label className="block text-sm font-semibold text-text-primary mb-3 mobile-text-visible">
                    📝 Subject
                  </label>
                  <input
                    type="text"
                    className="mobile-form-input w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="animate-fadeInUp delay-600">
                  <label className="block text-sm font-semibold text-text-primary mb-3 mobile-text-visible">
                    💭 Message
                  </label>
                  <textarea
                    rows="5"
                    className="mobile-form-input w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>
                
                <div className="animate-fadeInUp delay-700">
                  <Button type="submit" className="mobile-button w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg py-4 shadow-xl hover:shadow-2xl">
                    🚀 Send Message
                  </Button>
                </div>
              </form>
            </div>
          </Card>
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