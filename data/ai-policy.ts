export type LocalizedText = {
  es: string;
  en: string;
};

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

export const aiPolicyCopy = {
  eyebrow: {
    es: "Laboratorio de Innovación · Universidad Galileo",
    en: "Innovation Lab · Universidad Galileo",
  },
  homeTitle: {
    es: "Cómo usamos la inteligencia artificial en el Lab",
    en: "How we use artificial intelligence at the Lab",
  },
  homeIntro: {
    es: "En el laboratorio trabajamos con un enfoque AI-Native donde la inteligencia artificial forma parte del workflow principal y amplía lo que un equipo pequeño puede construir. El modelo carece de responsabilidad. Nosotros sí. Por eso cada prototipo combina velocidad con cinco pilares técnicos, el semáforo de cuatro niveles de MIT y validación directa con personas reales.",
    en: "At the Lab we work with an AI-Native mindset where artificial intelligence sits inside our core workflow and expands what a small team can build. Models carry zero accountability. We carry it all. Every prototype pairs speed with five engineering pillars, MIT's four-level framework, and direct validation with real users.",
  },
  homeCta: {
    es: "Leer política completa del Lab",
    en: "Read the complete Lab policy",
  },
  homeHardwareNote: {
    es: "Incluye protocolo de seguridad determinista con paro físico (kill switch) para robótica y hardware, higiene de credenciales en Git, verificación de licencias y atribución en README.md.",
    en: "Includes deterministic safety guardrails with a physical kill switch for robotics and hardware, Git credential hygiene, license auditing, and README.md attribution.",
  },
  pageTitle: {
    es: "Guía y Política de Uso de Inteligencia Artificial en el Innovation Lab",
    en: "Artificial Intelligence Usage Policy at the Innovation Lab",
  },
  pageSubtitle: {
    es: "Cómo trabajamos en un entorno AI-Native manteniendo el rigor técnico, la seguridad en hardware y software, la privacidad institucional y la validación con personas reales.",
    en: "How we operate in an AI-Native environment while keeping engineering rigor, hardware and software safety, institutional privacy, and real-world user validation.",
  },
  metaDirectionLabel: {
    es: "Dirección",
    en: "Direction",
  },
  metaDirectionValue: {
    es: "Ing. Adrián Catalán",
    en: "Eng. Adrián Catalán",
  },
  metaScopeLabel: {
    es: "Alcance",
    en: "Scope",
  },
  metaScopeValue: {
    es: "Equipo del Laboratorio de Innovación, investigadores, makers y voluntarios",
    en: "Innovation Lab staff, researchers, makers, and student volunteers",
  },
  printButton: {
    es: "Imprimir / Guardar PDF",
    en: "Print / Save PDF",
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
    es: "Pilares fundamentales y atribución en repositorios",
    en: "Five fundamental pillars and repository attribution",
  },
  pillarsIntro: {
    es: "Durante algún tiempo he estado buscando cómo equilibrar la velocidad que nos da la inteligencia artificial con el rigor que necesita un ingeniero para formarse bien. La herramienta amplía muchísimo lo que podemos construir en pocos días, aunque el pensamiento crítico, la ética y el aprendizaje siguen estando de nuestro lado. El modelo carece de responsabilidad. Nosotros sí. Con esto en mente, hay cinco pilares que acompañan cualquier proyecto, código o entrega.",
    en: "For a long time I have looked for ways to balance the speed that artificial intelligence gives us with the rigor that an engineer needs to grow. The tool expands what we can build in a few days, while critical thinking, ethics, and learning remain on our side. Models carry zero accountability. We carry it all. Five pillars guide every project, repository, and deliverable.",
  },
  readmeIntro: {
    es: "Además de estos cinco puntos, todo repositorio de software lleva una sección titulada Uso de Herramientas de IA dentro de su archivo README.md. El autocompletado básico de una línea en el IDE queda fuera de este registro, pero cualquier bloque de código, suite de pruebas o propuesta de arquitectura que haya sido importante para la solución se documenta indicando la herramienta, la versión exacta del modelo, la fecha, las áreas donde intervino y la validación humana realizada antes del deploy.",
    en: "Alongside these five pillars, every software repository includes an AI Tools Usage section inside README.md. Basic single-line IDE autocomplete stays out of this log, while any substantial code block, test suite, or architecture proposal is documented with the tool, exact model version, date, areas of support, and human verification performed before deploy.",
  },
  mitHeading: {
    es: "El semáforo de 4 niveles para proyectos e investigación",
    en: "The 4-level traffic light for projects and research",
  },
  mitIntro1: {
    es: "En agosto de 2026 el Comité Ad Hoc de MIT sobre el uso de IA en educación publicó un diagnóstico muy honesto sobre lo que está pasando en las aulas y en los laboratorios. Su primer hallazgo es que nos toca vivir el duelo de las evaluaciones caseras sin supervisión. Al mismo tiempo, renunciar al esfuerzo propio de pensar un problema difícil nos lleva directo a la rendición cognitiva, perdiendo esa lucha productiva donde de verdad se forja el criterio de un ingeniero.",
    en: "In August 2026 MIT's Ad Hoc Committee on AI Use in Education published a candid diagnosis of what is happening across classrooms and labs. Unsupervised take-home deliverables no longer prove mastery on their own, while delegating every hard problem to a model leads straight to cognitive surrender and erodes the productive struggle where engineering judgment is built.",
  },
  mitIntro2: {
    es: "Ahí cambia todo. Para salir de esa trampa sin recurrir a detectores automáticos de IA —que tienen tasas altas de falsos positivos y destruyen la confianza—, adoptamos los cuatro niveles de MIT como lenguaje común en cada proyecto del laboratorio.",
    en: "That changes how we work. Rather than relying on automated AI detectors —which suffer from high false-positive rates and erode trust— we adopt MIT's four levels as our shared language across every project in the Lab.",
  },
  protocolHeading: {
    es: "Protocolo de trabajo en el Laboratorio de Innovación",
    en: "Working protocol at the Innovation Lab",
  },
  protocolParagraphs: [
    {
      es: "En el laboratorio buscamos que todos trabajemos con un enfoque AI-Native. En la práctica esto significa diseñar soluciones donde la inteligencia artificial forma parte del workflow principal de desarrollo y también puede convertirse en el corazón de la propuesta de valor del prototipo, abriendo la puerta a resolver problemas que antes tomaban meses o parecían fuera de alcance para un equipo pequeño. Y está bien que sea así.",
      en: "At the Lab we work with an AI-Native approach. In practice this means building solutions where artificial intelligence sits inside our primary development workflow and can also power the core value proposition of a prototype, opening doors to problems that used to take months for a small team.",
    },
    {
      es: "Trabajar a esa velocidad exige tener los pies en la tierra, sobre todo cuando se integran voluntarios o investigadores jóvenes que están consolidando sus bases técnicas. Delegar a ciegas en un agente sin entender cómo fluyen los datos por dentro lleva directo a la rendición cognitiva. Por eso el trabajo se sube en commits atómicos y progresivos que cuentan la historia real del prototipo, pasando por revisión en pull requests antes de llegar a la rama principal. Un repositorio que aparece de golpe con miles de líneas en un solo commit masivo, o lleno de pruebas unitarias tautológicas donde el agente solo verifica que un mock devuelve lo que el mismo test configuró, se rechaza en revisión técnica.",
      en: "Moving at that pace requires grounded engineering habits, especially for student volunteers and early-career researchers. Blindly delegating to an agent without understanding how data flows inside leads to cognitive surrender. Every repository maintains atomic, progressive commits reviewed through pull requests before merging. A single massive last-minute commit or tautological unit tests that only assert a mock returned its own stub fail technical review.",
    },
    {
      es: "La IA nos ayuda muchísimo a abrir el abanico de ideas iniciales, armar prototipos funcionales en pocos días y explorar arquitecturas —como lo hemos hecho en los proyectos de preconsulta médica guiada por voz, análisis inteligente de estados de cuenta con conversión multimoneda y estabilización de flujo de caja para trabajadores independientes con ingresos variables—. Sin embargo, la selección del problema y el refinamiento del producto descansan siempre en investigación real y en validación directa con las personas involucradas en el proceso (human in the loop). Sentarse con al menos tres usuarios reales a observar dónde se traban en un teléfono o en una pantalla enseña cosas que ningún modelo puede simular. Antes de procesar las notas o grabaciones de esas sesiones con un modelo externo, todo dato personal o clínico se anonimiza por completo.",
      en: "AI accelerates ideation, functional prototyping, and architecture exploration —as we have seen in our voice-guided medical pre-consultation, multi-currency bank statement analyzer, and cashflow forecaster for independent workers. Even so, problem selection and refinement always rest on real research and direct validation with people (human in the loop). Sitting with at least three real users on real devices reveals friction no model can simulate. Before processing session notes or transcripts with an external model, all personal or clinical data is strictly anonymized.",
    },
    {
      es: "Como en el Innovation Lab también construimos con robótica, sistemas embebidos y fabricación digital, aplicamos una regla innegociable cuando el software toca el mundo físico. Ninguna salida probabilística de un modelo o agente se conecta directo a motores, actuadores, brazos robóticos o electrónica de potencia sin una capa determinista intermedia. Todo comando generado o asistido por IA que mueva hardware pasa primero por validadores deterministas de rango, límites estrictos de velocidad y torque por software, pruebas en simulador o banco de trabajo y un paro de emergencia físico (kill switch) al alcance de la mano antes de operar cerca de personas en el laboratorio, en colegios o en eventos.",
      en: "Because the Innovation Lab also builds robotics, embedded systems, and digital fabrication projects, we enforce a strict physical safety rule. No probabilistic output from a language model or agent connects directly to motors, actuators, robotic arms, or power electronics without a deterministic safety layer in between. Every AI-assisted command that moves hardware passes through deterministic range checks, software velocity and torque caps, bench or simulator testing, and a physical kill switch within reach before operating near people in the Lab, schools, or public events.",
    },
    {
      es: "Finalmente, cuidamos las licencias y la integridad científica. En proyectos que entrenan, ajustan o evalúan modelos —incluyendo corpus lingüísticos o datasets propios— verificamos desde el inicio la licencia de cada dataset y de los pesos del modelo para distinguir qué permite uso académico y qué permite uso comercial. Y cuando el trabajo del laboratorio se convierte en un poster o artículo científico, aplicamos el estándar de MIT para investigación, la IA nunca figura como coautora, se declara con transparencia qué herramientas apoyaron en el código o en la edición, y cada referencia bibliográfica o DOI se comprueba directamente en su fuente primaria.",
      en: "Finally, we guard licenses and scientific integrity. On projects that train, fine-tune, or evaluate models —including linguistic corpora and custom datasets— we verify dataset and model-weight licenses upfront to separate academic from commercial terms. When Lab work becomes a poster or paper, we follow MIT's research standard, AI is never listed as a co-author, tool support is disclosed transparently, and every citation and DOI is verified against its primary source.",
    },
  ] as LocalizedText[],
  tableHeaders: {
    activity: { es: "Actividad dentro del Laboratorio", en: "Activity inside the Lab" },
    level: { es: "Nivel del Semáforo", en: "Traffic-Light Level" },
    application: { es: "Cómo se aplica y se audita en el día a día", en: "How it is applied and audited" },
  },
  reciprocityTitle: {
    es: "Compromiso recíproco desde la Dirección del Laboratorio",
    en: "Reciprocal commitment from Lab Leadership",
  },
  reciprocityBody: {
    es: "La exigencia de transparencia y criterio aplica en ambas direcciones. Desde la dirección del Innovation Lab mantenemos la misma apertura al compartir qué agentes, modelos y workflows usamos para diseñar prototipos, evaluar código o estructurar guías técnicas, asegurando que la revisión de arquitectura, las pruebas en banco de trabajo y la retroalimentación hacia el equipo sean siempre humanas y directas.",
    en: "Transparency and accountability run in both directions. Lab leadership shares openly which agents, models, and workflows we use when prototyping, reviewing code, or drafting guides, ensuring that architecture reviews, bench tests, and team feedback always come directly from human judgment.",
  },
};

