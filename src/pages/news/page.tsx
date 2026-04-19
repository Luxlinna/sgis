import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { newsArticles, tagColors } from '../../mocks/news';

interface NewsItem {
  id: number;
  category: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  tag: string;
}

interface GalleryPhoto {
  id: number;
  src: string;
  caption: string;
  category: string;
  span?: 'wide' | 'tall' | 'normal';
}

const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    src: 'https://readdy.ai/api/search-image?query=students%20performing%20enthusiastically%20on%20stage%20during%20school%20cultural%20festival%2C%20colorful%20traditional%20cambodian%20costumes%2C%20bright%20stage%20lighting%2C%20excited%20audience%20of%20parents%20and%20children%2C%20festive%20backdrop%20with%20school%20banners%2C%20warm%20indoor%20lighting%2C%20joyful%20celebration%20atmosphere%2C%20simple%20clean%20background&width=800&height=600&seq=gallery-001&orientation=landscape',
    caption: 'Cultural Day 2025 — Traditional Performances',
    category: 'Cultural Events',
    span: 'wide',
  },
  {
    id: 2,
    src: 'https://readdy.ai/api/search-image?query=happy%20children%20competing%20in%20school%20sports%20day%20running%20race%20on%20outdoor%20track%2C%20colorful%20team%20uniforms%2C%20cheering%20crowd%20of%20parents%2C%20bright%20sunny%20tropical%20day%2C%20green%20school%20grounds%2C%20international%20school%20siem%20reap%20cambodia%2C%20simple%20clean%20background&width=600&height=600&seq=gallery-002&orientation=squarish',
    caption: 'Annual Sports Day — Track Events',
    category: 'Sports',
  },
  {
    id: 3,
    src: 'https://readdy.ai/api/search-image?query=proud%20young%20students%20holding%20academic%20competition%20trophies%20and%20medals%20at%20award%20ceremony%2C%20huge%20smiles%20and%20excitement%2C%20school%20hall%20with%20banners%2C%20supportive%20teachers%20congratulating%2C%20achievement%20celebration%2C%20simple%20clean%20background&width=600&height=600&seq=gallery-003&orientation=squarish',
    caption: 'Regional Academic Competition — Award Ceremony',
    category: 'Achievement',
  },
  {
    id: 4,
    src: 'https://readdy.ai/api/search-image?query=colorful%20school%20science%20fair%20with%20student%20projects%20on%20display%20tables%2C%20curious%20young%20students%20presenting%20experiments%20to%20judges%2C%20vibrant%20posters%20and%20models%2C%20bright%20classroom%2C%20international%20school%20setting%2C%20enthusiastic%20engaged%20children%2C%20simple%20clean%20background&width=600&height=800&seq=gallery-004&orientation=portrait',
    caption: 'Science Fair 2025 — Student Projects',
    category: 'Academic',
    span: 'tall',
  },
  {
    id: 5,
    src: 'https://readdy.ai/api/search-image?query=joyful%20children%20playing%20team%20sports%20soccer%20on%20school%20field%20during%20PE%20class%2C%20green%20grass%20field%2C%20bright%20tropical%20sunshine%2C%20diverse%20multicultural%20students%20in%20sports%20uniforms%2C%20teamwork%20and%20fun%2C%20simple%20clean%20background&width=800&height=500&seq=gallery-005&orientation=landscape',
    caption: 'PE Class — Football & Team Sports',
    category: 'Sports',
  },
  {
    id: 6,
    src: 'https://readdy.ai/api/search-image?query=students%20and%20parents%20gathering%20happily%20at%20school%20open%20day%2C%20warm%20welcoming%20atmosphere%2C%20friendly%20teachers%20at%20information%20desks%2C%20colorful%20banners%2C%20bright%20school%20hall%2C%20diverse%20international%20school%20families%2C%20simple%20background&width=600&height=600&seq=gallery-006&orientation=squarish',
    caption: 'Open Day — Meet the School Community',
    category: 'School Events',
  },
  {
    id: 7,
    src: 'https://readdy.ai/api/search-image?query=graduating%20high%20school%20students%20in%20caps%20and%20gowns%20at%20ceremony%2C%20smiling%20joyfully%2C%20holding%20diplomas%2C%20proud%20teachers%20and%20parents%20watching%2C%20outdoor%20school%20graduation%20ceremony%2C%20tropical%20trees%20background%2C%20festive%20atmosphere%2C%20simple%20clean%20background&width=800&height=500&seq=gallery-007&orientation=landscape',
    caption: 'Graduation Ceremony — Class of 2025',
    category: 'Graduation',
    span: 'wide',
  },
  {
    id: 8,
    src: 'https://readdy.ai/api/search-image?query=children%20engaged%20in%20creative%20art%20class%20painting%20colorful%20artwork%2C%20vibrant%20art%20supplies%20on%20desks%2C%20bright%20classroom%20with%20artwork%20displayed%20on%20walls%2C%20happy%20focused%20students%2C%20international%20primary%20school%2C%20simple%20clean%20background&width=600&height=600&seq=gallery-008&orientation=squarish',
    caption: 'Art Class Showcase — Student Artwork',
    category: 'Arts',
  },
  {
    id: 9,
    src: 'https://readdy.ai/api/search-image?query=teachers%20and%20parents%20in%20friendly%20parent%20teacher%20conference%20meeting%20at%20school%2C%20reviewing%20student%20progress%20reports%2C%20welcoming%20classroom%20setting%2C%20professional%20educational%20discussion%2C%20international%20school%20cambodia%2C%20warm%20natural%20lighting%2C%20simple%20background&width=600&height=600&seq=gallery-009&orientation=squarish',
    caption: 'Parent–Teacher Meeting — 1st Semester',
    category: 'School Events',
  },
];

