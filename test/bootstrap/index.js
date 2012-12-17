/*!
 * Attach chai to global should
 */

global.chai = require('chai');
global.should = global.chai.should();

/*!
 * Chai Plugins
 */

//global.chai.use(require('chai-spies'));
//global.chai.use(require('chai-http'));

/*!
 * Import project
 */

global.merge = require('../..');

/*!
 * Helper to load internals for cov unit tests
 */

function req (name) {
  return process.env.merge_COV
    ? require('../../lib-cov/merge/' + name)
    : require('../../lib/merge/' + name);
}

/*!
 * Load unexposed modules for unit tests
 */

global.__merge = {};
