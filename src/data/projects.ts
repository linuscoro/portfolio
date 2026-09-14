export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Programa d'analisi de dades pel manteniment de maquinària industrial",
    description: "Descripció breu del projecte.",
    technologies: ["C#", "Python"],
    github: "https://github.com/linuscoro/Mostra-de-codi-TFG"
  }
]