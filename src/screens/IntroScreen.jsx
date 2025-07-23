import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/IntroScreen.module.css';

export default function IntroScreen({ onContinue }) {
  return (
    <div className={styles.intro}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.heading}>Добро пожаловать!</h2>
        <p className={styles.text}>Давайте познакомимся поближе.</p>
        <button className={styles.btn} onClick={onContinue}>
          Начать
        </button>
      </motion.div>
    </div>
  );
}
