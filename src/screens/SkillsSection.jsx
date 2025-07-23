import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaVuejs } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiFigma, SiAdobephotoshop } from 'react-icons/si';
import swiftIcon from '../assets/swift.svg';
import styles from '../styles/SkillsSection.module.css';

const skills = [
  { name: 'Swift', icon: <img src={swiftIcon} alt="Swift" width={48} /> },
  { name: 'HTML', icon: <FaHtml5 size={48} color="var(--yellow)" /> },
  { name: 'CSS', icon: <FaCss3Alt size={48} color="var(--orange)" /> },
  { name: 'JavaScript', icon: <DiJavascript1 size={48} color="var(--blue)" /> },
  { name: 'Vue', icon: <FaVuejs size={48} color="var(--green)" /> },
  { name: 'React', icon: <FaReact size={48} color="var(--gray-2)" /> },
  { name: 'Figma', icon: <SiFigma size={48} color="var(--dark-blue)" /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop size={48} color="var(--blue)" /> }, 
];

export default function SkillsSection() {
  return (
    <section className={styles.skills}>
      <h3 className={styles.heading}>Навыки</h3>
      <div className={styles.grid}>
        {skills.map(({ name, icon }) => (
          <motion.div
            key={name}
            className={styles.item}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {icon}
            <span className={styles.label}>{name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
