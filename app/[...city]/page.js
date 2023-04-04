import CityContainer from '../containers/city';
import { getWeatherData } from '../services/city';
import { notFound } from 'next/navigation';

const CityPage = async ({ params }) => {
  let weatherInfo;
  let cityInfo;

  if (params?.city.length === 1) {
    const datas = await getWeatherData(params.city[0]);
    weatherInfo = datas?.weatherInfo;
    cityInfo = datas?.cityInfo;
  } else {
    notFound();
  }

  return <CityContainer weather={weatherInfo} city={cityInfo} />;
};

export default CityPage;
