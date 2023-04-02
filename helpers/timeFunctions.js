import moment from 'moment';

const getTime = (time) => {
  const check = moment(time, 'YYYY/MM/DD');

  const month = check.format('MMMM');
  const day = check.format('D');
  const dayName = check.format('dddd');

  return { dayName, day, month };
};

export { getTime };
