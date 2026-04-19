import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://res-console.cloudinary.com/dgdjv1zas/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/bG9nb19wbW5sYW8=/template_primary"
                alt="SGIS Logo"
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-lg font-bold">SGIS International School</h3>
            </div>
            <p className="text-teal-100 text-sm leading-relaxed mb-5">
              Empowering young minds through quality international education and holistic development in Siem Reap, Cambodia.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a
                // href="https://www.facebook.com/SGISSiemReap"
                href="https://web.facebook.com/sgis.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/15 hover:bg-blue-500 rounded-full transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-lg text-white"></i>
              </a>
              {/* Telegram */}
              <a
                href="https://t.me/your_telegram_username" // replace with your Telegram link
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/15 hover:bg-purple-500 rounded-full transition-colors cursor-pointer"
                aria-label="Telegram"
              >
                <i className="ri-telegram-fill text-lg text-white"></i>
              </a>
              <a
                href="https://www.instagram.com/sgis.siemreap"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/15 hover:bg-pink-500 rounded-full transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-lg text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link to="/" className="text-teal-100 hover:text-amber-300 text-sm transition-colors whitespace-nowrap">Home</Link>
              <Link to="/about" className="text-teal-100 hover:text-amber-300 text-sm transition-colors whitespace-nowrap">About Us</Link>
              <Link to="/team" className="text-teal-100 hover:text-amber-300 text-sm transition-colors whitespace-nowrap">Meet The Team</Link>
              <Link to="/gallery" className="text-teal-100 hover:text-amber-300 text-sm transition-colors whitespace-nowrap">Gallery</Link>
              <Link to="/admission" className="text-teal-100 hover:text-amber-300 text-sm transition-colors whitespace-nowrap">Admission</Link>
              <Link to="/schedule" className="text-teal-100 hover:text-amber-300 text-sm transition-colors whitespace-nowrap">School Schedule</Link>
              <Link to="/tuition" className="text-teal-100 hover:text-amber-300 text-sm transition-colors whitespace-nowrap">Tuition Fees</Link>
              <Link to="/sponsorship" className="text-teal-100 hover:text-amber-300 text-sm transition-colors whitespace-nowrap">Sponsorship</Link>
              <Link to="/news" className="text-teal-100 hover:text-amber-300 text-sm transition-colors whitespace-nowrap">News & Events</Link>
              <Link to="/contact" className="text-teal-100 hover:text-amber-300 text-sm transition-colors whitespace-nowrap">Contact Us</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-amber-300 text-base mt-0.5"></i>
                <p className="text-teal-100">93 Thmor Meas Road, Sala Kamreuk, Siem Reap, Cambodia</p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-phone-line text-amber-300 text-base mt-0.5"></i>
                <div>
                  <p className="text-teal-100">+855 (0) 99 590 033</p>
                  <p className="text-teal-100">+855 (0) 17 368 086</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-mail-line text-amber-300 text-base mt-0.5"></i>
                <p className="text-teal-100">sgis.international14@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-500 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-teal-100">
          <p>&copy; {new Date().getFullYear()} SGIS International School. All rights reserved.</p>
          <a
            href="https://readdy.ai/?ref=logo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            Website Builder
          </a>
        </div>
      </div>
    </footer>
  );
}
