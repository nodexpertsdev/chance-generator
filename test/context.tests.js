import { expect } from 'chai';

import ChanceGenerator from '../chance-generator.js';

/* eslint-disable  no-undef , prefer-arrow-callback*/

const field = 'date';

describe('Context module testing ', function () {
  describe('Times', function () {
    describe('Failure cases ', function () {
      it('Invalid param', function () {
        const retVal = ChanceGenerator.generate(field, 'ab');
        expect(retVal).to.have.string('Please enter valid number.');
      });
    });

    describe('Success cases ', function () {
      it('Missing param', function () {
        const retVal = ChanceGenerator.generate(field);
        expect(typeof retVal).have.string('object');
      });
      it('Valid params', function () {
        const retVal = ChanceGenerator.generate(field, 1);
        expect(typeof retVal).have.string('object');
      });
    });
  });

  describe('Params', function () {
    describe('Failure cases ', function () {
      it('Invalid param', function () {
        const retVal = ChanceGenerator.generate(field, 1, 'ab');
        expect(retVal).to.have.string('Please enter valid object.');
      });
    });

    describe('Success cases ', function () {
      it('Missing param', function () {
        const retVal = ChanceGenerator.generate(field, 1);
        expect(typeof retVal).have.string('object');
      });
      it('Valid params', function () {
        const retVal = ChanceGenerator.generate(field, 1, {});
        expect(typeof retVal).have.string('object');
      });
    });
  });
});
