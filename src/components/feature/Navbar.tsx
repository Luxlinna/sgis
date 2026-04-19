import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/index';

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [mobileAdmissionOpen, setMobileAdmissionOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'en' | 'km'>(i18n.language === 'km' ? 'km' : 'en');
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  const navLinks = [
    { label: t('nav_home'), to: '/' },
    { label: t('nav_about'), to: '/about' },
    { label: t('nav_team'), to: '/team' },
    { label: t('nav_gallery'), to: '/gallery' },
    { label: t('nav_schoollife'), to: '/school-life' },
    {
      label: t('nav_admission'),
      to: '/admission',
      dropdown: [
        { label: t('nav_admission_info'), to: '/admission' },
        { label: t('nav_schedule'), to: '/schedule' },
        { label: t('nav_tuition'), to: '/tuition' },
        { label: t('nav_calendar'), to: '/calendar' },
        { label: t('nav_resources'), to: '/resources' },
      ],
    },
    { label: t('nav_sponsorship'), to: '/sponsorship' },
    { label: t('nav_news'), to: '/news' },
    { label: t('nav_contact'), to: '/contact' },
  ];

  const switchLanguage = (lang: 'en' | 'km') => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAdmissionOpen(false);
    setMobileAdmissionOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAdmissionOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isWhiteBg = !transparent || isScrolled;
  const linkColor = isWhiteBg ? 'text-gray-800' : 'text-white';
  const headerBg = isWhiteBg ? 'bg-white shadow-md' : 'bg-transparent';

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              // src="https://public.readdy.ai/ai/img_res/1c61b234-48f8-4b5d-b3cf-a0f16a0e7d0c.png"
              src="https://res-console.cloudinary.com/dgdjv1zas/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/bG9nb19wbW5sYW8=/template_primary"
              alt="SGIS Logo"
              className="h-14 w-14 object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setAdmissionOpen((v) => !v)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-amber-600 whitespace-nowrap cursor-pointer ${
                      isActive(link.to) ? 'text-amber-600' : linkColor
                    }`}
                  >
                    {link.label}
                    <i className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${admissionOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  {admissionOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className={`block px-4 py-2.5 text-sm transition-colors hover:bg-amber-50 hover:text-amber-600 ${
                            location.pathname === sub.to ? 'text-amber-600 font-medium' : 'text-gray-700'
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className={`text-sm font-medium transition-colors hover:text-amber-600 whitespace-nowrap ${
                      isActive(link.to) ? 'text-amber-600' : linkColor
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}

            {/* Language Switcher */}
            <li className="flex-shrink-0 ml-1">
              <div className={`flex items-center rounded-full px-1 py-1 gap-0.5 ${isWhiteBg ? 'bg-gray-100' : 'bg-white/20'}`}>
                <button
                  onClick={() => switchLanguage('en')}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    currentLang === 'en'
                      ? 'bg-white text-teal-700 shadow-sm'
                      : isWhiteBg ? 'text-gray-500 hover:text-gray-700' : 'text-white/80 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => switchLanguage('km')}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    currentLang === 'km'
                      ? 'bg-white text-teal-700 shadow-sm'
                      : isWhiteBg ? 'text-gray-500 hover:text-gray-700' : 'text-white/80 hover:text-white'
                  }`}
                >
                  ខ្មែរ
                </button>
              </div>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
              isWhiteBg ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <i className={`text-2xl transition-all ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'} ${isWhiteBg ? 'text-gray-800' : 'text-white'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg mt-3 py-2 border border-gray-100">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileAdmissionOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-gray-800 hover:bg-amber-50 hover:text-amber-600 transition-colors cursor-pointer"
                  >
                    {link.label}
                    <i className={`ri-arrow-down-s-line text-base transition-transform ${mobileAdmissionOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  {mobileAdmissionOpen && (
                    <div className="bg-amber-50/50 border-t border-b border-amber-100">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className={`block px-8 py-2.5 text-sm transition-colors hover:text-amber-600 ${
                            location.pathname === sub.to ? 'text-amber-600 font-medium' : 'text-gray-600'
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`block px-5 py-3 text-sm font-medium transition-colors hover:bg-amber-50 hover:text-amber-600 ${
                    isActive(link.to) ? 'text-amber-600 bg-amber-50/60' : 'text-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Mobile Language Switcher */}
            <div className="px-5 py-3 border-t border-gray-100 mt-1">
              <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">Language</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => switchLanguage('en')}
                  className={`flex-1 text-sm font-semibold py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    currentLang === 'en'
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => switchLanguage('km')}
                  className={`flex-1 text-sm font-semibold py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    currentLang === 'km'
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  ភាសាខ្មែរ
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
