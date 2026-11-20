export type LocalizedText = {
  es: string;
  en: string;
};

export type PolicyTabId = "lab" | "sistemas" | "pdds" | "peit";

export interface PolicyPillar {
  number: string;
  title: LocalizedText;
  summary: LocalizedText;
  detail: LocalizedText;
}

export interface PolicyLevel {
  id: "l1" | "l2" | "l3" | "l4";
  tag: LocalizedText;
  title: LocalizedText;
  quote: LocalizedText;
  note: LocalizedText;
}

export interface PolicyActivity {
  activity: LocalizedText;
  levelId: "l1" | "l2" | "l3" | "l4";
  levelBadge: LocalizedText;
  application: LocalizedText;
}

export interface PolicyTrack {
  id: PolicyTabId;
  tabLabel: LocalizedText;
  title: LocalizedText;
  byline: LocalizedText;
  pdfHref: string;
  protocolHeading: LocalizedText;
  protocolParagraphs: LocalizedText[];
  activities: PolicyActivity[];
  tableHeaders: {
    activity: LocalizedText;
    level: LocalizedText;
    application: LocalizedText;
  };
  readmeIntro: LocalizedText;
  readmeTemplate: LocalizedText;
}

export const MIT_REPORT_URL = "https://aiandeducation.mit.edu/report/";
export const MIT_ADDENDUM_PDF = "/politicas/addendum-niveles-mit.pdf";

export const aiPolicyCopy = {
  homeTitle: {
    es: "Políticas de Uso de Inteligencia Artificial",
    en: "Artificial Intelligence Usage Policies",
  },
  homeIntro: {
    es: "Trabajamos con un enfoque AI-Native donde la inteligencia artificial acelera la construcción, pero cada persona responde por todo lo que entrega y demuestra. Reunimos aquí las cuatro políticas vigentes —para el Innovation Lab, los cursos de Ingeniería de Sistemas, PDDS y PEIT— junto con sus resúmenes en PDF de una página.",
    en: "We work with an AI-Native mindset where artificial intelligence accelerates what we build, while every person owns what they deliver and defend. This section brings together all four active policies —Innovation Lab, Systems Engineering courses, PDDS, and PEIT— along with their one-page PDF summaries.",
  },
  homeCta: {
    es: "Ver las 4 políticas completas",
    en: "View all 4 complete policies",
  },
  homeBottomNote: {
    es: "Abre directo la pestaña que necesites o descarga su resumen de 1 página en PDF junto con el addendum de los niveles de MIT.",
    en: "Jump straight to the policy tab you need or download its one-page PDF summary alongside the MIT levels addendum.",
  },
  pageHeading: {
    es: "Políticas de Uso Responsable de Inteligencia Artificial",
    en: "Responsible AI Usage Policies",
  },
  pageByline: {
    es: "Adrián Catalán · Noviembre 2026",
    en: "Adrián Catalán · November 2026",
  },
  tabsAriaLabel: {
    es: "Seleccionar política por ámbito",
    en: "Select policy by scope",
  },
  downloadPdfButton: {
    es: "Descargar resumen PDF (1 página)",
    en: "Download 1-page PDF summary",
  },
  downloadAddendumButton: {
    es: "Addendum niveles MIT (PDF)",
    en: "MIT levels addendum (PDF)",
  },
  copyButton: {
    es: "Copiar plantilla",
    en: "Copy template",
  },
  copiedButton: {
    es: "Copiada",
    en: "Copied",
  },
  pillarsHeading: {
    es: "Cinco pilares fundamentales",
    en: "Five fundamental pillars",
  },
  mitHeading: {
    es: "Los cuatro niveles del Comité Ad Hoc de MIT (2026)",
    en: "MIT Ad Hoc Committee's four levels (2026)",
  },
  mitIntro: {
    es: "En agosto de 2026 el Comité Ad Hoc de MIT sobre el uso de IA en educación propuso un menú de cuatro niveles para que cada actividad declare qué está permitido y cuál es el propósito formativo detrás de esa decisión. Descartamos detectores automáticos de IA por sus falsos positivos frecuentes y validamos el dominio revisando el historial en Git y defendiendo el trabajo en persona.",
    en: "In August 2026 MIT's Ad Hoc Committee on AI Use in Education proposed four clear levels so every activity states what is permitted and why. We reject automated AI detectors due to frequent false positives and validate mastery through Git history review and in-person oral defenses.",
  },
  mitReferenceLabel: {
    es: "Referencia — Report of MIT's Ad Hoc Committee on AI Use in Teaching, Learning, and Research Training (13 de agosto de 2026)",
    en: "Reference — Report of MIT's Ad Hoc Committee on AI Use in Teaching, Learning, and Research Training (August 13, 2026)",
  },
};

