import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import styles from '../styles/FeedbackScreen.module.css';

export default function FeedbackScreen({ onFinish, onBack }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  console.log('initData:', initData);

  const submitFeedback = async () => {
    const tg = window.Telegram.WebApp;
    const initData = tg?.initData || tg?.initDataUnsafe;

    setSubmitting(true);
    try {
      await axios.post('https://resumeminiapp-backend.onrender.com/feedback', {
        rating,
        comment,
        initData,
      });

      tg.close(); // Закрытие мини‑аппа
    } catch (err) {
      console.error('Ошибка при отправке отзыва:', err);
      alert('Не удалось отправить отзыв');
    } finally {
      setSubmitting(false);
    }
  };

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
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Комментарий (необязательно)"
      />

      <div className={styles.buttons}>
        <button className={styles.backBtn} onClick={onBack} disabled={submitting}>
          Назад
        </button>
        <button
          className={styles.finishBtn}
          onClick={submitFeedback}
          disabled={rating === 0 || submitting}
        >
          Завершить
        </button>
      </div>
    </div>
  );
}
