'use strict';

const routes = require('./routes');
const controllers = require('./controllers');

module.exports = () => ({
  register({ strapi }) {},
  bootstrap({ strapi }) {},
  routes,
  controllers,
});
