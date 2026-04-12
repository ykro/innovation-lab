export interface Project {
  id: string;
  name: string;
  description: { es: string; en: string };
  technologies: string[];
  status: "in_progress" | "finished" | "transferred";
  date: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "pictance",
    name: "Pictance",
    description: {
      es: "Reconocimiento facial usando redes neuronales en una aplicacion web. Los usuarios suben fotos y el sistema identifica y marca caracteristicas faciales clave.",
      en: "Face recognition using neural networks on a web app. Users upload photos and the system identifies and marks key facial features.",
    },
    technologies: ["Neural Networks", "Web App", "Computer Vision"],
    status: "in_progress",
    date: "2018-08",
    image: "/images/projects/pictance.png",
  },
  {
    id: "kotlinbots-hexapod",
    name: "Kotlinbots Hexapod",
    description: {
      es: "Robot de seis patas controlado via Android Things en Raspberry Pi. Utiliza vision por computadora y Firebase.",
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
    status: "in_progress",
    date: "2017-06",
    image: "/images/projects/default.png",
  },
  {
    id: "tjbot",
    name: "TJBot",
    description: {
      es: "Robot que baila, responde a emociones e interactua mediante servicios de IBM Watson. Usa Raspberry Pi, servomotor y LED RGB.",
      en: "Robot that dances, responds to emotions, and engages via IBM Watson services. Uses Raspberry Pi, servo motor, and RGB LED.",
    },
    technologies: ["IBM Watson", "Raspberry Pi", "IoT"],
    status: "in_progress",
    date: "2017-06",
    image: "/images/projects/default.png",
  },
  {
    id: "ilstyle",
    name: "ILStyle",
    description: {
      es: "Transferencia de estilo de pinturas famosas a fotografias usando redes neuronales.",
      en: "Style transfer of famous paintings to photos using neural networks.",
    },
    technologies: ["TensorFlow", "NodeJS", "Firebase", "React Native"],
    status: "finished",
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
    status: "in_progress",
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
    status: "finished",
    date: "2016-10",
    image: "/images/projects/ildrone.jpg",
  },
  {
    id: "obdled",
    name: "OBDled",
    description: {
      es: "Control de tiras LED segun las RPM del auto usando Arduino. Lee datos del vehiculo via adaptador OBD-II.",
      en: "Controlling LED strips according to car RPM using Arduino. Reads vehicle data via OBD-II adapter.",
    },
    technologies: ["Arduino", "OBD-II", "IoT"],
    status: "finished",
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
    status: "transferred",
    date: "2015-12",
    image: "/images/projects/leonardo.jpg",
  },
];
