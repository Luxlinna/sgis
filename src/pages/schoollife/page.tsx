import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollReveal from '../../components/base/ScrollReveal';

interface FacilityItem {
  icon: string;
  title: string;
  description: string;
  image: string;
  color: string;
  iconBg: string;
}

interface SportItem {
  name: string;
  icon: string;
  description: string;
}

interface ActivityItem {
  name: string;
  icon: string;
  color: string;
  bg: string;
  description: string;
}

interface LifePhoto {
  id: number;
  src: string;
  caption: string;
  tag: string;
}

const facilities: FacilityItem[] = [
  {
    icon: 'ri-book-shelf-line',
    title: 'School Library',
    description: 'Our well-stocked library holds over 3,000 titles including fiction, non-fiction, science, and Khmer-language books. A quiet haven for reading, research, and discovery for all year groups.',
    image: 'https://readdy.ai/api/search-image?query=modern%20international%20school%20library%20with%20tall%20wooden%20bookshelves%20filled%20with%20colorful%20books%2C%20cozy%20reading%20nooks%20with%20bean%20bag%20chairs%2C%20warm%20ambient%20lighting%2C%20organized%20and%20inviting%20study%20space%2C%20children%20browsing%20books%20with%20curiosity%2C%20clean%20minimal%20design%2C%20tropical%20plants%2C%20simple%20background&width=900&height=600&seq=sl-facility-01&orientation=landscape',
    color: 'text-amber-700',
    iconBg: 'bg-amber-100',
  },
  {
    icon: 'ri-computer-line',
    title: 'ICT Computer Lab',
    description: 'Equipped with modern computers and high-speed internet, our ICT lab enables students to explore digital literacy, coding, and research from primary school onward.',
    image: 'https://readdy.ai/api/search-image?query=bright%20modern%20school%20computer%20lab%20with%20rows%20of%20desktop%20computers%2C%20students%20focused%20on%20screens%20learning%20digital%20skills%2C%20clean%20white%20walls%2C%20colorful%20chairs%2C%20natural%20daylight%2C%20international%20school%20setting%2C%20organized%20and%20tech-forward%20classroom%20environment%2C%20simple%20background&width=900&height=600&seq=sl-facility-02&orientation=landscape',
    color: 'text-teal-700',
    iconBg: 'bg-teal-100',
  },
  {
    icon: 'ri-flask-line',
    title: 'Science Laboratory',
    description: 'Hands-on science learning takes place in our fully equipped laboratory. Students from Year 5 upward conduct experiments in biology, chemistry, and physics in a safe, supervised environment.',
    image: 'https://readdy.ai/api/search-image?query=well-equipped%20school%20science%20laboratory%20with%20lab%20benches%2C%20microscopes%2C%20colorful%20lab%20equipment%20and%20beakers%2C%20students%20performing%20experiments%20with%20teacher%20supervision%2C%20bright%20clean%20lab%20environment%2C%20international%20school%2C%20simple%20background&width=900&height=600&seq=sl-facility-03&orientation=landscape',
    color: 'text-green-700',
    iconBg: 'bg-green-100',
  },
  {
    icon: 'ri-palette-line',
    title: 'Art & Music Room',
    description: 'Creativity flourishes in our dedicated art and music room, where students express themselves through painting, drawing, crafts, and musical instruments including keyboards and percussion.',
    image: 'https://readdy.ai/api/search-image?query=colorful%20school%20art%20room%20with%20painting%20supplies%2C%20student%20artwork%20displayed%20on%20walls%2C%20creative%20workspace%20with%20art%20tables%2C%20bright%20colors%20everywhere%2C%20musical%20instruments%20in%20corner%2C%20inspired%20and%20vibrant%20creative%20classroom%2C%20international%20school%2C%20simple%20background&width=900&height=600&seq=sl-facility-04&orientation=landscape',
    color: 'text-rose-700',
    iconBg: 'bg-rose-100',
  },
  {
    icon: 'ri-seedling-line',
    title: 'Early Years Play Area',
    description: 'Our Early Years children enjoy a safe, stimulating outdoor play area with climbing frames, sandpits, and creative play stations — all carefully designed to support physical and cognitive development.',
    image: 'https://readdy.ai/api/search-image?query=bright%20colorful%20outdoor%20early%20years%20playground%20at%20international%20school%2C%20toddlers%20and%20young%20children%20playing%20on%20climbing%20frames%20and%20slides%2C%20lush%20green%20tropical%20trees%2C%20safe%20fenced%20area%2C%20cheerful%20and%20safe%20children%20play%20environment%2C%20Cambodia%20warm%20sunny%20day%2C%20simple%20background&width=900&height=600&seq=sl-facility-05&orientation=landscape',
    color: 'text-yellow-700',
    iconBg: 'bg-yellow-100',
  },
  {
    icon: 'ri-restaurant-line',
    title: 'School Canteen',
    description: 'Nutritious, freshly prepared meals are served daily in our school canteen. The menu includes Khmer and international options, with healthy snacks available. Optional lunch service at $50/month.',
    image: 'https://readdy.ai/api/search-image?query=clean%20modern%20school%20cafeteria%20canteen%2C%20students%20sitting%20at%20tables%20eating%20lunch%2C%20colorful%20healthy%20food%20on%20trays%2C%20bright%20dining%20area%2C%20friendly%20canteen%20staff%2C%20international%20school%20in%20cambodia%2C%20cheerful%20and%20social%20mealtime%20atmosphere%2C%20simple%20background&width=900&height=600&seq=sl-facility-06&orientation=landscape',
    color: 'text-orange-700',
    iconBg: 'bg-orange-100',
  },
];

