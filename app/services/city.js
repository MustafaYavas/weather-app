const getWeatherData = async (city) => {
  try {
    const locResult = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.API_KEY}`
    );
    const locDatas = await locResult.json();
    const { lat, lon } = locDatas[0];

    const weatherResult = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`
    );
    const weatherDatas = await weatherResult.json();

    let weatherInfo = [];
    weatherDatas.list.map((data) => {
      if (data.dt_txt.includes('12:00:00')) {
        // const day = moment(moment.unix(data.dt)._d).format('dddd');
        // const hour = moment(moment.unix(data.dt)._d).format('hh:hh');
        weatherInfo.push(data);
      }
    });
    let cityInfo = weatherDatas.city;

    return { weatherInfo, cityInfo };
  } catch (error) {
    throw new Error(error);
  }
};

export { getWeatherData };
