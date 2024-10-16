import styles from './technology-item.module.css';
import Image from 'next/image';

interface TechnologyItemProps {
  technologyName: string;
  technologyLogo: string;
}

export function TechnologyItem(props: TechnologyItemProps) {
  return (
    <div className={styles['technology-item-container']}>
      <Image
        className="icon"
        src={props.technologyLogo}
        alt={props.technologyName}
        // width={180}
        // height={38}
        priority
      />
      {/* <img
        className="icon"
        src={props.technologyLogo}
        alt={props.technologyName}
      /> */}
      <span className={styles['technology-name']}>{props.technologyName}</span>
    </div>
  );
}
