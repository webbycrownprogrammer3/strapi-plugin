'use strict';

const routes = require('./routes');
const controllers = require('./controllers');
const middlewares = require("./middlewares");

module.exports = () => ({
  register({ strapi }) {},
  bootstrap({ strapi }) {},
  routes,
  controllers,
  middlewares,
});
