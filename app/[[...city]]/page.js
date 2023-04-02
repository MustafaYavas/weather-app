import React from 'react';

import HomeContainer from '../containers/home';
import { getWeatherData } from '../services/city';

const HomePage = async ({ searchParams }) => {
  let weatherInfo;
  let cityInfo;

  if (searchParams?.q?.length > 0) {
    const datas = await getWeatherData(searchParams.q);
    weatherInfo = datas?.weatherInfo;
    cityInfo = datas?.cityInfo;
  }

  return (
    <div>
      <HomeContainer weather={weatherInfo} city={cityInfo} />
    </div>
  );
};

export default HomePage;
