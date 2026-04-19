import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  caption: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://i0.wp.com/sgis-siemreap.com/wp-content/uploads/2025/08/photo_2025-08-06_08-59-53.jpg?fit=960%2C1280&ssl=1',
    alt: 'Students in classroom',
    category: 'Student Activities',
    caption: 'Engaged students during interactive learning session'
  },
  {
    id: 2,
    src: 'https://i0.wp.com/sgis-siemreap.com/wp-content/uploads/2025/08/photo_2024-05-02_14-56-24.jpg?fit=960%2C1280&ssl=1',
    alt: 'School building exterior',
    category: 'Facilities',
    caption: 'Modern school building with spacious grounds'
  },
  {
    id: 3,
    src: 'https://i0.wp.com/sgis-siemreap.com/wp-content/uploads/2025/08/photo_2023-11-06_14-27-46.jpg?fit=960%2C1280&ssl=1',
    alt: 'Students participating in activities',
    category: 'Events',
    caption: 'Annual school event celebration'
  },
  {
    id: 4,
    src: 'https://res-console.cloudinary.com/dgdjv1zas/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/cGhvdG9fMjAyNS0wOC0wNl8wOS0xMy01MV9qbnl1bXc=/template_primary',
    alt: 'Bright classroom',
    category: 'Classrooms',
    caption: 'Bright and welcoming classroom environment'
  },
  {
    id: 5,
    src: 'https://readdy.ai/api/search-image?query=Children%20playing%20and%20learning%20together%20in%20school%20playground%2C%20colorful%20play%20equipment%2C%20students%20interacting%20joyfully%2C%20outdoor%20educational%20activities%2C%20safe%20play%20area%20with%20soft%20surfaces%2C%20trees%20and%20greenery%20in%20background%2C%20sunny%20day%20atmosphere%2C%20simple%20clean%20background&width=800&height=600&seq=gallery-playground-1&orientation=landscape',
    alt: 'Playground activities',
    category: 'Facilities',
    caption: 'Safe and fun outdoor play area'
  },
  {
    id: 6,
    src: 'https://readdy.ai/api/search-image?query=Elementary%20students%20engaged%20in%20science%20experiment%2C%20hands-on%20learning%20activity%2C%20colorful%20educational%20materials%2C%20teacher%20guiding%20students%2C%20laboratory%20equipment%20on%20table%2C%20curious%20children%20observing%2C%20bright%20classroom%20setting%2C%20simple%20background&width=800&height=600&seq=gallery-science-1&orientation=landscape',
    alt: 'Science class',
    category: 'Student Activities',
    caption: 'Hands-on science learning experience'
  },
  {
    id: 7,
    src: 'https://readdy.ai/api/search-image?query=School%20library%20with%20bookshelves%20filled%20with%20colorful%20books%2C%20comfortable%20reading%20areas%2C%20students%20reading%20quietly%2C%20natural%20lighting%2C%20cozy%20atmosphere%2C%20educational%20posters%2C%20organized%20space%2C%20welcoming%20environment%20for%20young%20readers%2C%20simple%20background&width=800&height=600&seq=gallery-library-1&orientation=landscape',
    alt: 'School library',
    category: 'Facilities',
    caption: 'Well-stocked library for young readers'
  },
  {
    id: 8,
    src: 'https://readdy.ai/api/search-image?query=Children%20performing%20in%20school%20cultural%20event%2C%20students%20in%20colorful%20traditional%20costumes%2C%20stage%20performance%2C%20audience%20watching%2C%20festive%20decorations%2C%20celebration%20atmosphere%2C%20proud%20students%20showcasing%20talents%2C%20simple%20background&width=800&height=600&seq=gallery-cultural-1&orientation=landscape',
    alt: 'Cultural performance',
    category: 'Events',
    caption: 'Students showcasing cultural heritage'
  },
  {
    id: 9,
    src: 'https://readdy.ai/api/search-image?query=Elementary%20school%20art%20classroom%20with%20student%20artwork%20displayed%20on%20walls%2C%20colorful%20paintings%20and%20crafts%2C%20children%20creating%20art%20projects%2C%20art%20supplies%20organized%20on%20tables%2C%20creative%20learning%20environment%2C%20bright%20and%20inspiring%20space%2C%20simple%20background&width=800&height=600&seq=gallery-art-1&orientation=landscape',
    alt: 'Art class',
    category: 'Classrooms',
    caption: 'Creative arts and crafts classroom'
  },
  {
    id: 10,
    src: 'https://readdy.ai/api/search-image?query=Students%20playing%20sports%20in%20school%20gymnasium%2C%20indoor%20sports%20activities%2C%20basketball%20court%2C%20children%20exercising%20and%20having%20fun%2C%20physical%20education%20class%2C%20active%20lifestyle%2C%20teamwork%20and%20cooperation%2C%20bright%20indoor%20facility%2C%20simple%20background&width=800&height=600&seq=gallery-sports-1&orientation=landscape',
    alt: 'Sports activities',
    category: 'Student Activities',
    caption: 'Physical education and sports programs'
  },
  {
    id: 11,
    src: 'https://readdy.ai/api/search-image?query=School%20cafeteria%20with%20clean%20tables%20and%20chairs%2C%20healthy%20food%20options%20displayed%2C%20bright%20and%20hygienic%20dining%20area%2C%20students%20eating%20lunch%20together%2C%20organized%20space%2C%20natural%20lighting%2C%20welcoming%20atmosphere%20for%20meal%20times%2C%20simple%20background&width=800&height=600&seq=gallery-cafeteria-1&orientation=landscape',
    alt: 'School cafeteria',
    category: 'Facilities',
    caption: 'Clean and comfortable dining area'
  },
  {
    id: 12,
    src: 'https://readdy.ai/api/search-image?query=Elementary%20students%20working%20together%20on%20group%20project%2C%20collaborative%20learning%2C%20children%20discussing%20and%20sharing%20ideas%2C%20educational%20materials%20on%20table%2C%20teamwork%20and%20communication%20skills%2C%20engaged%20learners%2C%20bright%20classroom%2C%20simple%20background&width=800&height=600&seq=gallery-group-1&orientation=landscape',
    alt: 'Group learning',
    category: 'Student Activities',
    caption: 'Collaborative learning activities'
  },
  {
    id: 13,
    src: 'https://readdy.ai/api/search-image?query=Modern%20school%20computer%20lab%20with%20students%20using%20computers%2C%20technology%20education%2C%20children%20learning%20digital%20skills%2C%20organized%20workstations%2C%20bright%20and%20clean%20environment%2C%20educational%20software%20on%20screens%2C%20teacher%20supervising%2C%20simple%20background&width=800&height=600&seq=gallery-computer-1&orientation=landscape',
    alt: 'Computer lab',
    category: 'Classrooms',
    caption: 'Technology-equipped learning spaces'
  },
  {
    id: 14,
    src: 'https://readdy.ai/api/search-image?query=School%20graduation%20ceremony%20with%20students%20in%20caps%20and%20gowns%2C%20proud%20graduates%20celebrating%20achievement%2C%20families%20watching%2C%20festive%20decorations%2C%20milestone%20event%2C%20joyful%20atmosphere%2C%20students%20receiving%20certificates%2C%20simple%20background&width=800&height=600&seq=gallery-graduation-1&orientation=landscape',
    alt: 'Graduation ceremony',
    category: 'Events',
    caption: 'Celebrating student achievements'
  },
  {
    id: 15,
    src: 'https://readdy.ai/api/search-image?query=School%20music%20classroom%20with%20musical%20instruments%2C%20students%20learning%20to%20play%20instruments%2C%20music%20stands%20and%20chairs%20arranged%2C%20colorful%20educational%20posters%20about%20music%2C%20creative%20learning%20environment%2C%20bright%20and%20inspiring%20space%2C%20simple%20background&width=800&height=600&seq=gallery-music-1&orientation=landscape',
    alt: 'Music class',
    category: 'Classrooms',
    caption: 'Music and performing arts education'
  }
];