export const aiPolicyPillars: PolicyPillar[] = [
  {
    number: "01",
    title: { es: "Responsabilidad humana", en: "Human accountability" },
    summary: {
      es: "Quien entrega el prototipo da la cara por cada decisión, arquitectura y línea de código.",
      en: "Whoever ships the prototype owns every technical decision, architecture, and line of code.",
    },
    detail: {
      es: "El autor del trabajo entregado es el único responsable legal, académico y profesional del producto final. La IA apoya en el camino, pero carece de autoría y de criterio ético. Al final del día, quien entrega el trabajo da la cara por cada decisión, cada arquitectura y cada línea de código.",
      en: "The author of the work is solely responsible legally, academically, and professionally for the final product. AI assists along the way, yet holds neither authorship nor ethical judgment. Every decision and line of code remains human-owned.",
    },
  },
  {
    number: "02",
    title: { es: "Verificación obligatoria", en: "Mandatory verification" },
    summary: {
      es: "Contrasta todo con documentación oficial, valida paquetes contra slopsquatting y evita APIs deprecated.",
      en: "Cross-check outputs with official docs, verify packages against slopsquatting, and avoid deprecated APIs.",
    },
    detail: {
      es: "Todo resultado técnico o teórico se contrasta con la documentación oficial. Si el modelo alucina un dato o un método y el autor lo acepta sin validar, el error es del autor. Esto incluye comprobar que las librerías o paquetes sugeridos existan de verdad en registros oficiales como npm, PyPI o Maven para evitar riesgos por paquetes alucinados (slopsquatting), además de cuidar que el código use versiones vigentes y evite prácticas deprecated.",
      en: "Every technical or theoretical claim is verified against official documentation. Accepting a hallucinated method or dependency makes the error the author's responsibility. Always verify suggested packages exist in official registries such as npm, PyPI, or Maven to prevent slopsquatting, and confirm code avoids deprecated practices.",
    },
  },
  {
    number: "03",
    title: { es: "Sostenibilidad y uso proporcionado", en: "Proportional & sustainable use" },
    summary: {
      es: "Usa agentes potentes para arquitectura y depuración difícil; lee directo la documentación para dudas triviales.",
      en: "Reserve frontier agents for complex architecture and debugging; read official docs directly for simple lookups.",
    },
    detail: {
      es: "Vale la pena usar la IA con intención. Los modelos grandes y los agentes de razonamiento brillan al resolver problemas complejos, diseñar arquitectura o destrabar una depuración difícil. Para tareas triviales que se resuelven leyendo dos minutos la documentación oficial, resulta mucho más limpio ir directo a la fuente y ahorrar cómputo y energía.",
      en: "Use AI intentionally. Frontier models and reasoning agents shine on complex design, architecture, and tough debugging. For trivial lookups that take two minutes in the official docs, go straight to the source and save compute and energy.",
    },
  },
  {
    number: "04",
    title: { es: "Privacidad estricta y soberanía de datos", en: "Strict privacy & data sovereignty" },
    summary: {
      es: "Cero datos personales o clínicos en prompts externos; anonimiza bitácoras o corre modelos locales.",
      en: "Zero personal or clinical data in external prompts; anonymize logs or run local open-weight models.",
    },
    detail: {
      es: "Está prohibido meter datos personales, financieros, clínicos o información privada de la Universidad, del Laboratorio o de terceros dentro de los prompts enviados a un servicio externo. Cuando trabajamos con bitácoras, transcripciones o capturas de pruebas con usuarios reales, primero pasa todo por un proceso estricto de anonimización o se reemplaza por datos sintéticos antes de tocar el API en la nube; y si el caso exige procesar información sensible autorizada, se ejecuta sobre modelos locales de pesos abiertos en infraestructura controlada.",
      en: "Never paste personal, financial, clinical, or private institutional data into external prompts. Any log, transcript, or screenshot from real user testing is strictly anonymized or replaced with synthetic data before calling a cloud API; authorized sensitive workloads run on local open-weight models under controlled infrastructure.",
    },
  },
  {
    number: "05",
    title: { es: "Gestión de credenciales e historial Git", en: "Credentials & Git history hygiene" },
    summary: {
      es: "Variables de entorno y .gitignore siempre; si una API key se filtra, rótala de inmediato y limpia el historial.",
      en: "Use environment variables and .gitignore; if an API key leaks, rotate it immediately and scrub Git history.",
    },
    detail: {
      es: "Bajo ninguna circunstancia se pegan API keys, tokens de acceso, certificados o contraseñas en herramientas de IA ni se suben al repositorio. El manejo se hace siempre por variables de entorno fuera del control de versiones, respaldado por un archivo .gitignore bien configurado y plantillas .env.example limpias. Borrar un archivo en un commit posterior deja el secreto vivo en el historial de Git. Si una credencial llega a filtrarse, el autor debe rotarla y revocarla de inmediato en el proveedor y limpiar el historial de commits.",
      en: "Never paste API keys, access tokens, certificates, or passwords into AI tools or commit them to a repository. Manage secrets via environment variables excluded by .gitignore alongside clean .env.example templates. Deleting a file in a later commit leaves the secret alive in Git history; any exposed key must be rotated immediately and purged from commit history.",
    },
  },
];

