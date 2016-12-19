import Config from './config.js';
import './dates.js';

let Context = {};

Context.generateCustomDate = (field, times, params, index) => {
  Config.setTimeInterval(params.time_interval);
  Config.setTimeUnit(params.time_unit);

  let date = new Date(params.reference_date);

  if ( Object.prototype.toString.call(date) === "[object Date]" ) {
    if ( isNaN( date.getTime() ) ) {
      return 'Invalid Date';
    }
    else {
      let timeInterval = Config.getTimeInterval();
      timeInterval = timeInterval.replace(/ /g,'');
      let type = Config.getTimeUnit();
      let time = parseInt(timeInterval) * index;
      switch(type) {
      case 'seconds':
          return date.addSeconds(time);
          break;
      case 'minutes':
          return date.addMinutes(time);
          break;
      case 'hours':
          return date.addHours(time);
          break;
      case 'days':
          return date.addDays(time);
          break;
      case 'weeks':
          return date.addWeeks(time);
          break;
      case 'months':
          return date.addMonths(time);
          break;
      case 'years':
          return date.addYears(time);
          break;
      default:
          return date.addDays(1);
      }
    }
  }
  else {
    return 'Invalid Date'
  }
};

export default Context;
