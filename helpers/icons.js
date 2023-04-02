import {
  BsSun,
  BsCloudy,
  BsClouds,
  BsCloudRain,
  BsCloudRainHeavy,
  BsCloudSnow,
  BsUmbrella,
  BsCompass,
} from 'react-icons/bs';
import { RiThunderstormsLine, RiMistFill } from 'react-icons/ri';
import { TbWind } from 'react-icons/tb';

const getWeatherIcon = (iconName, left) => {
  if (iconName === '01d') {
    return <BsSun size={left ? 88 : 48} color="var(--second-color)" />;
  } else if (iconName === '02d') {
    return <BsCloudy size={left ? 88 : 48} color="var(--second-color)" />;
  } else if (iconName === '03d' || iconName === '04d') {
    return <BsClouds size={left ? 88 : 48} color="var(--second-color)" />;
  } else if (iconName === '09d') {
    return <BsCloudRain size={left ? 88 : 48} color="var(--second-color)" />;
  } else if (iconName === '10d') {
    return (
      <BsCloudRainHeavy size={left ? 88 : 48} color="var(--second-color)" />
    );
  } else if (iconName === '11d') {
    return (
      <RiThunderstormsLine size={left ? 88 : 48} color="var(--second-color)" />
    );
  } else if (iconName === '13d') {
    return <BsCloudSnow size={left ? 88 : 48} color="var(--second-color)" />;
  } else if (iconName === '50d') {
    return <RiMistFill size={left ? 88 : 48} color="var(--second-color)" />;
  } else if (iconName === 'rain') {
    return <BsUmbrella size={20} color="var(--main-text-dull)" />;
  } else if (iconName === 'wind') {
    return <TbWind size={20} color="var(--main-text-dull)" />;
  } else if (iconName === 'windDir') {
    return <BsCompass size={20} color="var(--main-text-dull)" />;
  }
};

export { getWeatherIcon };
