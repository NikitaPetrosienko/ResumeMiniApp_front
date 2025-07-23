import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import styles from '../styles/FeedbackScreen.module.css';

export default function FeedbackScreen({ onFinish, onBack }) {
  const [rating, setRating] = useState(0);

  return (
    <div className={styles.feedback}>
      <h2 className={styles.heading}>Оцените мини‑апп</h2>

      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((value) => (
          <motion.div
            key={value}
            className={styles.starWrapper}
            whileTap={{ scale: 0.9 }}
            onClick={() => setRating(value)}
          >
            <FaStar
              size={32}
              className={rating >= value ? styles.activeStar : styles.inactiveStar}
            />
          </motion.div>
        ))}
      </div>

      <textarea
        className={styles.comment}
        placeholder="Комментарий (необязательно)"
      />

      <div className={styles.buttons}>
        <button className={styles.backBtn} onClick={onBack}>
          Назад
        </button>
        <button
          className={styles.finishBtn}
          onClick={() => onFinish(rating)}
          disabled={rating === 0}
        >
          Завершить
        </button>
      </div>
    </div>
  );
}
