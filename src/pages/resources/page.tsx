import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollReveal from '../../components/base/ScrollReveal';

interface ResourceDoc {
  id: string;
  icon: string;
  titleEn: string;
  titleKm: string;
  descEn: string;
  descKm: string;
  category: string;
  categoryKm: string;
  pages: number;
  updated: string;
  color: string;
  iconBg: string;
  previewContent: PreviewSection[];
}

interface PreviewSection {
  heading: string;
  items: string[];
}

const resources: ResourceDoc[] = [
  {
    id: 'handbook',
    icon: 'ri-book-2-line',
    titleEn: 'SGIS School Handbook 2025–2026',
    titleKm: 'សៀវភៅណែនាំសាលា SGIS ២០២៥–២០២៦',
    descEn: 'The complete guide to school policies, rules, expectations, and daily procedures for students and families.',
    descKm: 'មគ្គុទ្ទេសក៍ពេញលេញអំពីគោលការណ៍ ច្បាប់ និងនីតិវិធីប្រចាំថ្ងៃសម្រាប់សិស្ស និងគ្រួសារ។',
    category: 'General',
    categoryKm: 'ទូទៅ',
    pages: 28,
    updated: 'August 2025',
    color: 'text-teal-700',
    iconBg: 'bg-teal-100',
    previewContent: [
      { heading: 'School Hours & Attendance', items: ['School gates open at 7:30 AM', 'Classes begin at 8:00 AM', 'School ends at 3:30 PM (Primary), 4:00 PM (Secondary)', 'Attendance is compulsory for all enrolled students', 'Parents must notify school before 8:00 AM for absences'] },
      { heading: 'Behaviour & Discipline Policy', items: ['SGIS follows a Restorative Practice approach', 'Three-step behaviour system: Warning → Reflection → Parent Contact', 'Zero tolerance for bullying, discrimination, or harassment', 'Mobile phones are not permitted during class hours'] },
      { heading: 'Assessment & Reporting', items: ['Two formal reports per year (December & June)', 'Parent-Teacher Meetings held twice per academic year', 'Continuous assessment through classwork, projects, and tests', 'Cambridge benchmark assessments for Years 6, 9, and 12'] },
    ],
  },
  {
    id: 'supply-list',
    icon: 'ri-list-check-2',
    titleEn: 'Student Supply List 2025–2026',
    titleKm: 'បញ្ជីសម្ភារៈសិស្ស ២០២៥–២០២៦',
    descEn: 'Required stationery and school supplies for each year group from Nursery through Year 12.',
    descKm: 'ឧបករណ៍សិក្សា និងសម្ភារៈចាំបាច់សម្រាប់គ្រប់ថ្នាក់ ពី Nursery រហូតដល់ Year 12។',
    category: 'Academic',
    categoryKm: 'ការសិក្សា',
    pages: 4,
    updated: 'August 2025',
    color: 'text-amber-700',
    iconBg: 'bg-amber-100',
    previewContent: [
      { heading: 'Early Years (Nursery – Reception)', items: ['Backpack (medium size, labelled)', 'Water bottle with name', 'Change of clothing in named bag', 'Sunhat for outdoor play', 'Art smock / old T-shirt for creative sessions'] },
      { heading: 'Primary (Years 1–6)', items: ['Pencil case with pencils, ruler, eraser, sharpener', 'Set of coloured pencils (12 colours)', 'A4 notebook x4 (labelled per subject)', 'Glue stick and scissors', 'Calculator (scientific, from Year 5)'] },
      { heading: 'Secondary (Years 7–12)', items: ['Scientific calculator (Casio fx-991)', 'Ring binders x5 (one per subject)', 'USB flash drive (8GB minimum)', 'Highlighters and sticky notes', 'English dictionary (Oxford or Collins)'] },
    ],
  },
  {
    id: 'uniform',
    icon: 'ri-t-shirt-line',
    titleEn: 'Uniform Guide & Dress Code',
    titleKm: 'មគ្គុទ្ទេសក៍ព្រំបិទ និងការស្លៀកពាក់',
    descEn: 'Full uniform requirements with descriptions, images, and information on where to purchase.',
    descKm: 'តម្រូវការព្រំបិទពេញលេញ រួមទាំងការពិពណ៌នា និងកន្លែងទិញ។',
    category: 'General',
    categoryKm: 'ទូទៅ',
    pages: 6,
    updated: 'August 2025',
    color: 'text-rose-700',
    iconBg: 'bg-rose-100',
    previewContent: [
      { heading: 'Daily Uniform (All Students)', items: ['White SGIS polo shirt with embroidered logo', 'Navy blue trousers or skirt (below the knee)', 'White or navy socks (no bright colours)', 'Black leather school shoes (closed toe)', 'SGIS school bag (branded or plain navy/black)'] },
      { heading: 'PE & Sports Uniform', items: ['SGIS sports T-shirt (colour depends on house)', 'Navy blue sports shorts or tracksuit bottoms', 'White sports socks', 'Training shoes (any colour, must be clean)'] },
      { heading: 'Where to Purchase', items: ['SGIS School Shop — open Mon–Fri 7:30–9:00 AM and 2:30–4:30 PM', 'Orders can also be placed by emailing admin@sgis-siemreap.edu.kh', 'Logo embroidery available for plain shirts purchased elsewhere', 'Second-hand uniform exchange board available at reception'] },
    ],
  },
  {
    id: 'calendar-pdf',
    icon: 'ri-calendar-2-line',
    titleEn: 'Academic Calendar 2025–2026 (PDF)',
    titleKm: 'ប្រតិទិនសិក្សា ២០២៥–២០២៦ (PDF)',
    descEn: 'Printable academic calendar with all key dates, holidays, school events, and exam periods.',
    descKm: 'ប្រតិទិនសិក្សាសម្រាប់បោះពុម្ព ដែលមានកាលបរិច្ឆេទ វិស្សមកាល ព្រឹត្តិការណ៍ និងការប្រឡង។',
    category: 'Calendar',
    categoryKm: 'ប្រតិទិន',
    pages: 2,
    updated: 'August 2025',
    color: 'text-teal-700',
    iconBg: 'bg-teal-100',
    previewContent: [
      { heading: 'Term Dates', items: ['Term 1: August 11 – December 19, 2025', 'Term 2: January 5 – March 28, 2026', 'Term 3: April 20 – June 26, 2026'] },
      { heading: 'Key Holidays', items: ['Mid-Term Break: October 20–24, 2025', 'Christmas Break: December 20, 2025 – January 4, 2026', 'Khmer New Year: April 13–17, 2026', 'Summer Holiday: July 1 – August 9, 2026'] },
      { heading: 'Important Events', items: ['Cultural Day: November 22, 2025', 'Sports Day: December 12, 2025', 'Parent-Teacher Meeting: November 22, 2025', 'Graduation Ceremony: June 25, 2026'] },
    ],
  },
  {
    id: 'fee-schedule',
    icon: 'ri-money-dollar-circle-line',
    titleEn: 'Fee Schedule & Payment Policy',
    titleKm: 'ពន្ធ​​ ​ ​​​​​​​​ ​​​​ ​ ​ ​ ​ ​ ​​​​ ​ ​ ​ ​ ​ ​ ​ ​​ ​ ​ ​ ​​ ​ ​​​ ​ ​​​​​ ​ ​ ​ ​ ​ ​​ ​​​ ​ ​ ​ ​​ ​​​ ​ ​ ​ ​​​​​​​ ​ ​ ​ ​ ​ ​ ​ ​​ ​​​ ​ ​ ​ ​ ​​ ​ ​ ​ ​ ​ ​​ ​ ​ ​ ​​​ ​ ​ ​ ​​​​​​ ​ ​ ​ ​ ​ ​​ ​ ​ ​ ​​ ​ ​ ​ ​ ​ ​​​ ​ ​ ​ ​ ​ ​​ ​ ​​',
    titleKm: 'ថ្លៃ​ ​ ​​​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​​ ​ ​ ​​​​​​ ​ ​​​​​ ​ ​ ​ ​ ​ ​​ ​ ​​ ​ ​ ​ ​ ​ ​​ ​ ​ ​ ​ ​ ​​ ​ ​ ​ ​​​​ ​ ​​​ ​​ ​​​​​ ​ ​ ​ ​ ​​ ​​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​​​​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​',
    titleKm: 'ថ្លៃសិក្សា & គោលការណ៍បង់ប្រាក់',
    descEn: 'Complete breakdown of tuition fees, registration fees, and optional extras with payment schedule.',
    descKm: 'ព័ត៌មានលម្អិតអំពីថ្លៃ ​ ​ ​​​​ ​ ​ ​ ​ ​ ​​ ​ ​ ​ ​ ​​​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​​ ​​ ​ ​ ​ ​',
    descKm: 'ព័ត៌មានលម្អិតអំពីថ្លៃសិក្សា ថ្លៃចុះឈ្មោះ និងកាលវិភាគបង់ប្រាក់។',
    category: 'Finance',
    categoryKm: 'ហិរញ្ញវត្ថុ',
    pages: 3,
    updated: 'August 2025',
    color: 'text-green-700',
    iconBg: 'bg-green-100',
    previewContent: [
      { heading: 'Annual Tuition Fees (USD)', items: ['Nursery & Pre-K (Age 2–4): $1,800/year', 'Reception & Year 1-2 (Age 5–7): $2,200/year', 'Years 3–6 (Age 8–11): $2,600/year', 'Years 7–9 (Age 12–14): $3,000/year', 'Years 10–12 (Age 15–18): $3,400/year'] },
      { heading: 'Additional Fees', items: ['Registration/Enrollment Fee: $150 (one-time, non-refundable)', 'Activity & Materials Fee: $200/year', 'Optional School Lunch: $50/month', 'Optional After-School Care: $80/month'] },
      { heading: 'Payment Schedule', items: ['Annual payment: 5% discount applied', 'Semester payment: Due August and January', 'Monthly payment: Available upon request', 'Payment methods: Cash, bank transfer, Wing, ABA'] },
    ],
  },
  {
    id: 'parent-code',
    icon: 'ri-shield-check-line',
    titleEn: 'Parent Code of Conduct',
    titleKm: 'ក្រមប្រតិបត្តិមាតាបិតា',
    descEn: 'Guidelines for parents and guardians on supporting your child\'s learning and engaging with the school community positively.',
    descKm: 'ការណែនាំ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​',
    descKm: 'ការណែនាំសម្រាប់មាតាបិតា ​ ​ ​​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​',
    descKm: 'ការណែនាំសម្រាប់មាតាបិតា ក្នុងការគាំទ្រការសិក្សា និងចូលរួមក្នុងសហគមន៍សាលា។',
    category: 'Policy',
    categoryKm: 'គោលការណ៍',
    pages: 5,
    updated: 'August 2025',
    color: 'text-indigo-700',
    iconBg: 'bg-indigo-100',
    previewContent: [
      { heading: 'Supporting Your Child at Home', items: ['Ensure your child arrives on time and prepared', 'Encourage daily reading for at least 20 minutes', 'Check the school communication app or newsletter weekly', 'Provide a quiet, dedicated space for homework', 'Praise effort and progress, not just results'] },
      { heading: 'Communication with the School', items: ['Use the school communication app (ClassDojo) for messages', 'Request teacher meetings through the school office', 'Raise concerns promptly and respectfully', 'Volunteer at school events when possible', 'Attend Parent-Teacher Meetings and school events'] },
    ],
  },
  {
    id: 'esl-handbook',
    icon: 'ri-translate-2',
    titleEn: 'ESL Support Programme Guide',
    titleKm: 'មគ្គុទ្ទេសក៍កម្មវិធីជំនួយ ESL',
    descEn: 'Information on our English as a Second Language support programme for non-native English speaking students.',
    descKm: 'ព័ت៌មានអំពីកម្មវិធីជំនួយភាសាអង់គ្លេសសម្រាប់សិស្សដែលភាសាអង់គ្លេសមិនមែនជាភាសាដើម។',
    category: 'Academic',
    categoryKm: 'ការសិក្សា',
    pages: 8,
    updated: 'August 2025',
    color: 'text-orange-700',
    iconBg: 'bg-orange-100',
    previewContent: [
      { heading: 'Who Qualifies for ESL Support?', items: ['All new students undergo a language assessment', 'ESL support provided for students at Beginner, Elementary, and Intermediate levels', 'Support continues until student reaches proficiency', 'No extra fee for ESL sessions (included in tuition)'] },
      { heading: 'Types of ESL Support', items: ['Daily small-group ESL pullout sessions (30–45 minutes)', 'In-class language support in mainstream lessons', 'Home reading programme with graded books', 'Parent workshops on supporting English at home'] },
    ],
  },
  {
    id: 'anti-bullying',
    icon: 'ri-heart-2-line',
    titleEn: 'Anti-Bullying & Safeguarding Policy',
    titleKm: 'គោលការណ៍ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​',
    titleKm: 'គោលការណ៍ប្រឆាំងការខ្ទប់ & ការការពារ',
    descEn: 'Our commitment to creating a safe, respectful, and inclusive environment for every child at SGIS.',
    descKm: 'ការប្តេជ្ញាចិត្តរបស់យើងក្នុងការបង្កើតបរិយាកាសដែលមានសុវត្ថិភាព គោរព និងរួមបញ្ចូលសម្រាប់គ្រប់កុមារ។',
    category: 'Policy',
    categoryKm: 'គោលការណ៍',
    pages: 10,
    updated: 'August 2025',
    color: 'text-rose-700',
    iconBg: 'bg-rose-100',
    previewContent: [
      { heading: 'SGIS Definition of Bullying', items: ['Physical: hitting, pushing, or damaging belongings', 'Verbal: name-calling, teasing, threats, or hurtful comments', 'Social: excluding, spreading rumours, or manipulating relationships', 'Cyberbullying: harmful messages or images via digital means'] },
      { heading: 'Reporting & Response', items: ['Any student, parent, or staff member may report a concern', 'All reports are treated confidentially and taken seriously', 'Investigations are completed within 5 school days', 'Parents of all involved parties are notified', 'Serious incidents are referred to safeguarding officer'] },
    ],
  },
];

