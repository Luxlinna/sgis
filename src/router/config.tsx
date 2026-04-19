import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const TeamPage = lazy(() => import('../pages/team/page'));
const GalleryPage = lazy(() => import('../pages/gallery/page'));
const SchoolLifePage = lazy(() => import('../pages/schoollife/page'));
const AdmissionPage = lazy(() => import('../pages/admission/page'));
const SponsorshipPage = lazy(() => import('../pages/sponsorship/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const NewsPage = lazy(() => import('../pages/news/page'));
const NewsArticlePage = lazy(() => import('../pages/news/article/page'));
const SchedulePage = lazy(() => import('../pages/schedule/page'));
const TuitionPage = lazy(() => import('../pages/tuition/page'));
const CalendarPage = lazy(() => import('../pages/calendar/page'));
const ResourcesPage = lazy(() => import('../pages/resources/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/team', element: <TeamPage /> },
  { path: '/gallery', element: <GalleryPage /> },
  { path: '/school-life', element: <SchoolLifePage /> },
  { path: '/admission', element: <AdmissionPage /> },
  { path: '/sponsorship', element: <SponsorshipPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/news', element: <NewsPage /> },
  { path: '/news/:id', element: <NewsArticlePage /> },
  { path: '/schedule', element: <SchedulePage /> },
  { path: '/tuition', element: <TuitionPage /> },
  { path: '/calendar', element: <CalendarPage /> },
  { path: '/resources', element: <ResourcesPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
