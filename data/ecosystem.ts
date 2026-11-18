import type { ProjectCategory } from "./projects";

export interface WorkLine {
  id: ProjectCategory;
  slug: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
}

export interface TimelineMilestone {
  year: string;
  text: { es: string; en: string };
}

export interface VolunteerTrack {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
}

export interface LabClub {
  id: string;
  slug: string;
  name: { es: string; en: string };
  coordinator: string;
  description: { es: string; en: string };
  activities: { es: string; en: string }[];
  projectIds: string[];
  photo?: LabPhoto;
  coverage?: LabCoverage;
  planned?: boolean;
}

export interface LabPhoto {
  src: string;
  source: string;
  caption: { es: string; en: string };
}

export interface LabCoverage {
  year: number;
  title: { es: string; en: string };
  summary: { es: string; en: string };
  url: string;
}

export interface LabEvent {
  id: "iwd" | "ai-dev" | "google-io" | "devfest";
  name: { es: string; en: string };
  description: { es: string; en: string };
  photo?: LabPhoto;
  overview: { es: string; en: string };
  audience: { es: string; en: string };
  topics: { es: string; en: string }[];
  coverage: LabCoverage;
}

export const workLines: WorkLine[] = [
  {
    id: "agents_llms",
    slug: "agentes-ia-privacidad",
    title: {
      es: "Agentes de IA",
      en: "AI Agents",
    },
    description: {
      es: "Arquitecturas Split-Brain, evaluación de modelos abiertos en GPU y navegador (Gemma, Qwen, WebGPU), protocolos agénticos y tutores adaptativos.",
      en: "Split-Brain architectures, open-model evaluation on local GPUs and browsers (Gemma, Qwen, WebGPU), agentic protocols, and adaptive tutors.",
    },
  },
  {
    id: "nlp_generative",
    slug: "lenguaje-natural-medios-generativos",
    title: {
      es: "Creatividad con IA",
      en: "Creativity with AI",
    },
    description: {
      es: "Traducción neuronal español–k'iche', análisis de sentimiento en conversaciones deportivas y generación multimodal de interfaces y narrativa visual.",
      en: "Spanish–K'iche' neural translation, sports sentiment analysis, and multimodal generation of interfaces and visual storytelling.",
    },
  },
  {
    id: "physical_ai",
    slug: "robotica-ia-fisica",
    title: {
      es: "Robots y sistemas autónomos",
      en: "Robots and Autonomous Systems",
    },
    description: {
      es: "Manipuladores móviles con ROS 2, hexacóptero autónomo sin GPS, brazos robóticos de seis ejes, prótesis impresas en 3D y gemelos digitales.",
      en: "ROS 2 mobile manipulators, GPS-denied autonomous hexacopters, six-axis robotic arms, 3D-printed prosthetics, and digital twins.",
    },
  },
  {
    id: "iot_hardware",
    slug: "electronica-iot-manufactura",
    title: {
      es: "Electrónica y fabricación digital",
      en: "Electronics and Digital Fabrication",
    },
    description: {
      es: "Diseño de tarjetas PCB propias, diagnóstico vehicular OBD-II, hidroponía automatizada certificada OSHWA, sensores ambientales y transmisión mecánica.",
      en: "Custom PCB design, OBD-II vehicle diagnostics, OSHWA-certified automated hydroponics, environmental sensors, and mechanical transmissions.",
    },
  },
  {
    id: "health_fintech",
    slug: "salud-digital-fintech",
    title: {
      es: "Tecnología para la salud y las finanzas",
      en: "Technology for Health and Finance",
    },
    description: {
      es: "Preconsulta médica por voz, triaje clínico offline en dispositivos móviles, bóvedas cifradas para ingresos variables y análisis de estados de cuenta.",
      en: "Voice medical intake, offline mobile clinical triage, encrypted vaults for variable income, and bank statement analytics.",
    },
  },
  {
    id: "vision_spatial",
    slug: "vision-computadora-realidad-espacial",
    title: {
      es: "Visión artificial y realidad aumentada",
      en: "Computer Vision and Augmented Reality",
    },
    description: {
      es: "Reconocimiento de partidas de ajedrez y tableros físicos con cámaras cenitales, colocación de mobiliario en realidad aumentada e inspección visual.",
      en: "Chess and physical board recognition via overhead cameras, augmented reality furniture placement, and visual inspection.",
    },
  },
];

