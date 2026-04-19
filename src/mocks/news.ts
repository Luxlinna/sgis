export interface NewsArticle {
  id: number;
  category: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  summary: string;
  image: string;
  tag: string;
  body: string[];
  relatedIds: number[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    category: 'Announcement',
    title: 'Welcome Back — Academic Year 2025-2026 Starts August 11',
    date: 'August 1, 2025',
    author: 'SGIS Administration',
    readTime: '3 min read',
    summary: 'We are excited to welcome all students and families back for the new academic year. School officially begins on Monday, August 11, 2025.',
    image: 'https://readdy.ai/api/search-image?query=happy%20diverse%20students%20returning%20to%20international%20school%20on%20first%20day%2C%20bright%20sunny%20morning%2C%20school%20entrance%20with%20welcoming%20banners%2C%20excited%20children%20with%20backpacks%2C%20warm%20educational%20atmosphere%2C%20simple%20clean%20background%2C%20modern%20school%20building&width=1200&height=600&seq=news-001&orientation=landscape',
    tag: 'School Update',
    body: [
      'We are thrilled to welcome all students and families back for the 2025-2026 academic year at Smiling Global International School. After a wonderful summer break, the SGIS community is ready to reunite and begin an exciting new chapter of learning, growth, and achievement.',
      'School officially begins on Monday, August 11, 2025. Gates will open at 7:30 AM, with classes commencing at 8:00 AM sharp. We ask all parents to please ensure that students arrive on time and fully prepared for their first day.',
      'Before the first day, please ensure your child\'s uniform is clean and pressed, all required stationery and supplies from the school list have been purchased, and that your child has had a good night\'s sleep and a healthy breakfast.',
      'New students and their families are warmly invited to attend our New Student Orientation on Friday, August 8, 2025, from 9:00 AM to 11:00 AM. This session will give new students a chance to meet their teachers, explore the campus, and feel at home before the first day.',
      'This year, we are excited to introduce several new initiatives: an expanded after-school activities programme, a refreshed library reading programme for primary students, and a new STEM enrichment curriculum for Years 7–12.',
      'Our dedicated teaching team has been busy preparing engaging lessons, fresh classroom environments, and creative projects to make this the best year yet. We look forward to partnering with every family to support your child\'s progress and happiness at SGIS.',
      'If you have any questions before the school year begins, please don\'t hesitate to contact our admissions and administration office. We wish all students and families a wonderful start to the 2025-2026 academic year!'
    ],
    relatedIds: [4, 5, 8],
  },
  {
    id: 2,
    category: 'Event',
    title: 'Annual Cultural Day Celebration — November 2025',
    date: 'October 15, 2025',
    author: 'Events Committee',
    readTime: '4 min read',
    summary: 'Join us for our beloved Annual Cultural Day where students showcase the rich diversity of our school community through dance, displays, and traditional foods.',
    image: 'https://readdy.ai/api/search-image?query=children%20performing%20traditional%20cultural%20dances%20on%20school%20stage%2C%20colorful%20traditional%20costumes%2C%20school%20cultural%20festival%20celebration%2C%20audience%20of%20parents%20and%20students%2C%20festive%20decorations%20and%20banners%2C%20joyful%20multicultural%20event%2C%20simple%20background&width=1200&height=600&seq=news-002&orientation=landscape',
    tag: 'Event',
    body: [
      'One of the most beloved events in the SGIS calendar is nearly here! Our Annual Cultural Day Celebration will take place on Saturday, November 22, 2025, from 9:00 AM to 2:00 PM on the school grounds.',
      'Cultural Day is a vibrant celebration of the remarkable diversity within our SGIS family. With students and families from over 15 countries, this day is a true testament to the richness of our international community.',
      'This year\'s theme is "One World, Many Voices" — celebrating the unique traditions, languages, and stories that each family brings to our school. Students have been preparing for weeks, rehearsing traditional dances, crafting cultural displays, and preparing authentic recipes from their home countries.',
      'The day will feature: traditional dance performances from Cambodian, Korean, Vietnamese, French, Australian, and many other cultural groups; a cultural exhibition hall where students present their heritage through arts, crafts, and written displays; an international food fair with dishes and snacks prepared by student families; and a flag parade where every represented nationality is honoured.',
      'Parents and extended family members are warmly invited to attend. Entry is free of charge. We kindly ask families from each represented country to bring one dish or snack to contribute to the international food fair. Details will be sent home via the weekly school newsletter.',
      'This is not just an event — it is a reminder of why our school community is so special. At SGIS, we believe that understanding and celebrating each other\'s cultures builds empathy, curiosity, and lifelong friendships.',
      'We can\'t wait to see you there! Mark your calendars: Saturday, November 22, 2025 — a day of colour, culture, and community.'
    ],
    relatedIds: [3, 7, 9],
  },
  {
    id: 3,
    category: 'Achievement',
    title: 'SGIS Students Excel in Regional Academic Competition',
    date: 'September 20, 2025',
    author: 'Academic Department',
    readTime: '3 min read',
    summary: 'We are proud to announce that a team of SGIS students achieved outstanding results at the regional academic competition held in Phnom Penh, placing in the top three across multiple categories.',
    image: 'https://readdy.ai/api/search-image?query=proud%20students%20holding%20trophies%20and%20certificates%20at%20academic%20competition%20award%20ceremony%2C%20smiling%20children%20with%20medals%2C%20school%20representatives%20at%20podium%2C%20celebratory%20atmosphere%2C%20modern%20conference%20setting%2C%20simple%20background&width=1200&height=600&seq=news-003&orientation=landscape',
    tag: 'Achievement',
    body: [
      'We are incredibly proud to announce that SGIS students delivered outstanding performances at the 2025 Regional Academic Competition held at the Cambodian International Convention Centre in Phnom Penh on September 15, 2025.',
      'A team of 12 SGIS students from Years 8 through 12 competed against students from 22 international and national schools across Cambodia. Our students demonstrated remarkable knowledge, critical thinking, and teamwork across four competitive categories.',
      'In Mathematics, our Year 10 team placed 2nd overall, with individual student Lim Virachana receiving a special distinction award for problem-solving excellence. In Science (Biology & Physics), our Year 11 team achieved 1st place — a first-ever gold medal for SGIS in this competition. In English Language & Debate, our Year 9 team placed 3rd, with Sofia Chen recognized for Best Speaker. In Environmental Studies, our Year 12 team placed 2nd, presenting an outstanding project on water conservation in Siem Reap.',
      '"I am so incredibly proud of every student who competed," said Mr. David Park, Science & ICT teacher and team coordinator. "These students put in months of preparation before and after school. Their results reflect not just their intelligence, but their dedication and team spirit."',
      'The competition was judged by a panel of educators from international organizations, and SGIS\'s overall ranking placed us 3rd out of 22 participating schools — our best performance to date.',
      'A special awards assembly will be held on Monday, September 29, where the competing students will be recognized in front of the whole school. Parents of competing students are warmly invited to attend.',
      'Congratulations to all competing students, and a huge thank you to the teachers and parents who supported them every step of the way. This achievement is a powerful reflection of the academic excellence we nurture every day at SGIS.'
    ],
    relatedIds: [6, 9, 1],
  },
  {
    id: 4,
    category: 'Announcement',
    title: 'Enrollment Open for 2026-2027 Academic Year',
    date: 'November 5, 2025',
    author: 'Admissions Office',
    readTime: '4 min read',
    summary: 'SGIS is now accepting applications for the 2026-2027 academic year. Limited seats are available across all grade levels. Early applications are encouraged.',
    image: 'https://readdy.ai/api/search-image?query=warm%20and%20welcoming%20international%20school%20admissions%20office%2C%20friendly%20staff%20at%20reception%20desk%2C%20parents%20and%20children%20visiting%20school%20campus%2C%20informational%20materials%20and%20brochures%20displayed%2C%20professional%20educational%20setting%2C%20simple%20background&width=1200&height=600&seq=news-004&orientation=landscape',
    tag: 'Admissions',
    body: [
      'SGIS is delighted to announce that enrollment is now officially open for the 2026-2027 academic year. We are welcoming applications for all year groups from Nursery (age 2) through Year 12 (age 18).',
      'Each year, demand for places at SGIS grows, and seats in many year groups fill quickly. We strongly encourage families who are considering enrollment for next year to begin the application process as early as possible to avoid disappointment.',
      'Our academic programme follows the internationally recognised Cambridge curriculum, supplemented with strong Khmer language instruction, a rich extracurricular programme, and a warm, bilingual learning environment designed for students from both local Cambodian and international families.',
      'The admissions process involves a simple application form, an age-appropriate assessment for placement purposes, a school visit and informal interview, and final offer and enrollment confirmation. Our admissions team is friendly, helpful, and always happy to answer questions.',
      'To begin your application: visit our Admissions page on the website to download the application form, or visit the school office in person Monday through Friday, 8:00 AM to 4:00 PM. You can also call us on +855 12 345 678 or email admissions@sgis-siemreap.edu.kh.',
      'We offer open school visits every Tuesday and Thursday morning at 9:00 AM. This is a great chance for your family to see our campus, meet our teachers, and experience the welcoming SGIS environment before making your decision.',
      'We look forward to welcoming many new students and families into the SGIS community for 2026-2027. Every child who walks through our gates is treated like family — and we hope your child will be part of ours.'
    ],
    relatedIds: [1, 5, 8],
  },
  {
    id: 5,
    category: 'Event',
    title: 'Parent-Teacher Meeting — First Semester Review',
    date: 'November 18, 2025',
    author: 'School Administration',
    readTime: '3 min read',
    summary: 'Our first semester Parent-Teacher Meeting will be held on November 22, 2025 from 8:00 AM to 12:00 PM. A great opportunity to discuss your child\'s progress.',
    image: 'https://readdy.ai/api/search-image?query=teacher%20and%20parents%20having%20friendly%20discussion%20in%20school%20classroom%2C%20professional%20meeting%20atmosphere%2C%20education%20materials%20on%20desk%2C%20engaged%20and%20supportive%20conversation%2C%20bright%20clean%20classroom%2C%20simple%20background&width=1200&height=600&seq=news-005&orientation=landscape',
    tag: 'Meeting',
    body: [
      'Dear SGIS parents and guardians, we are pleased to invite you to our First Semester Parent-Teacher Meeting for the 2025-2026 academic year. This meeting will take place on Saturday, November 22, 2025, from 8:00 AM to 12:00 PM at the school campus.',
      'The Parent-Teacher Meeting is an important opportunity for every family to connect directly with their child\'s teachers, review academic progress from the first semester, discuss your child\'s social and emotional development, and set positive goals for the second half of the year.',
      'Each appointment will be approximately 10–15 minutes. Appointment slots will be allocated on a first-come, first-served basis. You will receive a booking confirmation slip through your child\'s school bag during the week of November 17.',
      'If you have concerns about a specific subject or aspect of your child\'s learning, we encourage you to write these down in advance so you can make the most of your time with the teacher. Teachers will have student report books, portfolio samples, and assessment records available for reference.',
      'For parents of Early Years (Nursery to Reception) children, appointments will be held in the Early Years block with both the lead teacher and teaching assistant present, as we believe both perspectives are valuable for the youngest learners.',
      'Light refreshments will be available in the school canteen for parents while they wait for their appointments. The school bookshop will also be open from 8:00 AM to 11:00 AM for those who wish to browse the latest titles.',
      'We deeply value the partnership between school and home. Regular, open communication between parents and teachers is one of the key reasons our students thrive. We look forward to seeing you on November 22!'
    ],
    relatedIds: [1, 4, 8],
  },
  {
    id: 6,
    category: 'Achievement',
    title: 'New Library Books and Resources Added for Students',
    date: 'September 5, 2025',
    author: 'Library Department',
    readTime: '3 min read',
    summary: 'Thanks to generous donations, SGIS has added over 300 new books to our library including fiction, non-fiction, science, and Khmer language titles for all age groups.',
    image: 'https://readdy.ai/api/search-image?query=bright%20colorful%20school%20library%20with%20new%20book%20collection%2C%20organized%20bookshelves%20with%20colorful%20books%2C%20cozy%20reading%20areas%20with%20bean%20bags%2C%20children%20browsing%20books%20with%20excitement%2C%20welcoming%20library%20atmosphere%2C%20simple%20background&width=1200&height=600&seq=news-006&orientation=landscape',
    tag: 'School Update',
    body: [
      'We are thrilled to announce that the SGIS school library has received a major boost! Thanks to the extraordinary generosity of our parent community and school sponsors, we have added over 300 brand new books and educational resources to the library collection.',
      'The new collection spans every subject and age group. New arrivals include: over 80 fiction titles for primary students (including popular series like Wimpy Kid, Magic Tree House, and Roald Dahl classics), 60 non-fiction and reference books for secondary students, 45 Khmer language picture books and early readers for our youngest learners, 30 STEM and science reference books for Years 6–12, and a new selection of world atlases, encyclopaedias, and activity books.',
      '"A love of reading is one of the greatest gifts we can give to a child," said Librarian Ms. Dara Sok. "This new collection means every student — from our tiniest nursery children to our Year 12 seniors — will find something to spark their curiosity and imagination."',
      'The library has also been reorganised with a new colour-coded shelving system to make it easier for students to browse independently. New reading corner cushions, display stands, and genre signs have been installed to create a more welcoming and inspiring reading environment.',
      'A special "New Arrivals" display will be available at the library entrance throughout September so students can easily discover the latest additions. Teachers will also be incorporating several of the new titles into classroom reading programmes.',
      'We extend our deepest gratitude to the families and sponsors whose donations made this possible. Your investment in our children\'s love of reading will pay dividends for years to come.',
      'The library is open to all students Monday through Friday, 7:30 AM to 4:30 PM. Students are encouraged to borrow up to three books at a time for two weeks. Happy reading!'
    ],
    relatedIds: [3, 1, 9],
  },
  {
    id: 7,
    category: 'Event',
    title: 'Sports Day 2025 — Fun, Fitness & Team Spirit',
    date: 'December 3, 2025',
    author: 'PE Department',
    readTime: '4 min read',
    summary: 'Our annual Sports Day is coming! Students from all grades will compete in track and field events, team sports, and fun activities. Families are welcome to join.',
    image: 'https://readdy.ai/api/search-image?query=children%20participating%20in%20school%20sports%20day%20activities%2C%20students%20running%20track%20and%20field%20events%2C%20colorful%20team%20uniforms%2C%20supportive%20crowd%20of%20parents%20cheering%2C%20outdoor%20school%20sports%20festival%2C%20sunny%20day%2C%20simple%20background&width=1200&height=600&seq=news-007&orientation=landscape',
    tag: 'Event',
    body: [
      'It\'s the most energetic day of the school year — SGIS Sports Day 2025 is officially confirmed for Friday, December 12, 2025! Students, families, and teachers will come together for a full day of fun, competition, fitness, and school spirit.',
      'Sports Day at SGIS is a truly special occasion. Every student from Nursery through Year 12 participates, competing in age-appropriate events designed to challenge, inspire, and above all — bring joy. This year\'s theme is "Move, Compete, Celebrate!"',
      'Events this year will include: 100m and 200m sprint races for Years 3–12, relay races for all primary and secondary year groups, long jump and standing jump competitions, tug of war team challenge, football mini-tournament for Years 5–12, obstacle course and fun races for Early Years and Years 1–2, and a teachers vs students exhibition race (always a crowd favourite!).',
      'Students will be divided into four coloured houses — Red Lions, Green Dragons, Gold Eagles, and Teal Dolphins — and will earn points throughout the day. The house with the most points at the end of the day will be crowned Sports Day Champions and receive the SGIS House Cup.',
      '"Sports Day is about so much more than winning races," said Mr. James Harrington, Head of Primary. "It\'s about cheering for your teammates, showing good sportsmanship, and discovering what your body can do. Every single child who runs, jumps, or cheers is a champion."',
      'Families and extended family members are warmly welcome to attend as spectators. The day runs from 7:30 AM to 1:30 PM on the school field. Please bring sunscreen, water, and your loudest cheering voices!',
      'Students should arrive in their house colour T-shirt (details sent home with house allocation letters) and comfortable sports shoes. A light healthy snack and water bottle are recommended. The school canteen will be open selling water and light refreshments throughout the day.'
    ],
    relatedIds: [2, 3, 9],
  },
  {
    id: 8,
    category: 'Announcement',
    title: 'School Closed for Khmer New Year Holiday — April 2026',
    date: 'March 20, 2026',
    author: 'School Administration',
    readTime: '2 min read',
    summary: 'SGIS will be closed April 13-17, 2026 in observance of the Khmer New Year holiday. We wish all our students and families a joyful and restful celebration.',
    image: 'https://readdy.ai/api/search-image?query=colorful%20Cambodian%20Khmer%20New%20Year%20celebration%20decorations%2C%20traditional%20festive%20atmosphere%2C%20golden%20and%20red%20ornaments%20with%20water%20festival%20elements%2C%20cultural%20holiday%20imagery%2C%20simple%20clean%20background&width=1200&height=600&seq=news-008&orientation=landscape',
    tag: 'Holiday',
    body: [
      'Dear SGIS families, this is a reminder that school will be closed from Monday, April 13 through Friday, April 17, 2026, in observance of the Khmer New Year (Choul Chnam Thmei) holiday. School will resume as normal on Monday, April 20, 2026.',
      'Khmer New Year is one of the most important and joyful celebrations in Cambodia, marking the end of the harvest season and the beginning of the new year according to the Khmer calendar. It is a time for family gatherings, community celebrations, visits to pagodas, and traditional games.',
      'At SGIS, we deeply respect and celebrate Cambodian cultural heritage. Our students have been learning about the significance and traditions of Khmer New Year throughout the school term, and many classes have been incorporating cultural crafts, stories, and language activities in the lead-up to the holiday.',
      'During the break, we wish all families — both Cambodian and international — a safe, joyful, and restful celebration. For families who are travelling during the holiday period, please ensure safe travels and take good care of yourselves.',
      'A reminder that the Academic Calendar for the remainder of the 2025-2026 year is available on our website and has been distributed in the most recent school newsletter. Please also note that Year 10 and Year 12 assessment preparations will continue in the week following the break.',
      'If you have any urgent queries during the holiday period, our emergency contact number is +855 12 345 678. Non-urgent queries will be responded to when school reopens on April 20.',
      'Choul Chnam Thmei! May the new year bring happiness, health, and success to every SGIS family.'
    ],
    relatedIds: [1, 4, 5],
  },
  {
    id: 9,
    category: 'Achievement',
    title: 'SGIS Graduates Admitted to International Universities',
    date: 'August 10, 2025',
    author: 'Secondary Department',
    readTime: '4 min read',
    summary: 'Several SGIS graduates from the Class of 2025 have been accepted into prestigious universities in Australia, Canada, the UK, and across Asia.',
    image: 'https://readdy.ai/api/search-image?query=proud%20graduating%20students%20in%20caps%20and%20gowns%20celebrating%2C%20smiling%20young%20adults%20holding%20acceptance%20letters%2C%20graduation%20ceremony%20at%20school%2C%20supportive%20teachers%20and%20family%20watching%2C%20achievement%20and%20success%20atmosphere%2C%20simple%20background&width=1200&height=600&seq=news-009&orientation=landscape',
    tag: 'Achievement',
    body: [
      'We are immensely proud to share the extraordinary university admission achievements of the SGIS Class of 2025. This year\'s graduating cohort has demonstrated exceptional academic ability, global ambition, and personal resilience — and their university placements reflect all of that and more.',
      'Graduates from the Class of 2025 have received offers from universities across four continents. Admission offers have been received from institutions including: The University of Queensland and RMIT University in Australia, the University of Toronto and University of British Columbia in Canada, the University of Exeter and Cardiff University in the UK, the National University of Singapore, Chulalongkorn University in Thailand, and several prestigious institutions in Japan and South Korea.',
      'Fields of study chosen by our graduates span a remarkable range, including Medicine and Biomedical Sciences, Engineering and Computer Science, Business and Economics, International Relations, Architecture, Education, and Hospitality Management.',
      '"These results are a testament to the hard work of our students, the dedication of our teaching team, and the unwavering support of SGIS families," said School Principal Ms. Helen Marsh. "We are so proud of each and every graduate and excited to watch them thrive in the next chapter of their lives."',
      'The journey to university for SGIS students is supported through our dedicated university counselling programme, which begins in Year 10 and provides personalised guidance on subject selection, personal statement writing, interview preparation, and university applications.',
      'A Graduation Ceremony honouring the Class of 2025 was held on June 28, 2025, attended by graduates, families, and the full SGIS staff. It was an emotional, joyful, and deeply inspiring evening that reminded all of us why education matters so deeply.',
      'To all Class of 2025 graduates: you will always be part of the SGIS family. We are proud of you, we believe in you, and we cannot wait to see everything you will go on to achieve. The world is yours.'
    ],
    relatedIds: [3, 7, 6],
  },
];

export const tagColors: Record<string, string> = {
  'School Update': 'bg-teal-100 text-teal-700',
  'Event': 'bg-amber-100 text-amber-700',
  'Achievement': 'bg-green-100 text-green-700',
  'Admissions': 'bg-orange-100 text-orange-700',
  'Meeting': 'bg-rose-100 text-rose-700',
  'Holiday': 'bg-red-100 text-red-700',
};
