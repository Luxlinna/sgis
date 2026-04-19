import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

type EventType = 'holiday' | 'school-start' | 'fee' | 'test' | 'staff' | 'summer' | 'special';

interface CalendarEvent {
  date: string;
  description: string;
  type: EventType;
}

interface MonthData {
  month: string;
  year: number;
  schoolDays: number | null;
  saturdays: number | null;
  semester: string;
  events: CalendarEvent[];
}

const calendarMonths: MonthData[] = [
  {
    month: 'July',
    year: 2025,
    schoolDays: null,
    saturdays: null,
    semester: 'Summer',
    events: [
      { date: '01–31 Jul', description: 'Summer School Program', type: 'summer' },
    ],
  },
  {
    month: 'August',
    year: 2025,
    schoolDays: 15,
    saturdays: 3,
    semester: '1st Semester',
    events: [
      { date: '01–09 Aug', description: 'Staff Preparation Days', type: 'staff' },
      { date: '11 Aug', description: 'School Starts — 1st Quarter Begins', type: 'school-start' },
      { date: '11–16 Aug', description: '1st Quarter Starts', type: 'school-start' },
    ],
  },
  {
    month: 'September',
    year: 2025,
    schoolDays: 19,
    saturdays: 4,
    semester: '1st Semester',
    events: [
      { date: '26–30 Sept', description: 'Pchum Ben Holiday', type: 'holiday' },
    ],
  },
  {
    month: 'October',
    year: 2025,
    schoolDays: 22,
    saturdays: 4,
    semester: '1st Semester',
    events: [
      { date: '29 Oct', description: "King's Coronation Day", type: 'holiday' },
    ],
  },
  {
    month: 'November',
    year: 2025,
    schoolDays: 15,
    saturdays: 4,
    semester: '1st Semester',
    events: [
      { date: '03–08 Nov', description: 'Water Festival Holiday', type: 'holiday' },
      { date: '10–15 Nov', description: '2nd Quarter Fee Due', type: 'fee' },
    ],
  },
  {
    month: 'December',
    year: 2025,
    schoolDays: 15,
    saturdays: 3,
    semester: '1st Semester',
    events: [
      { date: '19 Dec', description: 'School Closes — End of 1st Semester', type: 'school-start' },
      { date: '22 Dec – 04 Jan', description: 'Christmas & New Year Holiday', type: 'holiday' },
    ],
  },
  {
    month: 'January',
    year: 2026,
    schoolDays: 15,
    saturdays: 4,
    semester: '2nd Semester',
    events: [
      { date: '04 Jan', description: 'Christmas Holiday Ends', type: 'holiday' },
      { date: '07 Jan', description: 'Victory over Genocide Day', type: 'holiday' },
      { date: '05 Jan', description: '2nd Semester Begins', type: 'school-start' },
      { date: '19–24 Jan', description: '1st Semester Tests', type: 'test' },
    ],
  },
  {
    month: 'February',
    year: 2026,
    schoolDays: 20,
    saturdays: 4,
    semester: '2nd Semester',
    events: [
      { date: '09–14 Feb', description: '3rd Quarter Begins', type: 'school-start' },
      { date: '09–14 Feb', description: '2nd Semester Fee Due', type: 'fee' },
    ],
  },
  {
    month: 'March',
    year: 2026,
    schoolDays: 22,
    saturdays: 4,
    semester: '2nd Semester',
    events: [
      { date: '08 Mar', description: "International Women's Day", type: 'special' },
    ],
  },
  {
    month: 'April',
    year: 2026,
    schoolDays: 17,
    saturdays: 3,
    semester: '2nd Semester',
    events: [
      { date: '13–18 Apr', description: 'Khmer New Year Holiday', type: 'holiday' },
    ],
  },
  {
    month: 'May',
    year: 2026,
    schoolDays: 19,
    saturdays: 4,
    semester: '2nd Semester',
    events: [
      { date: '01–02 May', description: 'Labour Day Holiday', type: 'holiday' },
      { date: '11–16 May', description: '4th Quarter Fee Due', type: 'fee' },
      { date: '14 May', description: 'King Norodom Sihamoni Birthday Holiday', type: 'holiday' },
    ],
  },
  {
    month: 'June',
    year: 2026,
    schoolDays: 18,
    saturdays: 3,
    semester: '2nd Semester',
    events: [
      { date: '01–06 Jun', description: '2nd Semester Final Exams', type: 'test' },
      { date: '26 Jun', description: 'School Closes — End of Academic Year', type: 'school-start' },
    ],
  },
];

