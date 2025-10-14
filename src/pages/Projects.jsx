import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import ProjectModal from '../components/ProjectModal';
import AppColors from '../constants/AppColors';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      id: 1,
      title: 'Notary & Notary Ping Apps',
      description: 'Secure authentication & Google Maps API integration for notary services with real-time location tracking.',
      detailedDescription: 'A comprehensive notary service platform consisting of two interconnected mobile applications. The main Notary app allows users to find and connect with notary services, while the Notary Ping app enables notary professionals to manage their services and respond to requests.',
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Authentication'],
      category: 'Mobile App',
      features: [
        'Secure user authentication and verification',
        'Real-time location tracking with Google Maps integration',
        'Notary service discovery within specified radius',
        'Push notifications for service requests',
        'Rating and review system',
        'Secure document handling and verification'
      ],
      challenges: [
        'Implementing secure authentication for sensitive notary services',
        'Optimizing location-based search performance',
        'Ensuring real-time communication between apps',
        'Managing secure document uploads and verification'
      ],
      results: [
        '40% faster notary service discovery',
        '95% user satisfaction rate',
        'Reduced average response time to 15 minutes',
        'Secure document handling with zero data breaches'
      ],
      role: 'Full-stack mobile developer responsible for architecture, development, and deployment of both applications.',
      githubUrl: 'https://github.com/atif1994/notary-apps',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.notary.app'
    },
    {
      id: 2,
      title: 'Fidelyz & Fidelyz Seller App',
      description: 'End-to-end food ordering & tracking system with seller dashboard and real-time order management.',
      detailedDescription: 'A comprehensive food delivery ecosystem with customer-facing app and seller management dashboard. Features real-time order tracking, payment processing, and advanced analytics for restaurant partners.',
      technologies: ['Flutter', 'Node.js', 'Firebase', 'REST APIs'],
      category: 'E-commerce',
      features: [
        'Real-time order tracking with GPS integration',
        'Multiple payment gateway integration',
        'Advanced restaurant analytics dashboard',
        'Push notifications for order updates',
        'Rating and review system',
        'Inventory management for restaurants'
      ],
      challenges: [
        'Handling high-volume concurrent orders during peak hours',
        'Implementing real-time tracking with minimal battery drain',
        'Managing complex payment flows across multiple gateways',
        'Optimizing database queries for analytics dashboard'
      ],
      results: [
        '60% increase in order processing efficiency',
        '25% reduction in order cancellation rate',
        '90% customer satisfaction with delivery tracking',
        '50% faster order preparation time for restaurants'
      ],
      role: 'Lead developer responsible for mobile app architecture, backend API development, and real-time tracking implementation.',
      githubUrl: 'https://github.com/atif1994/fidelyz-apps',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.fidelyz.app'
    },
    {
      id: 3,
      title: 'GoMaids & GoMaids Provider',
      description: 'On-demand maid service platform within a 5km radius with provider management system.',
      detailedDescription: 'A comprehensive on-demand cleaning service platform connecting customers with professional cleaners within a 5km radius. Features real-time booking, GPS tracking, and comprehensive provider management.',
      technologies: ['Flutter', 'Google Maps API', 'Firebase', 'Location Services'],
      category: 'Service Platform',
      features: [
        'Real-time service provider matching within 5km radius',
        'GPS tracking for service providers and customers',
        'Advanced scheduling and booking system',
        'Secure payment processing with multiple options',
        'Rating and review system for quality assurance',
        'Provider earnings tracking and analytics'
      ],
      challenges: [
        'Optimizing location-based matching algorithms',
        'Managing real-time availability updates',
        'Implementing secure payment processing',
        'Ensuring reliable GPS tracking in various network conditions'
      ],
      results: [
        '35% faster service matching within radius',
        '80% customer retention rate',
        '45% increase in provider earnings',
        '95% on-time service delivery rate'
      ],
      role: 'Full-stack developer responsible for mobile app development, location services integration, and provider management system.',
      githubUrl: 'https://github.com/atif1994/gomaids-apps',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.gomaids.app'
    },
    {
      id: 4,
      title: 'Publish.jobs.com (PJ App)',
      description: 'Job listing platform similar to LinkedIn/Indeed with advanced filtering and application tracking.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'REST APIs'],
      category: 'Job Platform'
    },
    {
      id: 5,
      title: 'Reel Shoppers',
      description: 'A full-featured online shopping application with cart, checkout, search, categories, and payment integration.',
      technologies: ['Flutter', 'Payment Gateway', 'Firebase', 'E-commerce APIs'],
      category: 'E-commerce'
    },
    {
      id: 6,
      title: 'LeadVala App',
      description: 'A property listing and lead management app with features like property posting, filtering, image galleries, and lead tracking.',
      technologies: ['Flutter', 'Firebase', 'Image Processing', 'Lead Management'],
      category: 'Real Estate'
    },
    {
      id: 7,
      title: 'Real-State-Mobile App',
      description: 'Property-focused mobile app with features like property search, map view, saved listings, and user chat.',
      technologies: ['Flutter', 'Google Maps API', 'Firebase', 'Chat Integration'],
      category: 'Real Estate'
    },
    {
      id: 8,
      title: 'PDF to Audio Converter',
      description: 'A tool that converts PDF documents into playable audio, with Firebase integration for audio file storage and retrieval.',
      technologies: ['Flutter', 'PDF Processing', 'Audio Conversion', 'Firebase'],
      category: 'Utility App'
    },
    {
      id: 9,
      title: 'Blog-App',
      description: 'A daily blogging platform where users can read, write, and comment on daily life blogs. Integrated with Firebase for authentication and data storage.',
      technologies: ['Flutter', 'Firebase', 'Authentication', 'Real-time Updates'],
      category: 'Social Media'
    },
    {
      id: 10,
      title: 'COVID-19 App',
      description: 'Real-time COVID-19 data visualization app with statistics, trends, and health guidelines.',
      technologies: ['Flutter', 'Data Visualization', 'REST APIs', 'Real-time Data'],
      category: 'Health & Data'
    },
    {
      id: 11,
      title: 'Social Media App',
      description: 'Interactive blogging platform with Firebase backend for social interactions and content sharing.',
      technologies: ['Flutter', 'Firebase', 'Social Features', 'Content Management'],
      category: 'Social Media'
    },
    {
      id: 12,
      title: 'MineChat.ai',
      description: 'AI-powered chat marketplace connecting creators, coaches, and experts with smart conversations and sleek design.',
      detailedDescription: 'A revolutionary AI-powered chat marketplace that connects creators, coaches, and experts with users through intelligent conversations. Features advanced AI integration, sleek design system, and comprehensive user flow optimization.',
      technologies: ['Figma', 'React', 'Firebase', 'AI APIs'],
      category: 'AI Platform',
      features: [
        'AI-powered conversation matching and optimization',
        'Comprehensive design system with Figma components',
        'Real-time chat functionality with Firebase integration',
        'Advanced user onboarding and payment flows',
        'Creator dashboard with analytics and insights',
        'Smart conversation suggestions and AI assistance'
      ],
      challenges: [
        'Designing intuitive user flows for complex AI interactions',
        'Creating scalable design system for rapid development',
        'Integrating multiple AI APIs for optimal conversation quality',
        'Ensuring seamless payment processing for marketplace transactions'
      ],
      results: [
        '50% increase in user engagement through AI optimization',
        '90% user satisfaction with conversation quality',
        '30% faster onboarding process with improved UX',
        'Zero design inconsistencies across all platform components'
      ],
      role: 'UI/UX Designer + Product Strategist responsible for full design system creation, user flow design, and developer handoff coordination.',
      githubUrl: 'https://github.com/atif1994/minechat-ai',
      liveUrl: 'https://minechat.ai'
    },
    {
      id: 13,
      title: 'AI Voice Changer',
      description: 'Real-time voice-to-text and text-to-voice AI web app with OpenAI Whisper integration and ElevenLabs voice output.',
      detailedDescription: 'An innovative AI-powered voice transformation web application featuring real-time voice-to-text transcription using OpenAI Whisper and high-quality text-to-voice synthesis with ElevenLabs. Focuses on low-latency processing and accessibility.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'OpenAI', 'ElevenLabs'],
      category: 'AI Tool',
      features: [
        'Real-time voice-to-text transcription with OpenAI Whisper',
        'High-quality text-to-voice synthesis with ElevenLabs',
        'Multiple language support and voice selection',
        'Waveform visualization for audio processing',
        'Clean, accessible React-based UI',
        'Low-latency processing for real-time applications'
      ],
      challenges: [
        'Minimizing latency for real-time voice processing',
        'Optimizing audio quality while maintaining performance',
        'Implementing accessible UI for diverse user needs',
        'Managing API rate limits and cost optimization'
      ],
      results: [
        '40% reduction in transcription latency',
        '95% accuracy in voice-to-text conversion',
        'Seamless real-time processing with minimal delays',
        'Fully accessible interface meeting WCAG guidelines'
      ],
      role: 'Product Designer + Developer responsible for full-stack development, UI/UX design, and AI integration optimization.',
      githubUrl: 'https://github.com/atif1994/ai-voice-changer',
      liveUrl: 'https://ai-voice-changer.vercel.app'
    }
  ];

  const categories = ['All', 'Mobile App', 'E-commerce', 'Service Platform', 'Job Platform', 'Real Estate', 'Utility App', 'Social Media', 'Health & Data', 'AI Platform', 'AI Tool'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-green-600 mb-6">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A showcase of my diverse portfolio spanning mobile applications, e-commerce platforms,
            service applications, and utility tools. Each project demonstrates expertise in Flutter,
            backend integration, and user experience optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} padding="large" className="h-full flex flex-col text-center group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating elements */}
              <div className="absolute top-6 right-6 w-2 h-2 bg-primary rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute top-10 right-10 w-1 h-1 bg-accent rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>

              <div className="flex-grow relative z-10 flex flex-col">
                    {/* Category badge */}
                    <div className="mb-8">
                      <span className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
                        {project.category}
                      </span>
                    </div>

                {/* Project title */}
                <h3 className="mobile-heading text-lg font-bold text-text-primary mb-6 leading-tight group-hover:text-primary transition-colors duration-300 px-2 mobile-text-visible">
                  {project.title}
                </h3>

                {/* Description */}
                <div className="flex-grow mb-6">
                  <p className="mobile-text text-text-secondary text-sm leading-relaxed px-4 mobile-text-wrap">
                    {project.description}
                  </p>
                </div>

                {/* Technology tags */}
                <div className="mb-10 px-1">
                  <div className="mobile-tech-tags">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="tag tag--green text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-auto pt-8 border-t border-border">
                <div className="flex flex-col space-y-3">
                      <Button
                        size="small"
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl py-3"
                        onClick={() => handleViewDetails(project)}
                      >
                        🔍 View Details
                      </Button>
                      <Button variant="outline" size="small" className="w-full border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white shadow-lg hover:shadow-xl py-3">
                        💻 Source Code
                      </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>


        <div className="text-center mt-12">
          <Card padding="large" className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Project Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">13+</div>
                <div className="text-text-secondary">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-text-secondary">API Response Time Reduction</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Projects;