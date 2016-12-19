Package.describe({
  name: 'nodexpert:chance-generator',
  version: '1.0.0',
  summary: 'Generator for list of random data using Chance',
  git: 'https://github.com/nodexpertsdev/chance-generator',
  documentation: 'README.md'
});

Npm.depends({
  chance: '1.0.4'
});

Package.onUse(function(api) {
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