const sports: SportItem[] = [
  { name: 'Football (Soccer)', icon: 'ri-football-line', description: 'Weekly football training and inter-school matches on our outdoor field. Open to Years 3–12.' },
  { name: 'Badminton', icon: 'ri-seedling-line', description: 'Badminton courts available for practice and friendly tournaments during PE and after school.' },
  { name: 'Basketball', icon: 'ri-basketball-line', description: 'Basketball is a favorite among our secondary students with regular team practices and tournaments.' },
  { name: 'Swimming', icon: 'ri-water-flash-line', description: 'Swimming lessons for Early Years and Primary, with competitive events during Sports Day activities.' },
  { name: 'Athletics & Track', icon: 'ri-run-line', description: 'Track and field events form a highlight of our annual Sports Day. Sprint, relay, long jump, and more.' },
  { name: 'Volleyball', icon: 'ri-fire-line', description: 'Volleyball is offered as a team sport for middle and high school students with inter-class competitions.' },
];

const activities: ActivityItem[] = [
  { name: 'Drama & Theater Club', icon: 'ri-award-line', color: 'text-rose-600', bg: 'bg-rose-50', description: 'Students write, rehearse, and perform original plays and skits for parents and the school community.' },
  { name: 'Student Council', icon: 'ri-government-line', color: 'text-teal-700', bg: 'bg-teal-50', description: 'Elected student leaders represent their peers and help plan school events, campaigns, and initiatives.' },
  { name: 'Khmer Language & Culture', icon: 'ri-global-line', color: 'text-amber-700', bg: 'bg-amber-50', description: 'Celebrating Cambodian heritage through language lessons, traditional dance, and cultural events.' },
  { name: 'Environmental Club', icon: 'ri-plant-line', color: 'text-green-700', bg: 'bg-green-50', description: 'Students lead sustainability initiatives, school garden projects, and eco-awareness campaigns.' },
  { name: 'Reading & Debate Club', icon: 'ri-discuss-line', color: 'text-indigo-700', bg: 'bg-indigo-50', description: 'Encouraging critical thinking and public speaking through regular debates and book discussions.' },
  { name: 'Chess Club', icon: 'ri-game-line', color: 'text-gray-700', bg: 'bg-gray-100', description: 'Strategy, patience, and critical thinking — chess is a beloved activity across all age groups.' },
  { name: 'Community Service', icon: 'ri-heart-line', color: 'text-pink-700', bg: 'bg-pink-50', description: 'Students participate in community outreach, local charity drives, and environment clean-up days.' },
  { name: 'Coding & Robotics', icon: 'ri-code-box-line', color: 'text-sky-700', bg: 'bg-sky-50', description: 'Introduction to programming concepts and basic robotics for middle and high school students.' },
];

