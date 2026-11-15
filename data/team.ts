export type TeamCell =
  | "director"
  | "ai_builder"
  | "events_makers"
  | "mechatronics"
  | "design_content"
  | "volunteer";

export interface TeamMember {
  id: string;
  name: string;
  shortName?: string;
  role: "director" | "assistant";
  cell: TeamCell;
  modality: "full_time" | "part_time" | "volunteer";
  title: { es: string; en: string };
  photo?: string;
  bio?: { es: string; en: string };
  linkedin?: string;
  github?: string;
}

export const team: TeamMember[] = [
  {
    id: "adrian-catalan",
    name: "Adrián Catalán",
    shortName: "Adrián Catalán",
    role: "director",
    cell: "director",
    modality: "full_time",
    title: {
      es: "Director del Laboratorio de Innovación",
      en: "Director of the Innovation Lab",
    },
    photo: "/images/staff/adrian.jpeg",
    bio: {
      es: "Fundador y director del Laboratorio de Innovación. Google Developer Expert (GDE) en AI/Cloud y mentor de Google for Startups. Con más de 20 años de trayectoria, lidera investigación aplicada en agentes autónomos, modelos abiertos (Gemma), robótica con ROS 2 y sistemas en producción.",
      en: "Founder and director of the Innovation Lab. Google Developer Expert (GDE) in AI/Cloud and Google for Startups mentor with 20+ years of experience leading applied research in autonomous agents, open models, and ROS 2 robotics.",
    },
    linkedin: "https://www.linkedin.com/in/adriancatalan/",
  },
  {
    id: "luis-cu",
    name: "Luis Ricardo Jiménez Cu",
    shortName: "Luis Cu",
    role: "assistant",
    cell: "ai_builder",
    modality: "full_time",
    title: {
      es: "AI Builder e Investigador Científico",
      en: "AI Builder & Scientific Researcher",
    },
    photo: "/images/staff/luis.jpg",
    bio: {
      es: "Ingeniero de Sistemas y Ciencias de la Computación con Maestría en Investigación de Operaciones y 12 años de experiencia docente. Desarrolla prototipos de IA con preservación de privacidad (Split-Brain Cover Letter, analizador financiero multi-banco Expense Tracker), interfaces de control para robótica (Mirobot, OBD-Connect) y apoya en programación competitiva.",
      en: "Systems and Computer Science Engineer with a Master's in Operations Research and 12 years of teaching experience. Builds privacy-preserving AI prototypes (Split-Brain Cover Letter, multi-bank Expense Tracker), hardware/robotics control interfaces (Mirobot, OBD-Connect), and mentors competitive programming.",
    },
    linkedin: "https://www.linkedin.com/in/luis-ricardo-jimenez-cu-24074794/",
    github: "https://github.com/cuprumbot",
  },
  {
    id: "catherine-batres",
    name: "Cathy Batres",
    shortName: "Cathy Batres",
    role: "assistant",
    cell: "ai_builder",
    modality: "full_time",
    title: {
      es: "AI Builder e Investigadora Científica",
      en: "AI Builder & Scientific Researcher",
    },
    photo: "/images/staff/catherine-batres.jpeg",
    bio: {
      es: "Ingeniera en Electrónica, Informática y Ciencias de la Computación con Posgrado en Automatización y Control Industrial y Redes de Computadoras. Lidera benchmarks de modelos abiertos locales (Gemma 3 vs Qwen 3 en arquitecturas Split-Brain), el desarrollo de PreConsulta (sistema de preconsulta médica por voz) y controladores electrónicos de hardware abierto.",
      en: "Electronics, Informatics, and Computer Science Engineer with postgraduate studies in Industrial Automation and Computer Networks. Leads local open-model benchmarks (Gemma 3 vs Qwen 3 in Split-Brain architectures), PreConsulta (voice-driven medical intake), and open-source hardware controllers.",
    },
    github: "https://github.com/CatherineBatres",
  },
  {
    id: "emily-curin",
    name: "Emily Lissette Curín Moguel",
    shortName: "Emily Curín",
    role: "assistant",
    cell: "ai_builder",
    modality: "full_time",
    title: {
      es: "AI Builder e Investigadora Científica",
      en: "AI Builder & Scientific Researcher",
    },
    photo: "/images/staff/emily-curin.jpg",
    bio: {
      es: "Ingeniera en Mecatrónica con Maestría en Automatización Industrial y Sistemas Electrónicos. Construye sistemas de IA con validación determinista de privacidad (CoverLetter Privacy Gate y el motor cifrado Integral para ingresos variables), prototipos IoT y coordina los clubes estudiantiles del laboratorio.",
      en: "Mechatronics Engineer with a Master's in Industrial Automation and Electronic Systems. Builds AI systems with deterministic privacy validation (CoverLetter Privacy Gate and the encrypted Integral variable-income engine), IoT prototypes, and coordinates the Lab's student clubs.",
    },
    github: "https://github.com/EmilyCurin",
  },
  {
    id: "luis-galicia",
    name: "Luis Pablo Galicia Morataya",
    shortName: "Luis Galicia",
    role: "assistant",
    cell: "events_makers",
    modality: "full_time",
    title: {
      es: "Coordinador de eventos principales y del equipo de prototipado",
      en: "Coordinator of flagship events and the prototyping team",
    },
    photo: "/images/staff/luis-galicia.jpg",
    bio: {
      es: "Ingeniero en Electrónica e Ingeniero en Mecatrónica con Maestría en Redes y Automatización Industrial. Coordina los eventos principales del laboratorio (Google I/O Extended, DevFest, IWD), las demostraciones tecnológicas en colegios y supervisa el equipo de prototipado y makers.",
      en: "Electronics and Mechatronics Engineer with a Master's in Computer Networks and Industrial Automation. Coordinates the Lab's flagship events (Google I/O Extended, DevFest, IWD), school technology outreach, and the prototyping and Maker team.",
    },
    linkedin: "https://www.linkedin.com/in/luis-pablo-galicia-680071274",
  },
  {
    id: "holly-milian",
    name: "Holly Joelle Milián Barrios",
    shortName: "Holly Milián",
    role: "assistant",
    cell: "design_content",
    modality: "full_time",
    title: {
      es: "Diseño gráfico y generación de contenido",
      en: "Graphic design and content creation",
    },
    photo: "/images/staff/holly.jpg",
    bio: {
      es: "Licenciada en Comunicación y Diseño. Diseñadora gráfica a tiempo completo encargada de la identidad visual de los eventos, materiales educativos y comunicación digital del laboratorio.",
      en: "Bachelor in Communication and Design. Full-time graphic designer leading visual identity for events, educational materials, and digital communications at the Lab.",
    },
  },
  {
    id: "mario-cifuentes",
    name: "Mario Humberto Cifuentes Gálvez",
    shortName: "Mario Cifuentes",
    role: "assistant",
    cell: "mechatronics",
    modality: "part_time",
    title: {
      es: "Prototipado físico-digital y robótica",
      en: "Physical-digital prototyping and robotics",
    },
    photo: "/images/staff/mario-cifuentes.png",
    bio: {
      es: "Ingeniero en Mecatrónica especializado en diseño de PCB, microcontroladores, CAD, manufactura 3D y ROS 2. Lidera la integración físico-digital en robots autónomos como el manipulador móvil ROSOrin Pro, el hexacóptero autónomo FY690S sin GPS y brazos robóticos.",
      en: "Mechatronics Engineer specialized in custom PCB design, microcontrollers, CAD, 3D manufacturing, and ROS 2. Leads physical-digital integration on autonomous robots including the ROSOrin Pro mobile manipulator, the GPS-denied FY690S hexacopter, and robotic arms.",
    },
    linkedin: "https://www.linkedin.com/in/mario-humberto-cifuentes-galvez-575122290",
  },
  {
    id: "yoselin-mejia",
    name: "Yoselin Yovana Mejía López",
    shortName: "Yoselin Mejía",
    role: "assistant",
    cell: "design_content",
    modality: "part_time",
    title: {
      es: "Equipo de creación de contenido, marketing y posgrados",
      en: "Content creation, marketing, and graduate programs team",
    },
    photo: "/images/staff/yoselin-mejia.jpg",
    bio: {
      es: "Integra el equipo de creación de contenido y marketing del laboratorio, apoya la coordinación de los programas de posgrado y participa en la organización de eventos especializados como AI Dev.",
      en: "Member of the Lab's content creation and marketing team, supporting graduate program coordination and organizing specialized events such as AI Dev.",
    },
  },
  {
    id: "stephanie-sosa",
    name: "Stephanie Mishell Sosa García",
    shortName: "Stephanie Sosa",
    role: "assistant",
    cell: "design_content",
    modality: "part_time",
    title: {
      es: "Equipo de contenido y diseño gráfico",
      en: "Content and graphic design team",
    },
    photo: "/images/staff/stephanie-sosa.png",
    bio: {
      es: "Diseñadora gráfica en formación de Maestría en Imagen Pública y Medios Sociales. Desarrolla piezas visuales, narrativa gráfica para redes y cobertura de actividades del laboratorio.",
      en: "Graphic designer pursuing a Master's in Public Image and Social Media. Produces visual assets, social media graphics, and coverage for Lab activities.",
    },
  },
  {
    id: "eduardo-tobar",
    name: "Eduardo Andrés Tobar Hernández",
    shortName: "Andrés Tobar",
    role: "assistant",
    cell: "volunteer",
    modality: "volunteer",
    title: {
      es: "Voluntario · Cloud Computing",
      en: "Volunteer · Cloud Computing",
    },
    photo: "/images/staff/eduardo-tobar.jpg",
    bio: {
      es: "Estudiante de término de Ingeniería de Sistemas con distinción por excelencia académica. Se enfoca en arquitectura y certificación en Cloud Computing, apoyo en cursos de nube y desarrollo de software con IA.",
      en: "Senior Systems Engineering student with academic excellence distinction. Focuses on Cloud Computing architecture and certifications, cloud courses support, and AI software development.",
    },
    linkedin: "https://www.linkedin.com/in/andrés-tobar-90461528b/",
  },
  {
    id: "christian-martinez",
    name: "Christian Martínez",
    role: "assistant",
    cell: "volunteer",
    modality: "volunteer",
    title: {
      es: "Voluntario · Gestión de proyectos y programas",
      en: "Volunteer · Project and program management",
    },
    photo: "/images/staff/christian-martinez.png",
    bio: {
      es: "Ingeniero de Sistemas enfocado en la gestión de proyectos y programas con aliados externos (Banco Industrial, IBM e iniciativas de investigación y emprendimiento tecnológico), además del desarrollo de agentes de IA.",
      en: "Systems Engineer focused on managing projects and programs with external partners (Banco Industrial, IBM, and tech research entrepreneurship), alongside AI agent development.",
    },
    linkedin: "https://www.linkedin.com/in/christian-martinez-b9b707403/",
  },
  {
    id: "steven-marroquin",
    name: "Steven Samuel Marroquín González",
    shortName: "Samuel Marroquín",
    role: "assistant",
    cell: "volunteer",
    modality: "volunteer",
    title: {
      es: "Voluntario · Desarrollo móvil y gestión de programas",
      en: "Volunteer · Mobile development and program management",
    },
    photo: "/images/staff/steven-marroquin.png",
    bio: {
      es: "Desarrollador móvil y estudiante de término de Ingeniería de Sistemas. Colabora en la gestión de programas con entidades externas (Banco Industrial, IBM) y en el desarrollo de aplicaciones móviles.",
      en: "Mobile developer and senior Systems Engineering student. Collaborates on external program management (Banco Industrial, IBM) and mobile application development.",
    },
    linkedin: "https://www.linkedin.com/in/samuel-marroquín-0b1474321/",
  },
  {
    id: "ivan-rojas",
    name: "Gilber Iván Rojas González",
    shortName: "Iván Rojas",
    role: "assistant",
    cell: "volunteer",
    modality: "volunteer",
    title: {
      es: "Voluntario Maker · Mecánica y prototipado",
      en: "Maker Volunteer · Mechanics and prototyping",
    },
    photo: "/images/staff/ivan-rojas.png",
    bio: {
      es: "Estudiante de ingeniería enfocado en diseño mecánico y mejora de máquinas. Desarrolla sistemas de transmisión, cajas de cambios impresas en 3D y mecanismos para los robots del laboratorio.",
      en: "Engineering student focused on mechanical design and machine improvement. Builds transmission systems, 3D-printed gearboxes, and robotic mechanisms.",
    },
    linkedin: "https://gt.linkedin.com/in/ivan-rojas-96a588258",
  },
  {
    id: "gerardo-vazquez",
    name: "Gerardo Vázquez",
    role: "assistant",
    cell: "volunteer",
    modality: "volunteer",
    title: {
      es: "Voluntario Maker · Impresión 3D",
      en: "Maker Volunteer · 3D printing",
    },
    bio: {
      es: "Ingeniero en Mecatrónica encargado principal de la impresión 3D y manufactura aditiva del laboratorio, fabricando chasis, actuadores y piezas estructurales para los prototipos.",
      en: "Mechatronics Engineer in charge of 3D printing and additive manufacturing at the Lab, fabricating chassis, actuators, and structural parts for prototypes.",
    },
  },
  {
    id: "raul-jolon",
    name: "Raúl Jolón",
    role: "assistant",
    cell: "volunteer",
    modality: "volunteer",
    title: {
      es: "Voluntario Maker · Prototipos de hardware y software",
      en: "Maker Volunteer · Hardware and software prototypes",
    },
    bio: {
      es: "Estudiante de Ingeniería de Sistemas integrante del equipo Maker, conectando microcontroladores, sensores y software para demostraciones interactivas.",
      en: "Systems Engineering student in the Maker team, connecting microcontrollers, sensors, and software for interactive demonstrations.",
    },
  },
  {
    id: "daniel-salguero",
    name: "Daniel Salguero",
    role: "assistant",
    cell: "volunteer",
    modality: "volunteer",
    title: {
      es: "Voluntario · Desarrollo de aplicaciones web",
      en: "Volunteer · Web application development",
    },
    bio: {
      es: "Auxiliar de cátedra e integrante voluntario del laboratorio enfocado en el diseño y construcción de aplicaciones web modernas.",
      en: "Teaching assistant and Lab volunteer focused on designing and building modern web applications.",
    },
  },
];
