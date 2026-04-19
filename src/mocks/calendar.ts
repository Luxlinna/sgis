export type EventCategory = 'holiday' | 'school-event' | 'academic' | 'meeting' | 'exam';

export interface CalendarEvent {
  id: number;
  date: string; // YYYY-MM-DD
  title: string;
  titleKm: string;
  category: EventCategory;
  endDate?: string;
  description?: string;
}

export const categoryConfig: Record<EventCategory, { label: string; labelKm: string; color: string; bg: string; dot: string }> = {
  holiday: { label: 'Holiday / Break', labelKm: 'វិស្សមកាល', color: 'text-red-700', bg: 'bg-red-100', dot: 'bg-red-500' },
  'school-event': { label: 'School Event', labelKm: 'ព្រឹត្តិការណ៍សាលា', color: 'text-teal-700', bg: 'bg-teal-100', dot: 'bg-teal-500' },
  academic: { label: 'Academic', labelKm: 'ការសិក្សា', color: 'text-amber-700', bg: 'bg-amber-100', dot: 'bg-amber-500' },
  meeting: { label: 'Parent Meeting', labelKm: 'ការប្រជុំ', color: 'text-rose-700', bg: 'bg-rose-100', dot: 'bg-rose-500' },
  exam: { label: 'Exams', labelKm: 'ការប្រឡង', color: 'text-orange-700', bg: 'bg-orange-100', dot: 'bg-orange-500' },
};