interface Teacher {
  name: string;
  role: string;
  subjects: string[];
  bio: string;
  nationality: string;
  photo: string;
  experience: string;
  accentColor: string;
  accentBg: string;
}

const teachers: Teacher[] = [
  {
    name: 'Mr. James Harrington',
    role: 'Head of Primary',
    subjects: ['English Language', 'Literacy', 'Reading'],
    bio: 'With over 12 years of teaching across the UK and Southeast Asia, James brings warmth, creativity, and a passion for reading to every primary classroom at SGIS.',
    nationality: 'British',
    photo: 'https://readdy.ai/api/search-image?query=friendly%20professional%20male%20teacher%20in%20his%2030s%20with%20warm%20smile%2C%20light%20skin%2C%20wearing%20smart%20casual%20button-up%20shirt%2C%20standing%20in%20bright%20modern%20school%20classroom%2C%20natural%20daylight%2C%20professional%20portrait%20photography%2C%20clean%20simple%20background%2C%20books%20and%20educational%20materials%20visible%2C%20welcoming%20and%20approachable%20expression&width=400&height=500&seq=teacher-001&orientation=portrait',
    experience: '12 years',
    accentColor: 'text-teal-700',
    accentBg: 'bg-teal-50',
  },
  {
    name: 'Ms. Sarah Thompson',
    role: 'Mathematics Lead',
    subjects: ['Mathematics', 'Statistics', 'Numeracy'],
    bio: 'Sarah is known for making maths fun and accessible for all students. Her hands-on approach and problem-solving methods have helped countless students discover a love for numbers.',
    nationality: 'Australian',
    photo: 'https://readdy.ai/api/search-image?query=cheerful%20professional%20female%20teacher%20in%20her%2030s%20with%20friendly%20smile%2C%20fair%20complexion%2C%20wearing%20neat%20teacher%20attire%2C%20standing%20at%20whiteboard%20with%20math%20equations%2C%20modern%20bright%20classroom%2C%20professional%20school%20portrait%2C%20natural%20lighting%2C%20confident%20and%20approachable%20demeanor%2C%20simple%20clean%20background&width=400&height=500&seq=teacher-002&orientation=portrait',
    experience: '9 years',
    accentColor: 'text-amber-700',
    accentBg: 'bg-amber-50',
  },
  {
    name: 'Mrs. Linda Sovan',
    role: 'Early Years Lead',
    subjects: ['Early Childhood', 'Khmer Language', 'Arts & Crafts'],
    bio: 'Linda blends deep expertise in Cambodian culture with early childhood development best practices. She creates nurturing, bilingual environments where our youngest learners thrive.',
    nationality: 'Cambodian',
    photo: 'https://readdy.ai/api/search-image?query=warm%20and%20friendly%20female%20teacher%20in%20her%2040s%20with%20gentle%20smile%2C%20southeast%20asian%20appearance%2C%20wearing%20professional%20school%20attire%2C%20colorful%20early%20years%20classroom%20background%2C%20surrounded%20by%20children%20artwork%20on%20walls%2C%20bright%20and%20cheerful%20teaching%20environment%2C%20professional%20portrait%2C%20simple%20background&width=400&height=500&seq=teacher-003&orientation=portrait',
    experience: '15 years',
    accentColor: 'text-rose-700',
    accentBg: 'bg-rose-50',
  },
  {
    name: 'Mr. David Park',
    role: 'Science & ICT Teacher',
    subjects: ['Science', 'ICT', 'Coding'],
    bio: 'David combines a background in software engineering with a genuine passion for teaching. His lab sessions are a highlight of the week — exciting, hands-on, and full of real-world curiosity.',
    nationality: 'Canadian',
    photo: 'https://readdy.ai/api/search-image?query=smart%20professional%20male%20teacher%20in%20his%20late%2030s%2C%20East%20Asian%20appearance%2C%20confident%20friendly%20smile%2C%20wearing%20smart%20shirt%20in%20modern%20school%20science%20lab%2C%20laboratory%20equipment%20and%20computers%20visible%2C%20bright%20professional%20school%20portrait%2C%20natural%20lighting%2C%20competent%20and%20enthusiastic%20expression%2C%20simple%20clean%20background&width=400&height=500&seq=teacher-004&orientation=portrait',
    experience: '8 years',
    accentColor: 'text-green-700',
    accentBg: 'bg-green-50',
  },
  {
    name: 'Ms. Amara Fontaine',
    role: 'Arts & Drama Teacher',
    subjects: ['Visual Arts', 'Drama', 'Music Appreciation'],
    bio: 'Amara brings a theatrical energy to everything she does. A graduate of Fine Arts, she encourages self-expression and builds student confidence through performance, painting, and creative storytelling.',
    nationality: 'French',
    photo: 'https://readdy.ai/api/search-image?query=vibrant%20expressive%20female%20teacher%20in%20her%2030s%2C%20mixed%20race%20appearance%2C%20bright%20genuine%20smile%2C%20wearing%20colorful%20artistic%20clothing%2C%20standing%20in%20colorful%20art%20classroom%20with%20student%20paintings%20on%20walls%2C%20professional%20school%20teacher%20portrait%2C%20warm%20indoor%20lighting%2C%20creative%20and%20energetic%20personality%2C%20simple%20clean%20background&width=400&height=500&seq=teacher-005&orientation=portrait',
    experience: '7 years',
    accentColor: 'text-indigo-700',
    accentBg: 'bg-indigo-50',
  },
  {
    name: 'Mr. Thomas Nguen',
    role: 'Secondary Humanities',
    subjects: ['History', 'Geography', 'Social Studies'],
    bio: 'Thomas inspires secondary students to think critically about the world around them. His lessons connect textbook knowledge to real global events, building informed and empathetic young thinkers.',
    nationality: 'Vietnamese-American',
    photo: 'https://readdy.ai/api/search-image?query=thoughtful%20professional%20male%20teacher%20in%20his%20early%2040s%2C%20southeast%20asian%20appearance%2C%20warm%20intellectual%20smile%2C%20wearing%20smart%20blazer%2C%20standing%20in%20bright%20school%20library%20with%20books%20visible%2C%20professional%20portrait%20photography%2C%20natural%20daylight%2C%20calm%20and%20wise%20expression%2C%20simple%20clean%20background&width=400&height=500&seq=teacher-006&orientation=portrait',
    experience: '11 years',
    accentColor: 'text-orange-700',
    accentBg: 'bg-orange-50',
  },
];