export default function ResourcesPage() {
  const { t, i18n } = useTranslation();
  const isKm = i18n.language === 'km';
  const [activeCategory, setActiveCategory] = useState('All');
  const [previewDoc, setPreviewDoc] = useState<ResourceDoc | null>(null);

  const categories = ['All', ...Array.from(new Set(resources.map((r) => r.category)))];

  const filtered = activeCategory === 'All'
    ? resources
    : resources.filter((r) => r.category === activeCategory);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-600 to-amber-700 pt-36 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-6 right-16 w-64 h-64 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-amber-200 text-sm font-semibold uppercase tracking-widest mb-3">SGIS Siem Reap</p>
          <h1 className="text-5xl font-bold text-white mb-4">{t('resources_title')}</h1>
          <p className="text-amber-100 text-lg max-w-2xl mx-auto">{t('resources_subtitle')}</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-600 text-white'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                {isKm
                  ? resources.find((r) => r.category === cat)?.categoryKm || 'ទាំងអស់'
                  : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((doc, idx) => (
              <ScrollReveal key={doc.id} delay={idx * 50}>
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
                  {/* Card top color strip */}
                  <div className={`h-1.5 w-full ${doc.iconBg.replace('bg-', 'bg-').replace('-100', '-400')}`}></div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className={`w-12 h-12 flex items-center justify-center ${doc.iconBg} rounded-xl mb-4 flex-shrink-0`}>
                      <i className={`${doc.icon} text-2xl ${doc.color}`}></i>
                    </div>
                    <div className="mb-3 flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${doc.iconBg} ${doc.color}`}>
                        {isKm ? doc.categoryKm : doc.category}
                      </span>
                      <span className="text-xs text-gray-400">{doc.pages}p</span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 leading-snug mb-2 flex-1">
                      {isKm ? doc.titleKm : doc.titleEn}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-5">
                      {isKm ? doc.descKm : doc.descEn}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <span>{doc.pages} pages</span>
                      <span>Updated {doc.updated}</span>
                    </div>
                    <button
                      onClick={() => setPreviewDoc(doc)}
                      className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${doc.iconBg} ${doc.color} hover:opacity-80`}
                    >
                      <i className="ri-eye-line text-base"></i>
                      {t('resources_download_btn')}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Info banner */}
          <ScrollReveal className="max-w-6xl mx-auto mt-12">
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-xl flex-shrink-0">
                <i className="ri-information-line text-2xl text-teal-600"></i>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-teal-800 mb-1">
                  {isKm ? 'ត្រូវការជំនួយ?' : 'Need a document you can\'t find here?'}
                </h3>
                <p className="text-sm text-teal-700">
                  {isKm
                    ? 'ទំនាក់ទំនងក្រុមហ៊ុនរបស់យើងតាមរយៈ Email ឬ Call ។ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​'
                    : 'Contact our admin team or drop by the school office. We\'re happy to provide any additional documents, forms, or information you need.'}
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer flex-shrink-0 text-sm"
              >
                <i className="ri-mail-line"></i>
                {t('contact_us')}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Preview Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setPreviewDoc(null)}>
          <div
            className="bg-white w-full max-w-2xl max-h-[85vh] rounded-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-10 h-10 flex items-center justify-center ${previewDoc.iconBg} rounded-lg flex-shrink-0`}>
                  <i className={`${previewDoc.icon} text-lg ${previewDoc.color}`}></i>
                </div>
                <div className="min-w-0">
                  <h2 className="font-bold text-gray-900 text-sm leading-snug truncate">
                    {isKm ? previewDoc.titleKm : previewDoc.titleEn}
                  </h2>
                  <p className="text-xs text-gray-400">{previewDoc.pages} pages · Updated {previewDoc.updated}</p>
                </div>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 cursor-pointer flex-shrink-0 ml-3"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto flex-1 p-6">
              <div className="space-y-6">
                {previewDoc.previewContent.map((section, si) => (
                  <div key={si}>
                    <h3 className={`text-sm font-bold mb-3 ${previewDoc.color}`}>{section.heading}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, ii) => (
                        <li key={ii} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i className={`ri-checkbox-circle-fill text-sm ${previewDoc.color}`}></i>
                          </div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <i className="ri-file-pdf-line text-3xl text-gray-400 mb-2 block"></i>
                  <p className="text-sm text-gray-500">
                    {isKm
                      ? 'ចុចប៊ូតុង "Print / Save as PDF" ដើម្បីទទួលបានឯកសារពេញ'
                      : 'Click "Print / Save as PDF" below to get the full document. Use your browser\'s Print > Save as PDF option.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-gray-100 flex gap-3">
              <button
                onClick={() => setPreviewDoc(null)}
                className="flex-1 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                {t('close')}
              </button>
              <button
                onClick={handlePrint}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-colors cursor-pointer whitespace-nowrap text-white ${previewDoc.color.replace('text-', 'bg-').replace('-700', '-600')} hover:opacity-90`}
              >
                <i className="ri-printer-line text-base"></i>
                {isKm ? 'Print / Save as PDF' : 'Print / Save as PDF'}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