export const majorEvents: LabEvent[] = [
  {
    id: "iwd",
    name: {
      es: "IWD (International Women's Day)",
      en: "IWD (International Women's Day)",
    },
    description: {
      es: "Encuentro anual en alianza con Women Techmakers que reúne a ingenieras, investigadoras y estudiantes en torno a charlas técnicas, talleres prácticos y mentoría.",
      en: "Annual conference with Women Techmakers bringing together women engineers, researchers, and students for technical talks, hands-on workshops, and mentorship.",
    },
    overview: {
      es: "Un encuentro para compartir experiencias técnicas y dar visibilidad a mujeres que trabajan en tecnología, liderazgo y emprendimiento.",
      en: "A gathering to exchange technical experience and highlight women working in technology, leadership, and entrepreneurship.",
    },
    audience: {
      es: "Estudiantes, profesionales y personas interesadas en aprender y conectar con la comunidad tecnológica.",
      en: "Students, professionals, and anyone interested in learning and connecting with the technology community.",
    },
    topics: [
      { es: "Inteligencia artificial y software", en: "Artificial intelligence and software" },
      { es: "Liderazgo y mentoría", en: "Leadership and mentorship" },
      { es: "Emprendimiento y comunicación", en: "Entrepreneurship and communication" },
    ],
    coverage: {
      year: 2026,
      title: { es: "Tecnología y liderazgo femenino", en: "Technology and women's leadership" },
      summary: {
        es: "La decimotercera edición reunió conferencias sobre IA, arquitecturas con colas, liderazgo y emprendimiento. Participaron Clarheelen Escobar, Hazel Saenz, Gabriela Tobar y Camila Sáenz.",
        en: "The thirteenth edition featured talks on AI, queue-based architectures, leadership, and entrepreneurship, with Clarheelen Escobar, Hazel Saenz, Gabriela Tobar, and Camila Sáenz.",
      },
      url: "https://www.galileo.edu/noticias/iwd2026-guatemala-innovacion-y-liderazgo-femenino-en-universidad-galileo/",
    },
    photo: {
      src: "/images/eventos/iwd-2026.png",
      source: "https://www.galileo.edu/noticias/iwd2026-guatemala-innovacion-y-liderazgo-femenino-en-universidad-galileo/",
      caption: {
        es: "IWD Guatemala 2026 en Universidad Galileo.",
        en: "IWD Guatemala 2026 at Universidad Galileo.",
      },
    },
  },
  {
    id: "ai-dev",
    name: {
      es: "AI Dev",
      en: "AI Dev",
    },
    description: {
      es: "Jornada especializada en ingeniería de software con inteligencia artificial, agentes autónomos, modelos abiertos y despliegue de sistemas en producción.",
      en: "Specialized conference focused on AI-native software engineering, autonomous agents, open models, and production deployment.",
    },
    overview: {
      es: "Una serie de encuentros para compartir cómo construir, evaluar e integrar inteligencia artificial en productos de software.",
      en: "A series of meetups about building, evaluating, and integrating artificial intelligence into software products.",
    },
    audience: {
      es: "Desarrolladores, estudiantes de ingeniería y equipos que trabajan con IA o quieren comenzar a integrarla.",
      en: "Developers, engineering students, and teams using AI or beginning to integrate it.",
    },
    topics: [
      { es: "Arquitectura de soluciones con IA", en: "AI solution architecture" },
      { es: "Evaluación de modelos de lenguaje", en: "Language model evaluation" },
      { es: "Flujos de trabajo y productos", en: "Workflows and products" },
    ],
    coverage: {
      year: 2026,
      title: { es: "AI Dev After Office", en: "AI Dev After Office" },
      summary: {
        es: "Augusto Álvarez abordó la evaluación con LLM-as-a-Judge. Carlos Alarcón compartió cómo integrar IA en flujos de trabajo. El encuentro incluyó conferencias, un conversatorio y networking.",
        en: "Augusto Álvarez explored evaluation with LLM-as-a-Judge. Carlos Alarcón discussed integrating AI into workflows. The meetup included talks, a panel discussion, and networking.",
      },
      url: "https://www.galileo.edu/noticias/ai-dev-after-office-la-importancia-de-la-validacion-de-la-inteligencia-artificial/",
    },
    photo: {
      src: "/images/eventos/ai-dev-2026.png",
      source: "https://www.galileo.edu/noticias/ai-dev-after-office-la-importancia-de-la-validacion-de-la-inteligencia-artificial/",
      caption: {
        es: "Participantes de AI Dev After Office en Universidad Galileo, 2026.",
        en: "AI Dev After Office participants at Universidad Galileo, 2026.",
      },
    },
  },
  {
    id: "google-io",
    name: {
      es: "Google I/O Extended",
      en: "Google I/O Extended",
    },
    description: {
      es: "Evento abierto a la comunidad de desarrolladores para explorar en vivo las novedades de IA, Android, Cloud y Web con demostraciones construidas en el laboratorio.",
      en: "Community developer event exploring the latest in AI, Android, Cloud, and Web with live hardware and software demos built in the Lab.",
    },
    overview: {
      es: "La comunidad local acerca las novedades de Google I/O a Guatemala mediante conferencias, experiencias prácticas y conversaciones con especialistas.",
      en: "The local community brings Google I/O developments to Guatemala through talks, practical experiences, and discussions with specialists.",
    },
    audience: {
      es: "Desarrolladores, universitarios, profesionales y estudiantes de colegios que se acercan al mundo de la tecnología.",
      en: "Developers, university students, professionals, and school students discovering technology.",
    },
    topics: [
      { es: "IA aplicada al desarrollo de software", en: "AI applied to software development" },
      { es: "Herramientas y tecnologías de Google", en: "Google tools and technologies" },
      { es: "Proyectos y comunidad", en: "Projects and community" },
    ],
    coverage: {
      year: 2026,
      title: { es: "Dos jornadas para aprender y conectar", en: "Two days of learning and connection" },
      summary: {
        es: "La edición 2026 combinó visitas de colegios a laboratorios con una jornada abierta de conferencias sobre IA. Participaron especialistas de Guatemala, Honduras, México y Colombia.",
        en: "The 2026 edition combined school visits to university labs with an open day of AI talks. Specialists from Guatemala, Honduras, Mexico, and Colombia participated.",
      },
      url: "https://www.galileo.edu/fisicc/historias-de-exito/google-io-extended-guatemala-2026-asi-se-vivio-en-universidad-galileo/",
    },
    photo: {
      src: "/images/eventos/google-io-2025.png",
      source: "https://www.galileo.edu/fisicc/noticias/asi-se-vivio-el-google-i-o-extended-guatemala-2025-en-universidad-galileo/",
      caption: {
        es: "Google I/O Extended Guatemala 2025 en Universidad Galileo.",
        en: "Google I/O Extended Guatemala 2025 at Universidad Galileo.",
      },
    },
  },
  {
    id: "devfest",
    name: {
      es: "DevFest",
      en: "DevFest",
    },
    description: {
      es: "Festival anual de tecnología y desarrollo de software que conecta a estudiantes y profesionales mediante sesiones prácticas de código, robótica e infraestructura en la nube.",
      en: "Annual technology and software festival connecting students and practitioners through hands-on coding, robotics, and cloud sessions.",
    },
    overview: {
      es: "Un festival de la comunidad Google Developer Groups para aprender de especialistas, intercambiar experiencias y conocer aplicaciones de tecnologías actuales.",
      en: "A Google Developer Groups community festival for learning from specialists, exchanging experience, and exploring applications of current technologies.",
    },
    audience: {
      es: "Estudiantes, desarrolladores y profesionales interesados en IA, aplicaciones móviles, web e infraestructura.",
      en: "Students, developers, and professionals interested in AI, mobile apps, web, and infrastructure.",
    },
    topics: [
      { es: "Google Cloud, Flutter y web", en: "Google Cloud, Flutter, and web" },
      { es: "IA, Kubernetes y robótica", en: "AI, Kubernetes, and robotics" },
      { es: "Ciberseguridad y hacking ético", en: "Cybersecurity and ethical hacking" },
    ],
    coverage: {
      year: 2025,
      title: { es: "DevFest Guatemala City", en: "DevFest Guatemala City" },
      summary: {
        es: "GDG Cloud Guatemala reunió en Universidad Galileo a especialistas de Perú, Colombia y Guatemala. Las sesiones abordaron IA, desarrollo móvil, web, Kubernetes, robótica y seguridad.",
        en: "GDG Cloud Guatemala brought specialists from Peru, Colombia, and Guatemala to Universidad Galileo. Sessions covered AI, mobile development, web, Kubernetes, robotics, and security.",
      },
      url: "https://www.galileo.edu/fisicc/historias-de-exito/universidad-galileo-fue-sede-del-devfest-guatemala-city-2025-la-comunidad-tecnologica-se-reunio-para-innovar-y-compartir-conocimiento/",
    },
    photo: {
      src: "/images/eventos/devfest-2025.jpg",
      source: "https://www.galileo.edu/fisicc/historias-de-exito/universidad-galileo-fue-sede-del-devfest-guatemala-city-2025-la-comunidad-tecnologica-se-reunio-para-innovar-y-compartir-conocimiento/",
      caption: {
        es: "Una charla de DevFest Guatemala City 2025.",
        en: "A talk at DevFest Guatemala City 2025.",
      },
    },
  },
];

