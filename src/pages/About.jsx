import React from 'react';
import Card from '../components/Card';
import AppColors from '../constants/AppColors';

const About = () => {
  const technicalSkills = [
    { category: 'Mobile Development', skills: ['Flutter', 'Dart'] },
    { category: 'Frontend Development', skills: ['React', 'JavaScript', 'Tailwind CSS'] },
    { category: 'Backend', skills: ['Node.js', 'Express.js'] },
    { category: 'Databases', skills: ['Firebase', 'MongoDB'] },
    { category: 'AI & Machine Learning', skills: ['OpenAI API', 'ElevenLabs', 'AI Integration'] },
    { category: 'Design & UI/UX', skills: ['Figma', 'Design Systems', 'Product Strategy'] },
    { category: 'Version Control', skills: ['Git', 'GitHub'] },
    { category: 'State Management', skills: ['GetX', 'Bloc', 'Provider'] },
    { category: 'APIs & Cloud Services', skills: ['REST APIs', 'Google Maps API', 'AI APIs'] },
    { category: 'Architecture Patterns', skills: ['MVC', 'MVVM', 'Clean Code'] },
    { category: 'Web Development', skills: ['React', 'Laravel', 'PHP'] }
  ];

  const softSkills = [
    'Strong analytical & problem-solving abilities',
    'Excellent communication & teamwork skills',
    'Effective time management & multitasking',
    'Passion for learning & adapting to new technologies',
    'Creativity & innovation in software solutions'
  ];

  const certifications = [
    'Full Stack Mobile Development – Udemy',
    'Advanced Flutter Development – Google Developer Certification'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A dynamic and detail-oriented Full Stack Developer with 5+ years of experience in designing, developing, 
              and deploying high-performance mobile applications and AI-powered platforms. Proficient in Flutter, Dart, 
              React, Firebase, and MongoDB, with expertise in creating scalable solutions using REST APIs and AI integrations. 
              Strong analytical and problem-solving abilities, ensuring efficient development and seamless user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Technical Skills
              </h2>
              <div className="space-y-6">
                {technicalSkills.map((category, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Soft Skills
                </h2>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-2xl border border-green-100">
                  <ul className="space-y-4">
                    {softSkills.map((skill, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-4 text-xl">✓</span>
                        <span className="font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Education
                </h2>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
                  <div className="flex items-center">
                    <span className="text-purple-500 mr-4 text-3xl">🎓</span>
                    <div>
                      <p className="text-xl font-bold text-gray-900">MSc Computer Science</p>
                      <p className="text-gray-600">AUST University, Abbottabad (2019)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Certifications
                </h2>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-100">
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-yellow-500 mr-4 text-xl">🏆</span>
                        <span className="font-medium">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Languages
                </h2>
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-100">
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <span className="text-indigo-500 mr-4 text-xl">•</span>
                      <span className="font-medium text-lg">English</span>
                      <span className="ml-2 text-sm text-gray-500">(Fluent)</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-indigo-500 mr-4 text-xl">•</span>
                      <span className="font-medium text-lg">Urdu</span>
                      <span className="ml-2 text-sm text-gray-500">(Native)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;