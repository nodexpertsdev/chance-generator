import { expect } from 'chai';

import Validate from '../lib/validate.js';

/* eslint-disable  no-undef, prefer-arrow-callback*/

describe('Validate module tests ', function () {
  describe('Failure cases ', function () {
    it('Missing param', function () {
      const validate = Validate.validateField();
      expect(validate.flag).to.be.false;
      expect(validate.message).have.string('Please specify a Chance function field in first parameter of generate function.');
    });
    it('Invalid param', function () {
      const validate = Validate.validateField('int eger');
      expect(validate.flag).to.be.false;
      expect(validate.message).have.string('Please remove spaces from Chance function field.');
    });
  });
  describe('Success cases ', function () {
    it('Valid param', function () {
      const validate = Validate.validateField('integer');
      expect(validate.flag).to.be.true;
    });
  });
});