const lifePhotos: LifePhoto[] = [
  { id: 1, src: 'https://readdy.ai/api/search-image?query=diverse%20international%20school%20students%20laughing%20together%20on%20school%20grounds%20at%20recess%2C%20multicultural%20friends%20sharing%20snacks%2C%20tropical%20trees%20and%20outdoor%20seating%20area%2C%20bright%20joyful%20school%20life%2C%20Cambodia%20international%20school%2C%20simple%20clean%20background&width=800&height=600&seq=sl-life-01&orientation=landscape', caption: 'Recess & Friendship', tag: 'Student Life' },
  { id: 2, src: 'https://readdy.ai/api/search-image?query=students%20planting%20seeds%20in%20school%20garden%20as%20part%20of%20environmental%20project%2C%20enthusiastic%20young%20learners%20with%20soil%20and%20small%20plants%2C%20green%20outdoor%20garden%20area%2C%20teamwork%20activity%2C%20international%20school%2C%20bright%20sunny%20day%2C%20simple%20background&width=600&height=600&seq=sl-life-02&orientation=squarish', caption: 'School Garden Project', tag: 'Environmental Club' },
  { id: 3, src: 'https://readdy.ai/api/search-image?query=students%20presenting%20self-made%20posters%20and%20projects%20in%20school%20hallway%20for%20science%20exhibition%2C%20engaged%20audience%20of%20classmates%20and%20teachers%2C%20colorful%20displays%20and%20models%2C%20vibrant%20educational%20atmosphere%2C%20international%20school%2C%20simple%20background&width=600&height=600&seq=sl-life-03&orientation=squarish', caption: 'Science Exhibition Display', tag: 'Academic' },
  { id: 4, src: 'https://readdy.ai/api/search-image?query=young%20students%20acting%20on%20school%20stage%20in%20colorful%20costume%20for%20drama%20performance%2C%20spotlight%20on%20performers%2C%20attentive%20audience%20in%20school%20hall%2C%20excited%20theatrical%20atmosphere%2C%20international%20school%20cambodia%2C%20simple%20background&width=800&height=600&seq=sl-life-04&orientation=landscape', caption: 'Drama Club Performance', tag: 'Arts' },
  { id: 5, src: 'https://readdy.ai/api/search-image?query=children%20in%20school%20uniform%20doing%20yoga%20and%20stretching%20exercise%20on%20green%20grass%20field%20outdoors%2C%20physical%20education%20class%2C%20calm%20focused%20students%2C%20bright%20sunny%20tropical%20morning%2C%20international%20school%2C%20simple%20background&width=600&height=600&seq=sl-life-05&orientation=squarish', caption: 'Morning PE & Wellness', tag: 'Sports' },
  { id: 6, src: 'https://readdy.ai/api/search-image?query=students%20in%20computer%20lab%20collaborating%20on%20group%20coding%20project%2C%20focused%20young%20teenagers%20discussing%20code%20on%20screen%2C%20modern%20computer%20lab%2C%20technology%20education%2C%20international%20school%2C%20teamwork%2C%20simple%20background&width=600&height=600&seq=sl-life-06&orientation=squarish', caption: 'Coding & Tech Collaboration', tag: 'Technology' },
  { id: 7, src: 'https://readdy.ai/api/search-image?query=school%20community%20gathering%20for%20charity%20fundraising%20event%2C%20students%20and%20teachers%20with%20donation%20boxes%2C%20cheerful%20atmosphere%2C%20posters%20about%20community%20support%2C%20international%20school%20hall%2C%20people%20smiling%20and%20engaged%2C%20simple%20background&width=800&height=500&seq=sl-life-07&orientation=landscape', caption: 'Community Service Day', tag: 'Student Life' },
  { id: 8, src: 'https://readdy.ai/api/search-image?query=students%20working%20on%20creative%20art%20project%20at%20school%2C%20colorful%20paintings%20and%20drawings%20spread%20across%20tables%2C%20focused%20and%20happy%20children%20with%20paint%20brushes%2C%20bright%20art%20classroom%2C%20international%20school%2C%20simple%20background&width=600&height=600&seq=sl-life-08&orientation=squarish', caption: 'Creative Art Session', tag: 'Arts' },
];

