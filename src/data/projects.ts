export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export type ProjectLanguage = "ca" | "es" | "en";

const metadata = [
  { id: 1, technologies: ["C#", "Python"], github: "https://github.com/linuscoro/Mostra-de-codi-TFG" },
  { id: 2, technologies: [] },
  { id: 3, technologies: ["React Native", "TypeScript", "Expo", "Supabase"] },
];

const content: Record<ProjectLanguage, { title: string; description: string }[]> = {
  ca: [
    {
      title: "Anàlisi de maquinària industrial",
      description: "Durant dos anys vaig desenvolupar una aplicació en C# per a una empresa per controlar el funcionament de les seves màquines industrials. Permetia consultar dades en temps real i revisar l’històric d’una franja de temps: registres, errors, cicles i indicadors com l’OEE (eficiència global dels equips). També incorporava una visualització de les peces per tenir la màquina mapejada i identificar-ne els components.",
    },
    {
      title: "Staour",
      description: "Plataforma per a monitors d’esquí freelance que permetia organitzar les classes i gestionar les reserves. Els clients podien trobar i reservar un monitor de manera senzilla i ràpida, directament i sense intermediaris com una escola d’esquí, reduint el cost especialment en classes puntuals d’un sol dia.",
    },
    {
      title: "PartyUs",
      description: "Aplicació mòbil per jugar amb els amics durant una nit de festa. El grup proposa reptes i cada participant intenta completar els que li toquen, amb fotos per deixar-ne constància. Al final de la nit es tanca la partida, es revisen les fotos per validar els reptes i es puntuen els resultats. Les fotos es poden guardar per conservar els records de la nit.",
    },
  ],
  es: [
    {
      title: "Análisis de maquinaria industrial",
      description: "Durante dos años desarrollé una aplicación en C# para una empresa para controlar el funcionamiento de sus máquinas industriales. Permitía consultar datos en tiempo real y revisar el histórico de una franja de tiempo: registros, errores, ciclos e indicadores como el OEE (eficiencia global de los equipos). También incorporaba una visualización de las piezas para tener la máquina mapeada e identificar sus componentes.",
    },
    {
      title: "Staour",
      description: "Plataforma para monitores de esquí freelance que permitía organizar las clases y gestionar las reservas. Los clientes podían encontrar y reservar un monitor de forma sencilla y rápida, directamente y sin intermediarios como una escuela de esquí, reduciendo el coste especialmente en clases puntuales de un solo día.",
    },
    {
      title: "PartyUs",
      description: "Aplicación móvil para jugar con amigos durante una noche de fiesta. El grupo propone retos y cada participante intenta completar los que le tocan, con fotos para dejar constancia. Al final de la noche se cierra la partida, se revisan las fotos para validar los retos y se puntúan los resultados. Las fotos se pueden guardar para conservar los recuerdos de la noche.",
    },
  ],
  en: [
    {
      title: "Industrial machinery analysis",
      description: "Over two years, I developed a C# application for a company to monitor its industrial machines. It provided real-time data and historical analysis for a selected time range, including logs, errors, cycles and indicators such as OEE (overall equipment effectiveness). It also included a visual map of the machine’s parts to identify its components.",
    },
    {
      title: "Staour",
      description: "A platform for freelance ski instructors to organise lessons and manage bookings. Customers could find and book an instructor quickly and easily, directly and without intermediaries such as a ski school, reducing costs especially for one-day lessons.",
    },
    {
      title: "PartyUs",
      description: "A mobile app for playing with friends on a night out. The group creates challenges, and each participant tries to complete their assigned challenges, taking photos as evidence. At the end of the night, the game closes, the photos are reviewed to validate the challenges and the results are scored. The photos can be saved as memories of the night.",
    },
  ],
};

export function getProjects(language: ProjectLanguage): Project[] {
  return metadata.map((project, index) => ({ ...project, ...content[language][index] }));
}

export const projects = getProjects("ca");
