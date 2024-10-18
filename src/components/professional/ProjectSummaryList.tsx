import styles from './project-summary-list.module.css';
import type { ProjectSummaryItemProps } from './ProjectSummaryItem';
import ProjectSummaryItem from './ProjectSummaryItem';

type ProjectSummaryListProps = {
  projects: ProjectSummaryItemProps[];
  onActiveProjectTitleChange: (activeProjectTitle: string) => void;
};

export default function ProjectSummaryList(props: ProjectSummaryListProps) {
  return (
    <section className={styles['project-summary-list']}>
      {props.projects.map((project) => (
        <ProjectSummaryItem
          key={project.projectTitle}
          projectTitle={project.projectTitle}
          projectDescription={project.projectDescription}
          projectImage={project.projectImage}
          url={project.url}
          onActiveProjectTitleChange={props.onActiveProjectTitleChange}
        />
      ))}
    </section>
  );
}
