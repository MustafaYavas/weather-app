import styles from './weather.module.scss';
import LeftSection from './leftSection';
import RightSection from './rightSection';

const WeatherSection = ({ weather, city }) => {
  return (
    <div className={`${styles.weather} row`}>
      <LeftSection data={weather?.slice(0, 1)} city={city} />
      <RightSection datas={weather?.slice(1)} city={city} />
    </div>
  );
};

export default WeatherSection;