export const aiPolicyLevels: PolicyLevel[] = [
  {
    id: "l1",
    tag: { es: "Nivel 1 · Uso sin restricciones", en: "Level 1 · Unrestricted use" },
    title: { es: "Uso libre con trazabilidad", en: "Open use with traceability" },
    quote: {
      es: "«Se puede utilizar cualquier sistema de IA generativa para cualquier propósito en las entregas de esta categoría.»",
      en: "“Any generative AI system may be used for any purpose on deliverables in this category.”",
    },
    note: {
      es: "Ideal para prototipos amplios a escala casi productiva, comprobando el dominio real en revisión de commits y defensa en persona.",
      en: "Ideal for ambitious near-production prototypes, verified through commit history review and in-person technical walkthroughs.",
    },
  },
  {
    id: "l2",
    tag: { es: "Nivel 2 · Herramienta de apoyo", en: "Level 2 · Support tool" },
    title: { es: "Apoyo al aprendizaje y redacción", en: "Learning & drafting support" },
    quote: {
      es: "«Se permite usar IA para estudio, depuración, edición de estilo o scripts de análisis, manteniendo la autoría intelectual humana.»",
      en: "“AI is allowed for study, debugging, style editing, or analysis scripts while keeping human intellectual authorship.”",
    },
    note: {
      es: "En posters y artículos científicos la IA apoya en claridad y traducción, pero jamás figura como coautora y cada DOI se verifica en su fuente primaria.",
      en: "For posters and papers, AI assists with clarity and translation, yet is never a co-author and every DOI is checked against primary sources.",
    },
  },
  {
    id: "l3",
    tag: { es: "Nivel 3 · Uso obligatorio", en: "Level 3 · Required workflow" },
    title: { es: "Workflow AI-Native requerido", en: "Required AI-Native workflow" },
    quote: {
      es: "«Es obligatorio utilizar herramientas de IA generativa siguiendo el workflow especificado del proyecto.»",
      en: "“Using generative AI tools under the project's specified workflow is required.”",
    },
    note: {
      es: "Modo por defecto para construir prototipos, agentes e integraciones, auditando cada salida y documentando qué se corrigió en el camino.",
      en: "Default mode for building prototypes, agents, and integrations while auditing outputs and documenting human fixes.",
    },
  },
  {
    id: "l4",
    tag: { es: "Nivel 4 · Estrictamente prohibido", en: "Level 4 · Strictly prohibited" },
    title: { es: "Validación real y datos sensibles", en: "Real validation & sensitive data" },
    quote: {
      es: "«No se permite utilizar inteligencia artificial generativa bajo ninguna forma durante esta actividad.»",
      en: "“Generative AI is not permitted in any form during this activity.”",
    },
    note: {
      es: "Reservado para pruebas de usabilidad con personas reales, manejo de credenciales y defensas técnicas en persona.",
      en: "Reserved for usability sessions with real people, credential handling, and in-person technical defenses.",
    },
  },
];

