Package.describe({
  name: '3stack:prototype-string',
  version: '0.0.2',
  summary: 'Helper functions to extend built-in type String',
  git: 'https://github.com/3stack-software/meteor-prototype-string',
  documentation: 'README.md'
});

Package.onUse(function(api){
  api.addFiles('String.prototype.js')
});
