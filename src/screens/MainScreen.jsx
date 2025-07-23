import React from 'react';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import styles from '../styles/MainScreen.module.css';

export default function MainScreen({ onNext, onBack }) {
  return (
    <div className={styles.main}>
      <div className="container">
        <SkillsSection />
        <ProjectsSection />

        <div className={styles.navButtons}>
          <button className={styles.backBtn} onClick={onBack}>
            Назад
          </button>
          <button className={styles.nextBtn} onClick={onNext}>
            Далее
          </button>
        </div>
      </div>
    </div>
  );
}
