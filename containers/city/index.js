import WeatherSection from '@/components/weather';

const CityContainer = ({ weather = [], city = [] }) => {
  return (
    <div>{weather && <WeatherSection weather={weather} city={city} />}</div>
  );
};

export default CityContainer;
