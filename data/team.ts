export interface TeamMember {
  id: string;
  name: string;
  role: "director" | "assistant";
  photo?: string;
  bio?: { es: string; en: string };
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    id: "adrian-catalan",
    name: "Adrian Catalan",
    role: "director",
    photo: "/images/staff/adrian.jpeg",
    bio: {
      es: "Director del Postgrado en Desarrollo de Software y del Innovation Lab en Universidad Galileo. Es Google Developer Expert y mentor de Google for Startups. Con más de 20 años de experiencia, combina docencia y consultoría en inteligencia artificial, cloud computing y software. Ha impulsado comunidades y proyectos tecnológicos con impacto regional e internacional. Apasionado por la ultradistancia y el montañismo, vincula liderazgo y resiliencia con la tecnología.",
      en: "Director of the Graduate Program in Software Development and the Innovation Lab at Universidad Galileo. Google Developer Expert and Google for Startups mentor. With over 20 years of experience, he combines teaching and consulting in artificial intelligence, cloud computing, and software. He has driven tech communities and projects with regional and international impact. Passionate about ultra-distance running and mountaineering, he links leadership and resilience with technology.",
    },
    linkedin: "https://www.linkedin.com/in/adriancatalan/",
  },
  {
    id: "luis-cu",
    name: "Luis Cu",
    role: "assistant",
    photo: "/images/staff/luis.jpg",
    bio: {
      es: "Luis es Ingeniero de Sistemas y Ciencias de la Computación, con Maestría en Investigación de Operaciones. Cuenta con 12 años de experiencia como docente de Ciencias de la Computación. Entre sus intereses académicos se encuentran la educación de ingeniería, programación competitiva, blockchain y smart contracts, y hardware.",
      en: "Systems Engineer with a Master's in Operations Research. He has 12 years of experience teaching Computer Science. His academic interests include engineering education, competitive programming, blockchain, smart contracts, and hardware.",
    },
    linkedin: "https://www.linkedin.com/in/luis-ricardo-jimenez-cu-24074794/",
  },
  {
    id: "luis-galicia",
    name: "Luis Pablo Galicia Morataya",
    role: "assistant",
    photo: "/images/staff/luis-galicia.jpg",
    bio: {
      es: "Ingeniero en mecatrónica con maestría en ingenierías con especialización en redes de computadoras y automatización industrial.",
      en: "Mechatronics Engineer with a Master's in Engineering, specialized in computer networks and industrial automation.",
    },
    linkedin: "https://www.linkedin.com/in/luis-pablo-galicia-680071274",
  },
  {
    id: "holly-milian",
    name: "Holly Joelle Milián Barrios",
    role: "assistant",
    photo: "/images/staff/holly.jpg",
    bio: {
      es: "Licenciada en Comunicación y Diseño, egresada de la Universidad Galileo. Diseñadora Senior y parte del equipo de Educación.",
      en: "Bachelor in Communication and Design from Universidad Galileo. Senior Designer and part of the Education team.",
    },
  },
  {
    id: "catherine-batres",
    name: "Catherine Noemí Batres Soto",
    role: "assistant",
    photo: "/images/staff/catherine-batres.jpeg",
    bio: {
      es: "Ingeniera en Electrónica, Informática y Ciencias de la Computación, con Postgrado en Automatización y Control Industrial y Redes de Computadoras. Destaca por liderazgo, innovación, aprendizaje continuo y trabajo en equipo. Maneja Python, Java, Angular, MySQL, Cisco Packet Tracer y Excel avanzado. Cuenta con certificaciones Microsoft Office Specialist, Comunicación Efectiva e inglés C1+, orientando su perfil al desarrollo tecnológico y gestión de proyectos innovadores.",
      en: "Engineer in Electronics and Computer Science with postgraduate studies in automation and networks. Skilled in multiple technologies, focused on innovation and project development.",
    },
  },
  {
    id: "christian-martinez",
    name: "Christian Martinez",
    role: "assistant",
    photo: "/images/staff/christian-martinez.png",
    bio: {
      es: "Estudiante de Ingeniería en Sistemas y posgrado en Desarrollo de Software en Universidad Galileo. Interesado en el diseño de agentes de IA autónomos y Data Science.",
      en: "Systems Engineering student and Software Development graduate student at Universidad Galileo. Interested in autonomous AI agents and data science.",
    },
    linkedin: "https://www.linkedin.com/in/christian-martinez-b9b707403/",
  },
  {
    id: "emily-curin",
    name: "Emily Lissette Curín Moguel",
    role: "assistant",
    photo: "/images/staff/emily-curin.jpg",
    bio: {
      es: "Ingeniera en Mecatrónica con Maestría en Automatización Industrial y Sistemas Electrónicos. Experiencia en control de motores y soluciones IoT usando ESP32, MQTT y plataformas en la nube para visualización de datos en tiempo real. Parte del Innovation Lab de Universidad Galileo en proyectos interdisciplinarios. Coordinación del club de Ajedrez y apoyo en club de programación competitiva, promoviendo pensamiento lógico, docencia y organización de iniciativas tecnológicas y educativas.",
      en: "Mechatronics Engineer with a Master's in Industrial Automation and Electronic Systems. Experience in motor control and IoT solutions using ESP32, MQTT, and cloud platforms for real-time data visualization. Part of the Innovation Lab at Universidad Galileo, working on interdisciplinary projects. Coordinates a chess club and supports competitive programming initiatives, promoting logical thinking, teaching, and tech-driven activities.",
    },
  },
  {
    id: "stephanie-sosa",
    name: "Stephanie Mishell Sosa García",
    role: "assistant",
    photo: "/images/staff/stephanie-sosa.png",
    bio: {
      es: "Soy Stephanie Mishell Sosa García, finalizando mi licenciatura en Comunicación y Diseño e iniciando una maestría en Imagen Pública y Medios Sociales. Me desarrollo como diseñadora gráfica, destacando por mi creatividad y atención al detalle. Soy una persona proactiva y en constante aprendizaje. Manejo herramientas como Photoshop e Illustrator, creando contenido visual atractivo. Tengo interés en emprender y seguir creciendo profesionalmente en el área del diseño.",
      en: "Graphic designer in training, finishing a degree in Communication and Design and starting a Master's in Public Image and Social Media. Skilled in Photoshop and Illustrator, focused on creativity and visual content.",
    },
  },
  {
    id: "steven-marroquin",
    name: "Steven Samuel Marroquín González",
    role: "assistant",
    photo: "/images/staff/steven-marroquin.png",
    bio: {
      es: "Programador móvil y estudiante de ingeniería en sistemas. Apasionado de los sistemas a bajo nivel y las interfaces hermosas. Jardinero en mis tiempos libres.",
      en: "Mobile developer and Systems Engineering student. Passionate about low-level systems and beautiful interfaces. Enjoys gardening in free time.",
    },
    linkedin: "https://www.linkedin.com/in/samuel-marroquín-0b1474321/",
  },
  {
    id: "yoselin-mejia",
    name: "Yoselin Yovana Mejía López",
    role: "assistant",
    photo: "/images/staff/yoselin-mejia.jpg",
    bio: {
      es: "Estudiante de Ingeniería en Sistemas en la Universidad Galileo, interesada en desarrollo web, análisis de datos y soluciones tecnológicas accesibles. Cuenta con experiencia en proyectos usando React, Firebase y modelado de datos. Actualmente colabora en el Laboratorio de Innovación, impulsando iniciativas STEM mediante prototipos y actividades prácticas. Se caracteriza por un enfoque analítico, creatividad y orientación a resolver problemas reales con tecnología.",
      en: "Systems Engineering student at Universidad Galileo, interested in web development, data analysis, and accessible tech solutions. Experienced with React, Firebase, and data modeling, and collaborates in the Innovation Lab supporting STEM initiatives.",
    },
  },
  {
    id: "eduardo-tobar",
    name: "Eduardo Andrés Tobar Hernández",
    role: "assistant",
    photo: "/images/staff/eduardo-tobar.jpg",
    bio: {
      es: "Soy estudiante de Ingeniería de Sistemas con distinción por excelencia académica. En el laboratorio, mi trabajo se enfoca en el diseño y desarrollo de software que integra Inteligencia Artificial.",
      en: "Systems Engineering student with academic excellence distinction. Focused on software development integrating artificial intelligence.",
    },
    linkedin: "https://www.linkedin.com/in/andrés-tobar-90461528b/",
  },
  {
    id: "ivan-rojas",
    name: "Gilber Iván Rojas González",
    role: "assistant",
    photo: "/images/staff/ivan-rojas.png",
    bio: {
      es: "Me llamo Iván soy estudiante en la Universidad Galileo, me gusta aprender y mejorar máquinas. Me encanta la mecánica.",
      en: "My name is Iván, I am a student at Universidad Galileo. I enjoy learning and improving machines, with a strong interest in mechanics.",
    },
    linkedin: "https://gt.linkedin.com/in/ivan-rojas-96a588258",
  },
  {
    id: "mario-cifuentes",
    name: "Mario Humberto Cifuentes Galvez",
    role: "assistant",
    photo: "/images/staff/mario-cifuentes.png",
    bio: {
      es: "Estudiante de Ingeniería apasionado por la electrónica y el desarrollo de soluciones tecnológicas. Cuento con experiencia en diseño de PCB, microcontroladores y manufactura, integrando sensores avanzados y manufactura 3D para optimizar el rendimiento de hardware. Me enfoco en transformar ideas complejas en herramientas funcionales, eficientes y listas para el mundo real.",
      en: "Engineering student passionate about electronics and tech solutions. Experienced in PCB design, microcontrollers, and manufacturing, integrating sensors and 3D manufacturing for optimized hardware.",
    },
    linkedin: "https://www.linkedin.com/in/mario-humberto-cifuentes-galvez-575122290",
  },
];
