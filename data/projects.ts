export interface ProjectLink {
  label: string;
  labelEn?: string;
  url: string;
}

export type ProjectCategory =
  | "physical_ai"
  | "iot_hardware"
  | "agents_llms"
  | "health_fintech"
  | "vision_spatial"
  | "nlp_generative";

export interface Project {
  id: string;
  name: string;
  nameEn?: string;
  category?: ProjectCategory;
  featured?: boolean;
  description: { es: string; en: string };
  technologies: string[];
  status: "in_progress" | "finished" | "archived";
  date: string;
  image?: string;
  repo?: string;
  longDescription?: { es: string; en: string };
  gallery?: { src: string; caption: { es: string; en: string } }[];
  /** External links: demo, paper, article, evaluation report, slides, etc. */
  links?: ProjectLink[];
  /** IDs of team members involved (matches `data/team.ts`). */
  team?: string[];
  demoUrl?: string;
  archivedDemoUrl?: string;
  experimental?: boolean;
}

export const featuredProjectIds = [
  "rosorin-physical-ai",
  "hexacoptero-fy690s",
  "brazo-mirobot",
  "mano-robotica",
  "tzij-kiche-gemma",
  "preconsulta-medica-ai",
  "cartel-luz",
  "estados-de-cuenta-gt",
  "finanzas-ingresos-variables",
  "split-brain-suite",
];

