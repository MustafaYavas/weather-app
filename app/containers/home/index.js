import Input from '@/app/components/input';
import WeatherSection from '@/app/components/weather';
import React from 'react';

const HomeContainer = ({ weather = [], city = [] }) => {
  return (
    <div>
      <Input />
      {weather && <WeatherSection weather={weather} city={city} />}
    </div>
  );
};

export default HomeContainer;
