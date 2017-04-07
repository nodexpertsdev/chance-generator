import Config from './config.js';
import './dates.js';


const Context = {};

Context.generateCustomDate = (field, times, params, index) => {
  if (isNaN(times)) return 'Second argument should be a number.';
  if (!(typeof params === 'object')) return 'Params should be of object type';
  Config.setTimeInterval(params.time_interval);
  Config.setTimeUnit(params.time_unit);
  const date = new Date(params.reference_date);
  if (Object.prototype.toString.call(date) === '[object Date]') {
    if (isNaN(date.getTime())) return 'Invalid Date';
    let timeInterval = Config.getTimeInterval();
    timeInterval = timeInterval.replace(/ /g, '');
    const type = Config.getTimeUnit();
    const time = parseInt(timeInterval, 10) * index;
    switch (type) {
      case 'seconds':
        return date.addSeconds(time);
      case 'minutes':
        return date.addMinutes(time);
      case 'hours':
        return date.addHours(time);
      case 'days':
        return date.addDays(time);
      case 'weeks':
        return date.addWeeks(time);
      case 'months':
        return date.addMonths(time);
      case 'years':
        return date.addYears(time);
      default:
        return date.addDays(1);
    }
  } else {
    return 'Invalid Date';
  }
};

export default Context;