const eventConfig: Record<EventType, { label: string; bg: string; text: string; border: string; dot: string; icon: string }> = {
  holiday: {
    label: 'School Holiday',
    bg: 'bg-green-50',
    text: 'text-green-700',
    border: 'border-green-200',
    dot: 'bg-green-500',
    icon: 'ri-leaf-line',
  },
  'school-start': {
    label: 'School Starts / Ends',
    bg: 'bg-yellow-50',
    text: 'text-yellow-700',
    border: 'border-yellow-200',
    dot: 'bg-yellow-500',
    icon: 'ri-flag-line',
  },
  fee: {
    label: 'Quarter / Semester Fee Due',
    bg: 'bg-sky-50',
    text: 'text-sky-700',
    border: 'border-sky-200',
    dot: 'bg-sky-500',
    icon: 'ri-money-dollar-circle-line',
  },
  test: {
    label: 'Exam / Semester Test',
    bg: 'bg-orange-50',
    text: 'text-orange-700',
    border: 'border-orange-200',
    dot: 'bg-orange-500',
    icon: 'ri-file-list-3-line',
  },
  staff: {
    label: "Staff Preparation",
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    border: 'border-purple-200',
    dot: 'bg-purple-500',
    icon: 'ri-group-line',
  },
  summer: {
    label: 'Summer School',
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    dot: 'bg-amber-500',
    icon: 'ri-sun-line',
  },
  special: {
    label: 'Special / Public Day',
    bg: 'bg-rose-50',
    text: 'text-rose-700',
    border: 'border-rose-200',
    dot: 'bg-rose-500',
    icon: 'ri-star-line',
  },
};

const semesterBadge: Record<string, string> = {
  'Summer': 'bg-amber-100 text-amber-700',
  '1st Semester': 'bg-teal-100 text-teal-700',
  '2nd Semester': 'bg-indigo-100 text-indigo-700',
};

