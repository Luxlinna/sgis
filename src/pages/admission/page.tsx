import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollReveal from '../../components/base/ScrollReveal';

export default function AdmissionPage() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const admissionSteps = [
    {
      number: '01',
      title: 'Initial Inquiry',
      description: 'Contact our admissions office via phone, email, or visit our campus to learn more about SGIS and schedule a tour.',
      icon: 'ri-phone-line'
    },
    {
      number: '02',
      title: 'Submit Application',
      description: 'Complete and submit the application form along with all required documents and the application fee.',
      icon: 'ri-file-text-line'
    },
    {
      number: '03',
      title: 'Assessment & Interview',
      description: 'Your child will participate in an age-appropriate assessment, and parents will meet with our admissions team.',
      icon: 'ri-user-search-line'
    },
    {
      number: '04',
      title: 'Enrollment Decision',
      description: 'Receive admission decision within 5-7 business days. Upon acceptance, complete enrollment and pay tuition fees.',
      icon: 'ri-checkbox-circle-line'
    }
  ];

  const ageRequirements = [
    {
      level: 'Early Years',
      grades: 'Ages 3-5',
      description: 'Our Early Years program welcomes children aged 3-5 years old. Students must be the appropriate age by September 1st of the enrollment year.',
      icon: 'ri-seedling-line',
      color: 'amber'
    },
    {
      level: 'Primary School',
      grades: 'Grades 1-6',
      description: 'Primary students from Grade 1 to Grade 6 (ages 6-11). Previous school records and age verification required for grade placement.',
      icon: 'ri-book-open-line',
      color: 'teal'
    },
    {
      level: 'Secondary School',
      grades: 'Grades 7-12',
      description: 'Secondary education for Grades 7-12 (ages 12-18). Transcript evaluation and English proficiency assessment required.',
      icon: 'ri-graduation-cap-line',
      color: 'amber'
    }
  ];

  const requiredDocuments = [
    'Completed application form',
    'Birth certificate (original and copy)',
    'Previous school records and transcripts',
    'Passport-size photos (4 copies)',
    'Copy of student\'s passport or ID',
    'Copy of parents\' passports or IDs',
    'Medical records and immunization certificate',
    'Application fee payment receipt'
  ];

  const keyDates = [
    { event: 'Application Deadline', date: 'Rolling admissions throughout the year' },
    { event: 'Academic Year Starts', date: 'August 15, 2025' },
    { event: 'First Semester Ends', date: 'December 20, 2025' },
    { event: 'Second Semester Starts', date: 'January 6, 2026' },
    { event: 'Academic Year Ends', date: 'June 12, 2026' }
  ];

  const faqs = [
    {
      question: 'What documents are required to apply?',
      answer: 'You will need to submit: a completed application form, the child\'s birth certificate (original and copy), previous school transcripts or reports, 4 passport-size photos, a copy of the student\'s passport or ID, copies of both parents\' passports or IDs, an up-to-date immunization/medical certificate, and proof of application fee payment. For students transferring mid-year, a letter of good standing from the previous school is also required.'
    },
    {
      question: 'When can I apply? Is there a deadline?',
      answer: 'SGIS operates rolling admissions — we accept applications throughout the year whenever spaces are available. The main intake is at the start of the academic year in August, but mid-year enrollments are also possible subject to availability. We recommend applying as early as possible, especially for popular year groups, as places are limited.'
    },
    {
      question: 'What does the admissions assessment involve?',
      answer: 'The assessment is age-appropriate and low-pressure. For Early Years (Nursery & Reception), it is a short observation session where we assess developmental readiness through play. For Primary students (Years 1–6), it includes a brief reading, writing, and numeracy activity. For Secondary students (Years 7–12), there is a written assessment in English and Mathematics, plus a short interview. The entire process typically takes 1–2 hours.'
    },
    {
      question: 'Is there an English language requirement?',
      answer: 'English is the primary language of instruction at SGIS. Students joining from Reception 2 onwards are expected to have a basic level of English. For students who need additional support, we offer ESL (English as a Second Language) classes — available from Reception 2 upward — at an additional monthly fee. The level and cost of ESL support is assessed on an individual basis.'
    },
    {
      question: 'How long does the admissions process take?',
      answer: 'Once we have received all required documents and the assessment has been completed, you will receive an admissions decision within 5–7 business days. In many cases, especially for Early Years, decisions can be made the same week. We aim to make the process as smooth and fast as possible for families.'
    },
    {
      question: 'Can my child join mid-year or mid-term?',
      answer: 'Yes, SGIS does accept mid-year and mid-term enrollments subject to available places. We understand that families relocate or change schools at various times of year. Please contact our admissions office to discuss your specific circumstances and check current availability by year group.'
    },
    {
      question: 'What is the fee refund policy if we leave?',
      answer: 'School fees paid in advance are 100% refundable up to 3 days before the start of each school year. After the year has started, fees are non-refundable except in exceptional circumstances. Administration/enrollment fees are non-refundable in all cases. Please speak to our school office for full details on our fee policy before making payment.'
    },
    {
      question: 'Do you provide school transport or bus service?',
      answer: 'SGIS does not operate its own school bus service at this time. However, we can provide recommendations for reliable local transport options used by families in the school community. Many families arrange private tuk-tuk or car services. Please contact the school office for more guidance on this.'
    },
    {
      question: 'Are there scholarships or sibling discounts available?',
      answer: 'SGIS offers merit-based scholarships for outstanding academic or extracurricular achievement. We also provide limited need-based financial assistance for qualifying families. Families with multiple children enrolled may be eligible for a sibling discount — please enquire with our admissions team for current terms and conditions.'
    },
    {
      question: 'What grade level will my child be placed in?',
      answer: 'Grade placement at SGIS is primarily based on the child\'s age as of July 31 of the enrollment year, in line with international curriculum standards. For students transferring from other schools, we also consider their previous grade level and performance. In some cases, students may be placed a year above or below based on the assessment results and teacher recommendation.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center mt-20">
        <div className="absolute inset-0">
          {/* <img 
            src="https://readdy.ai/api/search-image?query=International%20school%20students%20walking%20through%20modern%20campus%20hallway%20with%20bright%20natural%20lighting%2C%20diverse%20group%20of%20happy%20children%20in%20school%20uniforms%20carrying%20backpacks%2C%20contemporary%20educational%20building%20interior%20with%20large%20windows%2C%20welcoming%20and%20vibrant%20atmosphere%2C%20professional%20school%20photography%2C%20clean%20and%20organized%20environment&width=1920&height=600&seq=admission-hero-001&orientation=landscape" 
            alt="SGIS Students" 
            className="w-full h-full object-cover object-center"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{t('admission_title')}</h1>
          <p className="text-xl md:text-2xl font-light">{t('admission_subtitle')}</p>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('admission_process_title')}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('admission_process_subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-amber-50 to-teal-50 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-6">
                    <i className={`${step.icon} text-3xl text-white`}></i>
                  </div>
                  <div className="text-5xl font-bold text-amber-200 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <i className="ri-arrow-right-line text-3xl text-amber-400"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Application Form Banner */}
      <section className="py-12 px-6 bg-teal-700 print:hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-xl flex-shrink-0">
              <i className="ri-file-download-line text-3xl text-white"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{t('admission_docs_title')}</h3>
              <p className="text-teal-100 text-sm">{t('admission_docs_subtitle')}</p>
            </div>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-7 py-3 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer flex-shrink-0"
          >
            <i className="ri-download-2-line text-lg"></i>
            {t('download_application_form')}
          </button>
        </div>
      </section>

      {/* Age Requirements Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('admission_age_title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('admission_age_subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ageRequirements.map((req, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 flex items-center justify-center bg-${req.color}-100 rounded-xl mb-6`}>
                  <i className={`${req.icon} text-3xl text-${req.color}-600`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{req.level}</h3>
                <p className="text-lg font-semibold text-amber-600 mb-4">{req.grades}</p>
                <p className="text-gray-600 leading-relaxed">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('admission_docs_title')}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('admission_docs_subtitle')}
              </p>
              <div className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start gap-4 bg-gray-50 rounded-lg p-4 hover:bg-amber-50 transition-colors">
                    <div className="w-6 h-6 flex items-center justify-center bg-teal-600 rounded-full flex-shrink-0 mt-1">
                      <i className="ri-check-line text-sm text-white"></i>
                    </div>
                    <p className="text-gray-700 font-medium">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20school%20administrator%20reviewing%20admission%20documents%20at%20modern%20office%20desk%2C%20organized%20paperwork%20and%20folders%2C%20bright%20office%20environment%20with%20natural%20lighting%2C%20welcoming%20and%20professional%20atmosphere%2C%20educational%20administration%20setting%2C%20clean%20and%20contemporary%20workspace&width=800&height=1000&seq=admission-docs-001&orientation=portrait" 
                alt="Admission Documents" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Fees Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-teal-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('admission_fees_title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SGIS offers competitive tuition rates with flexible payment options. Contact our admissions office for detailed fee information.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg flex-shrink-0">
                    <i className="ri-money-dollar-circle-line text-2xl text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('application_fee')}</h3>
                    <p className="text-gray-600">One-time non-refundable fee due with application submission</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg flex-shrink-0">
                    <i className="ri-calendar-line text-2xl text-teal-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('annual_tuition')}</h3>
                    <p className="text-gray-600">Varies by grade level; payment plans available</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg flex-shrink-0">
                    <i className="ri-book-line text-2xl text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('materials_books')}</h3>
                    <p className="text-gray-600">Textbooks, supplies, and learning materials included</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg flex-shrink-0">
                    <i className="ri-shield-check-line text-2xl text-teal-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('additional_fees')}</h3>
                    <p className="text-gray-600">{t('uniforms_field_trips_extracurricular')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-700 mb-4">{t('detailed_tuition_info')}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                <i className="ri-phone-line text-lg"></i>
                {t('contact_admissions')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('admission_dates_title')}</h2>
            <p className="text-lg text-gray-600">{t('admission_dates_subtitle')}</p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl p-8 shadow-lg">
            <div className="space-y-4">
              {keyDates.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-teal-600 rounded-lg flex-shrink-0">
                      <i className="ri-calendar-event-line text-xl text-white"></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{item.event}</h3>
                  </div>
                  <p className="text-gray-700 font-semibold">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('admission_cta_title')}</h2>
          <p className="text-xl text-amber-50 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('admission_cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-amber-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
              <i className="ri-calendar-check-line text-xl"></i>
              {t('schedule_campus_tour')}
            </Link>
            <a href="tel:+85563761606" className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
              <i className="ri-phone-line text-xl"></i>
              {t('call_us_now')}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">{t('admission_got_questions')}</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('admission_faq_title')}</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-5"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('admission_faq_subtitle')}</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden border transition-all duration-200 ${
                  openFaq === index ? 'border-amber-300' : 'border-gray-200 hover:border-amber-200'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <div className={`w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 text-xs font-bold transition-colors ${
                      openFaq === index ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {index + 1}
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 leading-snug">{faq.question}</h3>
                  </div>
                  <div className={`w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-200 ${
                    openFaq === index ? 'bg-amber-500 text-white rotate-180' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <i className="ri-arrow-down-s-line text-base"></i>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-5">
                    <div className="pl-10 text-sm text-gray-600 leading-relaxed border-l-2 border-amber-200 ml-3.5">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-10 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">{t('admission_still_questions')}</h3>
              <p className="text-teal-100 text-sm">{t('admission_still_questions_sub')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="tel:+85563761606"
                className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-50 transition-colors whitespace-nowrap cursor-pointer text-sm"
              >
                <i className="ri-phone-line"></i>
                {t('call_us')}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap cursor-pointer text-sm"
              >
                <i className="ri-mail-send-line"></i>
                {t('send_a_message')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Enrollment Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center overflow-y-auto py-8 px-4 print:static print:bg-transparent print:p-0 print:block">
          <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl print:shadow-none print:rounded-none print:max-w-none">
            {/* Modal Header - hidden on print */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-gray-200 print:hidden">
              <h2 className="text-xl font-bold text-gray-900">Enrollment Application Form</h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
                >
                  <i className="ri-printer-line"></i>
                  Print / Save as PDF
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-gray-600 text-xl"></i>
                </button>
              </div>
            </div>

            {/* Printable Form Content */}
            <div className="p-8 space-y-7">
              {/* School Header */}
              <div className="text-center border-b-2 border-teal-600 pb-6">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <img
                    src="https://public.readdy.ai/ai/img_res/1c61b234-48f8-4b5d-b3cf-a0f16a0e7d0c.png"
                    alt="SGIS Logo"
                    className="w-16 h-16 object-contain"
                  />
                  <div className="text-left">
                    <h1 className="text-2xl font-bold text-teal-800">SGIS International School</h1>
                    <p className="text-sm text-gray-600">93 Thmor Meas Road, Sala Kamreuk, Siem Reap, Cambodia</p>
                    <p className="text-sm text-gray-600">Tel: +855 (0) 99 590 033 &nbsp;|&nbsp; Email: sgis.international14@gmail.com</p>
                  </div>
                </div>
                <div className="inline-block bg-teal-700 text-white font-bold text-lg px-8 py-2 rounded-lg tracking-wide mt-2">
                  STUDENT ENROLLMENT APPLICATION FORM
                </div>
                <p className="text-xs text-gray-500 mt-3">Academic Year: 2025 – 2026 &nbsp;|&nbsp; Please complete all sections in BLOCK CAPITALS</p>
              </div>

              {/* Section A: Student Information */}
              <div>
                <div className="bg-teal-600 text-white font-bold text-sm px-4 py-2 rounded-t-lg tracking-wide">
                  SECTION A — STUDENT INFORMATION
                </div>
                <div className="border border-t-0 border-gray-300 rounded-b-lg p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Full Legal Name (as on passport) *</label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Preferred Name / Nickname</label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Date of Birth *</label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Gender *</label>
                      <div className="flex items-center gap-5 mt-2">
                        <span className="flex items-center gap-1.5 text-xs text-gray-700"><span className="w-4 h-4 border-2 border-gray-500 rounded-sm inline-block"></span>Male</span>
                        <span className="flex items-center gap-1.5 text-xs text-gray-700"><span className="w-4 h-4 border-2 border-gray-500 rounded-sm inline-block"></span>Female</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Nationality *</label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Passport / ID Number</label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Religion (optional)</label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Applying for Grade / Year *</label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Proposed Start Date *</label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">ESL Support Required?</label>
                      <div className="flex items-center gap-5 mt-2">
                        <span className="flex items-center gap-1.5 text-xs text-gray-700"><span className="w-4 h-4 border-2 border-gray-500 rounded-sm inline-block"></span>Yes</span>
                        <span className="flex items-center gap-1.5 text-xs text-gray-700"><span className="w-4 h-4 border-2 border-gray-500 rounded-sm inline-block"></span>No</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">First Language(s) spoken at home</label>
                    <div className="border-b-2 border-gray-400 h-8"></div>
                  </div>
                </div>
              </div>

              {/* Section B: Parent / Guardian Information */}
              <div>
                <div className="bg-amber-600 text-white font-bold text-sm px-4 py-2 rounded-t-lg tracking-wide">
                  SECTION B — PARENT / GUARDIAN INFORMATION
                </div>
                <div className="border border-t-0 border-gray-300 rounded-b-lg p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <p className="text-xs font-bold text-gray-800 uppercase">Father / Guardian 1</p>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
                        <div className="border-b-2 border-gray-400 h-7"></div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Nationality</label>
                        <div className="border-b-2 border-gray-400 h-7"></div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Occupation</label>
                        <div className="border-b-2 border-gray-400 h-7"></div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number *</label>
                        <div className="border-b-2 border-gray-400 h-7"></div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address *</label>
                        <div className="border-b-2 border-gray-400 h-7"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-xs font-bold text-gray-800 uppercase">Mother / Guardian 2</p>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name</label>
                        <div className="border-b-2 border-gray-400 h-7"></div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Nationality</label>
                        <div className="border-b-2 border-gray-400 h-7"></div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Occupation</label>
                        <div className="border-b-2 border-gray-400 h-7"></div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
                        <div className="border-b-2 border-gray-400 h-7"></div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address</label>
                        <div className="border-b-2 border-gray-400 h-7"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Home Address *</label>
                    <div className="border-b-2 border-gray-400 h-7 mb-2"></div>
                    <div className="border-b-2 border-gray-400 h-7"></div>
                  </div>
                </div>
              </div>

              {/* Section C: Previous School */}
              <div>
                <div className="bg-teal-600 text-white font-bold text-sm px-4 py-2 rounded-t-lg tracking-wide">
                  SECTION C — PREVIOUS SCHOOL INFORMATION
                </div>
                <div className="border border-t-0 border-gray-300 rounded-b-lg p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Previous School Name</label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Country / City</label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Last Grade / Year Attended</label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Last Academic Year</label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Reason for Leaving Previous School</label>
                    <div className="border-b-2 border-gray-400 h-8"></div>
                  </div>
                </div>
              </div>

              {/* Section D: Health & Emergency */}
              <div>
                <div className="bg-amber-600 text-white font-bold text-sm px-4 py-2 rounded-t-lg tracking-wide">
                  SECTION D — HEALTH &amp; EMERGENCY CONTACT
                </div>
                <div className="border border-t-0 border-gray-300 rounded-b-lg p-5 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Any medical conditions, allergies or special needs the school should be aware of?</label>
                    <div className="border-b-2 border-gray-400 h-8 mb-2"></div>
                    <div className="border-b-2 border-gray-400 h-8"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Emergency Contact Name *</label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Relationship to Student *</label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Emergency Phone Number *</label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section E: Declaration & Signature */}
              <div>
                <div className="bg-gray-700 text-white font-bold text-sm px-4 py-2 rounded-t-lg tracking-wide">
                  SECTION E — DECLARATION &amp; SIGNATURE
                </div>
                <div className="border border-t-0 border-gray-300 rounded-b-lg p-5 space-y-4">
                  <p className="text-xs text-gray-700 leading-relaxed">
                    I/We confirm that the information provided in this application is accurate and complete. I/We agree to abide by SGIS school policies, rules and regulations, and understand that provision of false information may result in withdrawal of the application or enrollment.
                  </p>
                  <div className="grid grid-cols-2 gap-8 mt-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Parent / Guardian Signature</label>
                      <div className="border-b-2 border-gray-400 h-12"></div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Date</label>
                      <div className="border-b-2 border-gray-400 h-12"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                <p className="text-xs text-amber-800 font-medium">
                  Please bring this completed form along with all required documents to the SGIS Admissions Office.
                </p>
                <p className="text-xs text-amber-700 mt-1">
                  93 Thmor Meas Road, Sala Kamreuk, Siem Reap &nbsp;|&nbsp; sgis.international14@gmail.com &nbsp;|&nbsp; +855 (0) 99 590 033
                </p>
              </div>
            </div>

            {/* Bottom Print Button - hidden on print */}
            <div className="px-8 pb-6 flex justify-center print:hidden">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-printer-line text-lg"></i>
                Print / Save as PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
