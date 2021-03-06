/**
 * Files injected into index.html by gulp-inject
 * used by tasks inject & watch
 */

module.exports = [
  'client/app.js',
  'client/lib/**/*.js',
  'client/components/**/*.js', 'client/components/**/*.spec.js',
  'client/directives/**/*.js', '!client/directives/**/*.spec.js',
  'client/filters/**/*.js', '!client/filters/**/*.spec.js',
  'client/resources/**/*.js', '!client/resources/**/*.spec.js',
  'client/services/**/*.js', '!client/services/**/*.spec.js',
  'client/views/**/*.js', '!client/views/**/*.spec.js', '!client/views/**/*.e2e.js',
  'client/modals/**/*.js', '!client/modals/**/*.spec.js', '!client/modals/**/*.e2e.js',
  
  'client/styles/css/*.css'
  // 'client/styles/css/app.css',
  // 'client/styles/css/Bootstrap_GISTIC.css'
];