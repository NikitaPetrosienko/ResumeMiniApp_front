import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/AboutMeScreen.module.css';
import illustration from '../assets/about-illustration.png';

const aboutText = `
👤 Петросиенко Никита
🎓 Образование:
Факультет информационных технологий
Направление: Информатика и вычислительная техника
Специализация: Веб-технологии
Яндекс Практикум: IOS-разработчик

💻 Опыт и навыки:
— Начинал с фронтенд-разработки (HTML, CSS, JS)
— Позже увлёкся мобильной разработкой, сосредоточился на iOS (Swift/UIKit/SwiftUI)
— Участвовал в хакатоне в роли дизайнера
— Есть опыт в UI/UX‑дизайне: работаю в Figma, Photoshop
— Умею проектировать и реализовывать удобные интерфейсы

🛠 Интересуюсь разработкой качественных мобильных приложений и продолжаю развиваться как разработчик.
`.trim();

export default function AboutMeScreen({ onContinue }) {
  return (
    <div className={styles.container}>
      {}
      <motion.img
        src={illustration}
        alt="Coding Illustration"
        className={styles.illustration}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
      />

      {}
      <motion.div
        className={styles.textBlock}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>Обо мне</h2>
        <p>
          {aboutText.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <button className={styles.btn} onClick={onContinue}>
          Далее
        </button>
      </motion.div>
    </div>
  );
}
