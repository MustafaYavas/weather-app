const BASE_URL = 'https://api.openweathermap.org';
const API = `appid=${process.env.API_KEY}`;

const getWeatherData = async (city) => {
  try {
    const locResult = await fetch(
      `${BASE_URL}/geo/1.0/direct?q=${city}&limit=1&${API}`
    );
    const locDatas = await locResult.json();

    if (locDatas.length === 0) throw new Error('City not found!');

    const weatherResult = await fetch(
      `${BASE_URL}/data/2.5/forecast?lat=${locDatas[0].lat}&lon=${locDatas[0].lon}&${API}&units=metric`
    );

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
