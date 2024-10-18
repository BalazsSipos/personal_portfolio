import type { ProjectSummaryItemProps } from '../components/professional/ProjectSummaryItem';

export const projects = [
  'PSA CAR CMS',
  'AODOCS',
  'REGISTRATION FORM',
  'TODO APP',
  'PERSONAL PORTFOLIO',
];

export const projectSummaries: ProjectSummaryItemProps[] = [
  {
    projectTitle: projects[0],
    projectDescription:
      'A website and CMS system for car retail shops for the PSA group. Technologies: Java, React, postgres, git, Sass.',
    projectImage: 'psa.png',
    url: 'https://project1.com',
    onActiveProjectTitleChange: () => {},
  },
  {
    projectTitle: projects[1],
    projectDescription:
      'Document handling and workflow management tool. Technologies: Java, postgres, git.',
    projectImage: 'project2.jpg',
    url: 'https://project2.com',
    onActiveProjectTitleChange: () => {},
  },
  {
    projectTitle: projects[2],
    projectDescription:
      'A landing page for a registration form. Technologies: React.',
    projectImage: 'project3.jpg',
    url: 'https://project3.com',
    onActiveProjectTitleChange: () => {},
  },
  {
    projectTitle: projects[3],
    projectDescription:
      'A task management system for organizing daily todos. Technologies: React, Node, Express, postgres, git, parcel, Vercel, Render.',
    projectImage: 'project4.jpg',
    url: 'https://project4.com',
    onActiveProjectTitleChange: () => {},
  },
  {
    projectTitle: projects[4],
    projectDescription:
      'A static website for personal portfolio (this website). Technologies: React, Nextjs, git.',
    projectImage: 'project5.jpg',
    url: 'https://project5.com',
    onActiveProjectTitleChange: () => {},
  },
];
