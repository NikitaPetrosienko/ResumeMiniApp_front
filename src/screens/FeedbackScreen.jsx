import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import styles from '../styles/FeedbackScreen.module.css';
import { API } from '../lib/api';

export default function FeedbackScreen({ onBack }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const submitFeedback = async () => {
    setSubmitting(true);
    try {
      const resp = await axios.post(`${API}/feedback`, { rating, comment });
      if (resp.data.status === 'ok') {
        window.Telegram.WebApp.sendData(JSON.stringify({ rating, comment }));
        window.Telegram.WebApp.close();
      } else {
        throw new Error('Сервер вернул ошибку');
      }
    } catch (err) {
      console.error(err);
      alert('Не удалось отправить отзыв');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.feedback}>
      <h2 className={styles.heading}>Оцените мини‑апп</h2>

      <div className={styles.stars}>
        {[1,2,3,4,5].map(value => (
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
        onChange={e => setComment(e.target.value)}
        placeholder="Комментарий (необязательно)"
      />

      <div className={styles.buttons}>
        <button className={styles.backBtn} onClick={onBack} disabled={submitting}>
          Назад
        </button>
        <button
          className={styles.finishBtn}
          onClick={submitFeedback}
          disabled={rating===0||submitting}
        >
          Завершить
        </button>
      </div>
    </div>
  );
}
