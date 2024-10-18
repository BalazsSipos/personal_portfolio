import styles from './project-summary-item.module.css';
import Image from 'next/image';
import psa from '../../app/assets/psa.png';
import { useEffect, useRef } from 'react';
export type ProjectSummaryItemProps = {
  projectTitle: string;
  projectDescription: string;
  projectImage: string;
  url: string;
  onActiveProjectTitleChange: (activeProjectTitle: string) => void;
};

export default function ProjectSummaryItem(props: ProjectSummaryItemProps) {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          props.onActiveProjectTitleChange(props.projectTitle);
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px', // no margin
        threshold: 0.7, // 50% of target visible
      }
    );
    const target = targetRef.current;

    if (target) {
      observer.observe(target);
    }

    // Clean up the observer
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [props]);

  return (
    <div className={styles['project-summary-item']} ref={targetRef}>
      <h3 className={styles['project-summary-item__title']}>
        {props.projectTitle}
      </h3>
      <p className={styles['project-summary-item__description']}>
        {props.projectDescription}
      </p>
      <Image
        className={styles['project-summary-item__image']}
        src={psa}
        alt={props.projectTitle}
        // width={180}
        // height={38}
      />
      {/* {props.url} */}
    </div>
  );
}
