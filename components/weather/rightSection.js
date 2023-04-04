import { getTime } from '@/helpers/timeFunctions';
import { getWeatherIcon } from '@/helpers/icons';
import styles from './weather.module.scss';

const RightSection = ({ datas }) => {
  return (
    <>
      {datas?.map((data, i) => (
        <div
          key={data.dt}
          className={`col-3 col-md-2 p-0 ${styles.right}`}
          style={{
            backgroundColor: i % 2 === 0 ? 'var(--main-color2)' : '',
          }}
        >
          <div
            className={styles['right-header']}
            style={{
              backgroundColor:
                i % 2 === 0 ? 'var(--main-color)' : 'var(--main-color-dull2)',
            }}
          >
            <p className="m-0 py-2 text-center">
              {getTime(data.dt_txt).dayName}
            </p>
          </div>

          <div className={styles['right-body']} style={{ margin: '2rem 0' }}>
            {getWeatherIcon(data.weather[0].icon, false)}

            <span className={styles['degree-first']}>
              {Math.round(data.main.temp)} &#8451;
            </span>

            <span className={styles['degree-second']}>
              {Math.floor(data.main.feels_like)} &#8451;
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default RightSection;
