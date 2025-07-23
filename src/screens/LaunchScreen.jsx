import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/LaunchScreen.module.css';
import logo from '../assets/logo.svg';

export default function LaunchScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={styles.launch}>
      <motion.img
        src={logo}
        alt="Logo"
        className={styles.logo}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Hello, Nikita!
      </motion.h1>
    </div>
  );
}