export const projects: Project[] = [
  // ============================================================================
  // FLAGSHIP RESEARCH, COMPARATIVE CHALLENGES & AI BUILDERS (2026–2027)
  // ============================================================================
  {
    id: "rosorin-physical-ai",
    name: "ROSOrin Pro y su gemelo digital",
    nameEn: "ROSOrin Pro and its digital twin",
    category: "physical_ai",
    featured: true,
    description: {
      es: "Manipulador móvil autónomo con Jetson Orin Nano, ROS 2 Humble, puente determinista en Rust a 40 Hz y gemelo digital 3D URDF a 60 FPS controlado por voz con Gemini Live.",
      en: "Autonomous mobile manipulator with Jetson Orin Nano, ROS 2 Humble, 40 Hz deterministic Rust bridge, and 60 FPS 3D URDF Digital Twin controlled via Gemini Live voice.",
    },
    longDescription: {
      es: "Conecta sesiones multimodales en el navegador (Gemini Live WebSockets) y un gemelo digital 3D en Three.js a 60 FPS con un lazo de control determinista en Rust a 40 Hz corriendo sobre Jetson Orin Nano y ROS 2 Humble. Incluye brazo de 6 grados de libertad, cámara de profundidad 3D Aurora 930, LiDAR 2D y chasis Mecanum, más investigación científica en anclaje espacial Eye-in-Hand (4.62 mm RMSE) y envolventes cinemáticas de seguridad sin falsos frenados.",
      en: "Connects browser multimodal sessions (Gemini Live WebSockets) and a 60 FPS Three.js URDF Digital Twin to a deterministic 40 Hz Rust control loop on Jetson Orin Nano and ROS 2 Humble. Features a 6-DOF arm, Aurora 930 3D depth camera, 2D LiDAR, and Mecanum chassis, backed by scientific research on Eye-in-Hand 3D spatial grounding (4.62 mm RMSE) and kinematic safety envelopes.",
    },
    technologies: [
      "ROS 2 Humble",
      "Jetson Orin Nano",
      "Rust",
      "Three.js URDF",
      "Gemini Live",
    ],
    status: "finished",
    date: "2026-10",
    image: "/images/projects/rosorin-hardware.png",
    gallery: [
      {
        src: "/images/projects/rosorin-simulator.png",
        caption: {
          es: "Gemelo digital 3D URDF en Three.js a 60 FPS sincronizado con el robot físico.",
          en: "60 FPS Three.js 3D URDF digital twin synchronized with the physical robot.",
        },
      },
      {
        src: "/images/projects/rosorin-control.png",
        caption: {
          es: "Panel de control cinemático y telemetría en tiempo real conectado al puente Rust a 40 Hz.",
          en: "Real-time kinematic control and telemetry panel connected to the 40 Hz Rust bridge.",
        },
      },
    ],
    repo: "https://github.com/ykro/rosorin-jsconf",
    demoUrl: "https://jsconfmx26.web.app/demo",
    links: [
      { label: "Simulador 3D (60 FPS)", labelEn: "3D simulator (60 FPS)", url: "https://jsconfmx26.web.app/demo" },
      { label: "Sitio & Arquitectura", labelEn: "Project site and architecture", url: "https://jsconfmx26.web.app" },
      { label: "Slides Interactivas", labelEn: "Interactive slides", url: "https://jsconfmx26.web.app/slides" },
    ],
    team: ["adrian-catalan", "mario-cifuentes", "luis-galicia"],
  },
  {
    id: "tzij-kiche-gemma",
    name: "Tzij: traducción entre español y k’iche’",
    nameEn: "Tzij: Spanish–K’iche’ translation",
    category: "nlp_generative",
    featured: true,
    description: {
      es: "Traducción neuronal de bajos recursos para idioma Maya K'iche' combinando Gemma 4 E4B, LoRA RAFT, recuperación híbrida BM25 + Vector RRF y decodificación MBR sobre GPU L4.",
      en: "Low-resource neural translation for Mayan K'iche' combining Gemma 4 E4B, RAFT LoRA, hybrid BM25 + Vector RRF retrieval, and MBR decoding on serverless L4 GPU.",
    },
    longDescription: {
      es: "Investigación científica ('David vs. Goliath') que demuestra cómo un modelo abierto de 4B parámetros (Gemma 4 E4B) especializado mediante RAFT LoRA, recuperación léxico-semántica híbrida (RRF) y Minimum Bayes Risk (MBR-4) sobre Cloud Run con GPU NVIDIA L4 supera a modelos generales de frontera por +8.5 puntos chrF++ (37.4 vs 28.9) en localización de software al K'iche', con latencia mediana de 0.81 s.",
      en: "Scientific research ('David vs. Goliath') demonstrating how a 4B open model (Gemma 4 E4B) specialized via RAFT LoRA, hybrid lexical-semantic retrieval (RRF), and Minimum Bayes Risk (MBR-4) on serverless Cloud Run NVIDIA L4 GPU outperforms frontier general models by +8.5 chrF++ (37.4 vs 28.9) on K'iche' software localization at 0.81 s median latency.",
    },
    technologies: [
      "Gemma 4 E4B",
      "LoRA / RAFT",
      "Hybrid RAG",
      "Cloud Run L4 GPU",
      "Indigenous NLP",
    ],
    status: "finished",
    date: "2026-10",
    image: "/images/projects/tzij-demo.png",
    gallery: [
      {
        src: "/images/projects/tzij-results.png",
        caption: {
          es: "Resultados experimentales en chrF++ comparando Gemma 4 E4B especializado frente a modelos generales.",
          en: "Experimental chrF++ benchmark comparing specialized Gemma 4 E4B against frontier general models.",
        },
      },
      {
        src: "/images/projects/tzij-architecture.png",
        caption: {
          es: "Arquitectura de recuperación híbrida BM25 + Vector RRF y decodificación MBR-4 sobre GPU L4.",
          en: "Hybrid BM25 + Vector RRF retrieval and MBR-4 decoding architecture on L4 GPU.",
        },
      },
    ],
    repo: "https://github.com/ykro/tzij",
    links: [
      {
        label: "Presentación David vs. Goliath", labelEn: "David vs. Goliath presentation",
        url: "https://docs.google.com/presentation/d/1MddCAi51juUAEXbbiUyXwL6CqYzId0ELFSBwzREUW6U/edit?usp=sharing",
      },
    ],
    team: ["adrian-catalan"],
  },
  {
    id: "split-brain-suite",
    name: "Reto Split-Brain: IA para negociar un salario con privacidad",
    nameEn: "Split-Brain Challenge: private salary negotiation with AI",
    category: "agents_llms",
    featured: true,
    description: {
      es: "Suite comparativa de arquitecturas Split-Brain donde el salario actual y datos sensibles jamás salen a la nube pública, evaluando APIs externas, Ollama en GPU L4 y WebGPU en el navegador.",
      en: "Comparative suite of Split-Brain architectures where current salary and sensitive PII never leave trusted boundaries, benchmarking external APIs, L4 GPU Ollama, and in-browser WebGPU.",
    },
    longDescription: {
      es: "Reto de ingeniería del Innovation Lab alojado en la organización oficial (innovationlabug/coverletter-gen). El objetivo es generar una carta de presentación pública y una nota privada de negociación salarial garantizando por código determinista que los datos sensibles nunca viajen al LLM externo. Incluye tres implementaciones de referencia de Adrián Catalán (Carta y copia en Vercel, Rango con Ollama sobre GPU NVIDIA L4 en Cloud Run comparando Gemma 4 vs Qwen, y Sobre con Gemma 4 E2B corriendo en el navegador vía transformers.js y Firebase AI Logic) junto a las implementaciones independientes y artículos técnicos de Luis Cu, Cathy Batres y Emily Curín.",
      en: "Comparative engineering challenge hosted at innovationlabug/coverletter-gen. Generates a tailored cover letter and a private salary negotiation strategy while deterministically guaranteeing sensitive salary/PII never reaches public cloud LLMs. Includes 3 reference architectures by Adrián Catalán (Carta y copia, Rango on Cloud Run L4 GPU, and Sobre running Gemma 4 E2B in-browser via WebGPU) alongside independent implementations and technical papers by Luis Cu, Cathy Batres, and Emily Curín.",
    },
    technologies: [
      "Split-Brain AI",
      "Gemma 4 / Qwen",
      "Cloud Run L4 GPU",
      "Transformers.js WebGPU",
      "Firebase AI Logic",
    ],
    status: "finished",
    date: "2026-09",
    image: "/images/projects/split-brain-sobre.png",
    gallery: [
      {
        src: "/images/projects/split-brain-carta-y-copia.png",
        caption: {
          es: "Carta y Copia: sanitización determinista de PII en el navegador y enriquecimiento de rangos salariales.",
          en: "Carta y Copia: deterministic client-side PII sanitization and salary benchmark enrichment.",
        },
      },
      {
        src: "/images/projects/split-brain-rango.png",
        caption: {
          es: "Rango: inferencia privada en Ollama sobre GPU NVIDIA L4 en Cloud Run comparando Gemma 4 y Qwen.",
          en: "Rango: private Ollama inference on Cloud Run NVIDIA L4 GPU comparing Gemma 4 and Qwen.",
        },
      },
    ],
    repo: "https://github.com/innovationlabug/coverletter-gen",
    links: [
      {
        label: "Evaluación del equipo en GitHub",
        labelEn: "Team evaluation on GitHub",
        url: "https://github.com/innovationlabug/coverletter-gen#entregas-del-equipo-y-reportes-de-evaluaci%C3%B3n",
      },
      {
        label: "Archivo del informe interactivo (HTML)",
        labelEn: "Interactive report file (HTML)",
        url: "https://github.com/innovationlabug/coverletter-gen/blob/main/evaluaciones/reporte_final_interactivo_split_brain.html",
      },
      {
        label: "Demo: Carta y Copia (APIs)",
        url: "https://carta-y-copia.vercel.app",
      },
      {
        label: "Demo: Rango (Cloud Run GPU L4)",
        url: "https://rango-611681112050.us-central1.run.app",
      },
      {
        label: "Demo: Sobre (WebGPU Browser)",
        url: "https://sobre-carta.vercel.app",
      },
      {
        label: "Repo Rango (coverletter-gemma)",
        url: "https://github.com/ykro/coverletter-gemma",
      },
    ],
    team: ["adrian-catalan", "luis-cu", "catherine-batres", "emily-curin"],
  },
  {
    id: "split-brain-luis-cu",
    name: "Split-Brain Cover Letter: integración de APIs salariales",
    nameEn: "Split-Brain Cover Letter: salary API integration",
    category: "agents_llms",
    description: {
      es: "Arquitectura Split-Brain en Next.js que consulta salarios de mercado en Glassdoor (Serper API) y perfiles de LinkedIn (Enrich Layer) manteniendo el salario del candidato 100% local.",
      en: "Next.js Split-Brain architecture querying Glassdoor market salaries (Serper API) and LinkedIn profiles (Enrich Layer) while keeping candidate salary data 100% client-side.",
    },
    longDescription: {
      es: "Desarrollado por Luis Cu (@cuprumbot) como parte del reto Split-Brain del laboratorio. Combina Route Handlers en Next.js con Serper API para extraer rangos salariales de Glassdoor y Enrich Layer para estructurar experiencia de LinkedIn, filtrando determinísticamente el nombre real y las expectativas salariales antes de invocar a Gemini Pro. Incluye cálculo local por expresiones regulares y artículo técnico en Substack.",
      en: "Built by Luis Cu (@cuprumbot) for the Lab's Split-Brain challenge. Combines Next.js Route Handlers with Serper API for Glassdoor salary benchmarks and Enrich Layer for LinkedIn profile parsing, deterministically stripping candidate identity and salary expectations before calling Gemini Pro.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Gemini Pro",
      "Serper API",
      "Privacy Regex",
    ],
    status: "finished",
    date: "2026-09",
    image: "/images/projects/split-brain-luis-cu.png",
    gallery: [
      {
        src: "/images/projects/split-brain-luis-form.png",
        caption: {
          es: "Formulario de captura con separación explícita entre datos privados locales y contexto profesional.",
          en: "Input form with explicit separation between local private data and professional context.",
        },
      },
      {
        src: "/images/projects/split-brain-luis-arch.png",
        caption: {
          es: "Diagrama de arquitectura Split-Brain entre navegador, Route Handlers en Next.js y APIs externas.",
          en: "Split-Brain architecture diagram across browser, Next.js Route Handlers, and external APIs.",
        },
      },
    ],
    repo: "https://github.com/cuprumbot/cover-letter-local",
    demoUrl: "https://cover-letter-six-eta.vercel.app/",
    links: [
      {
        label: "Artículo en Substack (Luis Cu)", labelEn: "Substack article (Luis Cu)",
        url: "https://cuprumbot.substack.com/p/split-brain-division-de-tareas-para",
      },
      {
        label: "Archivo del informe de evaluación (HTML)",
        labelEn: "Evaluation report file (HTML)",
        url: "https://github.com/innovationlabug/coverletter-gen/blob/main/evaluaciones/reporte_evaluacion_luis.html",
      },
    ],
    team: ["luis-cu", "adrian-catalan"],
  },
  {
    id: "split-brain-cathy-batres",
    name: "Carta Split-Brain: evaluación local de Gemma 3 y Qwen 3",
    nameEn: "Carta Split-Brain: local evaluation of Gemma 3 and Qwen 3",
    category: "agents_llms",
    description: {
      es: "Enrutador Split-Brain fail-closed con allowlist estricta y benchmark ciego comparando modelos locales en Ollama (Gemma 3 vs Qwen 3) para estrategia de negociación salarial.",
      en: "Fail-closed Split-Brain router with strict allowlist and blind benchmark comparing local Ollama models (Gemma 3 vs Qwen 3) for private salary negotiation.",
    },
    longDescription: {
      es: "Desarrollado por Cathy Batres (@CatherineBatres). Implementa un guardián de privacidad determinista (CAMPOS_SOLO_LOCAL) con panel de inspección JSON en vivo para auditar qué payload viaja a la nube y qué se procesa en local con Ollama. Incluye un estudio comparativo a ciegas entre Gemma 3 y Qwen 3 midiendo calidad de extracción de requisitos y generación de notas de negociación salarial.",
      en: "Built by Cathy Batres (@CatherineBatres). Implements a deterministic fail-closed privacy guardian (CAMPOS_SOLO_LOCAL) with a live JSON inspection panel auditing cloud vs. local payloads, paired with a blind evaluation comparing Gemma 3 and Qwen 3 on local Ollama.",
    },
    technologies: [
      "Python",
      "Ollama",
      "Gemma 3 vs Qwen 3",
      "Gemini API",
      "Deterministic Router",
    ],
    status: "finished",
    date: "2026-09",
    image: "/images/projects/split-brain-cathy-arch.png",
    gallery: [
      {
        src: "/images/projects/split-brain-cathy-batres.png",
        caption: {
          es: "Ejecución en modo local con Gemma y auditoría en vivo del payload sanitizado.",
          en: "Local execution with Gemma and live inspection of the sanitized payload.",
        },
      },
      {
        src: "/images/projects/split-brain-cathy-calidad.png",
        caption: {
          es: "Evaluación comparativa de calidad y latencia entre Gemma 3 y Qwen 3 corriendo en Ollama.",
          en: "Comparative quality and latency evaluation between Gemma 3 and Qwen 3 running on Ollama.",
        },
      },
    ],
    repo: "https://github.com/CatherineBatres/carta-split-brain",
    links: [
      {
        label: "Artículo Técnico en GitHub", labelEn: "Technical article on GitHub",
        url: "https://github.com/CatherineBatres/carta-split-brain/blob/main/docs/articulo.md",
      },
      {
        label: "Archivo del informe de evaluación (HTML)",
        labelEn: "Evaluation report file (HTML)",
        url: "https://github.com/innovationlabug/coverletter-gen/blob/main/evaluaciones/reporte_evaluacion_cathy.html",
      },
    ],
    team: ["catherine-batres", "adrian-catalan"],
  },
  {
    id: "split-brain-emily-curin",
    name: "CoverLetter Privacy Gate: pruebas de privacidad",
    nameEn: "CoverLetter Privacy Gate: privacy tests",
    category: "agents_llms",
    description: {
      es: "Compuerta determinista de privacidad con redacción automática de PII, degradación elegante en 3 niveles (Nube → Ollama Local → Plantilla) y más de 15 casos de prueba automatizados.",
      en: "Deterministic privacy gate with automatic PII redaction, 3-tier graceful fallback (Cloud → Local Ollama → Template), and 15+ automated validation test cases.",
    },
    longDescription: {
      es: "Desarrollado por Emily Curín (@EmilyCurin). Diseña una arquitectura auditable que somete cada solicitud a una compuerta de validación antes de tocar cualquier API externa, garantizando cero fugas de datos salariales o personales incluso ante prompts adversariales, con respaldo automático a modelos locales en Ollama y plantillas deterministas.",
      en: "Built by Emily Curín (@EmilyCurin). Designs an auditable privacy gate that inspects and sanitizes every payload prior to external API calls, guaranteeing zero leakage of salary or personal identifiers across 15+ automated validation scenarios.",
    },
    technologies: [
      "Python",
      "Privacy Gate",
      "Ollama / Qwen",
      "Automated Evals",
      "Streamlit",
    ],
    status: "finished",
    date: "2026-09",
    image: "/images/projects/split-brain-emily-curin.png",
    repo: "https://github.com/EmilyCurin/CoverLetter",
    links: [
      {
        label: "Artículo Técnico (ARTICLE.md)", labelEn: "Technical article (ARTICLE.md)",
        url: "https://github.com/EmilyCurin/CoverLetter/blob/main/ARTICLE.md",
      },
      {
        label: "Archivo del informe de evaluación (HTML)",
        labelEn: "Evaluation report file (HTML)",
        url: "https://github.com/innovationlabug/coverletter-gen/blob/main/evaluaciones/reporte_evaluacion_emily.html",
      },
    ],
    team: ["emily-curin", "adrian-catalan"],
  },
  {
    id: "preconsulta-medica-ai",
    name: "PreConsulta Médica por Voz",
    nameEn: "Voice-based medical intake",
    category: "health_fintech",
    featured: true,
    description: {
      es: "Transforma el relato hablado de un paciente de 2 minutos en una ficha clínica estructurada (SOAP/OPQRST) mediante preguntas adaptativas de seguimiento y detección de banderas rojas.",
      en: "Transforms a 2-minute spoken patient narrative into a structured clinical record (SOAP/OPQRST) via adaptive follow-up questions and red-flag symptom detection.",
    },
    longDescription: {
      es: "Parte del catálogo AI Builders First Round (innovationlabug/aibuilders-first-round). Incluye la implementación web móvil de Cathy Batres (PreConsulta, con grabación de audio nativa, extracción de 13 campos clínicos sin almacenar PII en servidor y exportación PDF/WhatsApp) y el sistema dual de Adrián Catalán (Telemed Pre-Consult AI en Web y app nativa Android en Jetpack Compose ejecutando Gemma 4 E2B 100% offline en GPU/NPU vía MediaPipe).",
      en: "Part of the AI Builders First Round catalog (innovationlabug/aibuilders-first-round). Combines Cathy Batres's mobile-first PreConsulta web app (turning patient voice audio into a 13-field clinical sheet with red-flag detection and zero server PII storage) and Adrián Catalán's dual-client Telemed Pre-Consult AI (Web + native Android running Gemma 4 E2B 100% offline via MediaPipe).",
    },
    technologies: [
      "Next.js",
      "Gemini Flash",
      "Android Jetpack Compose",
      "Gemma 4 On-Device",
      "Clinical NLP",
    ],
    status: "finished",
    date: "2026-10",
    image: "/images/projects/preconsulta-showcase.png",
    gallery: [
      {
        src: "/images/projects/preconsulta-ficha-lista.png",
        caption: {
          es: "Ficha médica estructurada generada automáticamente a partir del relato de voz (Cathy Batres).",
          en: "Structured medical intake sheet automatically generated from the patient's voice narrative (Cathy Batres).",
        },
      },
      {
        src: "/images/projects/preconsulta-inicio-nuevo.png",
        caption: {
          es: "Pantalla de captura por voz y mapa corporal interactivo de PreConsulta (Cathy Batres).",
          en: "Voice capture screen and interactive body map in PreConsulta (Cathy Batres).",
        },
      },
      {
        src: "/images/projects/telemed-android.png",
        caption: {
          es: "App nativa Android ejecutando Gemma 4 E2B 100% offline en el teléfono (Adrián Catalán).",
          en: "Native Android app running Gemma 4 E2B 100% offline on-device (Adrián Catalán).",
        },
      },
    ],
    repo: "https://github.com/CatherineBatres/preconsulta",
    demoUrl: "https://preconsulta-iota.vercel.app/",
    links: [
      {
        label: "Demo PreConsulta (Cathy Batres)",
        url: "https://preconsulta-iota.vercel.app/",
      },
      {
        label: "Artículo en Substack (Cathy Batres)", labelEn: "Substack article (Cathy Batres)",
        url: "https://catherinebatres.substack.com/p/de-un-audio-a-una-ficha-medica-lo",
      },
      {
        label: "Demo Telemed AI (Adrián Catalán)",
        url: "https://telemed-preconsult-ai.vercel.app",
      },
      {
        label: "Repo Web (ykro/telemed-preconsult-ai)", labelEn: "Web repository (ykro/telemed-preconsult-ai)",
        url: "https://github.com/ykro/telemed-preconsult-ai",
      },
      {
        label: "Repo Android Offline (ykro)", labelEn: "Offline Android repository (ykro)",
        url: "https://github.com/ykro/telemed-preconsult-android",
      },
      {
        label: "Índice AI Builders First Round", labelEn: "AI Builders First Round index",
        url: "https://github.com/innovationlabug/aibuilders-first-round",
      },
    ],
    team: ["catherine-batres", "adrian-catalan"],
  },
  {
    id: "finanzas-ingresos-variables",
    name: "Integral y Cashflow Smoother: gestión de ingresos variables",
    nameEn: "Integral and Cashflow Smoother: managing variable income",
    category: "health_fintech",
    featured: true,
    description: {
      es: "Motores financieros para profesionales independientes que combinan bóvedas SQLite cifradas, OCR multimodal de recibos, detección de regímenes estacionales y cálculo de retención óptima.",
      en: "Financial engines for independent professionals combining encrypted SQLite vaults, multimodal receipt OCR, seasonal regime detection, and optimal retention modeling.",
    },
    longDescription: {
      es: "Dos enfoques complementarios dentro de innovationlabug/aibuilders-first-round: (1) Integral · Ingresos Variables por Emily Curín (@EmilyCurin), con ingesta multi-formato (PDF, XLSX, CSV y fotografías de recibos vía OCR), bóveda SQLite cifrada por usuario con Fernet+scrypt y proyección de escenarios conservador/esperado/optimista (±1σ); y (2) Freelance Cashflow Smoother por Adrián Catalán (@ykro), motor determinista en GTQ/USD que detecta meses pico/valle y calcula semanas de autonomía (runway) y reglas de ahorro acotadas (5%–45%).",
      en: "Two complementary systems from innovationlabug/aibuilders-first-round: (1) Integral by Emily Curín (@EmilyCurin), featuring multi-format document ingestion (PDF, XLSX, CSV, receipt OCR), per-user Fernet+scrypt encrypted SQLite vaults, and ±1σ scenario modeling; and (2) Freelance Cashflow Smoother by Adrián Catalán (@ykro), a deterministic GTQ/USD cashflow stabilizer with interactive what-if simulations.",
    },
    technologies: [
      "FastAPI & React",
      "Encrypted SQLite (Fernet)",
      "OCR & PyMuPDF",
      "Recharts",
      "Statistical Modeling",
    ],
    status: "finished",
    date: "2026-10",
    image: "/images/projects/freelance-cashflow-plan.png",
    gallery: [
      {
        src: "/images/projects/freelance-cashflow-smoother.png",
        caption: {
          es: "Ingreso bimonetario en Quetzales (GTQ) y Dólares (USD) con clasificación automática de temporadas.",
          en: "Bi-monetary GTQ/USD income input with automatic seasonal regime classification.",
        },
      },
      {
        src: "/images/projects/integral-ingresos-variables.png",
        caption: {
          es: "Integral · Ingresos Variables (Emily Curín): bóveda privada por usuario desplegada en Vercel.",
          en: "Integral · Variable Income (Emily Curín): per-user private financial vault deployed on Vercel.",
        },
      },
    ],
    repo: "https://github.com/EmilyCurin/Integral-ingresos-variables",
    demoUrl: "https://integral-ingresos-variables.vercel.app",
    links: [
      {
        label: "Demo Integral (Emily Curín)",
        url: "https://integral-ingresos-variables.vercel.app",
      },
      {
        label: "Demo Cashflow Smoother (Adrián Catalán)",
        url: "https://freelance-cashflow-smoother.vercel.app",
      },
      {
        label: "Repo Integral (EmilyCurin)",
        url: "https://github.com/EmilyCurin/Integral-ingresos-variables",
      },
      {
        label: "Repo Cashflow Smoother (ykro)",
        url: "https://github.com/ykro/freelance-cashflow-smoother",
      },
    ],
    team: ["emily-curin", "adrian-catalan"],
  },
  {
    id: "estados-de-cuenta-gt",
    name: "Expense Tracker y Card Statement Insights: análisis de estados de cuenta",
    nameEn: "Expense Tracker and Card Statement Insights: bank statement analysis",
    category: "health_fintech",
    featured: true,
    description: {
      es: "Análisis automatizado de estados de cuenta bancarios de Guatemala (BI, G&T, Banrural) con anonimización local de PII, conversión USD→GTQ, separación de extrafinanciamientos y parser binario en 6 ms.",
      en: "Automated bank statement intelligence for Guatemalan banks (BI, G&T, Banrural) featuring local PII anonymization, USD→GTQ conversion, installment separation, and a 6 ms binary PDF parser.",
    },
    longDescription: {
      es: "Desarrollado dentro del reto AI Builders First Round: (1) Expense Tracker por Luis Cu (@cuprumbot) procesa lotes PDF/CSV de Banco Industrial, G&T Continental y Banrural, deduplica transacciones, convierte USD a GTQ, detecta suscripciones recurrentes y anonimiza PII en el cliente con vista previa antes de clasificar comercios desconocidos con Gemini; y (2) Card Statement Insights por Adrián Catalán (@ykro) implementa un parser binario de flujos PDF (zlib + coordenadas BT..ET en ~6 ms sin LLM) que separa compras regulares en GTQ, USD y cuotas/extrafinanciamientos (FIN/CT, FIN/IN).",
      en: "Built for the AI Builders First Round challenge: (1) Expense Tracker by Luis Cu (@cuprumbot) parses multi-bank PDF/CSV statements (Banco Industrial, G&T Continental, Banrural), deduplicates batches, converts USD→GTQ, and anonymizes PII locally with visual confirmation; (2) Card Statement Insights by Adrián Catalán (@ykro) implements a 6 ms zero-LLM binary PDF stream parser separating GTQ, USD, and installment ledgers.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Binary PDF Parser",
      "PII Anonymizer",
      "Gemini Pro",
    ],
    status: "finished",
    date: "2026-10",
    image: "/images/projects/expense-tracker-dashboard.png",
    gallery: [
      {
        src: "/images/projects/card-statement-insights.png",
        caption: {
          es: "Card Statement Insights: desglose bimonetario GTQ/USD y separación de extrafinanciamientos en 6 ms.",
          en: "Card Statement Insights: 6 ms bi-monetary GTQ/USD breakdown and installment separation.",
        },
      },
      {
        src: "/images/projects/expense-tracker-budget.png",
        caption: {
          es: "Herramienta de presupuesto y alertas por categoría en Expense Tracker (Luis Cu).",
          en: "Category budget planner and threshold alerts in Expense Tracker (Luis Cu).",
        },
      },
    ],
    repo: "https://github.com/cuprumbot/expense-tracker",
    demoUrl: "https://expense-tracker-blue-sigma-85.vercel.app",
    links: [
      {
        label: "Demo Expense Tracker (Luis Cu)",
        url: "https://expense-tracker-blue-sigma-85.vercel.app",
      },
      {
        label: "Demo Card Statement Insights (Adrián)",
        url: "https://card-statement-insights.vercel.app",
      },
      {
        label: "Repo Expense Tracker (cuprumbot)",
        url: "https://github.com/cuprumbot/expense-tracker",
      },
      {
        label: "Repo Card Statement Insights (ykro)",
        url: "https://github.com/ykro/card-statement-insights",
      },
    ],
    team: ["luis-cu", "adrian-catalan"],
  },
  {
    id: "hexacoptero-fy690s",
    name: "Hexacóptero autónomo FY690S: navegación sin GPS",
    nameEn: "FY690S autonomous hexacopter: navigation without GPS",
    category: "physical_ai",
    description: {
      es: "Aeronave multirrotor de 6 motores (~4 kg) con controlador Pixhawk 6X, Raspberry Pi 5, LiDAR 360° RPLIDAR C1 y cámaras de flujo óptico para vuelo autónomo en entornos sin señal GPS.",
      en: "6-motor hexacopter (~4 kg) engineered with Pixhawk 6X, Raspberry Pi 5, 360° RPLIDAR C1, and optical flow cameras for autonomous flight in GPS-denied environments.",
    },
    longDescription: {
      es: "Plataforma aérea de investigación construida en el laboratorio sobre chasis plegable de fibra de carbono Tarot FY690S. Integra controlador de vuelo redundante Holybro Pixhawk 6X corriendo ArduCopter, computador de misión Raspberry Pi 5 enlazado vía MAVLink, LiDAR 360° más 5 sonares SRF02 para evasión omnidireccional de obstáculos, posicionamiento por flujo óptico sin GPS y sistema de paracaídas de emergencia.",
      en: "Research aerial platform engineered in the Lab on a Tarot FY690S carbon-fiber frame. Integrates a redundant Holybro Pixhawk 6X flight controller running ArduCopter, a Raspberry Pi 5 companion computer via MAVLink, 360° LiDAR plus 5 SRF02 sonars for omnidirectional obstacle avoidance, optical-flow GPS-denied positioning, and an emergency parachute system.",
    },
    technologies: [
      "Pixhawk 6X",
      "Raspberry Pi 5",
      "LiDAR 360°",
      "Optical Flow",
      "ArduCopter",
    ],
    status: "in_progress",
    date: "2026-08",
    image: "/images/projects/drone.jpeg",
    repo: "https://github.com/innovationlabug/drone-fy690s",
    team: ["mario-cifuentes", "luis-galicia", "gerardo-vazquez", "ivan-rojas", "adrian-catalan"],
  },
  {
    id: "mini-pupper-gemini-live",
    name: "Mini Pupper 2: robot cuadrúpedo con Gemini Live",
    nameEn: "Mini Pupper 2: quadruped robot with Gemini Live",
    category: "physical_ai",
    description: {
      es: "Perro robótico cuadrúpedo de 12 grados de libertad sobre ROS 2 Humble y Raspberry Pi que conversa, navega con LiDAR SLAM y expresa emociones en tiempo real mediante Gemini Live API.",
      en: "12-DOF quadruped robot dog on ROS 2 Humble and Raspberry Pi that converses, navigates via LiDAR SLAM, and expresses real-time emotions powered by Gemini Live API.",
    },
    longDescription: {
      es: "Integra un puente HTTP a ROS 2 Humble en FastAPI con sesiones de voz bidireccional de baja latencia en Gemini Live. El cuadrúpedo ejecuta 7 modos interactivos para demostraciones universitarias y visitas a colegios: guía de recorrido con SLAM, respuestas emocionales según proximidad LiDAR, modo radio Bumblebee, rutina de comedia en vivo y teleoperación.",
      en: "Bridges FastAPI and ROS 2 Humble with low-latency bidirectional voice sessions in Gemini Live. The 12-DOF quadruped runs 7 interactive modes for university demos and school outreach: SLAM tour guide, LiDAR proximity emotional states, Bumblebee radio mode, stand-up comedy routine, and voice teleoperation.",
    },
    technologies: [
      "ROS 2 Humble",
      "Gemini Live API",
      "Raspberry Pi",
      "LiDAR SLAM",
      "12-DOF Servos",
    ],
    status: "finished",
    date: "2026-07",
    image: "/images/projects/mini-pupper-2.jpg",
    gallery: [
      {
        src: "/images/projects/mini-pupper-rviz.png",
        caption: {
          es: "Visualización de articulaciones URDF y seguimiento en RViz sobre ROS 2.",
          en: "URDF joint visualization and tracking in RViz on ROS 2.",
        },
      },
    ],
    repo: "https://github.com/ykro/pupper-talk",
    links: [
      { label: "Repo Pupper Talk", url: "https://github.com/ykro/pupper-talk" },
      {
        label: "Repo ROS 2 Bridge (pupper-bridge)",
        url: "https://github.com/ykro/pupper-bridge",
      },
    ],
    team: ["adrian-catalan", "mario-cifuentes", "luis-galicia"],
  },
  {
    id: "escudo-agentic-web",
    name: "Escudo: una aseguradora lista para agentes",
    nameEn: "Escudo: an agent-ready insurance demo",
    category: "agents_llms",
    description: {
      es: "Demo de una aseguradora de autos ficticia que permite cotizar, gestionar reclamos y coordinar grúa y taller mediante agentes de IA, con aprobaciones humanas en los pasos sensibles.",
      en: "A fictional auto insurance demo where AI agents handle quotes, claims, and tow and repair coordination, with human approval for sensitive steps.",
    },
    longDescription: {
      es: "Escudo expone las mismas capacidades desde una app Android con AppFunctions, un portal web con WebMCP, un servidor MCP y un chat. El agente coordina servicios de grúa y taller con A2A. El flujo de demostración utiliza datos ficticios y requiere tres aprobaciones con huella antes de completar el reclamo.",
      en: "Escudo exposes the same capabilities through an Android app with AppFunctions, a WebMCP portal, an MCP server, and chat. The agent coordinates tow and repair services through A2A. The demonstration uses fictional data and requires three fingerprint approvals before completing a claim.",
    },
    technologies: ["MCP", "A2A", "AppFunctions", "WebMCP", "Gemini Live"],
    status: "finished",
    date: "2026-08",
    image: "/images/projects/escudo-firmado.png",
    gallery: [
      {
        src: "/images/projects/escudo-poliza.png",
        caption: {
          es: "Escudo: vista móvil de póliza vehicular y flujo de reclamo asistido por agentes.",
          en: "Escudo: mobile auto insurance policy view and agent-assisted claim workflow.",
        },
      },
    ],
    repo: "https://github.com/ykro/escudo",
    demoUrl: "https://escudo-web-611681112050.us-central1.run.app/",
    links: [
      { label: "Repo Agentic SDLC Demo", url: "https://github.com/ykro/agentic-sdlc-demo" },
    ],
    team: ["adrian-catalan"],
  },
  {
    id: "encargo-agentic-commerce",
    name: "Encargo: compras con agentes de IA",
    nameEn: "Encargo: shopping with AI agents",
    category: "agents_llms",
    description: {
      es: "Un agente compara dos tiendas ficticias y prepara una compra según talla, presupuesto y fecha de entrega. La persona autoriza el pago con una passkey.",
      en: "An agent compares two fictional stores and prepares a purchase based on size, budget, and delivery date. A person authorizes payment with a passkey.",
    },
    longDescription: {
      es: "La demo compara una tienda que presenta información solo en imágenes con otra que publica datos legibles para agentes mediante schema.org y UCP. Un modo de control permite publicar los mismos datos en ambas y observar cómo cambia la decisión de compra. El pago requiere un mandato AP2 firmado por la persona.",
      en: "The demo compares a store that presents information only in images with another publishing agent-readable data through schema.org and UCP. A control mode exposes the same data in both stores to show how the purchase decision changes. Payment requires an AP2 mandate signed by the person.",
    },
    technologies: ["Agentes de IA", "schema.org", "UCP", "AP2", "WebAuthn Passkeys"],
    status: "finished",
    date: "2026-10",
    image: "/images/projects/encargo-confirmado.png",
    repo: "https://github.com/ykro/encargo",
    demoUrl: "https://encargo-app-611681112050.us-central1.run.app/",
    team: ["adrian-catalan"],
  },
  {
    id: "github-comic-heroes",
    name: "GitHub Comic Heroes",
    nameEn: "GitHub Comic Heroes",
    category: "nlp_generative",
    description: {
      es: "Convierte un perfil de GitHub en una carta de superhéroe. La IA genera el retrato, el alias y los superpoderes a partir del avatar y los repositorios públicos.",
      en: "Turns a GitHub profile into a superhero card. AI generates the portrait, alias, and superpowers from the avatar and public repositories.",
    },
    longDescription: {
      es: "La aplicación consulta el perfil y los repositorios principales de un usuario de GitHub. Vertex AI genera una ilustración de cómic y redacta los elementos de la carta en paralelo. El proyecto incluye una aplicación pública y un codelab para construirla con Google Antigravity.",
      en: "The app reads a GitHub user's profile and main repositories. Vertex AI generates a comic illustration and writes the card elements in parallel. The project includes a public application and a codelab for building it with Google Antigravity.",
    },
    technologies: ["Vertex AI", "Gemini", "GitHub API", "Google Antigravity", "Cloud Run"],
    status: "finished",
    date: "2026-10",
    image: "/images/projects/github-comic-heroes.png",
    repo: "https://github.com/ykro/agy-comic-heroes",
    demoUrl: "https://github-comic-cards-z63pqhhmxq-uc.a.run.app/",
    links: [
      { label: "Codelab interactivo", labelEn: "Interactive codelab", url: "https://agy-comic-heroes.web.app/" },
    ],
    team: ["adrian-catalan"],
  },
  {
    id: "cuotas",
    name: "Cuotas: comparación de ofertas de pago",
    nameEn: "Cuotas: comparing payment offers",
    category: "health_fintech",
    experimental: true,
    description: {
      es: "Experimento que lee una oferta comercial en foto o recibe montos manuales para comparar pagos, recargos y condiciones en Guatemala, Colombia y Panamá.",
      en: "An experiment that reads a commercial offer from a photo or accepts manual amounts to compare payments, additional charges, and terms in Guatemala, Colombia, and Panama.",
    },
    longDescription: {
      es: "La IA extrae los datos de una oferta y un motor determinista calcula el compromiso de pago. La aplicación muestra una referencia mensual con supuestos editables e identifica las condiciones que requieren confirmación. Incluye ejemplos para probar el flujo de lectura y comparación.",
      en: "AI extracts offer details and a deterministic engine calculates the payment commitment. The app shows a monthly reference with editable assumptions and identifies terms requiring confirmation. Examples let visitors try the reading and comparison workflow.",
    },
    technologies: ["Gemini", "TypeScript", "Análisis de ofertas", "Cálculo determinista"],
    status: "in_progress",
    date: "2026-11",
    repo: "https://github.com/ykro/cuotas-auditor",
    demoUrl: "https://cuotas-auditor-gt.web.app/",
    team: ["adrian-catalan"],
  },
  {
    id: "gemelo-running",
    name: "Gemelo Running: ritmo por kilómetro",
    nameEn: "Gemelo Running: a pace plan for every kilometer",
    category: "health_fintech",
    description: {
      es: "Planifica el ritmo de una carrera según la altimetría del recorrido, la altitud y el paso actual del corredor. Permite elegir una ruta o subir un archivo GPX.",
      en: "Plans race pace based on the route's elevation profile, altitude, and the runner's current pace. Visitors can choose a route or upload a GPX file.",
    },
    longDescription: {
      es: "El prototipo combina el recorrido de la carrera con el ritmo sostenible y la altitud habitual de entrenamiento para preparar un plan por kilómetro e hidratación. Ofrece rutas precargadas, carga de GPX e importación opcional del ritmo desde Strava.",
      en: "The prototype combines a race route with sustainable pace and usual training altitude to prepare a kilometer-by-kilometer pace and hydration plan. It offers preset routes, GPX uploads, and optional pace import from Strava.",
    },
    technologies: ["GPX", "Strava", "Análisis de altimetría", "Web"],
    status: "in_progress",
    date: "2026-11",
    demoUrl: "https://gemelo-running-gt.web.app/",
    team: ["adrian-catalan"],
  },
  {
    id: "donde-esta-mi-medicina",
    name: "Dónde está mi medicina",
    nameEn: "Where is my medicine",
    category: "health_fintech",
    description: {
      es: "Busca medicamentos y compara la disponibilidad y los precios reportados por farmacias y supermercados en Guatemala.",
      en: "Searches for medicines and compares availability and prices reported by pharmacies and supermarkets in Guatemala.",
    },
    longDescription: {
      es: "El prototipo reúne opciones de distintas cadenas y permite orientar la búsqueda por zona. La demo pública incluye búsquedas de ejemplo para explorar cómo se presentan la disponibilidad y los precios.",
      en: "The prototype brings together options from different chains and lets visitors narrow a search by area. The public demo includes example searches to explore how availability and prices are presented.",
    },
    technologies: ["Búsqueda", "Comparación de precios", "Web"],
    status: "in_progress",
    date: "2026-11",
    image: "/images/projects/donde-esta-mi-medicina.jpg",
    demoUrl: "https://medicina-gt.web.app/",
    team: ["adrian-catalan"],
  },
  {
    id: "fisiomarcha",
    name: "FisioMarcha: análisis visual de caminata",
    nameEn: "FisioMarcha: visual gait analysis",
    category: "vision_spatial",
    description: {
      es: "Prototipo para observar una caminata desde una foto o un video y explorar mediciones de rodilla, pelvis y tronco como apoyo durante una consulta.",
      en: "A prototype for observing gait from a photo or video and exploring knee, pelvis, and trunk measurements to support a consultation.",
    },
    longDescription: {
      es: "La aplicación revisa el encuadre antes de presentar las mediciones que puede obtener del material cargado. Incluye ejemplos ilustrativos para conocer el flujo y comparar las observaciones de movimiento.",
      en: "The app checks framing before presenting the measurements it can obtain from the uploaded material. Illustrative examples let visitors explore the workflow and compare movement observations.",
    },
    technologies: ["Visión por computadora", "Análisis de movimiento", "Web"],
    status: "in_progress",
    date: "2026-11",
    image: "/images/projects/fisiomarcha.jpg",
    demoUrl: "https://fisio-gait-gt.web.app/",
    team: ["adrian-catalan"],
  },
  {
    id: "trail-aid-recovery-pal",
    name: "Trail Aid y Recovery Pal: agentes para Android",
    nameEn: "Trail Aid and Recovery Pal: agents for Android",
    category: "health_fintech",
    description: {
      es: "Aplicaciones nativas Android con ADK for Kotlin y LiteRT-LM que ejecutan Gemma 4 E2B 100% offline en el teléfono para emergencias en montaña y acompañamiento post-operatorio.",
      en: "Native Android apps using ADK for Kotlin and LiteRT-LM running Gemma 4 E2B 100% offline on-device for mountain trail emergencies and post-operative recovery.",
    },
    longDescription: {
      es: "Explora arquitecturas de agentes híbridos en dispositivos móviles donde la conectividad no está garantizada. Utilizando Agent Development Kit (ADK) para Kotlin, LiteRT-LM con Gemma 4 E2B en GPU/NPU local y Firebase AI Logic cuando hay señal, permite triaje de primeros auxilios en senderismo de ultradistancia (Trail Aid) y seguimiento clínico en casa (Recovery Pal).",
      en: "Explores hybrid mobile agent architectures for zero-connectivity scenarios. Built with Agent Development Kit (ADK) for Kotlin, LiteRT-LM running Gemma 4 E2B on local mobile GPU/NPU, and Firebase AI Logic when online, powering ultra-trail first-aid triage (Trail Aid) and home recovery monitoring (Recovery Pal).",
    },
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "ADK for Kotlin",
      "LiteRT-LM (Gemma 4)",
      "Firebase AI Logic",
    ],
    status: "finished",
    date: "2026-08",
    image: "/images/projects/trail-aid-showcase.png",
    gallery: [
      {
        src: "/images/projects/trail-aid-prepare.png",
        caption: {
          es: "Trail Aid: preparación antes de salir a montaña con modelo Gemma 4 E2B descargado en el teléfono.",
          en: "Trail Aid: pre-hike preparation with Gemma 4 E2B downloaded on-device.",
        },
      },
      {
        src: "/images/projects/trail-aid-emergency.png",
        caption: {
          es: "Trail Aid: triaje de emergencia en montaña corriendo Gemma 4 E2B en modo avión.",
          en: "Trail Aid: mountain emergency triage running Gemma 4 E2B in airplane mode.",
        },
      },
      {
        src: "/images/projects/recovery-pal-today.png",
        caption: {
          es: "Recovery Pal: seguimiento post-operatorio diario con protocolos clínicos locales.",
          en: "Recovery Pal: daily post-operative check-in backed by local clinical protocols.",
        },
      },
      {
        src: "/images/projects/recovery-pal-wound.png",
        caption: {
          es: "Evaluación estructurada de signos de alerta y evolución de herida quirúrgica.",
          en: "Structured evaluation of warning signs and surgical wound progression.",
        },
      },
    ],
    repo: "https://github.com/ykro/trail-aid-demo",
    links: [
      { label: "Repo Trail Aid", url: "https://github.com/ykro/trail-aid-demo" },
      { label: "Repo Recovery Pal", url: "https://github.com/ykro/recovery-pal-demo" },
    ],
    team: ["adrian-catalan"],
  },
  {
    id: "pm-innovation-lab-ai",
    name: "Lab Tasks y PM Innovation Lab: gestión del laboratorio con IA",
    nameEn: "Lab Tasks and PM Innovation Lab: AI-assisted lab management",
    category: "agents_llms",
    description: {
      es: "Plataforma interna que convierte audios y mensajes de WhatsApp/Telegram en tareas con criterios de aceptación usando Gemini Flash, verificando entregas automáticamente contra commits de GitHub y Google Drive.",
      en: "Internal AI-First operations platform turning WhatsApp/Telegram voice notes into structured tasks with acceptance criteria via Gemini Flash, auto-verifying against GitHub commits and Google Drive.",
    },
    longDescription: {
      es: "El propio laboratorio opera sobre herramientas construidas en casa: un agente multimodal conectado a WhatsApp y Telegram (@innovationlab_tracker_bot) transcribe notas de voz de dirección, extrae tareas, asigna responsables y monitorea automáticamente los repositorios de GitHub y las carpetas de diseño en Google Drive para actualizar el tablero operativo en tiempo real.",
      en: "The Innovation Lab runs on its own homegrown AI infrastructure: a multimodal agent connected to WhatsApp and Telegram (@innovationlab_tracker_bot) transcribes voice notes, extracts tasks with acceptance criteria, assigns owners, and automatically audits GitHub repositories and Google Drive design folders.",
    },
    technologies: [
      "Next.js 16",
      "Vertex AI Gemini",
      "WhatsApp & Telegram API",
      "GitHub API",
      "Firestore",
    ],
    status: "finished",
    date: "2026-06",
    image: "/images/projects/pm-innovation-lab.png",
    demoUrl: "https://lab-web-768634351594.us-central1.run.app/portal",
    links: [
      { label: "Portal de Tareas (Lab Tasks)", labelEn: "Lab Tasks Portal", url: "https://lab-web-768634351594.us-central1.run.app/portal" },
      { label: "Tablero PM Innovation Lab", labelEn: "Innovation Lab project board", url: "https://pm-innovationlab.vercel.app" },
    ],
    team: ["adrian-catalan"],
  },

  // ============================================================================
  // GEMINI MULTIMODAL SPRINT & CLOUD RUN DEMOS (DEC 2025)
  // ============================================================================
  {
    id: "experimentos-gemini-cosmic-oracle",
    name: "Cosmic Oracle: de una servilleta a una aplicación",
    nameEn: "Cosmic Oracle: from a napkin sketch to an app",
    category: "nlp_generative",
    featured: true,
    description: {
      es: "Convierte un dibujo a mano alzada en una aplicación funcional usando IA multimodal para generar mockups, ilustraciones, cartas y código ejecutable.",
      en: "Turns a hand-drawn napkin sketch into a functional application using multimodal AI for mockups, illustrations, cards, and runnable code.",
    },
    longDescription: {
      es: "Pipeline completo de servilleta a aplicación: el usuario sube un boceto a mano alzada de una interfaz y Gemini produce el mockup digital, genera los activos visuales consistentes — iconos, ilustraciones, cartas frente/reverso — y ensambla la experiencia interactiva desplegada en Google Cloud Run.",
      en: "End-to-end napkin-to-app pipeline: upload a hand-drawn interface sketch and Gemini generates the digital mockup, produces consistent visual assets — icons, illustrations, front/back cards — and assembles the runnable web app on Google Cloud Run.",
    },
    technologies: ["Gemini Multimodal", "Cloud Run", "Generative UI", "TypeScript"],
    status: "finished",
    date: "2025-12",
    image: "/images/projects/cosmic-oracle-card.png",
    gallery: [
      { src: "/images/projects/cosmic-oracle-napkin.jpg", caption: { es: "Boceto original en una servilleta", en: "Original sketch on a napkin" } },
      { src: "/images/projects/cosmic-oracle-altar.png", caption: { es: "Pantalla del altar", en: "Altar screen" } },
      { src: "/images/projects/cosmic-oracle-prophecy.png", caption: { es: "Pantalla de la profecía", en: "Prophecy screen" } },
      { src: "/images/projects/cosmic-oracle-card-front.png", caption: { es: "Anverso de la carta", en: "Card front" } },
      { src: "/images/projects/cosmic-oracle-card-back.png", caption: { es: "Reverso de la carta", en: "Card back" } },
    ],
    repo: "https://github.com/ykro/cosmic-oracle",
    archivedDemoUrl: "https://cosmic-oracle-frontend-622959071640.us-central1.run.app/",
    team: ["adrian-catalan"],
  },
  {
    id: "experimentos-gemini-panel-one",
    name: "Panel One: cómics a partir de fotografías",
    nameEn: "Panel One: comics from photographs",
    category: "nlp_generative",
    description: {
      es: "Genera historias visuales maquetadas como panel de cómic a partir de secuencias de hasta ocho fotografías reales.",
      en: "Generates laid-out comic panel stories from sequences of up to eight real photographs.",
    },
    longDescription: {
      es: "Herramienta de narrativa visual que toma hasta ocho fotografías y las transforma en un panel de cómic coherente. Gemini analiza la continuidad visual entre imágenes, redacta los diálogos y produce el panel maquetado con globos de texto y tipografía de cómic.",
      en: "Visual storytelling tool that takes up to eight photos and turns them into a cohesive comic panel. Gemini analyzes visual continuity across frames, writes dialogue, and produces a laid-out comic page.",
    },
    technologies: ["Gemini Multimodal", "Cloud Run", "Visual Storytelling", "React"],
    status: "finished",
    date: "2025-12",
    image: "/images/projects/panel-one-comic.jpg",
    gallery: [
      { src: "/images/projects/panel-one-result.png", caption: { es: "Cómic generado a partir de fotografías", en: "Comic generated from photographs" } },
    ],
    repo: "https://github.com/ykro/panel-one",
    archivedDemoUrl: "https://panel-one-frontend-622959071640.us-central1.run.app/",
    team: ["adrian-catalan"],
  },
  {
    id: "experimentos-gemini-run-sight",
    name: "RunSight: telemetría para corredores",
    nameEn: "RunSight: telemetry for runners",
    category: "health_fintech",
    description: {
      es: "Analiza archivos FIT de relojes deportivos (potencia, cadencia, ritmo, frecuencia cardíaca) y entrega diagnóstico biomecánico y táctico con IA.",
      en: "Analyzes sports watch FIT files (power, cadence, pace, heart rate) to deliver AI-powered biomechanical and pacing diagnostics.",
    },
    longDescription: {
      es: "Aplicación de análisis estratégico para corredores de fondo y ultradistancia. El atleta sube el archivo binario FIT de su entrenamiento y el sistema correlaciona deriva cardíaca, cadencia, potencia y desnivel para generar recomendaciones específicas de pacing y recuperación.",
      en: "Strategic analytics app for distance and ultra-trail runners. Athletes upload binary FIT workout files and receive correlation analysis across cardiac drift, cadence, power, and elevation.",
    },
    technologies: ["FIT Telemetry", "Gemini", "Sports Analytics", "Cloud Run"],
    status: "finished",
    date: "2025-12",
    image: "/images/projects/runsight-dashboard.png",
    gallery: [
      { src: "/images/projects/runsight-demo.png", caption: { es: "Vista de la demostración de RunSight", en: "RunSight demo screen" } },
    ],
    repo: "https://github.com/ykro/run-sight",
    archivedDemoUrl: "https://runsight-web-622959071640.us-central1.run.app/",
    team: ["adrian-catalan"],
  },
  {
    id: "experimentos-gemini-run-or-done",
    name: "Run or Done: análisis del desgaste en calzado deportivo",
    nameEn: "Run or Done: analyzing wear on running shoes",
    category: "vision_spatial",
    description: {
      es: "Evalúa por visión artificial fotografías de suela, media suela y upper de tenis para correr y emite un dictamen de vida útil o reemplazo.",
      en: "Evaluates photos of running shoe soles, midsoles, and uppers using computer vision to issue a structured wear and replacement verdict.",
    },
    longDescription: {
      es: "Evaluador visual para prevención de lesiones en corredores. A partir de fotografías de la suela, media suela y capellada, detecta patrones de desgaste asimétrico, compresión de espuma y pérdida de soporte estructural, explicando el razonamiento por componente.",
      en: "Visual evaluator for runner injury prevention. From photos of the outsole, midsole, and upper, it detects asymmetric wear patterns, foam compression, and structural support loss with per-component reasoning.",
    },
    technologies: ["Computer Vision", "Gemini Multimodal", "Sports Biomechanics", "Cloud Run"],
    status: "finished",
    date: "2025-12",
    image: "/images/projects/run-or-done-report.png",
    gallery: [
      { src: "/images/projects/run-or-done-result.png", caption: { es: "Resultado del análisis de desgaste", en: "Wear analysis results" } },
    ],
    repo: "https://github.com/ykro/run-or-done",
    archivedDemoUrl: "https://run-or-done-622959071640.us-central1.run.app/",
    team: ["adrian-catalan"],
  },
  {
    id: "experimentos-gemini-tempo-lottery",
    name: "Tempo Lottery: juego de cartas de coincidencia rápida",
    nameEn: "Tempo Lottery: a fast-matching card game",
    category: "nlp_generative",
    description: {
      es: "Juego web interactivo de cartas basado en coincidencia rápida de símbolos y generación dinámica de partidas desplegado en Cloud Run.",
      en: "Fast-paced interactive card game based on symbol matching and dynamic round generation deployed on Cloud Run.",
    },
    longDescription: {
      es: "Juego de velocidad visual donde los jugadores emparejan símbolos bajo presión de tiempo para avanzar en el tablero. Combina generación de mazos e ilustraciones con lógica reactiva en el navegador.",
      en: "Visual speed game where players match symbols under time pressure to advance across the board, combining AI-generated card decks with reactive browser gameplay.",
    },
    technologies: ["Interactive Game", "Gemini", "Cloud Run", "Web Audio/UI"],
    status: "finished",
    date: "2025-12",
    image: "/images/projects/tempo-lottery.jpg",
    gallery: [
      { src: "/images/projects/tempo-lottery-screenshot.jpg", caption: { es: "Captura del tablero de juego", en: "Game board screenshot" } },
      { src: "/images/projects/tempo-lottery-gameplay.webp", caption: { es: "Partida de Tempo Lottery", en: "Tempo Lottery gameplay" } },
    ],
    repo: "https://github.com/ykro/tempo-lottery",
    archivedDemoUrl: "https://tempo-lottery-622959071640.us-central1.run.app/",
    team: ["adrian-catalan"],
  },
  {
    id: "experimentos-gemini-motion-manga",
    name: "Motion Manga: de un video a una secuencia de manga",
    nameEn: "Motion Manga: from a video to a manga sequence",
    category: "nlp_generative",
    description: {
      es: "Descompone videos cortos en keyframes, construye un guion narrativo y estiliza cada viñeta como una página de manga.",
      en: "Decomposes short videos into keyframes, builds a connecting narrative script, and stylizes each panel as a manga page.",
    },
    longDescription: {
      es: "Herramienta que toma un clip de video, selecciona automáticamente los fotogramas de mayor carga expresiva, genera la narrativa que los conecta y transforma la secuencia en una página maquetada de manga en blanco, negro y tramas.",
      en: "Pipeline that ingests a short video clip, selects expressive keyframes, generates connecting narrative dialogue, and renders a stylized Japanese manga page.",
    },
    technologies: ["Multimodal Video", "Gemini", "Image Generation", "TypeScript"],
    status: "finished",
    date: "2025-12",
    image: "/images/projects/motion-manga-comic.jpg",
    gallery: [
      { src: "/images/projects/motion-manga-example.png", caption: { es: "Secuencia de manga generada", en: "Generated manga sequence" } },
    ],
    repo: "https://github.com/ykro/motion-manga",
    team: ["adrian-catalan"],
  },

  // ============================================================================
  // HARDWARE, IOT, ROBOTICS & APPLIED PROTOTYPES (2025–2026)
  // ============================================================================
  {
    id: "comunicacion-obd2-con-vehiculo-mvp",
    name: "OBD-Connect y ELM327 Emulator: diagnóstico vehicular",
    nameEn: "OBD-Connect and ELM327 Emulator: vehicle diagnostics",
    category: "iot_hardware",
    description: {
      es: "Aplicación móvil en Kotlin para lectura de sensores ECU y códigos de falla DTC vía OBD-II, acompañada de un emulador ELM327 multi-ECU para pruebas.",
      en: "Kotlin mobile app for reading ECU sensors and DTC fault codes via OBD-II, paired with a multi-ECU ELM327 emulator for automated testing.",
    },
    longDescription: {
      es: "Desarrollado por Luis Cu (@cuprumbot) en el laboratorio. Se conecta al puerto OBD-II del vehículo mediante Bluetooth/WiFi para monitorear RPM, velocidad, temperatura y códigos de diagnóstico (DTC), e incluye un emulador de protocolo ELM327 en Python para simular distintos estados del motor sin requerir un vehículo físico.",
      en: "Built by Luis Cu (@cuprumbot) at the Lab. Connects to the vehicle's OBD-II port via Bluetooth/WiFi to monitor RPM, speed, coolant temperature, and DTC fault codes, backed by a Python ELM327 protocol emulator for multi-ECU simulation.",
    },
    technologies: ["Kotlin", "Android", "OBD-II / ELM327", "Python Emulator"],
    status: "finished",
    date: "2026-03",
    image: "/images/projects/comunicacion-obd2-con-vehiculo-mvp.png",
    repo: "https://github.com/cuprumbot/OBD-Connect",
    links: [
      { label: "Repo App Android (OBD-Connect)", labelEn: "Android repository (OBD-Connect)", url: "https://github.com/cuprumbot/OBD-Connect" },
      { label: "Repo Emulador ELM327", labelEn: "ELM327 emulator repository", url: "https://github.com/cuprumbot/ELM327-emulator" },
    ],
    team: ["luis-cu"],
  },
  {
    id: "brazo-mirobot",
    name: "Brazo robótico Mirobot: control desde el navegador",
    nameEn: "Mirobot arm: browser-based control",
    category: "physical_ai",
    description: {
      es: "Interfaz web en Flask y API de control cinemático para operar el brazo robótico industrial de 6 ejes Wlkata Mirobot en prácticas de mecatrónica.",
      en: "Flask web interface and kinematic control API for operating the 6-axis Wlkata Mirobot industrial robotic arm in mechatronics labs.",
    },
    longDescription: {
      es: "Plataforma educativa de robótica industrial que permite controlar desde el navegador las trayectorias, rutinas pick-and-place y cinemática inversa del brazo Wlkata Mirobot, facilitando prácticas de automatización para estudiantes e invitados.",
      en: "Educational industrial robotics platform enabling browser-based control of trajectories, pick-and-place routines, and inverse kinematics on the Wlkata Mirobot arm.",
    },
    technologies: ["Python", "Flask", "Robotics", "Mirobot 6-DOF", "Serial Control"],
    status: "finished",
    date: "2026-02",
    image: "/images/projects/brazo-recogedor.jpeg",
    gallery: [
      {
        src: "/images/projects/flask-arm-completo.png",
        caption: {
          es: "Esquema cinemático de los 6 ejes articulados del brazo Wlkata Mirobot en la interfaz Flask.",
          en: "Kinematic diagram of the 6 articulated joints on the Wlkata Mirobot arm in the Flask interface.",
        },
      },
    ],
    repo: "https://github.com/cuprumbot/flask-arm",
    team: ["luis-cu", "mario-cifuentes"],
  },
  {
    id: "chess-detection-cv",
    name: "Reconocimiento de partidas de ajedrez",
    nameEn: "Computer vision for chess games",
    category: "vision_spatial",
    description: {
      es: "Reconocimiento automático de piezas y estado de partidas de ajedrez mediante visión artificial.",
      en: "Automated chess piece and board-state recognition via computer vision.",
    },
    longDescription: {
      es: "Sistema en Python que procesa video e imágenes del tablero físico para identificar la posición de cada pieza y registrar jugadas automáticamente.",
      en: "Python computer vision system that processes physical chessboard images to identify piece positions and log moves automatically.",
    },
    technologies: ["Python", "OpenCV", "Computer Vision", "Chess"],
    status: "finished",
    date: "2025-08",
    image: "/images/projects/chess-detection-roboflow.jpg",
    repo: "https://github.com/cuprumbot/chess-detection",
    team: ["luis-cu", "emily-curin"],
  },
  {
    id: "hidroponia-iot",
    name: "Sistema embebido para hidroponía automatizada",
    nameEn: "Embedded system for automated hydroponics",
    category: "iot_hardware",
    description: {
      es: "Controlador electrónico en C++ con sensores de nivel de agua, humedad y caudal para automatizar cargas de 12V DC en cultivos hidropónicos.",
      en: "C++ embedded controller with water level, humidity, and flow sensors to automate 12V DC loads in hydroponic systems.",
    },
    longDescription: {
      es: "Desarrollado por Cathy Batres (@CatherineBatres). Integra un shield de potencia en PCB con certificación OSHWA (GT000011) para conmutar bombas y válvulas de 12V DC en función de lecturas continuas de nivel de agua, humedad y flujo, protegiendo el sistema contra trabajo en seco.",
      en: "Developed by Cathy Batres (@CatherineBatres). Integrates an OSHWA-certified (GT000011) power shield PCB to switch 12V DC pumps and valves based on continuous water level, humidity, and flow sensor readings.",
    },
    technologies: ["C++", "ESP32", "Custom PCB (Altium)", "OSHWA GT000011"],
    status: "finished",
    date: "2025-06",
    image: "/images/projects/hidroponia-iot.png",
    repo: "https://github.com/CatherineBatres/HIDROPONIA",
    links: [
      {
        label: "Certificación Open Source Hardware (GT000011)",
        labelEn: "Open Source Hardware Certification (GT000011)",
        url: "https://certification.oshwa.org/gt000011.html",
      },
    ],
    team: ["catherine-batres"],
  },
  {
    id: "mano-robotica",
    name: "Mano robótica articulada impresa en 3D",
    nameEn: "3D-printed articulated robotic hand",
    category: "physical_ai",
    description: {
      es: "Rediseño y reconstrucción de prótesis y mano robótica funcional de cinco dedos accionados por servomotores y tendones de nylon.",
      en: "Redesign and rebuild of a functional five-fingered robotic hand actuated by servomotors and nylon tendons.",
    },
    longDescription: {
      es: "Rediseño mecánico y electrónico de una mano robótica impresa en 3D en el laboratorio. Cinco dedos articulados traccionados por servomotores permiten ejecutar agarres de precisión para demostraciones de biónica y mecatrónica.",
      en: "Mechanical and electronic redesign of a 3D-printed robotic hand at the Lab, featuring five articulated fingers driven by servomotors for bionic and mechatronic demonstrations.",
    },
    technologies: ["Robotics", "3D Printing", "Mechatronics", "Servomotors"],
    status: "finished",
    date: "2025-09",
    image: "/images/projects/mano-robotica.jpeg",
    team: ["mario-cifuentes", "gerardo-vazquez", "ivan-rojas"],
  },
  {
    id: "cartel-luz",
    name: "Cartel Luz: matriz de luces interactiva para colegios",
    nameEn: "Cartel Luz: interactive light matrix for schools",
    category: "iot_hardware",
    description: {
      es: "Dispositivo interactivo con ESP8266, matriz de LEDs NeoPixel y mini-juego integrado para activaciones STEM en visitas a colegios.",
      en: "Interactive gadget with ESP8266, NeoPixel LED matrix, and built-in mini-game for STEM school outreach activations.",
    },
    longDescription: {
      es: "Cartel luminoso interactivo diseñado por la célula Maker como herramienta de acercamiento en visitas a colegios. Un ESP8266 controla una matriz de LEDs NeoPixel que ejecuta animaciones y un mini-juego físico para introducir electrónica y programación.",
      en: "Interactive light sign built by the Maker cell for high school outreach visits. An ESP8266 drives a NeoPixel LED matrix displaying animations and a playable mini-game.",
    },
    technologies: ["ESP8266", "NeoPixel", "IoT", "STEM Outreach"],
    status: "finished",
    date: "2026-01",
    image: "/images/projects/cartel-luz.jpeg",
    team: ["luis-galicia", "mario-cifuentes", "raul-jolon"],
  },
  {
    id: "control-brazo-robotico-negro",
    name: "Tarjeta ESP32 para un brazo robótico de seis ejes",
    nameEn: "ESP32 board for a six-axis robotic arm",
    category: "physical_ai",
    description: {
      es: "Tarjeta electrónica diseñada en el laboratorio (PCB propia con MCU ESP32) para control WiFi, calibración y modo enseñanza de un brazo robótico.",
      en: "Lab-designed custom ESP32 PCB controller board providing WiFi trajectory control, auto-calibration, and teach-mode recording for a 6-DOF robotic arm.",
    },
    longDescription: {
      es: "Diseño electrónico propio en PCB con microcontrolador ESP32 para comandar un brazo robótico de seis grados de libertad. Expone interfaz WiFi para ejecutar trayectorias y modo de enseñanza donde el operador guía el brazo manualmente y la tarjeta graba la secuencia.",
      en: "Custom-designed ESP32 PCB controller board for a 6-DOF robotic arm, exposing a WiFi API for trajectory execution and manual teach-and-replay recording.",
    },
    technologies: ["Custom PCB", "ESP32", "Robotics", "Embedded C++"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/control-brazo-robotico-negro.png",
    team: ["mario-cifuentes", "gerardo-vazquez"],
  },
  {
    id: "gearbox",
    name: "Gearbox: caja de cambios impresa en 3D",
    nameEn: "Gearbox: 3D-printed transmission",
    category: "iot_hardware",
    description: {
      es: "Diseño CAD y manufactura aditiva de una caja de transmisión mecánica para aplicaciones didácticas y de robótica ligera.",
      en: "CAD design and additive manufacturing of a mechanical gearbox for robotics and engineering instruction.",
    },
    longDescription: {
      es: "Modelado CAD y fabricación de una caja de cambios funcional combinando piezas impresas en 3D y rodamientos estándar para demostrar principios de reducción mecánica, torque y transmisión en mecatrónica.",
      en: "CAD modeling and 3D fabrication of a functional mechanical gearbox combining printed gears and standard bearings to demonstrate torque reduction and transmission principles.",
    },
    technologies: ["CAD", "3D Printing", "Mechanics", "Mechatronics"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/palanca-cambios.jpeg",
    team: ["ivan-rojas", "gerardo-vazquez"],
  },
  {
    id: "mini-bots",
    name: "Mini Bots: robots compactos autónomos",
    nameEn: "Mini Bots: compact autonomous robots",
    category: "physical_ai",
    description: {
      es: "Serie de robots compactos e interactivos con navegación autónoma por ultrasonido, seguimiento de línea y sensores infrarrojos.",
      en: "Series of compact interactive robots featuring ultrasonic obstacle avoidance, line following, and IR sensing.",
    },
    longDescription: {
      es: "Plataforma educativa compuesta por múltiples robots compactos donde cada unidad resuelve un reto clásico de locomoción y sensado: evasión por ultrasonido, seguimiento de línea o triangulación infrarroja.",
      en: "Educational fleet of compact robots where each unit tackles a distinct locomotion and sensing challenge: ultrasonic avoidance, line-following, or IR triangulation.",
    },
    technologies: ["Robotics", "Sensors", "Mechatronics", "Microcontrollers"],
    status: "finished",
    date: "2026-01",
    image: "/images/projects/mini-bots.png",
    team: ["luis-galicia", "mario-cifuentes", "ivan-rojas"],
  },
  {
    id: "ar-para-colocacion-de-muebles",
    name: "Colocación de muebles en realidad aumentada",
    nameEn: "Furniture placement in augmented reality",
    category: "vision_spatial",
    description: {
      es: "Aplicación móvil de realidad aumentada (ARCore/ARKit) para proyectar modelos 3D a escala real con detección de planos y sombras dinámicas.",
      en: "Mobile augmented reality application (ARCore/ARKit) projecting true-scale 3D furniture models with plane detection and dynamic shadows.",
    },
    longDescription: {
      es: "Permite visualizar objetos tridimensionales en espacios físicos reales antes de fabricarlos o adquirirlos, detectando piso, paredes e iluminación ambiental para anclar los modelos con escala precisa.",
      en: "Visualizes 3D objects in physical spaces prior to fabrication or purchase, detecting floors, walls, and ambient lighting for accurate spatial anchoring.",
    },
    technologies: ["ARCore / ARKit", "3D Visualization", "Mobile", "Spatial Computing"],
    status: "finished",
    date: "2026-02",
    image: "/images/projects/ar-para-colocacion-de-muebles.png",
    team: ["steven-marroquin"],
  },
  {
    id: "educador-personal",
    name: "Educador Personal: tutor adaptativo con IA",
    nameEn: "Educador Personal: adaptive AI tutor",
    category: "agents_llms",
    description: {
      es: "Orquestación de agentes de IA que diagnostica el estilo de aprendizaje del estudiante y adapta las explicaciones y ejercicios en tiempo real.",
      en: "Multi-agent AI system that identifies a student's learning style and adapts explanations and exercises in real time.",
    },
    longDescription: {
      es: "Sistema multi-agente donde cada agente especializado representa una estrategia pedagógica (visual, analítica, verbal, práctica) y ajusta dinámicamente la presentación de conceptos complejos de ingeniería.",
      en: "Multi-agent educational platform where specialized pedagogical agents dynamically adapt engineering concepts to visual, analytical, or hands-on learners.",
    },
    technologies: ["Multi-Agent AI", "EdTech", "LLMs", "Software"],
    status: "finished",
    date: "2025-12",
    image: "/images/projects/educador-personal.png",
    team: ["eduardo-tobar", "christian-martinez"],
  },
  {
    id: "totito",
    name: "Totito con visión por computadora",
    nameEn: "Tic-tac-toe with computer vision",
    category: "vision_spatial",
    description: {
      es: "Tablero físico de tres en raya con cámara cenital donde un agente de IA interpreta las jugadas físicas y responde en tiempo real.",
      en: "Physical tic-tac-toe board with overhead camera where an AI agent interprets physical moves and responds in real time.",
    },
    longDescription: {
      es: "Explora interfaces tangibles: una cámara superior observa el tablero físico, reconoce por visión artificial las piezas colocadas por el jugador humano y el agente de IA responde conversando y anunciando su contrajugada.",
      en: "Explores tangible interfaces: an overhead camera observes the physical board, recognizes human moves via computer vision, and the AI agent responds in real time.",
    },
    technologies: ["Computer Vision", "Tangible UI", "AI Agent", "Hardware"],
    status: "in_progress",
    date: "2026-02",
    image: "/images/projects/totito.png",
    team: ["raul-jolon", "luis-galicia"],
  },
  {
    id: "boton-iot",
    name: "Botón IoT para registrar y resumir ideas con IA",
    nameEn: "IoT button for capturing and summarizing ideas with AI",
    category: "iot_hardware",
    description: {
      es: "Dispositivo físico de un solo clic que graba notas de voz, transcribe y estructura resúmenes automáticos con IA hacia el flujo de trabajo del usuario.",
      en: "Single-click physical hardware button that records voice notes, transcribes, and dispatches structured AI summaries.",
    },
    longDescription: {
      es: "Hardware discreto pensado para capturar ideas sin fricción durante trabajo de laboratorio: un clic inicia la captura de audio, transcribe el contenido y un modelo de lenguaje extrae tareas y puntos clave.",
      en: "Frictionless physical capture device for lab work: a single press records voice, transcribes speech, and extracts structured action items via LLM.",
    },
    technologies: ["ESP32", "IoT", "Speech-to-Text", "AI Summarization"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/boton-iot.png",
    team: ["raul-jolon", "mario-cifuentes"],
  },
  {
    id: "monitor-de-ocupacion-de-escritorio",
    name: "Monitor de ocupación sin cámaras",
    nameEn: "Camera-free occupancy monitor",
    category: "iot_hardware",
    description: {
      es: "Detecta si una estación de trabajo está ocupada combinando sensores PIR y capacitivos, preservando el 100% de la privacidad visual.",
      en: "Detects workstation occupancy by fusing PIR and capacitive sensors while preserving 100% visual privacy.",
    },
    longDescription: {
      es: "Fusión de sensores no intrusivos (movimiento PIR, presencia capacitiva y actividad) para generar telemetría de ocupación de espacios de laboratorio sin utilizar cámaras ni micrófonos.",
      en: "Non-intrusive sensor fusion (PIR motion and capacitive sensing) generating lab space occupancy telemetry without cameras or microphones.",
    },
    technologies: ["IoT Sensors", "Privacy-By-Design", "ESP32", "Telemetry"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/monitor-de-ocupacion-de-escritorio.png",
    team: ["emily-curin", "raul-jolon"],
  },
  {
    id: "proyecto-camaleon",
    name: "Proyecto Camaleón: detección y reproducción de colores",
    nameEn: "Chameleon Project: color detection and reproduction",
    category: "iot_hardware",
    description: {
      es: "Prototipo IoT con sensor espectral TCS34725 capaz de muestrear el color de superficies físicas y replicarlo en matrices LED.",
      en: "IoT prototype with a TCS34725 spectral sensor that samples physical surface colors and replicates them on LED arrays.",
    },
    longDescription: {
      es: "Explora superficies adaptativas: un sensor óptico TCS34725 mide las componentes RGB e iluminación de cualquier objeto cercano y calibra en tiempo real la respuesta lumínica del dispositivo.",
      en: "Explores adaptive surfaces: a TCS34725 optical sensor measures RGB and illuminance values from nearby objects and calibrates LED output in real time.",
    },
    technologies: ["TCS34725 Sensor", "IoT", "Hardware", "Optoelectronics"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/proyecto-camaleon.png",
    team: ["raul-jolon"],
  },
  {
    id: "alerta-de-planta-seca",
    name: "Monitor de humedad para plantas",
    nameEn: "Plant moisture monitor",
    category: "iot_hardware",
    description: {
      es: "Monitoreo multicanal de humedad de suelo vía ESP32 que notifica por Telegram cuando una planta requiere riego.",
      en: "Multi-channel soil moisture telemetry via ESP32 that dispatches Telegram alerts when plants need watering.",
    },
    longDescription: {
      es: "Sensores capacitivos conectados a un ESP32 con multiplexor reportan curvas de humedad cada hora a un bot de Telegram, enviando alertas preventivas personalizadas por especie.",
      en: "Capacitive moisture sensors multiplexed into an ESP32 report hourly soil telemetry to a Telegram bot with per-plant thresholds.",
    },
    technologies: ["ESP32", "Capacitive Sensors", "Telegram Bot API", "IoT"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/alerta-de-planta-seca.png",
    team: ["emily-curin"],
  },
  {
    id: "prototipo-auditor-de-codigo",
    name: "Agente para auditar código y escribir documentación",
    nameEn: "Agent for auditing code and writing documentation",
    category: "agents_llms",
    description: {
      es: "Sistema agéntico que inspecciona repositorios, detecta vulnerabilidades o deuda técnica y genera documentación explicativa.",
      en: "Agentic system that inspects repositories, detects vulnerabilities and technical debt, and generates explanatory documentation.",
    },
    technologies: ["AI Agents", "Static Analysis", "GitHub", "Security"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/prototipo-auditor-de-codigo.png",
    team: ["eduardo-tobar", "christian-martinez"],
  },
  {
    id: "prototipo-scout-de-mercado",
    name: "Agente para comparar precios",
    nameEn: "Price comparison agent",
    category: "agents_llms",
    description: {
      es: "Agente con generación aumentada por recuperación (RAG) para localizar productos locales optimizando presupuesto y cercanía.",
      en: "Retrieval-Augmented Generation (RAG) agent for finding local products optimized by budget and proximity.",
    },
    technologies: ["RAG", "AI Agents", "E-Commerce", "Search"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/prototipo-scout-de-mercado.png",
    team: ["christian-martinez"],
  },
  {
    id: "fork-it",
    name: "Fork It: simulador de decisiones con IA",
    nameEn: "Fork It: AI decision simulator",
    category: "agents_llms",
    description: {
      es: "Plataforma interactiva de árboles de decisión donde agentes de IA proyectan consecuencias de corto y mediano plazo para cada alternativa.",
      en: "Interactive decision-tree platform where AI agents project short- and medium-term consequences across branching choices.",
    },
    technologies: ["Decision Trees", "AI Agents", "Reasoning", "Web App"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/fork-it.png",
    team: ["daniel-salguero"],
  },
  {
    id: "sentiment-analysis-y-futbol",
    name: "Análisis de sentimiento en el fútbol guatemalteco",
    nameEn: "Sentiment analysis in Guatemalan football",
    category: "nlp_generative",
    description: {
      es: "Pipeline NLP que clasifica polaridad emocional y extrae temas dominantes en conversaciones digitales sobre fútbol guatemalteco.",
      en: "NLP pipeline classifying emotional polarity and extracting dominant topics across digital conversations on Guatemalan football.",
    },
    technologies: ["NLP", "Sentiment Analysis", "Data Analytics", "Python"],
    status: "in_progress",
    date: "2026-01",
    image: "/images/projects/sentiment-analysis-y-futbol.png",
    team: ["yoselin-mejia"],
  },

  // ============================================================================
  // HISTORICAL ARCHIVE (2012–2018 PIONEERING PROJECTS)
  // ============================================================================
  {
    id: "pictance",
    name: "Pictance: reconocimiento de puntos faciales",
    nameEn: "Pictance: facial landmark detection",
    category: "vision_spatial",
    description: {
      es: "Exploración pionera (2018) de detección de rasgos faciales en la web mediante redes neuronales profundas.",
      en: "Early 2018 exploration of web-based facial landmark detection powered by deep neural networks.",
    },
    longDescription: {
      es: "Aplicación web desarrollada en 2018 que procesaba fotografías del usuario mediante redes neuronales para localizar rasgos faciales clave antes de la masificación de las APIs modernas de visión.",
      en: "Web application built in 2018 that processed user photographs with neural networks to locate facial landmarks prior to mainstream cloud vision APIs.",
    },
    technologies: ["Neural Networks", "Web App", "Computer Vision"],
    status: "archived",
    date: "2018-08",
    image: "/images/projects/pictance.png",
    team: ["adrian-catalan"],
  },
  {
    id: "kotlinbots-hexapod",
    name: "Kotlinbots Hexapod: robot de seis patas",
    nameEn: "Kotlinbots Hexapod: six-legged robot",
    category: "physical_ai",
    description: {
      es: "Robot hexápodo articulado sobre Raspberry Pi ejecutando Android Things en Kotlin, con visión por computadora y control vía Firebase.",
      en: "Six-legged articulated hexapod robot on Raspberry Pi running Android Things in Kotlin, with computer vision and Firebase control.",
    },
    longDescription: {
      es: "Hexápodo ensamblado sobre Raspberry Pi corriendo Android Things. Cada pata era coordinada por servomotores mientras una cámara integrada y Firebase Realtime Database permitían reconocimiento de objetos y mando remoto desde Android.",
      en: "Hexapod assembled on a Raspberry Pi running Android Things, coordinating 6 servo-driven legs with onboard vision and Firebase remote command.",
    },
    technologies: ["Android Things", "Kotlin", "Raspberry Pi", "Firebase"],
    status: "archived",
    date: "2018-07",
    image: "/images/projects/hexapod1.jpg",
    team: ["adrian-catalan"],
  },
  {
    id: "tango",
    name: "Proyecto Google Tango: realidad mixta y detección de profundidad",
    nameEn: "Google Tango Project: mixed reality and depth sensing",
    category: "vision_spatial",
    description: {
      es: "Prototipo de mapeo espacial 3D y realidad aumentada/virtual combinando hardware Google Tango con Unity.",
      en: "3D spatial mapping and mixed-reality prototype combining Google Tango depth-sensing hardware with Unity.",
    },
    technologies: ["Google Tango", "Unity", "AR/VR", "Depth Sensing"],
    status: "archived",
    date: "2017-06",
    image: "/images/projects/tango-ar.png",
    team: ["adrian-catalan"],
  },
  {
    id: "tjbot",
    name: "TJBot: robot social impreso en 3D",
    nameEn: "TJBot: 3D-printed social robot",
    category: "physical_ai",
    description: {
      es: "Robot de escritorio impreso en 3D sobre Raspberry Pi que conversaba, analizaba tono emocional y accionaba servomotores e iluminación RGB.",
      en: "3D-printed desktop robot on Raspberry Pi that conversed, analyzed emotional tone, and actuated servos and RGB lighting.",
    },
    technologies: ["Raspberry Pi", "3D Printing", "Voice AI", "IoT"],
    status: "archived",
    date: "2017-06",
    image: "/images/projects/tjbot.jpg",
    team: ["adrian-catalan"],
  },
  {
    id: "ilstyle",
    name: "ILStyle: transferencia de estilo neural en móvil",
    nameEn: "ILStyle: neural style transfer on mobile",
    category: "nlp_generative",
    description: {
      es: "Aplicación en React Native y TensorFlow que transfería el trazo pictórico de obras de arte clásicas a fotografías tomadas desde el teléfono.",
      en: "React Native and TensorFlow mobile app applying artistic neural style transfer to smartphone photos.",
    },
    technologies: ["TensorFlow", "React Native", "NodeJS", "Firebase"],
    status: "archived",
    date: "2017-06",
    image: "/images/projects/ilstyle.png",
    team: ["adrian-catalan"],
  },
  {
    id: "ilvision",
    name: "ILVision: anotación facial con Cloud Vision",
    nameEn: "ILVision: facial annotation with Cloud Vision",
    category: "vision_spatial",
    description: {
      es: "Demostración interactiva de reconocimiento de geometría facial en tiempo real con React Native y Google Cloud Vision.",
      en: "Interactive real-time facial geometry detection demo built with React Native and Google Cloud Vision.",
    },
    technologies: ["Google Cloud Vision", "NodeJS", "React Native"],
    status: "archived",
    date: "2017-03",
    image: "/images/projects/ilvision-pose.png",
    team: ["adrian-catalan"],
  },
  {
    id: "ildrone",
    name: "ILDrone: dron controlado por gestos",
    nameEn: "ILDrone: gesture-controlled drone",
    category: "physical_ai",
    description: {
      es: "Guante instrumentado con Intel Edison y sensores inerciales para pilotar un Parrot AR.Drone 2.0 mediante gestos de la mano.",
      en: "Intel Edison instrumented gauntlet with inertial sensors for piloting a Parrot AR.Drone 2.0 via hand gestures.",
    },
    technologies: ["Intel Edison", "AR.Drone 2.0", "NodeJS", "Johnny-Five"],
    status: "archived",
    date: "2016-10",
    image: "/images/projects/ildrone1.jpg",
    team: ["adrian-catalan"],
  },
  {
    id: "obdled",
    name: "OBDled: indicador de revoluciones por OBD-II",
    nameEn: "OBDled: OBD-II engine speed display",
    category: "iot_hardware",
    description: {
      es: "Sistema con Arduino conectado al puerto OBD-II del automóvil que modulaba tiras y matrices LED según las revoluciones por minuto (RPM) en tiempo real.",
      en: "Arduino system connected to a car's OBD-II port modulating LED strips and matrices according to real-time engine RPM.",
    },
    technologies: ["Arduino", "OBD-II", "Automotive IoT", "C++"],
    status: "archived",
    date: "2016-06",
    image: "/images/projects/obd1.jpg",
    repo: "https://github.com/cuprumbot/OBDled",
    team: ["adrian-catalan", "luis-cu"],
  },
  {
    id: "leonardo-greenmoov",
    name: "Leonardo GreenMoov: robot humanoide de telepresencia",
    nameEn: "Leonardo GreenMoov: humanoid telepresence robot",
    category: "physical_ai",
    description: {
      es: "Robot humanoide tamaño real basado en InMoov, impreso en 3D en el laboratorio y teleoperado con realidad virtual (Oculus Rift DK2) y seguimiento de manos Leap Motion.",
      en: "Life-size 3D-printed humanoid telepresence robot based on InMoov, controlled via Oculus Rift DK2 virtual reality and Leap Motion hand tracking.",
    },
    technologies: ["InMoov 3D Printing", "Oculus Rift DK2", "Leap Motion", "Humanoid Robotics"],
    status: "archived",
    date: "2015-12",
    image: "/images/projects/leonardo1.jpg",
    team: ["adrian-catalan"],
  },
];
