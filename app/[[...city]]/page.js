import React from 'react';

import HomeContainer from '../containers/home';
import { getWeatherData } from '../services/city';

const HomePage = async ({ params }) => {
  let weatherInfo;
  let cityInfo;

  if (params?.city?.length > 0) {
    const datas = await getWeatherData(params.city);
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
