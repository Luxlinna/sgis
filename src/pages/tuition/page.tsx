import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollReveal from '../../components/base/ScrollReveal';

interface TuitionRow {
  class: string;
  stage: string;
  age: string;
  adminFee: string;
  schoolFee: string;
  total: string;
  highlight?: boolean;
  rowSpanStage?: number;
  hideStage?: boolean;
}

const tuitionData: TuitionRow[] = [
  { class: 'Nursery',           stage: 'Early Years',         age: '2–3',   adminFee: '$150', schoolFee: '$1,500', total: '$1,650' },
  { class: 'Reception Class 1', stage: 'Early Years',         age: '3–4',   adminFee: '$180', schoolFee: '$1,800', total: '$1,980' },
  { class: 'Reception Class 2', stage: 'Early Years',         age: '4–5',   adminFee: '$180', schoolFee: '$1,800', total: '$1,980' },
  { class: 'Year 1',            stage: 'KS 1',                age: '6–7',   adminFee: '$250', schoolFee: '$2,500', total: '$2,750' },
  { class: 'Year 2',            stage: 'KS 1',                age: '7–8',   adminFee: '$250', schoolFee: '$2,500', total: '$2,750' },
  { class: 'Year 3',            stage: 'KS 2',                age: '8–9',   adminFee: '$250', schoolFee: '$2,500', total: '$2,750' },
  { class: 'Year 4',            stage: 'KS 2',                age: '9–10',  adminFee: '$250', schoolFee: '$2,500', total: '$2,750' },
  { class: 'Year 5',            stage: 'KS 2',                age: '10–11', adminFee: '$250', schoolFee: '$2,500', total: '$2,750' },
  { class: 'Year 6',            stage: 'KS 2',                age: '11–12', adminFee: '$250', schoolFee: '$2,500', total: '$2,750' },
  { class: 'Year 7',            stage: 'Middle School (KS3)', age: '12–13', adminFee: '$250', schoolFee: '$2,500', total: '$2,750' },
  { class: 'Year 8',            stage: 'Middle School (KS3)', age: '13–14', adminFee: '$250', schoolFee: '$2,500', total: '$2,750' },
  { class: 'Year 9–12',         stage: 'High School',         age: '14–18', adminFee: '$460', schoolFee: '$4,600', total: '$5,060', highlight: true },
];

const stages: Record<string, { color: string; bg: string }> = {
  'Early Years':          { color: 'text-amber-700',  bg: 'bg-amber-50'  },
  'KS 1':                 { color: 'text-teal-700',   bg: 'bg-teal-50'   },
  'KS 2':                 { color: 'text-teal-700',   bg: 'bg-teal-50'   },
  'Middle School (KS3)':  { color: 'text-orange-700', bg: 'bg-orange-50' },
  'High School':          { color: 'text-red-700',    bg: 'bg-red-50'    },
};

