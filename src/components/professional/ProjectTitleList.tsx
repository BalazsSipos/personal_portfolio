import styles from './project-title-list.module.css';

type ProjectTitleListProps = {
  projectTitles: string[];
  activeProjectTitle: string;
};

export default function ProjectTitleList(props: ProjectTitleListProps) {
  // console.log('activeProjectTitle', props.activeProjectTitle);
  return (
    <div className={styles['project-title-list']}>
      <h1 className={styles['project-title-list__title']}>WORK</h1>
      <ul className={styles['project-title-list__ul']}>
        {props.projectTitles.map((title) => (
          // console.log('title', title),
          // console.log('props.activeProjectTitle', props.activeProjectTitle),
          <li
            key={title}
            className={`${styles['project-title']} ${
              props.activeProjectTitle === title
                ? styles['project-title--active']
                : ''
            }`}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}