export const volunteerTracks: VolunteerTrack[] = [
  {
    id: "research-ed",
    title: {
      es: "Research para Educación",
      en: "Research for Education",
    },
    description: {
      es: "Investigación aplicada en tecnología educativa, tutores adaptativos y aprendizaje asistido por IA con validación experimental.",
      en: "Applied research in educational technology, adaptive tutors, and AI-assisted learning with experimental validation.",
    },
  },
  {
    id: "software-dev",
    title: {
      es: "Desarrollo de Software",
      en: "Software Development",
    },
    description: {
      es: "Construcción de prototipos funcionales en web, dispositivos móviles y sistemas agénticos conectados a herramientas reales.",
      en: "Building functional web, mobile, and tool-connected agentic software prototypes.",
    },
  },
  {
    id: "llms-slms",
    title: {
      es: "LLMs y SLMs",
      en: "LLMs and SLMs",
    },
    description: {
      es: "Experimentación, fine-tuning, evaluación y despliegue de modelos de lenguaje grandes y pequeños como Gemma, Qwen y arquitecturas Split-Brain.",
      en: "Experimentation, fine-tuning, evaluation, and deployment of large and small language models such as Gemma, Qwen, and Split-Brain setups.",
    },
  },
  {
    id: "iax",
    title: {
      es: "IAX (Interacción Humano-IA)",
      en: "IAX (Human–AI Interaction)",
    },
    description: {
      es: "Diseño de experiencias nativas de IA más allá del chat tradicional: voz en tiempo real, lienzos generativos y flujos multimodales.",
      en: "Designing native AI experiences beyond chat boxes: real-time voice, generative canvases, and multimodal workflows.",
    },
  },
  {
    id: "low-level-ai",
    title: {
      es: "Low-Level AI Models",
      en: "Low-Level AI Models",
    },
    description: {
      es: "Optimización de modelos a bajo nivel, cuantización e inferencia local sobre CUDA, MPS, LiteRT, WebGPU y tarjetas embebidas.",
      en: "Low-level model optimization, quantization, and local inference across CUDA, MPS, LiteRT, WebGPU, and embedded boards.",
    },
  },
  {
    id: "marketing-events",
    title: {
      es: "Marketing para Eventos y Posgrados",
      en: "Marketing for Events & Graduate Programs",
    },
    description: {
      es: "Difusión, creación de contenido y crecimiento de audiencia para los eventos del laboratorio (IWD, AI Dev, Google I/O, DevFest) y los programas de posgrado.",
      en: "Outreach, content creation, and audience growth for the Lab's flagship events (IWD, AI Dev, Google I/O, DevFest) and graduate programs.",
    },
  },
  {
    id: "ui-ux",
    title: {
      es: "UI / UX",
      en: "UI / UX",
    },
    description: {
      es: "Diseño de interfaces y experiencia de usuario para los prototipos, landings y actividades del laboratorio.",
      en: "Interface and user experience design for the Lab's prototypes, web platforms, and activities.",
    },
  },
  {
    id: "makers",
    title: {
      es: "Más Makers",
      en: "More Makers",
    },
    description: {
      es: "Electrónica, mecatrónica, robótica móvil con ROS 2, diseño de PCB e impresión 3D para demostraciones físicas.",
      en: "Electronics, mechatronics, ROS 2 mobile robotics, custom PCBs, and 3D printing for physical demonstrations.",
    },
  },
];