export const aiPolicyPillars: PolicyPillar[] = [
  {
    number: "01",
    title: { es: "Responsabilidad humana", en: "Human accountability" },
    summary: {
      es: "Quien entrega el proyecto responde académica, técnica y profesionalmente por cada decisión y línea de código.",
      en: "Whoever delivers the project owns every architectural decision and line of code.",
    },
    detail: {
      es: "El autor del trabajo entregado es el único responsable legal, académico y profesional del producto final. La IA apoya en el camino, pero carece de autoría y de criterio ético. Al final del día, quien entrega el trabajo da la cara por cada decisión, cada arquitectura y cada línea de código.",
      en: "The author of the delivered work holds sole legal, academic, and professional responsibility for the final product. AI assists along the way, yet carries neither authorship nor ethical judgment. Every decision, architecture, and line of code remains human-owned.",
    },
  },
  {
    number: "02",
    title: { es: "Verificación obligatoria", en: "Mandatory verification" },
    summary: {
      es: "Contrasta salidas con documentación oficial, valida paquetes contra slopsquatting y evita métodos deprecated.",
      en: "Cross-check outputs with official docs, validate packages against slopsquatting, and avoid deprecated APIs.",
    },
    detail: {
      es: "Todo resultado técnico o teórico se contrasta con la documentación oficial. Si el modelo alucina un dato o un método y el autor lo acepta sin validar, el error es del autor. Esto incluye comprobar que las librerías o paquetes sugeridos existan en registros oficiales como npm, PyPI o Maven para evitar ataques por paquetes alucinados (slopsquatting), cuidar que el código evite prácticas deprecated y verificar licencias cuando se usan datasets o modelos con fines comerciales.",
      en: "Every technical or theoretical output is checked against official documentation. Accepting a hallucinated method or dependency makes the error the author's responsibility. Always verify suggested libraries in official registries such as npm, PyPI, or Maven to prevent slopsquatting, avoid deprecated practices, and audit licenses for datasets and models.",
    },
  },
  {
    number: "03",
    title: { es: "Uso proporcionado", en: "Proportional use" },
    summary: {
      es: "Reserva agentes y modelos grandes para arquitectura o depuración difícil; lee directo la documentación en dudas triviales.",
      en: "Reserve frontier agents for complex architecture and debugging; check official docs directly for simple lookups.",
    },
    detail: {
      es: "Vale la pena usar la IA con intención. Los modelos grandes y los agentes de razonamiento brillan al resolver problemas complejos, diseñar arquitectura o destrabar una depuración difícil. Para tareas triviales que se resuelven leyendo dos minutos la documentación oficial, resulta mucho más limpio ir directo a la fuente y ahorrar cómputo y energía.",
      en: "Use AI with intent. Frontier models and reasoning agents excel on complex architecture, system design, and tough debugging. For trivial lookups answered in two minutes in official docs, go straight to the source and save compute and energy.",
    },
  },
  {
    number: "04",
    title: { es: "Privacidad y anonimización", en: "Privacy & anonymization" },
    summary: {
      es: "Cero datos personales, clínicos o código privado en prompts externos; anonimiza bitácoras o usa modelos locales.",
      en: "Zero personal, clinical, or proprietary data in external prompts; anonymize logs or run local open-weight models.",
    },
    detail: {
      es: "Está prohibido meter datos personales, financieros, clínicos o información confidencial de la institución, empleadores o clientes dentro de los prompts enviados a un servicio externo. Antes de enviar bitácoras, transcripciones o capturas de sesiones con usuarios hacia el API en la nube, todo pasa por anonimización estricta o se sustituye por datos sintéticos; y si el proyecto exige procesar información sensible autorizada, se ejecuta en modelos locales de pesos abiertos sobre infraestructura controlada.",
      en: "Never paste personal, financial, clinical, or confidential employer/client data into external prompts. Any log, transcript, or screenshot from user sessions is strictly anonymized or replaced with synthetic data before calling a cloud API; authorized sensitive workloads run on local open-weight models under controlled infrastructure.",
    },
  },
  {
    number: "05",
    title: { es: "Credenciales e historial en Git", en: "Credentials & Git history" },
    summary: {
      es: "Variables de entorno y .gitignore siempre; si una API key se filtra, rótala de inmediato y limpia el historial.",
      en: "Use environment variables and .gitignore; if an API key leaks, rotate it immediately and clean Git history.",
    },
    detail: {
      es: "Bajo ninguna circunstancia se pegan API keys, tokens de acceso, certificados o contraseñas en herramientas de IA ni se suben al repositorio. El manejo se hace siempre por variables de entorno fuera del control de versiones, respaldado por un archivo .gitignore bien configurado y plantillas .env.example limpias. Borrar un archivo en un commit posterior deja el secreto vivo en el historial de Git. Si una credencial se filtra, el autor debe rotarla y revocarla de inmediato en el proveedor y limpiar el historial de commits.",
      en: "Never paste API keys, access tokens, certificates, or passwords into AI tools or commit them to Git. Manage secrets through environment variables excluded via .gitignore alongside clean .env.example templates. Deleting a file in a later commit leaves the secret alive in Git history; any exposed credential must be rotated immediately and purged from commit history.",
    },
  },
];

export const aiPolicyLevels: PolicyLevel[] = [
  {
    id: "l1",
    tag: { es: "Nivel 1 · Uso libre", en: "Level 1 · Unrestricted use" },
    title: { es: "Uso libre con trazabilidad", en: "Open use with traceability" },
    quote: {
      es: "«Se puede utilizar cualquier sistema de IA generativa para cualquier propósito en las entregas de esta categoría.»",
      en: "“Any generative AI system may be used for any purpose on deliverables in this category.”",
    },
    note: {
      es: "Se usa en proyectos amplios y prototipos ambiciosos hasta el deploy. Exige registro en README.md, historial progresivo en Git y defensa presencial individual.",
      en: "Used on ambitious projects and prototypes through deploy. Requires README.md attribution, progressive Git history, and individual in-person defense.",
    },
  },
  {
    id: "l2",
    tag: { es: "Nivel 2 · Herramienta de apoyo", en: "Level 2 · Support tool" },
    title: { es: "Apoyo al estudio y diseño", en: "Study & design support" },
    quote: {
      es: "«Se permite usar IA para estudiar, aclarar conceptos complejos, depurar errores o generar boilerplate cuando ya dominas la base, sin producir la solución completa.»",
      en: "“AI is permitted for study, clarifying concepts, debugging, or generating boilerplate once fundamentals are mastered, without producing the complete solution.”",
    },
    note: {
      es: "Queda fuera copiar el enunciado completo en el chat para que el modelo resuelva la actividad o entregar código generado sin haber construido la lógica central.",
      en: "Copying the prompt into a chat to produce the full answer or submitting generated code without building the core logic is outside this level.",
    },
  },
  {
    id: "l3",
    tag: { es: "Nivel 3 · Uso obligatorio", en: "Level 3 · Required workflow" },
    title: { es: "Workflow requerido con IA", en: "Required AI workflow" },
    quote: {
      es: "«Es obligatorio utilizar herramientas de IA generativa siguiendo el workflow especificado en la actividad.»",
      en: "“Using generative AI tools under the workflow specified by the activity is required.”",
    },
    note: {
      es: "Entrena cómo dirigir agentes, auditar salidas y corregir alucinaciones. Toda práctica obligatoria puede completarse con herramientas gratuitas, créditos o modelos provistos.",
      en: "Trains directing agents, auditing outputs, and fixing hallucinations. Every required practice can be completed with free tiers, class credits, or Lab-provided tools.",
    },
  },
  {
    id: "l4",
    tag: { es: "Nivel 4 · Estrictamente prohibido", en: "Level 4 · Strictly prohibited" },
    title: { es: "Exámenes, defensas y trabajo de campo", en: "Exams, oral defenses & fieldwork" },
    quote: {
      es: "«No se permite utilizar inteligencia artificial generativa bajo ninguna forma durante esta actividad.»",
      en: "“Generative AI is not permitted in any form during this activity.”",
    },
    note: {
      es: "Reservado para exámenes, defensas orales presenciales, entrevistas o pruebas de usabilidad con personas de carne y hueso y manejo de credenciales.",
      en: "Reserved for exams, in-person oral defenses, interviews or usability sessions with people, and credential handling.",
    },
  },
];