const galleryCategories = ['All', 'Sports', 'Cultural Events', 'Academic', 'Achievement', 'Graduation', 'Arts', 'School Events'];

export default function NewsPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = activeCategory === 'All'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category === activeCategory);

  const featuredArticle = newsArticles[0];
  const restArticles = newsArticles.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=vibrant%20international%20school%20campus%20with%20students%20engaged%20in%20various%20activities%2C%20group%20of%20children%20and%20teachers%20outdoors%2C%20bright%20and%20welcoming%20school%20environment%2C%20educational%20community%20gathering%2C%20warm%20natural%20lighting%2C%20modern%20school%20grounds%2C%20simple%20background&width=1920&height=500&seq=news-hero-001&orientation=landscape"
            alt="News and Events"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            {t('news_title')}
          </h1>
          <p className="text-xl text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            {t('news_subtitle')}
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('news_latest')}</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>

          {/* Featured Top Article */}
          <div className="max-w-6xl mx-auto mb-14">
            <Link
              to={`/news/${featuredArticle.id}`}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-white border border-gray-100 cursor-pointer group block"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
            >
              <div className="w-full h-80 md:h-auto overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tagColors[featuredArticle.tag]}`}>
                    {featuredArticle.tag}
                  </span>
                  <span className="text-sm text-gray-500">{featuredArticle.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-teal-700 transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  {featuredArticle.summary}
                </p>
                <span className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                  Read Full Story <i className="ri-arrow-right-line"></i>
                </span>
              </div>
            </Link>
          </div>

          {/* News Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restArticles.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1 cursor-pointer group block"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}
              >
                <div className="w-full h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${tagColors[item.tag] || 'bg-gray-100 text-gray-600'}`}>
                      {item.tag}
                    </span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug line-clamp-2 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {item.summary}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-xs group-hover:gap-2 transition-all">
                    Read more <i className="ri-arrow-right-line"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY SECTION ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">School Life in Pictures</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Photo Gallery</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-5"></div>
            <p className="text-gray-600 max-w-xl mx-auto">Relive the highlights of our school year — cultural days, sports, academic achievements, and more.</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-400 hover:text-teal-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer bg-gray-100"
                onClick={() => setLightboxPhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide mb-1">{photo.category}</span>
                  <p className="text-white text-sm font-semibold leading-snug">{photo.caption}</p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="ri-zoom-in-line text-gray-800 text-sm"></i>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <i className="ri-image-line text-4xl mb-3 block"></i>
              <p>No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute -top-10 right-0 text-white hover:text-amber-400 transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-3xl"></i>
            </button>
            <img
              src={lightboxPhoto.src}
              alt={lightboxPhoto.caption}
              className="w-full h-auto rounded-xl object-cover"
            />
            <div className="mt-3 flex items-center gap-3">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">{lightboxPhoto.category}</span>
              <span className="text-gray-400 text-xs">—</span>
              <p className="text-white text-sm">{lightboxPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Follow us on social media to get the latest news, event photos, and school updates directly in your feed.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/SGISSiemReap"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877f2] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer"
            >
              <i className="ri-facebook-fill text-xl"></i>
              Follow on Facebook
            </a>
            <a
              href="https://www.instagram.com/sgis.siemreap"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer"
            >
              <i className="ri-instagram-line text-xl"></i>
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
