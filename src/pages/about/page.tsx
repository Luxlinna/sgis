import { useTranslation } from 'react-i18next';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollReveal from '../../components/base/ScrollReveal';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            // src="https://readdy.ai/api/search-image?query=modern%20international%20school%20building%20exterior%20with%20bright%20natural%20lighting%2C%20clean%20architecture%2C%20welcoming%20entrance%20with%20students%20walking%2C%20educational%20environment%2C%20professional%20photography%20style%2C%20warm%20and%20inviting%20atmosphere%2C%20contemporary%20design%20with%20glass%20windows%20and%20open%20spaces&width=1920&height=600&seq=about-hero-001&orientation=landscape"
            src="https://res-console.cloudinary.com/dgdjv1zas/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/R09QUjE1ODMtc2NhbGVkX2JldjhsMA==/template_primary"
            alt="SGIS School Building"
            className="w-full h-full object-cover object-center"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div> */}
        </div>

        <div className="relative z-10 text-center px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            {t('about_title')}
          </h1>
          <p className="text-xl text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            {t('about_subtitle')}
          </p>
        </div>
      </section>

      {/* School History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about_our_story')}</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=international%20school%20classroom%20with%20diverse%20students%20learning%20together%2C%20teacher%20engaging%20with%20children%2C%20bright%20colorful%20educational%20environment%2C%20books%20and%20learning%20materials%2C%20collaborative%20learning%20atmosphere%2C%20warm%20natural%20lighting%2C%20modern%20educational%20setting&width=800&height=600&seq=about-history-001&orientation=landscape"
                  alt="SGIS History"
                  className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about_beginning_title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SGIS International School was founded with a vision to provide world-class education to the children of Siem Reap and beyond. Established by a group of passionate educators who recognized the need for an international standard school in the region, SGIS opened its doors with a commitment to excellence and innovation in education.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From our humble beginnings with a small group of dedicated students and teachers, we have grown into a thriving educational community that serves families from diverse backgrounds, all united by a common goal: to provide their children with the best possible foundation for future success.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about_growth_title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Over the years, SGIS has continuously evolved to meet the changing needs of our students and the global educational landscape. We have expanded our facilities, enhanced our curriculum, and attracted talented educators from around the world who share our passion for student-centered learning.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, SGIS stands as a beacon of educational excellence in Siem Reap, offering a comprehensive international curriculum that prepares students not just for academic success, but for life as responsible, compassionate global citizens.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://readdy.ai/api/search-image?query=happy%20diverse%20students%20in%20school%20uniforms%20playing%20and%20learning%20outdoors%2C%20international%20school%20campus%20with%20green%20spaces%2C%20children%20engaged%20in%20activities%2C%20joyful%20educational%20environment%2C%20bright%20sunny%20day%2C%20modern%20school%20facilities%20in%20background&width=800&height=600&seq=about-growth-001&orientation=landscape"
                  alt="SGIS Growth"
                  className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{t('about_milestones_title')}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                    <i className="ri-building-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{t('about_milestone_school')}</h4>
                    <p className="text-gray-700">SGIS International School was established with a vision to bring world-class education to Siem Reap, starting with a small but dedicated community of learners.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                    <i className="ri-team-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{t('about_milestone_curriculum')}</h4>
                    <p className="text-gray-700">Introduced comprehensive international curriculum programs, expanding grade levels and enrichment activities to serve a growing student body.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                    <i className="ri-global-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{t('about_milestone_recognition')}</h4>
                    <p className="text-gray-700">Achieved recognition for excellence in international education, attracting students from diverse cultural backgrounds and establishing partnerships with global educational institutions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                    <i className="ri-trophy-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{t('about_milestone_excellence')}</h4>
                    <p className="text-gray-700">Today, SGIS continues to grow and innovate, maintaining our commitment to providing exceptional education that prepares students for success in an interconnected world.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about_curriculum_title')}</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At SGIS, we offer a comprehensive international curriculum designed to develop well-rounded, globally-minded students who are prepared for success in an ever-changing world.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Early Years Program */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-seedling-line text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about_early_years_title')}</h3>
                <p className="text-gray-700 mb-4">
                  Our Early Years Program (Ages 3-5) provides a nurturing, play-based learning environment where young children develop foundational skills through exploration, creativity, and social interaction.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>Play-based learning approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>Development of social and emotional skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>Introduction to literacy and numeracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>Creative arts and physical development</span>
                  </li>
                </ul>
              </div>

              {/* Primary Program */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-book-open-line text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about_primary_title')}</h3>
                <p className="text-gray-700 mb-4">
                  Our Primary Program (Grades 1-6) builds on early learning foundations with a structured curriculum that emphasizes critical thinking, creativity, and academic excellence across all subject areas.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>Core subjects: English, Mathematics, Science, Social Studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>Khmer language and culture studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>Arts, music, and physical education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>Project-based learning and inquiry</span>
                  </li>
                </ul>
              </div>

              {/* Secondary Program */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-graduation-cap-line text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about_secondary_title')}</h3>
                <p className="text-gray-700 mb-4">
                  Our Secondary Program (Grades 7-12) prepares students for higher education and future careers with rigorous academic coursework, advanced subject options, and university preparation support.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>Advanced academic curriculum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>University and career counseling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>Leadership and service learning opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>Preparation for international examinations</span>
                  </li>
                </ul>
              </div>

              {/* Enrichment Programs */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-star-line text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about_enrichment_title')}</h3>
                <p className="text-gray-700 mb-4">
                  Beyond core academics, SGIS offers a wide range of enrichment activities and programs that allow students to explore their interests, develop new skills, and discover their passions.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>Sports and athletics programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>Visual and performing arts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>STEM and technology clubs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-amber-500 mt-1"></i>
                    <span>Community service initiatives</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Teaching Methodology */}
            <div className="bg-white rounded-lg shadow-lg p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">{t('about_methodology_title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-user-heart-line text-3xl text-white"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{t('about_student_centered')}</h4>
                  <p className="text-gray-700">
                    We place students at the heart of learning, recognizing their individual strengths, interests, and learning styles to create personalized educational experiences.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-lightbulb-line text-3xl text-white"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{t('about_inquiry_based')}</h4>
                  <p className="text-gray-700">
                    Our curriculum encourages students to ask questions, investigate, and discover answers through hands-on exploration and critical thinking.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-earth-line text-3xl text-white"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{t('about_globally_minded')}</h4>
                  <p className="text-gray-700">
                    We foster international-mindedness, helping students understand diverse perspectives and develop the skills to thrive in our interconnected world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about_foundation_title')}</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="flex flex-col items-center">
              <div className="w-full mb-6 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=diverse%20students%20collaborating%20on%20project%20together%20in%20modern%20classroom%2C%20teamwork%20and%20learning%2C%20international%20school%20environment%2C%20engaged%20children%20working%20with%20teacher%20guidance%2C%20bright%20educational%20space%20with%20learning%20materials%2C%20warm%20natural%20lighting&width=600&height=800&seq=about-mission-001&orientation=portrait"
                  alt="Mission"
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home_mission_title')}</h3>
              <p className="text-gray-700 text-center leading-relaxed mb-4">
                SGIS provides a student-centered approach through which students are given the foundation for becoming lifelong learners. Our aim is to enable our students to become creative and critical thinkers.
              </p>
              <p className="text-gray-700 text-center leading-relaxed">
                We are committed to fostering an environment where every child feels valued, supported, and challenged to reach their full potential. Through innovative teaching methods and a nurturing community, we prepare students to excel academically while developing the character and skills needed for success in life.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col items-center">
              <div className="w-full mb-6 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=happy%20international%20school%20students%20from%20diverse%20backgrounds%20standing%20together%20outdoors%2C%20smiling%20children%20in%20school%20uniforms%2C%20multicultural%20education%20community%2C%20bright%20sunny%20day%20with%20school%20building%2C%20friendship%20and%20unity%2C%20welcoming%20atmosphere&width=600&height=800&seq=about-vision-001&orientation=portrait"
                  alt="Vision"
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home_vision_title')}</h3>
              <p className="text-gray-700 text-center leading-relaxed mb-4">
                Our vision is to encourage students to become open-minded individuals with a global perspective, caring and responsible citizens who contribute meaningfully to both local and worldwide communities, and learners who respect their heritage and culture while embracing international education.
              </p>
              <p className="text-gray-700 text-center leading-relaxed">
                We envision a future where SGIS graduates are confident, compassionate leaders who make positive contributions to society and embrace the challenges and opportunities of our interconnected world.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-col items-center">
              <div className="w-full mb-6 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=children%20showing%20kindness%20and%20respect%20in%20school%20setting%2C%20students%20helping%20each%20other%20learn%2C%20caring%20educational%20environment%2C%20positive%20values%20and%20character%20development%2C%20inclusive%20classroom%20atmosphere%2C%20warm%20and%20supportive%20learning%20space&width=600&height=800&seq=about-values-001&orientation=portrait"
                  alt="Values"
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home_values_title')}</h3>
              <p className="text-gray-700 text-center leading-relaxed mb-4">
                At SGIS, we teach our core values of respect, kindness, responsibility, and inclusivity so that students develop an open-minded view which will benefit their local and global communities in the future.
              </p>
              <p className="text-gray-700 text-center leading-relaxed">
                These values are woven into every aspect of school life, from classroom interactions to extracurricular activities, ensuring that our students not only achieve academic excellence but also grow into ethical, empathetic individuals who make a positive difference in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