export const calendarEvents: CalendarEvent[] = [
  { id: 1, date: '2025-08-08', title: 'New Student Orientation', titleKm: 'ការណែនាំសម្រាប់សិស្សថ្មី', category: 'school-event' },
  { id: 2, date: '2025-08-11', title: 'First Day of School — AY 2025-2026', titleKm: 'ថ្ងៃដំបូងនៃឆ្នាំសិក្សា ២០២៥-២០២៦', category: 'school-event' },
  { id: 3, date: '2025-08-15', title: 'Class Photo Day', titleKm: 'ថ្ងៃថតរូបថ្នាក់', category: 'academic' },
  { id: 4, date: '2025-09-15', title: 'Regional Academic Competition (Phnom Penh)', titleKm: 'ការប្រកួតសិក្សាតំបន់ (ភ្នំពេញ)', category: 'academic' },
  { id: 5, date: '2025-09-20', title: 'Achievement Award Assembly', titleKm: 'ពិធីប្រគល់វិញ្ញាបនបត្រ', category: 'school-event' },
  { id: 6, date: '2025-10-15', title: 'Cultural Day Announcement', titleKm: 'ប្រកាសព្រឹត្តិការណ៍ Day វប្បធម៌', category: 'school-event' },
  { id: 7, date: '2025-10-20', title: 'Mid-Term Break Begins', titleKm: 'ចាប់ផ្តើមវិស្សមកាលពាក់កណ្តាលឆមាស', category: 'holiday', endDate: '2025-10-24' },
  { id: 8, date: '2025-10-27', title: 'School Resumes After Mid-Term Break', titleKm: 'សាលារៀនបើកដំណើរការបន្ទាប់ពីវិស្សមកាល', category: 'school-event' },
  { id: 9, date: '2025-11-05', title: 'Enrollment Opens for 2026-2027', titleKm: 'ចាប់ចុះឈ្មោះឆ្នាំសិក្សា ២០២៦-២០២៧', category: 'academic' },
  { id: 10, date: '2025-11-22', title: 'Annual Cultural Day Celebration', titleKm: 'ពិធីប្រារព្ធ Day វប្បធម៌ប្រចាំឆ្នាំ', category: 'school-event' },
  { id: 11, date: '2025-11-22', title: 'Parent-Teacher Meeting — 1st Semester', titleKm: 'ប្រជុំមាតាបិតា-គ្រូ — ឆមាស​១', category: 'meeting' },
  { id: 12, date: '2025-12-12', title: 'Annual Sports Day', titleKm: 'ព្រឹត្តិការណ៍កីឡាប្រចាំឆ្នាំ', category: 'school-event' },
  { id: 13, date: '2025-12-19', title: 'End of First Semester', titleKm: 'បញ្ចប់ឆមាស​ទី​១', category: 'academic' },
  { id: 14, date: '2025-12-20', title: 'Christmas & New Year Break Begins', titleKm: 'ចាប់ផ្តើមវិស្សមកាលណូអែល & ចូលឆ្នាំ', category: 'holiday', endDate: '2026-01-04' },
  { id: 15, date: '2026-01-05', title: 'School Resumes — Second Semester Begins', titleKm: 'សាលារៀនបើកឡើងវិញ — ចាប់ផ្តើមឆមាស​ទី​២', category: 'school-event' },
  { id: 16, date: '2026-01-20', title: 'Progress Reports Issued', titleKm: 'ចេញផ្សាយរបាយការណ៍ការរីកចម្រើន', category: 'academic' },
  { id: 17, date: '2026-02-09', title: 'Lunar New Year Holiday', titleKm: 'វិស្សមកាលចូលឆ្នាំចិន', category: 'holiday', endDate: '2026-02-11' },
  { id: 18, date: '2026-02-14', title: 'Science & Innovation Fair', titleKm: 'ពិព័រណ៍វិទ្យាសាស្ត្រ និងនវានុវត្ត', category: 'academic' },
  { id: 19, date: '2026-03-14', title: 'Parent Forum — School Improvement', titleKm: 'វេទិកាមាតាបិតា — ការប្រឿនប្រាស់សាលា', category: 'meeting' },
  { id: 20, date: '2026-03-28', title: 'End of Term 2', titleKm: 'បញ្ចប់ត្រីមាស​ទី​២', category: 'academic' },
  { id: 21, date: '2026-03-29', title: 'Spring Break Begins', titleKm: 'ចាប់ផ្តើមវិស្សមកាល봄', category: 'holiday', endDate: '2026-04-12' },
  { id: 22, date: '2026-04-13', title: 'Khmer New Year Holiday', titleKm: 'ព្រឹត្តិការណ៍ចូលឆ្នាំខ្មែរ', category: 'holiday', endDate: '2026-04-17' },
  { id: 23, date: '2026-04-20', title: 'School Resumes After Khmer New Year', titleKm: 'សាលារៀនបើកឡើងវិញបន្ទាប់ពីចូលឆ្នាំខ្មែរ', category: 'school-event' },
  { id: 24, date: '2026-05-01', title: 'International Labour Day — School Closed', titleKm: 'ថ្ងៃពលករ — សាលាបិទ', category: 'holiday' },
  { id: 25, date: '2026-05-15', title: 'Year 12 Final Exams Begin', titleKm: 'ចាប់ផ្តើមប្រឡងចុងក្រោយ ថ្នាក់ ១២', category: 'exam', endDate: '2026-05-22' },
  { id: 26, date: '2026-06-01', title: 'End of Year Reports Preparation', titleKm: 'រៀបចំរបាយការណ៍ចុងឆ្នាំ', category: 'academic' },
  { id: 27, date: '2026-06-15', title: 'Final Exam Week — All Years', titleKm: 'សប្តាហ៍ប្រឡងចុងក្រោយ — គ្រប់ថ្នាក់', category: 'exam', endDate: '2026-06-19' },
  { id: 28, date: '2026-06-25', title: 'Graduation Ceremony — Class of 2026', titleKm: 'ពិធីប្រសាសន៍ — ជំនាន់ ២០២៦', category: 'school-event' },
  { id: 29, date: '2026-06-26', title: 'Last Day of School', titleKm: 'ថ្ងៃចុងក្រោយនៃការសិក្សា', category: 'school-event' },
  { id: 30, date: '2026-07-01', title: 'Summer Holiday Begins', titleKm: 'ចាប់ផ្តើមវិស្សមកាលរដូវក្តៅ', category: 'holiday', endDate: '2026-08-09' },
];

export const academicMonths = [
  { month: 8, year: 2025, label: 'August 2025', labelKm: 'សីហា ២០២៥' },
  { month: 9, year: 2025, label: 'September 2025', labelKm: 'កញ្ញា ២០២៥' },
  { month: 10, year: 2025, label: 'October 2025', labelKm: 'តុលា ២០២៥' },
  { month: 11, year: 2025, label: 'November 2025', labelKm: 'វិច្ឆិកា ២០២៥' },
  { month: 12, year: 2025, label: 'December 2025', labelKm: 'ធ្នូ ២០២៥' },
  { month: 1, year: 2026, label: 'January 2026', labelKm: 'មករា ២០២៦' },
  { month: 2, year: 2026, label: 'February 2026', labelKm: 'កុម្ភៈ ២០២៦' },
  { month: 3, year: 2026, label: 'March 2026', labelKm: 'មីនា ២០២៦' },
  { month: 4, year: 2026, label: 'April 2026', labelKm: 'មេសា ២០២៦' },
  { month: 5, year: 2026, label: 'May 2026', labelKm: 'ឧសភា ២០២៦' },
  { month: 6, year: 2026, label: 'June 2026', labelKm: 'មិថុនា ២០២៦' },
  { month: 7, year: 2026, label: 'July 2026', labelKm: 'កក្កដា ២០២៦' },
];
