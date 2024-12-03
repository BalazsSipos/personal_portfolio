import styles from './technology-item.module.css';
import Image from 'next/image';

export type TechnologyItemProps = {
  technologyName: string;
  technologyLogo: string;
};

export function TechnologyItem(props: TechnologyItemProps) {
  return (
    <div className={styles['technology-item-container']}>
      <Image
        className="icon"
        src={props.technologyLogo}
        alt={props.technologyName}
        width={60}
        height={68}
        priority
      />
      <span className={styles['technology-name']}>{props.technologyName}</span>
    </div>
  );
}
