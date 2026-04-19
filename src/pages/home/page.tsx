import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollReveal from '../../components/base/ScrollReveal';

export default function HomePage() {
  const { t } = useTranslation();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Aum Chankanika',
      role: 'Parent of two SGIS students',
      grade: 'Grade 4 & Grade 7',
      image: 'https://readdy.ai/api/search-image?query=elegant%20Cambodian%20mother%20in%20her%20late%20thirties%20smiling%20warmly%2C%20professional%20portrait%2C%20soft%20natural%20window%20light%2C%20clean%20neutral%20cream%20background%2C%20refined%20and%20approachable%20expression%2C%20high%20quality%20portrait%20photography%2C%20contemporary%20professional%20look&width=400&height=400&seq=parent-testimonial-001&orientation=squarish',
      quote: 'Enrolling our children at SGIS has been one of the best decisions we\'ve made. The caring, dedicated teachers and student-centered approach has truly helped our kids grow, not just academically, but personally too. Our children feel safe and excited to go to school every day. We\'re grateful to be a part of a passionate and nurturing community.',
      stars: 5
    },
    {
      name: 'Vo Ratana',
      role: 'Parent of three SGIS students',
      grade: 'Nursery, Grade 2 & Grade 5',
      image: 'https://readdy.ai/api/search-image?query=confident%20Cambodian%20father%20in%20his%20forties%20with%20warm%20genuine%20smile%2C%20professional%20portrait%20photography%2C%20soft%20studio%20lighting%2C%20clean%20light%20background%2C%20well-dressed%20in%20business%20casual%20attire%2C%20trustworthy%20and%20kind%20appearance&width=400&height=400&seq=parent-testimonial-002&orientation=squarish',
      quote: 'We couldn\'t be happier that our kids are at SGIS International School! Every day they come home buzzing with excitement about what they learned and the fun they had. The teachers make learning feel like an adventure, and it\'s amazing to see our kids so confident, curious, and happy. SGIS feels like a second home for them and for us!',
      stars: 5
    },
    {
      name: 'Sophie Laurent',
      role: 'Parent, French expat family',
      grade: 'Reception & Grade 3',
      image: 'https://readdy.ai/api/search-image?query=confident%20French%20expat%20mother%20in%20her%20mid-thirties%20with%20warm%20smile%2C%20professional%20portrait%2C%20soft%20natural%20light%2C%20neutral%20light%20gray%20background%2C%20stylish%20casual%20professional%20outfit%2C%20friendly%20and%20approachable%20expression%2C%20high%20quality%20portrait%20photography&width=400&height=400&seq=parent-testimonial-003&orientation=squarish',
      quote: 'Moving to Siem Reap, we were anxious about finding the right school. SGIS immediately felt different — the warmth from the staff, the international community, and how well the teachers know each child individually. Our two children have flourished here in ways we never expected. The school genuinely cares about every student.',
      stars: 5
    },
    {
      name: 'Nguyen Thi Lan',
      role: 'Parent, Vietnamese family',
      grade: 'Grade 6',
      image: 'https://readdy.ai/api/search-image?query=graceful%20Vietnamese%20mother%20in%20her%20late%20thirties%20with%20genuine%20warm%20smile%2C%20professional%20portrait%20photography%2C%20soft%20window%20lighting%2C%20clean%20white%20background%2C%20well-dressed%2C%20approachable%20and%20sophisticated%20expression%2C%20high%20quality%20portrait&width=400&height=400&seq=parent-testimonial-004&orientation=squarish',
      quote: 'My son\'s English was very limited when he joined SGIS in Grade 4. Within one year, he was confident in class and making friends from all over the world. The ESL support was excellent and the teachers were incredibly patient and encouraging. Two years later, he is one of the top students in his class. We are so proud.',
      stars: 5
    },
    {
      name: 'David Okafor',
      role: 'Parent, British NGO family',
      grade: 'Year 2 & Year 5',
      image: 'https://readdy.ai/api/search-image?query=friendly%20British-Nigerian%20father%20in%20his%20forties%20with%20broad%20warm%20smile%2C%20professional%20portrait%20photography%2C%20modern%20studio%20lighting%2C%20neutral%20background%2C%20smart%20casual%20clothing%2C%20confident%20and%20approachable%20expression%2C%20high%20quality%20portrait%20photography&width=400&height=400&seq=parent-testimonial-005&orientation=squarish',
      quote: 'As a family that moves frequently for work, we\'ve enrolled our children in schools across four countries. SGIS stands out for its exceptional international curriculum, dedicated teaching staff, and the genuine sense of community. Our kids were welcomed from day one. If you\'re looking for quality international education in Siem Reap, look no further.',
      stars: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i0.wp.com/sgis-siemreap.com/wp-content/uploads/2025/08/photo_2025-08-06_08-59-53.jpg?fit=960%2C1280&ssl=1"
            alt="SGIS Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-6 w-full">
          <div className="flex flex-col items-center">
            {/* <img
              // src="https://public.readdy.ai/ai/img_res/1c61b234-48f8-4b5d-b3cf-a0f16a0e7d0c.png"
              src="https://res-console.cloudinary.com/dgdjv1zas/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/bG9nb19wbW5sYW8=/template_primary"
              alt="SGIS Logo"
              className="w-48 h-48 mb-8 object-contain"
            /> */}
            <h1 className="text-6xl md:text-7xl font-bold text-amber-400 mb-4 tracking-wide" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}>
              SGIS INTERNATIONAL
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold text-amber-400 tracking-wide" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}>
              SCHOOL
            </h2>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home_who_we_are')}</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Mission */}
            <ScrollReveal delay={0}>
              <div className="flex flex-col items-center">
                <div className="w-full mb-6 overflow-hidden rounded-lg">
                  <img
                    src="https://i0.wp.com/sgis-siemreap.com/wp-content/uploads/2025/08/photo_2025-08-06_08-59-53.jpg?fit=960%2C1280&ssl=1"
                    alt="Mission"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home_mission_title')}</h3>
                <p className="text-gray-700 text-center leading-relaxed">{t('home_mission_text')}</p>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal delay={100}>
              <div className="flex flex-col items-center">
                <div className="w-full mb-6 overflow-hidden rounded-lg">
                  <img
                    src="https://i0.wp.com/sgis-siemreap.com/wp-content/uploads/2025/08/photo_2024-05-02_14-56-24.jpg?fit=960%2C1280&ssl=1"
                    alt="Vision"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home_vision_title')}</h3>
                <p className="text-gray-700 text-center leading-relaxed">{t('home_vision_text')}</p>
              </div>
            </ScrollReveal>

            {/* Values */}
            <ScrollReveal delay={200}>
              <div className="flex flex-col items-center">
                <div className="w-full mb-6 overflow-hidden rounded-lg">
                  <img
                    src="https://i0.wp.com/sgis-siemreap.com/wp-content/uploads/2025/08/photo_2023-11-06_14-27-46.jpg?fit=960%2C1280&ssl=1"
                    alt="Values"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home_values_title')}</h3>
                <p className="text-gray-700 text-center leading-relaxed">{t('home_values_text')}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-teal-800 to-teal-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-700/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">{t('home_what_parents_say')}</p>
              <h2 className="text-4xl font-bold text-white mb-4">{t('home_testimonials_title')}</h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto mb-5"></div>
              <p className="text-teal-200 max-w-2xl mx-auto text-base leading-relaxed">{t('home_testimonials_subtitle')}</p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-400 mb-3">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: testimonials[activeTestimonial].stars }).map((_, i) => (
                      <i key={i} className="ri-star-fill text-amber-400 text-sm"></i>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <i className="ri-double-quotes-l text-4xl text-amber-400/60 block mb-3"></i>
                  <p className="text-white text-base md:text-lg leading-relaxed italic mb-5">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div>
                    <p className="text-amber-300 font-bold text-base">{testimonials[activeTestimonial].name}</p>
                    <p className="text-teal-200 text-sm">{testimonials[activeTestimonial].role}</p>
                    <div className="inline-flex items-center gap-1.5 mt-2 bg-amber-500/20 text-amber-300 text-xs font-medium px-3 py-1 rounded-full">
                      <i className="ri-graduation-cap-line text-xs"></i>
                      {testimonials[activeTestimonial].grade}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 group ${
                  activeTestimonial === index ? 'scale-110' : 'opacity-60 hover:opacity-90'
                }`}
              >
                <div className={`w-14 h-14 rounded-full overflow-hidden transition-all duration-300 ${
                  activeTestimonial === index ? 'border-amber-400 border-4' : 'border-white/30 border-2'
                }`}>
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <span className={`text-xs font-medium whitespace-nowrap ${
                  activeTestimonial === index ? 'text-amber-300' : 'text-teal-300'
                }`}>
                  {testimonial.name.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  activeTestimonial === i ? 'w-6 h-2 bg-amber-400' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dgdjv1zas/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/bG9nb19wbW5sYW8=/template_primary"
                  alt="SGIS Logo"
                  className="w-64 h-64 object-contain"
                />
              </div>
              <div className="text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('home_contact_title')}</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('home_contact_address')}</h3>
                    <p>93 Thmor Meas Road, Sala Kamreuk, Siem Reap</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('home_contact_email')}</h3>
                    <p>sgis.international14@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('home_contact_call')}</h3>
                    <p>+855 (0) 99 590 033</p>
                    <p>+855 (0) 17 368 086</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
                    <i className="ri-mail-send-line"></i>
                    {t('contact_us')}
                  </Link>
                  <Link to="/admission" className="inline-flex items-center gap-2 bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap cursor-pointer">
                    <i className="ri-file-text-line"></i>
                    {t('apply_now')}
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
