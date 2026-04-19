import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollReveal from '../../components/base/ScrollReveal';

export default function SponsorshipPage() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.currentTarget;
    const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
    try {
      const res = await fetch('https://readdy.ai/api/form/d6tah44j8d20juc90040', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      if (res.ok) {
        setFormStatus('success');
        form.reset();
        setCharCount(0);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const sponsorshipTiers = [
    {
      title: 'Student Sponsorship',
      amount: '$500/year',
      icon: 'ri-user-heart-line',
      color: 'amber',
      description: 'Sponsor an individual student\'s education for one academic year, covering tuition, books, and supplies.',
      benefits: [
        'Direct impact on one student\'s life',
        'Annual progress reports',
        'Personal thank you letter from student',
        'Certificate of sponsorship'
      ]
    },
    {
      title: 'Classroom Sponsorship',
      amount: '$2,500/year',
      icon: 'ri-team-line',
      color: 'teal',
      description: 'Support an entire classroom with learning materials, technology, and educational resources.',
      benefits: [
        'Classroom named in your honor',
        'Quarterly updates with photos',
        'Invitation to classroom events',
        'Recognition on school website'
      ]
    },
    {
      title: 'Facility Improvement',
      amount: '$5,000+',
      icon: 'ri-building-line',
      color: 'amber',
      description: 'Fund major facility upgrades such as library expansion, playground equipment, or technology labs.',
      benefits: [
        'Permanent recognition plaque',
        'Project completion report',
        'Campus tour and dedication ceremony',
        'Lifetime recognition as major donor'
      ]
    },
    {
      title: 'Scholarship Fund',
      amount: '$10,000+',
      icon: 'ri-medal-line',
      color: 'teal',
      description: 'Establish a named scholarship fund to support deserving students for years to come.',
      benefits: [
        'Named scholarship in perpetuity',
        'Annual scholarship award ceremony',
        'Meet scholarship recipients',
        'Legacy of educational impact'
      ]
    }
  ];

  const impactAreas = [
    {
      icon: 'ri-book-open-line',
      title: 'School Supplies',
      description: 'Textbooks, notebooks, pencils, and learning materials for students who cannot afford them.',
      stat: '200+ students supported annually'
    },
    {
      icon: 'ri-shirt-line',
      title: 'School Uniforms',
      description: 'Providing uniforms ensures all students can attend school with dignity and pride.',
      stat: '150+ uniforms provided yearly'
    },
    {
      icon: 'ri-restaurant-line',
      title: 'Nutritious Meals',
      description: 'Daily meals help students focus on learning instead of hunger, improving attendance and performance.',
      stat: '300+ meals served daily'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Tuition Support',
      description: 'Covering tuition fees for families facing financial hardship, ensuring no child is denied education.',
      stat: '100+ students on scholarship'
    }
  ];

  const sponsorshipSteps = [
    {
      number: '01',
      title: 'Choose Your Level',
      description: 'Select the sponsorship tier that aligns with your giving capacity and desired impact.',
      icon: 'ri-hand-heart-line'
    },
    {
      number: '02',
      title: 'Contact Our Team',
      description: 'Reach out to our development office to discuss your sponsorship and ask any questions.',
      icon: 'ri-phone-line'
    },
    {
      number: '03',
      title: 'Complete Agreement',
      description: 'Sign a simple sponsorship agreement outlining terms, duration, and recognition preferences.',
      icon: 'ri-file-text-line'
    },
    {
      number: '04',
      title: 'Make Impact',
      description: 'Your contribution begins changing lives immediately, with regular updates on your impact.',
      icon: 'ri-heart-pulse-line'
    }
  ];

  const testimonials = [
    {
      name: 'Sophea',
      grade: 'Grade 8 Student',
      image: 'https://readdy.ai/api/search-image?query=happy%20Cambodian%20female%20student%20in%20school%20uniform%20holding%20books%2C%20grateful%20expression%2C%20bright%20classroom%20background%2C%20natural%20lighting%2C%20educational%20portrait%20photography%2C%20hopeful%20and%20determined%20young%20student&width=400&height=500&seq=sponsor-student-001&orientation=portrait',
      quote: 'Thanks to my sponsor, I can continue my education and dream of becoming a teacher. Their support means everything to my family and me.',
      story: 'Sophea comes from a rural village outside Siem Reap. Her parents work as farmers and struggled to afford school fees. With sponsorship support, she excels in her studies and hopes to return to her community as an educator.'
    },
    {
      name: 'Dara',
      grade: 'Grade 10 Student',
      image: 'https://readdy.ai/api/search-image?query=smiling%20Cambodian%20male%20student%20in%20school%20uniform%20with%20backpack%2C%20confident%20expression%2C%20school%20campus%20background%2C%20natural%20lighting%2C%20educational%20portrait%20photography%2C%20ambitious%20and%20hardworking%20young%20student&width=400&height=500&seq=sponsor-student-002&orientation=portrait',
      quote: 'My sponsor gave me the chance to focus on my studies instead of worrying about school costs. Now I am top of my class and planning for university.',
      story: 'Dara lost his father at a young age, leaving his mother to support three children alone. Sponsorship covered his tuition and supplies, allowing him to pursue his passion for science and mathematics.'
    },
    {
      name: 'Channary',
      grade: 'Grade 6 Student',
      image: 'https://readdy.ai/api/search-image?query=cheerful%20Cambodian%20female%20student%20in%20school%20uniform%20smiling%20brightly%2C%20joyful%20expression%2C%20colorful%20classroom%20background%2C%20natural%20lighting%2C%20educational%20portrait%20photography%2C%20enthusiastic%20and%20bright%20young%20student&width=400&height=500&seq=sponsor-student-003&orientation=portrait',
      quote: 'I love coming to school every day! My sponsor helps me get books and uniforms. I want to make them proud by studying hard.',
      story: 'Channary is the youngest of five siblings. Her family could not afford to send all children to school. Sponsorship ensured she could attend SGIS, where she discovered her love for art and reading.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20happy%20Cambodian%20students%20in%20school%20uniforms%20smiling%20together%2C%20hopeful%20children%20holding%20hands%2C%20bright%20school%20campus%20background%2C%20natural%20lighting%2C%20heartwarming%20educational%20photography%2C%20community%20and%20support%20atmosphere&width=1920&height=600&seq=sponsorship-hero-001&orientation=landscape"
            alt="SGIS Students"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            {t('sponsorship_title')}
          </h1>
          <p className="text-xl text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            {t('sponsorship_subtitle')}
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('sponsorship_why_title')}</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At SGIS International School, we believe every child deserves access to quality education, regardless of their family's financial circumstances. Many talented students in Siem Reap face barriers to education due to poverty, making it difficult for families to afford tuition, uniforms, books, and supplies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your sponsorship directly transforms lives by removing these barriers and opening doors to opportunity. When you sponsor a student or support our programs, you're not just funding education—you're investing in Cambodia's future leaders, innovators, and changemakers.
              </p>
              <p className="text-lg font-semibold text-teal-700">
                Together, we can ensure that financial hardship never stands between a child and their dreams.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sponsorship Tiers Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('sponsorship_tiers_title')}</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('sponsorship_tiers_sub')}
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <div className={`bg-gradient-to-r from-${tier.color}-500 to-${tier.color}-600 p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 flex items-center justify-center bg-white rounded-xl`}>
                      <i className={`${tier.icon} text-3xl text-${tier.color}-600`}></i>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-3xl font-bold">{tier.amount}</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{tier.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">{tier.description}</p>
                  <div className="space-y-3">
                    <p className="font-semibold text-gray-900 mb-3">{t('sponsorship_benefits')}</p>
                    {tier.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 flex items-center justify-center bg-teal-100 rounded-full flex-shrink-0 mt-0.5">
                          <i className="ri-check-line text-xs text-teal-600"></i>
                        </div>
                        <p className="text-gray-700 text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Your Sponsorship Helps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('sponsorship_helps_title')}</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('sponsorship_helps_sub')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-teal-50 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl mx-auto mb-4">
                  <i className={`${area.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{area.description}</p>
                <p className="text-amber-600 font-semibold text-sm">{area.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Become a Sponsor Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('sponsorship_become_title')}</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('sponsorship_become_sub')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg mb-4">
                    <i className={`${step.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="text-4xl font-bold text-amber-200 mb-3">{step.number}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < sponsorshipSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <i className="ri-arrow-right-line text-2xl text-amber-400"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('sponsorship_stories_title')}</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('sponsorship_stories_sub')}
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <div className="w-full h-80 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <i className="ri-double-quotes-l text-2xl text-amber-500"></i>
                  </div>
                  <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-amber-600 font-semibold text-sm mb-3">{testimonial.grade}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{testimonial.story}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Inquiry Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12 items-start">
              {/* Left side info */}
              <div className="md:col-span-2">
                <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">{t('sponsorship_get_in_touch')}</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('sponsorship_inquiry_title')}</h2>
                <div className="w-16 h-1 bg-amber-500 mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ready to make a difference? Submit your sponsorship inquiry and our development team will get back to you within 2 business days to discuss the best option for you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-lg flex-shrink-0">
                      <i className="ri-phone-line text-teal-700 text-lg"></i>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Call Us</p>
                      <p className="text-gray-800 font-medium text-sm">+855 (0) 99 590 033</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-lg flex-shrink-0">
                      <i className="ri-mail-line text-amber-700 text-lg"></i>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email Us</p>
                      <p className="text-gray-800 font-medium text-sm">sgis.international14@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-lg flex-shrink-0">
                      <i className="ri-map-pin-line text-teal-700 text-lg"></i>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Visit Us</p>
                      <p className="text-gray-800 font-medium text-sm">93 Thmor Meas Road,<br />Sala Kamreuk, Siem Reap</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side form */}
              <div className="md:col-span-3">
                {formStatus === 'success' ? (
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-10 text-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mx-auto mb-4">
                      <i className="ri-check-line text-3xl text-teal-600"></i>
                    </div>
                    <h3 className="text-xl font-bold text-teal-800 mb-2">Inquiry Sent!</h3>
                    <p className="text-teal-700 leading-relaxed mb-5">
                      Thank you for your interest in sponsoring SGIS students. Our team will review your inquiry and be in touch within 2 business days.
                    </p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer text-sm whitespace-nowrap"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form
                    data-readdy-form
                    id="sponsorship-inquiry-form"
                    onSubmit={handleSubmit}
                    className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl p-8 space-y-5"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Sponsorship Inquiry Form</h3>
                    <p className="text-sm text-gray-500 mb-4">All fields marked with * are required.</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="full_name"
                          required
                          placeholder="Your full name"
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Organization / Company</label>
                        <input
                          type="text"
                          name="organization"
                          placeholder="Your organization (if any)"
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="your@email.com"
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+855 ..."
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Sponsorship Level of Interest *</label>
                      <select
                        name="sponsorship_level"
                        required
                        defaultValue=""
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors cursor-pointer"
                      >
                        <option value="" disabled>Select a sponsorship level...</option>
                        <option value="Student Sponsorship ($500/year)">Student Sponsorship — $500/year</option>
                        <option value="Classroom Sponsorship ($2,500/year)">Classroom Sponsorship — $2,500/year</option>
                        <option value="Facility Improvement ($5,000+)">Facility Improvement — $5,000+</option>
                        <option value="Scholarship Fund ($10,000+)">Scholarship Fund — $10,000+</option>
                        <option value="Not sure yet">Not sure yet — I'd like to discuss options</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">How did you hear about SGIS?</label>
                      <select
                        name="referral_source"
                        defaultValue=""
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors cursor-pointer"
                      >
                        <option value="" disabled>Select an option...</option>
                        <option value="Website">Website</option>
                        <option value="Social media">Social media</option>
                        <option value="Friend or colleague">Friend or colleague</option>
                        <option value="NGO / Charity network">NGO / Charity network</option>
                        <option value="Previous visit to Siem Reap">Previous visit to Siem Reap</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message / Additional Information</label>
                      <textarea
                        name="message"
                        rows={4}
                        maxLength={500}
                        placeholder="Tell us about your interest in sponsorship, any questions you have, or how you'd like to be involved..."
                        onChange={(e) => setCharCount(e.target.value.length)}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none"
                      />
                      <p className="text-xs text-gray-400 text-right mt-1">{charCount}/500</p>
                    </div>

                    {formStatus === 'error' && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
                        Something went wrong. Please try again or contact us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {formStatus === 'submitting' ? (
                        <><i className="ri-loader-4-line animate-spin text-lg"></i>{t('send_message')}...</>
                      ) : (
                        <><i className="ri-send-plane-line text-lg"></i>{t('sponsorship_submit_btn')}</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('sponsorship_cta_title')}</h2>
            <p className="text-xl text-teal-50 mb-10 leading-relaxed">
              Your sponsorship can change a child's life forever. Contact us today to learn more about sponsorship opportunities and how you can help build a brighter future for students in Siem Reap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                <i className="ri-mail-line text-xl"></i>
                Contact Us About Sponsorship
              </Link>
              <a
                href="tel:+85563761606"
                className="inline-flex items-center gap-2 bg-amber-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-line text-xl"></i>
                Call Us: +855 63 761 606
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