export const aiPolicyActivities: PolicyActivity[] = [
  {
    activity: {
      es: "Construcción de prototipos, agentes, automatización e integración con hardware",
      en: "Prototypes, AI agents, automation, and hardware integration",
    },
    levelId: "l3",
    levelBadge: { es: "Nivel 3 · Obligatorio", en: "Level 3 · Required" },
    application: {
      es: "Operamos por defecto en modo AI-Native con commits incrementales, pruebas que validen comportamiento real y una capa determinista de seguridad con kill switch físico cuando hay actuadores o robótica.",
      en: "Default AI-Native workflow with incremental commits, non-tautological tests, and a deterministic safety layer plus physical kill switch whenever actuators or robotics are involved.",
    },
  },
  {
    activity: {
      es: "Ideación inicial, exploración técnica, pruebas unitarias y material de clubes o eventos",
      en: "Initial ideation, technical spikes, unit tests, and club or event material",
    },
    levelId: "l1",
    levelBadge: { es: "Nivel 1 · Uso libre", en: "Level 1 · Open use" },
    application: {
      es: "Libertad completa de herramientas pasando siempre por revisión humana en pull requests, verificando existencia de paquetes en registros oficiales y compatibilidad de licencias de datasets y pesos abiertos.",
      en: "Full tool freedom backed by human pull request reviews, registry checks against hallucinated packages, and license verification for datasets and open weights.",
    },
  },
  {
    activity: {
      es: "Redacción de artículos científicos, posters, documentación técnica y reportes formales",
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
      es: "Validación con usuarios reales, manejo de datos sensibles/credenciales y defensas técnicas",
      en: "Real user validation, sensitive data/credentials, and technical defenses",
    },
    levelId: "l4",
    levelBadge: { es: "Nivel 4 · Prohibido", en: "Level 4 · Prohibited" },
    application: {
      es: "Las pruebas de usabilidad se hacen con personas reales (anonimizando bitácoras antes de analizarlas), las API keys jamás tocan un prompt y cada investigador defiende en persona cómo opera su código.",
      en: "Usability sessions run with real people (anonymizing logs before analysis), API keys never touch prompts, and each researcher defends their code in person.",
    },
  },
];

export const aiPolicyReadmeTemplate: LocalizedText = {
  es: `## Uso de Herramientas de IA

- Herramientas y modelos utilizados — Claude Code con Claude 4.6 Sonnet y Antigravity con Gemini 3.8 Pro (octubre 2026)
- Áreas de apoyo — generación inicial de pruebas unitarias, refactorización de la capa de datos y armado de rutas del API
- Validación humana y auditoría — verificación de existencia y licencias de paquetes en npm, reemplazo de métodos deprecated, descarte de tests tautológicos y pruebas manuales de extremo a extremo`,
  en: `## AI Tools Usage

- Tools and models used — Claude Code with Claude 4.6 Sonnet and Antigravity with Gemini 3.8 Pro (October 2026)
- Areas of support — initial unit test scaffolding, data layer refactoring, and API route setup
- Human validation and audit — verified package existence and licenses in npm, replaced deprecated methods, removed tautological tests, and ran end-to-end manual checks`,
};
