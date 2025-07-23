import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/CongratsScreen.module.css';

export default function CongratsScreen({ onContinue }) {
  useEffect(() => {
    const timer = setTimeout(onContinue, 2000);
    return () => clearTimeout(timer);
  }, [onContinue]);

  return (
    <div className={styles.congrats}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        За тестирование мини-аппа вы заслужили бонус!
      </motion.h2>
    </div>
);
}