export default function TuitionPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Sticky Quick Links */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
          <div className="bg-teal-600 px-4 py-2.5">
            <p className="text-white text-xs font-bold uppercase tracking-wide text-center">Quick Links</p>
          </div>
          <div className="flex flex-col p-2 gap-1.5">
            <Link
              to="/contact"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <div className="w-7 h-7 flex items-center justify-center bg-teal-100 rounded-lg flex-shrink-0">
                <i className="ri-mail-line text-teal-600 text-sm"></i>
              </div>
              Contact Us
            </Link>
            <Link
              to="/admission"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <div className="w-7 h-7 flex items-center justify-center bg-amber-100 rounded-lg flex-shrink-0">
                <i className="ri-file-text-line text-amber-600 text-sm"></i>
              </div>
              Admission
            </Link>
            <Link
              to="/schedule"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <div className="w-7 h-7 flex items-center justify-center bg-green-100 rounded-lg flex-shrink-0">
                <i className="ri-calendar-line text-green-600 text-sm"></i>
              </div>
              Calendar
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20school%20finance%20and%20tuition%20concept%2C%20organized%20desk%20with%20school%20documents%20and%20calculator%2C%20financial%20planning%20for%20education%2C%20clean%20modern%20office%20workspace%2C%20notebooks%20with%20educational%20budget%20information%2C%20warm%20natural%20lighting%2C%20simple%20background&width=1920&height=500&seq=tuition-hero-001&orientation=landscape"
            alt="Tuition Fees"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            {t('tuition_title')}
          </h1>
          <p className="text-xl text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            Academic Year 2025 – 2026 &nbsp;&bull;&nbsp; August 2025 – June 2026
          </p>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('tuition_fee_summary_title')}</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('tuition_fee_summary_sub')}
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-7 text-center" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
              <div className="w-14 h-14 flex items-center justify-center bg-amber-100 rounded-xl mx-auto mb-4">
                <i className="ri-seedling-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Early Years</h3>
              <p className="text-3xl font-bold text-amber-600 mb-1">$1,650</p>
              <p className="text-sm text-gray-500 mb-1">to $1,980 / year</p>
              <p className="text-xs text-gray-400">Ages 2–5 · Nursery – Reception</p>
            </div>
            <div className="bg-white rounded-xl p-7 text-center" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
              <div className="w-14 h-14 flex items-center justify-center bg-teal-100 rounded-xl mx-auto mb-4">
                <i className="ri-book-open-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Primary &amp; Middle</h3>
              <p className="text-3xl font-bold text-teal-600 mb-1">$2,750</p>
              <p className="text-sm text-gray-500 mb-1">per year</p>
              <p className="text-xs text-gray-400">Ages 6–14 · Years 1–8</p>
            </div>
            <div className="bg-white rounded-xl p-7 text-center" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
              <div className="w-14 h-14 flex items-center justify-center bg-orange-100 rounded-xl mx-auto mb-4">
                <i className="ri-graduation-cap-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">High School</h3>
              <p className="text-3xl font-bold text-orange-600 mb-1">$5,060</p>
              <p className="text-sm text-gray-500 mb-1">per year</p>
              <p className="text-xs text-gray-400">Ages 14–18 · Years 9–12</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Fee Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('tuition_full_table_title')}</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
            <p className="text-gray-600">August 2025 – June 2026</p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <div className="rounded-xl overflow-hidden border border-gray-200 min-w-[640px]">
              {/* Table Header */}
              <div className="grid grid-cols-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-sm font-semibold">
                <div className="px-5 py-4">Class / Year</div>
                <div className="px-5 py-4">Stage</div>
                <div className="px-5 py-4 text-center">Age</div>
                <div className="px-5 py-4 text-right">Admin Fee *</div>
                <div className="px-5 py-4 text-right">School Fee</div>
                <div className="px-5 py-4 text-right">Eng. Curriculum Total</div>
              </div>

              {/* Table Rows */}
              {tuitionData.map((row, idx) => {
                const stageStyle = stages[row.stage] || { color: 'text-gray-700', bg: 'bg-white' };
                return (
                  <div
                    key={idx}
                    className={`grid grid-cols-6 border-t border-gray-100 text-sm transition-colors hover:bg-amber-50 ${
                      row.highlight ? 'bg-orange-50/70' : idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <div className="px-5 py-3.5 font-semibold text-gray-900">{row.class}</div>
                    <div className="px-5 py-3.5">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${stageStyle.color} ${stageStyle.bg}`}>
                        {row.stage}
                      </span>
                    </div>
                    <div className="px-5 py-3.5 text-center text-gray-700">{row.age}</div>
                    <div className="px-5 py-3.5 text-right text-gray-600">{row.adminFee}</div>
                    <div className="px-5 py-3.5 text-right text-gray-700 font-medium">{row.schoolFee}</div>
                    <div className={`px-5 py-3.5 text-right font-bold ${row.highlight ? 'text-orange-600' : 'text-teal-700'}`}>
                      {row.total}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note below table */}
            <p className="text-xs text-gray-500 mt-3 px-1 italic">
              * Administration Fee covers Registration, Stationery, and other enrollment costs.
            </p>
          </div>

          {/* Notes */}
          <div className="max-w-5xl mx-auto mt-8 space-y-4">
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                <i className="ri-information-line text-amber-500 text-base"></i>
                {t('tuition_notes_title')}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="ri-asterisk text-amber-500 text-xs mt-1.5 flex-shrink-0"></i>
                  <span>Amount of Enrollment Fee depends on age on July 31 in year of joining the school.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-asterisk text-amber-500 text-xs mt-1.5 flex-shrink-0"></i>
                  <span>Fees paid in advance are refundable 100% only up to 3 days before each school year starts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-asterisk text-amber-500 text-xs mt-1.5 flex-shrink-0"></i>
                  <span>EXCLUDES Administration Fees which are non-refundable.</span>
                </li>
              </ul>
            </div>

            <div className="bg-teal-50 border border-teal-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                <i className="ri-add-circle-line text-teal-600 text-base"></i>
                {t('tuition_extras_title')}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-teal-500 text-xs mt-1 flex-shrink-0"></i>
                  <span><strong>Lunch:</strong> Provided daily for students at a fee of $50 per month.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-teal-500 text-xs mt-1 flex-shrink-0"></i>
                  <span><strong>ESL (English as 2nd Language):</strong> Can be set up for non-English speakers from Reception 2 onwards (subject to test). Fees will be negotiated based on students&apos; grade level and specific needs.</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-sm text-red-800">
              <div className="flex items-start gap-2">
                <i className="ri-alert-line text-red-500 text-base flex-shrink-0 mt-0.5"></i>
                <p>NOTE: If government law enforces Value Added Tax (VAT) to be paid on school services, it may be required to add this to your invoice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('tuition_payment_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-4">
                  <i className="ri-calendar-event-line text-2xl text-amber-600"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{t('tuition_quarterly_title')}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  School fees are paid quarterly. Fee payment deadlines are communicated in the school calendar. Please pay on time to avoid disruption to your child&apos;s enrollment.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg mb-4">
                  <i className="ri-bank-line text-2xl text-teal-600"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{t('tuition_payment_methods_title')}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Payments can be made in cash or bank transfer at the school office. Please collect a receipt for every payment made. Contact us for bank transfer details.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mb-4">
                  <i className="ri-heart-line text-2xl text-green-600"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{t('tuition_scholarships_title')}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  SGIS offers merit-based scholarships and financial assistance for deserving students. Contact our admissions office to learn more about available opportunities.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mb-4">
                  <i className="ri-question-answer-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{t('tuition_have_questions')}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  For any fee-related questions, payment plans, or financial counseling, please contact our school office directly. We&apos;re happy to assist your family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('tuition_cta_title')}</h2>
          <p className="text-amber-50 mb-8 max-w-2xl mx-auto">
            {t('tuition_cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-amber-700 font-semibold px-7 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-mail-line text-lg"></i>
              {t('contact_admissions')}
            </Link>
            <Link to="/admission" className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-7 py-3 rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-file-text-line text-lg"></i>
              {t('admission_process_title')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
