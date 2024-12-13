import { Code2, Database, Wrench } from 'lucide-react';

export const skills = {
  frontend: {
    icon: Code2,
    title: 'Desenvolvimento Frontend',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Vue.js', level: 80 }
    ]
  },
  backend: {
    icon: Database,
    title: 'Desenvolvimento Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'GraphQL', level: 75 }
    ]
  },
  tools: {
    icon: Wrench,
    title: 'Ferramentas & Métodos',
    skills: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'CI/CD', level: 85 }
    ]
  }
};