export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  description: { es: string; en: string };
  technologies: string[];
  status: "in_progress" | "finished" | "archived";
  date: string;
  image?: string;
  repo?: string;
  /** Optional deep-dive narrative for the individual project page. */
  longDescription?: { es: string; en: string };
  /** Additional images beyond the hero `image`. Paths under /public. */
  gallery?: string[];
  /** External links: demo, paper, article, video, slides, etc. */
  links?: ProjectLink[];
  /** IDs of team members involved (matches `data/team.ts`). */
  team?: string[];
  /** Live demo URL — takes precedence as primary CTA on detail page. */
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "pictance",
    name: "Pictance",
    description: {
      es: "Reconocimiento facial usando redes neuronales en una aplicación web. Los usuarios suben fotos y el sistema identifica y marca características faciales clave.",
      en: "Face recognition using neural networks on a web app. Users upload photos and the system identifies and marks key facial features.",
    },
    longDescription: {
      es: "Aplicación web que procesa fotografías subidas por el usuario y aplica redes neuronales para identificar rasgos faciales — ojos, nariz, boca, cejas — marcando su ubicación sobre la imagen. Proyecto de exploración temprana en visión por computadora, antes de que estos servicios fueran de uso común en la nube.",
      en: "Web application that processes user-uploaded photos and applies neural networks to identify facial features — eyes, nose, mouth, brows — marking their position on the image. An early computer-vision exploration, built before these services became common cloud offerings.",
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
    longDescription: {
      es: "Hexápodo ensamblado sobre Raspberry Pi corriendo Android Things. Cada pata se controla con servomotores coordinados; una cámara embarcada más Firebase habilitan reconocimiento de objetos y comando remoto desde un dispositivo Android. Combina locomoción inspirada en insectos con un stack Android completo.",
      en: "Hexapod assembled on a Raspberry Pi running Android Things. Each leg is driven by coordinated servos; an onboard camera plus Firebase enable object recognition and remote command from an Android device. Combines insect-inspired locomotion with a full Android stack.",
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
    longDescription: {
      es: "Prototipo AR/VR sobre la plataforma Google Tango, aprovechando su tracking inercial y percepción de profundidad. El usuario alterna entre el mundo físico y una escena virtual en Unity, con objetos virtuales anclados a superficies reales detectadas por el dispositivo.",
      en: "AR/VR prototype on the Google Tango platform, leveraging its inertial tracking and depth perception. The user switches between the physical world and a Unity-built virtual scene, with virtual objects anchored to real surfaces detected by the device.",
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
    longDescription: {
      es: "Robot de escritorio basado en el kit TJBot de IBM, impreso en 3D y conectado a Raspberry Pi. Combina servomotor para movimiento de brazo, LED RGB para comunicación de estado, micrófono y altavoz. Los servicios cognitivos de IBM Watson interpretan voz, traducen, analizan tono y generan respuestas.",
      en: "Desktop robot based on IBM's TJBot kit, 3D-printed and connected to a Raspberry Pi. Combines a servo motor for arm motion, RGB LED for state signaling, microphone, and speaker. IBM Watson cognitive services interpret voice, translate, analyze tone, and generate responses.",
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
    longDescription: {
      es: "Aplicación móvil en React Native que envía fotos del usuario a un servicio TensorFlow para aplicar transferencia de estilo neural. El usuario elige una pintura famosa como referencia y obtiene su foto reinterpretada en ese estilo. NodeJS como backend, Firebase para autenticación y storage.",
      en: "React Native mobile app that uploads user photos to a TensorFlow service for neural style transfer. The user picks a famous painting as reference and gets their photo reinterpreted in that style. NodeJS backend, Firebase for auth and storage.",
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
    longDescription: {
      es: "Aplicación que utiliza Google Cloud Vision para detectar elementos faciales — ojos, boca, nariz — y dibuja figuras o anotaciones sobre cada uno. Pensada como demostración interactiva de los servicios de Vision API sobre la cámara del dispositivo.",
      en: "Application that uses Google Cloud Vision to detect facial elements — eyes, mouth, nose — and draws figures or annotations on each. Designed as an interactive demo of Vision API services over the device camera.",
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
    longDescription: {
      es: "Controlador de vuelo para un Parrot AR.Drone 2.0 construido sobre un guante instrumentado con Intel Edison. Los gestos — inclinar, elevar, cerrar la mano — se traducen a comandos de vuelo mediante Johnny-Five. NodeJS mantiene la sesión entre el guante y el dron.",
      en: "Flight controller for a Parrot AR.Drone 2.0 built on an Intel Edison instrumented gauntlet. Gestures — tilt, raise, clench — are translated to flight commands via Johnny-Five. NodeJS maintains the session between glove and drone.",
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
    longDescription: {
      es: "Arduino conectado al puerto OBD-II del vehículo lee RPM y velocidad en tiempo real. Tiras LED instaladas en el interior cambian color y frecuencia según el régimen del motor, produciendo feedback visual del estado mecánico sin necesidad de mirar el tablero.",
      en: "Arduino connected to the car's OBD-II port reads RPM and speed in real time. LED strips installed inside the cabin change color and frequency according to engine revs, producing visual feedback on the mechanical state without looking at the dashboard.",
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
    longDescription: {
      es: "Robot humanoide basado en el proyecto open source InMoov, completamente impreso en 3D. El sistema de telepresencia usa Oculus Rift DK2 para reproducir visión estéreo y Leap Motion para capturar movimientos de manos del operador, permitiendo que el robot replique gestos a distancia.",
      en: "Humanoid robot based on the open-source InMoov project, fully 3D-printed. The telepresence system uses Oculus Rift DK2 for stereo vision and Leap Motion to capture the operator's hand movements, letting the robot mirror gestures remotely.",
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
    longDescription: {
      es: "Herramienta CLI que toma un video corto y genera una secuencia de paneles estilo manga usando los modelos multimodales de Gemini 3. El video se descompone en keyframes, se genera una narrativa que los conecta y cada panel se estiliza como cómic japonés. Parte del #AISprint con créditos de Google Cloud.",
      en: "CLI tool that takes a short video and generates a sequence of manga-style panels using Gemini 3 multimodal models. The video is decomposed into keyframes, a narrative connecting them is generated, and each panel is stylized as Japanese comic. Part of #AISprint with Google Cloud credits.",
    },
    technologies: ["ai", "multimodal", "video", "software"],
    status: "finished",
    date: "2025-12",
    image: "/images/projects/motion-manga-comic.jpg",
    gallery: ["/images/projects/motion-manga-example.png"],
    repo: "https://github.com/ykro/motion-manga",
  },
  {
    id: "experimentos-gemini-panel-one",
    name: "Experimentos gemini: panel one",
    description: {
      es: "Genera historias visuales tipo cómic a partir de hasta ocho fotografías.",
      en: "Generates comic-style visual stories from up to eight photographs.",
    },
    longDescription: {
      es: "Herramienta de narrativa visual que toma hasta ocho fotografías y las convierte en un panel de cómic. El usuario sube su secuencia; Gemini 3 genera la historia conectando las imágenes, agrega diálogos y produce el panel maquetado con tipografía de cómic. Demo corriendo en Cloud Run.",
      en: "Visual storytelling tool that takes up to eight photos and turns them into a comic panel. The user uploads a sequence; Gemini 3 generates the narrative connecting the images, adds dialogue, and produces a laid-out panel with comic typography. Demo running on Cloud Run.",
    },
    technologies: ["ai", "images", "storytelling", "software"],
    status: "finished",
    date: "2025-12",
    image: "/images/projects/panel-one-comic.jpg",
    gallery: ["/images/projects/panel-one-result.png"],
    repo: "https://github.com/ykro/panel-one",
    demoUrl: "https://panel-one-frontend-622959071640.us-central1.run.app/",
  },
  {
    id: "fork-it",
    name: "Fork It",
    description: {
      es: "Plataforma para apoyar la toma de decisiones en situaciones sociales complejas.",
      en: "Platform that supports decision-making in complex social situations.",
  },
    longDescription: {
      es: "Plataforma que ayuda a navegar decisiones sociales complejas donde múltiples caminos parecen válidos. Combina agentes de IA que razonan sobre consecuencias con un framework visual de bifurcaciones, permitiendo ver cómo se proyectaría cada alternativa antes de comprometerse.",
      en: "Platform that helps navigate complex social decisions where multiple paths seem valid. Combines AI agents reasoning about consequences with a visual branching framework, letting the user see how each alternative would play out before committing.",
    },
    technologies: ["ai", "software", "productivity"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/fork-it.png",
  },
  {
    id: "prototipo-auditor-de-codigo",
    name: "Prototipo: Auditor de código",
    description: {
      es: "Sistema con IA que revisa código, detecta vulnerabilidades y genera documentación automática.",
      en: "AI system that reviews code, detects vulnerabilities, and generates automatic documentation.",
  },
    longDescription: {
      es: "Sistema agentic que analiza repositorios y detecta vulnerabilidades, anti-patrones y deuda técnica. Combina análisis estático con modelos de lenguaje que razonan sobre contexto, y genera documentación automática — incluyendo explicaciones para funciones críticas y sugerencias de refactor.",
      en: "Agentic system that analyzes repositories and detects vulnerabilities, anti-patterns, and technical debt. Combines static analysis with language models reasoning about context, and generates automatic documentation — including explanations for critical functions and refactor suggestions.",
    },
    technologies: ["ai", "software", "github", "security"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/prototipo-auditor-de-codigo.png",
  },
  {
    id: "totito",
    name: "Totito",
    description: {
      es: "Juego híbrido físico-digital donde la IA interpreta el tablero y responde en tiempo real.",
      en: "Hybrid physical-digital game where AI interprets the board and responds in real time.",
  },
    longDescription: {
      es: "Tablero físico de tres-en-raya equipado con cámara superior. La IA interpreta en tiempo real el estado del juego — fichas colocadas, turno actual — y responde hablando con el jugador o sugiriendo jugadas. Explora la fusión entre juegos tradicionales y superficies digitales reactivas.",
      en: "Physical tic-tac-toe board equipped with an overhead camera. The AI interprets the game state in real time — pieces placed, current turn — and responds by speaking to the player or suggesting moves. Explores the fusion of traditional games with reactive digital surfaces.",
    },
    technologies: ["ai", "game", "software", "vision"],
    status: "in_progress",
    date: "2026-02",
    image: "/images/projects/totito.png",
  },
  {
    id: "proyecto-camaleon",
    name: "Proyecto camaleón",
    description: {
      es: "Prototipo IoT con sensor de color capaz de detectar y replicar tonalidades.",
      en: "IoT prototype with a color sensor capable of detecting and replicating tones.",
  },
    longDescription: {
      es: "Prototipo IoT con sensor de color TCS34725 que captura tonalidades del entorno y las replica en tira LED adyacente. Exploración sobre cómo un objeto podría adaptar su apariencia al fondo, como un camaleón — con pasos futuros hacia pantalla e-ink o tela programable.",
      en: "IoT prototype with a TCS34725 color sensor that captures environmental tones and replicates them in an adjacent LED strip. An exploration of how an object might adapt its appearance to the background, like a chameleon — with future steps toward e-ink or programmable fabric.",
    },
    technologies: ["iot", "sensors", "hardware"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/proyecto-camaleon.png",
  },
  {
    id: "comunicacion-obd2-con-vehiculo-mvp",
    name: "Comunicación OBD2 con vehículo (MVP)",
    description: {
      es: "Aplicación para diagnóstico vehicular mediante conexión OBD2.",
      en: "Application for vehicle diagnostics through OBD2 connection.",
  },
    longDescription: {
      es: "Aplicación que se conecta al puerto OBD2 del vehículo vía adaptador Bluetooth/WiFi y expone los datos del ECU — RPM, velocidad, códigos de error DTC, consumo estimado — en una interfaz legible. MVP enfocado en lectura y diagnóstico; sin funciones de reseteo aún.",
      en: "App that connects to the vehicle's OBD2 port via Bluetooth/WiFi adapter and exposes ECU data — RPM, speed, DTC error codes, estimated fuel consumption — in a readable interface. MVP focused on read and diagnostics; no reset features yet.",
    },
    technologies: ["automotive", "iot", "diagnostics", "software"],
    status: "finished",
    date: "2026-01",
    image: "/images/projects/comunicacion-obd2-con-vehiculo-mvp.png",
  },
  {
    id: "boton-iot",
    name: "Botón IoT",
    description: {
      es: "Botón inteligente que captura notas y permite generar resúmenes automáticos con IA.",
      en: "Smart button that captures notes and enables automatic AI summaries.",
  },
    longDescription: {
      es: "Botón físico discreto — un solo click — que dispara un flujo de captura: inicia grabación de voz, transcribe, resume con IA y guarda la nota en el destino configurado (Notion, Drive, email). Pensado para capturar pensamientos sin fricción durante trabajo manual o conducción.",
      en: "Discreet physical button — single click — that triggers a capture flow: starts voice recording, transcribes, AI-summarizes, and saves the note to the configured destination (Notion, Drive, email). Designed to capture thoughts frictionlessly during manual work or driving.",
    },
    technologies: ["iot", "ai", "productivity", "hardware"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/boton-iot.png",
  },
  {
    id: "mini-bots",
    name: "Mini bots",
    description: {
      es: "Robots compactos e interactivos con movimiento autónomo e integración de sensores.",
      en: "Compact interactive robots with autonomous movement and sensor integration.",
  },
    longDescription: {
      es: "Serie de robots compactos con estrategias variadas de movimiento y sensado — algunos con evasión por ultrasonido, otros con seguimiento de línea o triangulación IR. Plataforma educativa: cada mini-bot resuelve un problema distinto, introduciendo mecatrónica y control paso a paso.",
      en: "Series of compact robots with varied movement and sensing strategies — some with ultrasonic avoidance, others with line-following or IR triangulation. Educational platform: each mini-bot solves a different problem, introducing mechatronics and control step by step.",
    },
    technologies: ["robotics", "sensors", "mechatronics"],
    status: "finished",
    date: "2026-01",
    image: "/images/projects/mini-bots.png",
  },
  {
    id: "control-brazo-robotico-negro",
    name: "Control Brazo Robótico (Negro)",
    description: {
      es: "Tarjeta electrónica basada en ESP32 para controlar un brazo robótico.",
      en: "ESP32-based electronic board to control a robotic arm.",
  },
    longDescription: {
      es: "Tarjeta de control diseñada en el lab — PCB propia, MCU ESP32 — para manejar un brazo robótico de seis grados de libertad. Expone API WiFi para ejecutar trayectorias, calibración automática y modo de enseñanza: el operador mueve el brazo manualmente y la tarjeta graba la secuencia.",
      en: "Lab-designed controller board — custom PCB, ESP32 MCU — for a 6-DOF robotic arm. Exposes WiFi API for executing trajectories, auto-calibration, and teach mode: the operator moves the arm by hand and the board records the sequence.",
    },
    technologies: ["robotics", "electronics", "esp32", "hardware"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/control-brazo-robotico-negro.png",
  },
  {
    id: "gearbox",
    name: "Gearbox",
    description: {
      es: "Desarrollo de una caja de cambios mecánica para aplicaciones mecatrónicas.",
      en: "Development of a mechanical gearbox for mechatronic applications.",
    },
    longDescription: {
      es: "Diseño y fabricación de una caja de cambios para robótica ligera: modelado CAD, piezas impresas en 3D y mecanizadas, ensamblaje con rodamientos estándar. Busca reemplazar soluciones comerciales costosas en prototipos donde el torque necesario es moderado.",
      en: "Design and fabrication of a gearbox for light robotics: CAD modeling, 3D-printed and machined parts, assembly with standard bearings. Aims to replace expensive commercial solutions in prototypes where needed torque is moderate.",
    },
    technologies: ["mechanics", "mechatronics", "hardware"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/palanca-cambios.jpeg",
  },
  {
    id: "ar-para-colocacion-de-muebles",
    name: "AR para colocación de muebles",
    description: {
      es: "Aplicación de realidad aumentada para visualizar muebles en espacios reales.",
      en: "Augmented reality application to visualize furniture in real spaces.",
  },
    longDescription: {
      es: "App de AR para móvil que permite visualizar muebles en el espacio real del usuario antes de comprarlos. Detecta piso, paredes y escala usando ARCore/ARKit, luego coloca modelos 3D anclados al mundo real con oclusión correcta y sombras dinámicas.",
      en: "Mobile AR app that lets the user visualize furniture in their real space before buying. Detects floor, walls, and scale using ARCore/ARKit, then places 3D models anchored to the real world with correct occlusion and dynamic shadows.",
    },
    technologies: ["ar", "mobile", "software", "visualization"],
    status: "finished",
    date: "2026-02",
    image: "/images/projects/ar-para-colocacion-de-muebles.png",
  },
  {
    id: "experimentos-gemini-cosmic-oracle",
    name: "Experimentos gemini: cosmic oracle",
    description: {
      es: "Convierte un dibujo en una aplicación funcional usando IA para mockups, assets y desarrollo.",
      en: "Turns a sketch into a functional app using AI for mockups, assets, and development.",
    },
    longDescription: {
      es: "Pipeline de napkin-a-app: el usuario sube un boceto a mano alzada de una interfaz y Gemini 3 produce el mockup digital, genera los assets necesarios — iconos, ilustraciones, tipografía — y finalmente ensambla el código funcional. Demuestra la trayectoria completa de una idea hasta una app ejecutable usando IA multimodal.",
      en: "Napkin-to-app pipeline: user uploads a hand-drawn sketch of an interface and Gemini 3 produces the digital mockup, generates the needed assets — icons, illustrations, typography — and finally assembles the working code. Demonstrates the full journey from idea to runnable app using multimodal AI.",
    },
    technologies: ["ai", "software", "app", "design"],
    status: "finished",
    date: "2025-12",
    image: "/images/projects/cosmic-oracle-card.png",
    gallery: [
      "/images/projects/cosmic-oracle-napkin.jpg",
      "/images/projects/cosmic-oracle-altar.png",
      "/images/projects/cosmic-oracle-prophecy.png",
      "/images/projects/cosmic-oracle-card-front.png",
      "/images/projects/cosmic-oracle-card-back.png",
    ],
    repo: "https://github.com/ykro/cosmic-oracle",
    demoUrl: "https://cosmic-oracle-frontend-622959071640.us-central1.run.app/",
  },
  {
    id: "experimentos-gemini-tempo-lottery",
    name: "Experimentos gemini: tempo lottery",
    description: {
      es: "Juego de cartas rápido basado en coincidencia de símbolos.",
      en: "Fast-paced card game based on symbol matching.",
    },
    longDescription: {
      es: "Juego de cartas rápido donde los jugadores deben emparejar símbolos para avanzar en el tablero. La lógica de generación de cartas y la evaluación de coincidencias se apoyan en Gemini 3 para mantener ritmo y variedad. Demo web corriendo en Cloud Run.",
      en: "Fast-paced card game where players must match symbols to advance on the board. Card generation and match evaluation rely on Gemini 3 to maintain tempo and variety. Web demo running on Cloud Run.",
    },
    technologies: ["game", "software", "ai"],
    status: "finished",
    date: "2025-12",
    image: "/images/projects/tempo-lottery.jpg",
    gallery: [
      "/images/projects/tempo-lottery-screenshot.jpg",
      "/images/projects/tempo-lottery-gameplay.webp",
    ],
    repo: "https://github.com/ykro/tempo-lottery",
    demoUrl: "https://tempo-lottery-622959071640.us-central1.run.app/",
  },
  {
    id: "experimentos-gemini-run-sight",
    name: "Experimentos gemini: run sight",
    description: {
      es: "Analiza archivos FIT y entrega retroalimentación deportiva avanzada.",
      en: "Analyzes FIT files and provides advanced athletic feedback.",
    },
    longDescription: {
      es: "Aplicación de análisis estratégico para corredores. El usuario sube un archivo FIT de su sesión de entrenamiento — potencia, ritmo, cadencia, frecuencia cardíaca — y Gemini 3 genera retroalimentación específica sobre pacing, técnica, áreas de mejora y recomendaciones para la próxima sesión.",
      en: "Strategic analysis app for runners. The user uploads a FIT file from their training session — power, pace, cadence, heart rate — and Gemini 3 generates specific feedback on pacing, technique, improvement areas, and recommendations for the next session.",
    },
    technologies: ["ai", "sports", "analytics", "software"],
    status: "finished",
    date: "2025-12",
    image: "/images/projects/runsight-dashboard.png",
    gallery: ["/images/projects/runsight-demo.png"],
    repo: "https://github.com/ykro/run-sight",
    demoUrl: "https://runsight-web-622959071640.us-central1.run.app/",
  },
  {
    id: "experimentos-gemini-run-or-done",
    name: "Experimentos gemini: run or done",
    description: {
      es: "Evalúa el desgaste de tenis para correr y recomienda reemplazo.",
      en: "Evaluates running shoe wear and recommends replacement.",
    },
    longDescription: {
      es: "Evaluador visual de tenis para correr. El usuario sube fotografías de suela, media suela y upper, y Gemini 3 detecta desgaste, deformación y pérdida de soporte, entregando un veredicto — seguir corriendo o reemplazar — con razonamiento por componente.",
      en: "Visual evaluator for running shoes. The user uploads photos of sole, midsole, and upper; Gemini 3 detects wear, deformation, and support loss, delivering a verdict — keep running or replace — with per-component reasoning.",
    },
    technologies: ["ai", "vision", "sports", "software"],
    status: "finished",
    date: "2025-12",
    image: "/images/projects/run-or-done-report.png",
    gallery: ["/images/projects/run-or-done-result.png"],
    repo: "https://github.com/ykro/run-or-done",
    demoUrl: "https://run-or-done-622959071640.us-central1.run.app/",
  },
  {
    id: "educador-personal",
    name: "Educador Personal",
    description: {
      es: "Sistema de agentes de IA que adapta apoyo según estilos de aprendizaje.",
      en: "AI agent system that adapts support based on learning styles.",
  },
    longDescription: {
      es: "Sistema multi-agente donde cada agente representa un estilo de aprendizaje — visual, kinestésico, verbal, analítico. El sistema detecta el perfil del estudiante a través de interacción inicial y rota entre agentes para presentar el material en el estilo más efectivo para esa persona, ajustando en tiempo real.",
      en: "Multi-agent system where each agent represents a learning style — visual, kinesthetic, verbal, analytical. The system detects the student's profile through initial interaction and rotates between agents to present material in the most effective style for that person, adjusting in real time.",
    },
    technologies: ["ai", "education", "software"],
    status: "finished",
    date: "2025-12",
    image: "/images/projects/educador-personal.png",
  },
  {
    id: "prototipo-scout-de-mercado",
    name: "Prototipo: Scout de Mercado",
    description: {
      es: "Agente con RAG para encontrar productos cercanos al mejor precio.",
      en: "RAG-powered agent to find nearby products at the best price.",
  },
    longDescription: {
      es: "Agente RAG conectado a catálogos de tiendas cercanas y precios publicados. Recibe una consulta del usuario — \"necesito X bajo Y quetzales\" — recupera disponibilidad en tiempo real y devuelve tres opciones ordenadas por precio y distancia, con enlace directo al producto.",
      en: "RAG agent connected to nearby store catalogs and published prices. Receives user query — \"I need X under Y quetzales\" — retrieves real-time availability and returns three options sorted by price and distance, with direct link to the product.",
    },
    technologies: ["ai", "rag", "ecommerce", "software"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/prototipo-scout-de-mercado.png",
  },
  {
    id: "calendar",
    name: "Calendar",
    description: {
      es: "Calendario para entrevistas de conferencistas y organización de agendas.",
      en: "Calendar for speaker interviews and schedule organization.",
  },
    longDescription: {
      es: "Herramienta interna del lab para agendar entrevistas con conferencistas invitados. Integra disponibilidad del director y asistentes, zonas horarias internacionales y envía recordatorios automáticos. Enfocada en el flujo específico de hablar con ponentes, más que un calendario genérico.",
      en: "Internal lab tool for scheduling guest speaker interviews. Integrates director and assistant availability, international time zones, and sends automatic reminders. Focused on the specific speaker-talk flow rather than a generic calendar.",
    },
    technologies: ["scheduling", "software"],
    status: "in_progress",
    date: "2026-02",
    image: "/images/projects/calendar.png",
  },
  {
    id: "monitor-de-ocupacion-de-escritorio",
    name: "Monitor de Ocupación de Escritorio",
    description: {
      es: "Detecta si un espacio está ocupado sin usar cámaras.",
      en: "Detects whether a space is occupied without using cameras.",
  },
    longDescription: {
      es: "Detector de ocupación de puesto de trabajo que funciona sin cámara: combina sensor PIR (movimiento) con sensor capacitivo en el asiento y lectura de actividad de teclado. Resultado: una señal binaria \"ocupado / libre\" útil para iluminación adaptativa y estadísticas de uso, respetando la privacidad del usuario.",
      en: "Workstation occupancy detector that works without a camera: combines PIR (motion) sensor with capacitive sensor on the seat and keyboard activity readings. Output: a binary \"occupied / free\" signal useful for adaptive lighting and usage stats, preserving user privacy.",
    },
    technologies: ["ai", "iot", "sensors"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/monitor-de-ocupacion-de-escritorio.png",
  },
  {
    id: "alerta-de-planta-seca",
    name: "Alerta de planta seca",
    description: {
      es: "Notifica cuando una planta necesita agua según humedad del suelo.",
      en: "Sends alerts when a plant needs water based on soil moisture.",
  },
    longDescription: {
      es: "Sensor de humedad capacitivo enterrado en la maceta reporta lecturas cada hora vía ESP32 a un bot de Telegram. Cuando la humedad cae bajo un umbral configurable, envía una alerta con la identificación de la planta. Soporta múltiples macetas por ESP32 mediante multiplexor.",
      en: "Capacitive moisture sensor buried in the pot reports readings every hour via ESP32 to a Telegram bot. When moisture drops below a configurable threshold, it sends an alert with the plant's identification. Supports multiple pots per ESP32 via multiplexer.",
    },
    technologies: ["iot", "sensors", "telegram"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/alerta-de-planta-seca.png",
  },
  {
    id: "sentiment-analysis-y-futbol",
    name: "Sentiment analysis y futbol",
    description: {
      es: "Analiza opiniones relacionadas con fútbol mediante IA.",
      en: "Analyzes football-related opinions using AI.",
  },
    longDescription: {
      es: "Pipeline NLP que consume tweets, comentarios en redes y transcripciones de programas deportivos sobre equipos de fútbol guatemaltecos. Clasifica sentimiento — positivo, neutro, negativo — extrae temas (entrenador, refuerzos, árbitro) y produce un dashboard semanal del estado emocional de cada afición.",
      en: "NLP pipeline that ingests tweets, social comments, and sports show transcripts about Guatemalan football teams. Classifies sentiment — positive, neutral, negative — extracts topics (coach, signings, referee), and produces a weekly dashboard of each fandom's emotional state.",
    },
    technologies: ["ai", "nlp", "analytics"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/sentiment-analysis-y-futbol.png",
  },
  {
    id: "drone",
    name: "Drone",
    description: {
      es: "Ensamble y puesta en marcha de kit de dron.",
      en: "Assembly and deployment of a drone kit.",
    },
    longDescription: {
      es: "Ensamble desde cero de un dron: motores brushless, ESC, frame de fibra de carbono, controlador de vuelo F4 corriendo Betaflight, receptor y telemetría. Proceso enfocado en que los estudiantes entiendan cada componente del stack antes de pasar a autonomía y sensado.",
      en: "From-scratch drone build: brushless motors, ESCs, carbon fiber frame, F4 flight controller running Betaflight, receiver, and telemetry. Process focused on students understanding each component of the stack before moving to autonomy and sensing.",
    },
    technologies: ["electronics", "robotics", "hardware"],
    status: "in_progress",
    date: "2025-12",
    image: "/images/projects/drone.jpeg",
  },
  {
    id: "mano-robotica",
    name: "Mano Robótica",
    description: {
      es: "Rediseño y reconstrucción de mano robótica funcional.",
      en: "Redesign and rebuild of a functional robotic hand.",
    },
    longDescription: {
      es: "Rediseño de prótesis/mano robótica basada en proyecto open source. Cinco dedos articulados movidos por servomotores y tendones de nylon, control por EMG superficial o por control remoto. Reducción de costo respecto a soluciones comerciales manteniendo destreza útil para agarres básicos.",
      en: "Redesign of open-source prosthetic/robotic hand. Five articulated fingers actuated by servomotors and nylon tendons, controlled via surface EMG or remote. Cost reduction vs. commercial solutions while maintaining useful dexterity for basic grips.",
    },
    technologies: ["robotics", "mechatronics"],
    status: "finished",
    date: "2025-09",
    image: "/images/projects/mano-robotica.jpeg",
  },
  {
    id: "cartel-luz",
    name: "Cartel Luz",
    description: {
      es: "Gadget promocional con ESP8266, LEDs NeoPixel y un mini-juego para activaciones en colegios.",
      en: "Promotional gadget with ESP8266, NeoPixel LEDs, and a mini-game for school outreach activities.",
    },
    longDescription: {
      es: "Cartel luminoso interactivo pensado como herramienta de promoción del lab en visitas a colegios. Un ESP8266 controla una matriz de LEDs NeoPixel que muestra animaciones y un mini-juego con el que los estudiantes interactúan al acercarse. Funciona como anzuelo visual para iniciar conversación sobre los proyectos del laboratorio.",
      en: "Interactive light sign designed as a lab outreach tool for school visits. An ESP8266 drives a NeoPixel LED matrix that displays animations and a mini-game students can play. It works as a visual hook to start conversations about lab projects.",
    },
    technologies: ["esp8266", "neopixel", "iot", "outreach"],
    status: "finished",
    date: "2026-01",
    image: "/images/projects/cartel-luz.jpeg",
  },
  {
    id: "brazo-mirobot",
    name: "Brazo Recogedor (Mirobot)",
    description: {
      es: "Kit Mirobot de brazo robótico industrial adaptado para prácticas educativas en mecatrónica.",
      en: "Mirobot industrial robotic arm kit adapted for educational mechatronics practice.",
    },
    longDescription: {
      es: "Kit Mirobot — brazo robótico industrial de bajo costo — usado como plataforma educativa en el lab. Permite explorar cinemática inversa, programación de trayectorias y operaciones tipo pick-and-place. Los estudiantes lo programan para tareas de recogida y clasificación de objetos como introducción accesible a robótica industrial.",
      en: "Mirobot kit — low-cost industrial robotic arm — used as an educational platform at the lab. It enables exploring inverse kinematics, trajectory programming, and pick-and-place operations. Students program it for object retrieval and sorting tasks as an accessible introduction to industrial robotics.",
    },
    technologies: ["robotics", "mirobot", "mechatronics", "education"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/brazo-recogedor.jpeg",
  },
];
