import { getWeatherIcon } from '@/helpers/icons';
import styles from './weather.module.scss';
import { getTime } from '@/helpers/timeFunctions';
import { getDirectionName } from '@/helpers/directionFunction';

const LeftSection = ({ data, city }) => {
  const time = getTime(data[0].dt_txt);

  return (
    <div className={`col-12 col-md-4 ${styles.left}`}>
      <div className={styles['left-header']}>
        <p className="m-0 py-2">{time.dayName}</p>
        <p className="m-0">
          <span>{time.day}</span>
          <span className="ms-1">{time.month}</span>
        </p>
      </div>

      <div className={styles['left-body']}>
        <p className={styles.title}>{city.name}</p>

        <div
          className="d-flex justify-content-between align-items-center"
          style={{ margin: '2rem 0' }}
        >
          <span className={styles.degree}>
            {Math.round(data[0].main.temp)} &#8451;
          </span>
          {getWeatherIcon(data[0].weather[0].icon, true)}
        </div>

        <div
          className="d-flex justify-content-start align-items-center row"
          style={{ color: 'var(--main-text-dull)' }}
        >
          <p
            className="d-flex justify-content-start align-items-center col-4"
            title="Rain"
          >
            <span className="me-2">{getWeatherIcon('rain', false)}</span>
            <span>{data[0]?.rain ? `${data[0].rain['3h'] * 100}%` : '0%'}</span>
          </p>

          <p
            className="d-flex justify-content-start align-items-center col-4"
            style={{ whiteSpace: 'nowrap' }}
            title="Wind"
          >
            <span className="me-2">{getWeatherIcon('wind', false)}</span>
            <span>{Math.round(data[0].wind.speed)}km/h</span>
          </p>

          <p
            className="d-flex justify-content-start align-items-center col-4"
            title="Wind direction"
          >
            <span className="me-2">{getWeatherIcon('windDir', false)}</span>
            <span>{getDirectionName(data[0].wind.deg)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
