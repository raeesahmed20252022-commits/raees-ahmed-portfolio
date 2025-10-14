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
    <div className="min-h-screen mobile-viewport-fix">
      <div className="container mobile-container-fix">
        <Card padding="large" className="mobile-full-width mobile-padding">
          <h1 className="mobile-heading text-3xl font-bold text-text-primary mb-8">
            About Me
          </h1>
          <p className="mobile-text text-lg text-text-secondary mb-12 leading-relaxed">
            A dynamic and detail-oriented Full Stack Developer with 5+ years of experience in designing, developing, 
            and deploying high-performance mobile applications and AI-powered platforms. Proficient in Flutter, Dart, 
            React, Firebase, and MongoDB, with expertise in creating scalable solutions using REST APIs and AI integrations. 
            Strong analytical and problem-solving abilities, ensuring efficient development and seamless user experiences.
          </p>
          
          <div className="responsive-grid responsive-grid-2 mobile-grid-single">
            <div>
              <h2 className="mobile-heading text-2xl font-semibold text-text-primary mb-4">
                Technical Skills
              </h2>
              <div className="space-y-8">
                {technicalSkills.map((category, index) => (
                  <div key={index} className="bg-surface mobile-padding rounded-xl mobile-no-overlap">
                    <h3 className="font-semibold text-text-primary mb-6 mobile-text-visible">{category.category}</h3>
                    <div className="mobile-tech-tags">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="mobile-tech-tag px-4 py-2 bg-primary text-white text-sm rounded-full"
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
                <h2 className="mobile-heading text-2xl font-semibold text-text-primary mb-6">
                  Soft Skills
                </h2>
                <div className="bg-surface mobile-padding rounded-xl mobile-no-overlap">
                  <ul className="space-y-4">
                    {softSkills.map((skill, index) => (
                      <li key={index} className="flex items-center text-text-secondary mobile-text-visible">
                        <span className="text-success mr-3 text-lg">✓</span>
                        <span className="mobile-text-wrap">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="mobile-heading text-2xl font-semibold text-text-primary mb-6">
                  Education
                </h2>
                <div className="bg-surface mobile-padding rounded-xl mobile-no-overlap">
                  <div className="flex items-center mobile-flex-column">
                    <span className="text-accent mr-4 text-2xl">🎓</span>
                    <div className="mobile-text-center">
                      <p className="font-semibold text-text-primary text-lg mobile-text-visible">MSc Computer Science</p>
                      <p className="text-text-secondary mobile-text-visible">AUST University, Abbottabad (2019)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mobile-heading text-2xl font-semibold text-text-primary mb-6">
                  Certifications
                </h2>
                <div className="bg-surface mobile-padding rounded-xl mobile-no-overlap">
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-center text-text-secondary mobile-text-visible">
                        <span className="text-info mr-3 text-lg">🏆</span>
                        <span className="mobile-text-wrap">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="mobile-heading text-2xl font-semibold text-text-primary mb-6">
                  Languages
                </h2>
                <div className="bg-surface mobile-padding rounded-xl mobile-no-overlap">
                  <div className="space-y-4">
                    <div className="flex items-center text-text-secondary mobile-text-visible">
                      <span className="text-primary mr-3 text-lg">•</span>
                      <span className="font-medium">English</span>
                      <span className="ml-2 text-sm">(Fluent)</span>
                    </div>
                    <div className="flex items-center text-text-secondary mobile-text-visible">
                      <span className="text-primary mr-3 text-lg">•</span>
                      <span className="font-medium">Urdu</span>
                      <span className="ml-2 text-sm">(Native)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;