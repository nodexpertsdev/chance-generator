import { expect } from 'chai';

import '../api/dates.js';

/* eslint-disable  no-undef, prefer-arrow-callback*/

const date = new Date();

describe('Dates module testing ', function () {
  describe('Seconds ', function () {
    describe('Failure cases ', function () {
      it('Missing param', function () {
        const obj = date.addSeconds();
        expect(obj).have.string('Please insert value');
      });
      it('Invalid param', function () {
        const obj = date.addSeconds('abc');
        expect(obj).have.string('Please insert number');
      });
    });
    describe('Success cases ', function () {
      it(' Valid param', function () {
        const obj = date.addSeconds('10');
        expect(typeof obj).have.string('object');
      });
    });
  });
  describe('Minutes ', function () {
    describe('Failure cases ', function () {
      it('Missing param', function () {
        const obj = date.addMinutes();
        expect(obj).have.string('Please insert value');
      });
      it('Invalid param', function () {
        const obj = date.addMinutes('abc');
        expect(obj).have.string('Please insert number');
      });
    });
    describe('Success cases ', function () {
      it(' Valid param', function () {
        const obj = date.addMinutes('10');
        expect(typeof obj).have.string('object');
      });
    });
  });
  describe('Hours ', function () {
    describe('Failure cases ', function () {
      it('Missing param', function () {
        const obj = date.addHours();
        expect(obj).have.string('Please insert value');
      });
      it('Invalid param', function () {
        const obj = date.addHours('abc');
        expect(obj).have.string('Please insert number');
      });
    });
    describe('Success cases ', function () {
      it('Valid param', function () {
        const obj = date.addHours('10');
        expect(typeof obj).have.string('object');
      });
    });
  });
  describe('Days ', function () {
    describe('Failure cases ', function () {
      it('Missing param', function () {
        const obj = date.addDays();
        expect(obj).have.string('Please insert value');
      });
      it('Invalid param', function () {
        const obj = date.addDays('abc');
        expect(obj).have.string('Please insert number');
      });
    });
    describe('Success cases ', function () {
      it('Valid param', function () {
        const obj = date.addDays('10');
        expect(typeof obj).have.string('object');
      });
    });
  });
  describe('Weeks ', function () {
    describe('Failure cases ', function () {
      it('Missing param', function () {
        const obj = date.addWeeks();
        expect(obj).have.string('Please insert value');
      });
      it('Invalid param', function () {
        const obj = date.addWeeks('abc');
        expect(obj).have.string('Please insert number');
      });
    });
    describe('Success cases ', function () {
      it(' Valid param', function () {
        const obj = date.addWeeks('10');
        expect(typeof obj).have.string('object');
      });
    });
  });
  describe('Months ', function () {
    describe('Failure cases ', function () {
      it('Missing param', function () {
        const obj = date.addMonths();
        expect(obj).have.string('Please insert value');
      });
      it(' Invalid param', function () {
        const obj = date.addMonths('abc');
        expect(obj).have.string('Please insert number');
      });
    });
    describe('Success cases ', function () {
      it(' Valid param', function () {
        const obj = date.addMonths('10');
        expect(typeof obj).have.string('object');
      });
    });
  });
  describe('Years ', function () {
    describe('Failure cases ', function () {
      it('Missing param', function () {
        const obj = date.addYears();
        expect(obj).have.string('Please insert value');
      });
      it('Invalid param', function () {
        const obj = date.addYears('abc');
        expect(obj).have.string('Please insert number');
      });
    });
    describe('Success cases ', function () {
      it(' Valid param', function () {
        const obj = date.addYears('10');
        expect(typeof obj).have.string('object');
      });
    });
  });
});
