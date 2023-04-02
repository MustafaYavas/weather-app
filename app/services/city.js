const getWeatherData = async (city) => {
  try {
    const locResult = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.API_KEY}`
    );

    if (!locResult.ok)
      throw new Error('An unknown error has been occured. Please try again!');
    const locDatas = await locResult.json();
    const { lat, lon } = locDatas[0];

    const weatherResult = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`
    );
    if (!weatherResult.ok)
      throw new Error('An unknown error has been occured. Please try again!');
    const weatherDatas = await weatherResult.json();

    let weatherInfo = [];
    weatherDatas.list.map((data) => {
      if (data.dt_txt.includes('12:00:00')) {
        weatherInfo.push(data);
      }
    });
    let cityInfo = weatherDatas.city;

    return { weatherInfo, cityInfo };
  } catch (error) {}
};

export { getWeatherData };
