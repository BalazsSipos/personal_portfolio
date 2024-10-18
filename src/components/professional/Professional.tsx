'use client';

import styles from './professional.module.css';

import ProjectSummaryList from './ProjectSummaryList';
import ProjectTitleList from './ProjectTitleList';

import { projects, projectSummaries } from '../../data/projects';
import { useState } from 'react';

export default function Professional() {
  const [activeProjectTitle, setActiveProjectTitle] = useState('');

  function handleVisibilityChange(activeProjectTitle: string) {
    setActiveProjectTitle(activeProjectTitle);
  }

  return (
    <>
      <section className={styles['professional-container']}>
        <div className={styles['project-title-list']}>
          <ProjectTitleList
            projectTitles={projects}
            activeProjectTitle={activeProjectTitle}
          />
        </div>
        <div className={styles['project-list']}>
          <ProjectSummaryList
            projects={projectSummaries}
            onActiveProjectTitleChange={handleVisibilityChange}
          />
        </div>
      </section>
    </>
  );
}
