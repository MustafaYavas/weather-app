import WeatherSection from '@/app/components/weather';

const CityContainer = ({ weather = [], city = [] }) => {
  return (
    <div>
      {/* <Input /> */}
      {weather && <WeatherSection weather={weather} city={city} />}
    </div>
  );
};

export default CityContainer;
