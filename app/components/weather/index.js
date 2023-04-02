import styles from './weather.module.scss';
import LeftSection from './leftSection';
import RightSection from './rightSection';

const WeatherSection = ({ weather, city }) => {
  return (
    <div className={`${styles.weather} row`}>
      <LeftSection data={weather?.slice(0, 1)} city={city} />
      <RightSection datas={weather?.slice(1)} city={city} />
      {/* {searchResults?.map((data) => {
        if (data.dt_txt.includes('12:00:00')) {
          const day = moment(moment.unix(data.dt)._d).format('dddd');
          const hour = moment(moment.unix(data.dt)._d).format('hh:hh');
          return (
            <div key={data.dt} className="col-12 col-md-2">
              {data.dt_txt}
            </div>
          );
        }
      })} */}
    </div>
  );
};

export default WeatherSection;
