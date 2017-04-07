import Validate from './lib/validate.js';
import Context from './api/context.js';
import Config from './api/config.js';

const Chance = require('chance');

const ChanceGenerator = {};

ChanceGenerator.generate = function (field, times, params) {
  try {
    const validate = Validate.validateField(field);
    if (!validate.flag) {
      throw new Meteor.Error('chance-syntax', validate.message);
    }
    if (isNaN(times) && !(times === undefined)) {
      return 'Please enter valid number.';
    }
    if ((typeof params !== 'object') && (params !== undefined)) {
      return 'Please enter valid object.';
    }
    const chanceResponseList = [];
    times = times || 1;
    params = params || {};
    if (field === 'date' && params.reference_date) {
      Config.setCustomeDateFlag(true);
    }
    for (let i = 0; i < times; i++) {
      let chanceResponse;
      if (Config.getCustomeDateFlag()) {
        chanceResponse = Context.generateCustomDate(field, times, params, i);
      } else {
        chanceResponse = new Chance()[field](params);
      }
      chanceResponseList.push(chanceResponse);
    }
    return (times === 1) ? chanceResponseList[0] : chanceResponseList;
  } catch (e) {
    return e;
  }
};
export default ChanceGenerator;
this.ChanceGenerator = ChanceGenerator;
