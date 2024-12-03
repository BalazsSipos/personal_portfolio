import styles from './technology-list.module.css';
import { TechnologyItem } from './TechnologyItem';

type Technology = {
  technologyName: string;
  technologyLogo: string;
};

export type TechnologyListProps = {
  technologies: Technology[];
  title: string;
};

export function TechnologyList(props: TechnologyListProps) {
  console.log('props', props);
  return (
    <div className={styles['technology-list-container']}>
      <p>{props.title}</p>
      <div className={styles['technology-list']}>
        {props.technologies.map((technology) => (
          <TechnologyItem
            key={technology.technologyName}
            technologyName={technology.technologyName}
            technologyLogo={technology.technologyLogo}
          />
        ))}
      </div>
    </div>
  );
}
