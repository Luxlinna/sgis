import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollReveal from '../../components/base/ScrollReveal';
import { calendarEvents, academicMonths, categoryConfig, CalendarEvent } from '../../mocks/calendar';

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month - 1, 1).getDay();
}

function formatDateKey(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

export default function CalendarPage() {
  const { t, i18n } = useTranslation();
  const isKm = i18n.language === 'km';
  const [selectedMonthIdx, setSelectedMonthIdx] = useState(0);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const currentMonth = academicMonths[selectedMonthIdx];

  const eventsForMonth = useMemo(() => {
    return calendarEvents.filter((ev) => {
      const evDate = new Date(ev.date);
      if (evDate.getFullYear() === currentMonth.year && evDate.getMonth() + 1 === currentMonth.month) return true;
      if (ev.endDate) {
        const start = new Date(ev.date);
        const end = new Date(ev.endDate);
        const test = new Date(currentMonth.year, currentMonth.month - 1, 1);
        const testEnd = new Date(currentMonth.year, currentMonth.month, 0);
        if (start <= testEnd && end >= test) return true;
      }
      return false;
    });
  }, [currentMonth]);

  const eventsByDay = useMemo(() => {
    const map: Record<string, CalendarEvent[]> = {};
    const daysInMonth = getDaysInMonth(currentMonth.year, currentMonth.month);
    for (let d = 1; d <= daysInMonth; d++) {
      const key = formatDateKey(currentMonth.year, currentMonth.month, d);
      const dayDate = new Date(key);
      const dayEvents = calendarEvents.filter((ev) => {
        const start = new Date(ev.date);
        const end = ev.endDate ? new Date(ev.endDate) : start;
        return dayDate >= start && dayDate <= end;
      });
      if (dayEvents.length > 0) map[key] = dayEvents;
    }
    return map;
  }, [currentMonth]);

  const selectedDayEvents = selectedDay ? (eventsByDay[selectedDay] || []) : [];
  const daysInMonth = getDaysInMonth(currentMonth.year, currentMonth.month);
  const firstDay = getFirstDayOfMonth(currentMonth.year, currentMonth.month);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-700 to-teal-900 pt-36 pb-16 mt-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-8 right-12 w-72 h-72 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/10 rounded-full translate-y-1/2 -translate-x-1/4"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">SGIS Siem Reap</p>
          <h1 className="text-5xl font-bold text-white mb-4">{t('calendar_title')}</h1>
          <p className="text-teal-200 text-lg max-w-2xl mx-auto">{t('calendar_subtitle')}</p>
        </div>
      </section>

      {/* Month Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            {academicMonths.map((m, idx) => (
              <button
                key={idx}
                onClick={() => { setSelectedMonthIdx(idx); setSelectedDay(null); }}
                className={`flex-shrink-0 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedMonthIdx === idx
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                {isKm ? m.labelKm : m.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Calendar Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar Grid */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden" style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
                  {/* Month Header */}
                  <div className="flex items-center justify-between px-6 py-4 bg-teal-600">
                    <button
                      onClick={() => { setSelectedMonthIdx((v) => Math.max(0, v - 1)); setSelectedDay(null); }}
                      disabled={selectedMonthIdx === 0}
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/20 hover:bg-white/30 text-white disabled:opacity-30 transition-colors cursor-pointer"
                    >
                      <i className="ri-arrow-left-s-line text-lg"></i>
                    </button>
                    <h2 className="text-white font-bold text-lg">
                      {isKm ? currentMonth.labelKm : currentMonth.label}
                    </h2>
                    <button
                      onClick={() => { setSelectedMonthIdx((v) => Math.min(academicMonths.length - 1, v + 1)); setSelectedDay(null); }}
                      disabled={selectedMonthIdx === academicMonths.length - 1}
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/20 hover:bg-white/30 text-white disabled:opacity-30 transition-colors cursor-pointer"
                    >
                      <i className="ri-arrow-right-s-line text-lg"></i>
                    </button>
                  </div>

                  {/* Weekday headers */}
                  <div className="grid grid-cols-7 border-b border-gray-100">
                    {weekDays.map((d) => (
                      <div key={d} className="py-2.5 text-center text-xs font-bold text-gray-400 uppercase tracking-wide">
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Days grid */}
                  <div className="grid grid-cols-7">
                    {/* Empty cells before first day */}
                    {Array.from({ length: firstDay }).map((_, i) => (
                      <div key={`empty-${i}`} className="h-16 border-b border-r border-gray-50"></div>
                    ))}

                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const dateKey = formatDateKey(currentMonth.year, currentMonth.month, day);
                      const dayEvents = eventsByDay[dateKey] || [];
                      const isSelected = selectedDay === dateKey;
                      const isToday = dateKey === new Date().toISOString().split('T')[0];

                      return (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(isSelected ? null : dateKey)}
                          className={`h-16 border-b border-r border-gray-50 p-1 flex flex-col items-start justify-start transition-all cursor-pointer text-left ${
                            isSelected ? 'bg-teal-50' : 'hover:bg-gray-50'
                          }`}
                        >
                          <span className={`text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full mb-0.5 ${
                            isToday ? 'bg-amber-500 text-white' : isSelected ? 'text-teal-700' : 'text-gray-700'
                          }`}>
                            {day}
                          </span>
                          <div className="flex flex-wrap gap-0.5 w-full overflow-hidden">
                            {dayEvents.slice(0, 2).map((ev, ei) => (
                              <span
                                key={ei}
                                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${categoryConfig[ev.category].dot}`}
                              ></span>
                            ))}
                            {dayEvents.length > 2 && (
                              <span className="text-xs text-gray-400 leading-none">+{dayEvents.length - 2}</span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>

              {/* Selected Day Events */}
              {selectedDay && (
                <div className="mt-4 bg-white rounded-xl border border-teal-100 p-5" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                  <h3 className="text-sm font-bold text-gray-700 mb-3">
                    {new Date(selectedDay + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                  </h3>
                  <div className="space-y-2">
                    {selectedDayEvents.map((ev) => (
                      <div key={ev.id} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${categoryConfig[ev.category].bg}`}>
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${categoryConfig[ev.category].dot}`}></span>
                        <span className={`text-sm font-semibold ${categoryConfig[ev.category].color}`}>
                          {isKm ? ev.titleKm : ev.title}
                        </span>
                        <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${categoryConfig[ev.category].bg} ${categoryConfig[ev.category].color} border border-current/20`}>
                          {isKm ? categoryConfig[ev.category].labelKm : categoryConfig[ev.category].label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Panel: Events list + Legend */}
            <div className="space-y-6">
              {/* Legend */}
              <ScrollReveal delay={100}>
                <div className="bg-white rounded-xl border border-gray-100 p-5" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                  <h3 className="font-bold text-gray-900 text-sm mb-4">{t('calendar_legend')}</h3>
                  <div className="space-y-2.5">
                    {(Object.entries(categoryConfig) as [string, typeof categoryConfig[keyof typeof categoryConfig]][]).map(([, cfg]) => (
                      <div key={cfg.label} className="flex items-center gap-3">
                        <span className={`w-3 h-3 rounded-full flex-shrink-0 ${cfg.dot}`}></span>
                        <span className="text-sm text-gray-700">{isKm ? cfg.labelKm : cfg.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Events this month */}
              <ScrollReveal delay={150}>
                <div className="bg-white rounded-xl border border-gray-100 p-5" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                  <h3 className="font-bold text-gray-900 text-sm mb-4">{t('calendar_events_this_month')}</h3>
                  {eventsForMonth.length === 0 ? (
                    <p className="text-sm text-gray-400 text-center py-4">{t('calendar_no_events')}</p>
                  ) : (
                    <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
                      {eventsForMonth.map((ev) => {
                        const dateLabel = new Date(ev.date + 'T12:00:00').toLocaleDateString('en-US', {
                          month: 'short', day: 'numeric',
                        });
                        return (
                          <div key={ev.id} className="flex gap-3 items-start">
                            <div className={`flex-shrink-0 text-center rounded-lg px-2 py-1 min-w-[48px] ${categoryConfig[ev.category].bg}`}>
                              <p className={`text-xs font-bold ${categoryConfig[ev.category].color}`}>{dateLabel}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-gray-800 leading-snug">
                                {isKm ? ev.titleKm : ev.title}
                              </p>
                              <span className={`text-xs ${categoryConfig[ev.category].color}`}>
                                {isKm ? categoryConfig[ev.category].labelKm : categoryConfig[ev.category].label}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </ScrollReveal>

              {/* Print Button */}
              <button
                onClick={() => window.print()}
                className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold py-3 rounded-xl hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-printer-line text-lg"></i>
                {isKm ? 'បោះពុម្ពប្រតិទិន' : 'Print Calendar'}
              </button>
            </div>
          </div>

          {/* Full Year Overview */}
          <ScrollReveal className="mt-14 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-100 p-8" style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {isKm ? 'ព្រឹត្តិការណ៍ ​សំខាន់ៗ ២០២៥–២០២៦' : 'Key Events — Full Academic Year 2025–2026'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {calendarEvents.filter(ev => ['school-event', 'holiday'].includes(ev.category)).slice(0, 12).map((ev) => {
                  const dateLabel = new Date(ev.date + 'T12:00:00').toLocaleDateString('en-US', {
                    month: 'short', day: 'numeric', year: 'numeric',
                  });
                  return (
                    <div key={ev.id} className={`flex items-center gap-3 p-3 rounded-lg ${categoryConfig[ev.category].bg}`}>
                      <div className={`w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0 ${categoryConfig[ev.category].color} bg-white`}>
                        <i className={ev.category === 'holiday' ? 'ri-rest-time-line text-base' : 'ri-calendar-event-line text-base'}></i>
                      </div>
                      <div>
                        <p className={`text-xs font-bold ${categoryConfig[ev.category].color}`}>{dateLabel}</p>
                        <p className="text-xs text-gray-700 leading-snug font-medium">
                          {isKm ? ev.titleKm : ev.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