export const policyTracks: PolicyTrack[] = [
  {
    id: "lab",
    tabLabel: { es: "Innovation Lab", en: "Innovation Lab" },
    title: {
      es: "Uso Responsable de Inteligencia Artificial en el Innovation Lab",
      en: "Responsible AI Usage at the Innovation Lab",
    },
    byline: {
      es: "Adrián Catalán · Noviembre 2026",
      en: "Adrián Catalán · November 2026",
    },
    pdfHref: "/politicas/politica-ia-innovation-lab-resumen.pdf",
    protocolHeading: {
      es: "Protocolo de trabajo en el Laboratorio de Innovación",
      en: "Working protocol at the Innovation Lab",
    },
    protocolParagraphs: [
      {
        es: "En el laboratorio buscamos que todos trabajemos con un enfoque AI-Native. En la práctica esto significa diseñar soluciones donde la inteligencia artificial forma parte del workflow principal de desarrollo y también puede convertirse en el corazón de la propuesta de valor del prototipo, abriendo la puerta a resolver problemas que antes tomaban meses o parecían fuera de alcance para un equipo pequeño. Toda actividad puede ejecutarse con las herramientas, licencias o modelos de pesos abiertos que provee el laboratorio, sin exigir suscripciones personales.",
        en: "At the Lab we operate with an AI-Native workflow where artificial intelligence accelerates development and can power the core value of a prototype, letting a small team tackle problems that used to take months. Every activity can be completed with Lab-provided tools, licenses, or open-weight models without requiring personal subscriptions.",
      },
      {
        es: "Trabajar a esa velocidad exige disciplina técnica, sobre todo cuando se integran voluntarios o investigadores jóvenes que están consolidando sus bases. Si alguien delega todo a un agente sin entender cómo fluyen los datos por dentro, el código corre pero el criterio se queda vacío. Por eso el trabajo se sube en commits atómicos y progresivos que muestran cómo evolucionó el prototipo, pasando por revisión en pull requests antes de llegar a la rama principal. Un repositorio que aparece con miles de líneas en un solo commit masivo, o lleno de pruebas unitarias tautológicas donde el agente solo verifica que un mock devuelve lo que el mismo test configuró, se rechaza en revisión. No poder explicar cómo opera el prototipo o sus capas de seguridad detiene el merge y cualquier demostración pública.",
        en: "Moving at this speed demands strong habits, especially for student volunteers and early-career researchers. Every repository keeps atomic, progressive commits reviewed in pull requests before merging. A massive single commit or tautological unit tests that only assert mock stubs fail review, and being unable to explain how the prototype or its safety layers work blocks merging and public demos.",
      },
      {
        es: "La IA nos ayuda muchísimo a abrir el abanico de ideas iniciales, armar prototipos funcionales en pocos días y explorar arquitecturas —como lo hemos hecho en los proyectos de preconsulta médica guiada por voz, análisis inteligente de estados de cuenta con conversión multimoneda y estabilización de flujo de caja para trabajadores independientes con ingresos variables—. Sin embargo, la selección del problema y el refinamiento descansan siempre en investigación directa y validación con las personas involucradas (human in the loop). Sentarse con al menos tres usuarios de carne y hueso a observar dónde se traban en un teléfono o en una pantalla enseña cosas que ningún modelo puede simular. Antes de procesar notas o grabaciones de esas sesiones con un modelo externo, todo dato personal o clínico se anonimiza por completo.",
        en: "AI accelerates ideation, functional prototyping, and architecture exploration —as demonstrated in our voice-guided medical pre-consultation, multi-currency bank statement analyzer, and cashflow forecaster for independent workers. Still, problem selection and refinement always rest on direct validation with at least three users on actual devices (human in the loop). Before processing notes or transcripts with an external model, all personal or clinical data is strictly anonymized.",
      },
      {
        es: "Como en el Innovation Lab también construimos con robótica, sistemas embebidos y fabricación digital, aplicamos una regla innegociable cuando el software toca el mundo físico. Ninguna salida probabilística de un modelo o agente se conecta directo a motores, actuadores, brazos robóticos o electrónica de potencia sin una capa determinista intermedia. Todo comando generado o asistido por IA que mueva hardware pasa primero por validadores deterministas de rango, límites estrictos de velocidad y torque por software, pruebas en simulador o banco de trabajo y un paro de emergencia físico (kill switch) al alcance de la mano antes de operar cerca de personas en el laboratorio, en colegios o en eventos.",
        en: "Because the Lab builds robotics, embedded systems, and digital fabrication projects, we enforce a strict physical safety boundary. No probabilistic output from a model or agent connects directly to motors, actuators, robotic arms, or power electronics without a deterministic safety layer in between: deterministic range validators, software velocity and torque caps, bench or simulator tests, and a physical kill switch within reach before running near people.",
      },
      {
        es: "Finalmente, cuidamos las licencias y la integridad científica. En proyectos que entrenan, ajustan o evalúan modelos —incluyendo corpus lingüísticos o datasets propios— verificamos desde el inicio la licencia de cada dataset y de los pesos del modelo para distinguir qué permite uso académico y qué permite uso comercial. Cuando el trabajo del laboratorio se convierte en un poster o artículo científico, aplicamos el criterio de MIT para investigación, la IA nunca figura como coautora, se declara con transparencia qué herramientas apoyaron en el código o en la edición, y cada referencia bibliográfica o DOI se comprueba directo en su fuente primaria.",
        en: "Finally, we audit licenses and scientific integrity. On projects that train, fine-tune, or evaluate models, we verify dataset and open-weight licenses upfront to distinguish academic from commercial terms. When Lab work becomes a poster or paper, AI is never listed as a co-author, tool support is disclosed transparently, and every citation or DOI is verified against its primary source.",
      },
    ],
    tableHeaders: {
      activity: { es: "Actividad dentro del Laboratorio", en: "Activity inside the Lab" },
      level: { es: "Nivel MIT", en: "MIT Level" },
      application: { es: "Cómo se trabaja y cómo se audita", en: "How it is applied and audited" },
    },
    activities: [
      {
        activity: {
          es: "Prototipos, agentes, automatización e integración con hardware",
          en: "Prototypes, AI agents, automation, and hardware integration",
        },
        levelId: "l3",
        levelBadge: { es: "Nivel 3 · Obligatorio", en: "Level 3 · Required" },
        application: {
          es: "Operamos por defecto en modo AI-Native con commits incrementales, pruebas que validen comportamiento del sistema y capa determinista de seguridad con kill switch físico cuando hay actuadores o robótica.",
          en: "Default AI-Native workflow with incremental commits, behavioral tests, and a deterministic safety layer plus physical kill switch whenever actuators or robotics are involved.",
        },
      },
      {
        activity: {
          es: "Ideación inicial, exploración técnica, pruebas unitarias y material de clubes o eventos",
          en: "Initial ideation, technical spikes, unit tests, and club or event material",
        },
        levelId: "l1",
        levelBadge: { es: "Nivel 1 · Libre", en: "Level 1 · Open use" },
        application: {
          es: "Libertad de herramientas con revisión en pull requests, verificación de paquetes en registros oficiales y auditoría de licencias de datasets y pesos abiertos.",
          en: "Full tool freedom backed by pull request reviews, registry checks against hallucinated packages, and license verification for datasets and open weights.",
        },
      },
      {
        activity: {
          es: "Artículos científicos, posters, documentación técnica y reportes formales",
          en: "Research papers, scientific posters, technical docs, and formal reports",
        },
        levelId: "l2",
        levelBadge: { es: "Nivel 2 · Apoyo", en: "Level 2 · Support" },
        application: {
          es: "Apoyo en estilo, traducción y scripts de análisis; cero citas o DOIs alucinados, declaración explícita de herramientas y autoría intelectual 100 % humana.",
          en: "Support for style, translation, and analysis scripts; zero hallucinated citations or DOIs, explicit tool disclosure, and 100% human intellectual authorship.",
        },
      },
      {
        activity: {
          es: "Validación con personas, manejo de datos sensibles/credenciales y defensas técnicas",
          en: "User validation, sensitive data/credentials, and technical defenses",
        },
        levelId: "l4",
        levelBadge: { es: "Nivel 4 · Prohibido", en: "Level 4 · Prohibited" },
        application: {
          es: "Las sesiones de usabilidad se hacen con personas de carne y hueso (anonimizando bitácoras antes de analizarlas), las API keys jamás tocan un prompt y cada integrante defiende su código en persona.",
          en: "Usability sessions run with people (anonymizing logs before analysis), API keys never touch prompts, and each researcher defends their code in person.",
        },
      },
    ],
    readmeIntro: {
      es: "Todo repositorio del laboratorio lleva una sección Uso de Herramientas de IA dentro de su README.md (queda fuera el autocompletado básico de una línea en el IDE).",
      en: "Every Lab repository includes an AI Tools Usage section in README.md (basic single-line IDE autocomplete is excluded).",
    },
    readmeTemplate: {
      es: `## Uso de Herramientas de IA
- Modelos — <herramienta y modelo exacto, mes/año>
- Apoyo — <áreas donde intervino la IA, por ejemplo prototipo inicial, pruebas o scripts>
- Validación humana — <paquetes y licencias verificados, pruebas en banco y sesiones con usuarios>`,
      en: `## AI Tools Usage
- Models — <exact tool and model version, month/year>
- Support — <areas where AI assisted, e.g., initial prototype, tests, or scripts>
- Human validation — <verified packages and licenses, bench tests, and user sessions>`,
    },
  },
  {
    id: "sistemas",
    tabLabel: { es: "Ingeniería de Sistemas", en: "Systems Engineering" },
    title: {
      es: "Uso Responsable de Inteligencia Artificial en Ingeniería de Sistemas",
      en: "Responsible AI Usage in Systems Engineering Courses",
    },
    byline: {
      es: "Adrián Catalán · Noviembre 2026",
      en: "Adrián Catalán · November 2026",
    },
    pdfHref: "/politicas/politica-ia-cursos-sistemas-resumen.pdf",
    protocolHeading: {
      es: "Protocolo en cursos de Ingeniería de Sistemas",
      en: "Protocol in Systems Engineering courses",
    },
    protocolParagraphs: [
      {
        es: "En mis cursos espero que usen muchísima inteligencia artificial. Hoy un ingeniero de software trabaja rodeado de agentes y modelos, y aprender a dirigirlos bien es parte de formarse para la calle. El reto está en que el objetivo principal de un curso universitario sigue siendo que cada estudiante adquiera competencias propias. Que el código corra en el navegador o pase el deploy es apenas la mitad del trabajo; la otra mitad es que quien lo entregó entienda exactamente por qué funciona.",
        en: "In my courses I expect students to use artificial intelligence extensively. Modern software engineers work alongside agents and models, and directing them well is part of professional training. Still, getting code to run or pass deploy is only half the job; the other half is understanding and defending every technical choice in person.",
      },
      {
        es: "Cuando ante el primer error de compilación o el primer problema difícil delegas todo al chatbot para salir del paso, evitas pensar el problema por tu cuenta y entregas código cuyo funcionamiento interno desconoces. Antes de abrir el chat o el agente, dedica unos minutos a diseñar en frío tu modelo de datos, el flujo de estado y los componentes que vas a construir. Usa la IA con toda confianza para destrabar errores, aclarar conceptos complejos con ejemplos, explorar alternativas de arquitectura, generar boilerplate cuando ya dominas la base o armar suites de pruebas que validen reglas de negocio. Frena cuando estés frente a la lógica central de un tema nuevo que todavía no has intentado resolver por tu cuenta, o cuando el agente empiece a generar tests tautológicos que solo verifican que un mock devuelve lo que el mismo test configuró.",
        en: "Before opening a chat or agent, spend a few minutes sketching your data model, state flow, and components from scratch. Use AI freely to unblock errors, explain complex concepts, compare architectures, scaffold boilerplate once you master the fundamentals, or build behavioral test suites. Pause when facing the core logic of a brand-new topic you have not attempted yourself, or when an agent produces tautological tests that only assert mock stubs.",
      },
      {
        es: "Para que este trato funcione sin recurrir jamás a detectores automáticos de IA, aplicamos reglas concretas y verificables. Primero, toda práctica obligatoria de Nivel 3 puede completarse con herramientas gratuitas o créditos provistos en clase, sin exigir suscripciones pagadas. Segundo, el repositorio debe mostrar un historial progresivo y coherente de commits y pull requests donde se vea cómo evolucionó el trabajo de cada persona; un proyecto que aparece de golpe en un único commit masivo la noche anterior invalida la defensa.",
        en: "To keep expectations fair without automated AI detectors, every required Level 3 practice can be completed using free tiers or class-provided credits, with no paid subscriptions required. Repositories must also show progressive, coherent commits and pull requests; a single massive last-minute commit invalidates the defense.",
      },
      {
        es: "Tercero, toda entrega se valida conversando en persona mediante una doble vía de defensa oral. Los auxiliares revisan hitos y laboratorios, y además realizo evaluaciones orales independientes directamente conmigo —en cierres de proyecto, por muestreo o cuando los auxiliares reportan dudas— haciendo preguntas puntuales sobre decisiones técnicas, flujo hacia el API y funcionamiento interno del código. En proyectos en grupo la nota de defensa es 100 % individual sobre el sistema completo; cualquier integrante debe poder defender cualquier parte de la arquitectura sin excusarse en qué módulo programó otro compañero. No poder explicar el código o las decisiones entregadas implica nota cero en esa evaluación.",
        en: "Every submission is validated in person through a dual oral defense path: teaching assistants evaluate milestones and labs, and I conduct independent oral evaluations at project milestones or by sampling, asking direct questions about technical decisions, API data flow, and internal logic. On team projects, defense grading is 100% individual across the full system; every member must explain any part of the architecture. Being unable to explain the submitted code or decisions results in a zero grade on that evaluation.",
      },
    ],
    tableHeaders: {
      activity: { es: "Actividad en el curso", en: "Course activity" },
      level: { es: "Nivel MIT", en: "MIT Level" },
      application: { es: "Cómo se trabaja y cómo se evalúa", en: "How it works and how it is graded" },
    },
    activities: [
      {
        activity: {
          es: "Proyecto semestral e hitos de aplicaciones completas",
          en: "Semester project and full application milestones",
        },
        levelId: "l1",
        levelBadge: { es: "Nivel 1 y 3", en: "Levels 1 & 3" },
        application: {
          es: "Uso intensivo de agentes para llegar hasta el deploy, con commits progresivos, atribución en el README.md y responsabilidad individual sobre todo el repositorio durante la defensa oral.",
          en: "Intensive agent use through deploy, with progressive commits, README.md attribution, and individual accountability across the whole repository during oral defense.",
        },
      },
      {
        activity: {
          es: "Prácticas de desarrollo asistido por IA, testing y refactorización",
          en: "AI-assisted engineering, testing, and refactoring labs",
        },
        levelId: "l3",
        levelBadge: { es: "Nivel 3 · Obligatorio", en: "Level 3 · Required" },
        application: {
          es: "Dirigir agentes con contexto, detectar paquetes alucinados o código deprecated, descartar tests tautológicos y cuidar secretos. Siempre completable con herramientas gratuitas o créditos de clase.",
          en: "Directing agents with context, catching hallucinated packages or deprecated APIs, discarding tautological tests, and protecting secrets. Always completable with free tools or class credits.",
        },
      },
      {
        activity: {
          es: "Ejercicios cortos al introducir un fundamento nuevo",
          en: "Short exercises introducing a new core concept",
        },
        levelId: "l2",
        levelBadge: { es: "Nivel 2 · Apoyo", en: "Level 2 · Support" },
        application: {
          es: "La IA sirve como tutor para aclarar dudas conceptuales o errores de sintaxis, mientras construyes la lógica central del ejercicio por tu cuenta.",
          en: "AI acts as a tutor for conceptual questions or syntax errors while you build the core logic yourself.",
        },
      },
      {
        activity: {
          es: "Defensas orales con preguntas (auxiliares y docente) y exámenes",
          en: "Oral defenses (TAs and instructor) and exams",
        },
        levelId: "l4",
        levelBadge: { es: "Nivel 4 · Prohibido", en: "Level 4 · Prohibited" },
        application: {
          es: "Evaluaciones presenciales sin pantallas respondiendo preguntas directas sobre arquitectura, flujo hacia el API y funcionamiento interno; no poder explicarlo implica nota cero.",
          en: "Screen-free in-person exams and oral questioning on architecture, API flow, and internal logic; inability to explain the code results in a zero grade.",
        },
      },
    ],
    readmeIntro: {
      es: "Todo repositorio del curso incluye una sección Uso de Herramientas de IA dentro de su README.md (queda fuera el autocompletado básico de una línea en el IDE).",
      en: "Every course repository includes an AI Tools Usage section in README.md (basic single-line IDE autocomplete is excluded).",
    },
    readmeTemplate: {
      es: `## Uso de Herramientas de IA
- Modelos — <herramienta y modelo exacto, mes/año>
- Apoyo — <áreas donde intervino la IA, por ejemplo pruebas unitarias, refactorización o rutas del API>
- Validación humana — <paquetes verificados, código deprecated corregido y pruebas de extremo a extremo>`,
      en: `## AI Tools Usage
- Models — <exact tool and model version, month/year>
- Support — <areas where AI assisted, e.g., unit tests, refactoring, or API routes>
- Human validation — <verified packages, deprecated code fixed, and end-to-end checks>`,
    },
  },
  {
    id: "pdds",
    tabLabel: { es: "Posgrado PDDS", en: "PDDS Postgrad" },
    title: {
      es: "Uso Responsable de Inteligencia Artificial en PDDS",
      en: "Responsible AI Usage in PDDS",
    },
    byline: {
      es: "Adrián Catalán · Noviembre 2026",
      en: "Adrián Catalán · November 2026",
    },
    pdfHref: "/politicas/politica-ia-posgrado-pdds-resumen.pdf",
    protocolHeading: {
      es: "Protocolo en el Postgrado en Diseño y Desarrollo de Software (PDDS)",
      en: "Protocol in the Postgraduate Program in Software Design & Development (PDDS)",
    },
    protocolParagraphs: [
      {
        es: "En posgrado trabajamos con profesionales que ya construyen software en la industria. Esperamos un uso intensivo, maduro y estratégico de la inteligencia artificial bajo los cinco pilares y los cuatro niveles de MIT. Como muchos estudiantes operan a diario repositorios bancarios, corporativos o de clientes, aplicamos una regla de privacidad estricta desde el primer día. Jamás se sube código propietario, esquemas de bases de datos ni trazas internas de empleadores o clientes a modelos públicos en la nube durante las tareas; todo análisis corre sobre repositorios del curso, proyectos autorizados, datos sintéticos o modelos locales.",
        en: "In PDDS we work with practicing software engineers and expect mature, strategic AI adoption under the five pillars and MIT's four levels. Because many students handle proprietary corporate or banking codebases at work, strict confidentiality applies from day one: never upload employer or client source code, schemas, or logs to public cloud models.",
      },
      {
        es: "Cuando un ingeniero cuenta con agentes de código, el piso de lo que puede construir en pocas semanas sube muchísimo y nuestra exigencia sube en la misma proporción. A nivel de posgrado el mayor riesgo aparece cuando un ingeniero acepta sin cuestionar la primera arquitectura sugerida por el modelo, infla métricas con pruebas vacías o delega el análisis de trade-offs sin ubicar los cuellos de botella. Por eso en PDDS, además de diseñar sistemas nuevos hasta el deploy, usamos la IA para hacer arqueología de software sobre proyectos legacy, asumiendo el papel de un Staff Engineer que recibe un monolito existente y tiene que entenderlo, estabilizarlo, asegurarlo y modernizarlo.",
        en: "With coding agents, the baseline of what an engineer can build in a few weeks rises sharply, and our bar rises with it. Beyond greenfield systems through deploy, PDDS uses AI for software archaeology on legacy monoliths, stepping into the role of a Staff Engineer tasked with understanding, stabilizing, securing, and modernizing an existing system.",
      },
      {
        es: "En ese proceso los agentes ayudan a levantar mapas de contexto DDD, diagramas de arquitectura y brechas funcionales trazables a archivos y números de línea exactos dentro del código fuente. También apoyan al configurar pipelines en GitHub Actions que midan complejidad ciclomática y cobertura de pruebas en cada pull request para priorizar hotspots de deuda técnica con patrones como Strangler Fig. Y en la capa de DevSecOps aceleran la generación del SBOM, el escaneo y parcheo de vulnerabilidades críticas y las pruebas de rendimiento con benchmarks comparativos. Toda práctica obligatoria de Nivel 3 puede completarse con herramientas gratuitas o créditos provistos en el curso, sin exigir suscripciones pagadas.",
        en: "Agents assist in reverse-engineering DDD context maps and functional gaps traceable to exact files and line numbers, setting up GitHub Actions pipelines for cyclomatic complexity and coverage to prioritize technical-debt hotspots (such as Strangler Fig), and hardening DevSecOps with SBOM generation, vulnerability patching, and comparative benchmarks. Every required Level 3 activity can be completed with free tools or course-provided credits.",
      },
      {
        es: "Evaluamos el criterio técnico directamente en el repositorio y en persona, sin detectores automáticos. En el repositorio exigimos commits y pull requests incrementales y rechazamos entregas de un solo commit masivo o suites de pruebas tautológicas que solo prueban mocks para inflar la cobertura en CI sin validar invariantes del dominio ni regresiones del sistema legacy. En exámenes sin asistencia y en las defensas orales —con auxiliares o directamente con el catedrático— la exigencia en trabajos grupales es individual sobre todo el repositorio. Cualquier integrante debe poder defender cualquier ADR, mapa de contexto, parche de seguridad o decisión de trade-offs; no poder explicar el código o la arquitectura entregada implica nota cero en esa evaluación.",
        en: "We evaluate engineering judgment in the repository and in person, with zero automated detectors. Repositories require progressive commits and pull requests, rejecting single mega-commits or tautological mock-only tests designed to inflate CI coverage. Exams and oral defenses run strictly without AI; on team projects every member must individually defend any ADR, context map, security patch, or trade-off. Inability to explain the code or architecture results in a zero grade on that evaluation.",
      },
    ],
    tableHeaders: {
      activity: { es: "Actividad en PDDS", en: "Activity in PDDS" },
      level: { es: "Nivel MIT", en: "MIT Level" },
      application: { es: "Exigencia profesional y forma de validación", en: "Professional standard & validation" },
    },
    activities: [
      {
        activity: {
          es: "Proyectos de arquitectura, desarrollo full-stack, cloud y deploy",
          en: "Architecture, full-stack, cloud, and deployment projects",
        },
        levelId: "l1",
        levelBadge: { es: "Nivel 1 y 3", en: "Levels 1 & 3" },
        application: {
          es: "Escala productiva con commits y pull requests incrementales, pipelines de CI funcionando, pruebas no tautológicas, higiene de dependencias y registro en README.md.",
          en: "Production-grade scope with incremental commits and pull requests, working CI pipelines, non-tautological tests, dependency hygiene, and README.md attribution.",
        },
      },
      {
        activity: {
          es: "Arqueología de software en sistemas legacy, deuda técnica y DevSecOps",
          en: "Legacy software archaeology, technical debt, and DevSecOps",
        },
        levelId: "l3",
        levelBadge: { es: "Nivel 3 · Obligatorio", en: "Level 3 · Required" },
        application: {
          es: "Uso de agentes para mapas de contexto DDD trazables a archivo y línea exacta, detección de hotspots por complejidad ciclomática, SBOM, parcheo de vulnerabilidades y benchmarks.",
          en: "Agent-assisted DDD context maps traceable to exact file and line, cyclomatic-complexity hotspot detection, SBOM generation, vulnerability patching, and benchmarks.",
        },
      },
      {
        activity: {
          es: "Redacción de RFCs, ADRs y justificación de trade-offs de diseño",
          en: "RFCs, ADRs, and design trade-off justification",
        },
        levelId: "l2",
        levelBadge: { es: "Nivel 2 · Apoyo", en: "Level 2 · Support" },
        application: {
          es: "El modelo ayuda a contrastar alternativas, mientras el estudiante aterriza acoplamiento, costos operativos, latencia y mantenibilidad sobre las métricas medidas en su proyecto.",
          en: "AI helps compare options while the engineer grounds coupling, operating cost, latency, and maintainability in metrics measured from their project.",
        },
      },
      {
        activity: {
          es: "Defensas orales de arquitectura y exámenes",
          en: "Oral architecture defenses and exams",
        },
        levelId: "l4",
        levelBadge: { es: "Nivel 4 · Prohibido", en: "Level 4 · Prohibited" },
        application: {
          es: "Exámenes sin asistencia de IA y defensa presencial individual respondiendo preguntas técnicas directas sobre ADRs, módulos y operación del código; no poder explicarlo implica nota cero.",
          en: "AI-free exams and individual in-person defenses answering direct technical questions on ADRs, modules, and code behavior; inability to explain results in a zero grade.",
        },
      },
    ],
    readmeIntro: {
      es: "Todo repositorio del posgrado documenta en su README.md las herramientas usadas y la auditoría técnica realizada por el equipo.",
      en: "Every PDDS repository documents the tools used and the engineering audit performed by the team in README.md.",
    },
    readmeTemplate: {
      es: `## Uso de Herramientas de IA
- Modelos — <herramienta y modelo exacto, mes/año>
- Apoyo — <mapas DDD en legacy, pipelines CI, generación de SBOM o benchmarks>
- Validación humana — <trazabilidad a archivo y línea, pruebas no tautológicas y auditoría DevSecOps>`,
      en: `## AI Tools Usage
- Models — <exact tool and model version, month/year>
- Support — <legacy DDD maps, CI pipelines, SBOM generation, or benchmarks>
- Human validation — <file/line traceability, non-tautological tests, and DevSecOps audit>`,
    },
  },
  {
    id: "peit",
    tabLabel: { es: "Posgrado PEIT", en: "PEIT Postgrad" },
    title: {
      es: "Uso Responsable de Inteligencia Artificial en PEIT",
      en: "Responsible AI Usage in PEIT",
    },
    byline: {
      es: "Adrián Catalán · Noviembre 2026",
      en: "Adrián Catalán · November 2026",
    },
    pdfHref: "/politicas/politica-ia-posgrado-peit-resumen.pdf",
    protocolHeading: {
      es: "Protocolo en el Postgrado en Emprendimiento e Innovación Tecnológica (PEIT)",
      en: "Protocol in the Postgraduate Program in Entrepreneurship & Tech Innovation (PEIT)",
    },
    protocolParagraphs: [
      {
        es: "Para quien está creando un producto o una empresa de base tecnológica, la IA cambia por completo la velocidad de ejecución. Lo que antes se quedaba en una presentación de diapositivas hoy se convierte en un prototipo funcional navegable (MVP) en producción en pocos días. Toda actividad obligatoria de Nivel 3 en PEIT puede completarse con herramientas gratuitas o créditos provistos en clase, sin exigir suscripciones pagadas.",
        en: "For founders building a technology venture, AI transforms execution speed: ideas that used to stop at a slide deck can ship as a live, interactive MVP in days. Every required Level 3 activity in PEIT can be completed with free tools or class-provided credits, with no paid subscriptions required.",
      },
      {
        es: "Esa misma facilidad trae el riesgo más grande para un emprendedor en esta etapa, usar un modelo de lenguaje para simular el mercado y convencerse a sí mismo de que la idea funciona sin haber salido a la calle. Un chatbot ayuda mucho a construir el MVP, ordenar el pitch, modelar escenarios o encontrar patrones en notas de entrevistas que ya hiciste —anonimizando siempre primero nombres propios, empresas y datos personales de los entrevistados antes de subir cualquier transcripción al prompt—. Pero un chatbot jamás te va a comprar tu producto ni padece el problema que quieres resolver.",
        en: "That same speed brings the biggest founder trap: asking a chatbot to simulate the market instead of talking to customers. Models are great for building MVPs, structuring a pitch, or finding patterns in interview notes you already conducted —always anonymizing names, companies, and personal details before pasting transcripts— yet a chatbot will never buy your product or experience the problem firsthand.",
      },
      {
        es: "Por eso en PEIT trazamos una frontera nítida. Impulsamos el uso libre y obligatorio de IA (Niveles 1 y 3) para construir el MVP, hacer deploy, automatizar flujos e iterar la propuesta de valor —verificando siempre que las licencias de los modelos, librerías y datasets utilizados permitan uso comercial—; y prohibimos de forma estricta (Nivel 4) usar IA para simular entrevistas de descubrimiento de clientes, fabricar respuestas de encuestas o presentar cifras de mercado (TAM, SAM, SOM) sin comprobar su fuente primaria.",
        en: "We therefore draw a sharp line in PEIT: open and required AI use (Levels 1 and 3) for MVP building, deployment, workflow automation, and iteration —always verifying commercial-use licenses for models, libraries, and datasets— paired with a strict ban (Level 4) on simulated customer interviews, fabricated survey responses, or unverified TAM/SAM/SOM figures.",
      },
      {
        es: "Además, cuando el MVP integra modelos generativos o agentes dentro del producto, exigimos rigor sobre el costo de operarlo. Muchos proyectos parecen rentables en papel porque ignoran cuánto cuesta cada llamada al API en producción. En PEIT todo modelo de negocio que use IA debe desglosar en sus unit economics el costo de inferencia por usuario activo y por transacción —tokens de entrada y salida, llamadas a APIs externas, cómputo y almacenamiento— junto con límites de cuota (rate limits) y alertas de presupuesto antes del deploy.",
        en: "Whenever an MVP integrates generative models or agents, we require full unit-economics rigor: models must break down inference cost per active user and per transaction (input/output tokens, external API calls, compute, and storage) inside gross margin, alongside rate limits and budget alerts before deploy.",
      },
      {
        es: "Cada entrega se respalda con evidencia de campo verificable —bitácora de entrevistas anonimizadas con fecha y perfil, métricas de experimentos o landing pages activas e historial limpio de commits si hay código—. Durante exámenes y defensas presenciales ante auxiliares, catedrático o jurado, todos los integrantes del equipo fundador deben defender tanto los números financieros y unit economics como la operación técnica del MVP, sin dividirse quién responde por negocio y quién por código. No poder explicar los supuestos, las cifras o el prototipo entregado implica nota cero en esa evaluación.",
        en: "Every deliverable is backed by auditable field evidence —anonymized interview logs with dates and profiles, live experiment metrics, and clean commit history when code exists. During exams and oral defenses, every founding team member must defend both the financial unit economics and the technical operation of the MVP; inability to explain the assumptions, numbers, or prototype results in a zero grade on that evaluation.",
      },
    ],
    tableHeaders: {
      activity: { es: "Actividad en PEIT", en: "Activity in PEIT" },
      level: { es: "Nivel MIT", en: "MIT Level" },
      application: { es: "Criterio de aplicación y evaluación", en: "Application & grading standard" },
    },
    activities: [
      {
        activity: {
          es: "Construcción de MVPs funcionales, landing pages, prototipos y flujos",
          en: "Functional MVPs, landing pages, prototypes, and workflows",
        },
        levelId: "l1",
        levelBadge: { es: "Nivel 1 y 3", en: "Levels 1 & 3" },
        application: {
          es: "Uso intensivo de herramientas AI-Native con commits progresivos, licencias comerciales verificadas, API keys protegidas con rate limits y registro en README.md.",
          en: "Intensive AI-Native building with progressive commits, verified commercial licenses, protected API keys with rate limits, and README.md attribution.",
        },
      },
      {
        activity: {
          es: "Modelo de negocio, unit economics de IA, análisis competitivo y pitch",
          en: "Business model, AI unit economics, competitive analysis, and pitch",
        },
        levelId: "l2",
        levelBadge: { es: "Nivel 1 y 2", en: "Levels 1 & 2" },
        application: {
          es: "Apoyo para iterar hipótesis y narrativa, desglosando costos de inferencia y tokens por usuario dentro del margen bruto y comprobando cada cifra de industria en fuentes primarias.",
          en: "Support to iterate hypotheses and narrative while breaking down token and inference costs inside gross margin and verifying every industry metric against primary sources.",
        },
      },
      {
        activity: {
          es: "Descubrimiento de clientes, entrevistas de validación y tracción",
          en: "Customer discovery, validation interviews, and traction",
        },
        levelId: "l4",
        levelBadge: { es: "Nivel 4 · Prohibido", en: "Level 4 · Prohibited" },
        application: {
          es: "Prohibido simular entrevistas o fabricar encuestas. Cada conversación, prueba de disposición de pago y métrica de conversión debe venir de personas entrevistadas y documentadas en bitácora.",
          en: "Simulated interviews and fabricated surveys are prohibited. Every conversation, willingness-to-pay test, and conversion metric must come from logged human interviews.",
        },
      },
      {
        activity: {
          es: "Defensa de pitch, números y exámenes",
          en: "Pitch defense, financial numbers, and exams",
        },
        levelId: "l4",
        levelBadge: { es: "Nivel 4 · Prohibido", en: "Level 4 · Prohibited" },
        application: {
          es: "Exámenes sin IA y defensa oral presencial donde cualquier integrante responde sobre costos del API, margen bruto, hallazgos de campo y operación del MVP; no poder explicarlo implica nota cero.",
          en: "AI-free exams and in-person oral defenses where any team member answers on API costs, gross margin, field findings, and MVP operation; inability to explain results in a zero grade.",
        },
      },
    ],
    readmeIntro: {
      es: "Toda entrega distingue qué se construyó con IA y qué proviene de validación en la calle. Si el MVP tiene repositorio de código, incluye esta sección en su README.md.",
      en: "Every submission separates AI-accelerated work from field validation. Repositories include this section in README.md.",
    },
    readmeTemplate: {
      es: `## Uso de Herramientas de IA y Evidencia de Campo
- Modelos — <herramienta y modelo exacto, mes/año>
- Apoyo — <construcción de MVP, landing o síntesis de notas anonimizadas>
- Validación en campo — <cantidad de entrevistas presenciales con fecha en bitácora, costos de API y rate limits>`,
      en: `## AI Tools Usage & Field Evidence
- Models — <exact tool and model version, month/year>
- Support — <MVP build, landing page, or anonymized note synthesis>
- Field validation — <number of logged in-person interviews, measured API costs, and active rate limits>`,
    },
  },
];