export const labClubs: LabClub[] = [
  {
    id: "chess",
    slug: "ajedrez",
    name: { es: "Club de Ajedrez", en: "Chess Club" },
    coordinator: "Emily Curín",
    description: {
      es: "Entrenamiento táctico, torneos internos y visión por computadora aplicada al tablero.",
      en: "Tactical training, internal tournaments, and computer vision applied to over-the-board play.",
    },
    activities: [
      { es: "Practicar tácticas y analizar partidas.", en: "Practice tactics and analyze games." },
      { es: "Participar en torneos y actividades del club.", en: "Participate in club tournaments and activities." },
      { es: "Explorar la visión artificial aplicada al ajedrez.", en: "Explore computer vision applied to chess." },
    ],
    projectIds: ["chess-detection-cv"],
    photo: {
      src: "/images/clubes/ajedrez-2024.jpg",
      source: "https://www.galileo.edu/fisicc/noticias/vibrante-torneo-de-ajedrez-galileo/",
      caption: {
        es: "Una partida del Torneo de Ajedrez Galileo 2024.",
        en: "A game at the Torneo de Ajedrez Galileo 2024.",
      },
    },
    coverage: {
      year: 2025,
      title: { es: "Un torneo con estrategia y creatividad", en: "A tournament with strategy and creativity" },
      summary: {
        es: "El laboratorio organizó un torneo temático con disfraces. Los estudiantes colaboraron con los emparejamientos, las medallas y la organización de la jornada.",
        en: "The lab organized a costume-themed tournament. Students helped with pairings, medals, and running the event.",
      },
      url: "https://www.galileo.edu/noticias/estrategia-disfraces-y-diversion-sana-convivencia-el-torneo-del-club-de-ajedrez-de-universidad-galileo/",
    },
  },
  {
    id: "board-games",
    slug: "juegos-de-mesa",
    name: { es: "Club de Juegos de Mesa", en: "Board Games Club" },
    coordinator: "Emily Curín",
    description: {
      es: "Estrategia, teoría de juegos, análisis de mecánicas y sesiones abiertas para estudiantes.",
      en: "Strategy, game theory, mechanics analysis, and open student sessions.",
    },
    activities: [
      { es: "Descubrir juegos de mesa y compartir estrategias.", en: "Discover board games and share strategies." },
      { es: "Analizar decisiones y mecánicas de juego.", en: "Analyze decisions and game mechanics." },
      { es: "Conocer estudiantes de otras carreras a través del juego.", en: "Meet students from other programs through play." },
    ],
    projectIds: ["experimentos-gemini-tempo-lottery"],
    photo: {
      src: "/images/clubes/juegos-de-mesa-2026.jpg",
      source: "https://www.galileo.edu/fisicc/noticias/entre-estrategia-y-diversion-comparten-una-tarde-de-board-games/",
      caption: {
        es: "Imagen del reportaje sobre la Tarde de Board Games, 2026.",
        en: "Editorial image from the Tarde de Board Games report, 2026.",
      },
    },
    coverage: {
      year: 2026,
      title: { es: "Tarde de Board Games", en: "Board Games Afternoon" },
      summary: {
        es: "El Club de Ajedrez reunió a estudiantes de distintas carreras y niveles para compartir juegos, intercambiar ideas y practicar la toma de decisiones en equipo.",
        en: "The Chess Club brought students from different programs and years together to play, exchange ideas, and practice team decision-making.",
      },
      url: "https://www.galileo.edu/fisicc/noticias/entre-estrategia-y-diversion-comparten-una-tarde-de-board-games/",
    },
  },
  {
    id: "competitive-programming",
    slug: "programacion-competitiva",
    name: {
      es: "Club de Programación Competitiva",
      en: "Competitive Programming Club",
    },
    coordinator: "Emily Curín & Luis Cu",
    description: {
      es: "Resolución de estructuras de datos, grafos y algoritmos con preparación para competencias ICPC.",
      en: "Data structures, graphs, and algorithmic problem-solving for ICPC competitions.",
    },
    activities: [
      { es: "Resolver problemas de algoritmos y estructuras de datos.", en: "Solve algorithm and data structure problems." },
      { es: "Comparar soluciones y analizar su complejidad.", en: "Compare solutions and analyze their complexity." },
      { es: "Prepararse para competencias de programación ICPC.", en: "Prepare for ICPC programming competitions." },
    ],
    projectIds: [],
  },
  {
    id: "cloud-ai",
    slug: "cloud-ai",
    name: { es: "Club de Cloud AI", en: "Cloud AI Club" },
    coordinator: "Emily Curín & Andrés Tobar",
    description: {
      es: "Práctica en despliegue de agentes, arquitecturas serverless y modelos de IA en la nube.",
      en: "Hands-on practice deploying agents, serverless architectures, and cloud AI models.",
    },
    activities: [
      { es: "Explorar el despliegue de agentes de IA.", en: "Explore AI agent deployment." },
      { es: "Trabajar con arquitecturas serverless y modelos en la nube.", en: "Work with serverless architectures and cloud models." },
      { es: "Conectar prototipos con herramientas y servicios de IA.", en: "Connect prototypes to AI tools and services." },
    ],
    projectIds: ["split-brain-suite"],
    planned: true,
  },
];

