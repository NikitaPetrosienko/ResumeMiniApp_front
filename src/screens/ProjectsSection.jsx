import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/ProjectsSection.module.css';

const webProjects = [
  { title: 'Поиск пропавших животных (Хакатон)', role: 'Designer', description: 'Сервис для быстрого поиска пропавших питомцев.' },
  { title: 'SkateShop', role: 'Frontend', description: 'Сайт скейтшопа.' },
  { title: 'Сайт с рецептами', role: 'Frontend', description: 'Каталог рецептов с фильтрами по ингредиентам.' },
  { title: 'Сайт доставки еды', role: 'Frontend', description: 'Платформа для оформления заказов еды.' },
  { title: 'Сайт по фильмам', role: 'Frontend', description: 'Сайт в рамках программы дополнительного образования.' },
  { title: 'Фотошоп', role: 'Frontend', description: 'Самописный фотошоп с разнобразным функционалом' },
];

const mobileApps = [
  { title: 'Трекер привычек (Дипломный проект)', description: 'Swift, Core Data' },
  { title: 'Прогноз погоды', description: 'Swift, OpenWeather API' },
  { title: 'Викторина по фильмам', description: 'Swift, TMDB API' },
  { title: 'Лента изображений', description: 'Swift, Unsplash API, бесконечный scroll' },
];

export default function ProjectsSection() {
  return (
    <section className={styles.projects}>
      <h3 className={styles.heading}>Проекты</h3>
      <h4 className={styles.subheading}>Веб-проекты</h4>
      <div className={styles.grid}>
        {webProjects.map(p => (
          <motion.div key={p.title} className={styles.card} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 200 }}>
            <h5 className={styles.cardTitle}>{p.title}</h5>
            <p className={styles.cardRole}>{p.role}</p>
            <p className={styles.cardDesc}>{p.description}</p>
          </motion.div>
        ))}
      </div>
      <h4 className={styles.subheading}>Мобильные приложения</h4>
      <div className={styles.grid}>
        {mobileApps.map(a => (
          <motion.div key={a.title} className={styles.card} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 200 }}>
            <h5 className={styles.cardTitle}>{a.title}</h5>
            <p className={styles.cardDesc}>{a.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
);
}
