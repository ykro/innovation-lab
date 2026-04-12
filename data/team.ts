export interface TeamMember {
  id: string;
  name: string;
  role: "director" | "assistant";
  photo?: string;
  bio?: { es: string; en: string };
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    id: "adrian-catalan",
    name: "Adrian Catalan",
    role: "director",
    photo: "/images/staff/adrian.jpeg",
    bio: {
      es: "Director del Postgrado en Desarrollo de Software y del Innovation Lab en Universidad Galileo. Es Google Developer Expert y mentor de Google for Startups. Con más de 20 años de experiencia, combina docencia y consultoría en inteligencia artificial, cloud computing y software. Ha impulsado comunidades y proyectos tecnológicos con impacto regional e internacional. Apasionado por la ultradistancia y el montañismo, vincula liderazgo y resiliencia con la tecnología.",
      en: "Director of the Graduate Program in Software Development and the Innovation Lab at Universidad Galileo. Google Developer Expert and Google for Startups mentor. With over 20 years of experience, he combines teaching and consulting in artificial intelligence, cloud computing, and software. He has driven tech communities and projects with regional and international impact. Passionate about ultra-distance running and mountaineering, he links leadership and resilience with technology.",
    },
    linkedin: "https://www.linkedin.com/in/adriancatalan/",
  },
  {
    id: "luis-jimenez",
    name: "Luis Jimenez",
    role: "assistant",
    photo: "/images/staff/luis.jpg",
  },
  {
    id: "pablo-galicia",
    name: "Pablo Galicia",
    role: "assistant",
  },
  {
    id: "holly-milian",
    name: "Holly Milian",
    role: "assistant",
    photo: "/images/staff/holly.jpg",
  },
  {
    id: "catherine-batres",
    name: "Catherine Batres",
    role: "assistant",
  },
  {
    id: "christian-martinez",
    name: "Christian Martinez",
    role: "assistant",
  },
  {
    id: "emily-curin",
    name: "Emily Curin",
    role: "assistant",
  },
  {
    id: "stephanie-sosa",
    name: "Stephanie Sosa",
    role: "assistant",
  },
  {
    id: "steven-marroquin",
    name: "Steven Marroquin",
    role: "assistant",
  },
  {
    id: "yoselin-mejia",
    name: "Yoselin Mejia",
    role: "assistant",
  },
  {
    id: "andres-tobar",
    name: "Andres Tobar",
    role: "assistant",
  },
];