export const labTimeline: TimelineMilestone[] = [
  {
    year: "2012",
    text: {
      es: "Inicia actividades en diciembre bajo la dirección del Ing. Adrián Catalán como un espacio abierto para construir prototipos de software móvil, electrónica e impresión 3D.",
      en: "Opened in December under the direction of Ing. Adrián Catalán as an open space for building mobile software, electronics, and 3D-printed prototypes.",
    },
  },
  {
    year: "2015–2018",
    text: {
      es: "Construcción del humanoide impreso en 3D Leonardo GreenMoov, drones controlados por gestos, diagnóstico automotriz OBD-II, hexápodos y redes neuronales de visión.",
      en: "Built the 3D-printed Leonardo GreenMoov humanoid, gesture-controlled drones, OBD-II vehicle diagnostics, hexapods, and early neural vision apps.",
    },
  },
  {
    year: "2024–2025",
    text: {
      es: "Desarrollo de tarjetas PCB propias, hidroponía certificada como hardware abierto, brazos robóticos, visión artificial en tableros físicos y aplicaciones multimodales.",
      en: "Engineered custom PCBs, OSHWA-certified automated hydroponics, robotic arms, board-game computer vision, and multimodal applications.",
    },
  },
  {
    year: "2026",
    text: {
      es: "Arquitecturas de privacidad Split-Brain, sistemas de salud por voz y finanzas con IA, traducción español–k'iche', navegación aérea sin GPS y robótica con ROS 2.",
      en: "Split-Brain privacy architectures, voice medical intake and AI fintech tools, Spanish–K'iche' translation, GPS-denied flight, and ROS 2 robotics.",
    },
  },
];
