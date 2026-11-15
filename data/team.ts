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
  focus: { es: string; en: string };
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
      es: "Director del Innovation Lab",
      en: "Director of the Innovation Lab",
    },
    focus: {
      es: "AI Native Development, Physical AI, Cloud & Arquitectura de Sistemas",
      en: "AI Native Development, Physical AI, Cloud & Systems Architecture",
    },
    photo: "/images/staff/adrian.jpeg",
    bio: {
      es: "Fundador y director del Innovation Lab en Universidad Galileo. Google Developer Expert (GDE) en AI/Cloud y mentor de Google for Startups. Con más de 20 años de trayectoria, lidera investigación aplicada en agentes autónomos, modelos abiertos (Gemma), Physical AI con ROS 2 y sistemas en producción.",
      en: "Founder and director of the Innovation Lab at Universidad Galileo. Google Developer Expert (GDE) in AI/Cloud and Google for Startups mentor with 20+ years of experience leading applied research in autonomous agents, open models, and Physical AI.",
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
      es: "AI Builder & Investigador Científico",
      en: "AI Builder & Scientific Researcher",
    },
    focus: {
      es: "Arquitecturas Split-Brain, Finanzas con IA, Visión y Smart Contracts",
      en: "Split-Brain Architectures, AI Finance, Computer Vision & Smart Contracts",
    },
    photo: "/images/staff/luis.jpg",
    bio: {
      es: "Ingeniero de Sistemas y Ciencias de la Computación con Maestría en Investigación de Operaciones y 12 años de experiencia docente en Ciencias de la Computación. En el laboratorio desarrolla prototipos de IA con preservación de privacidad (Split-Brain Cover Letter, analizador financiero multi-banco Expense Tracker), interfaces de control para robótica (Mirobot, OBD-Connect) y apoya en programación competitiva.",
      en: "Systems and Computer Science Engineer with a Master's in Operations Research and 12 years of teaching experience in Computer Science. Builds privacy-preserving AI prototypes (Split-Brain Cover Letter, multi-bank Expense Tracker), hardware/robotics control interfaces (Mirobot, OBD-Connect), and mentors competitive programming.",
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
      es: "AI Builder & Investigadora Científica",
      en: "AI Builder & Scientific Researcher",
    },
    focus: {
      es: "Modelos Locales (Gemma / Qwen), Salud Digital por Voz e IoT",
      en: "Local LLMs (Gemma / Qwen), Voice Digital Health & IoT",
    },
    photo: "/images/staff/catherine-batres.jpeg",
    bio: {
      es: "Ingeniera en Electrónica, Informática y Ciencias de la Computación con Posgrado en Automatización y Control Industrial y Redes de Computadoras. Lidera benchmarks de modelos abiertos locales (Gemma 3 vs Qwen 3 en arquitecturas Split-Brain) y el desarrollo de PreConsulta, sistema de pre-consulta médica por voz con extracción semiológica estructurada y validación clínica.",
      en: "Electronics, Informatics, and Computer Science Engineer with postgraduate studies in Industrial Automation and Computer Networks. Leads local open-model benchmarks (Gemma 3 vs Qwen 3 in Split-Brain architectures) and PreConsulta, a voice-driven medical pre-consultation system with structured clinical extraction.",
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
      es: "Investigadora en inteligencia artificial",
      en: "AI researcher",
    },
    focus: {
      es: "Privacidad en IA, finanzas de ingreso variable e IoT",
      en: "AI privacy, variable-income finance, and IoT",
    },
    photo: "/images/staff/emily-curin.jpg",
    bio: {
      es: "Ingeniera en Mecatrónica con Maestría en Automatización Industrial y Sistemas Electrónicos. Construye sistemas de IA con validación determinista de privacidad (CoverLetter Privacy Gate y el motor cifrado Integral para ingresos variables con OCR y escenarios estadísticos).",
      en: "Mechatronics Engineer with a Master's in Industrial Automation and Electronic Systems. Builds AI systems with deterministic privacy validation (CoverLetter Privacy Gate and the encrypted Integral variable-income engine).",
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
      es: "Coordinador del equipo de prototipado",
      en: "Prototyping team coordinator",
    },
    focus: {
      es: "Prototipado de hardware y robótica",
      en: "Hardware prototyping and robotics",
    },
    photo: "/images/staff/luis-galicia.jpg",
    bio: {
      es: "Ingeniero en Electrónica e Ingeniero en Mecatrónica con Maestría en Redes y Automatización Industrial. Coordina el equipo de prototipado del laboratorio.",
      en: "Electronics and Mechatronics Engineer with a Master's in Computer Networks and Industrial Automation. Coordinates the Lab’s prototyping team.",
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
      es: "Diseñadora Gráfica Senior & Dirección Visual",
      en: "Senior Graphic Designer & Visual Direction",
    },
    focus: {
      es: "Identidad visual, comunicación científica y contenido digital",
      en: "Visual identity, science communication, and digital content",
    },
    photo: "/images/staff/holly.jpg",
    bio: {
      es: "Licenciada en Comunicación y Diseño por Universidad Galileo. Diseñadora Gráfica Senior a tiempo completo encargada de la identidad visual, los materiales educativos y la comunicación del Innovation Lab.",
      en: "Bachelor in Communication and Design from Universidad Galileo. Full-time Senior Graphic Designer leading visual identity, educational materials, and communications at the Innovation Lab.",
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
      es: "Ingeniero en Mecatrónica, Robótica & Physical AI",
      en: "Mechatronics, Robotics & Physical AI Engineer",
    },
    focus: {
      es: "ROS 2, ROSOrin Pro, Hexacóptero FY690S sin GPS, Diseño de PCB y Manufactura 3D",
      en: "ROS 2, ROSOrin Pro, GPS-Denied FY690S Hexacopter, Custom PCBs & 3D Manufacturing",
    },
    photo: "/images/staff/mario-cifuentes.png",
    bio: {
      es: "Ingeniero en Mecatrónica especializado en diseño de PCB, microcontroladores, CAD, manufactura aditiva y ROS 2. Lidera la integración físico-digital en robots autónomos como el manipulador móvil Hiwonder ROSOrin Pro (Jetson Orin Nano + cámara de profundidad 3D), el hexacóptero autónomo FY690S con navegación sin GPS por LiDAR y flujo óptico, y brazos robóticos para demostraciones en vivo.",
      en: "Mechatronics Engineer specialized in custom PCB design, microcontrollers, CAD, 3D manufacturing, and ROS 2. Leads physical-digital integration on autonomous robots including the Hiwonder ROSOrin Pro mobile manipulator, the GPS-denied FY690S hexacopter with 360° LiDAR and optical flow, and robotic arms.",
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
      es: "Ingeniera de sistemas y creadora de contenido",
      en: "Systems engineer and content creator",
    },
    focus: {
      es: "Análisis de datos y contenido del laboratorio",
      en: "Data analysis and Lab content",
    },
    photo: "/images/staff/yoselin-mejia.jpg",
    bio: {
      es: "Ingeniera de Sistemas por Universidad Galileo con experiencia en React, Firebase y análisis de datos. Forma parte del equipo de contenido del laboratorio.",
      en: "Systems Engineer from Universidad Galileo experienced in React, Firebase, and data analytics. Works on the Lab’s content team.",
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
      es: "Diseñadora Gráfica & Producción de Contenido",
      en: "Graphic Designer & Content Production",
    },
    focus: {
      es: "Diseño Editorial, Medios Sociales e Imagen Pública",
      en: "Editorial Design, Social Media & Public Image",
    },
    photo: "/images/staff/stephanie-sosa.png",
    bio: {
      es: "Diseñadora gráfica cerrando la Licenciatura en Comunicación y Diseño e iniciando la Maestría en Imagen Pública y Medios Sociales en Universidad Galileo. Especialista en creación de piezas visuales, narrativa gráfica para redes y cobertura de actividades del laboratorio.",
      en: "Graphic designer completing her Bachelor's in Communication and Design and pursuing a Master's in Public Image and Social Media at Universidad Galileo. Specializes in visual storytelling, social media assets, and event coverage.",
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
      es: "Voluntario · Cloud Computing & Ingeniería de Software con IA",
      en: "Volunteer · Cloud Computing & AI Software Engineering",
    },
    focus: {
      es: "Arquitectura Cloud, Certificaciones y Prototipos con IA",
      en: "Cloud Architecture, Certifications & AI Prototypes",
    },
    photo: "/images/staff/eduardo-tobar.jpg",
    bio: {
      es: "Estudiante de término de Ingeniería de Sistemas con distinción por excelencia académica en Universidad Galileo. Su línea de desarrollo en el laboratorio se enfoca en especialización y certificación en Cloud Computing, apoyo docente en cursos de nube y construcción de software con IA.",
      en: "Senior Systems Engineering student with academic excellence distinction at Universidad Galileo. Focuses on Cloud Computing certifications, cloud course instruction support, and AI-integrated software development.",
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
      es: "Voluntario · Technical Program Management & Agentes de IA",
      en: "Volunteer · Technical Program Management & AI Agents",
    },
    focus: {
      es: "Programas con Banco Industrial, IBM y Emprendimiento / Research Tech",
      en: "External Programs with Banco Industrial, IBM & Tech Research Entrepreneurship",
    },
    photo: "/images/staff/christian-martinez.png",
    bio: {
      es: "Ingeniero de Sistemas. Se especializa en gestión de programas tecnológicos e innovación abierta con aliados externos (Banco Industrial, IBM e iniciativas de Research & Entrepreneurship), además del diseño de agentes autónomos.",
      en: "Systems Engineer. Focuses on technical program management with external partners (Banco Industrial, IBM, and Research Entrepreneurship) and autonomous AI agents.",
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
      es: "Voluntario · Desarrollo Móvil & Gestión de Programas Externos",
      en: "Volunteer · Mobile Development & External Program Management",
    },
    focus: {
      es: "Coordinación Técnica (BI / IBM), Sistemas Móviles e Interfaces",
      en: "Technical Coordination (BI / IBM), Mobile Systems & Interfaces",
    },
    photo: "/images/staff/steven-marroquin.png",
    bio: {
      es: "Desarrollador móvil y estudiante de término de Ingeniería de Sistemas en Universidad Galileo. Colabora en la coordinación técnica de programas con entidades externas (Banco Industrial, IBM y emprendimiento tecnológico) y en el desarrollo de aplicaciones móviles e interfaces de alto rendimiento.",
      en: "Mobile developer and senior Systems Engineering student at Universidad Galileo. Collaborates on technical program management with industry partners (Banco Industrial, IBM) and high-performance mobile interfaces.",
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
      es: "Voluntario Maker · Mecánica Aplicada & Prototipado Físico",
      en: "Maker Volunteer · Applied Mechanics & Physical Prototyping",
    },
    focus: {
      es: "Transmisiones Mecánicas, Cajas de Cambios (Gearbox) y Mejora de Máquinas",
      en: "Mechanical Transmissions, Gearboxes & Machine Engineering",
    },
    photo: "/images/staff/ivan-rojas.png",
    bio: {
      es: "Estudiante de ingeniería en Universidad Galileo apasionado por el diseño mecánico y la optimización de máquinas. Desarrolla sistemas de transmisión, cajas de cambios impresas en 3D y mecanismos para los robots del laboratorio.",
      en: "Engineering student at Universidad Galileo passionate about mechanical design and machine optimization. Builds transmission systems, 3D-printed gearboxes, and robotic mechanisms.",
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
      es: "Voluntario Maker · Manufactura Aditiva e Impresión 3D",
      en: "Maker Volunteer · Additive Manufacturing & 3D Printing",
    },
    focus: {
      es: "Granja de Impresión 3D, Modelado CAD y Piezas Estructurales para Robótica",
      en: "3D Printing Farm, CAD Modeling & Structural Robotics Parts",
    },
    bio: {
      es: "Ingeniero en Mecatrónica encargado principal de la manufactura aditiva e impresión 3D dentro del Innovation Lab, produciendo chasis, actuadores y piezas estructurales para los prototipos físico-digitales.",
      en: "Mechatronics Engineer leading additive manufacturing and 3D printing inside the Innovation Lab, fabricating chassis, actuators, and structural parts for physical-digital prototypes.",
    },
  },
  {
    id: "raul-jolon",
    name: "Raúl Jolón",
    role: "assistant",
    cell: "volunteer",
    modality: "volunteer",
    title: {
      es: "Voluntario Maker · Integración Hardware/Software",
      en: "Maker Volunteer · Hardware/Software Integration",
    },
    focus: {
      es: "Sistemas Embebidos, Sensores e Integración IoT",
      en: "Embedded Systems, Sensors & IoT Integration",
    },
    bio: {
      es: "Estudiante de Ingeniería de Sistemas enfocado en la célula Maker del laboratorio, conectando microcontroladores, sensores y software para demostraciones interactivas.",
      en: "Systems Engineering student in the Lab's Maker cell, bridging microcontrollers, sensors, and software for interactive demonstrations.",
    },
  },
  {
    id: "daniel-salguero",
    name: "Daniel Salguero",
    role: "assistant",
    cell: "volunteer",
    modality: "volunteer",
    title: {
      es: "Voluntario · Aplicaciones Web Modernas & Auxiliar Docente",
      en: "Volunteer · Modern Web Applications & Teaching Assistant",
    },
    focus: {
      es: "Frontend/Full-Stack Web y Apoyo Académico en Ingeniería",
      en: "Frontend/Full-Stack Web & Academic Teaching Support",
    },
    bio: {
      es: "Auxiliar de cátedra en múltiples cursos dirigidos por el Ing. Adrián Catalán e integrante voluntario del laboratorio enfocado en la construcción de aplicaciones web modernas y herramientas educativas.",
      en: "Teaching assistant across multiple engineering courses directed by Ing. Adrián Catalán and Lab volunteer focused on modern web applications and educational tools.",
    },
  },
];
