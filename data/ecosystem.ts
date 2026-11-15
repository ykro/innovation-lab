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
  name: { es: string; en: string };
  coordinator: string;
  description: { es: string; en: string };
}

export interface LabEvent {
  id: "iwd" | "ai-dev" | "google-io" | "devfest";
  name: { es: string; en: string };
  description: { es: string; en: string };
}

export const workLines: WorkLine[] = [
  {
    id: "physical_ai",
    slug: "robotica-ia-fisica",
    title: {
      es: "Robótica Autónoma e IA Física",
      en: "Autonomous Robotics & Physical AI",
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
      es: "Electrónica, IoT y Manufactura 3D",
      en: "Electronics, IoT & 3D Manufacturing",
    },
    description: {
      es: "Diseño de tarjetas PCB propias, diagnóstico vehicular OBD-II, hidroponía automatizada certificada OSHWA, sensores ambientales y transmisión mecánica.",
      en: "Custom PCB design, OBD-II vehicle diagnostics, OSHWA-certified automated hydroponics, environmental sensors, and mechanical transmissions.",
    },
  },
  {
    id: "agents_llms",
    slug: "agentes-ia-privacidad",
    title: {
      es: "Agentes de IA y Privacidad Local",
      en: "AI Agents & Local Privacy",
    },
    description: {
      es: "Arquitecturas Split-Brain, evaluación de modelos abiertos en GPU y navegador (Gemma, Qwen, WebGPU), protocolos agénticos y tutores adaptativos.",
      en: "Split-Brain architectures, open-model evaluation on local GPUs and browsers (Gemma, Qwen, WebGPU), agentic protocols, and adaptive tutors.",
    },
  },
  {
    id: "health_fintech",
    slug: "salud-digital-fintech",
    title: {
      es: "Salud Digital y Tecnología Financiera",
      en: "Digital Health & Financial Technology",
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
      es: "Visión por Computadora y Realidad Espacial",
      en: "Computer Vision & Spatial Computing",
    },
    description: {
      es: "Reconocimiento de partidas de ajedrez y tableros físicos con cámaras cenitales, colocación de mobiliario en realidad aumentada e inspección visual.",
      en: "Chess and physical board recognition via overhead cameras, augmented reality furniture placement, and visual inspection.",
    },
  },
  {
    id: "nlp_generative",
    slug: "lenguaje-natural-medios-generativos",
    title: {
      es: "Lenguaje Natural y Medios Generativos",
      en: "Natural Language & Generative Media",
    },
    description: {
      es: "Traducción neuronal español–k'iche', análisis de sentimiento en conversaciones deportivas y generación multimodal de interfaces y narrativa visual.",
      en: "Spanish–K'iche' neural translation, sports sentiment analysis, and multimodal generation of interfaces and visual storytelling.",
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
    name: { es: "Club de Ajedrez", en: "Chess Club" },
    coordinator: "Emily Curín",
    description: {
      es: "Entrenamiento táctico, torneos internos y visión por computadora aplicada al tablero.",
      en: "Tactical training, internal tournaments, and computer vision applied to over-the-board play.",
    },
  },
  {
    id: "board-games",
    name: { es: "Club de Juegos de Mesa", en: "Board Games Club" },
    coordinator: "Emily Curín",
    description: {
      es: "Estrategia, teoría de juegos, análisis de mecánicas y sesiones abiertas para estudiantes.",
      en: "Strategy, game theory, mechanics analysis, and open student sessions.",
    },
  },
  {
    id: "competitive-programming",
    name: {
      es: "Club de Programación Competitiva",
      en: "Competitive Programming Club",
    },
    coordinator: "Emily Curín & Luis Cu",
    description: {
      es: "Resolución de estructuras de datos, grafos y algoritmos con preparación para competencias ICPC.",
      en: "Data structures, graphs, and algorithmic problem-solving for ICPC competitions.",
    },
  },
  {
    id: "cloud-ai",
    name: { es: "Club de Cloud AI", en: "Cloud AI Club" },
    coordinator: "Emily Curín & Andrés Tobar",
    description: {
      es: "Práctica en despliegue de agentes, arquitecturas serverless y modelos de IA en la nube.",
      en: "Hands-on practice deploying agents, serverless architectures, and cloud AI models.",
    },
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
