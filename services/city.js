const BASE_URL = 'https://api.openweathermap.org';
const API = `appid=${process.env.API_KEY}`;

const getWeatherData = async (city) => {
  try {
    const locResult = await fetch(
      `${BASE_URL}/geo/1.0/direct?q=${city}&limit=1&${API}`
    );

    if (!locResult.ok)
      throw new Error('An unknown error has been occured. Please try again!');

    const locDatas = await locResult.json();
    const { lat, lon } = locDatas[0];

    const weatherResult = await fetch(
      `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&${API}&units=metric`
    );

    if (!weatherResult.ok)
      throw new Error('An unknown error has been occured. Please try again!');

    const weatherDatas = await weatherResult.json();

    let weatherInfo = [];
    weatherDatas.list?.map((data) => {
      if (data.dt_txt.includes('12:00:00')) weatherInfo.push(data);
    });

    return { weatherInfo, cityInfo: weatherDatas.city };
  } catch (error) {
    console.log(error);
  }
};

export { getWeatherData };
