'use client';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './weather.module.scss';
import LeftSection from './leftSection';
import RightSection from './rightSection';
import { card, variants } from '@/helpers/animation';

const WeatherSection = ({ weather, city }) => {
  return (
    <AnimatePresence>
      <motion.div variants={variants} initial="hidden" animate="show">
        <motion.div variants={card} className={`${styles.weather} row`}>
          {weather.length > 0 && (
            <>
              <LeftSection data={weather?.slice(0, 1)} city={city} />
              <RightSection datas={weather?.slice(1)} city={city} />
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WeatherSection;
