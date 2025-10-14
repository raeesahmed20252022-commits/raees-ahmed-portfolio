import React from 'react';
import Button from './Button';
import AppColors from '../constants/AppColors';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) {
    return null;
  }

  return (
    <div className="mobile-modal-fix fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto mobile-full-width">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 mobile-padding rounded-t-2xl">
          <div className="flex justify-between items-start mobile-flex-column">
            <div className="flex-1 mobile-full-width">
              <div className="flex items-center gap-3 mb-2 mobile-flex-column">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-400 to-red-400 text-white text-sm font-bold rounded-full">
                  {project.category}
                </span>
              </div>
              <h2 className="mobile-heading text-3xl font-bold text-gray-900 mb-2 mobile-text-visible">{project.title}</h2>
              <p className="mobile-text text-lg text-gray-600 mobile-text-wrap">{project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="mobile-touch-friendly ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mobile-padding">
          {/* Project Details */}
          <div className="responsive-grid responsive-grid-2 mobile-grid-single gap-8 mb-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🚀 Project Overview</h3>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    {project.detailedDescription || project.description}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🛠️ Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.features && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">✨ Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {project.challenges && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Challenges Solved</h3>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {project.results && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">📊 Results & Impact</h3>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <ul className="space-y-2">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">📈</span>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {project.role && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">👨‍💻 My Role</h3>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <p className="text-gray-700">{project.role}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <Button 
              className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              onClick={() => window.open(project.githubUrl || '#', '_blank')}
            >
              <span className="mr-2">💻</span>
              View Source Code
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => window.open(project.liveUrl || '#', '_blank')}
            >
              <span className="mr-2">🌐</span>
              Live Demo
            </Button>
            <Button 
              variant="ghost" 
              onClick={onClose}
              className="flex-1"
            >
              <span className="mr-2">✕</span>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