export default function GalleryPage() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const categories = [
    { key: 'All', label: t('gallery_all') },
    { key: 'Facilities', label: t('gallery_facilities') },
    { key: 'Student Activities', label: t('gallery_student_activities') },
    { key: 'Events', label: t('gallery_events') },
    { key: 'Classrooms', label: t('gallery_classrooms') },
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Beautiful%20modern%20international%20school%20building%20exterior%20with%20large%20windows%2C%20welcoming%20entrance%2C%20green%20landscaped%20grounds%2C%20trees%20and%20gardens%2C%20bright%20sunny%20day%2C%20educational%20institution%20architecture%2C%20clean%20and%20professional%20appearance%2C%20simple%20background&width=1920&height=600&seq=gallery-hero-bg&orientation=landscape"
            alt="School Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            {t('gallery_title')}
          </h1>
          <p className="text-xl text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            {t('gallery_subtitle')}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === category.key
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-amber-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => setSelectedImage(image)}
              >
                <div className="w-full h-64">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                    <p className="text-amber-300 text-xs mt-1">{image.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg">
                    <i className="ri-search-line text-amber-600 text-lg"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <i className="ri-close-line text-white text-2xl"></i>
          </button>

          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <i className="ri-arrow-left-s-line text-white text-2xl"></i>
          </button>

          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            aria-label="Next"
          >
            <i className="ri-arrow-right-s-line text-white text-2xl"></i>
          </button>

          <div className="max-w-6xl w-full">
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.caption}</h3>
                <p className="text-amber-300 text-sm">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
