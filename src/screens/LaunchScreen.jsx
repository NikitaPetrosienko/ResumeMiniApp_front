import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import styles from '../styles/LaunchScreen.module.css';
import logo from '../assets/logo.svg';
import { API } from '../lib/api';

export default function LaunchScreen({ onFinish }) {
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    const initData = tg.initData;
    if (!initData) return;

    axios
      .get(`${API}/user`, { params: { initData } })
      .then(res => setFirstName(res.data.firstName))
      .catch(() => setFirstName('друг'))
      .finally(() => {
        setTimeout(onFinish, 1000);
      });
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
        {`Приветствую, ${firstName || 'гость'}!`}
      </motion.h1>
    </div>
  );
}
