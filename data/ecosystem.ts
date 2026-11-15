export interface TimelineMilestone {
  year: string;
  era: { es: string; en: string };
  title: { es: string; en: string };
  detail: { es: string; en: string };
}

export interface VolunteerTrack {
  id: string;
  code: string;
  title: { es: string; en: string };
  tag: { es: string; en: string };
  description: { es: string; en: string };
  deliverables: { es: string; en: string };
}

export interface LabClub {
  id: string;
  name: { es: string; en: string };
  status: "active" | "upcoming";
  coordinator: string;
  description: { es: string; en: string };
}

export interface LabEvent {
  id: string;
  name: { es: string; en: string };
  lead: string;
  scope: { es: string; en: string };
}

export const labTimeline: TimelineMilestone[] = [
  {
    year: "DIC 2012",
    era: { es: "Fundación", en: "Foundation" },
    title: {
      es: "Apertura del Innovation Lab en Universidad Galileo",
      en: "Opening of the Innovation Lab at Universidad Galileo",
    },
    detail: {
      es: "Nace en diciembre de 2012 bajo la dirección del Ing. Adrián Catalán como un espacio de experimentación abierta para construir prototipos de software móvil, electrónica e impresión 3D.",
      en: "Founded in December 2012 under Ing. Adrián Catalán as Universidad Galileo's open experimentation lab for mobile software, electronics, and 3D printing prototypes.",
    },
  },
  {
    year: "2015–2018",
    era: { es: "Robótica, AR/VR y Visión", en: "Robotics, AR/VR & Vision" },
    title: {
      es: "Humanoides impresos en 3D, realidad mixta y visión neuronal",
      en: "3D-printed humanoids, mixed reality, and neural vision",
    },
    detail: {
      es: "Construcción del robot humanoide Leonardo GreenMoov (Oculus Rift + Leap Motion), ILDrone controlado por gestos con Intel Edison, diagnóstico automotriz OBD-II, hexápodos en Android Things y transferencia de estilo con TensorFlow.",
      en: "Built the Leonardo GreenMoov humanoid robot (Oculus Rift + Leap Motion), Intel Edison gesture drones, OBD-II vehicle telemetry, Android Things hexapods, and early TensorFlow style transfer.",
    },
  },
  {
    year: "2024–2025",
    era: { es: "IA Multimodal y Mecatrónica", en: "Multimodal AI & Mechatronics" },
    title: {
      es: "Prototipos multimodales, tarjetas PCB propias y robótica educativa",
      en: "Multimodal prototypes, custom PCBs, and educational robotics",
    },
    detail: {
      es: "Sistemas que convierten bocetos en aplicaciones (Cosmic Oracle), telemetría biomecánica (RunSight), hidroponía automatizada, detección de ajedrez por visión artificial y nuevas plataformas mecatrónicas.",
      en: "Systems turning napkin sketches into apps (Cosmic Oracle), biomechanical runner telemetry (RunSight), automated hydroponics, computer-vision chess detection, and mechatronic platforms.",
    },
  },
  {
    year: "2026",
    era: { es: "Agentes, Modelos Locales y Physical AI", en: "Agents, Local Models & Physical AI" },
    title: {
      es: "Arquitecturas Split-Brain, salud y finanzas con IA, ROS 2 y navegación sin GPS",
      en: "Split-Brain architectures, AI health and finance, ROS 2, and GPS-denied robotics",
    },
    detail: {
      es: "Retos comparativos del equipo (Luis Cu, Cathy Batres, Emily Curín y Adrián Catalán), traducción español–k'iche' (Tzij), hexacóptero autónomo FY690S, manipulador móvil ROSOrin Pro con gemelo digital 3D y proyectos de la célula de voluntarios.",
      en: "Team comparative engineering challenges (Luis Cu, Cathy Batres, Emily Curín, and Adrián Catalán), Spanish–K'iche' translation (Tzij), FY690S autonomous hexacopter, ROSOrin Pro 3D digital twin, and student volunteer prototypes.",
    },
  },
];

