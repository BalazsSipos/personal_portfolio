import styles from './project-summary-item.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Anchor from '../common/Anchor';
export type ProjectSummaryItemProps = {
  projectTitle: string;
  projectDescription: string;
  projectImage: string;
  url: string;
  onActiveProjectTitleChange: (activeProjectTitle: string) => void;
};

export default function ProjectSummaryItem(props: ProjectSummaryItemProps) {
  const targetRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          props.onActiveProjectTitleChange(props.projectTitle);
          setIsActive(true);
        } else {
          setIsActive(false);
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
        className={`${styles['project-summary-item__image']} ${
          isActive ? styles['project-summary-item__image--active'] : ''
        }`}
        src={`/${props.projectImage}`}
        alt={props.projectTitle}
        width={900}
        height={180}
      />
      <div className={styles['project-summary-item__anchor']}>
        <Anchor
          text="Read more"
          href={props.url}
          target=""
          priority="primary"
        ></Anchor>
      </div>
    </div>
  );
}
