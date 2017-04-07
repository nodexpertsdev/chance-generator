/* eslint-disable prefer-arrow-callback*/

Package.describe({
  name: 'nodexpert:chance-generator',
  version: '1.0.1',
  summary: 'Generator for list of random data using Chance',
  git: 'https://github.com/nodexpertsdev/chance-generator',
  documentation: 'README.md'
});

Npm.depends({
  chance: '1.0.6',
  chai: '3.5.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.4');

  api.use(['ecmascript']);

  api.addFiles([
    'chance-generator.js',
    'lib/validate.js',
    'api/dates.js',
    'api/context.js',
    'api/config.js'
  ], 'client');
});

Package.onTest(function (api) {
  const packages = ['ecmascript', 'dispatch:mocha'];
  api.use(packages, 'server');

  api.addFiles([
    'test/context.tests.js',
    'test/dates.tests.js',
    'test/validate.tests.js'
  ], 'server');
});
