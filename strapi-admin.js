'use strict';

/**
 * Strapi plugin admin entrypoint.
 * Strapi loads this file to register the plugin in the Admin panel.
 */
// For webpack bundle that sets `module.exports.default = plugin`
// we need to export the actual default export so Strapi gets the plugin object,
// not the wrapper module.
const admin = require('./dist/admin');
module.exports = admin.default || admin;

