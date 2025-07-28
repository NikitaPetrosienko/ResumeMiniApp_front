import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import LaunchScreen    from './screens/LaunchScreen';
import IntroScreen     from './screens/IntroScreen';
import AboutMeScreen   from './screens/AboutMeScreen';
import MainScreen      from './screens/MainScreen';
import CongratsScreen  from './screens/CongratsScreen';
import BonusCatScreen  from './screens/BonusCatScreen';
import FeedbackScreen  from './screens/FeedbackScreen';

export default function App() {
  const [stage, setStage] = useState('launch');

 
  useEffect(() => {
    if (stage === 'launch') {
      const t = setTimeout(() => setStage('intro'), 2000);
      return () => clearTimeout(t);
    }
  }, [stage]);

  const fade = { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } };

  return (
    <AnimatePresence exitBeforeEnter>
      {stage === 'launch' && (
        <motion.div key="launch" variants={fade} initial="enter" animate="center" exit="exit">
          <LaunchScreen onFinish={() => setStage('intro')} />
        </motion.div>
      )}

      {stage === 'intro' && (
        <motion.div key="intro" variants={fade} initial="enter" animate="center" exit="exit">
          <IntroScreen onContinue={() => setStage('about')} />
        </motion.div>
      )}

      {stage === 'about' && (
        <motion.div key="about" variants={fade} initial="enter" animate="center" exit="exit">
          <AboutMeScreen onContinue={() => setStage('main')} />
        </motion.div>
      )}

      {stage === 'main' && (
        <motion.div key="main" variants={fade} initial="enter" animate="center" exit="exit">
          <MainScreen onNext={() => setStage('congrats')} onBack={() => setStage('about')} />
        </motion.div>
      )}

      {stage === 'congrats' && (
        <motion.div key="congrats" variants={fade} initial="enter" animate="center" exit="exit">
          <CongratsScreen onContinue={() => setStage('bonus')} />
        </motion.div>
      )}

      {stage === 'bonus' && (
        <motion.div key="bonus" variants={fade} initial="enter" animate="center" exit="exit">
          <BonusCatScreen onContinue={() => setStage('feedback')} />
        </motion.div>
      )}

      {stage === 'feedback' && (
        <motion.div key="feedback" variants={fade} initial="enter" animate="center" exit="exit">
          <FeedbackScreen onBack={() => setStage('bonus')} onFinish={() => window.Telegram.WebApp.close()} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