const keyDates = [
  { icon: 'ri-flag-2-line',            color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200', label: 'School Opens',              date: 'Aug 11, 2025'       },
  { icon: 'ri-leaf-line',              color: 'text-green-600',  bg: 'bg-green-50',  border: 'border-green-200',  label: 'Pchum Ben Holiday',         date: 'Sep 26–30, 2025'    },
  { icon: 'ri-leaf-line',              color: 'text-green-600',  bg: 'bg-green-50',  border: 'border-green-200',  label: 'Water Festival',            date: 'Nov 3–8, 2025'      },
  { icon: 'ri-money-dollar-circle-line', color: 'text-sky-600',  bg: 'bg-sky-50',    border: 'border-sky-200',    label: '2nd Quarter Fee Due',       date: 'Nov 10–15, 2025'    },
  { icon: 'ri-flag-line',              color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200', label: 'End of 1st Semester',       date: 'Dec 19, 2025'       },
  { icon: 'ri-leaf-line',              color: 'text-green-600',  bg: 'bg-green-50',  border: 'border-green-200',  label: 'Christmas &amp; New Year',  date: 'Dec 22 – Jan 4'     },
  { icon: 'ri-flag-2-line',            color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200', label: '2nd Semester Begins',       date: 'Jan 5, 2026'        },
  { icon: 'ri-file-list-3-line',       color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', label: '1st Semester Tests',        date: 'Jan 19–24, 2026'    },
  { icon: 'ri-money-dollar-circle-line', color: 'text-sky-600',  bg: 'bg-sky-50',    border: 'border-sky-200',    label: '2nd Semester Fee Due',      date: 'Feb 9–14, 2026'     },
  { icon: 'ri-leaf-line',              color: 'text-green-600',  bg: 'bg-green-50',  border: 'border-green-200',  label: 'Khmer New Year',            date: 'Apr 13–18, 2026'    },
  { icon: 'ri-money-dollar-circle-line', color: 'text-sky-600',  bg: 'bg-sky-50',    border: 'border-sky-200',    label: '4th Quarter Fee Due',       date: 'May 11–16, 2026'    },
  { icon: 'ri-file-list-3-line',       color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', label: 'Final Exams',               date: 'Jun 1–6, 2026'      },
  { icon: 'ri-flag-line',              color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200', label: 'School Year Ends',          date: 'Jun 26, 2026'       },
];

export default function SchedulePage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'calendar' | 'timeline'>('calendar');

  const handlePrintPDF = () => {
    window.print();
  };

  const allEvents = calendarMonths.flatMap((m) =>
    m.events.map((e) => ({ ...e, month: `${m.month} ${m.year}`, semester: m.semester }))
  );

  const totalSchoolDays = calendarMonths.reduce((s, m) => s + (m.schoolDays ?? 0), 0);
  const totalSaturdays = calendarMonths.reduce((s, m) => s + (m.saturdays ?? 0), 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-full { max-width: 100% !important; }
          nav, footer { display: none !important; }
          body { font-size: 12px; }
        }
      `}</style>

      <Navbar />

      {/* Sticky Quick Links */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 no-print flex flex-col gap-2">
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
              to="/tuition"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <div className="w-7 h-7 flex items-center justify-center bg-orange-100 rounded-lg flex-shrink-0">
                <i className="ri-money-dollar-circle-line text-orange-600 text-sm"></i>
              </div>
              Tuition Fees
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-72 flex items-center justify-center overflow-hidden mt-20 no-print">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=international%20school%20campus%20in%20cambodia%2C%20students%20walking%20on%20school%20grounds%2C%20lush%20tropical%20trees%2C%20bright%20sunny%20day%2C%20warm%20golden%20light%2C%20modern%20school%20building%20exterior%2C%20clean%20educational%20environment%2C%20southeast%20asia%20school%20atmosphere&width=1920&height=500&seq=sched-hero-v2&orientation=landscape"
            alt="School Schedule"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-6 w-full">
          <p className="text-amber-300 text-sm font-semibold uppercase tracking-widest mb-2">SGIS International School</p>
          <h1 className="text-5xl font-bold text-white mb-3">{t('schedule_title')}</h1>
          <p className="text-white/90 text-lg mb-6">{t('schedule_subtitle')}</p>
          <button
            onClick={handlePrintPDF}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer no-print"
          >
            <i className="ri-download-2-line text-lg"></i>
            {t('schedule_download_pdf')}
          </button>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-teal-700 py-6 no-print">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-3xl font-bold text-white">{totalSchoolDays}</p>
              <p className="text-teal-200 text-sm mt-0.5">{t('schedule_school_days')}</p>
            </div>
            <div className="w-px h-10 bg-teal-500 hidden md:block"></div>
            <div>
              <p className="text-3xl font-bold text-white">{totalSaturdays}</p>
              <p className="text-teal-200 text-sm mt-0.5">{t('schedule_saturdays')}</p>
            </div>
            <div className="w-px h-10 bg-teal-500 hidden md:block"></div>
            <div>
              <p className="text-3xl font-bold text-white">{totalSchoolDays + totalSaturdays}</p>
              <p className="text-teal-200 text-sm mt-0.5">{t('schedule_total_days')}</p>
            </div>
            <div className="w-px h-10 bg-teal-500 hidden md:block"></div>
            <div>
              <p className="text-3xl font-bold text-white">4</p>
              <p className="text-teal-200 text-sm mt-0.5">{t('schedule_quarters')}</p>
            </div>
            <div className="w-px h-10 bg-teal-500 hidden md:block"></div>
            <div>
              <p className="text-sm font-semibold text-white">Aug 11, 2025</p>
              <p className="text-teal-200 text-xs mt-0.5">{t('schedule_school_opens')}</p>
            </div>
            <div className="w-px h-10 bg-teal-500 hidden md:block"></div>
            <div>
              <p className="text-sm font-semibold text-white">Jun 26, 2026</p>
              <p className="text-teal-200 text-xs mt-0.5">{t('schedule_school_closes')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY DATES QUICK REFERENCE ── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header row */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{t('schedule_key_dates_title')}</h2>
                <p className="text-sm text-gray-500 mt-1">{t('schedule_key_dates_sub')}</p>
              </div>
              <button
                onClick={handlePrintPDF}
                className="no-print inline-flex items-center gap-2 border border-teal-500 text-teal-600 hover:bg-teal-50 font-semibold px-5 py-2 rounded-lg text-sm transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-printer-line"></i>
                {t('print_save_pdf')}
              </button>
            </div>

            {/* Key dates grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {keyDates.map((kd, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border ${kd.bg} ${kd.border}`}
                >
                  <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 rounded-lg bg-white/70`}>
                    <i className={`${kd.icon} text-base ${kd.color}`}></i>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 leading-tight" dangerouslySetInnerHTML={{ __html: kd.label }}></p>
                    <p className={`text-sm font-bold leading-tight mt-0.5 ${kd.color}`}>{kd.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Color legend compact */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-gray-500">
              <span className="font-semibold text-gray-600 uppercase tracking-wide text-xs">Legend:</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block"></span>School Start/End</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>Holidays</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block"></span>Fee Due Dates</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block"></span>Exams / Tests</span>
            </div>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 bg-amber-50 border-b border-amber-100 no-print">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mr-2">Legend:</p>
            {Object.entries(eventConfig).map(([key, cfg]) => (
              <div key={key} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${cfg.bg} ${cfg.text} ${cfg.border}`}>
                <span className={`w-2 h-2 rounded-full ${cfg.dot}`}></span>
                {cfg.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Semester Structure */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">{t('schedule_semester_title')}</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 flex items-center justify-center bg-teal-600 rounded-lg">
                  <i className="ri-calendar-line text-white text-base"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{t('schedule_semester_1')}</h3>
                <span className="ml-auto text-xs font-semibold bg-teal-100 text-teal-700 px-2.5 py-1 rounded-full">Aug – Dec 2025</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm py-2 border-b border-teal-100">
                  <span className="text-gray-600">Semester Opens</span>
                  <span className="font-semibold text-gray-900">August 11, 2025</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2 border-b border-teal-100">
                  <span className="text-gray-600">1st Quarter</span>
                  <span className="font-semibold text-gray-900">Aug 11 – Oct 31</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2 border-b border-teal-100">
                  <span className="text-gray-600">2nd Quarter</span>
                  <span className="font-semibold text-gray-900">Nov 3 – Dec 19</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2">
                  <span className="text-gray-600">Semester Closes</span>
                  <span className="font-semibold text-gray-900">December 19, 2025</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 flex items-center justify-center bg-indigo-600 rounded-lg">
                  <i className="ri-calendar-2-line text-white text-base"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{t('schedule_semester_2')}</h3>
                <span className="ml-auto text-xs font-semibold bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full">Jan – Jun 2026</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm py-2 border-b border-indigo-100">
                  <span className="text-gray-600">Semester Opens</span>
                  <span className="font-semibold text-gray-900">January 5, 2026</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2 border-b border-indigo-100">
                  <span className="text-gray-600">3rd Quarter</span>
                  <span className="font-semibold text-gray-900">Feb 9 – Apr 12</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2 border-b border-indigo-100">
                  <span className="text-gray-600">4th Quarter</span>
                  <span className="font-semibold text-gray-900">Apr 20 – Jun 26</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2">
                  <span className="text-gray-600">School Closes</span>
                  <span className="font-semibold text-gray-900">June 26, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toggle Tabs */}
      <section className="sticky top-20 z-30 bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-6 flex items-center justify-center">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab('calendar')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'calendar' ? 'bg-teal-600 text-white' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <i className="ri-calendar-2-line mr-2"></i>{t('schedule_monthly_tab')}
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'timeline' ? 'bg-teal-600 text-white' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <i className="ri-list-check-2 mr-2"></i>{t('schedule_all_events_tab')}
            </button>
          </div>
        </div>
      </section>

      {/* Monthly Calendar View */}
      {activeTab === 'calendar' && (
        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {calendarMonths.map((m) => {
                const cfg = m.schoolDays !== null;
                return (
                  <div key={`${m.month}-${m.year}`} className="bg-white rounded-xl overflow-hidden border border-gray-100">
                    {/* Month Header */}
                    <div className="px-5 py-4 flex items-center justify-between bg-gradient-to-r from-teal-600 to-teal-700">
                      <div>
                        <h3 className="text-base font-bold text-white">{m.month} {m.year}</h3>
                        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mt-1 ${
                          m.semester === 'Summer' ? 'bg-amber-400/30 text-amber-100' :
                          m.semester === '1st Semester' ? 'bg-white/20 text-white' : 'bg-white/20 text-white'
                        }`}>
                          {m.semester}
                        </span>
                      </div>
                      {cfg ? (
                        <div className="text-right">
                          <p className="text-white font-bold text-lg">{m.schoolDays}</p>
                          <p className="text-teal-100 text-xs">school days</p>
                          <p className="text-teal-200 text-xs">{m.saturdays} Sat.</p>
                        </div>
                      ) : (
                        <div className="w-10 h-10 flex items-center justify-center bg-amber-400/20 rounded-lg">
                          <i className="ri-sun-line text-amber-300 text-xl"></i>
                        </div>
                      )}
                    </div>
                    {/* Events */}
                    <div className="p-4 space-y-2">
                      {m.events.length > 0 ? m.events.map((ev, i) => {
                        const c = eventConfig[ev.type];
                        return (
                          <div key={i} className={`flex items-start gap-3 px-3 py-2.5 rounded-lg border ${c.bg} ${c.border}`}>
                            <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <i className={`${c.icon} text-sm ${c.text}`}></i>
                            </div>
                            <div>
                              <p className={`text-xs font-bold ${c.text} mb-0.5`}>{ev.date}</p>
                              <p className={`text-xs leading-snug ${c.text} opacity-90`}>{ev.description}</p>
                            </div>
                          </div>
                        );
                      }) : (
                        <div className="flex items-center gap-2 text-gray-400 py-3">
                          <i className="ri-checkbox-circle-line text-base"></i>
                          <p className="text-xs">{t('schedule_regular_days')}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Timeline / All Events View */}
      {activeTab === 'timeline' && (
        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-3">
                  {allEvents.map((ev, i) => {
                    const c = eventConfig[ev.type];
                    return (
                      <div key={i} className="relative pl-14">
                        <div className={`absolute left-3 top-4 w-4 h-4 rounded-full border-2 border-white ${c.dot}`}></div>
                        <div className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-5 py-3.5 rounded-xl border ${c.bg} ${c.border}`}>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <div className={`w-6 h-6 flex items-center justify-center`}>
                              <i className={`${c.icon} text-base ${c.text}`}></i>
                            </div>
                            <span className={`text-xs font-bold whitespace-nowrap ${c.text}`}>{ev.date}</span>
                          </div>
                          <div className="flex-1">
                            <p className={`text-sm font-semibold ${c.text}`}>{ev.description}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className={`text-xs ${c.text} opacity-70`}>{ev.month}</span>
                              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${semesterBadge[ev.semester]}`}>{ev.semester}</span>
                            </div>
                          </div>
                          <div className={`hidden sm:flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border flex-shrink-0 ${c.bg} ${c.text} ${c.border}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`}></span>
                            {c.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* School Hours */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">{t('schedule_hours_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-xl border border-amber-100 bg-amber-50 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-500 rounded-lg">
                    <i className="ri-seedling-line text-white text-base"></i>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">Early Years (Mon–Fri)</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1.5 border-b border-amber-100">
                    <span className="text-gray-600">Gates Open</span><span className="font-semibold text-gray-900">7:30 AM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-amber-100">
                    <span className="text-gray-600">Classes Begin</span><span className="font-semibold text-gray-900">8:00 AM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-amber-100">
                    <span className="text-gray-600">Lunch Break</span><span className="font-semibold text-gray-900">12:00–1:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-gray-600">School Ends</span><span className="font-semibold text-gray-900">3:30 PM</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-teal-100 bg-teal-50 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-teal-600 rounded-lg">
                    <i className="ri-book-open-line text-white text-base"></i>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">Primary (Mon–Fri)</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1.5 border-b border-teal-100">
                    <span className="text-gray-600">Gates Open</span><span className="font-semibold text-gray-900">7:30 AM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-teal-100">
                    <span className="text-gray-600">Classes Begin</span><span className="font-semibold text-gray-900">7:45 AM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-teal-100">
                    <span className="text-gray-600">Lunch Break</span><span className="font-semibold text-gray-900">12:00–1:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-gray-600">School Ends</span><span className="font-semibold text-gray-900">3:45 PM</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-lg">
                    <i className="ri-graduation-cap-line text-white text-base"></i>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">Secondary (Mon–Fri)</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1.5 border-b border-indigo-100">
                    <span className="text-gray-600">Gates Open</span><span className="font-semibold text-gray-900">7:30 AM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-indigo-100">
                    <span className="text-gray-600">Classes Begin</span><span className="font-semibold text-gray-900">7:45 AM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-indigo-100">
                    <span className="text-gray-600">Lunch Break</span><span className="font-semibold text-gray-900">12:00–1:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-gray-600">School Ends</span><span className="font-semibold text-gray-900">4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 bg-gray-50 rounded-xl px-6 py-4 border border-gray-100 text-center">
              <p className="text-sm text-gray-600">
                <i className="ri-information-line text-teal-500 mr-1.5"></i>
                {t('schedule_saturday_note')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">{t('schedule_cta_title')}</h2>
          <p className="text-teal-100 mb-7 max-w-xl mx-auto text-sm">
            {t('schedule_cta_sub')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-mail-line"></i>
              {t('contact_us')}
            </Link>
            <Link to="/tuition" className="inline-flex items-center gap-2 bg-amber-500 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-money-dollar-circle-line"></i>
              {t('tuition_title')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