export const volunteerTracks: VolunteerTrack[] = [
  {
    id: "research-ed",
    code: "RFV-01",
    title: {
      es: "Research para Educación",
      en: "Research for Education",
    },
    tag: {
      es: "Investigación Aplicada",
      en: "Applied Research",
    },
    description: {
      es: "Investigación empírica en tecnología educativa, tutores adaptativos y aprendizaje de ingeniería asistido por IA con validación experimental.",
      en: "Empirical research in educational technology, adaptive tutors, and AI-assisted engineering education with experimental validation.",
    },
    deliverables: {
      es: "Estudios comparativos, instrumentos de validación (SUS/NASA-TLX) y artículos científicos.",
      en: "Comparative studies, validation instruments (SUS/NASA-TLX), and scientific papers.",
    },
  },
  {
    id: "software-dev",
    code: "RFV-02",
    title: {
      es: "Desarrollo de Software",
      en: "Software Development",
    },
    tag: {
      es: "Web · Móvil · Agentes",
      en: "Web · Mobile · Agents",
    },
    description: {
      es: "Construcción acelerada de prototipos funcionales de extremo a extremo en web (Next.js/React), móvil (Android/Kotlin) y sistemas agénticos conectados a herramientas reales.",
      en: "Rapid end-to-end construction of functional web (Next.js/React), mobile (Android/Kotlin), and tool-connected agentic prototypes.",
    },
    deliverables: {
      es: "Aplicaciones desplegadas en la nube con código abierto y suites de pruebas deterministas.",
      en: "Live cloud-deployed apps with open-source repos and deterministic test suites.",
    },
  },
  {
    id: "llms-slms",
    code: "RFV-03",
    title: {
      es: "LLMs y SLMs",
      en: "LLMs and SLMs",
    },
    tag: {
      es: "Modelos de Lenguaje",
      en: "Language Models",
    },
    description: {
      es: "Experimentación, fine-tuning (LoRA/RAFT), evaluación reproducible y despliegue de modelos de lenguaje grandes y pequeños (Gemma, Qwen, arquitecturas Split-Brain).",
      en: "Experimentation, fine-tuning (LoRA/RAFT), reproducible evaluation, and deployment of large and small language models (Gemma, Qwen, Split-Brain).",
    },
    deliverables: {
      es: "Benchmarks reproducibles, adaptadores especializados y pipelines RAG híbridos.",
      en: "Reproducible benchmarks, specialized adapters, and hybrid RAG pipelines.",
    },
  },
  {
    id: "iax",
    code: "RFV-04",
    title: {
      es: "IAX (Interacción Humano-IA)",
      en: "IAX (Human–AI Interaction)",
    },
    tag: {
      es: "Nuevas Interfaces",
      en: "Next-Gen Interfaces",
    },
    description: {
      es: "Diseño de experiencias nativas de IA más allá del chat tradicional: voz bidireccional en tiempo real, lienzos generativos, privacidad visible y flujos multimodales.",
      en: "Designing native AI experiences beyond chat boxes: real-time bidirectional voice, generative canvases, visible privacy, and multimodal workflows.",
    },
    deliverables: {
      es: "Patrones de interacción humano-agente y prototipos interactivos de baja fricción.",
      en: "Human-agent interaction patterns and low-friction interactive prototypes.",
    },
  },
  {
    id: "low-level-ai",
    code: "RFV-05",
    title: {
      es: "Low-Level AI Models",
      en: "Low-Level AI Models",
    },
    tag: {
      es: "Edge · GPU · Inferencia Local",
      en: "Edge · GPU · Local Inference",
    },
    description: {
      es: "Optimización de modelos a bajo nivel, cuantización, inferencia en dispositivos y ejecución local sobre CUDA, MPS, LiteRT, WebGPU, Jetson Orin y NPUs embebidas.",
      en: "Low-level model optimization, quantization, edge inference, and local execution on CUDA, MPS, LiteRT, WebGPU, Jetson Orin, and embedded NPUs.",
    },
    deliverables: {
      es: "Motores de inferencia en dispositivo y telemetría de latencia y memoria en hardware real.",
      en: "On-device inference engines and latency/memory telemetry on physical hardware.",
    },
  },
  {
    id: "marketing-events",
    code: "RFV-06",
    title: {
      es: "Marketing y Comunicación para Eventos",
      en: "Marketing and Event Communications",
    },
    tag: {
      es: "Comunidad & Difusión",
      en: "Community & Outreach",
    },
    description: {
      es: "Estrategia de difusión, narrativa audiovisual y crecimiento de comunidad para los congresos, clubes y demostraciones abiertas del laboratorio (Google I/O Extended, DevFest, IWD, AI Dev y visitas a colegios).",
      en: "Outreach strategy, audiovisual storytelling, and community growth for the Lab's conferences, student clubs, and school demonstrations (Google I/O Extended, DevFest, IWD, AI Dev).",
    },
    deliverables: {
      es: "Campañas de difusión, cobertura en vivo y piezas de comunicación de proyectos.",
      en: "Outreach campaigns, live event coverage, and project communication assets.",
    },
  },
  {
    id: "ui-ux",
    code: "RFV-07",
    title: {
      es: "UI / UX",
      en: "UI / UX",
    },
    tag: {
      es: "Diseño de Interfaces & Producto",
      en: "Interface & Product Design",
    },
    description: {
      es: "Diseño de interfaces, sistemas visuales, visualización de datos y pruebas de usabilidad para los prototipos web, móviles y físicos del laboratorio.",
      en: "Interface design, visual systems, data visualization, and usability testing across the Lab's web, mobile, and physical prototypes.",
    },
    deliverables: {
      es: "Sistemas de componentes, prototipos interactivos y pruebas con usuarios reales.",
      en: "Component systems, interactive prototypes, and user testing studies.",
    },
  },
  {
    id: "makers",
    code: "RFV-08",
    title: {
      es: "Más Makers (Robótica, Electrónica e Impresión 3D)",
      en: "More Makers (Robotics, Electronics & 3D Printing)",
    },
    tag: {
      es: "Hardware · ROS 2 · PCB",
      en: "Hardware · ROS 2 · PCB",
    },
    description: {
      es: "Diseño electrónico (ESP32, STM32, PCB propias), mecatrónica, robótica móvil con ROS 2, drones autónomos e impresión 3D para demostraciones físicas.",
      en: "Electronic design (ESP32, STM32, custom PCBs), mechatronics, ROS 2 mobile robotics, autonomous drones, and 3D printing for physical demos.",
    },
    deliverables: {
      es: "Robots funcionales, tarjetas electrónicas propias y prototipos físico-digitales.",
      en: "Functional robots, custom controller boards, and physical-digital prototypes.",
    },
  },
];

