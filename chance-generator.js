import Validate from './lib/validate.js';
import Context from './api/context.js';
import Config from './api/config.js';

let Chance = require('chance');
let ChanceGenerator = {};

ChanceGenerator.generate = function(field, times, params) {
  try {
    let chanceResponseList = [];
    let validate = Validate.validateField(field);
    if(!validate.flag) {
      throw new Meteor.Error("chance-syntax", validate.message);
    }
    times = (times) ? times : 1;
    params = (params) ? params : {};
    if(field === "date" && params.reference_date) {
      Config.setCustomeDateFlag(true);
    }
    for(let i = 0; i < times; i++) {
      let chanceResponse;
      if(Config.getCustomeDateFlag()) {
        chanceResponse = Context.generateCustomDate(field, times, params, i);
      } else {
        chanceResponse = Chance()[field](params);
      }
      chanceResponseList.push(chanceResponse);
    }
    return (times === 1) ? chanceResponseList[0] : chanceResponseList;
  } catch (e) {
    console.log(e);
  }
}

this.ChanceGenerator = ChanceGenerator;
