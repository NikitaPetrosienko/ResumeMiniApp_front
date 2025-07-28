import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import styles from '../styles/BonusCatScreen.module.css';

export default function BonusCatScreen({ onContinue }) {
  const [catUrl, setCatUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const fetchCat = async () => {
    setLoading(true);
    setShowNext(false);
    try {
      const { data } = await axios.get('https://api.thecatapi.com/v1/images/search');
      setCatUrl(data[0].url);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (catUrl) {
      const timer = setTimeout(() => setShowNext(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [catUrl]);

  return (
    <div className={styles.bonus}>
      <h2 className={styles.heading}>Бонус‑контент</h2>

      {}
      {!catUrl && (
        <button
          className={styles.fetchBtn}
          onClick={fetchCat}
          disabled={loading}
        >
          {loading ? 'Загрузка...' : 'Получить награду 🐱'}
        </button>
      )}

      {}
      {catUrl && (
        <motion.img
          src={catUrl}
          alt="Cat"
          className={styles.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      )}

      {}
      {showNext && (
        <button
          className={styles.nextBtn}
          onClick={onContinue}
        >
          Далее
        </button>
      )}
    </div>
  );
}
