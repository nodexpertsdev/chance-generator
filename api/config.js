const Config = {
  customDateFlag: false,
  timeInterval: '',
  timeUnit: ''
};

Config.setCustomeDateFlag = function (customDateFlag) {
  this.customDateFlag = customDateFlag;
};

Config.getCustomeDateFlag = function () {
  return this.customDateFlag;
};

Config.setTimeInterval = function (timeInterval) {
  this.timeInterval = timeInterval || '1';
};

Config.getTimeInterval = function () {
  return this.timeInterval;
};

Config.setTimeUnit = function (timeUnit) {
  this.timeUnit = timeUnit || 'days';
};

Config.getTimeUnit = function () {
  return this.timeUnit;
};

export default Config;
