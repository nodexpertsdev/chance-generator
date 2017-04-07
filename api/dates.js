const noValue = 'Please insert value';
const noNumber = 'Please insert number';

/* eslint-disable no-extend-native*/

Date.prototype.addSeconds = function (seconds) {
  if (!seconds) return noValue;
  if (isNaN(seconds)) return noNumber;
  this.setSeconds(this.getSeconds() + seconds);
  return this;
};

Date.prototype.addMinutes = function (minutes) {
  if (!minutes) return noValue;
  if (isNaN(minutes)) return noNumber;
  this.setMinutes(this.getMinutes() + minutes);
  return this;
};

Date.prototype.addHours = function (hours) {
  if (!hours) return noValue;
  if (isNaN(hours)) return noNumber;
  this.setHours(this.getHours() + hours);
  return this;
};

Date.prototype.addDays = function (days) {
  if (!days) return noValue;
  if (isNaN(days)) return noNumber;
  this.setDate(this.getDate() + days);
  return this;
};

Date.prototype.addWeeks = function (weeks) {
  if (!weeks) return noValue;
  if (isNaN(weeks)) return noNumber;
  this.addDays(weeks * 7);
  return this;
};

Date.prototype.addMonths = function (months) {
  if (!months) return noValue;
  if (isNaN(months)) return noNumber;
  const dt = this.getDate();

  this.setMonth(this.getMonth() + months);
  const currDt = this.getDate();

  if (dt !== currDt) {
    this.addDays(-currDt);
  }

  return this;
};

Date.prototype.addYears = function (years) {
  if (!years) return noValue;
  if (isNaN(years)) return noNumber;

  const dt = this.getDate();
  this.setFullYear(this.getFullYear() + years);

  const currDt = this.getDate();

  if (dt !== currDt) {
    this.addDays(-currDt);
  }

  return this;
};
