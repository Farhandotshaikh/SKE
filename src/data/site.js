// All copy below mirrors the SKE design file (placeholders included).

export const img = {
  logo: '/images/logo.png',
  hero: '/images/hero-heritage.jpg',
  gazebo: '/images/gazebo.jpg',
  arcade: '/images/heritage-arcade.jpg',
  libraryBuilding: '/images/library-building.jpg',
  crowd: '/images/crowd.jpg',
  lab: '/images/lab.jpg',
  library: '/images/library.jpg',
  sports: '/images/sports.jpg',
  seminar: '/images/seminar.jpg',
  exhibition: '/images/exhibition.jpg',
  planting: '/images/planting.jpg',
  courtyard: '/images/courtyard.jpg',
  corridor: '/images/corridor.jpg',
  auditorium: '/images/auditorium.jpg',
  avatars: ['/images/avatar-1.jpg', '/images/avatar-2.jpg', '/images/avatar-3.jpg'],
  alumni: ['/images/alumni-1.jpg', '/images/alumni-2.jpg', '/images/alumni-3.jpg'],
}

export const contact = {
  phone: '+91 00000 00000',
  email: 'info@yourdomain.org',
  addressLine1: 'R.P.D. College Road, Tilakwadi',
  addressLine2: 'Belagavi, Karnataka',
}

/* ---------------- Navigation ---------------- */

export const aboutMenu = [
  { title: 'About the Society', sub: 'Who we are and what we do', to: '/about' },
  { title: 'History & Legacy', sub: 'From Sawantwadi, 1944 to Belagavi', to: '/about#history' },
  { title: 'Vision & Mission', sub: 'What guides our institutions', to: '/about#vision-mission' },
  { title: 'Leadership', sub: 'The people leading SKE', to: '/about#leadership' },
  { title: 'Milestones', sub: 'Key moments since 1944', to: '/gallery' },
  { title: 'Governing Council', sub: 'Members of the Council', to: '/about/governing-council', external: true, divider: true },
]

export const instMenu = {
  colleges: [
    {
      title: 'GSS College',
      to: '/institute/gss-college',
    },
    {
      title: 'GSS PUC',
      to: '/institute/gss-puc',
    },
    {
      title: 'RPD Degree',
      to: '/institute/rpd-degree',
    },
    {
      title: 'RPD PUC',
      to: '/institute/rpd-puc',
    },
    {
      title: 'BCA College, Chandgad',
      to: '/institute/bca-chandgad',
    },
  ],
  schools: [
    { title: 'Swatantra Senani Baburao Thakur Memorial Institute', to: '/institutions/swatantra-senani-baburao-thakur-memorial-institute' },
    { title: 'Mohanlal Rampal Bhandari Kannada School', to: '/institutions/mohanlal-rampal-bhandari-kannada-school' },
    { title: 'Shri Vaikunth Mukund Shanbhag Marathi School', to: '/institutions/shri-vaikunth-mukund-shanbhag-marathi-school' },
    { title: 'Swadhyay Vidyamandir High School', to: '/institutions/swadhyay-vidyamandir-high-school' },
    { title: 'Thalakwadi High School', to: '/institutions/thalakwadi-high-school' },
  ],
}

export const progMenu = {
  degree: [
    { title: 'B.Sc.', sub: 'GSS Degree College' },
    { title: 'B.A.', sub: 'RPD Degree College' },
    { title: 'B.Com.', sub: 'RPD Degree College' },
    { title: 'BCA', sub: 'RPD Degree · BCA College, Chandgad' },
  ],
  pu: [
    { title: 'Science', sub: 'GSS PU College' },
    { title: 'Arts', sub: 'RPD PU College' },
    { title: 'Commerce', sub: 'RPD PU College' },
  ],
  certificate: [{ title: 'Certificate programmes', sub: 'Listed on each college’s Academics page' }],
}