export const labClubs: LabClub[] = [
  {
    id: "chess",
    name: { es: "Club de Ajedrez", en: "Chess Club" },
    status: "active",
    coordinator: "Emily Curín",
    description: {
      es: "Entrenamiento táctico, torneos internos y proyectos de visión por computadora aplicada al tablero.",
      en: "Tactical training, internal tournaments, and computer vision projects applied to over-the-board play.",
    },
  },
  {
    id: "board-games",
    name: { es: "Club de Juegos de Mesa", en: "Board Games Club" },
    status: "active",
    coordinator: "Emily Curín",
    description: {
      es: "Estrategia, teoría de juegos, diseño de mecánicas y sesiones abiertas para la comunidad estudiantil.",
      en: "Strategy, game theory, mechanics design, and open sessions for the university community.",
    },
  },
  {
    id: "competitive-programming",
    name: { es: "Club de Programación Competitiva", en: "Competitive Programming Club" },
    status: "active",
    coordinator: "Emily Curín & Luis Cu",
    description: {
      es: "Resolución de estructuras de datos, grafos y algoritmos complejos con preparación para competencias ICPC.",
      en: "Algorithmic problem-solving, graphs, and data structures training for ICPC competitions.",
    },
  },
  {
    id: "cloud-ai",
    name: { es: "Club de Cloud AI", en: "Cloud AI Club" },
    status: "upcoming",
    coordinator: "Emily Curín & Eduardo Tobar",
    description: {
      es: "Comunidad práctica enfocada en despliegue de agentes, arquitecturas serverless y modelos en la nube.",
      en: "Hands-on community focused on agent deployment, serverless architectures, and cloud AI models.",
    },
  },
];