export default function SchoolLifePage() {
  const { t } = useTranslation();
  const [activePhotoTag, setActivePhotoTag] = useState('All');
  const [lightboxPhoto, setLightboxPhoto] = useState<LifePhoto | null>(null);
  const photoTags = ['All', ...Array.from(new Set(lifePhotos.map((p) => p.tag)))];
  const filteredPhotos = activePhotoTag === 'All' ? lifePhotos : lifePhotos.filter((p) => p.tag === activePhotoTag);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[500px] flex items-end justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=vibrant%20international%20school%20campus%20in%20siem%20reap%20cambodia%2C%20diverse%20happy%20students%20playing%20and%20studying%20outside%2C%20lush%20green%20tropical%20gardens%2C%20modern%20school%20buildings%20in%20background%2C%20bright%20sunlit%20morning%2C%20warm%20welcoming%20educational%20environment%2C%20colorful%20school%20life%2C%20simple%20background&width=1920&height=700&seq=sl-hero-001&orientation=landscape"
            alt="School Life at SGIS"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>
        </div>
        <div className="relative z-10 w-full text-center pb-16 px-6">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">SGIS International School</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{t('schoollife_title')}</h1>
          <p className="text-white/90 text-xl max-w-2xl mx-auto">{t('schoollife_subtitle')}</p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-teal-700 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            {[
              { value: '6+', label: 'Campus Facilities' },
              { value: '8+', label: 'Sports Programs' },
              { value: '8', label: 'Clubs & Activities' },
              { value: '300+', label: 'Happy Students' },
              { value: 'Ages 2–18', label: 'All Year Groups' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-teal-200 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">Our Campus</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Facilities</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-5"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">Purpose-built spaces designed to inspire learning, creativity, and collaboration across every subject and age group.</p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto space-y-16">
            {facilities.map((facility, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`order-1 ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="w-full h-72 overflow-hidden rounded-2xl">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className={`order-2 ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className={`w-12 h-12 flex items-center justify-center ${facility.iconBg} rounded-xl mb-5`}>
                    <i className={`${facility.icon} text-2xl ${facility.color}`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports & Athletics */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">Physical Education</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sports &amp; Athletics</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-5"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Physical education is a core part of SGIS life. We offer a wide range of sports to build fitness, teamwork, and confidence.</p>
          </div>

          {/* Hero Sports Image */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="w-full h-80 rounded-2xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=energetic%20school%20sports%20day%20at%20international%20school%20cambodia%2C%20multiple%20sports%20activities%20happening%20simultaneously%20on%20large%20green%20field%2C%20students%20in%20colorful%20team%20uniforms%20competing%20in%20track%20and%20ball%20sports%2C%20enthusiastic%20coaches%20and%20cheering%20crowd%2C%20bright%20tropical%20sunny%20day%2C%20vibrant%20and%20exciting%20school%20athletics%20event%2C%20simple%20background&width=1200&height=500&seq=sl-sports-hero&orientation=landscape"
                alt="SGIS Sports Day"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sports.map((sport, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-teal-100">
                <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-lg mb-4">
                  <i className={`${sport.icon} text-xl text-teal-600`}></i>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{sport.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{sport.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">Beyond the Classroom</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Clubs &amp; Activities</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-5"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">We believe education extends beyond textbooks. Our clubs help students discover passions, develop talents, and build lifelong friendships.</p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activities.map((activity, idx) => (
              <div key={idx} className={`rounded-xl p-6 border ${activity.bg} border-transparent`}>
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg mb-4">
                  <i className={`${activity.icon} text-xl ${activity.color}`}></i>
                </div>
                <h3 className={`text-sm font-bold mb-2 ${activity.color}`}>{activity.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET OUR TEACHERS ── */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">The People Behind the Learning</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Teachers</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-5"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of international and local educators brings passion, expertise, and genuine care to every classroom at SGIS.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {teachers.map((teacher, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-1 transition-all duration-300"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}
              >
                {/* Photo */}
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="flex flex-wrap gap-1.5">
                      {teacher.subjects.map((sub, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold bg-white/90 text-gray-800 px-2.5 py-0.5 rounded-full"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-base font-bold text-gray-900 leading-tight">{teacher.name}</h3>
                      <p className={`text-sm font-semibold mt-0.5 ${teacher.accentColor}`}>{teacher.role}</p>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${teacher.accentBg} ${teacher.accentColor}`}>
                      {teacher.nationality}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-3">{teacher.bio}</p>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-time-line text-sm"></i>
                    </div>
                    <span>{teacher.experience} teaching experience</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join the Team CTA */}
          <div className="max-w-6xl mx-auto mt-12 bg-teal-600 rounded-2xl px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Passionate about teaching?</h3>
              <p className="text-teal-100 text-sm">We&apos;re always looking for talented educators to join the SGIS family.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors whitespace-nowrap cursor-pointer flex-shrink-0"
            >
              <i className="ri-send-plane-line text-lg"></i>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── VIRTUAL CAMPUS TOUR ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">Find Us in Siem Reap</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Virtual Campus Tour</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-5"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our school location and plan your visit. SGIS is conveniently located in the heart of Siem Reap, easily accessible for families across the city.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Info Cards */}
              <div className="lg:col-span-1 space-y-4">
                <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
                  <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-lg mb-3">
                    <i className="ri-map-pin-2-line text-xl text-teal-600"></i>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Our Address</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Siem Reap Province,<br />Kingdom of Cambodia</p>
                </div>

                <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                  <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-lg mb-3">
                    <i className="ri-time-line text-xl text-amber-600"></i>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">Office Hours</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Mon – Fri</span>
                      <span className="font-medium text-gray-800">7:30 AM – 4:30 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium text-gray-800">8:00 AM – 12:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium text-gray-500">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-rose-50 rounded-xl p-5 border border-rose-100">
                  <div className="w-10 h-10 flex items-center justify-center bg-rose-100 rounded-lg mb-3">
                    <i className="ri-phone-line text-xl text-rose-600"></i>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">Get in Touch</h3>
                  <p className="text-sm text-gray-600 mb-1">+855 12 345 678</p>
                  <p className="text-sm text-gray-600">info@sgis-siemreap.edu.kh</p>
                </div>

                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-teal-600 text-white font-semibold py-3 px-5 rounded-xl hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-calendar-check-line text-lg"></i>
                  Book a School Visit
                </Link>
              </div>

              {/* Google Maps Embed */}
              <div className="lg:col-span-2">
                <div className="w-full h-[460px] rounded-2xl overflow-hidden border border-gray-100" style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
                  <iframe
                    title="SGIS Siem Reap Location"
                    src="https://maps.google.com/maps?q=Siem+Reap,+Cambodia&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="text-xs text-gray-400 mt-3 text-center">
                  <i className="ri-information-line mr-1"></i>
                  Map shows Siem Reap city. Contact us for precise directions to the school campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life Photo Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">Captured Moments</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Life Gallery</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-5"></div>
          </div>

          {/* Tag Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {photoTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActivePhotoTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activePhotoTag === tag
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-400 hover:text-teal-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide mb-1">{photo.tag}</span>
                  <p className="text-white text-sm font-semibold leading-snug">{photo.caption}</p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="ri-zoom-in-line text-gray-800 text-sm"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightboxPhoto(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightboxPhoto(null)} className="absolute -top-10 right-0 text-white hover:text-amber-400 transition-colors cursor-pointer">
              <i className="ri-close-line text-3xl"></i>
            </button>
            <img src={lightboxPhoto.src} alt={lightboxPhoto.caption} className="w-full h-auto rounded-xl" />
            <div className="mt-3 flex items-center gap-3">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">{lightboxPhoto.tag}</span>
              <span className="text-gray-400 text-xs">—</span>
              <p className="text-white text-sm">{lightboxPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Come See It for Yourself</h2>
          <p className="text-teal-100 mb-8 max-w-xl mx-auto">
            Schedule a school visit or speak to our admissions team to learn more about life at SGIS Siem Reap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-7 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-calendar-check-line text-lg"></i>
              Book a School Visit
            </Link>
            <Link to="/admission" className="inline-flex items-center gap-2 bg-amber-500 text-white font-semibold px-7 py-3 rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-file-text-line text-lg"></i>
              Admission Process
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
