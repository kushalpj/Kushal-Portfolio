// Single source of truth for all portfolio content.
// Only information supplied by Kushal is used here — nothing is invented.
// To show GitHub / Live Demo buttons on a project, add `github` and/or `live`
// URLs to that project. Buttons render only when a URL is present.

export const profile = {
  name: 'Kushal P J',
  logo: 'KUSHAL.PJ',
  email: 'kushk6705@gmail.com',
  phone: '+91 9742540417',
  location: 'Bengaluru, India',
  github: 'https://github.com/kushalpj',
  linkedin: 'https://www.linkedin.com/in/kushal-p-j-03424a314/',
  photo: '/profile.jpg',
  // Place the resume PDF at /public/resume.pdf (see README).
  resume: '/resume.pdf',
  roles: [
    'Software Developer',
    'Python Developer',
    'React Developer',
    'Machine Learning Enthusiast',
  ],
  heroText:
    "I'm a Computer Science and Design Engineering graduate passionate about building useful web applications, intelligent systems, and modern digital experiences.",
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    "I'm a Computer Science and Design Engineering graduate from ATME College of Engineering. I enjoy developing responsive web applications, exploring backend technologies, and experimenting with machine learning solutions.",
    'My technical foundation includes Python, Django, React, JavaScript, HTML, CSS, MySQL, and SQL.',
    'I enjoy solving problems, learning new technologies, and transforming ideas into practical applications.',
  ],
  facts: [
    { label: 'Degree', value: 'B.E. Computer Science and Design Engineering' },
    { label: 'College', value: 'ATME College of Engineering' },
    { label: 'Graduation', value: '2026' },
    { label: 'CGPA', value: '8.3/10' },
    { label: 'Location', value: 'Bengaluru, India' },
  ],
  // Every figure below is derived from the supplied resume content.
  stats: [
    { value: '8.3', label: 'CGPA / 10' },
    { value: '4', label: 'Projects built' },
    { value: '4', label: 'ML models compared' },
    { value: '2026', label: 'Graduation' },
  ],
}

// `icon` keys are resolved in Skills.jsx
export const skillCategories = [
  { title: 'Programming', icon: 'code', skills: [{ name: 'Python', icon: 'python' }, { name: 'JavaScript', icon: 'javascript' }] },
  {
    title: 'Frontend',
    icon: 'frontend',
    skills: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'React.js', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Django', icon: 'django' },
      { name: 'Django ORM', icon: 'django' },
      { name: 'Authentication', icon: 'lock' },
      { name: 'CRUD operations', icon: 'server' },
      { name: 'REST API fundamentals', icon: 'server' },
    ],
  },
  { title: 'Database', icon: 'database', skills: [{ name: 'MySQL', icon: 'mysql' }, { name: 'SQL', icon: 'database' }] },
  {
    title: 'Machine Learning',
    icon: 'brain',
    skills: [
      { name: 'CNN', icon: 'brain' },
      { name: 'Scikit-learn', icon: 'sklearn' },
      { name: 'Logistic Regression', icon: 'brain' },
      { name: 'Decision Tree', icon: 'brain' },
      { name: 'K-Nearest Neighbors', icon: 'brain' },
      { name: 'Random Forest', icon: 'brain' },
      { name: 'Data preprocessing', icon: 'brain' },
      { name: 'Exploratory Data Analysis', icon: 'brain' },
    ],
  },
  {
    title: 'Tools',
    icon: 'tools',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'code' },
      { name: 'Axios', icon: 'axios' },
      { name: 'JSON Server', icon: 'json' },
    ],
  },
]

export const experience = [
  {
    role: 'Data Science Intern',
    company: 'Princeton Smart Engineers',
    year: '2026',
    points: [
      'Worked through the data science workflow, including data preprocessing, exploratory data analysis, model training, evaluation, and deployment.',
      'Implemented and compared four machine learning models.',
      'Used Scikit-learn for Logistic Regression, Decision Tree, K-Nearest Neighbors, and Random Forest.',
      'Used charts and visual analysis to understand datasets and review model results.',
      'Developed an Employee Performance Prediction project using machine learning.',
    ],
  },
]

export const projects = [
  {
    id: 'waste-detection',
    title: 'CNN-Based Waste Detection and Geospatial Dustbin Recommendation',
    kicker: 'AI + Sustainable Smart City Solutions',
    visual: 'waste',
    description: [
      'Designed and trained a Convolutional Neural Network for automated waste classification using image preprocessing techniques.',
      'Developed a geospatial recommendation engine to determine optimal dustbin placement using location-based analytics.',
    ],
    tech: ['Python', 'CNN', 'Deep Learning', 'Image Processing'],
    features: [],
  },
  {
    id: 'vyvento',
    title: 'Vyvento – React-Based E-Commerce Web Application',
    kicker: 'React · REST API',
    visual: 'shop',
    description: [
      'Developed a React-based shopping application featuring product listings, category navigation, and cart management.',
    ],
    tech: ['React.js', 'Axios', 'JSON Server', 'JavaScript'],
    features: [
      'Product listing',
      'Category navigation',
      'Cart management',
      'REST API integration',
      'Product retrieval, addition, and deletion',
      'Reusable components',
      'React Router navigation',
      'Toast notifications',
    ],
  },
  {
    id: 'blood-bank',
    title: 'Blood Bank Management System',
    kicker: 'Full-stack · Role-based',
    visual: 'blood',
    description: [
      'Developed a web application that coordinates blood donors, hospitals, and administrators.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    features: [
      'Donor registration',
      'Blood inventory tracking',
      'Hospital blood requests',
      'Role-based access control',
      'CRUD operations',
    ],
  },
  {
    id: 'employee-performance',
    title: 'Employee Performance Prediction',
    kicker: 'Data Science Internship · Princeton Smart Engineers',
    visual: 'ml',
    description: [
      'Developed during the Data Science Internship at Princeton Smart Engineers.',
      'Implemented and compared Logistic Regression, Decision Tree, K-Nearest Neighbors, and Random Forest models.',
    ],
    tech: ['Python', 'Scikit-learn', 'Machine Learning'],
    features: [],
  },
]

export const education = [
  {
    title: 'B.E. Computer Science and Design Engineering',
    school: 'ATME College of Engineering',
    years: '2022–2026',
    score: 'CGPA: 8.3/10',
  },
  {
    title: 'Pre-University Certificate (Science)',
    school: 'Marimallappa PU College',
    years: '2020–2022',
    score: 'Score: 65%',
  },
  {
    title: 'SSLC',
    school: 'Sri Sathya Sai Sharadanikethanam',
    years: '2020',
    score: 'Score: 85.9%',
  },
]
