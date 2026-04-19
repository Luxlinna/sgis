import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollReveal from '../../components/base/ScrollReveal';

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 500) {
      newErrors.message = 'Message must be 500 characters or less';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const formBody = new URLSearchParams();
      formBody.append('parentName', formData.parentName);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('childName', formData.childName);
      formBody.append('childAge', formData.childAge);
      formBody.append('message', formData.message);
      
      const response = await fetch('https://readdy.ai/api/form/d6t7kglm9vk3c28i5dc0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          parentName: '',
          email: '',
          phone: '',
          childName: '',
          childAge: '',
          message: ''
        });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center mt-20">
        <div className="absolute inset-0">
          {/* <img 
            src="https://readdy.ai/api/search-image?query=Modern%20international%20school%20building%20exterior%20with%20welcoming%20entrance%2C%20contemporary%20architecture%2C%20bright%20daylight%2C%20professional%20educational%20facility%20photography%2C%20clean%20and%20inviting%20atmosphere%2C%20wide%20angle%20view%20showing%20the%20main%20entrance%20and%20facade%2C%20natural%20lighting%2C%20high%20quality%20architectural%20photography&width=1920&height=600&seq=contact-hero-001&orientation=landscape" 
            alt="SGIS Campus" 
            className="w-full h-full object-cover object-center"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{t('contact_title')}</h1>
          <p className="text-xl md:text-2xl font-light">{t('contact_subtitle')}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('contact_get_in_touch')}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We welcome inquiries from prospective parents and guardians. Whether you have questions about our curriculum, admission process, or would like to schedule a campus tour, our team is here to help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg flex-shrink-0">
                      <i className="ri-map-pin-line text-2xl text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t('contact_address_label')}</h3>
                      <p className="text-gray-600">93 Thmor Meas Road, Sala Kamreuk<br />Siem Reap, Cambodia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg flex-shrink-0">
                      <i className="ri-phone-line text-2xl text-teal-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t('contact_phone_label')}</h3>
                      <p className="text-gray-600">+855 63 761 606<br />+855 96 338 8885</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg flex-shrink-0">
                      <i className="ri-mail-line text-2xl text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t('contact_email_label')}</h3>
                      <p className="text-gray-600">info@sgis-siemreap.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg flex-shrink-0">
                      <i className="ri-time-line text-2xl text-teal-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t('contact_hours_label')}</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM<br />Saturday: 8:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* School Logo */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <img 
                    src="https://res-console.cloudinary.com/dgdjv1zas/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/bG9nb19wbW5sYW8=/template_primary" 
                    alt="SGIS Logo" 
                    className="h-24 w-auto"
                  />
                </div>
              </div>

              {/* Inquiry Form */}
              <div>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('contact_send_message_title')}</h2>
                  <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>

                  <form id="parent-enquiry-sgis-form" data-readdy-form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact_form_parent_name')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.parentName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-sm`}
                        placeholder="Enter your full name"
                      />
                      {errors.parentName && <p className="mt-1 text-sm text-red-500">{errors.parentName}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact_form_email')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-sm`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact_form_phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="+855 XX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact_form_child_name')}
                      </label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="Enter child's full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact_form_child_age')}
                      </label>
                      <select
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-sm"
                      >
                        <option value="">Select age/grade</option>
                        <option value="3 years old">3 years old</option>
                        <option value="4 years old">4 years old</option>
                        <option value="5 years old">5 years old</option>
                        <option value="Grade 1">Grade 1</option>
                        <option value="Grade 2">Grade 2</option>
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                        <option value="Grade 6">Grade 6</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11</option>
                        <option value="Grade 12">Grade 12</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact_form_message')} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        maxLength={500}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-sm resize-none`}
                        placeholder="Tell us about your inquiry or questions..."
                      ></textarea>
                      <div className="flex justify-between items-center mt-1">
                        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                        <p className="text-xs text-gray-500 ml-auto">{formData.message.length}/500 characters</p>
                      </div>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <i className="ri-checkbox-circle-line text-green-600 text-xl"></i>
                          <p className="text-sm text-green-800 font-medium">{t('contact_success_msg')}</p>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <i className="ri-error-warning-line text-red-600 text-xl"></i>
                          <p className="text-sm text-red-800 font-medium">{t('contact_error_msg')}</p>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isSubmitting ? `${t('send_message')}...` : t('send_message')}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('contact_visit_campus')}</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.2847654321!2d103.85!3d13.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDIxJzM2LjAiTiAxMDPCsDUxJzAwLjAiRQ!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SGIS Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
