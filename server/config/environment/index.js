'use strict';

var path = require('path');
var _ = require('lodash');

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV || 'local',

  // Root path of server
  appRoot: path.normalize(__dirname + '/../../../client'),

  baseApiRoute: '/api',

  // Server port
  port: process.env.HAPI_PORT || 9000,

  // Server ip
  ip: process.env.HAPI_IP || '127.0.0.1',

};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {});
