export interface Project {
  id: string;
  name: string;
  description: { es: string; en: string };
  technologies: string[];
  status: "in_progress" | "finished" | "archived";
  date: string;
  image?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    id: "pictance",
    name: "Pictance",
    description: {
      es: "Reconocimiento facial usando redes neuronales en una aplicación web. Los usuarios suben fotos y el sistema identifica y marca características faciales clave.",
      en: "Face recognition using neural networks on a web app. Users upload photos and the system identifies and marks key facial features.",
    },
    technologies: ["Neural Networks", "Web App", "Computer Vision"],
    status: "archived",
    date: "2018-08",
    image: "/images/projects/pictance.png",
  },
  {
    id: "kotlinbots-hexapod",
    name: "Kotlinbots Hexapod",
    description: {
      es: "Robot de seis patas controlado vía Android Things en Raspberry Pi. Utiliza visión por computadora y Firebase.",
      en: "Six-legged robot controlled via Android Things on Raspberry Pi. Uses computer vision and Firebase.",
    },
    technologies: ["Android Things", "Raspberry Pi", "Firebase", "Computer Vision"],
    status: "in_progress",
    date: "2018-07",
    image: "/images/projects/hexapod.png",
  },
  {
    id: "tango",
    name: "Tango",
    description: {
      es: "Alterna entre el mundo virtual y el real gracias a Google Tango. Usa dispositivos Tango con Unity para combinar entornos.",
      en: "Switch between the virtual world and the real world with Google Tango. Uses Tango devices with Unity to blend environments.",
    },
    technologies: ["Google Tango", "Unity", "AR/VR"],
    status: "archived",
    date: "2017-06",
    image: "/images/projects/default.png",
  },
  {
    id: "tjbot",
    name: "TJBot",
    description: {
      es: "Robot que baila, responde a emociones e interactúa mediante servicios de IBM Watson. Usa Raspberry Pi, servomotor y LED RGB.",
      en: "Robot that dances, responds to emotions, and engages via IBM Watson services. Uses Raspberry Pi, servo motor, and RGB LED.",
    },
    technologies: ["IBM Watson", "Raspberry Pi", "IoT"],
    status: "archived",
    date: "2017-06",
    image: "/images/projects/default.png",
  },
  {
    id: "ilstyle",
    name: "ILStyle",
    description: {
      es: "Transferencia de estilo de pinturas famosas a fotografías usando redes neuronales.",
      en: "Style transfer of famous paintings to photos using neural networks.",
    },
    technologies: ["TensorFlow", "NodeJS", "Firebase", "React Native"],
    status: "archived",
    date: "2017-06",
    image: "/images/projects/ilstyle.png",
  },
  {
    id: "ilvision",
    name: "ILVision",
    description: {
      es: "Reconocimiento facial que dibuja figuras sobre los elementos detectados del rostro.",
      en: "Facial recognition that draws figures on detected face elements.",
    },
    technologies: ["Google Cloud Vision", "NodeJS", "React Native"],
    status: "archived",
    date: "2017-03",
    image: "/images/projects/default.png",
  },
  {
    id: "ildrone",
    name: "ILDrone",
    description: {
      es: "Controlador de vuelo de dron usando una interfaz de guante basada en gestos.",
      en: "Drone flight controller using a gesture-based gauntlet interface.",
    },
    technologies: ["Intel Edison", "ARDrone 2.0", "NodeJS", "Johnny-Five"],
    status: "archived",
    date: "2016-10",
    image: "/images/projects/ildrone.jpg",
  },
  {
    id: "obdled",
    name: "OBDled",
    description: {
      es: "Control de tiras LED según las RPM del auto usando Arduino. Lee datos del vehículo vía adaptador OBD-II.",
      en: "Controlling LED strips according to car RPM using Arduino. Reads vehicle data via OBD-II adapter.",
    },
    technologies: ["Arduino", "OBD-II", "IoT"],
    status: "archived",
    date: "2016-06",
    image: "/images/projects/obd.jpg",
  },
  {
    id: "leonardo-greenmoov",
    name: "Leonardo GreenMoov",
    description: {
      es: "Robot de telepresencia impreso en 3D basado en InMoov. Control con Oculus Rift DK2 y Leap Motion.",
      en: "3D printed telepresence robot based on InMoov. Controlled with Oculus Rift DK2 and Leap Motion.",
    },
    technologies: ["3D Printing", "Oculus Rift", "Leap Motion"],
    status: "archived",
    date: "2015-12",
    image: "/images/projects/leonardo.jpg",
  },
  {
    id: "experimentos-gemini-motion-manga",
    name: "Experimentos gemini: motion manga",
    description: {
      es: "Convierte videos cortos en páginas de cómic estilo manga mediante IA multimodal.",
      en: "Converts short videos into manga-style comic pages using multimodal AI.",
    },
    technologies: ["ai", "multimodal", "video", "software"],
    status: "finished",
    date: "2025-12",
  },
  {
    id: "experimentos-gemini-panel-one",
    name: "Experimentos gemini: panel one",
    description: {
      es: "Genera historias visuales tipo cómic a partir de hasta ocho fotografías.",
      en: "Generates comic-style visual stories from up to eight photographs.",
    },
    technologies: ["ai", "images", "storytelling", "software"],
    status: "finished",
    date: "2025-12",
  },
  {
    id: "fork-it",
    name: "Fork It",
    description: {
      es: "Plataforma para apoyar la toma de decisiones en situaciones sociales complejas.",
      en: "Platform that supports decision-making in complex social situations.",
    },
    technologies: ["ai", "software", "productivity"],
    status: "in_progress",
    date: "2026-01",
  },
  {
    id: "prototipo-auditor-de-codigo",
    name: "Prototipo: Auditor de código",
    description: {
      es: "Sistema con IA que revisa código, detecta vulnerabilidades y genera documentación automática.",
      en: "AI system that reviews code, detects vulnerabilities, and generates automatic documentation.",
    },
    technologies: ["ai", "software", "github", "security"],
    status: "in_progress",
    date: "2026-01",
  },
  {
    id: "totito",
    name: "Totito",
    description: {
      es: "Juego híbrido físico-digital donde la IA interpreta el tablero y responde en tiempo real.",
      en: "Hybrid physical-digital game where AI interprets the board and responds in real time.",
    },
    technologies: ["ai", "game", "software", "vision"],
    status: "in_progress",
    date: "2026-02",
  },
  {
    id: "proyecto-camaleon",
    name: "Proyecto camaleón",
    description: {
      es: "Prototipo IoT con sensor de color capaz de detectar y replicar tonalidades.",
      en: "IoT prototype with a color sensor capable of detecting and replicating tones.",
    },
    technologies: ["iot", "sensors", "hardware"],
    status: "in_progress",
    date: "2026-01",
  },
  {
    id: "comunicacion-obd2-con-vehiculo-mvp",
    name: "Comunicación OBD2 con vehículo (MVP)",
    description: {
      es: "Aplicación para diagnóstico vehicular mediante conexión OBD2.",
      en: "Application for vehicle diagnostics through OBD2 connection.",
    },
    technologies: ["automotive", "iot", "diagnostics", "software"],
    status: "finished",
    date: "2026-01",
  },
  {
    id: "boton-iot",
    name: "Botón IoT",
    description: {
      es: "Botón inteligente que captura notas y permite generar resúmenes automáticos con IA.",
      en: "Smart button that captures notes and enables automatic AI summaries.",
    },
    technologies: ["iot", "ai", "productivity", "hardware"],
    status: "in_progress",
    date: "2026-01",
  },
  {
    id: "mini-bots",
    name: "Mini bots",
    description: {
      es: "Robots compactos e interactivos con movimiento autónomo e integración de sensores.",
      en: "Compact interactive robots with autonomous movement and sensor integration.",
    },
    technologies: ["robotics", "sensors", "mechatronics"],
    status: "finished",
    date: "2026-01",
  },
  {
    id: "control-brazo-robotico-negro",
    name: "Control Brazo Robótico (Negro)",
    description: {
      es: "Tarjeta electrónica basada en ESP32 para controlar un brazo robótico.",
      en: "ESP32-based electronic board to control a robotic arm.",
    },
    technologies: ["robotics", "electronics", "esp32", "hardware"],
    status: "in_progress",
    date: "2026-01",
  },
  {
    id: "gearbox",
    name: "Gearbox",
    description: {
      es: "Desarrollo de una caja de cambios mecánica para aplicaciones mecatrónicas.",
      en: "Development of a mechanical gearbox for mechatronic applications.",
    },
    technologies: ["mechanics", "mechatronics", "hardware"],
    status: "in_progress",
    date: "2026-01",
  },
  {
    id: "ar-para-colocacion-de-muebles",
    name: "AR para colocación de muebles",
    description: {
      es: "Aplicación de realidad aumentada para visualizar muebles en espacios reales.",
      en: "Augmented reality application to visualize furniture in real spaces.",
    },
    technologies: ["ar", "mobile", "software", "visualization"],
    status: "finished",
    date: "2026-02",
  },
  {
    id: "experimentos-gemini-cosmic-oracle",
    name: "Experimentos gemini: cosmic oracle",
    description: {
      es: "Convierte un dibujo en una aplicación funcional usando IA para mockups, assets y desarrollo.",
      en: "Turns a sketch into a functional app using AI for mockups, assets, and development.",
    },
    technologies: ["ai", "software", "app", "design"],
    status: "finished",
    date: "2025-12",
  },
  {
    id: "experimentos-gemini-tempo-lottery",
    name: "Experimentos gemini: tempo lottery",
    description: {
      es: "Juego de cartas rápido basado en coincidencia de símbolos.",
      en: "Fast-paced card game based on symbol matching.",
    },
    technologies: ["game", "software", "ai"],
    status: "finished",
    date: "2025-12",
  },
  {
    id: "experimentos-gemini-run-sight",
    name: "Experimentos gemini: run sight",
    description: {
      es: "Analiza archivos FIT y entrega retroalimentación deportiva avanzada.",
      en: "Analyzes FIT files and provides advanced athletic feedback.",
    },
    technologies: ["ai", "sports", "analytics", "software"],
    status: "finished",
    date: "2025-12",
  },
  {
    id: "experimentos-gemini-run-or-done",
    name: "Experimentos gemini: run or done",
    description: {
      es: "Evalúa el desgaste de tenis para correr y recomienda reemplazo.",
      en: "Evaluates running shoe wear and recommends replacement.",
    },
    technologies: ["ai", "vision", "sports", "software"],
    status: "finished",
    date: "2025-12",
  },
  {
    id: "educador-personal",
    name: "Educador Personal",
    description: {
      es: "Sistema de agentes de IA que adapta apoyo según estilos de aprendizaje.",
      en: "AI agent system that adapts support based on learning styles.",
    },
    technologies: ["ai", "education", "software"],
    status: "finished",
    date: "2025-12",
  },
  {
    id: "prototipo-scout-de-mercado",
    name: "Prototipo: Scout de Mercado",
    description: {
      es: "Agente con RAG para encontrar productos cercanos al mejor precio.",
      en: "RAG-powered agent to find nearby products at the best price.",
    },
    technologies: ["ai", "rag", "ecommerce", "software"],
    status: "in_progress",
    date: "2026-01",
  },
  {
    id: "calendar",
    name: "Calendar",
    description: {
      es: "Calendario para entrevistas de conferencistas y organización de agendas.",
      en: "Calendar for speaker interviews and schedule organization.",
    },
    technologies: ["scheduling", "software"],
    status: "in_progress",
    date: "2026-02",
  },
  {
    id: "monitor-de-ocupacion-de-escritorio",
    name: "Monitor de Ocupación de Escritorio",
    description: {
      es: "Detecta si un espacio está ocupado sin usar cámaras.",
      en: "Detects whether a space is occupied without using cameras.",
    },
    technologies: ["ai", "iot", "sensors"],
    status: "in_progress",
    date: "2026-01",
  },
  {
    id: "alerta-de-planta-seca",
    name: "Alerta de planta seca",
    description: {
      es: "Notifica cuando una planta necesita agua según humedad del suelo.",
      en: "Sends alerts when a plant needs water based on soil moisture.",
    },
    technologies: ["iot", "sensors", "telegram"],
    status: "in_progress",
    date: "2026-01",
  },
  {
    id: "sentiment-analysis-y-futbol",
    name: "Sentiment analysis y futbol",
    description: {
      es: "Analiza opiniones relacionadas con fútbol mediante IA.",
      en: "Analyzes football-related opinions using AI.",
    },
    technologies: ["ai", "nlp", "analytics"],
    status: "in_progress",
    date: "2026-01",
  },
  {
    id: "drone",
    name: "Drone",
    description: {
      es: "Ensamble y puesta en marcha de kit de dron.",
      en: "Assembly and deployment of a drone kit.",
    },
    technologies: ["electronics", "robotics", "hardware"],
    status: "in_progress",
    date: "2025-12",
  },
  {
    id: "mano-robotica",
    name: "Mano Robótica",
    description: {
      es: "Rediseño y reconstrucción de mano robótica funcional.",
      en: "Redesign and rebuild of a functional robotic hand.",
    },
    technologies: ["robotics", "mechatronics"],
    status: "finished",
    date: "2025-09",
  },
];
