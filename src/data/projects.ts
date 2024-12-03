import type { ProjectSummaryItemProps } from '../components/professional/ProjectSummaryItem';

export const projects = [
  'PSA CAR CMS',
  'AODOCS',
  'KAISER',
  'TODO APP',
  'PERSONAL PORTFOLIO',
];

export const projectSummaries: ProjectSummaryItemProps[] = [
  {
    projectTitle: projects[0],
    projectDescription:
      'A website and CMS system for car retail shops for the PSA group. Technologies: Java, React, postgres, git, Sass.',
    projectImage: 'psa.png',
    url: '/projects/psa',
    onActiveProjectTitleChange: () => {},
  },
  {
    projectTitle: projects[1],
    projectDescription:
      'Document handling and workflow management tool. Technologies: Java, postgres, git.',
    projectImage: 'aodocs.png',
    url: '/projects/aodocs',
    onActiveProjectTitleChange: () => {},
  },
  {
    projectTitle: projects[2],
    projectDescription:
      'A landing page for Kaiser Sport Club. Technologies: React, Next, Tailwind css.',
    projectImage: 'kaiser-circle.png',
    url: '/projects/kaiser',
    onActiveProjectTitleChange: () => {},
  },
  {
    projectTitle: projects[3],
    projectDescription:
      'A task management system for organizing daily todos. Technologies: React, Node, Express, postgres, git, parcel, Vercel, Render.',
    projectImage: 'todo.png',
    url: '/projects/todo',
    onActiveProjectTitleChange: () => {},
  },
  {
    projectTitle: projects[4],
    projectDescription:
      'A static website for personal portfolio (this website). Technologies: React, Nextjs, git.',
    projectImage: 'sb.png',
    url: '/projects/pp',
    onActiveProjectTitleChange: () => {},
  },
];