export const navItems = [
  { label: 'About SKE', to: '/about', menu: 'about' },
  { label: 'Institutions', to: '/institutions', menu: 'institutions' },
  { label: 'Programmes', to: '/programmes', menu: 'programmes' },
  { label: 'News & Events', to: '/news-events' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Alumni', to: '/alumni' },
  { label: 'Contact', to: '/contact' },
]

/* ---------------- Home ---------------- */

export const institutions = {
  colleges: [
    {
      name: 'GSS College',
      image: img.arcade,
      caption: 'Build a strong foundation in science, supported by practical learning & a dedicated faculty.',
    },
    { name: 'GSS PUC', image: img.lab, caption: 'Two defining years in the science stream, with focused guidance for CET, NEET and JEE.' },
    { name: 'RPD Degree', image: img.courtyard, caption: 'Arts, commerce and computer applications on a campus rich with heritage.' },
    { name: 'RPD PUC', image: img.corridor, caption: 'Arts and commerce streams with guidance at every stage of the journey.' },
    {
      name: 'BCA College, Chandgad',
      image: img.courtyard, // Replace with actual BCA image
      caption: 'A focused learning environment for computer applications and professional growth.',
    },
  ],
  schools: [
    { name: 'Swatantra Senani Baburao Thakur Memorial Institute', image: img.seminar, caption: 'A caring start to learning, rooted in strong values and a sound academic base.' },
    { name: 'Mohanlal Rampal Bhandari Kannada School', image: img.library, caption: 'Kannada-medium education that nurtures confidence, language and curiosity.' },
    { name: 'Shri Vaikunth Mukund Shanbhag Marathi School', image: img.exhibition, caption: 'Marathi-medium schooling that keeps tradition and learning side by side.' },
    { name: 'Swadhyay Vidyamandir High School', image: img.planting, caption: 'High-school years that build discipline, teamwork and a love of learning.' },
    { name: 'Thalakwadi High School', image: img.sports, caption: 'A school community where academics, sport and character grow together.' },
  ],
}

export const homeProgrammes = [
  { id: 'bsc', cat: 'degree', tag: 'Degree', title: 'Bachelor of Science', sub: 'B.Sc.', inst: 'GSS Degree College' },
  { id: 'ba', cat: 'degree', tag: 'Degree', title: 'Bachelor of Arts', sub: 'B.A.', inst: 'RPD Degree College' },
  { id: 'bcom', cat: 'degree', tag: 'Degree', title: 'Bachelor of Commerce', sub: 'B.Com.', inst: 'RPD Degree College' },
  { id: 'bca', cat: 'degree', tag: 'Degree', title: 'Bachelor of Computer Applications', sub: 'BCA', inst: 'RPD Degree · BCA College, Chandgad' },
  { id: 'pucsci', cat: 'pu', tag: 'Pre-University', title: 'PUC Science', sub: 'Science stream', inst: 'GSS PU College' },
  { id: 'pucac', cat: 'pu', tag: 'Pre-University', title: 'PUC Arts & Commerce', sub: 'Arts and Commerce streams', inst: 'RPD PU College' },
  { id: 'cert', cat: 'certificate', tag: 'Certificate', title: 'Certificate Courses', sub: 'Offered alongside degree studies', inst: 'GSS & RPD Degree' },
]

export const homeSpaces = [
  { title: 'Science Innovation Centre', sub: 'GSS PUC & RPD', image: img.library },
  { title: 'Science Laboratories', sub: 'Physics • Chemistry • Biology', image: img.lab },
  { title: 'Sports Grounds', sub: 'Athletics • Indoor Games', image: img.sports },
]

export const partners = ['Rani Channamma University', 'Karnataka PU Board', 'NAAC', 'Partner Logo', 'Partner Logo']

export const news = [
  { tag: 'GSS PUC', date: 'Oct 12', title: 'Meraki Brings Schools Together for a Day of Talent', image: img.exhibition },
  { tag: 'GSS Degree', date: 'Oct 08', title: 'Srujan 2026: Where Student Talent Takes the Spotlight', image: img.seminar },
  { tag: 'SKE SOCIETY', date: 'Sep 29', title: 'Milan Unites the SKE Family in Celebration', image: img.planting },
]

export const testimonials = [
  { avatar: img.alumni[0] },
  { avatar: img.alumni[1] },
  { avatar: img.alumni[2] },
]

/* ---------------- Programmes page ---------------- */

export const programmes = [
  { id: 'bsc', cat: 'degree', tag: 'Degree', icon: 'FlaskConical', title: 'Bachelor of Science (B.Sc.)', desc: 'Science degree with laboratory-based learning. Subject combinations are listed on the college page.', inst: 'GSS Degree College', instKey: 'GSS', image: img.lab },
  { id: 'ba', cat: 'degree', tag: 'Degree', icon: 'BookOpen', title: 'Bachelor of Arts (B.A.)', desc: 'Humanities and social sciences, with language options.', inst: 'RPD Degree College', instKey: 'RPD', image: img.library },
  { id: 'bcom', cat: 'degree', tag: 'Degree', icon: 'Briefcase', title: 'Bachelor of Commerce (B.Com.)', desc: 'Accounting, finance and business fundamentals.', inst: 'RPD Degree College', instKey: 'RPD', image: img.seminar },
  { id: 'bca', cat: 'degree', tag: 'Degree', icon: 'Monitor', title: 'Bachelor of Computer Applications (BCA)', desc: 'Programming, databases and application development.', inst: 'RPD Degree College', instKey: 'RPD', image: img.exhibition },
  { id: 'bcac', cat: 'degree', tag: 'Degree', icon: 'Cpu', title: 'BCA — Chandgad', desc: 'The BCA programme at the Society’s Chandgad college.', inst: 'BCA College, Chandgad', instKey: 'BCA', image: img.courtyard },
  { id: 'pucsci', cat: 'pu', tag: 'Pre-University', icon: 'Target', title: 'PUC Science', desc: 'Science stream with CET, NEET and JEE preparation.', inst: 'GSS PU College', instKey: 'GSS', image: img.corridor },
  { id: 'puccom', cat: 'pu', tag: 'Pre-University', icon: 'Calculator', title: 'PUC Commerce', desc: 'Commerce stream with accountancy and business studies.', inst: 'RPD PU College', instKey: 'RPD', image: img.auditorium },
  { id: 'pucarts', cat: 'pu', tag: 'Pre-University', icon: 'Feather', title: 'PUC Arts', desc: 'Arts stream with history, economics and languages.', inst: 'RPD PU College', instKey: 'RPD', image: img.planting },
  { id: 'cert', cat: 'certificate', tag: 'Certificate', icon: 'Award', title: 'Certificate Courses', desc: 'Short certificate programmes offered alongside degree studies.', inst: 'GSS & RPD Degree', instKey: 'BOTH', image: img.courtyard },
]

export const whyStudy = [
  { icon: 'Landmark', title: '80+ Years of Legacy', desc: 'Educating Belagavi since 1944, from school to degree.' },
  { icon: 'Award', title: 'University Affiliated', desc: 'Degree colleges affiliated to Rani Channamma University, Belagavi.' },
  { icon: 'Briefcase', title: 'Placement Support', desc: 'Campus recruitment, internships, soft-skills and aptitude training.' },
  { icon: 'Target', title: 'Competitive Exam Prep', desc: 'CET, NEET and JEE preparation for pre-university students.' },
]

/* ---------------- Facilities page ---------------- */

export const facilityFilters = [
  { key: 'all', label: 'All' },
  { key: 'degree', label: 'GSS & RPD Degree' },
  { key: 'puc', label: 'GSS & RPD PUC' },
  { key: 'bca', label: 'BCA College, Chandgad' },
  { key: 'schools', label: 'Schools' },
]

const everywhere = ['degree', 'puc', 'bca', 'schools']
export const facilities = [
  { id: 'lib', icon: 'BookOpen', title: 'Central Library', inst: 'GSS & RPD Degree', campuses: ['degree'], image: img.library },
  { id: 'lab', icon: 'FlaskConical', title: 'Science Laboratories', inst: 'GSS & RPD PUC', campuses: ['puc'], image: img.lab },
  { id: 'aud', icon: 'Mic', title: 'Auditorium', inst: 'SKE Society', campuses: everywhere, image: img.auditorium },
  { id: 'spo', icon: 'Trophy', title: 'Sports Grounds', inst: 'All Campuses', campuses: everywhere, image: img.sports },
  { id: 'sem', icon: 'Presentation', title: 'Seminar Halls', inst: 'GSS & RPD Degree', campuses: ['degree'], image: img.seminar },
  { id: 'com', icon: 'Monitor', title: 'Computer Lab', inst: 'BCA College, Chandgad', campuses: ['bca'], image: null },
]

export const beyondClass = [
  { icon: 'Users', label: 'Clubs & Societies' },
  { icon: 'Music', label: 'Cultural Events' },
  { icon: 'Wifi', label: 'Wi-Fi Enabled Campus' },
  { icon: 'Coffee', label: 'Canteen' },
]

export const landmarks = [
  { campus: 'Tilakwadi Campus', title: 'The Patwardhan Palace', desc: 'Summer palace of the Jamakhandi rulers; the college’s home since 1948.', image: img.courtyard },
  { campus: 'Tilakwadi Campus', title: 'RPD College Building', desc: 'Placeholder — short description to be confirmed.', image: img.corridor },
  { campus: 'Tilakwadi Campus', title: 'GSS Science Block', desc: 'Placeholder — short description to be confirmed.', image: null },
  { campus: 'Chandgad', title: 'Chandgad Campus', desc: 'Placeholder — short description to be confirmed.', image: null },
]
